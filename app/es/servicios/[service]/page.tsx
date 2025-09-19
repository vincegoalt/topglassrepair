import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { generateStructuredData } from '@/app/utils/seo';
import { findServiceBySlug, services } from '@/app/lib/services';
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
  const match = findServiceBySlug(params.service, 'es');
  if (!match) return {};

  const { service, canonicalSlug } = match;
  const featureSnippet = service.features?.es?.slice(0, 3).join(', ');
  const descriptionParts = [
    `Top Glass Repairs ofrece ${service.name.es.toLowerCase()} en todo el Condado de Los Ángeles.`,
    featureSnippet ? `Servicios destacados: ${featureSnippet}.` : undefined,
    service.description.es
  ].filter(Boolean) as string[];

  const keywordSet = new Set<string>([
    service.name.es,
    service.slug.es.replace(/-/g, ' '),
    ...(service.features?.es ?? []),
    ...(service.longTailKeywords?.es?.slice(0, 3).map(keyword => keyword.title.toLowerCase()) ?? [])
  ]);

  return {
    title: `${service.name.es} en Los Ángeles | Top Glass Repairs`,
    description: descriptionParts.join(' '),
    keywords: Array.from(keywordSet),
    alternates: {
      canonical: `https://topglassrepairs.com/es/servicios/${canonicalSlug}`,
      languages: {
        'en-US': `/en/services/${service.slug.en}`,
        'es-ES': `/es/servicios/${canonicalSlug}`,
      },
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug.es,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const match = findServiceBySlug(params.service, 'es');
  if (!match) notFound();

  if (match.shouldRedirect) {
    redirect(`/es/servicios/${match.canonicalSlug}`);
  }

  const { service } = match;

  const structuredData = generateStructuredData('es', 'Service', {
    name: service.name.es,
    description: service.description.es,
    provider: {
      name: 'JC Glass & Mirrors'
    }
  });

  // Features section data based on service features
  const features = service.features?.es.map((feature, index) => ({
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
          items={generateServiceBreadcrumbs('es', service.name.es)}
          lang="es"
        />
      </div>

      {/* Hero Section */}
      <Hero
        title={service.name.es}
        description={service.description.es}
        imageUrl={service.imageUrl}
        imageAlt={service.name.es}
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
          title="Características del Servicio"
          description="Brindamos soluciones integrales adaptadas a sus necesidades"
          features={features}
          lang="es"
          variant="list"
          background="light"
        />
      )}

      {/* Service Areas */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Áreas de Servicio
          </h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            Brindamos servicios de {service.name.es.toLowerCase()} en todo el Condado de Los Ángeles. 
            Encuentre una ubicación cerca de usted:
          </p>
          <LocationGrid
            locations={locations}
            lang="es"
            service={service.slug.es}
            variant="compact"
            columns={3}
          />
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title={`¿Necesita ${service.name.es}?`}
        description="Contáctenos hoy para un presupuesto gratuito. Nuestro equipo de expertos está listo para ayudar con todas sus necesidades de vidrios y espejos."
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
