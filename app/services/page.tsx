import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glass Repair Services Los Angeles | Top Glass Repairs',
  description: 'Complete glass repair and replacement services in Los Angeles. Window glass, shower doors, mirrors, storefronts. 24/7 emergency service. Call (562) 436-2616',
  alternates: {
    canonical: 'https://topglassrepairs.com/services',
  },
}

const services = [
  {
    id: 'window-glass-replacement',
    name: 'Window Glass Replacement',
    description: 'Professional window glass replacement for residential and commercial properties. We handle single-pane, double-pane, and specialty glass windows.',
    features: ['Energy-efficient options', 'Same-day service', 'All window types', 'Free estimates'],
  },
  {
    id: 'shower-door-installation',
    name: 'Shower Door Installation',
    description: 'Custom shower doors and enclosures. Frameless, semi-frameless, and framed options available in various styles and finishes.',
    features: ['Frameless designs', 'Custom measurements', 'Safety glass', 'Professional installation'],
  },
  {
    id: 'mirror-installation',
    name: 'Mirror Installation',
    description: 'Custom mirrors for any space. Bathroom mirrors, gym mirrors, decorative mirrors, and mirrored walls.',
    features: ['Custom sizes', 'Various finishes', 'Wall-to-wall options', 'Professional mounting'],
  },
  {
    id: 'storefront-glass',
    name: 'Storefront Glass',
    description: 'Commercial storefront glass installation and repair. Enhance your business with modern glass solutions.',
    features: ['Security glass', 'Automatic doors', 'Emergency boarding', 'Insurance claims'],
  },
  {
    id: 'emergency-glass-repair',
    name: 'Emergency Glass Repair',
    description: '24/7 emergency glass repair service. Fast response for broken windows, doors, and other urgent glass needs.',
    features: ['24/7 availability', '2-hour response', 'Board-up service', 'Insurance assistance'],
  },
  {
    id: 'glass-table-tops',
    name: 'Glass Table Tops',
    description: 'Custom glass table tops cut to any size and shape. Tempered glass for safety and durability.',
    features: ['Custom shapes', 'Beveled edges', 'Tempered glass', 'Protective options'],
  },
]

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Glass Repair and Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Top Glass Repairs',
      telephone: '(562) 436-2616',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Los Angeles',
        addressRegion: 'CA',
      },
    },
    areaServed: {
      '@type': 'State',
      name: 'California',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Professional Glass Services in Los Angeles</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Top Glass Repairs offers comprehensive glass solutions for residential and commercial properties. 
          Available 24/7 for emergency service.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-3 text-blue-900">{service.name}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center mb-2">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`/services/${service.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">Contact us today for a free estimate on any glass service</p>
          <a
            href="tel:5624362616"
            className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 inline-block"
          >
            📞 Call Now: (562) 436-2616
          </a>
        </div>
      </div>
    </>
  )
}