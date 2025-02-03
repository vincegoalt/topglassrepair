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
  const servicesPath = lang === 'en' ? '/services' : '/servicios';
  const contactPath = lang === 'en' ? '/contact' : '/contacto';
  const locationInPath = lang === 'en' ? '/in/' : '/en/';

  // Get translations
  const translations = {
    services: lang === 'en' ? 'Services' : 'Servicios',
    serviceAreas: lang === 'en' ? 'Service Areas' : 'Áreas de Servicio',
    contact: lang === 'en' ? 'Contact' : 'Contacto',
    hours: lang === 'en' ? 'Hours' : 'Horario',
    rights: lang === 'en' ? 'All rights reserved' : 'Todos los derechos reservados',
  };

  // Get major cities for the footer
  const majorCities = locations.filter(location => 
    ['Los Angeles', 'Long Beach', 'Glendale', 'Santa Monica', 'Pasadena', 
     'Burbank', 'Beverly Hills', 'West Hollywood', 'Culver City', 'Manhattan Beach',
     'Torrance', 'El Segundo', 'Inglewood', 'Downey', 'Whittier',
     'Pomona', 'West Covina', 'Alhambra', 'Monterey Park', 'South Pasadena'].includes(location.name)
  );

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{CONTACT_INFO.companyName}</h3>
            <address className="not-italic">
              <p className="mb-2">{CONTACT_INFO.address}</p>
              <p className="mb-2">
                Office: <a href={`tel:${CONTACT_INFO.office}`} className="hover:text-accent">{CONTACT_INFO.office}</a>
              </p>
              <p className="mb-2">
                Emergency: <a href={`tel:${CONTACT_INFO.emergency}`} className="hover:text-accent">{CONTACT_INFO.emergency}</a>
              </p>
              <p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent">{CONTACT_INFO.email}</a>
              </p>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">{translations.services}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${lang}${servicesPath}/${lang === 'en' ? service.slug.en : service.slug.es}`}
                    className="hover:text-accent"
                  >
                    {lang === 'en' ? service.name.en : service.name.es}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="col-span-2">
            <h3 className="text-lg font-bold mb-4">{translations.serviceAreas}</h3>
            <div className="grid grid-cols-2 gap-4">
              {majorCities.map((location) => (
                <div key={location.id}>
                  <Link
                    href={`/${lang}${servicesPath}/${defaultServiceSlug}${locationInPath}${lang === 'en' ? location.slug.en : location.slug.es}`}
                    className="hover:text-accent"
                  >
                    {location.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-8 pt-8 border-t border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">{translations.hours}</h3>
              <ul className="space-y-2">
                {Object.entries(CONTACT_INFO.hours).map(([day, hours]) => (
                  <li key={day} className="flex justify-between">
                    <span>{day}</span>
                    <span>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} {CONTACT_INFO.companyName}. {translations.rights}.</p>
        </div>
      </div>
    </footer>
  );
}
