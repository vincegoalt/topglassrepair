'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Service, Language } from '@/app/types';
import { getTranslation } from '@/app/utils/languageClient';

interface ServiceCardProps {
  service: Service;
  lang: Language;
  location?: string;
  variant?: 'default' | 'compact' | 'featured';
}

export default function ServiceCard({ 
  service, 
  lang, 
  location,
  variant = 'default' 
}: ServiceCardProps) {
  // Generate the appropriate href based on whether a location is provided
  const href = location
    ? `/${lang}/${lang === 'en' ? 'services' : 'servicios'}/${service.slug[lang]}/in/${location}`
    : `/${lang}/${lang === 'en' ? 'services' : 'servicios'}/${service.slug[lang]}`;

  // Determine card styles based on variant
  const cardStyles = {
    default: 'card card-hover',
    compact: 'card card-hover h-full',
    featured: 'card card-hover border-2 border-primary'
  }[variant];

  const imageHeight = {
    default: 'h-48',
    compact: 'h-32',
    featured: 'h-64'
  }[variant];

  return (
    <Link href={href} className={cardStyles}>
      {/* Image Container */}
      <div className={`relative ${imageHeight}`}>
        <Image
          src={service.imageUrl}
          alt={service.name[lang]}
          fill
          className="object-cover"
          loading="lazy"
        />
        {variant === 'featured' && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            {lang === 'en' ? 'Featured Service' : 'Servicio Destacado'}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          {service.name[lang]}
        </h3>
        
        {variant !== 'compact' && (
          <p className="text-neutral-600 mb-4">
            {service.description[lang]}
          </p>
        )}

        {/* Features (for featured variant) */}
        {variant === 'featured' && service.features && (
          <ul className="mt-4 space-y-2">
            {service.features[lang].slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-neutral-600">
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
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Call to Action */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-primary font-medium">
            {getTranslation('learnMore', lang)} →
          </span>
          
          {variant === 'featured' && (
            <Link
              href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
              className="btn btn-primary text-sm"
            >
              {getTranslation('callToAction', lang)}
            </Link>
          )}
        </div>
      </div>
    </Link>
  );
}
