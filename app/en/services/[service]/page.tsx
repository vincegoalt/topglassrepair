import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadata as generateSeoMetadata, generateStructuredData } from '@/app/utils/seo';
import { services } from '@/app/lib/services';
import { locations } from '@/app/lib/locations';
import Hero from '@/app/components/sections/Hero';
import Features from '@/app/components/sections/Features';
import LocationGrid from '@/app/components/grids/LocationGrid';
import CallToAction from '@/app/components/sections/CallToAction';
import Breadcrumbs, { generateServiceBreadcrumbs } from '@/app/components/navigation/Breadcrumbs';

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find(s => s.slug.en === params.service);
  if (!service) return {};

  const metadata = generateSeoMetadata('en');
  return {
    ...metadata,
    title: `${service.name.en} in Los Angeles | JC Glass & Mirrors`,
    description: `Professional ${service.name.en.toLowerCase()} services in Los Angeles. ${service.description.en}`,
    alternates: {
      canonical: `/en/services/${params.service}`,
      languages: {
        'en-US': `/en/services/${params.service}`,
        'es-ES': `/es/servicios/${service.slug.es}`,
      },
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug.en,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug.en === params.service);
  if (!service) notFound();

  const structuredData = generateStructuredData('en', 'Service', {
    name: service.name.en,
    description: service.description.en,
    provider: {
      name: 'JC Glass & Mirrors'
    }
  });

  // Features section data based on service features
  const features = service.features?.en.map((feature, index) => ({
    icon: ['🏆', '⚡', '💯', '🛡️', '💪', '🤝'][index % 6],
    title: feature,
    description: feature // For now using the feature as description
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
          items={generateServiceBreadcrumbs('en', service.name.en)}
          lang="en"
        />
      </div>

      {/* Hero Section */}
      <Hero
        title={service.name.en}
        description={service.description.en}
        imageUrl={service.imageUrl}
        imageAlt={service.name.en}
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
          title="Service Features"
          description="We provide comprehensive solutions tailored to your needs"
          features={features}
          lang="en"
          variant="list"
          background="light"
        />
      )}

      {/* Service Areas */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Service Areas
          </h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            We provide {service.name.en.toLowerCase()} services throughout Los Angeles County. 
            Find a location near you:
          </p>
          <LocationGrid
            locations={locations}
            lang="en"
            service={service.slug.en}
            variant="compact"
            columns={3}
          />
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title={`Need ${service.name.en}?`}
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
