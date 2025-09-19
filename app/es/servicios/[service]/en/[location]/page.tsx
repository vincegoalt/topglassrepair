import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { generateServiceLocationMetadata, generateStructuredData } from '@/app/utils/seo';
import { findServiceBySlug, services } from '@/app/lib/services';
import { findLocationBySlug, locations } from '@/app/lib/locations';
import { serviceAreaKeywords } from '@/app/lib/seo-content';
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
  const serviceMatch = findServiceBySlug(params.service, 'es');
  const locationMatch = findLocationBySlug(params.location, 'es');
  if (!serviceMatch || !locationMatch) return {};

  const { service, canonicalSlug: serviceSlug } = serviceMatch;
  const { location, canonicalSlug: locationSlug } = locationMatch;

  const metadata = generateServiceLocationMetadata('es', service.name.es, location.name, serviceSlug, locationSlug);
  const keywordSource = serviceAreaKeywords[location.slug.en as keyof typeof serviceAreaKeywords] || [];
  const keywords = new Set([...(metadata.keywords || []), ...keywordSource, service.name.es, location.name]);

  return {
    ...metadata,
    keywords: Array.from(keywords),
    alternates: {
      canonical: `https://topglassrepairs.com/es/servicios/${serviceSlug}/en/${locationSlug}`,
      languages: {
        'en-US': `/en/services/${service.slug.en}/in/${location.slug.en}`,
        'es-ES': `/es/servicios/${serviceSlug}/en/${locationSlug}`,
      },
    },
  };
}

export async function generateStaticParams() {
  const paths = [];
  for (const service of services) {
    for (const location of locations) {
      paths.push({
        service: service.slug.es,
        location: location.slug.es,
      });
    }
  }
  return paths;
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const serviceMatch = findServiceBySlug(params.service, 'es');
  const locationMatch = findLocationBySlug(params.location, 'es');
  if (!serviceMatch || !locationMatch) notFound();

  if (serviceMatch.shouldRedirect || locationMatch.shouldRedirect) {
    redirect(`/es/servicios/${serviceMatch.canonicalSlug}/en/${locationMatch.canonicalSlug}`);
  }

  const { service } = serviceMatch;
  const { location } = locationMatch;

  const structuredData = generateStructuredData('es', 'Service', {
    name: `${service.name.es} en ${location.name}`,
    description: `Servicios profesionales de ${service.name.es.toLowerCase()} en ${location.name}. ${service.description.es}`,
    provider: {
      name: 'JC Glass & Mirrors',
      areaServed: {
        name: location.name
      }
    }
  });

  // Features section data based on service features
  const features = service.features?.es.map((feature, index) => ({
    icon: ['🏆', '⚡', '💯', '🛡️', '💪', '🤝'][index % 6],
    title: feature,
    description: `${feature} en ${location.name}` // Localized description
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
          items={generateServiceLocationBreadcrumbs(
            'es',
            { name: service.name.es, slug: service.slug.es },
            { name: location.name, slug: location.slug.es }
          )}
          lang="es"
        />
      </div>

      {/* Hero Section */}
      <Hero
        title={`${service.name.es} en ${location.name}`}
        description={`Servicios profesionales de ${service.name.es.toLowerCase()} en ${location.name}. ${service.description.es}`}
        imageUrl={service.imageUrl}
        imageAlt={`${service.name.es} en ${location.name}`}
        lang="es"
        actions={{
          primary: {
            label: 'Obtener Presupuesto',
            href: 'tel:(562) 436-2616',
            isPhoneNumber: true
          },
          secondary: {
            label: 'Contáctenos',
            href: '/es/contacto'
          }
        }}
        size="medium"
        align="left"
      />

      {/* Features Section */}
      {features.length > 0 && (
        <Features
          title={`Características de ${service.name.es} en ${location.name}`}
          description="Brindamos soluciones integrales adaptadas a sus necesidades"
          features={features}
          lang="es"
          variant="list"
          background="light"
        />
      )}

      {/* Long-tail Keywords Section */}
      {service.longTailKeywords?.es && (
        <LongTailKeywords
          title={`Servicios de ${service.name.es} en ${location.name}`}
          description="Explore nuestras soluciones integrales de vidrio y espejos"
          keywords={service.longTailKeywords.es}
          lang="es"
          locationName={location.name}
          phone="(562) 436-2616"
        />
      )}

      {/* FAQ Section */}
      {service.faqs?.es && (
        <FAQSection
          title={`Preguntas Frecuentes sobre ${service.name.es} en ${location.name}`}
          description="Encuentre respuestas a las preguntas más comunes sobre nuestros servicios"
          faqs={service.faqs.es}
          lang="es"
          locationName={location.name}
        />
      )}

      {/* Call to Action */}
      <CallToAction
        title={`¿Necesita ${service.name.es} en ${location.name}?`}
        description="Contáctenos hoy para un presupuesto gratuito. Nuestro equipo de expertos está listo para ayudar con todas sus necesidades de vidrio y espejos."
        primaryAction={{
          label: 'Llame Ahora: (562) 436-2616',
          href: 'tel:(562) 436-2616',
          isPhoneNumber: true
        }}
        secondaryAction={{
          label: 'Contáctenos',
          href: '/es/contacto'
        }}
        lang="es"
        variant="withImage"
        background="primary"
        imageUrl={service.imageUrl}
      />
    </>
  );
}
