import Link from 'next/link';
import { Language } from '@/app/types';
import { locations } from '@/app/lib/locations';
import { services } from '@/app/lib/services';
import { CONTACT_INFO } from '@/app/lib/config';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  // Get the first service to use for location links
  const defaultService = services[0];
  const defaultServiceSlug = lang === 'en' ? defaultService.slug.en : defaultService.slug.es;

  // Get paths based on language
  const servicesPath = lang === 'en' ? 'services' : 'servicios';
  const contactPath = lang === 'en' ? 'contact' : 'contacto';
  const locationInPath = lang === 'en' ? '/in/' : '/en/';

  // Get translations
  const translations = {
    services: lang === 'en' ? 'Services' : 'Servicios',
    serviceAreas: lang === 'en' ? 'Service Areas' : 'Áreas de Servicio',
    contact: lang === 'en' ? 'Contact' : 'Contacto',
    hours: lang === 'en' ? 'Hours' : 'Horario',
    rights: lang === 'en' ? 'All rights reserved' : 'Todos los derechos reservados',
    office: lang === 'en' ? 'Office' : 'Oficina',
    emergency: lang === 'en' ? 'Emergency' : 'Emergencias',
    email: lang === 'en' ? 'Email' : 'Correo electrónico',
    viewAllServices: lang === 'en' ? 'View all services' : 'Ver todos los servicios',
    viewAllLocations: lang === 'en' ? 'View all service areas' : 'Ver todas las áreas de servicio'
  };

  // Get major cities for the footer
  const majorCities = locations.filter(location => 
    ['Los Angeles', 'Long Beach', 'Glendale', 'Santa Monica', 'Pasadena', 
     'Burbank', 'Beverly Hills', 'West Hollywood', 'Culver City', 'Manhattan Beach',
     'Torrance', 'El Segundo', 'Inglewood', 'Downey', 'Whittier',
     'Pomona', 'West Covina', 'Alhambra', 'Monterey Park', 'South Pasadena'].includes(location.name)
  );

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-white text-gray-700 py-8 sm:py-12 md:py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">{CONTACT_INFO.companyName}</h3>
            <address className="not-italic">
              <p className="mb-2">{CONTACT_INFO.address}</p>
              <p className="mb-2">
                {translations.office}:{' '}
                <a href={`tel:${CONTACT_INFO.office}`} className="text-primary hover:text-primary/80 font-medium transition-colors">{CONTACT_INFO.office}</a>
              </p>
              <p className="mb-2">
                {translations.emergency}:{' '}
                <a href={`tel:${CONTACT_INFO.emergency}`} className="text-accent hover:text-accent/80 font-medium transition-colors">{CONTACT_INFO.emergency}</a>
              </p>
              <p>
                {translations.email}:{' '}
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:text-primary/80 transition-colors">{CONTACT_INFO.email}</a>
              </p>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">{translations.services}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${lang}/${servicesPath}/${lang === 'en' ? service.slug.en : service.slug.es}`}
                    className="text-gray-600 hover:text-primary transition-colors block py-1"
                  >
                    {lang === 'en' ? service.name.en : service.name.es}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">{translations.serviceAreas}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              {majorCities.map((location) => (
                <div key={location.id}>
                  <Link
                    href={`/${lang}/${servicesPath}/${defaultServiceSlug}${locationInPath}${lang === 'en' ? location.slug.en : location.slug.es}`}
                    className="text-gray-600 hover:text-primary transition-colors block py-1"
                  >
                    {location.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{translations.hours}</h3>
              <ul className="space-y-2">
                {Object.entries(CONTACT_INFO.hours).map(([day, hours]) => (
                  <li key={day} className="flex justify-between text-gray-600">
                    <span>{day}</span>
                    <span>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://facebook.com/topglassrepairs" className="text-gray-400 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com/topglassrepairs" className="text-gray-400 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://instagram.com/topglassrepairs" className="text-gray-400 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">© {new Date().getFullYear()} {CONTACT_INFO.companyName}. {translations.rights}.</p>
        </div>
      </div>
    </footer>
  );
}
