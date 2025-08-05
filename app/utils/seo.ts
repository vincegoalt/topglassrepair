import { Language, MetaData, StructuredData, StructuredDataProvider } from '../types';
import { COMPANY_META, SEO_TEMPLATES, CONTACT_INFO } from '../lib/config';

export function generateMetadata(lang: Language): MetaData {
  return {
    title: COMPANY_META[lang].title,
    description: COMPANY_META[lang].description,
    keywords: COMPANY_META[lang].keywords,
    openGraph: {
      title: COMPANY_META[lang].title,
      description: COMPANY_META[lang].description,
      type: 'website',
      locale: lang === 'es' ? 'es_ES' : 'en_US',
      siteName: 'Top Glass Repairs',
      images: [
        {
          url: 'https://topglassrepairs.com/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Top Glass Repairs - Professional Glass & Mirror Services'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: COMPANY_META[lang].title,
      description: COMPANY_META[lang].description,
      images: ['https://topglassrepairs.com/images/og-image.jpg']
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
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

export function generateLocalBusinessSchema(lang: Language) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://topglassrepairs.com/#business',
    name: CONTACT_INFO.companyName,
    description: COMPANY_META[lang].description,
    url: 'https://topglassrepairs.com',
    telephone: CONTACT_INFO.office,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Long Beach',
      addressRegion: 'CA',
      postalCode: '90813',
      addressCountry: 'US',
      streetAddress: CONTACT_INFO.address
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.7701',
      longitude: '-118.1937'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00'
      }
    ],
    priceRange: '$$',
    image: [
      'https://topglassrepairs.com/images/storefront.jpg',
      'https://topglassrepairs.com/images/glass-work.jpg'
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Los Angeles'
      },
      {
        '@type': 'City',
        name: 'Long Beach'
      },
      {
        '@type': 'City',
        name: 'Orange County'
      }
    ],
    sameAs: [
      'https://facebook.com/topglassrepairs',
      'https://instagram.com/topglassrepairs',
      'https://twitter.com/topglassrepairs'
    ]
  };
}

export function generateFAQSchema(lang: Language, faqs: Array<{question: string; answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateServiceSchema(lang: Language, service: {
  name: string;
  description: string;
  price?: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: generateLocalBusinessSchema(lang),
    serviceType: service.category || 'Glass Repair Service',
    areaServed: {
      '@type': 'State',
      name: 'California'
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://topglassrepairs.com',
      servicePhone: CONTACT_INFO.office,
      serviceSmsNumber: CONTACT_INFO.office
    },
    hoursAvailable: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00'
      }
    ],
    priceRange: service.price || '$$'
  };
}

export function generateBreadcrumbSchema(lang: Language, items: Array<{name: string; url: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateBlogPostSchema(post: {
  title: string;
  description: string;
  author: string;
  authorRole?: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  content: string;
}, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://topglassrepairs.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole || 'Glass Expert'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Top Glass Repairs',
      logo: {
        '@type': 'ImageObject',
        url: 'https://topglassrepairs.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://topglassrepairs.com/en/blog/${slug}`
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount: post.content.split(' ').length
  };
}
