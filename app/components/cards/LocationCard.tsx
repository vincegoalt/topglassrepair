'use client';

import Link from 'next/link';
import { Location, Language } from '@/app/types';
import { services } from '@/app/lib/services';
import { getTranslation } from '@/app/utils/languageClient';

interface LocationCardProps {
  location: Location;
  lang: Language;
  service?: string;
  variant?: 'default' | 'compact';
}

export default function LocationCard({
  location,
  lang,
  service,
  variant = 'default'
}: LocationCardProps) {
  // Generate the appropriate href based on whether a service is provided
  const locationSlug = location.slug[lang];
  const href = service
    ? `/${lang}/${lang === 'en' ? 'services' : 'servicios'}/${service}/${lang === 'en' ? 'in' : 'en'}/${locationSlug}`
    : lang === 'en'
      ? `/locations/${location.slug.en}`
      : `/es/servicios/reparacion-vidrios-ventanas/en/${location.slug.es}`;

  // Get available services for this location
  const availableServices = services.slice(0, 3); // For demo, showing first 3 services

  return (
    <div className={`
      bg-white rounded-lg shadow-md overflow-hidden
      ${variant === 'compact' ? 'h-full' : ''}
    `}>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          {location.name}
        </h3>

        {variant === 'default' && (
          <>
            <p className="text-neutral-600 mb-4">
              {lang === 'en'
                ? `Professional glass and mirror services in ${location.name}, ${location.state}`
                : `Servicios profesionales de vidrios y espejos en ${location.name}, ${location.state}`}
            </p>

            {/* Available Services */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-neutral-700 mb-2">
                {lang === 'en' ? 'Available Services:' : 'Servicios Disponibles:'}
              </h4>
              <ul className="space-y-1">
                {availableServices.map((service) => (
                  <li 
                    key={service.id}
                    className="text-sm text-neutral-600 flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {service.name[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Call to Action */}
        <div className="mt-4">
          <Link
            href={href}
            className={`
              inline-flex items-center text-primary font-medium
              hover:text-primary/80 transition-colors
              ${variant === 'compact' ? 'text-sm' : ''}
            `}
          >
            {lang === 'en' ? 'View Services' : 'Ver Servicios'}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Service Area Badge */}
        {variant === 'default' && (
          <div className="mt-4 pt-4 border-t border-neutral-100">
            <span className="inline-flex items-center text-xs text-neutral-500">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {lang === 'en'
                ? 'Service Area: Los Angeles County'
                : 'Área de Servicio: Condado de Los Ángeles'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
