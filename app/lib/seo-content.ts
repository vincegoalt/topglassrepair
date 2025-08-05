import { Language } from '../types';

interface LocationContent {
  [key: string]: {
    hero: {
      title: string;
      subtitle: string;
    };
    about: string;
    services: string[];
    whyChoose: string;
  };
}

export const locationContent: LocationContent = {
  'los-angeles': {
    hero: {
      title: 'Professional Glass Repair Services in Los Angeles',
      subtitle: '24/7 Emergency Glass Repair • Free Estimates • Licensed & Insured'
    },
    about: 'Serving Los Angeles for over 20 years, Top Glass Repairs is your trusted partner for all glass and mirror needs. From downtown LA to the suburbs, our certified technicians provide fast, reliable service for homes and businesses throughout the greater Los Angeles area.',
    services: [
      'Emergency glass board-up and repair',
      'Residential window replacement',
      'Commercial storefront glass',
      'Custom shower enclosures',
      'Mirror installation and repair',
      'Sliding glass door service'
    ],
    whyChoose: 'As Los Angeles\'s premier glass repair company, we understand the unique needs of LA properties. Whether it\'s earthquake-resistant glass installation or energy-efficient windows to combat the California sun, we have the expertise to handle any glass project.'
  },
  'beverly-hills': {
    hero: {
      title: 'Premium Glass Services in Beverly Hills, CA',
      subtitle: 'Luxury Glass Solutions • White Glove Service • Same-Day Availability'
    },
    about: 'Top Glass Repairs provides premium glass services to Beverly Hills\' most prestigious homes and businesses. Our expert craftsmen specialize in high-end glass installations, custom mirrors, and luxury shower enclosures that meet the exacting standards of Beverly Hills residents.',
    services: [
      'Luxury shower glass installations',
      'Custom decorative mirrors',
      'High-security glass solutions',
      'Frameless glass systems',
      'Antique mirror restoration',
      'Designer glass consultations'
    ],
    whyChoose: 'Beverly Hills demands excellence, and that\'s exactly what we deliver. Our technicians are trained in handling premium glass products and providing discreet, professional service that respects your privacy and property.'
  },
  'santa-monica': {
    hero: {
      title: 'Glass Repair & Replacement in Santa Monica',
      subtitle: 'Beachfront Specialists • Salt-Resistant Glass • Storm Damage Experts'
    },
    about: 'Living by the ocean in Santa Monica requires specialized glass solutions. Top Glass Repairs understands the unique challenges of coastal properties, from salt air corrosion to storm damage. We provide durable, weather-resistant glass installations designed for Santa Monica\'s beach climate.',
    services: [
      'Hurricane-resistant glass installation',
      'Coastal property window replacement',
      'Salt-damage glass restoration',
      'Energy-efficient window upgrades',
      'Beachfront storefront glass',
      'Impact-resistant sliding doors'
    ],
    whyChoose: 'Our experience with Santa Monica\'s coastal conditions means we recommend and install glass solutions that last. We use marine-grade materials and specialized coatings to protect against salt air and maximize the lifespan of your glass installations.'
  },
  'pasadena': {
    hero: {
      title: 'Expert Glass Services in Pasadena, California',
      subtitle: 'Historic Home Specialists • Custom Solutions • Preservation Experts'
    },
    about: 'Pasadena\'s historic architecture requires a delicate touch. Top Glass Repairs specializes in preserving the character of Pasadena\'s vintage homes while providing modern glass solutions. From Craftsman to Victorian homes, we maintain architectural integrity in every project.',
    services: [
      'Historic window restoration',
      'Period-appropriate glass replacement',
      'Stained glass repair',
      'Custom window manufacturing',
      'Energy retrofit solutions',
      'Architectural glass consultation'
    ],
    whyChoose: 'Our team includes specialists in historic preservation who understand Pasadena\'s architectural heritage. We work closely with homeowners and preservation committees to ensure all glass work meets both modern standards and historic guidelines.'
  },
  'long-beach': {
    hero: {
      title: 'Reliable Glass Repair in Long Beach, CA',
      subtitle: 'Fast Response • Competitive Rates • Residential & Commercial'
    },
    about: 'Long Beach residents and businesses trust Top Glass Repairs for dependable, affordable glass services. Located in Long Beach, we offer rapid response times and competitive pricing without compromising on quality. Our local presence means we\'re always nearby when you need us.',
    services: [
      'Same-day window repair',
      'Commercial glass replacement',
      'Apartment complex services',
      'Marina and boat glass',
      'Industrial glass solutions',
      'Emergency 24/7 response'
    ],
    whyChoose: 'As a Long Beach-based company, we\'re invested in our community. We offer special rates for local businesses and property managers, and our familiarity with Long Beach building codes ensures smooth permit processes for all projects.'
  },
  'glendale': {
    hero: {
      title: 'Professional Glass Services in Glendale, CA',
      subtitle: 'Commercial Experts • Office Buildings • Retail Specialists'
    },
    about: 'Glendale\'s thriving business district requires professional glass services that minimize disruption. Top Glass Repairs specializes in commercial glass projects for Glendale\'s offices, retail spaces, and mixed-use developments, with flexible scheduling to accommodate business hours.',
    services: [
      'Office partition installation',
      'Storefront glass systems',
      'Security glass upgrades',
      'Automatic door repair',
      'Glass wall systems',
      'Emergency board-up services'
    ],
    whyChoose: 'We understand that time is money for Glendale businesses. Our commercial team works efficiently to complete projects on schedule, often during off-hours to avoid disrupting your operations. We\'re fully licensed for commercial work in Glendale.'
  }
};

export const serviceAreaKeywords = {
  'los-angeles': [
    'glass repair Los Angeles',
    'window replacement LA',
    'emergency glass service Los Angeles',
    '24 hour glass repair LA',
    'Los Angeles glass company',
    'commercial glass Los Angeles'
  ],
  'beverly-hills': [
    'glass repair Beverly Hills',
    'luxury glass Beverly Hills',
    'Beverly Hills window replacement',
    'high-end glass installation',
    'Beverly Hills glass contractor',
    'custom mirrors Beverly Hills'
  ],
  'santa-monica': [
    'glass repair Santa Monica',
    'beach glass replacement',
    'Santa Monica window repair',
    'coastal glass solutions',
    'storm glass repair Santa Monica',
    'beachfront glass service'
  ],
  'pasadena': [
    'glass repair Pasadena',
    'historic window Pasadena',
    'Pasadena glass restoration',
    'vintage glass repair',
    'Pasadena window replacement',
    'architectural glass Pasadena'
  ],
  'long-beach': [
    'glass repair Long Beach',
    'Long Beach window service',
    'emergency glass Long Beach',
    'Long Beach glass company',
    'commercial glass Long Beach',
    'window repair Long Beach CA'
  ],
  'glendale': [
    'glass repair Glendale',
    'Glendale commercial glass',
    'office glass Glendale CA',
    'Glendale window replacement',
    'glass contractor Glendale',
    'storefront glass Glendale'
  ]
};

export function getLocationSchema(location: string, lang: Language) {
  const locationData = locationContent[location];
  if (!locationData) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Top Glass Repairs - ${location.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
    description: locationData.about,
    url: `https://topglassrepairs.com/${lang}/services/glass-repair/in/${location}`,
    telephone: '(562) 436-2616',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      addressRegion: 'CA',
      addressCountry: 'US'
    },
    areaServed: {
      '@type': 'City',
      name: location.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: getLocationCoordinates(location).lat,
        longitude: getLocationCoordinates(location).lng
      },
      geoRadius: '10 miles'
    }
  };
}

function getLocationCoordinates(location: string): {lat: string, lng: string} {
  const coordinates: {[key: string]: {lat: string, lng: string}} = {
    'los-angeles': { lat: '34.0522', lng: '-118.2437' },
    'beverly-hills': { lat: '34.0736', lng: '-118.4004' },
    'santa-monica': { lat: '34.0195', lng: '-118.4912' },
    'pasadena': { lat: '34.1478', lng: '-118.1445' },
    'long-beach': { lat: '33.7701', lng: '-118.1937' },
    'glendale': { lat: '34.1425', lng: '-118.2551' }
  };
  return coordinates[location] || { lat: '34.0522', lng: '-118.2437' };
}