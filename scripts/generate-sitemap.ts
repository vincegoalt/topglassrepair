const fs = require('fs');
const path = require('path');
const { services } = require('../app/lib/services');
const { locations } = require('../app/lib/locations');

const DOMAIN = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}`
  : 'https://topglassrepairs.com';

// Ensure proper URL formatting
function formatUrl(url: string): string {
  return url.startsWith('http') ? url : `https://${url}`;
}

interface UrlEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  alternates?: { hreflang: string; href: string }[];
}

function generateUrl(urlPath: string, priority: string, changefreq: string, alternates?: { hreflang: string; href: string }[]): UrlEntry {
  const baseUrl = formatUrl(DOMAIN);
  return {
    loc: `${baseUrl}${urlPath}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq,
    priority,
    alternates,
  };
}

function generateSitemap() {
  const urls: UrlEntry[] = [];

  // Add homepage URLs with language alternates
  urls.push(generateUrl('/en', '1.0', 'weekly', [
    { hreflang: 'en', href: `${formatUrl(DOMAIN)}/en` },
    { hreflang: 'es', href: `${formatUrl(DOMAIN)}/es` },
  ]));

  urls.push(generateUrl('/es', '1.0', 'weekly', [
    { hreflang: 'en', href: `${formatUrl(DOMAIN)}/en` },
    { hreflang: 'es', href: `${formatUrl(DOMAIN)}/es` },
  ]));

  // Add service index pages
  urls.push(generateUrl('/en/services', '0.9', 'weekly', [
    { hreflang: 'en', href: `${formatUrl(DOMAIN)}/en/services` },
    { hreflang: 'es', href: `${formatUrl(DOMAIN)}/es/servicios` },
  ]));

  urls.push(generateUrl('/es/servicios', '0.9', 'weekly', [
    { hreflang: 'en', href: `${formatUrl(DOMAIN)}/en/services` },
    { hreflang: 'es', href: `${formatUrl(DOMAIN)}/es/servicios` },
  ]));

  // Add contact pages
  urls.push(generateUrl('/en/contact', '0.8', 'monthly', [
    { hreflang: 'en', href: `${formatUrl(DOMAIN)}/en/contact` },
    { hreflang: 'es', href: `${formatUrl(DOMAIN)}/es/contacto` },
  ]));

  urls.push(generateUrl('/es/contacto', '0.8', 'monthly', [
    { hreflang: 'en', href: `${formatUrl(DOMAIN)}/en/contact` },
    { hreflang: 'es', href: `${formatUrl(DOMAIN)}/es/contacto` },
  ]));

  // Add individual service pages
  services.forEach((service: any) => {
    const enPath = `/en/services/${service.slug.en}`;
    const esPath = `/es/servicios/${service.slug.es}`;

    urls.push(generateUrl(enPath, '0.8', 'weekly', [
      { hreflang: 'en', href: `${formatUrl(DOMAIN)}${enPath}` },
      { hreflang: 'es', href: `${formatUrl(DOMAIN)}${esPath}` },
    ]));

    urls.push(generateUrl(esPath, '0.8', 'weekly', [
      { hreflang: 'en', href: `${formatUrl(DOMAIN)}${enPath}` },
      { hreflang: 'es', href: `${formatUrl(DOMAIN)}${esPath}` },
    ]));

    // Add service + location pages
    locations.forEach((location: any) => {
      const enLocationPath = `${enPath}/in/${location.slug.en}`;
      const esLocationPath = `${esPath}/en/${location.slug.es}`;

      urls.push(generateUrl(enLocationPath, '0.7', 'weekly', [
        { hreflang: 'en', href: `${formatUrl(DOMAIN)}${enLocationPath}` },
        { hreflang: 'es', href: `${formatUrl(DOMAIN)}${esLocationPath}` },
      ]));

      urls.push(generateUrl(esLocationPath, '0.7', 'weekly', [
        { hreflang: 'en', href: `${formatUrl(DOMAIN)}${enLocationPath}` },
        { hreflang: 'es', href: `${formatUrl(DOMAIN)}${esLocationPath}` },
      ]));
    });
  });

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>${url.alternates?.map(alt => `
    <xhtml:link 
      rel="alternate" 
      hreflang="${alt.hreflang}" 
      href="${alt.href}"/>`).join('')}
  </url>`).join('')}
</urlset>`;

  // Ensure the public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write the sitemap file
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();
