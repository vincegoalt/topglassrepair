import { Language, Location } from '../types';
import { normalizeSlug } from '../utils/slug';

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
    id: 'artesia',
    name: 'Artesia',
    slug: {
      en: 'artesia',
      es: 'artesia'
    },
    state: 'CA'
  },
  {
    id: 'avalon',
    name: 'Avalon',
    slug: {
      en: 'avalon',
      es: 'avalon'
    },
    state: 'CA'
  },
  {
    id: 'azusa',
    name: 'Azusa',
    slug: {
      en: 'azusa',
      es: 'azusa'
    },
    state: 'CA'
  },
  {
    id: 'baldwin-park',
    name: 'Baldwin Park',
    slug: {
      en: 'baldwin-park',
      es: 'baldwin-park'
    },
    state: 'CA'
  },
  {
    id: 'bell',
    name: 'Bell',
    slug: {
      en: 'bell',
      es: 'bell'
    },
    state: 'CA'
  },
  {
    id: 'bell-gardens',
    name: 'Bell Gardens',
    slug: {
      en: 'bell-gardens',
      es: 'bell-gardens'
    },
    state: 'CA'
  },
  {
    id: 'bellflower',
    name: 'Bellflower',
    slug: {
      en: 'bellflower',
      es: 'bellflower'
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
    id: 'bradbury',
    name: 'Bradbury',
    slug: {
      en: 'bradbury',
      es: 'bradbury'
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
    id: 'calabasas',
    name: 'Calabasas',
    slug: {
      en: 'calabasas',
      es: 'calabasas'
    },
    state: 'CA'
  },
  {
    id: 'carson',
    name: 'Carson',
    slug: {
      en: 'carson',
      es: 'carson'
    },
    state: 'CA'
  },
  {
    id: 'cerritos',
    name: 'Cerritos',
    slug: {
      en: 'cerritos',
      es: 'cerritos'
    },
    state: 'CA'
  },
  {
    id: 'claremont',
    name: 'Claremont',
    slug: {
      en: 'claremont',
      es: 'claremont'
    },
    state: 'CA'
  },
  {
    id: 'commerce',
    name: 'Commerce',
    slug: {
      en: 'commerce',
      es: 'commerce'
    },
    state: 'CA'
  },
  {
    id: 'compton',
    name: 'Compton',
    slug: {
      en: 'compton',
      es: 'compton'
    },
    state: 'CA'
  },
  {
    id: 'covina',
    name: 'Covina',
    slug: {
      en: 'covina',
      es: 'covina'
    },
    state: 'CA'
  },
  {
    id: 'cudahy',
    name: 'Cudahy',
    slug: {
      en: 'cudahy',
      es: 'cudahy'
    },
    state: 'CA'
  },
  {
    id: 'culver-city',
    name: 'Culver City',
    slug: {
      en: 'culver-city',
      es: 'culver-city'
    },
    state: 'CA'
  },
  {
    id: 'diamond-bar',
    name: 'Diamond Bar',
    slug: {
      en: 'diamond-bar',
      es: 'diamond-bar'
    },
    state: 'CA'
  },
  {
    id: 'downey',
    name: 'Downey',
    slug: {
      en: 'downey',
      es: 'downey'
    },
    state: 'CA'
  },
  {
    id: 'duarte',
    name: 'Duarte',
    slug: {
      en: 'duarte',
      es: 'duarte'
    },
    state: 'CA'
  },
  {
    id: 'el-monte',
    name: 'El Monte',
    slug: {
      en: 'el-monte',
      es: 'el-monte'
    },
    state: 'CA'
  },
  {
    id: 'el-segundo',
    name: 'El Segundo',
    slug: {
      en: 'el-segundo',
      es: 'el-segundo'
    },
    state: 'CA'
  },
  {
    id: 'gardena',
    name: 'Gardena',
    slug: {
      en: 'gardena',
      es: 'gardena'
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
    id: 'glendora',
    name: 'Glendora',
    slug: {
      en: 'glendora',
      es: 'glendora'
    },
    state: 'CA'
  },
  {
    id: 'hawaiian-gardens',
    name: 'Hawaiian Gardens',
    slug: {
      en: 'hawaiian-gardens',
      es: 'hawaiian-gardens'
    },
    state: 'CA'
  },
  {
    id: 'hawthorne',
    name: 'Hawthorne',
    slug: {
      en: 'hawthorne',
      es: 'hawthorne'
    },
    state: 'CA'
  },
  {
    id: 'hermosa-beach',
    name: 'Hermosa Beach',
    slug: {
      en: 'hermosa-beach',
      es: 'hermosa-beach'
    },
    state: 'CA'
  },
  {
    id: 'hidden-hills',
    name: 'Hidden Hills',
    slug: {
      en: 'hidden-hills',
      es: 'hidden-hills'
    },
    state: 'CA'
  },
  {
    id: 'hollywood',
    name: 'Hollywood',
    slug: {
      en: 'hollywood',
      es: 'hollywood'
    },
    state: 'CA'
  },
  {
    id: 'huntington-park',
    name: 'Huntington Park',
    slug: {
      en: 'huntington-park',
      es: 'huntington-park'
    },
    state: 'CA'
  },
  {
    id: 'industry',
    name: 'Industry',
    slug: {
      en: 'industry',
      es: 'industry'
    },
    state: 'CA'
  },
  {
    id: 'inglewood',
    name: 'Inglewood',
    slug: {
      en: 'inglewood',
      es: 'inglewood'
    },
    state: 'CA'
  },
  {
    id: 'irwindale',
    name: 'Irwindale',
    slug: {
      en: 'irwindale',
      es: 'irwindale'
    },
    state: 'CA'
  },
  {
    id: 'la-canada-flintridge',
    name: 'La Canada Flintridge',
    slug: {
      en: 'la-canada-flintridge',
      es: 'la-canada-flintridge'
    },
    state: 'CA'
  },
  {
    id: 'la-habra-heights',
    name: 'La Habra Heights',
    slug: {
      en: 'la-habra-heights',
      es: 'la-habra-heights'
    },
    state: 'CA'
  },
  {
    id: 'la-mirada',
    name: 'La Mirada',
    slug: {
      en: 'la-mirada',
      es: 'la-mirada'
    },
    state: 'CA'
  },
  {
    id: 'la-puente',
    name: 'La Puente',
    slug: {
      en: 'la-puente',
      es: 'la-puente'
    },
    state: 'CA'
  },
  {
    id: 'la-verne',
    name: 'La Verne',
    slug: {
      en: 'la-verne',
      es: 'la-verne'
    },
    state: 'CA'
  },
  {
    id: 'lakewood',
    name: 'Lakewood',
    slug: {
      en: 'lakewood',
      es: 'lakewood'
    },
    state: 'CA'
  },
  {
    id: 'lancaster',
    name: 'Lancaster',
    slug: {
      en: 'lancaster',
      es: 'lancaster'
    },
    state: 'CA'
  },
  {
    id: 'lawndale',
    name: 'Lawndale',
    slug: {
      en: 'lawndale',
      es: 'lawndale'
    },
    state: 'CA'
  },
  {
    id: 'lomita',
    name: 'Lomita',
    slug: {
      en: 'lomita',
      es: 'lomita'
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
    id: 'lynwood',
    name: 'Lynwood',
    slug: {
      en: 'lynwood',
      es: 'lynwood'
    },
    state: 'CA'
  },
  {
    id: 'malibu',
    name: 'Malibu',
    slug: {
      en: 'malibu',
      es: 'malibu'
    },
    state: 'CA'
  },
  {
    id: 'manhattan-beach',
    name: 'Manhattan Beach',
    slug: {
      en: 'manhattan-beach',
      es: 'manhattan-beach'
    },
    state: 'CA'
  },
  {
    id: 'maywood',
    name: 'Maywood',
    slug: {
      en: 'maywood',
      es: 'maywood'
    },
    state: 'CA'
  },
  {
    id: 'monrovia',
    name: 'Monrovia',
    slug: {
      en: 'monrovia',
      es: 'monrovia'
    },
    state: 'CA'
  },
  {
    id: 'montebello',
    name: 'Montebello',
    slug: {
      en: 'montebello',
      es: 'montebello'
    },
    state: 'CA'
  },
  {
    id: 'monterey-park',
    name: 'Monterey Park',
    slug: {
      en: 'monterey-park',
      es: 'monterey-park'
    },
    state: 'CA'
  },
  {
    id: 'norwalk',
    name: 'Norwalk',
    slug: {
      en: 'norwalk',
      es: 'norwalk'
    },
    state: 'CA'
  },
  {
    id: 'palmdale',
    name: 'Palmdale',
    slug: {
      en: 'palmdale',
      es: 'palmdale'
    },
    state: 'CA'
  },
  {
    id: 'palos-verdes-estates',
    name: 'Palos Verdes Estates',
    slug: {
      en: 'palos-verdes-estates',
      es: 'palos-verdes-estates'
    },
    state: 'CA'
  },
  {
    id: 'paramount',
    name: 'Paramount',
    slug: {
      en: 'paramount',
      es: 'paramount'
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
    id: 'pico-rivera',
    name: 'Pico Rivera',
    slug: {
      en: 'pico-rivera',
      es: 'pico-rivera'
    },
    state: 'CA'
  },
  {
    id: 'pomona',
    name: 'Pomona',
    slug: {
      en: 'pomona',
      es: 'pomona'
    },
    state: 'CA'
  },
  {
    id: 'rancho-palos-verdes',
    name: 'Rancho Palos Verdes',
    slug: {
      en: 'rancho-palos-verdes',
      es: 'rancho-palos-verdes'
    },
    state: 'CA'
  },
  {
    id: 'redondo-beach',
    name: 'Redondo Beach',
    slug: {
      en: 'redondo-beach',
      es: 'redondo-beach'
    },
    state: 'CA'
  },
  {
    id: 'rolling-hills',
    name: 'Rolling Hills',
    slug: {
      en: 'rolling-hills',
      es: 'rolling-hills'
    },
    state: 'CA'
  },
  {
    id: 'rolling-hills-estates',
    name: 'Rolling Hills Estates',
    slug: {
      en: 'rolling-hills-estates',
      es: 'rolling-hills-estates'
    },
    state: 'CA'
  },
  {
    id: 'rosemead',
    name: 'Rosemead',
    slug: {
      en: 'rosemead',
      es: 'rosemead'
    },
    state: 'CA'
  },
  {
    id: 'san-dimas',
    name: 'San Dimas',
    slug: {
      en: 'san-dimas',
      es: 'san-dimas'
    },
    state: 'CA'
  },
  {
    id: 'san-fernando',
    name: 'San Fernando',
    slug: {
      en: 'san-fernando',
      es: 'san-fernando'
    },
    state: 'CA'
  },
  {
    id: 'san-gabriel',
    name: 'San Gabriel',
    slug: {
      en: 'san-gabriel',
      es: 'san-gabriel'
    },
    state: 'CA'
  },
  {
    id: 'san-marino',
    name: 'San Marino',
    slug: {
      en: 'san-marino',
      es: 'san-marino'
    },
    state: 'CA'
  },
  {
    id: 'santa-clarita',
    name: 'Santa Clarita',
    slug: {
      en: 'santa-clarita',
      es: 'santa-clarita'
    },
    state: 'CA'
  },
  {
    id: 'santa-fe-springs',
    name: 'Santa Fe Springs',
    slug: {
      en: 'santa-fe-springs',
      es: 'santa-fe-springs'
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
  },
  {
    id: 'sierra-madre',
    name: 'Sierra Madre',
    slug: {
      en: 'sierra-madre',
      es: 'sierra-madre'
    },
    state: 'CA'
  },
  {
    id: 'signal-hill',
    name: 'Signal Hill',
    slug: {
      en: 'signal-hill',
      es: 'signal-hill'
    },
    state: 'CA'
  },
  {
    id: 'south-el-monte',
    name: 'South El Monte',
    slug: {
      en: 'south-el-monte',
      es: 'south-el-monte'
    },
    state: 'CA'
  },
  {
    id: 'south-gate',
    name: 'South Gate',
    slug: {
      en: 'south-gate',
      es: 'south-gate'
    },
    state: 'CA'
  },
  {
    id: 'south-pasadena',
    name: 'South Pasadena',
    slug: {
      en: 'south-pasadena',
      es: 'south-pasadena'
    },
    state: 'CA'
  },
  {
    id: 'temple-city',
    name: 'Temple City',
    slug: {
      en: 'temple-city',
      es: 'temple-city'
    },
    state: 'CA'
  },
  {
    id: 'torrance',
    name: 'Torrance',
    slug: {
      en: 'torrance',
      es: 'torrance'
    },
    state: 'CA'
  },
  {
    id: 'vernon',
    name: 'Vernon',
    slug: {
      en: 'vernon',
      es: 'vernon'
    },
    state: 'CA'
  },
  {
    id: 'walnut',
    name: 'Walnut',
    slug: {
      en: 'walnut',
      es: 'walnut'
    },
    state: 'CA'
  },
  {
    id: 'west-covina',
    name: 'West Covina',
    slug: {
      en: 'west-covina',
      es: 'west-covina'
    },
    state: 'CA'
  },
  {
    id: 'west-hollywood',
    name: 'West Hollywood',
    slug: {
      en: 'west-hollywood',
      es: 'west-hollywood'
    },
    state: 'CA'
  },
  {
    id: 'westlake-village',
    name: 'Westlake Village',
    slug: {
      en: 'westlake-village',
      es: 'westlake-village'
    },
    state: 'CA'
  },
  {
    id: 'whittier',
    name: 'Whittier',
    slug: {
      en: 'whittier',
      es: 'whittier'
    },
    state: 'CA'
  }
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

export interface LocationMatch {
  location: Location;
  canonicalSlug: string;
  shouldRedirect: boolean;
}

function matchesLocationSlug(location: Location, slug: string): boolean {
  const candidates = new Set<string>();
  candidates.add(location.slug.en);
  candidates.add(location.slug.es);

  location.aliases?.forEach(alias => candidates.add(alias));

  return Array.from(candidates).some(candidate => normalizeSlug(candidate) === slug);
}

export function findLocationBySlug(slug: string, lang: Language): LocationMatch | null {
  const normalizedSlug = normalizeSlug(slug);
  const match = locations.find(location => matchesLocationSlug(location, normalizedSlug));

  if (!match) {
    return null;
  }

  const canonicalSlug = match.slug[lang];

  return {
    location: match,
    canonicalSlug,
    shouldRedirect: normalizedSlug !== normalizeSlug(canonicalSlug)
  };
}
