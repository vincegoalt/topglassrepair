'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/app/types';
import { getTranslation } from '@/app/utils/languageClient';
import { CONTACT_INFO } from '@/app/lib/config';

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
    isPhoneNumber?: boolean;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  lang: Language;
  variant?: 'default' | 'simple' | 'withImage';
  background?: 'primary' | 'white' | 'light';
  imageUrl?: string;
}

export default function CallToAction({
  title = "Need Glass Repair or Replacement?",
  description = "Get fast, professional service from Los Angeles's trusted glass experts",
  primaryAction = {
    label: "Call Now: (562) 436-2616",
    href: "tel:(562)436-2616",
    isPhoneNumber: true
  },
  secondaryAction,
  lang,
  variant = 'default',
  background = 'primary',
  imageUrl
}: CallToActionProps) {
  // Background styles
  const backgroundStyles = {
    primary: 'bg-primary text-white',
    white: 'bg-white',
    light: 'bg-secondary'
  }[background];

  // Text color based on background
  const textColor = background === 'primary' ? 'text-white' : 'text-neutral-900';
  const descriptionColor = background === 'primary' ? 'text-white/90' : 'text-neutral-600';

  return (
    <section className={`py-12 md:py-20 ${backgroundStyles}`}>
      <div className="container mx-auto px-4">
        {variant === 'withImage' ? (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 ${textColor}`}>
                {title}
              </h2>
              <p className={`text-base sm:text-lg mb-6 sm:mb-8 ${descriptionColor}`}>
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                {/* Primary Action */}
                {primaryAction?.isPhoneNumber ? (
                  <a
                    href={primaryAction?.href || '#'}
                    className="btn btn-accent"
                  >
                    {primaryAction?.label || 'Contact Us'}
                  </a>
                ) : (
                  <Link
                    href={primaryAction?.href || '#'}
                    className="btn btn-accent"
                  >
                    {primaryAction?.label || 'Contact Us'}
                  </Link>
                )}

                {/* Secondary Action */}
                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className={`btn btn-outline ${
                      background === 'primary'
                        ? 'text-white border-white hover:bg-white hover:text-primary'
                        : 'text-primary border-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {secondaryAction.label}
                  </Link>
                )}
              </div>
            </div>

            {/* Image */}
            {imageUrl && (
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imageUrl}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        ) : variant === 'simple' ? (
          <div className="text-center max-w-3xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
              {title}
            </h2>
            <p className={`text-lg mb-8 ${descriptionColor}`}>
              {description}
            </p>
            {/* Primary Action Only */}
            {primaryAction.isPhoneNumber ? (
              <a
                href={primaryAction.href}
                className="btn btn-accent"
              >
                {primaryAction.label}
              </a>
            ) : (
              <Link
                href={primaryAction.href}
                className="btn btn-accent"
              >
                {primaryAction.label}
              </Link>
            )}
          </div>
        ) : (
          // Default variant
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 ${textColor}`}>
                {title}
              </h2>
              <p className={`text-base sm:text-lg mb-6 sm:mb-8 ${descriptionColor}`}>
                {description}
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              {/* Contact Information */}
              <div className={`text-lg ${textColor}`}>
                <p className="font-bold mb-2">
                  {getTranslation('contact', lang)}:
                </p>
                <p>
                  <a 
                    href={`tel:${CONTACT_INFO.office}`}
                    className="hover:underline"
                  >
                    {CONTACT_INFO.office}
                  </a>
                </p>
                <p className="text-sm mt-1">
                  {getTranslation('emergency', lang)}:{' '}
                  <a 
                    href={`tel:${CONTACT_INFO.emergency}`}
                    className="font-bold hover:underline"
                  >
                    {CONTACT_INFO.emergency}
                  </a>
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                {primaryAction?.isPhoneNumber ? (
                  <a
                    href={primaryAction?.href || '#'}
                    className="btn btn-accent"
                  >
                    {primaryAction?.label || 'Contact Us'}
                  </a>
                ) : (
                  <Link
                    href={primaryAction?.href || '#'}
                    className="btn btn-accent"
                  >
                    {primaryAction?.label || 'Contact Us'}
                  </Link>
                )}

                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className={`btn btn-outline ${
                      background === 'primary'
                        ? 'text-white border-white hover:bg-white hover:text-primary'
                        : 'text-primary border-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {secondaryAction.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
