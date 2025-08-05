const fs = require('fs');
const path = require('path');
const { services } = require('../app/lib/services');
const { locations } = require('../app/lib/locations');

const DOMAIN = 'https://topglassrepairs.com';

// Blog post slugs - in production, this would come from a CMS
const blogPosts = [
  'signs-you-need-window-replacement',
  'emergency-glass-repair-tips',
  'shower-door-maintenance-guide',
  'commercial-storefront-glass-benefits',
  'mirror-installation-design-ideas',
  'glass-safety-standards-california'
];

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
  images?: { loc: string; title?: string; caption?: string }[];
}

function generateUrl(
  urlPath: string, 
  priority: string, 
  changefreq: string, 
  alternates?: { hreflang: string; href: string }[],
  images?: { loc: string; title?: string; caption?: string }[]
): UrlEntry {
  const baseUrl = formatUrl(DOMAIN);
  return {
    loc: `${baseUrl}${urlPath}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq,
    priority,
    alternates,
    images,
  };
}

function generateSitemap() {
  const urls: UrlEntry[] = [];

  // Add homepage URLs with language alternates
  urls.push(generateUrl('/en', '1.0', 'weekly', [
    { hreflang: 'en', href: `${formatUrl(DOMAIN)}/en` },
    { hreflang: 'es', href: `${formatUrl(DOMAIN)}/es` },
    { hreflang: 'x-default', href: `${formatUrl(DOMAIN)}/en` },
  ]));

  urls.push(generateUrl('/es', '1.0', 'weekly', [
    { hreflang: 'en', href: `${formatUrl(DOMAIN)}/en` },
    { hreflang: 'es', href: `${formatUrl(DOMAIN)}/es` },
    { hreflang: 'x-default', href: `${formatUrl(DOMAIN)}/en` },
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

  // Add blog index page
  urls.push(generateUrl('/en/blog', '0.9', 'daily'));
  urls.push(generateUrl('/es/blog', '0.9', 'daily'));

  // Add individual blog posts
  blogPosts.forEach((slug) => {
    urls.push(generateUrl(`/en/blog/${slug}`, '0.8', 'monthly', undefined, [
      { loc: `${formatUrl(DOMAIN)}/images/blog/${slug}.jpg` }
    ]));
  });

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
    ], [
      { loc: service.imageUrl, title: service.name.en }
    ]));

    urls.push(generateUrl(esPath, '0.8', 'weekly', [
      { hreflang: 'en', href: `${formatUrl(DOMAIN)}${enPath}` },
      { hreflang: 'es', href: `${formatUrl(DOMAIN)}${esPath}` },
    ], [
      { loc: service.imageUrl, title: service.name.es }
    ]));

    // Add service + location pages (priority based on location importance)
    locations.forEach((location: any) => {
      const enLocationPath = `${enPath}/in/${location.slug}`;
      const esLocationPath = `${esPath}/en/${location.slug}`;
      
      // Higher priority for major cities
      const priority = ['los-angeles', 'beverly-hills', 'santa-monica'].includes(location.slug) ? '0.8' : '0.7';

      urls.push(generateUrl(enLocationPath, priority, 'weekly', [
        { hreflang: 'en', href: `${formatUrl(DOMAIN)}${enLocationPath}` },
        { hreflang: 'es', href: `${formatUrl(DOMAIN)}${esLocationPath}` },
      ]));

      urls.push(generateUrl(esLocationPath, priority, 'weekly', [
        { hreflang: 'en', href: `${formatUrl(DOMAIN)}${enLocationPath}` },
        { hreflang: 'es', href: `${formatUrl(DOMAIN)}${esLocationPath}` },
      ]));
    });
  });

  // Generate main sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>${url.alternates?.map(alt => `
    <xhtml:link 
      rel="alternate" 
      hreflang="${alt.hreflang}" 
      href="${alt.href}"/>`).join('')}${url.images?.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>${img.title ? `
      <image:title>${img.title}</image:title>` : ''}${img.caption ? `
      <image:caption>${img.caption}</image:caption>` : ''}
    </image:image>`).join('')}
  </url>`).join('')}
</urlset>`;

  // Generate sitemap index for better organization
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${formatUrl(DOMAIN)}/sitemap-main.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${formatUrl(DOMAIN)}/sitemap-blog.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${formatUrl(DOMAIN)}/sitemap-services.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`;

  // Split sitemaps for better organization
  const mainUrls = urls.filter(u => !u.loc.includes('/blog') && !u.loc.includes('/services/'));
  const blogUrls = urls.filter(u => u.loc.includes('/blog'));
  const serviceUrls = urls.filter(u => u.loc.includes('/services/'));

  // Generate individual sitemaps
  const generateSitemapXML = (urlList: UrlEntry[]) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${urlList.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>${url.alternates?.map(alt => `
    <xhtml:link 
      rel="alternate" 
      hreflang="${alt.hreflang}" 
      href="${alt.href}"/>`).join('')}${url.images?.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>${img.title ? `
      <image:title>${img.title}</image:title>` : ''}
    </image:image>`).join('')}
  </url>`).join('')}
</urlset>`;

  // Ensure the public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write all sitemap files
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), sitemapIndex);
  fs.writeFileSync(path.join(publicDir, 'sitemap-main.xml'), generateSitemapXML(mainUrls));
  fs.writeFileSync(path.join(publicDir, 'sitemap-blog.xml'), generateSitemapXML(blogUrls));
  fs.writeFileSync(path.join(publicDir, 'sitemap-services.xml'), generateSitemapXML(serviceUrls));

  console.log('Enhanced sitemaps generated successfully!');
  console.log(`Total URLs: ${urls.length}`);
  console.log(`Main: ${mainUrls.length}, Blog: ${blogUrls.length}, Services: ${serviceUrls.length}`);
}

generateSitemap();