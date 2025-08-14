import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas - Glass Repair Los Angeles County | Top Glass Repairs',
  description: 'Top Glass Repairs serves all of Los Angeles County. Find glass repair services in your area. 24/7 emergency service. Call (562) 436-2616',
  alternates: {
    canonical: 'https://topglassrepairs.com/locations',
  },
}

const locations = [
  { name: 'Los Angeles', zip: '90001-90089', population: '4M+' },
  { name: 'Beverly Hills', zip: '90209-90213', population: '34K' },
  { name: 'Santa Monica', zip: '90401-90411', population: '92K' },
  { name: 'Pasadena', zip: '91101-91199', population: '142K' },
  { name: 'Long Beach', zip: '90801-90899', population: '467K' },
  { name: 'Glendale', zip: '91201-91210', population: '197K' },
  { name: 'Burbank', zip: '91501-91510', population: '103K' },
  { name: 'Hollywood', zip: '90028-90038', population: '90K' },
  { name: 'West Hollywood', zip: '90046-90069', population: '35K' },
  { name: 'Culver City', zip: '90230-90233', population: '40K' },
  { name: 'Marina del Rey', zip: '90292', population: '9K' },
  { name: 'Manhattan Beach', zip: '90266', population: '35K' },
  { name: 'Torrance', zip: '90501-90510', population: '147K' },
  { name: 'Inglewood', zip: '90301-90312', population: '108K' },
  { name: 'El Segundo', zip: '90245', population: '17K' },
  { name: 'Hawthorne', zip: '90250', population: '87K' },
  { name: 'Gardena', zip: '90247-90249', population: '61K' },
  { name: 'Compton', zip: '90220-90224', population: '95K' },
  { name: 'Carson', zip: '90745-90749', population: '93K' },
  { name: 'Downey', zip: '90239-90242', population: '113K' },
]

export default function LocationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ServiceArea',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Top Glass Repairs',
    },
    areaServed: locations.map(loc => ({
      '@type': 'City',
      name: loc.name,
      containedInPlace: {
        '@type': 'State',
        name: 'California',
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Glass Repair Service Areas</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Top Glass Repairs provides professional glass services throughout Los Angeles County. 
          Find us in your neighborhood with 24/7 emergency response.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {locations.map((location) => (
            <a
              key={location.name}
              href={`/locations/${location.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block"
            >
              <h2 className="text-xl font-bold text-blue-900 mb-2">{location.name}</h2>
              <p className="text-gray-600 text-sm mb-1">ZIP: {location.zip}</p>
              <p className="text-gray-600 text-sm mb-3">Population: {location.population}</p>
              <span className="text-blue-600 hover:text-blue-800 font-semibold">
                View Services →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Local Glass Experts?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="font-bold mb-2">Fast Response</h3>
              <p className="text-gray-600">Local technicians arrive quickly, often within 2 hours</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="font-bold mb-2">Know Your Area</h3>
              <p className="text-gray-600">Familiar with local building codes and requirements</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold mb-2">Community Trust</h3>
              <p className="text-gray-600">Serving your neighbors for over 20 years</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Serving All of Los Angeles County</h2>
          <p className="text-xl mb-6">No matter where you are, we&apos;re here to help</p>
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