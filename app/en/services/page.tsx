import { Metadata } from 'next';
import { generateMetadata as generateSeoMetadata, generateStructuredData } from '@/app/utils/seo';
import { services } from '@/app/lib/services';
import Hero from '@/app/components/sections/Hero';
import Features from '@/app/components/sections/Features';
import ServiceGrid from '@/app/components/grids/ServiceGrid';
import CallToAction from '@/app/components/sections/CallToAction';
import Breadcrumbs, { generateServiceBreadcrumbs } from '@/app/components/navigation/Breadcrumbs';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = generateSeoMetadata('en');
  return {
    ...metadata,
    alternates: {
      canonical: '/en/services',
      languages: {
        'en-US': '/en/services',
        'es-ES': '/es/servicios',
      },
    },
  };
}

export default function ServicesPage() {
  // Structured data for the services page
  const structuredData = generateStructuredData('en', 'Service', {
    name: 'Professional Glass & Mirror Services',
    description: 'Expert glass and mirror services in Los Angeles',
    provider: {
      name: 'JC Glass & Mirrors'
    }
  });

  // Features section data
  const features = [
    {
      icon: '🏆',
      title: 'Expert Craftsmanship',
      description: 'Years of experience delivering quality glass and mirror solutions.'
    },
    {
      icon: '⚡',
      title: '24/7 Service',
      description: 'Available around the clock for urgent glass repairs and replacements.'
    },
    {
      icon: '💯',
      title: 'Quality Materials',
      description: 'We use only the highest quality glass and mirror products.'
    },
    {
      icon: '🛡️',
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your peace of mind.'
    },
    {
      icon: '💪',
      title: 'Experienced Team',
      description: 'Skilled technicians with extensive industry experience.'
    },
    {
      icon: '🤝',
      title: 'Customer Satisfaction',
      description: 'Committed to exceeding your expectations with every service.'
    }
  ];

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
          items={generateServiceBreadcrumbs('en', 'Services')}
          lang="en"
        />
      </div>

      {/* Hero Section */}
      <Hero
        title="Professional Glass & Mirror Services"
        description="From residential window repairs to commercial storefronts, we provide comprehensive glass and mirror solutions tailored to your needs."
        imageUrl="/images/glass-and-mirror-company.jpg"
        imageAlt="Professional glass and mirror services"
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
        align="center"
      />

      {/* Features Section */}
      <Features
        title="Why Choose Us"
        description="With years of experience and a commitment to quality, we deliver exceptional glass and mirror solutions."
        features={features}
        lang="en"
        variant="grid"
        columns={3}
        background="light"
      />

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <ServiceGrid
            services={services}
            lang="en"
            showFeatured={true}
            columns={3}
          />
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Need Professional Glass Services?"
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
        variant="default"
        background="primary"
      />
    </>
  );
}
