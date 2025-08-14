import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '../../../../../lib/services';
import { locations } from '../../../../../lib/locations';
import { locationContent, getLocationSchema, serviceAreaKeywords } from '../../../../../lib/seo-content';
import { 
  generateServiceLocationMetadata, 
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateLocalBusinessSchema
} from '../../../../../utils/seo';
import CallToAction from '../../../../../components/sections/CallToAction';

export async function generateStaticParams() {
  const params = [];
  for (const service of services) {
    for (const location of locations) {
      params.push({
        service: service.slug.en,
        location: location.slug.en,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { service: string; location: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug.en === params.service);
  const location = locations.find(l => l.slug.en === params.location);
  
  if (!service || !location) return {};
  
  const metadata = generateServiceLocationMetadata('en', service.name.en, location.name, service.slug.en, location.slug.en);
  const keywords = serviceAreaKeywords[params.location as keyof typeof serviceAreaKeywords] || [];
  
  return {
    ...metadata,
    keywords: [...(metadata.keywords || []), ...keywords],
    alternates: {
      canonical: `https://topglassrepairs.com/en/services/${params.service}/in/${params.location}`,
      languages: {
        'en-US': `/en/services/${params.service}/in/${params.location}`,
        'es-ES': `/es/servicios/${service.slug.es}/en/${params.location}`,
      },
    },
  };
}

const localFAQs = {
  'glass-repair': [
    {
      question: "How quickly can you provide glass repair service in {location}?",
      answer: "We offer same-day and emergency glass repair services in {location}. For urgent repairs, we can typically arrive within 2-4 hours. Regular appointments are usually available within 24-48 hours."
    },
    {
      question: "What types of glass can you repair in {location}?",
      answer: "We repair all types of glass in {location} including residential windows, commercial storefronts, shower doors, mirrors, table tops, and sliding glass doors. We work with tempered, laminated, insulated, and specialty glass."
    },
    {
      question: "Do you provide free estimates for glass repair in {location}?",
      answer: "Yes, we provide free on-site estimates for all glass repair services in {location}. Our technician will assess the damage and provide a detailed quote before beginning any work."
    },
    {
      question: "Are you licensed to perform glass repairs in {location}?",
      answer: "Yes, Top Glass Repairs is fully licensed, bonded, and insured to perform glass repairs in {location} and throughout California. We meet all local building codes and safety requirements."
    },
    {
      question: "What areas near {location} do you serve?",
      answer: "In addition to {location}, we serve all surrounding neighborhoods and communities within a 15-mile radius. Call us to confirm service availability in your specific area."
    }
  ],
  'window-replacement': [
    {
      question: "How long does window replacement take in {location}?",
      answer: "Most residential window replacements in {location} can be completed in 2-4 hours per window. Larger commercial projects may take 1-3 days depending on the scope."
    },
    {
      question: "Do you offer energy-efficient windows in {location}?",
      answer: "Yes, we specialize in energy-efficient window installations in {location}, including double-pane, Low-E glass, and argon-filled windows that can significantly reduce your energy bills."
    },
    {
      question: "What window brands do you install in {location}?",
      answer: "We install all major window brands in {location} and can also provide custom window solutions. We'll help you choose the best option for your budget and needs."
    }
  ]
};

export default function ServiceLocationPage({ params }: { params: { service: string; location: string } }) {
  const service = services.find(s => s.slug.en === params.service);
  const location = locations.find(l => l.slug.en === params.location);
  const locationData = locationContent[params.location];
  
  if (!service || !location) {
    notFound();
  }

  // Get FAQs for this service
  const serviceFAQs = localFAQs[params.service as keyof typeof localFAQs] || localFAQs['glass-repair'];
  const faqs = serviceFAQs.map(faq => ({
    question: faq.question.replace('{location}', location.name),
    answer: faq.answer.replace(/{location}/g, location.name)
  }));

  // Generate all structured data
  const breadcrumbSchema = generateBreadcrumbSchema('en', [
    { name: 'Home', url: 'https://topglassrepairs.com/en' },
    { name: 'Services', url: 'https://topglassrepairs.com/en/services' },
    { name: service.name.en, url: `https://topglassrepairs.com/en/services/${params.service}` },
    { name: location.name, url: `https://topglassrepairs.com/en/services/${params.service}/in/${params.location}` }
  ]);

  const serviceSchema = generateServiceSchema('en', {
    name: `${service.name.en} in ${location.name}`,
    description: `Professional ${service.name.en.toLowerCase()} services in ${location.name}, CA. ${service.description.en}`,
    category: service.name.en
  });

  const locationSchema = getLocationSchema(params.location, 'en');
  const faqSchema = generateFAQSchema('en', faqs);
  const businessSchema = generateLocalBusinessSchema('en');

  return (
    <>
      {/* Inject all structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {locationSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

      {/* Hero Section with Location-Specific Content */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <Image
          src={service.imageUrl}
          alt={`${service.name.en} in ${location.name}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {locationData ? locationData.hero.title : `${service.name.en} in ${location.name}`}
            </h1>
            <p className="text-xl mb-8">
              {locationData ? locationData.hero.subtitle : `Professional ${service.name.en.toLowerCase()} services in ${location.name}, CA. Available 24/7 for emergencies.`}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:(562) 436-2616" className="btn btn-accent">
                Call Now: (562) 436-2616
              </a>
              <Link href="/en/contact" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="bg-neutral-100 py-4">
        <div className="container mx-auto px-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            <li><Link href="/en" className="text-primary hover:underline">Home</Link></li>
            <li className="text-neutral-500">/</li>
            <li><Link href="/en/services" className="text-primary hover:underline">Services</Link></li>
            <li className="text-neutral-500">/</li>
            <li><Link href={`/en/services/${params.service}`} className="text-primary hover:underline">{service.name.en}</Link></li>
            <li className="text-neutral-500">/</li>
            <li className="text-neutral-700">{location.name}</li>
          </ol>
        </div>
      </nav>

      {/* Main Content Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                {service.name.en} Services in {location.name}, California
              </h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg">
                  {locationData ? locationData.about : `Looking for reliable ${service.name.en.toLowerCase()} services in ${location.name}? Top Glass Repairs has been serving the ${location.name} community with professional glass solutions for over 20 years. Our certified technicians provide fast, efficient service for both residential and commercial properties.`}
                </p>
              </div>

              {/* Service Features */}
              <div className="bg-secondary rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Our {service.name.en} Services in {location.name} Include:
                </h3>
                <ul className="space-y-3">
                  {locationData ? locationData.services.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  )) : service.features?.en.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Choose Us for Location */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose Top Glass Repairs in {location.name}?
                </h3>
                <p className="text-lg mb-4">
                  {locationData ? locationData.whyChoose : `When you need ${service.name.en.toLowerCase()} in ${location.name}, you want a company you can trust. Top Glass Repairs combines local expertise with professional excellence to deliver superior results every time.`}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">🚀</span>
                    <div>
                      <h4 className="font-semibold mb-1">Fast Response Time</h4>
                      <p className="text-neutral-600">Same-day service available throughout {location.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">💰</span>
                    <div>
                      <h4 className="font-semibold mb-1">Competitive Pricing</h4>
                      <p className="text-neutral-600">Fair rates with no hidden fees or surprises</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">🛡️</span>
                    <div>
                      <h4 className="font-semibold mb-1">Fully Insured</h4>
                      <p className="text-neutral-600">Licensed, bonded, and insured for your protection</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">⭐</span>
                    <div>
                      <h4 className="font-semibold mb-1">5-Star Service</h4>
                      <p className="text-neutral-600">Hundreds of satisfied customers in {location.name}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Process */}
              <div className="bg-neutral-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">
                  Our {service.name.en} Process in {location.name}
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold mb-1">Contact Us</h4>
                      <p className="text-neutral-600">Call (562) 436-2616 or fill out our online form for immediate assistance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold mb-1">Free Assessment</h4>
                      <p className="text-neutral-600">We&apos;ll visit your {location.name} property to evaluate the work needed</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold mb-1">Transparent Quote</h4>
                      <p className="text-neutral-600">Receive a detailed estimate with no hidden costs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-semibold mb-1">Professional Service</h4>
                      <p className="text-neutral-600">Our certified technicians complete the work efficiently and cleanly</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                    <div>
                      <h4 className="font-semibold mb-1">Quality Guarantee</h4>
                      <p className="text-neutral-600">We stand behind our work with comprehensive warranties</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-primary text-white rounded-lg p-6 mb-6 sticky top-6">
                <h3 className="text-xl font-bold mb-4">
                  Get {service.name.en} in {location.name} Today!
                </h3>
                <div className="space-y-4">
                  <a href="tel:(562) 436-2616" className="btn btn-accent w-full">
                    📞 (562) 436-2616
                  </a>
                  <Link href="/en/contact" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary w-full">
                    Request Free Quote
                  </Link>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm mb-2">Business Hours:</p>
                    <ul className="text-sm space-y-1">
                      <li>Mon-Fri: 8:00 AM - 6:00 PM</li>
                      <li>Saturday: 9:00 AM - 4:00 PM</li>
                      <li>Sunday: Emergency Only</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm mb-2">Emergency Service:</p>
                    <p className="text-lg font-semibold">Available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-secondary rounded-lg p-6 mb-6">
                <h3 className="font-bold mb-4">Nearby Service Areas</h3>
                <ul className="space-y-2">
                  {locations.filter(l => l.slug.en !== params.location).slice(0, 5).map((nearbyLocation) => (
                    <li key={nearbyLocation.id}>
                      <Link 
                        href={`/en/services/${params.service}/in/${nearbyLocation.slug.en}`}
                        className="text-primary hover:underline"
                      >
                        {service.name.en} in {nearbyLocation.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Services */}
              <div className="bg-neutral-100 rounded-lg p-6">
                <h3 className="font-bold mb-4">Other Services in {location.name}</h3>
                <ul className="space-y-2">
                  {services.filter(s => s.slug.en !== params.service).map((otherService) => (
                    <li key={otherService.id}>
                      <Link 
                        href={`/en/services/${otherService.slug.en}/in/${params.location}`}
                        className="text-primary hover:underline"
                      >
                        {otherService.name.en}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions About {service.name.en} in {location.name}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-neutral-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction lang="en" />
    </>
  );
}