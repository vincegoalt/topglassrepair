import { Metadata } from 'next';
import { generateMetadata as generateSeoMetadata, generateStructuredData } from '@/app/utils/seo';
import { CONTACT_INFO } from '@/app/lib/config';
import ContactForm from '@/app/components/forms/ContactForm';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = generateSeoMetadata('es');
  return {
    ...metadata,
    title: 'Contáctenos | JC Glass & Mirrors',
    description: 'Contacte a JC Glass & Mirrors para servicios profesionales de vidrios y espejos en Los Ángeles. Disponible 24/7 para servicios de emergencia.',
    alternates: {
      canonical: '/es/contacto',
      languages: {
        'en-US': '/en/contact',
        'es-ES': '/es/contacto',
      },
    },
  };
}

export default function ContactPage() {
  const structuredData = generateStructuredData('es', 'LocalBusiness');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contáctenos</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Póngase en Contacto</h2>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <span className="text-primary mr-2">📍</span>
                    <span>{CONTACT_INFO.address}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-primary mr-2">📞</span>
                    <a 
                      href={`tel:${CONTACT_INFO.office}`}
                      className="hover:text-primary"
                    >
                      Oficina: {CONTACT_INFO.office}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="text-accent mr-2">🚨</span>
                    <a 
                      href={`tel:${CONTACT_INFO.emergency}`}
                      className="text-accent hover:text-accent/90"
                    >
                      Emergencia 24/7: {CONTACT_INFO.emergency}
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Horario de Atención</h2>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Cerrado</span>
                  </p>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-accent font-medium">
                      Servicio de Emergencia Disponible 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Envíenos un Mensaje</h2>
              <ContactForm lang="es" />
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Nuestra Ubicación</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.9555245226397!2d-118.1937!3d33.7701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ2JzEyLjQiTiAxMTjCsDExJzM3LjMiVw!5e0!3m2!1ses!2sus!4v1635000000000!5m2!1ses!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
