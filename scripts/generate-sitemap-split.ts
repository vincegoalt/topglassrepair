import * as fs from 'fs';
import * as path from 'path';
import { services } from '../app/lib/services';
import { locations } from '../app/lib/locations';

const SITE_URL = 'https://topglassrepairs.com';
const MAX_URLS_PER_SITEMAP = 10000;

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

function generateSitemapXML(urls: SitemapUrl[]): string {
  const urlElements = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${urlElements}
</urlset>`;
}

function generateSitemapIndex(sitemaps: string[]): string {
  const lastmod = new Date().toISOString();
  const sitemapElements = sitemaps.map(sitemap => `
  <sitemap>
    <loc>${SITE_URL}/${sitemap}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd">${sitemapElements}
</sitemapindex>`;
}

async function generateSitemaps() {
  const lastmod = new Date().toISOString();
  const allUrls: SitemapUrl[] = [];

  // Static pages with high priority
  const staticPages = [
    { path: '/', priority: 1.0, changefreq: 'daily' },
    { path: '/en', priority: 1.0, changefreq: 'daily' },
    { path: '/es', priority: 1.0, changefreq: 'daily' },
    { path: '/en/services', priority: 0.9, changefreq: 'weekly' },
    { path: '/es/servicios', priority: 0.9, changefreq: 'weekly' },
    { path: '/en/contact', priority: 0.8, changefreq: 'monthly' },
    { path: '/es/contacto', priority: 0.8, changefreq: 'monthly' },
    { path: '/en/blog', priority: 0.7, changefreq: 'weekly' },
  ];

  staticPages.forEach(page => {
    allUrls.push({
      loc: `${SITE_URL}${page.path}`,
      lastmod,
      changefreq: page.changefreq,
      priority: page.priority
    });
  });

  // Service pages
  services.forEach(service => {
    // English service pages
    allUrls.push({
      loc: `${SITE_URL}/en/services/${service.slug}`,
      lastmod,
      changefreq: 'weekly',
      priority: 0.8
    });

    // Spanish service pages
    allUrls.push({
      loc: `${SITE_URL}/es/servicios/${service.slug}`,
      lastmod,
      changefreq: 'weekly',
      priority: 0.8
    });
  });

  // Service + Location pages (highest volume)
  services.forEach(service => {
    locations.forEach(location => {
      // English service-location pages
      allUrls.push({
        loc: `${SITE_URL}/en/services/${service.slug}/in/${location.slug}`,
        lastmod,
        changefreq: 'weekly',
        priority: 0.7
      });

      // Spanish service-location pages
      allUrls.push({
        loc: `${SITE_URL}/es/servicios/${service.slug}/en/${location.slug}`,
        lastmod,
        changefreq: 'weekly',
        priority: 0.7
      });
    });
  });

  // Blog posts (add actual blog posts here)
  const blogPosts = [
    'emergency-glass-repair-what-to-do',
    'types-of-glass-for-home',
    'shower-door-maintenance-tips',
    'commercial-storefront-glass-benefits',
    'mirror-installation-guide'
  ];

  blogPosts.forEach(slug => {
    allUrls.push({
      loc: `${SITE_URL}/en/blog/${slug}`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.6
    });
  });

  // Split URLs into multiple sitemaps
  const sitemapFiles: string[] = [];
  const chunks = [];
  
  for (let i = 0; i < allUrls.length; i += MAX_URLS_PER_SITEMAP) {
    chunks.push(allUrls.slice(i, i + MAX_URLS_PER_SITEMAP));
  }

  // Generate individual sitemap files
  chunks.forEach((chunk, index) => {
    const filename = index === 0 ? 'sitemap-main.xml' : `sitemap-${index}.xml`;
    const xml = generateSitemapXML(chunk);
    
    fs.writeFileSync(
      path.join(process.cwd(), '..', 'public', filename),
      xml,
      'utf-8'
    );
    
    sitemapFiles.push(filename);
    console.log(`✅ Generated ${filename} with ${chunk.length} URLs`);
  });

  // Generate sitemap index
  const sitemapIndex = generateSitemapIndex(sitemapFiles);
  fs.writeFileSync(
    path.join(process.cwd(), '..', 'public', 'sitemap.xml'),
    sitemapIndex,
    'utf-8'
  );
  
  console.log(`✅ Generated sitemap index with ${sitemapFiles.length} sitemaps`);
  console.log(`📊 Total URLs: ${allUrls.length}`);
}

// Run the generator
generateSitemaps().catch(console.error);