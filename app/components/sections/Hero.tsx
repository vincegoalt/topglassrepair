'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Language } from '@/app/types';
import { getTranslation } from '@/app/utils/languageClient';
import { useEffect, useRef } from 'react';

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
  features?: string[];
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
  align = 'left',
  features
}: HeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine height based on size
  const heightClasses = {
    small: 'h-[50vh] min-h-[400px]',
    medium: 'h-[70vh] min-h-[600px]',
    large: 'h-[90vh] min-h-[700px]'
  }[size];

  // Determine alignment classes
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center'
  }[align];

  // Determine content width classes
  const contentWidthClasses = {
    left: 'max-w-4xl',
    center: 'max-w-5xl mx-auto'
  }[align];

  return (
    <section className={`relative flex items-center ${heightClasses} overflow-hidden`}>
      {/* Parallax Background Image */}
      <div ref={parallaxRef} className="absolute inset-0 w-full h-[120%]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Enhanced Overlay with gradient */}
      {overlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </>
      )}

      {/* Floating glass elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float stagger-2" />
      </div>

      {/* Content */}
      <div className={`relative container mx-auto px-4 flex flex-col ${alignmentClasses} z-10`}>
        <div className={contentWidthClasses}>
          {/* Animated title */}
          <h1 className="text-white mb-6 animate-fade-in">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {title}
            </span>
          </h1>
          
          {description && (
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in stagger-1 leading-relaxed">
              {description}
            </p>
          )}

          {/* Features list with glass effect */}
          {features && features.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8 animate-fade-in stagger-2">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="glass px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* Enhanced CTA buttons */}
          {actions && (
            <div className={`flex flex-wrap gap-4 animate-fade-in stagger-3 ${
              align === 'center' ? 'justify-center' : ''
            }`}>
              {actions.primary && (
                actions.primary.isPhoneNumber ? (
                  <a
                    href={actions.primary.href}
                    className="btn btn-accent group"
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {actions.primary.label}
                  </a>
                ) : (
                  <Link
                    href={actions.primary.href}
                    className="btn btn-accent"
                  >
                    {actions.primary.label}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )
              )}
              
              {actions.secondary && (
                <Link
                  href={actions.secondary.href}
                  className="btn btn-glass"
                >
                  {actions.secondary.label}
                </Link>
              )}
            </div>
          )}
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-white/80 animate-fade-in stagger-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">4.8+ Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator for large heroes */}
      {size === 'large' && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </section>
  );
}