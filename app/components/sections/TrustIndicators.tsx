'use client';

import { Language } from '@/app/types';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

interface TrustIndicatorsProps {
  lang: Language;
}

export default function TrustIndicators({ lang }: TrustIndicatorsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('trust-indicators');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const indicators = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      value: 25,
      suffix: '+',
      label: {
        en: 'Years Experience',
        es: 'Años de Experiencia'
      },
      description: {
        en: 'Serving Los Angeles since 1998',
        es: 'Sirviendo Los Angeles desde 1998'
      }
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
      value: 50000,
      suffix: '+',
      label: {
        en: 'Happy Customers',
        es: 'Clientes Satisfechos'
      },
      description: {
        en: 'Trusted by homeowners & businesses',
        es: 'Confianza de propietarios y empresas'
      }
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      value: 4.8,
      decimal: 1,
      label: {
        en: 'Average Rating',
        es: 'Calificación Promedio'
      },
      description: {
        en: 'Based on 1,500+ reviews',
        es: 'Basado en 1,500+ reseñas'
      }
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      value: 24,
      suffix: '/7',
      label: {
        en: 'Emergency Service',
        es: 'Servicio de Emergencia'
      },
      description: {
        en: 'Always ready when you need us',
        es: 'Siempre listos cuando nos necesita'
      }
    }
  ];

  return (
    <section id="trust-indicators" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {lang === 'en' ? 'Why Choose Top Glass Repairs?' : '¿Por Qué Elegir Top Glass Repairs?'}
          </h2>
          <p className="text-xl text-gray-600">
            {lang === 'en' 
              ? 'Numbers that speak to our commitment and excellence'
              : 'Números que hablan de nuestro compromiso y excelencia'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                {indicator.icon}
              </div>
              
              <div className="text-4xl font-bold mb-2">
                {isVisible && (
                  <CountUp
                    start={0}
                    end={indicator.value}
                    duration={2.5}
                    decimals={indicator.decimal || 0}
                    suffix={indicator.suffix || ''}
                  />
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {indicator.label[lang]}
              </h3>
              
              <p className="text-gray-600">
                {indicator.description[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications and Badges */}
        <div className="mt-16 border-t pt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {lang === 'en' ? 'Certified & Trusted' : 'Certificado y Confiable'}
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* License Badge */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-sm font-bold text-gray-700">CA LIC #</span>
              </div>
              <p className="text-sm text-gray-600">
                {lang === 'en' ? 'Licensed Contractor' : 'Contratista Licenciado'}
              </p>
            </div>

            {/* Insurance Badge */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <svg className="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                {lang === 'en' ? 'Fully Insured' : 'Totalmente Asegurado'}
              </p>
            </div>

            {/* BBB Badge */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-gray-700">A+</span>
              </div>
              <p className="text-sm text-gray-600">
                {lang === 'en' ? 'BBB Rating' : 'Calificación BBB'}
              </p>
            </div>

            {/* Google Reviews */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold">4.8/5</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                {lang === 'en' ? 'Google Reviews' : 'Reseñas de Google'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}