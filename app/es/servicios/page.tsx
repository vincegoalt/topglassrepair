import { Metadata } from 'next';
import { generateMetadata as generateSeoMetadata, generateStructuredData } from '@/app/utils/seo';
import { services } from '@/app/lib/services';
import Hero from '@/app/components/sections/Hero';
import Features from '@/app/components/sections/Features';
import ServiceGrid from '@/app/components/grids/ServiceGrid';
import CallToAction from '@/app/components/sections/CallToAction';
import Breadcrumbs, { generateServiceBreadcrumbs } from '@/app/components/navigation/Breadcrumbs';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = generateSeoMetadata('es');
  return {
    ...metadata,
    alternates: {
      canonical: '/es/servicios',
      languages: {
        'en-US': '/en/services',
        'es-ES': '/es/servicios',
      },
    },
  };
}

export default function ServicesPage() {
  // Structured data for the services page
  const structuredData = generateStructuredData('es', 'Service', {
    name: 'Servicios Profesionales de Vidrios y Espejos',
    description: 'Servicios expertos de vidrios y espejos en Los Ángeles',
    provider: {
      name: 'JC Glass & Mirrors'
    }
  });

  // Features section data
  const features = [
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
      icon: '🛡️',
      title: 'Licenciados y Asegurados',
      description: 'Totalmente licenciados, garantizados y asegurados para su tranquilidad.'
    },
    {
      icon: '💪',
      title: 'Equipo Experimentado',
      description: 'Técnicos calificados con amplia experiencia en la industria.'
    },
    {
      icon: '🤝',
      title: 'Satisfacción del Cliente',
      description: 'Comprometidos a superar sus expectativas con cada servicio.'
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
          items={generateServiceBreadcrumbs('es', 'Servicios')}
          lang="es"
        />
      </div>

      {/* Hero Section */}
      <Hero
        title="Servicios Profesionales de Vidrios y Espejos"
        description="Desde reparaciones de ventanas residenciales hasta fachadas comerciales, brindamos soluciones integrales de vidrios y espejos adaptadas a sus necesidades."
        imageUrl="/images/glass-and-mirror-company.jpg"
        imageAlt="Servicios profesionales de vidrios y espejos"
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
        align="center"
      />

      {/* Features Section */}
      <Features
        title="¿Por Qué Elegirnos?"
        description="Con años de experiencia y un compromiso con la calidad, brindamos soluciones excepcionales en vidrios y espejos."
        features={features}
        lang="es"
        variant="grid"
        columns={3}
        background="light"
      />

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <ServiceGrid
            services={services}
            lang="es"
            showFeatured={true}
            columns={3}
          />
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="¿Necesita Servicios Profesionales de Vidrios?"
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
        variant="default"
        background="primary"
      />
    </>
  );
}
