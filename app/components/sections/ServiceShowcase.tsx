'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Language } from '@/app/types';
import ShowcaseImageSplit from '@/app/components/ShowcaseImageSplit';
import PhoneLink from '@/app/components/PhoneLink';

interface ShowcaseItem {
  id: string;
  service: string;
  beforeImage: string;
  afterImage: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  duration: string;
  location: string;
  isSplitImage?: boolean;
}

interface ServiceShowcaseProps {
  lang: Language;
  items?: ShowcaseItem[];
}

const defaultShowcaseItems: ShowcaseItem[] = [
  {
    id: '1',
    service: 'window-glass-replacement',
    beforeImage: 'https://portageglassandmirror.com/wp-content/uploads/2025/02/foggy-window-with-condensation.jpeg',
    afterImage: 'https://portageglassandmirror.com/wp-content/uploads/2024/09/foggy-window-gpai.jpg',
    title: {
      en: 'Foggy Double-Pane Window Replacement',
      es: 'Reemplazo de Ventana de Doble Panel Empañada'
    },
    description: {
      en: 'Replaced failed double-pane windows with energy-efficient Low-E glass',
      es: 'Reemplazamos ventanas de doble panel falladas con vidrio Low-E eficiente'
    },
    duration: '2 hours',
    location: 'Beverly Hills, CA'
  },
  {
    id: '2',
    service: 'shower-door-installation',
    beforeImage: 'https://abcglassandmirror.com/wp-content/uploads/2022/10/Frameless-Shower-pic-02.jpg',
    afterImage: 'https://abcglassandmirror.com/wp-content/uploads/2022/10/Frameless-Shower-pic-02.jpg',
    title: {
      en: 'Frameless Shower Door Installation',
      es: 'Instalación de Puerta de Ducha Sin Marco'
    },
    description: {
      en: 'Transformed bathroom with elegant frameless glass shower enclosure',
      es: 'Transformamos el baño con elegante cerramiento de ducha sin marco'
    },
    duration: '4 hours',
    location: 'Santa Monica, CA',
    isSplitImage: true
  },
  {
    id: '3',
    service: 'storefront-glass',
    beforeImage: 'https://images.squarespace-cdn.com/content/v1/5e7e17212957cc2180095580/6331c7a2-0b38-4461-94d8-5998137dcee2/Brownstone+South+Detail.jpg',
    afterImage: 'https://images.squarespace-cdn.com/content/v1/5e7e17212957cc2180095580/6331c7a2-0b38-4461-94d8-5998137dcee2/Brownstone+South+Detail.jpg',
    title: {
      en: 'Commercial Storefront Renovation',
      es: 'Renovación de Frente Comercial'
    },
    description: {
      en: 'Complete storefront glass replacement for retail location',
      es: 'Reemplazo completo de vidrio frontal para ubicación comercial'
    },
    duration: '1 day',
    location: 'Los Angeles, CA'
  }
];

export default function ServiceShowcase({ 
  lang, 
  items = defaultShowcaseItems 
}: ServiceShowcaseProps) {
  const [activeItem, setActiveItem] = useState<ShowcaseItem>(items[0]);
  const [isShowing, setIsShowing] = useState<'before' | 'after'>('after');

  return (
    <section className="py-16 bg-gray-50 section-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {lang === 'en' ? 'Our Work Speaks for Itself' : 'Nuestro Trabajo Habla por Sí Mismo'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === 'en' 
              ? 'See the transformation we bring to every project. Quality craftsmanship that exceeds expectations.'
              : 'Vea la transformación que traemos a cada proyecto. Artesanía de calidad que supera las expectativas.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Before/After Viewer */}
          <div className="relative">
            {activeItem.isSplitImage ? (
              <ShowcaseImageSplit
                imageUrl={activeItem.beforeImage}
                alt={activeItem.title[lang]}
                lang={lang}
              />
            ) : (
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Before Image */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isShowing === 'before' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Image
                    src={activeItem.beforeImage}
                    alt={`Before: ${activeItem.title[lang]}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 badge badge-primary">
                    {lang === 'en' ? 'Before' : 'Antes'}
                  </div>
                </div>

                {/* After Image */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isShowing === 'after' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Image
                    src={activeItem.afterImage}
                    alt={`After: ${activeItem.title[lang]}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 badge badge-accent">
                    {lang === 'en' ? 'After' : 'Después'}
                  </div>
                </div>

                {/* Toggle Button */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button
                    onClick={() => setIsShowing(isShowing === 'before' ? 'after' : 'before')}
                    className="btn btn-glass"
                  >
                    {isShowing === 'before' 
                      ? (lang === 'en' ? 'Show After' : 'Ver Después')
                      : (lang === 'en' ? 'Show Before' : 'Ver Antes')}
                  </button>
                </div>
              </div>
            )}

            {/* Comparison Slider - only show for non-split images */}
            {!activeItem.isSplitImage && (
              <div className="mt-4 flex justify-center gap-2">
                <button
                  onClick={() => setIsShowing('before')}
                  className={`px-4 py-2 rounded-full transition-all ${
                    isShowing === 'before' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {lang === 'en' ? 'Before' : 'Antes'}
                </button>
                <button
                  onClick={() => setIsShowing('after')}
                  className={`px-4 py-2 rounded-full transition-all ${
                    isShowing === 'after' 
                      ? 'bg-accent text-white' 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {lang === 'en' ? 'After' : 'Después'}
                </button>
              </div>
            )}
          </div>

          {/* Project Details and Selector */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {activeItem.title[lang]}
              </h3>
              <p className="text-gray-600 mb-6">
                {activeItem.description[lang]}
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="feature-card p-3 sm:p-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {lang === 'en' ? 'Duration' : 'Duración'}
                  </div>
                  <div className="text-sm sm:text-base font-semibold">{activeItem.duration}</div>
                </div>
                <div className="feature-card p-3 sm:p-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {lang === 'en' ? 'Location' : 'Ubicación'}
                  </div>
                  <div className="text-sm sm:text-base font-semibold">{activeItem.location}</div>
                </div>
              </div>

              {/* Project Selector */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-900">
                  {lang === 'en' ? 'More Projects' : 'Más Proyectos'}
                </h4>
                <div className="space-y-3">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveItem(item);
                        setIsShowing('after');
                      }}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        activeItem.id === item.id
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      <div className="font-medium">{item.title[lang]}</div>
                      <div className={`text-sm ${
                        activeItem.id === item.id ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {item.location}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            {lang === 'en' 
              ? 'Ready to transform your space with professional glass services?'
              : '¿Listo para transformar su espacio con servicios profesionales de vidrio?'}
          </p>
          <PhoneLink phoneNumber={process.env.NEXT_PUBLIC_PHONE_NUMBER || '(562) 436-2616'} className="btn btn-accent" eventLabel="main_page_cta">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {lang === 'en' ? 'Get Your Free Quote' : 'Obtenga Su Cotización Gratis'}
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}