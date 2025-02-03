import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '../lib/services';
import { generateMetadata as generateSeoMetadata, generateStructuredData } from '../utils/seo';
import { getTranslation } from '../utils/languageClient';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = generateSeoMetadata('en');
  return {
    ...metadata,
    alternates: {
      canonical: '/en',
      languages: {
        'en-US': '/en',
        'es-ES': '/es',
      },
    },
  };
}

export default function HomePage() {
  // Structured data for the homepage
  const structuredData = generateStructuredData('en', 'LocalBusiness');

  return (
    <>
      {/* Inject structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <Image
          src="/images/glass-and-mirror-company.jpg"
          alt="Professional glass and mirror services"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl md:text-6xl font-bold">
              Expert Glass & Mirror Services in Los Angeles
            </h1>
            <p className="text-xl mb-8">
              Professional glass repair, replacement, and custom mirror solutions. Available 24/7 for emergency services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:(562) 436-2616" className="btn btn-accent">
                {getTranslation('callToAction', 'en')}
              </a>
              <Link href="/en/services" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
                {getTranslation('services', 'en')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/en/services/${service.slug.en}`}
                className="card card-hover"
              >
                <div className="relative h-48">
                  <Image
                    src={service.imageUrl}
                    alt={service.name.en}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.name.en}</h3>
                  <p className="text-neutral-600 mb-4">{service.description.en}</p>
                  <span className="text-primary font-medium">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Expert Craftsmanship',
                description: 'Years of experience delivering quality glass and mirror solutions.'
              },
              {
                icon: '⚡',
                title: '24/7 Emergency Service',
                description: 'Available around the clock for urgent glass repairs and replacements.'
              },
              {
                icon: '💯',
                title: 'Quality Materials',
                description: 'We use only the highest quality glass and mirror products.'
              },
              {
                icon: '🤝',
                title: 'Customer Satisfaction',
                description: 'Committed to exceeding your expectations with every service.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Need Professional Glass Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate. Our team of experts is ready to help with all your glass and mirror needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:(562) 436-2616" className="btn btn-accent">
              Call Now: (562) 436-2616
            </a>
            <Link href="/en/contact" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
