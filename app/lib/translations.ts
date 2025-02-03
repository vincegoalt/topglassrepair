import { Language } from '../types';

// Dictionary types for translations
type TranslationValue = {
  en: string;
  es: string;
};

type NestedDictionary = {
  [key: string]: TranslationValue | NestedDictionary;
};

type Dictionary = NestedDictionary;

// Common translations used across the site
export const commonTranslations: Dictionary = {
  callToAction: {
    en: 'Get Free Estimate',
    es: 'Obtener Presupuesto Gratis'
  },
  emergency: {
    en: '24/7 Emergency Service',
    es: 'Servicio de Emergencia 24/7'
  },
  contact: {
    en: 'Contact Us',
    es: 'Contáctenos'
  },
  phone: {
    en: 'Phone',
    es: 'Teléfono'
  },
  address: {
    en: 'Address',
    es: 'Dirección'
  },
  hours: {
    en: 'Hours',
    es: 'Horario'
  },
  services: {
    en: 'Our Services',
    es: 'Nuestros Servicios'
  },
  about: {
    en: 'About Us',
    es: 'Sobre Nosotros'
  },
  readMore: {
    en: 'Read More',
    es: 'Leer Más'
  },
  learnMore: {
    en: 'Learn More',
    es: 'Aprende Más'
  },
  schedule: {
    en: 'Schedule Service',
    es: 'Programar Servicio'
  },
  callNow: {
    en: 'Call Now',
    es: 'Llamar Ahora'
  },
  serviceAreas: {
    en: 'Service Areas',
    es: 'Áreas de Servicio'
  },
  testimonials: {
    en: 'Testimonials',
    es: 'Testimonios'
  },
  faq: {
    en: 'FAQ',
    es: 'Preguntas Frecuentes'
  },
  contactForm: {
    name: {
      en: 'Full Name',
      es: 'Nombre Completo'
    },
    email: {
      en: 'Email Address',
      es: 'Correo Electrónico'
    },
    phone: {
      en: 'Phone Number',
      es: 'Número de Teléfono'
    },
    message: {
      en: 'Message',
      es: 'Mensaje'
    },
    service: {
      en: 'Service Needed',
      es: 'Servicio Necesitado'
    },
    submit: {
      en: 'Send Message',
      es: 'Enviar Mensaje'
    }
  },
  error: {
    404: {
      title: {
        en: 'Page Not Found',
        es: 'Página No Encontrada'
      },
      message: {
        en: 'The page you are looking for does not exist.',
        es: 'La página que estás buscando no existe.'
      }
    }
  }
};
