import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadata as generateSeoMetadata, generateStructuredData } from '@/app/utils/seo';
import { services } from '@/app/lib/services';
import { locations } from '@/app/lib/locations';
import Hero from '@/app/components/sections/Hero';
import Features from '@/app/components/sections/Features';
import LongTailKeywords from '@/app/components/sections/LongTailKeywords';
import FAQSection from '@/app/components/sections/FAQSection';
import CallToAction from '@/app/components/sections/CallToAction';
import Breadcrumbs, { generateServiceLocationBreadcrumbs } from '@/app/components/navigation/Breadcrumbs';

interface ServiceLocationPageProps {
  params: {
    service: string;
    location: string;
  };
}

export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const service = services.find(s => s.slug.en === params.service);
  const location = locations.find(l => l.slug.en === params.location);
  if (!service || !location) return {};

  const metadata = generateSeoMetadata('en');
  return {
    ...metadata,
    title: `${service.name.en} in ${location.name} | JC Glass & Mirrors`,
    description: `Professional ${service.name.en.toLowerCase()} services in ${location.name}. ${service.description.en}`,
    alternates: {
      canonical: `/en/services/${params.service}/in/${params.location}`,
      languages: {
        'en-US': `/en/services/${params.service}/in/${params.location}`,
        'es-ES': `/es/servicios/${service.slug.es}/en/${location.slug.es}`,
      },
    },
  };
}

export async function generateStaticParams() {
  const paths = [];
  for (const service of services) {
    for (const location of locations) {
      paths.push({
        service: service.slug.en,
        location: location.slug.en,
      });
    }
  }
  return paths;
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const service = services.find(s => s.slug.en === params.service);
  const location = locations.find(l => l.slug.en === params.location);
  if (!service || !location) notFound();

  const structuredData = generateStructuredData('en', 'Service', {
    name: `${service.name.en} in ${location.name}`,
    description: `Professional ${service.name.en.toLowerCase()} services in ${location.name}. ${service.description.en}`,
    provider: {
      name: 'JC Glass & Mirrors',
      areaServed: {
        name: location.name
      }
    }
  });

  // Features section data based on service features
  const features = service.features?.en.map((feature, index) => ({
    icon: ['🏆', '⚡', '💯', '🛡️', '💪', '🤝'][index % 6],
    title: feature,
    description: `${feature} in ${location.name}` // Localized description
  })) || [];

  return (
    <>
      {/* Inject structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs
          items={generateServiceLocationBreadcrumbs('en', service.name.en, location.name)}
          lang="en"
        />
      </div>

      {/* Hero Section */}
      <Hero
        title={`${service.name.en} in ${location.name}`}
        description={`Professional ${service.name.en.toLowerCase()} services in ${location.name}. ${service.description.en}`}
        imageUrl={service.imageUrl}
        imageAlt={`${service.name.en} in ${location.name}`}
        lang="en"
        actions={{
          primary: {
            label: 'Get Free Estimate',
            href: 'tel:(562) 436-2616',
            isPhoneNumber: true
          },
          secondary: {
            label: 'Contact Us',
            href: '/en/contact'
          }
        }}
        size="medium"
        align="left"
      />

      {/* Features Section */}
      {features.length > 0 && (
        <Features
          title={`${service.name.en} Features in ${location.name}`}
          description="We provide comprehensive solutions tailored to your needs"
          features={features}
          lang="en"
          variant="list"
          background="light"
        />
      )}

      {/* Long-tail Keywords Section */}
      {service.longTailKeywords?.en && (
        <LongTailKeywords
          title={`${service.name.en} Services in ${location.name}`}
          description="Explore our comprehensive glass and mirror solutions"
          keywords={service.longTailKeywords.en}
          lang="en"
          locationName={location.name}
          phone="(562) 436-2616"
        />
      )}

      {/* FAQ Section */}
      {service.faqs?.en && (
        <FAQSection
          title={`${service.name.en} FAQs in ${location.name}`}
          description="Find answers to commonly asked questions about our services"
          faqs={service.faqs.en}
          lang="en"
          locationName={location.name}
        />
      )}

      {/* Call to Action */}
      <CallToAction
        title={`Need ${service.name.en} in ${location.name}?`}
        description="Contact us today for a free estimate. Our team of experts is ready to help with all your glass and mirror needs."
        primaryAction={{
          label: 'Call Now: (562) 436-2616',
          href: 'tel:(562) 436-2616',
          isPhoneNumber: true
        }}
        secondaryAction={{
          label: 'Contact Us',
          href: '/en/contact'
        }}
        lang="en"
        variant="withImage"
        background="primary"
        imageUrl={service.imageUrl}
      />
    </>
  );
}
