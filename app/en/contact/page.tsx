import { Metadata } from 'next';
import { generateMetadata as generateSeoMetadata, generateStructuredData } from '@/app/utils/seo';
import { CONTACT_INFO } from '@/app/lib/config';
import ContactForm from '@/app/components/forms/ContactForm';
import Reviews from '@/app/components/Reviews';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = generateSeoMetadata('en');
  return {
    ...metadata,
    title: 'Contact Us | Glass & Mirrors repairs',
    description: 'Contact Top Glass & Mirrors repairs for professional glass and mirror services in Los Angeles. Available 24/7 for emergency services.',
    alternates: {
      canonical: '/en/contact',
      languages: {
        'en-US': '/en/contact',
        'es-ES': '/es/contacto',
      },
    },
  };
}

export default function ContactPage() {
  const structuredData = generateStructuredData('en', 'LocalBusiness');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section with Glass Effect */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Floating glass elements */}
        <div className="absolute top-10 right-10 w-64 h-64 glass rounded-full opacity-10 animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 glass rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-slide-up">
              We're here to help with all your glass and mirror needs. Available 24/7 for emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact Card */}
              <div className="glass rounded-2xl p-8 transform hover:scale-[1.02] transition-transform">
                <h2 className="text-3xl font-bold mb-6 text-gradient">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Address</h3>
                      <p className="text-gray-600">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="mb-2">
                        <a 
                          href={`tel:${CONTACT_INFO.office}`}
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          Office: {CONTACT_INFO.office}
                        </a>
                      </p>
                      <p>
                        <a 
                          href={`tel:${CONTACT_INFO.emergency}`}
                          className="text-accent font-semibold hover:text-accent/80 transition-colors"
                        >
                          24/7 Emergency: {CONTACT_INFO.emergency}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a 
                        href="mailto:info@topglassrepairs.com"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        info@topglassrepairs.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="glass rounded-2xl p-8 transform hover:scale-[1.02] transition-transform">
                <h2 className="text-3xl font-bold mb-6 text-gradient">Business Hours</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="font-medium">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-orange-500/10 rounded-xl">
                    <p className="text-accent font-semibold flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-2xl p-8 transform hover:scale-[1.02] transition-transform">
              <h2 className="text-3xl font-bold mb-8 text-gradient">Send Us a Message</h2>
              <ContactForm lang="en" />
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">What Our Customers Say</h2>
            <Reviews lang="en" />
          </div>

          {/* Map Section with Modern Design */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Find Us Here</h2>
            <div className="glass rounded-2xl p-2 shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.9555245226397!2d-118.1937!3d33.7701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ2JzEyLjQiTiAxMTjCsDExJzM3LjMiVw!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
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

          {/* Quick Actions */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href={`tel:${CONTACT_INFO.emergency}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent to-orange-500 p-8 text-white text-center shadow-xl transform transition-all hover:scale-105"
            >
              <div className="relative z-10">
                <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Emergency Service</h3>
                <p className="text-white/90">Available 24/7</p>
              </div>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>

            <a 
              href="/en/services"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-blue-600 p-8 text-white text-center shadow-xl transform transition-all hover:scale-105"
            >
              <div className="relative z-10">
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Our Services</h3>
                <p className="text-white/90">View all services</p>
              </div>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>

            <a 
              href={`tel:${CONTACT_INFO.office}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-700 to-gray-900 p-8 text-white text-center shadow-xl transform transition-all hover:scale-105"
            >
              <div className="relative z-10">
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Schedule Service</h3>
                <p className="text-white/90">Book appointment</p>
              </div>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}