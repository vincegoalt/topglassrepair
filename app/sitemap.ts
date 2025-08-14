import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://topglassrepairs.com'
  const lastModified = new Date()
  
  // Languages
  const languages = ['en', 'es']
  
  // Service slugs
  const services = [
    'window-glass-replacement',
    'shower-door-installation', 
    'mirror-installation',
    'storefront-glass',
    'emergency-glass-repair',
    'glass-table-tops',
  ]
  
  // Location slugs
  const locations = [
    'los-angeles',
    'beverly-hills',
    'santa-monica',
    'pasadena',
    'long-beach',
    'glendale',
    'burbank',
    'hollywood',
  ]
  
  const sitemap: MetadataRoute.Sitemap = []
  
  // Root URL
  sitemap.push({
    url: baseUrl,
    lastModified,
    changeFrequency: 'weekly',
    priority: 1,
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
      }
    }
  })
  
  // Language homepages
  languages.forEach(lang => {
    sitemap.push({
      url: `${baseUrl}/${lang}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })
  
  // Service index pages
  languages.forEach(lang => {
    const serviceBasePath = lang === 'es' ? 'servicios' : 'services'
    sitemap.push({
      url: `${baseUrl}/${lang}/${serviceBasePath}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/services`,
          es: `${baseUrl}/es/servicios`,
        }
      }
    })
  })
  
  // Individual service pages
  services.forEach(service => {
    // Add language-specific service pages
    languages.forEach(lang => {
      const serviceBasePath = lang === 'es' ? 'servicios' : 'services'
      sitemap.push({
        url: `${baseUrl}/${lang}/${serviceBasePath}/${service}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            en: `${baseUrl}/en/services/${service}`,
            es: `${baseUrl}/es/servicios/${service}`,
          }
        }
      })
    })
  })
  
  // Service location combination pages
  services.forEach(service => {
    locations.forEach(location => {
      languages.forEach(lang => {
        const serviceBasePath = lang === 'es' ? 'servicios' : 'services'
        const locationPrep = lang === 'es' ? 'en' : 'in'
        sitemap.push({
          url: `${baseUrl}/${lang}/${serviceBasePath}/${service}/${locationPrep}/${location}`,
          lastModified,
          changeFrequency: 'monthly',
          priority: 0.6,
          alternates: {
            languages: {
              en: `${baseUrl}/en/services/${service}/in/${location}`,
              es: `${baseUrl}/es/servicios/${service}/en/${location}`,
            }
          }
        })
      })
    })
  })
  
  // Location pages (language-neutral)
  locations.forEach(location => {
    sitemap.push({
      url: `${baseUrl}/locations/${location}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })
  
  // Contact pages
  languages.forEach(lang => {
    const contactPath = lang === 'es' ? 'contacto' : 'contact'
    sitemap.push({
      url: `${baseUrl}/${lang}/${contactPath}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/contact`,
          es: `${baseUrl}/es/contacto`,
        }
      }
    })
  })
  
  return sitemap
}