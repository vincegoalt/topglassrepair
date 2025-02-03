import { Language, MetaData, StructuredData, StructuredDataProvider } from '../types';
import { COMPANY_META, SEO_TEMPLATES } from '../lib/config';

export function generateMetadata(lang: Language): MetaData {
  return {
    title: COMPANY_META[lang].title,
    description: COMPANY_META[lang].description,
    keywords: COMPANY_META[lang].keywords
  };
}

export function generateServiceMetadata(lang: Language, service: string): MetaData {
  return {
    title: SEO_TEMPLATES[lang].serviceTitle.replace('{service}', service),
    description: SEO_TEMPLATES[lang].serviceDescription.replace('{service}', service),
    keywords: [...COMPANY_META[lang].keywords, service]
  };
}

export function generateServiceLocationMetadata(
  lang: Language,
  service: string,
  location: string
): MetaData {
  const template = SEO_TEMPLATES[lang].serviceLocation;
  return {
    title: template.title
      .replace('{service}', service)
      .replace('{location}', location),
    description: template.description
      .replace('{service}', service)
      .replace('{location}', location),
    keywords: [...COMPANY_META[lang].keywords, service, location]
  };
}

export function generateLocationMetadata(lang: Language, location: string): MetaData {
  return {
    title: SEO_TEMPLATES[lang].locationTitle.replace('{location}', location),
    description: SEO_TEMPLATES[lang].locationDescription.replace('{location}', location),
    keywords: [...COMPANY_META[lang].keywords, location]
  };
}

export function generateStructuredData(
  lang: Language,
  type: string = 'LocalBusiness',
  data?: {
    name?: string;
    description?: string;
    provider?: {
      name: string;
      areaServed?: {
        name: string;
      };
    };
  }
): StructuredData {
  const defaultData = {
    name: COMPANY_META[lang].title,
    description: COMPANY_META[lang].description
  };

  const mergedData = {
    ...defaultData,
    ...data
  };

  const provider: StructuredDataProvider | undefined = mergedData.provider ? {
    '@type': 'LocalBusiness',
    name: mergedData.provider.name,
    areaServed: mergedData.provider.areaServed ? {
      '@type': 'City',
      name: mergedData.provider.areaServed.name
    } : undefined
  } : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': type,
    name: mergedData.name,
    description: mergedData.description,
    provider
  };
}
