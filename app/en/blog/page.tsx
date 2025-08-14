import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateBreadcrumbSchema } from '../../utils/seo';

export const metadata: Metadata = {
  title: 'Glass Repair Blog | Tips, Guides & Industry News | Top Glass Repairs',
  description: 'Expert advice on glass repair, maintenance tips, and industry insights. Learn about window repair, glass safety, and home improvement from Los Angeles glass professionals.',
  keywords: ['glass repair blog', 'window maintenance tips', 'glass safety guide', 'home improvement', 'Los Angeles glass experts'],
  openGraph: {
    title: 'Glass Repair Blog | Top Glass Repairs',
    description: 'Expert glass repair tips and industry insights from Los Angeles professionals',
    type: 'website',
  }
};

// Sample blog posts - in production, these would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    slug: 'signs-you-need-window-replacement',
    title: '7 Signs You Need Window Glass Replacement in Your Los Angeles Home',
    excerpt: 'Learn the key indicators that your windows need replacement, from energy efficiency issues to visible damage that compromises your home\'s security.',
    date: '2025-02-01',
    author: 'Mike Johnson',
    category: 'Window Repair',
    image: '/images/blog/window-replacement-signs.jpg',
    readTime: '5 min read'
  },
  {
    id: 2,
    slug: 'emergency-glass-repair-tips',
    title: 'What to Do When You Have Broken Glass: Emergency Tips for LA Homeowners',
    excerpt: 'Step-by-step guide on handling broken glass emergencies safely, securing your property, and when to call professional glass repair services.',
    date: '2025-01-28',
    author: 'Sarah Martinez',
    category: 'Emergency Services',
    image: '/images/blog/emergency-glass-repair.jpg',
    readTime: '4 min read'
  },
  {
    id: 3,
    slug: 'shower-door-maintenance-guide',
    title: 'Complete Guide to Shower Door Maintenance and Care',
    excerpt: 'Keep your shower doors crystal clear and functioning smoothly with these professional maintenance tips from our glass experts.',
    date: '2025-01-25',
    author: 'Tom Wilson',
    category: 'Maintenance',
    image: '/images/blog/shower-door-care.jpg',
    readTime: '6 min read'
  },
  {
    id: 4,
    slug: 'commercial-storefront-glass-benefits',
    title: 'Benefits of Modern Storefront Glass for Los Angeles Businesses',
    excerpt: 'Discover how upgrading your commercial glass can improve energy efficiency, security, and curb appeal for your business.',
    date: '2025-01-20',
    author: 'Mike Johnson',
    category: 'Commercial',
    image: '/images/blog/storefront-glass.jpg',
    readTime: '7 min read'
  },
  {
    id: 5,
    slug: 'mirror-installation-design-ideas',
    title: '10 Creative Mirror Installation Ideas to Transform Your Space',
    excerpt: 'From statement walls to functional designs, explore innovative ways to use mirrors in your home or business.',
    date: '2025-01-15',
    author: 'Lisa Chen',
    category: 'Design',
    image: '/images/blog/mirror-design-ideas.jpg',
    readTime: '5 min read'
  },
  {
    id: 6,
    slug: 'glass-safety-standards-california',
    title: 'Understanding California Glass Safety Standards and Building Codes',
    excerpt: 'Everything you need to know about tempered glass requirements, safety regulations, and building codes in California.',
    date: '2025-01-10',
    author: 'Robert Davis',
    category: 'Safety',
    image: '/images/blog/glass-safety-standards.jpg',
    readTime: '8 min read'
  }
];

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema('en', [
    { name: 'Home', url: 'https://topglassrepairs.com/en' },
    { name: 'Blog', url: 'https://topglassrepairs.com/en/blog' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Glass Repair Blog</h1>
          <p className="text-xl">Expert tips, guides, and industry insights from Los Angeles glass professionals</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto relative">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="flex items-center gap-4 text-sm text-neutral-600 mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <span>{blogPosts[0].date}</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    <Link href={`/en/blog/${blogPosts[0].slug}`} className="hover:text-primary transition-colors">
                      {blogPosts[0].title}
                    </Link>
                  </h3>
                  <p className="text-neutral-700 mb-4">{blogPosts[0].excerpt}</p>
                  <Link 
                    href={`/en/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center text-primary font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-600 mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold mb-2">
                    <Link href={`/en/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">{post.date}</span>
                    <Link 
                      href={`/en/blog/${post.slug}`}
                      className="text-primary font-medium text-sm hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Categories Section */}
          <div className="mt-16 bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-4">
              {['Window Repair', 'Emergency Services', 'Maintenance', 'Commercial', 'Design', 'Safety', 'Installation Guides'].map((category) => (
                <Link
                  key={category}
                  href={`/en/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with Glass Care Tips</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Get monthly tips on glass maintenance, safety updates, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-neutral-900"
                required
              />
              <button type="submit" className="px-6 py-3 bg-accent text-neutral-900 font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}