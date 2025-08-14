'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Service, Language } from '@/app/types';
import { getTranslation } from '@/app/utils/languageClient';
import { getServiceIcon } from '@/app/components/icons/ServiceIcons';

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
        <div className="absolute top-4 right-4 glass-dark p-4 rounded-2xl backdrop-blur-lg border border-white/20">
          <div className="w-8 h-8 text-white">
            {getServiceIcon(service.slug[lang])}
          </div>
        </div>
        
        {variant === 'featured' && (
          <div className="absolute top-4 left-4 badge badge-accent">
            {lang === 'en' ? 'Most Popular' : 'Más Popular'}
          </div>
        )}
      </div>

      {/* Content with enhanced styling */}
      <div className="p-6 relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-secondary/10 opacity-50" />
        <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-3 text-gradient group-hover:scale-105 transition-transform origin-left">
          {service.name[lang]}
        </h3>
        
        {variant !== 'compact' && (
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {service.description[lang]}
          </p>
        )}

        {/* Features with glass effect (for featured variant) */}
        {variant === 'featured' && service.features && (
          <div className="mt-4 space-y-2">
            {service.features[lang].slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mr-3 shadow-sm">
                  <svg
                    className="w-3 h-3 text-white"
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
            <span className="px-4 py-2 bg-gradient-to-r from-accent to-orange-500 text-white text-sm font-semibold rounded-full shadow-md group-hover:shadow-lg transition-shadow">
              {lang === 'en' ? 'Get Quote' : 'Cotización'}
            </span>
          )}
        </div>
        </div>
      </div>
    </Link>
  );
}