import { Language } from '../types';
import { CONTACT_INFO } from '../lib/config';

// Detailed service schemas for each specific glass service
export function generateDetailedServiceSchema(
  serviceSlug: string,
  lang: Language
) {
  const baseUrl = 'https://topglassrepairs.com';
  const servicePath = lang === 'es' ? 'servicios' : 'services';
  
  const serviceSchemas: Record<string, any> = {
    'window-glass-replacement': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${baseUrl}/${lang}/${servicePath}/window-glass-replacement`,
      name: lang === 'en' ? 'Window Glass Replacement' : 'Reemplazo de Vidrios de Ventanas',
      description: lang === 'en' 
        ? 'Professional window glass replacement service for residential and commercial properties. We replace broken, cracked, or foggy windows with energy-efficient glass.'
        : 'Servicio profesional de reemplazo de vidrios de ventanas para propiedades residenciales y comerciales. Reemplazamos ventanas rotas, agrietadas o empañadas con vidrio eficiente en energía.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://topglassrepairs.com/#business',
        name: 'Top Glass Repairs',
        telephone: CONTACT_INFO.office,
        address: {
          '@type': 'PostalAddress',
          streetAddress: CONTACT_INFO.address,
          addressLocality: 'Long Beach',
          addressRegion: 'CA',
          postalCode: '90813'
        }
      },
      areaServed: {
        '@type': 'State',
        name: 'California'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: lang === 'en' ? 'Window Glass Types' : 'Tipos de Vidrio para Ventanas',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: lang === 'en' ? 'Single Pane Window Glass' : 'Vidrio de Panel Simple',
              description: lang === 'en' ? 'Standard single pane glass replacement' : 'Reemplazo estándar de vidrio de panel simple'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: lang === 'en' ? 'Double Pane Window Glass' : 'Vidrio de Doble Panel',
              description: lang === 'en' ? 'Energy-efficient double pane glass with argon gas fill' : 'Vidrio de doble panel eficiente en energía con relleno de gas argón'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: lang === 'en' ? 'Tempered Safety Glass' : 'Vidrio Templado de Seguridad',
              description: lang === 'en' ? 'Safety glass that meets building codes' : 'Vidrio de seguridad que cumple con los códigos de construcción'
            }
          }
        ]
      },
      priceRange: '$$',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      }
    },
    
    'shower-door-installation': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${baseUrl}/${lang}/${servicePath}/shower-door-installation`,
      name: lang === 'en' ? 'Shower Door Installation' : 'Instalación de Puertas de Ducha',
      description: lang === 'en'
        ? 'Custom shower door and enclosure installation. We offer frameless, semi-frameless, and framed shower doors in various styles and finishes.'
        : 'Instalación personalizada de puertas y cerramientos de ducha. Ofrecemos puertas de ducha sin marco, semi-enmarcadas y enmarcadas en varios estilos y acabados.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://topglassrepairs.com/#business',
        name: 'Top Glass Repairs'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: lang === 'en' ? 'Shower Door Types' : 'Tipos de Puertas de Ducha',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: lang === 'en' ? 'Frameless Shower Doors' : 'Puertas de Ducha Sin Marco',
              description: lang === 'en' ? 'Premium frameless glass shower enclosures' : 'Cerramientos de ducha de vidrio sin marco premium'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: lang === 'en' ? 'Sliding Shower Doors' : 'Puertas de Ducha Corredizas',
              description: lang === 'en' ? 'Space-saving sliding glass shower doors' : 'Puertas de ducha de vidrio corredizas que ahorran espacio'
            }
          }
        ]
      }
    },
    
    'mirror-installation': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${baseUrl}/${lang}/${servicePath}/mirror-installation`,
      name: lang === 'en' ? 'Mirror Installation' : 'Instalación de Espejos',
      description: lang === 'en'
        ? 'Professional mirror installation for bathrooms, gyms, dance studios, and commercial spaces. Custom sizes and shapes available.'
        : 'Instalación profesional de espejos para baños, gimnasios, estudios de danza y espacios comerciales. Tamaños y formas personalizadas disponibles.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://topglassrepairs.com/#business',
        name: 'Top Glass Repairs'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: lang === 'en' ? 'Mirror Types' : 'Tipos de Espejos',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: lang === 'en' ? 'Bathroom Vanity Mirrors' : 'Espejos de Tocador',
              description: lang === 'en' ? 'Custom bathroom mirrors with or without frames' : 'Espejos de baño personalizados con o sin marcos'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: lang === 'en' ? 'Gym & Studio Mirrors' : 'Espejos para Gimnasios y Estudios',
              description: lang === 'en' ? 'Large wall mirrors for fitness facilities' : 'Espejos de pared grandes para instalaciones de fitness'
            }
          }
        ]
      }
    },
    
    'storefront-glass': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${baseUrl}/${lang}/${servicePath}/storefront-glass`,
      name: lang === 'en' ? 'Storefront Glass Installation' : 'Instalación de Vidrios para Tiendas',
      description: lang === 'en'
        ? 'Commercial storefront glass installation and replacement. We work with businesses to create attractive, secure glass storefronts.'
        : 'Instalación y reemplazo de vidrios comerciales para tiendas. Trabajamos con empresas para crear frentes de vidrio atractivos y seguros.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://topglassrepairs.com/#business',
        name: 'Top Glass Repairs'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: lang === 'en' ? 'Commercial Glass Solutions' : 'Soluciones de Vidrio Comercial',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: lang === 'en' ? 'Tempered Storefront Glass' : 'Vidrio Templado para Tiendas',
              description: lang === 'en' ? 'Safety glass that meets commercial building codes' : 'Vidrio de seguridad que cumple con códigos comerciales'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: lang === 'en' ? 'Aluminum Storefront Systems' : 'Sistemas de Aluminio para Tiendas',
              description: lang === 'en' ? 'Complete aluminum and glass storefront systems' : 'Sistemas completos de aluminio y vidrio para tiendas'
            }
          }
        ]
      }
    },
    
    'emergency-glass-repair': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${baseUrl}/${lang}/${servicePath}/emergency-glass-repair`,
      name: lang === 'en' ? '24/7 Emergency Glass Repair' : 'Reparación de Vidrios de Emergencia 24/7',
      description: lang === 'en'
        ? 'Emergency glass repair and board-up services available 24/7. Fast response for broken windows, doors, and storefronts.'
        : 'Servicios de reparación de vidrios de emergencia y tapado disponibles 24/7. Respuesta rápida para ventanas, puertas y frentes de tiendas rotos.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://topglassrepairs.com/#business',
        name: 'Top Glass Repairs'
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: baseUrl,
        servicePhone: CONTACT_INFO.emergency || CONTACT_INFO.office,
        serviceSmsNumber: CONTACT_INFO.office,
        availableLanguage: ['en', 'es']
      },
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      },
      offers: {
        '@type': 'Offer',
        name: lang === 'en' ? 'Emergency Response' : 'Respuesta de Emergencia',
        description: lang === 'en' 
          ? 'Immediate response for glass emergencies with board-up service'
          : 'Respuesta inmediata para emergencias de vidrios con servicio de tapado',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: lang === 'en' ? 'Call for emergency rates' : 'Llame para tarifas de emergencia'
        }
      }
    },
    
    'glass-table-tops': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${baseUrl}/${lang}/${servicePath}/glass-table-tops`,
      name: lang === 'en' ? 'Glass Table Tops' : 'Cubiertas de Mesa de Vidrio',
      description: lang === 'en'
        ? 'Custom glass table tops for dining tables, coffee tables, desks, and furniture protection. Available in various thicknesses and edge styles.'
        : 'Cubiertas de mesa de vidrio personalizadas para mesas de comedor, mesas de café, escritorios y protección de muebles. Disponible en varios grosores y estilos de borde.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://topglassrepairs.com/#business',
        name: 'Top Glass Repairs'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: lang === 'en' ? 'Glass Table Top Options' : 'Opciones de Cubiertas de Mesa',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: lang === 'en' ? 'Tempered Glass Table Tops' : 'Cubiertas de Mesa de Vidrio Templado',
              description: lang === 'en' ? 'Safety glass table tops, 4x stronger than regular glass' : 'Cubiertas de mesa de vidrio de seguridad, 4x más fuertes que el vidrio regular'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: lang === 'en' ? 'Beveled Edge Glass' : 'Vidrio con Borde Biselado',
              description: lang === 'en' ? 'Elegant beveled edges for premium appearance' : 'Bordes biselados elegantes para apariencia premium'
            }
          }
        ]
      }
    }
  };

  return serviceSchemas[serviceSlug] || generateDefaultServiceSchema(serviceSlug, lang);
}

// Default schema for services not explicitly defined
function generateDefaultServiceSchema(serviceSlug: string, lang: Language) {
  const serviceName = serviceSlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://topglassrepairs.com/#business',
      name: 'Top Glass Repairs',
      telephone: CONTACT_INFO.office
    },
    areaServed: {
      '@type': 'State',
      name: 'California'
    }
  };
}

// Generate HowTo schema for common glass repair procedures
export function generateHowToSchema(topic: string, lang: Language) {
  const howToSchemas: Record<string, any> = {
    'measure-glass': {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: lang === 'en' ? 'How to Measure Glass for Replacement' : 'Cómo Medir Vidrio para Reemplazo',
      description: lang === 'en' 
        ? 'Step-by-step guide to accurately measure glass for replacement windows and doors'
        : 'Guía paso a paso para medir con precisión el vidrio para ventanas y puertas de reemplazo',
      step: [
        {
          '@type': 'HowToStep',
          name: lang === 'en' ? 'Remove old glass carefully' : 'Retire el vidrio viejo con cuidado',
          text: lang === 'en'
            ? 'Wear safety gloves and carefully remove any broken glass pieces'
            : 'Use guantes de seguridad y retire cuidadosamente cualquier pieza de vidrio roto'
        },
        {
          '@type': 'HowToStep',
          name: lang === 'en' ? 'Measure the opening' : 'Mida la abertura',
          text: lang === 'en'
            ? 'Measure the width and height of the frame opening at multiple points'
            : 'Mida el ancho y la altura de la abertura del marco en múltiples puntos'
        },
        {
          '@type': 'HowToStep',
          name: lang === 'en' ? 'Subtract for clearance' : 'Reste para el espacio libre',
          text: lang === 'en'
            ? 'Subtract 1/8 inch from both measurements for proper fit'
            : 'Reste 1/8 de pulgada de ambas medidas para un ajuste adecuado'
        }
      ],
      totalTime: 'PT15M',
      supply: [
        lang === 'en' ? 'Measuring tape' : 'Cinta métrica',
        lang === 'en' ? 'Safety gloves' : 'Guantes de seguridad',
        lang === 'en' ? 'Notepad' : 'Libreta'
      ]
    }
  };
  
  return howToSchemas[topic] || null;
}

// Generate FAQ schema specific to glass services
export function generateServiceFAQSchema(serviceSlug: string, lang: Language) {
  const faqs: Record<string, any> = {
    'window-glass-replacement': [
      {
        question: lang === 'en' 
          ? 'How long does window glass replacement take?'
          : '¿Cuánto tiempo toma el reemplazo de vidrios de ventanas?',
        answer: lang === 'en'
          ? 'Most residential window glass replacements can be completed within 1-2 hours. Commercial projects may take longer depending on the size and number of windows.'
          : 'La mayoría de los reemplazos de vidrios residenciales se pueden completar en 1-2 horas. Los proyectos comerciales pueden tomar más tiempo dependiendo del tamaño y número de ventanas.'
      },
      {
        question: lang === 'en'
          ? 'Do you offer energy-efficient glass options?'
          : '¿Ofrecen opciones de vidrio eficiente en energía?',
        answer: lang === 'en'
          ? 'Yes, we offer double-pane windows with Low-E coating and argon gas fill for maximum energy efficiency and reduced utility costs.'
          : 'Sí, ofrecemos ventanas de doble panel con recubrimiento Low-E y relleno de gas argón para máxima eficiencia energética y costos reducidos de servicios públicos.'
      }
    ],
    'shower-door-installation': [
      {
        question: lang === 'en'
          ? 'What is the difference between frameless and framed shower doors?'
          : '¿Cuál es la diferencia entre puertas de ducha sin marco y con marco?',
        answer: lang === 'en'
          ? 'Frameless shower doors use thicker glass (usually 3/8" or 1/2") and minimal hardware for a modern, open look. Framed doors use thinner glass with aluminum frames for support and are more budget-friendly.'
          : 'Las puertas de ducha sin marco usan vidrio más grueso (generalmente 3/8" o 1/2") y herrajes mínimos para un aspecto moderno y abierto. Las puertas con marco usan vidrio más delgado con marcos de aluminio para soporte y son más económicas.'
      }
    ]
  };
  
  const serviceFAQs = faqs[serviceSlug] || [];
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceFAQs.map((faq: any) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}