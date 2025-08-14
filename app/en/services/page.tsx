import { Metadata } from 'next';
import { generateMetadata as generateSeoMetadata, generateStructuredData } from '@/app/utils/seo';
import { services } from '@/app/lib/services';
import Hero from '@/app/components/sections/Hero';
import Features from '@/app/components/sections/Features';
import ServiceGrid from '@/app/components/grids/ServiceGrid';
import CallToAction from '@/app/components/sections/CallToAction';
import Breadcrumbs, { generateServiceBreadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import ServiceShowcase from '@/app/components/sections/ServiceShowcase';

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

  // Features section data with SVG icons
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Expert Craftsmanship',
      description: 'Years of experience delivering quality glass and mirror solutions.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '24/7 Emergency Service',
      description: 'Available around the clock for urgent glass repairs and replacements.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Quality Materials',
      description: 'We use only the highest quality glass and mirror products.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your peace of mind.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Experienced Team',
      description: 'Skilled technicians with extensive industry experience.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
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
        showTrustIndicators={true}
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
        iconClassName="text-primary"
      />

      {/* Services Grid with enhanced styling */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive glass solutions tailored to your specific needs. From repairs to custom installations, we've got you covered.
            </p>
          </div>
          <ServiceGrid
            services={services}
            lang="en"
            showFeatured={true}
            columns={3}
          />
        </div>
      </section>

      {/* Service Showcase */}
      <ServiceShowcase lang="en" />

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
