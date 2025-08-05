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
      <Hero />

      {/* Services Section with Enhanced Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-4">Professional Glass & Mirror Services in Los Angeles</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Top Glass Repairs has been serving Los Angeles County for over 20 years, providing expert glass repair, 
            replacement, and custom installation services. Whether you need emergency glass repair for your home, 
            commercial storefront glass replacement, or custom mirror installation, our certified technicians deliver 
            quality workmanship backed by our satisfaction guarantee.
          </p>
          <ServiceGrid services={services} lang="en" />
        </div>
      </section>

      {/* Location-Based SEO Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Glass Repair Services Across Los Angeles County</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {locations.slice(0, 16).map((location) => (
              <Link
                key={location.id}
                href={`/en/services/glass-repair/in/${location.slug}`}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-semibold text-primary">{location.name}</h3>
                <p className="text-sm text-neutral-600 mt-1">Glass Repair</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-neutral-600">
            Serving all of Los Angeles County including Beverly Hills, Santa Monica, Pasadena, Glendale, 
            Long Beach, Torrance, and surrounding areas with professional glass services.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section with Keywords */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Why Choose Top Glass Repairs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-bold mb-3">24/7 Emergency Glass Repair</h3>
              <p className="text-neutral-600">
                Broken glass can't wait. Our emergency response team is available 24 hours a day, 
                7 days a week for urgent glass repair needs in Los Angeles. We'll secure your property 
                and complete repairs quickly.
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-bold mb-3">Licensed & Insured Professionals</h3>
              <p className="text-neutral-600">
                All our glass technicians are fully licensed, bonded, and insured in California. 
                We maintain comprehensive liability coverage and follow all safety protocols for 
                residential and commercial glass work.
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-bold mb-3">Quality Glass Products</h3>
              <p className="text-neutral-600">
                We use only premium quality glass from trusted manufacturers. Whether it's tempered 
                safety glass, energy-efficient double-pane windows, or custom mirrors, we ensure 
                lasting durability.
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
              <p className="text-neutral-600">
                Get fair, transparent pricing on all glass services. We provide free estimates and 
                work with insurance companies. No hidden fees or surprise charges - just honest, 
                competitive rates.
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-bold mb-3">Same-Day Service Available</h3>
              <p className="text-neutral-600">
                For non-emergency glass repairs and replacements, we offer convenient same-day 
                service throughout Los Angeles. Call before noon for same-day scheduling availability.
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-bold mb-3">Warranty Protection</h3>
              <p className="text-neutral-600">
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
      <CallToAction lang="en" />
    </>
  );
}