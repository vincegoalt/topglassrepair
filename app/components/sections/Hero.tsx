'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Language } from '@/app/types';
import { getTranslation } from '@/app/utils/languageClient';

interface HeroProps {
  title: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
  lang: Language;
  actions?: {
    primary?: {
      label: string;
      href: string;
      isPhoneNumber?: boolean;
    };
    secondary?: {
      label: string;
      href: string;
    };
  };
  overlay?: boolean;
  size?: 'small' | 'medium' | 'large';
  align?: 'left' | 'center';
}

export default function Hero({
  title,
  description,
  imageUrl,
  imageAlt,
  lang,
  actions,
  overlay = true,
  size = 'medium',
  align = 'left'
}: HeroProps) {
  // Determine height based on size
  const heightClasses = {
    small: 'h-[40vh] min-h-[300px]',
    medium: 'h-[60vh] min-h-[400px]',
    large: 'h-[80vh] min-h-[600px]'
  }[size];

  // Determine alignment classes
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center'
  }[align];

  // Determine content width classes
  const contentWidthClasses = {
    left: 'max-w-3xl',
    center: 'max-w-4xl mx-auto'
  }[align];

  return (
    <section className={`relative flex items-center ${heightClasses}`}>
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      {/* Content */}
      <div className={`relative container mx-auto px-4 flex flex-col ${alignmentClasses}`}>
        <div className={contentWidthClasses}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {description}
            </p>
          )}

          {actions && (
            <div className={`flex flex-wrap gap-4 ${
              align === 'center' ? 'justify-center' : ''
            }`}>
              {actions.primary && (
                actions.primary.isPhoneNumber ? (
                  <a
                    href={actions.primary.href}
                    className="btn btn-accent"
                  >
                    {actions.primary.label}
                  </a>
                ) : (
                  <Link
                    href={actions.primary.href}
                    className="btn btn-accent"
                  >
                    {actions.primary.label}
                  </Link>
                )
              )}
              
              {actions.secondary && (
                <Link
                  href={actions.secondary.href}
                  className="btn btn-outline text-white border-white hover:bg-white hover:text-primary"
                >
                  {actions.secondary.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Optional decorative elements for larger sizes */}
      {size === 'large' && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
      )}
    </section>
  );
}
