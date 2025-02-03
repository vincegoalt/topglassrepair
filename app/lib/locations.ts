import { Location } from '../types';

export const locations: Location[] = [
  {
    id: 'agoura-hills',
    name: 'Agoura Hills',
    slug: {
      en: 'agoura-hills',
      es: 'agoura-hills'
    },
    state: 'CA'
  },
  {
    id: 'alhambra',
    name: 'Alhambra',
    slug: {
      en: 'alhambra',
      es: 'alhambra'
    },
    state: 'CA'
  },
  {
    id: 'arcadia',
    name: 'Arcadia',
    slug: {
      en: 'arcadia',
      es: 'arcadia'
    },
    state: 'CA'
  },
  {
    id: 'beverly-hills',
    name: 'Beverly Hills',
    slug: {
      en: 'beverly-hills',
      es: 'beverly-hills'
    },
    state: 'CA'
  },
  {
    id: 'burbank',
    name: 'Burbank',
    slug: {
      en: 'burbank',
      es: 'burbank'
    },
    state: 'CA'
  },
  {
    id: 'glendale',
    name: 'Glendale',
    slug: {
      en: 'glendale',
      es: 'glendale'
    },
    state: 'CA'
  },
  {
    id: 'long-beach',
    name: 'Long Beach',
    slug: {
      en: 'long-beach',
      es: 'long-beach'
    },
    state: 'CA'
  },
  {
    id: 'los-angeles',
    name: 'Los Angeles',
    slug: {
      en: 'los-angeles',
      es: 'los-angeles'
    },
    state: 'CA'
  },
  {
    id: 'pasadena',
    name: 'Pasadena',
    slug: {
      en: 'pasadena',
      es: 'pasadena'
    },
    state: 'CA'
  },
  {
    id: 'santa-monica',
    name: 'Santa Monica',
    slug: {
      en: 'santa-monica',
      es: 'santa-monica'
    },
    state: 'CA'
  }
  // Note: Added main cities first, can expand with more locations as needed
];

// Helper function to generate service-location combinations
export const generateServiceLocationSlugs = (
  serviceSlug: { en: string; es: string },
  locationSlug: { en: string; es: string }
) => {
  return {
    en: `${serviceSlug.en}-in-${locationSlug.en}`,
    es: `${serviceSlug.es}-en-${locationSlug.es}`
  };
};
