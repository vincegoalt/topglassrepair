import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Image from 'next/image';
import { generateStructuredData } from '@/app/utils/seo';
import { findServiceBySlug, services } from '@/app/lib/services';
import { locations } from '@/app/lib/locations';
import Hero from '@/app/components/sections/Hero';
import Features from '@/app/components/sections/Features';
import LocationGrid from '@/app/components/grids/LocationGrid';
import CallToAction from '@/app/components/sections/CallToAction';
import Breadcrumbs, { generateServiceBreadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import ServiceShowcase from '@/app/components/sections/ServiceShowcase';
import FAQSection from '@/app/components/sections/FAQSection';
import { getServiceIcon } from '@/app/components/icons/ServiceIcons';
import PhoneLink from '@/app/components/PhoneLink';

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const match = findServiceBySlug(params.service, 'en');
  if (!match) return {};

  const { service, canonicalSlug } = match;
  const featureSnippet = service.features?.en?.slice(0, 3).join(', ');
  const descriptionParts = [
    `Top Glass Repairs provides ${service.name.en.toLowerCase()} across Los Angeles County.`,
    featureSnippet ? `Popular options include ${featureSnippet}.` : undefined,
    service.description.en
  ].filter(Boolean) as string[];

  const keywordSet = new Set<string>([
    service.name.en,
    service.slug.en.replace(/-/g, ' '),
    ...(service.features?.en ?? []),
    ...(service.longTailKeywords?.en?.slice(0, 3).map(keyword => keyword.title.toLowerCase()) ?? [])
  ]);

  return {
    title: `${service.name.en} Services in Los Angeles | Top Glass Repairs`,
    description: descriptionParts.join(' '),
    keywords: Array.from(keywordSet),
    alternates: {
      canonical: `https://topglassrepairs.com/en/services/${canonicalSlug}`,
      languages: {
        'en-US': `/en/services/${canonicalSlug}`,
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
  const match = findServiceBySlug(params.service, 'en');
  if (!match) notFound();

  if (match.shouldRedirect) {
    redirect(`/en/services/${match.canonicalSlug}`);
  }

  const { service } = match;

  const structuredData = generateStructuredData('en', 'Service', {
    name: service.name.en,
    description: service.description.en,
    provider: {
      name: 'JC Glass & Mirrors'
    }
  });

  // Features section data based on service features with SVG icons
  const getFeatureIcon = (index: number) => {
    const icons = [
      <svg key={`icon-${index}`} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
      <svg key={`icon-${index}`} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      <svg key={`icon-${index}`} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>,
      <svg key={`icon-${index}`} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      <svg key={`icon-${index}`} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>,
      <svg key={`icon-${index}`} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ];
    return icons[index % icons.length];
  };

  const features = service.features?.en.map((feature, index) => ({
    icon: getFeatureIcon(index),
    title: feature,
    description: feature
  })) || [];

  // Service-specific FAQ data
  const faqs = [
    {
      question: `How much does ${service.name.en.toLowerCase()} cost?`,
      answer: `The cost of ${service.name.en.toLowerCase()} varies based on the size, type of glass, and complexity of the installation. We offer free estimates to provide accurate pricing for your specific needs.`
    },
    {
      question: `How long does ${service.name.en.toLowerCase()} take?`,
      answer: `Most ${service.name.en.toLowerCase()} services can be completed within 2-4 hours. However, complex installations or custom orders may require additional time.`
    },
    {
      question: `Do you offer emergency ${service.name.en.toLowerCase()} services?`,
      answer: `Yes, we provide 24/7 emergency services for urgent ${service.name.en.toLowerCase()} needs. Call us anytime at (562) 436-2616.`
    },
    {
      question: `What warranty do you offer?`,
      answer: `We stand behind our work with a comprehensive warranty covering both materials and labor. Specific warranty terms vary by service type.`
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
          items={generateServiceBreadcrumbs('en', service.name.en)}
          lang="en"
        />
      </div>

      {/* Enhanced Hero Section with Service Icon */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* Floating glass elements */}
        <div className="absolute top-20 right-10 w-72 h-72 glass rounded-full opacity-10 animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 glass rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 p-4 glass-dark rounded-2xl backdrop-blur-lg">
                  {getServiceIcon(service.slug.en)}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-solid text-white">
                  {service.name.en}
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                {service.description.en}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <PhoneLink
                  phoneNumber="(562) 436-2616"
                  className="btn btn-accent"
                  eventLabel="service_page_cta"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Get Free Estimate
                </PhoneLink>
                <a 
                  href="/en/contact" 
                  className="btn btn-glass"
                >
                  Contact Us
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="badge badge-glass px-4 py-2 text-white">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Licensed & Insured
                </div>
                <div className="badge badge-glass px-4 py-2 text-white">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h.01A1 1 0 0014 5a2 2 0 00-2-2H6a2 2 0 00-2 2zm9 2a1 1 0 10-2 0v5a1 1 0 102 0V7zm-6 4a1 1 0 100 2v3a1 1 0 100-2v-3z" clipRule="evenodd" />
                  </svg>
                  24/7 Emergency
                </div>
                <div className="badge badge-glass px-4 py-2 text-white">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free Estimates
                </div>
              </div>
            </div>
            
            {/* Service image with overlay effect */}
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <Image
                  src={service.imageUrl}
                  alt={service.name.en}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 h-[400px] md:h-[500px] w-full rounded-2xl border-4 border-white/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with enhanced styling */}
      {features.length > 0 && (
        <Features
          title="Why Choose Our Service"
          description="Experience the difference with our professional approach and attention to detail"
          features={features}
          lang="en"
          variant="cards"
          columns={3}
          background="white"
        />
      )}

      {/* Service Showcase */}
      <ServiceShowcase lang="en" />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description={`Common questions about our ${service.name.en.toLowerCase()} services`}
        faqs={faqs.map(faq => ({ question: faq.question, answer: faq.answer }))}
        lang="en"
      />

      {/* Service Areas with enhanced design */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide {service.name.en.toLowerCase()} services throughout Los Angeles County. 
              Find a location near you:
            </p>
          </div>
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
