import { ContactInfo } from '../types';

export const CONTACT_INFO: ContactInfo = {
  companyName: 'Top Glass Repairs',
  address: 'Long Beach, CA 90813',
  office: '(562) 436-2616',
  emergency: '(562) 234-3440',
  email: 'info@topglassrepairs.com',
  hours: {
    'Monday-Friday': '8:00 AM - 6:00 PM',
    'Saturday': '9:00 AM - 4:00 PM',
    'Sunday': '9:00 AM - 4:00 PM'
  }
};

export const NAV_LINKS = {
  en: [
    { href: '/en', label: 'Home' },
    { href: '/en/services', label: 'Services' },
    { href: '/en/blog', label: 'Blog' },
    { href: '/en/contact', label: 'Contact' }
  ],
  es: [
    { href: '/es', label: 'Inicio' },
    { href: '/es/servicios', label: 'Servicios' },
    { href: '/es/blog', label: 'Blog' },
    { href: '/es/contacto', label: 'Contacto' }
  ]
};

export const SOCIAL_LINKS = [
  {
    platform: 'Facebook',
    url: 'https://facebook.com/topglassrepairs',
    ariaLabel: 'Visit our Facebook page'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/topglassrepairs',
    ariaLabel: 'Follow us on Instagram'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/topglassrepairs',
    ariaLabel: 'Follow us on Twitter'
  }
];

export const COMPANY_META = {
  en: {
    title: 'Top Glass Repairs - Professional Glass & Mirror Services in Los Angeles',
    description: 'Expert glass and mirror services in Los Angeles. Residential and commercial solutions including repairs, replacements, and custom installations.',
    keywords: ['glass repair', 'mirror installation', 'glass replacement', 'Los Angeles', 'emergency glass service']
  },
  es: {
    title: 'Top Glass Repairs - Servicios Profesionales de Vidrios y Espejos en Los Ángeles',
    description: 'Servicios expertos de vidrios y espejos en Los Ángeles. Soluciones residenciales y comerciales incluyendo reparaciones, reemplazos e instalaciones personalizadas.',
    keywords: ['reparación de vidrios', 'instalación de espejos', 'reemplazo de vidrios', 'Los Ángeles', 'servicio de emergencia']
  }
};

export const SEO_TEMPLATES = {
  en: {
    serviceTitle: '{service} in {location} | Top Glass Repairs',
    serviceDescription: 'Professional {service} services in {location}. Expert solutions for residential and commercial properties. 24/7 emergency service available.',
    locationTitle: 'Glass & Mirror Services in {location} | Top Glass Repairs',
    locationDescription: 'Professional glass and mirror services in {location}. Expert installations, repairs, and replacements. Available 24/7 for emergencies.',
    serviceLocation: {
      title: '{service} in {location} | Professional Glass Services',
      description: 'Expert {service} services in {location}. Professional installations, repairs, and replacements. Available 24/7 for emergencies. Free estimates.'
    }
  },
  es: {
    serviceTitle: '{service} en {location} | Top Glass Repairs',
    serviceDescription: 'Servicios profesionales de {service} en {location}. Soluciones expertas para propiedades residenciales y comerciales. Servicio de emergencia 24/7.',
    locationTitle: 'Servicios de Vidrios y Espejos en {location} | Top Glass Repairs',
    locationDescription: 'Servicios profesionales de vidrios y espejos en {location}. Instalaciones, reparaciones y reemplazos expertos. Disponible 24/7 para emergencias.',
    serviceLocation: {
      title: '{service} en {location} | Servicios Profesionales de Vidrios',
      description: 'Servicios expertos de {service} en {location}. Instalaciones, reparaciones y reemplazos profesionales. Disponible 24/7 para emergencias. Presupuestos gratuitos.'
    }
  }
};

export const FONTS = {
  sans: 'var(--font-inter)',
  heading: 'var(--font-montserrat)',
  mono: 'var(--font-jetbrains)'
};

export const BRAND_COLORS = {
  primary: '#0F4C81',
  secondary: '#E8F1F8',
  accent: '#FFB347',
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A'
  }
};
