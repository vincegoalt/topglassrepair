import { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { findLocationBySlug, locations } from '@/app/lib/locations';
import { services } from '@/app/lib/services';
import { locationContent, getLocationSchema } from '@/app/lib/seo-content';
import {
  generateLocationMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema
} from '@/app/utils/seo';
import CallToAction from '@/app/components/sections/CallToAction';
import LocationGrid from '@/app/components/grids/LocationGrid';
import PhoneLink from '@/app/components/PhoneLink';

const defaultHighlights = [
  'Residential & commercial glass replacement',
  'Custom shower door design and installation',
  '24/7 emergency board-up and glass service',
  'Custom mirrors for bathrooms, gyms, and retail',
  'Storefront glass fabrication and upgrades'
];

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug.en,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const match = findLocationBySlug(params.slug, 'en');
  if (!match) return {};

  const { location, canonicalSlug } = match;
  const metadata = generateLocationMetadata('en', location.name, canonicalSlug);
  const content = locationContent[location.slug.en];

  const description = content
    ? `${content.hero.title} ${content.hero.subtitle}`
    : `Top Glass Repairs provides residential and commercial glass services in ${location.name}, CA with same-day emergency support.`;

  return {
    ...metadata,
    description,
    alternates: {
      canonical: `https://topglassrepairs.com/locations/${canonicalSlug}`,
    },
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const match = findLocationBySlug(params.slug, 'en');
  if (!match) {
    notFound();
  }

  if (match.shouldRedirect) {
    redirect(`/locations/${match.canonicalSlug}`);
  }

  const { location } = match;
  const canonicalSlug = location.slug.en;
  const content = locationContent[canonicalSlug];

  const heroTitle = content?.hero.title ?? `Glass Repair Services in ${location.name}`;
  const heroSubtitle = content?.hero.subtitle ?? '24/7 emergency response • Licensed & insured technicians • Free onsite estimates';
  const aboutCopy = content?.about ?? `Top Glass Repairs is the trusted glass contractor for homes and businesses in ${location.name}. Our local technicians deliver fast turnarounds for window replacement, shower enclosures, storefront glass, and custom mirrors throughout Los Angeles County.`;
  const highlights = content?.services ?? defaultHighlights;
  const whyChoose = content?.whyChoose ?? 'We combine 20+ years of experience with swift emergency response times and premium materials to keep your property secure, efficient, and looking its best.';

  const breadcrumbSchema = generateBreadcrumbSchema('en', [
    { name: 'Home', url: 'https://topglassrepairs.com/en' },
    { name: 'Service Areas', url: 'https://topglassrepairs.com/locations' },
    { name: location.name, url: `https://topglassrepairs.com/locations/${canonicalSlug}` }
  ]);

  const faqSchema = generateFAQSchema('en', [
    {
      question: `Do you offer emergency glass repair in ${location.name}?`,
      answer: `Yes. Our ${location.name} technicians are on-call 24/7 for emergency board-up and glass replacement services.`
    },
    {
      question: `Which glass services are available in ${location.name}?`,
      answer: `We provide window repair and replacement, shower door installation, mirror fabrication, storefront glass, and custom projects throughout ${location.name}.`
    },
    {
      question: `How quickly can you arrive in ${location.name}?`,
      answer: `Most appointments in ${location.name} are scheduled within 24 hours, and emergency calls typically receive a 2–4 hour response.`
    }
  ]);

  const locationSchema = getLocationSchema(canonicalSlug, 'en');
  const businessSchema = generateLocalBusinessSchema('en');

  const topServices = services.slice(0, 6);
  const nearbyLocations = locations
    .filter((other) => other.slug.en !== canonicalSlug)
    .slice(0, 9);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {locationSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="uppercase tracking-wide text-white/80 text-sm mb-2">Service Area</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-solid text-white">{heroTitle}</h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">{heroSubtitle}</p>
            <div className="flex flex-wrap gap-4">
              <PhoneLink phoneNumber="(562) 436-2616" className="btn btn-accent" eventLabel="location_page_cta">
                Call (562) 436-2616
              </PhoneLink>
              <Link href="/en/contact" className="btn btn-glass text-white">
                Book Onsite Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 grid gap-12 md:grid-cols-[2fr,1fr]">
          <div>
            <h2 className="text-3xl font-bold mb-4">Glass Experts Serving {location.name}, California</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">{aboutCopy}</p>

            <div className="bg-neutral-50 border border-neutral-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Popular Projects in {location.name}</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start text-neutral-700">
                    <span className="mr-2 text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="bg-neutral-900 text-white rounded-xl p-6 self-start">
            <h3 className="text-xl font-semibold mb-2 heading-solid text-white">Why Local Property Owners Choose Us</h3>
            <p className="text-white/80 mb-6">{whyChoose}</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-accent">⏱️</span>
                <span>Same-day emergency response</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">🛠️</span>
                <span>Licensed, bonded & insured installers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">🧾</span>
                <span>Insurance-ready estimates & documentation</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Request a Service in {location.name}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {topServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-sm border border-neutral-100 p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{service.name.en}</h3>
                <p className="text-neutral-600 mb-4 flex-1">{service.description.en}</p>
                <Link
                  href={`/en/services/${service.slug.en}/in/${canonicalSlug}`}
                  className="text-primary font-medium hover:text-primary/80"
                >
                  View {service.name.en} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Nearby Communities We Serve</h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-10">
            Our mobile glass team covers Los Angeles County with rapid response times. Explore additional service areas near {location.name}.
          </p>
          <LocationGrid
            locations={[location, ...nearbyLocations]}
            lang="en"
            columns={3}
            showFeatured
          />
        </div>
      </section>

      <CallToAction
        title={`Need Glass Service in ${location.name}?`}
        description="Schedule a free onsite estimate or call our emergency line for immediate assistance."
        primaryAction={{
          label: 'Call Now: (562) 436-2616',
          href: 'tel:(562) 436-2616',
          isPhoneNumber: true
        }}
        secondaryAction={{
          label: 'Request Estimate',
          href: '/en/contact'
        }}
        lang="en"
        variant="withImage"
        background="primary"
        imageUrl="/images/residential-glass-services.jpg"
      />
    </>
  );
}
