import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '../lib/services';
import { locations } from '../lib/locations';
import { generateMetadata as generateSeoMetadata, generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from '../utils/seo';
import { getTranslation } from '../utils/languageClient';
import Hero from '../components/sections/Hero';
import ServiceGrid from '../components/grids/ServiceGrid';
import FAQSection from '../components/sections/FAQSection';
import CallToAction from '../components/sections/CallToAction';
import LongTailKeywords from '../components/sections/LongTailKeywords';
import ServiceShowcase from '../components/sections/ServiceShowcase';
import TrustIndicators from '../components/sections/TrustIndicators';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = generateSeoMetadata('en');
  return {
    ...metadata,
    alternates: {
      canonical: 'https://topglassrepairs.com/en',
      languages: {
        'en-US': '/en',
        'es-ES': '/es',
      },
    },
  };
}

const faqs = [
  {
    question: "How quickly can you repair broken glass in Los Angeles?",
    answer: "We offer 24/7 emergency glass repair services in Los Angeles and surrounding areas. Most emergency repairs can be completed within 2-4 hours of your call."
  },
  {
    question: "What types of glass do you repair and replace?",
    answer: "We handle all types of glass including window glass, storefront glass, shower doors, mirrors, table tops, glass doors, and automotive glass. We work with tempered, laminated, insulated, and specialty glass."
  },
  {
    question: "Do you provide free estimates for glass repair services?",
    answer: "Yes, we provide free on-site estimates for all glass repair and replacement services. Our technicians will assess the damage and provide a detailed quote before any work begins."
  },
  {
    question: "Are your glass repair services insured and licensed?",
    answer: "Absolutely! Top Glass Repairs is fully licensed, bonded, and insured in California. We carry comprehensive liability insurance and all our technicians are certified professionals."
  },
  {
    question: "What areas do you serve for glass repair?",
    answer: "We serve Los Angeles County including Long Beach, Santa Monica, Beverly Hills, Pasadena, Glendale, and Orange County areas. Call us to confirm service in your specific location."
  }
];

export default function HomePage() {
  // Generate all structured data
  const localBusinessSchema = generateLocalBusinessSchema('en');
  const faqSchema = generateFAQSchema('en', faqs);
  const breadcrumbSchema = generateBreadcrumbSchema('en', [
    { name: 'Home', url: 'https://topglassrepairs.com/en' }
  ]);

  return (
    <>
      {/* Inject all structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section with Rich Content */}
      <Hero 
        title="Expert Glass & Mirror Services in Los Angeles"
        description="Professional glass repair, replacement, and custom mirror solutions. Available 24/7 for emergency services."
        imageUrl="/images/glass-repair-replacement-company.jpeg"
        imageAlt="Professional glass and mirror services"
        lang="en"
        size="large"
        features={[
          "Licensed & Insured",
          "Same Day Service",
          "Free Estimates",
          "25+ Years Experience"
        ]}
        actions={{
          primary: {
            label: "Call Now: (562) 436-2616",
            href: "tel:(562) 436-2616",
            isPhoneNumber: true
          },
          secondary: {
            label: "View Services",
            href: "/en/services"
          }
        }}
      />

      {/* Trust Indicators Section */}
      <TrustIndicators lang="en" />

      {/* Services Section with Enhanced Content */}
      <section className="py-20 bg-white section-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-4 animate-fade-in">Professional Glass & Mirror Services in Los Angeles</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-600 animate-fade-in stagger-1">
            Top Glass Repairs has been serving Los Angeles County for over 20 years, providing expert glass repair, 
            replacement, and custom installation services. Whether you need emergency glass repair for your home, 
            commercial storefront glass replacement, or custom mirror installation, our certified technicians deliver 
            quality workmanship backed by our satisfaction guarantee.
          </p>
          <ServiceGrid services={services} lang="en" />
        </div>
      </section>

      {/* Service Showcase Section */}
      <ServiceShowcase lang="en" />

      {/* Location-Based SEO Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 animate-fade-in">Glass Repair Services Across Los Angeles County</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {locations.slice(0, 16).map((location, index) => (
              <Link
                key={location.id}
                href={`/en/services/glass-repair/in/${location.slug.en}`}
                className="glass p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-semibold text-primary block group-hover:text-accent transition-colors">{location.name}</span>
                <span className="text-sm text-gray-600 mt-1 block">Glass Repair</span>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-600 text-lg">
            Serving all of Los Angeles County including Beverly Hills, Santa Monica, Pasadena, Glendale, 
            Long Beach, Torrance, and surrounding areas with professional glass services.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section with Enhanced Design */}
      <section className="py-20 bg-white section-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16 animate-fade-in">Why Choose Top Glass Repairs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card group animate-fade-in stagger-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">24/7 Emergency Glass Repair</h3>
              <p className="text-gray-600">
                Broken glass can't wait. Our emergency response team is available 24 hours a day, 
                7 days a week for urgent glass repair needs in Los Angeles. We'll secure your property 
                and complete repairs quickly.
              </p>
            </div>
            <div className="feature-card group animate-fade-in stagger-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Licensed & Insured Professionals</h3>
              <p className="text-gray-600">
                All our glass technicians are fully licensed, bonded, and insured in California. 
                We maintain comprehensive liability coverage and follow all safety protocols for 
                residential and commercial glass work.
              </p>
            </div>
            <div className="feature-card group animate-fade-in stagger-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Quality Glass Products</h3>
              <p className="text-gray-600">
                We use only premium quality glass from trusted manufacturers. Whether it's tempered 
                safety glass, energy-efficient double-pane windows, or custom mirrors, we ensure 
                lasting durability.
              </p>
            </div>
            <div className="feature-card group animate-fade-in stagger-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Competitive Pricing</h3>
              <p className="text-gray-600">
                Get fair, transparent pricing on all glass services. We provide free estimates and 
                work with insurance companies. No hidden fees or surprise charges - just honest, 
                competitive rates.
              </p>
            </div>
            <div className="feature-card group animate-fade-in stagger-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Same-Day Service Available</h3>
              <p className="text-gray-600">
                For non-emergency glass repairs and replacements, we offer convenient same-day 
                service throughout Los Angeles. Call before noon for same-day scheduling availability.
              </p>
            </div>
            <div className="feature-card group animate-fade-in stagger-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Warranty Protection</h3>
              <p className="text-gray-600">
                All our glass installations come with comprehensive warranty coverage. We stand 
                behind our work with guarantees on both materials and labor for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas with Rich Content */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Comprehensive Glass Services for Every Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Residential Glass Services</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Window glass repair and replacement</li>
                <li>• Sliding glass door repair</li>
                <li>• Shower door installation and repair</li>
                <li>• Custom mirror installation</li>
                <li>• Glass tabletop replacement</li>
                <li>• Storm window repair</li>
                <li>• Screen door and window repair</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Commercial Glass Services</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Storefront glass replacement</li>
                <li>• Commercial door repair</li>
                <li>• Office partition installation</li>
                <li>• Display case glass</li>
                <li>• Emergency board-up services</li>
                <li>• Safety glass installation</li>
                <li>• Automatic door repair</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} lang="en" />

      {/* Long Tail Keywords Section */}
      <LongTailKeywords lang="en" />

      {/* Final CTA */}
      <CallToAction 
        lang="en"
        title="Need Emergency Glass Repair?"
        description="Available 24/7 for urgent glass repairs and replacements throughout Los Angeles County."
        primaryAction={{
          label: "Call Now: (562) 436-2616",
          href: "tel:(562)436-2616",
          isPhoneNumber: true
        }}
        secondaryAction={{
          label: "Get Free Quote",
          href: "/en/contact"
        }}
      />
    </>
  );
}