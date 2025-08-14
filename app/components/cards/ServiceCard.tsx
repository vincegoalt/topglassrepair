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
    default: 'card card-hover group',
    compact: 'card card-hover h-full group',
    featured: 'feature-card group'
  }[variant];

  const imageHeight = {
    default: 'h-56',
    compact: 'h-40',
    featured: 'h-72'
  }[variant];

  return (
    <Link href={href} className={cardStyles}>
      {/* Image Container with overlay effect */}
      <div className={`relative ${imageHeight} overflow-hidden`}>
        <Image
          src={service.imageUrl}
          alt={service.name[lang]}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Service icon or badge */}
        <div className="absolute top-4 right-4 glass p-3 rounded-full">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        
        {variant === 'featured' && (
          <div className="absolute top-4 left-4 badge badge-accent">
            {lang === 'en' ? 'Most Popular' : 'Más Popular'}
          </div>
        )}
      </div>

      {/* Content with enhanced styling */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
          {service.name[lang]}
        </h3>
        
        {variant !== 'compact' && (
          <p className="text-gray-600 mb-4 line-clamp-2">
            {service.description[lang]}
          </p>
        )}

        {/* Features with glass effect (for featured variant) */}
        {variant === 'featured' && service.features && (
          <div className="mt-4 space-y-2">
            {service.features[lang].slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                  <svg
                    className="w-3 h-3 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action with arrow animation */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-primary font-semibold flex items-center group-hover:text-accent transition-colors">
            {getTranslation('learnMore', lang)}
            <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          
          {variant === 'featured' && (
            <span className="badge badge-primary">
              {lang === 'en' ? 'Get Quote' : 'Cotización'}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}