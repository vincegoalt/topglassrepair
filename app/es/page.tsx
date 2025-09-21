import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '../lib/services';
import { generateMetadata as generateSeoMetadata, generateStructuredData } from '../utils/seo';
import { getTranslation } from '../utils/languageClient';
import PhoneLink from '../components/PhoneLink';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = generateSeoMetadata('es');
  return {
    ...metadata,
    alternates: {
      canonical: '/es',
      languages: {
        'en-US': '/en',
        'es-ES': '/es',
      },
    },
  };
}

export default function HomePage() {
  // Structured data for the homepage
  const structuredData = generateStructuredData('es', 'LocalBusiness');

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
          alt="Servicios profesionales de vidrios y espejos"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl md:text-6xl font-bold">
              Servicios Expertos de Vidrios y Espejos en Los Ángeles
            </h1>
            <p className="text-xl mb-8">
              Servicios profesionales de reparación, reemplazo y soluciones personalizadas de espejos. Disponible 24/7 para servicios de emergencia.
            </p>
            <div className="flex flex-wrap gap-4">
              <PhoneLink phoneNumber="(562) 436-2616" className="btn btn-accent" eventLabel="main_page_cta">
                {getTranslation('callToAction', 'es')}
              </PhoneLink>
              <Link href="/es/servicios" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
                {getTranslation('services', 'es')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/es/servicios/${service.slug.es}`}
                className="card card-hover"
              >
                <div className="relative h-48">
                  <Image
                    src={service.imageUrl}
                    alt={service.name.es}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.name.es}</h3>
                  <p className="text-neutral-600 mb-4">{service.description.es}</p>
                  <span className="text-primary font-medium">Más información →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">¿Por Qué Elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Artesanía Experta',
                description: 'Años de experiencia brindando soluciones de calidad en vidrios y espejos.'
              },
              {
                icon: '⚡',
                title: 'Servicio 24/7',
                description: 'Disponibles las 24 horas para reparaciones y reemplazos urgentes.'
              },
              {
                icon: '💯',
                title: 'Materiales de Calidad',
                description: 'Utilizamos solo productos de vidrio y espejo de la más alta calidad.'
              },
              {
                icon: '🤝',
                title: 'Satisfacción del Cliente',
                description: 'Comprometidos a superar sus expectativas con cada servicio.'
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
          <h2 className="mb-6">¿Necesita Servicios Profesionales de Vidrios?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctenos hoy para un presupuesto gratuito. Nuestro equipo de expertos está listo para ayudar con todas sus necesidades de vidrios y espejos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PhoneLink phoneNumber="(562) 436-2616" className="btn btn-accent" eventLabel="main_page_cta">
              Llame Ahora: (562) 436-2616
            </PhoneLink>
            <Link href="/es/contacto" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
              Contáctenos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
