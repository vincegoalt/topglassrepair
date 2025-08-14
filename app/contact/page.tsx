import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - 24/7 Glass Repair Los Angeles | Top Glass Repairs',
  description: 'Contact Top Glass Repairs for emergency glass service in Los Angeles. Available 24/7. Free estimates. Call (562) 436-2616',
  alternates: {
    canonical: 'https://topglassrepairs.com/contact',
  },
}

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Top Glass Repairs',
      telephone: '(562) 436-2616',
      email: 'info@topglassrepairs.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Main St',
        addressLocality: 'Los Angeles',
        addressRegion: 'CA',
        postalCode: '90001',
        addressCountry: 'US'
      },
      openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Top Glass Repairs</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Get in touch for free estimates, emergency service, or any questions about our glass repair services.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">24/7 Emergency Service</h3>
              <a href="tel:5624362616" className="text-3xl font-bold text-blue-600 hover:text-blue-800">
                📞 (562) 436-2616
              </a>
              <p className="text-gray-600 mt-2">Available round the clock for urgent repairs</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Emergency Service:</strong> 24/7</p>
                <p><strong>Office Hours:</strong></p>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Emergency calls only</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Service Area</h3>
              <p className="text-gray-600">
                We serve all of Los Angeles County including Beverly Hills, Santa Monica, 
                Pasadena, Long Beach, Glendale, and surrounding areas.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Request a Free Quote</h2>
            <form className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 font-bold mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="window-replacement">Window Glass Replacement</option>
                  <option value="shower-door">Shower Door Installation</option>
                  <option value="mirror">Mirror Installation</option>
                  <option value="storefront">Storefront Glass</option>
                  <option value="emergency">Emergency Repair</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Please describe your glass repair needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-6">Our emergency team is standing by 24/7</p>
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