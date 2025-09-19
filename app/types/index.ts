export type Language = 'en' | 'es';

export interface FAQ {
  question: string;
  answer: string;
}

export interface LongTailKeyword {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  name: {
    en: string;
    es: string;
  };
  slug: {
    en: string;
    es: string;
  };
  aliases?: {
    en?: string[];
    es?: string[];
  };
  description: {
    en: string;
    es: string;
  };
  features?: {
    en: string[];
    es: string[];
  };
  faqs?: {
    en: FAQ[];
    es: FAQ[];
  };
  longTailKeywords?: {
    en: LongTailKeyword[];
    es: LongTailKeyword[];
  };
  imageUrl: string;
}

export interface Location {
  id: string;
  name: string;
  state: string;
  slug: {
    en: string;
    es: string;
  };
  aliases?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface StructuredDataProvider {
  '@type': string;
  name: string;
  areaServed?: {
    '@type': string;
    name: string;
  };
}

export interface StructuredData {
  '@context': 'https://schema.org';
  '@type': string;
  name: string;
  description: string;
  provider?: StructuredDataProvider;
}

export interface MetaData {
  title: string;
  description: string;
  keywords?: string[];
  alternates?: {
    canonical?: string;
    languages?: {
      [key: string]: string;
    };
  };
}

export interface ContactInfo {
  companyName: string;
  address: string;
  office: string;
  emergency: string;
  email: string;
  hours: {
    [key: string]: string;
  };
}
