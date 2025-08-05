import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  generateBreadcrumbSchema, 
  generateLocalBusinessSchema,
  generateBlogPostSchema 
} from '../../../utils/seo';

// Sample blog post data - in production, this would come from a CMS
const blogPosts = {
  'signs-you-need-window-replacement': {
    title: '7 Signs You Need Window Glass Replacement in Your Los Angeles Home',
    description: 'Learn the key indicators that your windows need replacement, from energy efficiency issues to visible damage that compromises your home\'s security.',
    content: `
      <p>As a homeowner in Los Angeles, your windows play a crucial role in maintaining comfort, security, and energy efficiency. But how do you know when it's time to replace them? Here are seven clear signs that indicate you need window glass replacement.</p>

      <h2>1. Visible Cracks or Damage</h2>
      <p>The most obvious sign is visible damage. Even small cracks can quickly spread, especially with temperature changes common in Los Angeles. Cracked glass compromises your home's security and can lead to injury if the glass shatters.</p>

      <h2>2. Drafts and Air Leaks</h2>
      <p>If you feel drafts near your windows or notice your curtains moving when they're closed, your windows are failing to seal properly. This is especially noticeable during Santa Ana winds or cool evenings.</p>

      <h2>3. Condensation Between Panes</h2>
      <p>Double-pane windows with condensation or fog between the glass layers have failed seals. This moisture reduces visibility and indicates the insulating gas has escaped, reducing energy efficiency.</p>

      <h2>4. Difficulty Opening or Closing</h2>
      <p>Windows that stick, won't stay open, or require excessive force to operate need attention. This could indicate frame damage, foundation settling, or hardware failure—all reasons to consider replacement.</p>

      <h2>5. Rising Energy Bills</h2>
      <p>If your energy costs keep climbing despite consistent usage, inefficient windows could be the culprit. Old or damaged windows force your HVAC system to work harder, especially during LA's hot summers.</p>

      <h2>6. Outside Noise Issues</h2>
      <p>Quality windows provide sound insulation. If street noise, neighbors, or aircraft have become more noticeable, your windows may have lost their acoustic properties.</p>

      <h2>7. Water Damage or Decay</h2>
      <p>Water stains, soft spots in the frame, or peeling paint around windows indicate moisture infiltration. This can lead to mold, structural damage, and costly repairs if not addressed promptly.</p>

      <h2>When to Call a Professional</h2>
      <p>If you notice any of these signs, it's time to consult with a glass professional. At Top Glass Repairs, we provide free assessments to help you determine whether repair or replacement is the best option for your situation.</p>

      <h2>Benefits of Window Replacement</h2>
      <ul>
        <li>Improved energy efficiency and lower utility bills</li>
        <li>Enhanced home security and safety</li>
        <li>Better noise reduction for peaceful living</li>
        <li>Increased property value and curb appeal</li>
        <li>Protection against UV damage to furniture and flooring</li>
      </ul>

      <h2>Choosing the Right Replacement Windows</h2>
      <p>When selecting new windows for your Los Angeles home, consider:</p>
      <ul>
        <li><strong>Energy Efficiency:</strong> Look for Energy Star certified windows with Low-E coatings</li>
        <li><strong>Frame Material:</strong> Vinyl, aluminum, or fiberglass for durability in our climate</li>
        <li><strong>Glass Type:</strong> Double or triple-pane with argon gas fill</li>
        <li><strong>Style:</strong> Match your home's architecture while improving functionality</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Don't wait for complete window failure before taking action. Recognizing these signs early can save you money and prevent more serious issues. Contact Top Glass Repairs today for a free window assessment and learn about your replacement options.</p>
    `,
    author: 'Mike Johnson',
    authorRole: 'Senior Glass Technician',
    date: '2025-02-01',
    readTime: '5 min read',
    image: '/images/blog/window-replacement-signs.jpg',
    category: 'Window Repair',
    tags: ['window replacement', 'home maintenance', 'energy efficiency', 'Los Angeles'],
    relatedPosts: ['emergency-glass-repair-tips', 'glass-safety-standards-california']
  },
  'emergency-glass-repair-tips': {
    title: 'What to Do When You Have Broken Glass: Emergency Tips for LA Homeowners',
    description: 'Step-by-step guide on handling broken glass emergencies safely, securing your property, and when to call professional glass repair services.',
    content: `
      <p>A broken window or shattered glass door is more than an inconvenience—it's a security risk and safety hazard. Whether caused by an accident, break-in attempt, or severe weather, knowing how to respond can protect your family and property. Here's your complete guide to handling glass emergencies.</p>

      <h2>Immediate Safety Steps</h2>
      <p>Your first priority is ensuring everyone's safety:</p>
      <ol>
        <li><strong>Keep everyone away</strong> from the broken glass area, especially children and pets</li>
        <li><strong>Wear protective gear</strong> before approaching—closed-toe shoes and work gloves at minimum</li>
        <li><strong>Turn on lights</strong> to spot all glass fragments, which can scatter surprisingly far</li>
        <li><strong>Document the damage</strong> with photos for insurance purposes before cleanup</li>
      </ol>

      <h2>Securing the Opening</h2>
      <p>Once the area is safe, you need to secure the opening:</p>

      <h3>For Small Breaks:</h3>
      <ul>
        <li>Apply clear packing tape in a crisscross pattern over cracks to prevent spreading</li>
        <li>Use a plastic sheet secured with duct tape for small holes</li>
        <li>Keep the area monitored until professional repair</li>
      </ul>

      <h3>For Large Openings:</h3>
      <ul>
        <li>Measure the opening carefully</li>
        <li>Cut plywood or heavy cardboard to size</li>
        <li>Secure firmly with screws or heavy-duty tape</li>
        <li>Ensure the temporary barrier is weatherproof</li>
      </ul>

      <h2>Proper Glass Cleanup</h2>
      <p>Never use a regular vacuum for glass cleanup—it can damage the vacuum and spread fine particles.</p>

      <h3>Cleanup Steps:</h3>
      <ol>
        <li><strong>Large pieces:</strong> Pick up carefully with gloved hands, place in a puncture-proof container</li>
        <li><strong>Medium fragments:</strong> Use a broom and dustpan, sweeping gently to avoid scattering</li>
        <li><strong>Small shards:</strong> Press a slice of bread or damp paper towel to collect tiny pieces</li>
        <li><strong>Final step:</strong> Mop with a damp mop to catch any remaining fragments</li>
      </ol>

      <h2>When to Call Emergency Glass Repair</h2>
      <p>Call professional emergency glass repair immediately if:</p>
      <ul>
        <li>The opening is too large to secure safely</li>
        <li>It's a street-facing window or door (security risk)</li>
        <li>There's structural damage to the frame</li>
        <li>It's a commercial property requiring immediate service</li>
        <li>Weather conditions threaten further damage</li>
      </ul>

      <h2>What to Expect from Emergency Service</h2>
      <p>Professional emergency glass repair services typically:</p>
      <ul>
        <li>Respond within 2-4 hours for true emergencies</li>
        <li>Provide temporary board-up if immediate replacement isn't possible</li>
        <li>Offer various glass options for permanent repair</li>
        <li>Handle insurance documentation and claims assistance</li>
        <li>Clean up all glass debris safely</li>
      </ul>

      <h2>Preventing Future Emergencies</h2>
      <p>While not all glass breaks are preventable, you can reduce risks:</p>
      <ul>
        <li>Install safety film on vulnerable windows</li>
        <li>Trim trees and secure outdoor furniture before storms</li>
        <li>Replace old, weakened glass proactively</li>
        <li>Consider tempered glass for high-risk areas</li>
        <li>Maintain window frames and hardware regularly</li>
      </ul>

      <h2>Insurance Considerations</h2>
      <p>Most homeowner's insurance covers glass damage, but:</p>
      <ul>
        <li>Document everything with photos and written descriptions</li>
        <li>Save all receipts for emergency repairs</li>
        <li>Get multiple estimates if time permits</li>
        <li>Understand your deductible versus repair cost</li>
        <li>Ask your glass repair company about direct insurance billing</li>
      </ul>

      <h2>Top Glass Repairs: Your Emergency Partner</h2>
      <p>When glass emergencies strike, you need a reliable partner. Top Glass Repairs offers:</p>
      <ul>
        <li>24/7 emergency response throughout Los Angeles</li>
        <li>Professional board-up services</li>
        <li>Same-day glass replacement when possible</li>
        <li>Insurance claim assistance</li>
        <li>Competitive emergency service rates</li>
      </ul>

      <p>Save our number now: <strong>(562) 436-2616</strong>. When glass breaks, we're ready to help.</p>
    `,
    author: 'Sarah Martinez',
    authorRole: 'Emergency Response Coordinator',
    date: '2025-01-28',
    readTime: '7 min read',
    image: '/images/blog/emergency-glass-repair.jpg',
    category: 'Emergency Services',
    tags: ['emergency repair', 'glass safety', 'home security', 'insurance claims'],
    relatedPosts: ['signs-you-need-window-replacement', 'glass-safety-standards-california']
  }
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Top Glass Repairs Blog`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `https://topglassrepairs.com/en/blog/${params.slug}`,
    },
  };
}

function generateBlogPostSchema(post: any, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://topglassrepairs.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole
    },
    publisher: {
      '@type': 'Organization',
      name: 'Top Glass Repairs',
      logo: {
        '@type': 'ImageObject',
        url: 'https://topglassrepairs.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://topglassrepairs.com/en/blog/${slug}`
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount: post.content.split(' ').length,
    timeRequired: `PT${parseInt(post.readTime)}M`
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema('en', [
    { name: 'Home', url: 'https://topglassrepairs.com/en' },
    { name: 'Blog', url: 'https://topglassrepairs.com/en/blog' },
    { name: post.title, url: `https://topglassrepairs.com/en/blog/${params.slug}` }
  ]);

  const blogSchema = generateBlogPostSchema(post, params.slug);
  const businessSchema = generateLocalBusinessSchema('en');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

      <article>
        {/* Hero Section */}
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <nav className="flex items-center gap-2 text-sm mb-6 text-white/80">
                <Link href="/en" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link href="/en/blog" className="hover:text-white">Blog</Link>
                <span>/</span>
                <span className="text-white">{post.category}</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span>By {post.author}</span>
                  <span className="text-white/60">•</span>
                  <span>{post.authorRole}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="text-white/60">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t">
                    <h3 className="font-semibold mb-4">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/en/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}
                          className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Author Bio */}
                  <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
                    <h3 className="font-semibold mb-2">About the Author</h3>
                    <p className="text-neutral-700">
                      <strong>{post.author}</strong> is our {post.authorRole} at Top Glass Repairs. 
                      With over 15 years of experience in the glass industry, {post.author.split(' ')[0]} 
                      specializes in residential and commercial glass solutions throughout Los Angeles.
                    </p>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                  {/* CTA Card */}
                  <div className="bg-primary text-white rounded-lg p-6 mb-8 sticky top-6">
                    <h3 className="text-xl font-bold mb-4">Need Glass Repair Services?</h3>
                    <p className="mb-6">Get professional help from Los Angeles's trusted glass experts.</p>
                    <a href="tel:(562) 436-2616" className="btn btn-accent w-full mb-3">
                      Call (562) 436-2616
                    </a>
                    <Link href="/en/contact" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary w-full">
                      Get Free Quote
                    </Link>
                  </div>

                  {/* Related Posts */}
                  <div className="bg-neutral-50 rounded-lg p-6">
                    <h3 className="font-bold mb-4">Related Articles</h3>
                    <ul className="space-y-3">
                      {post.relatedPosts.map((relatedSlug) => {
                        const relatedPost = blogPosts[relatedSlug as keyof typeof blogPosts];
                        if (!relatedPost) return null;
                        return (
                          <li key={relatedSlug}>
                            <Link 
                              href={`/en/blog/${relatedSlug}`}
                              className="text-primary hover:underline block"
                            >
                              {relatedPost.title}
                            </Link>
                            <span className="text-sm text-neutral-600">{relatedPost.readTime}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Informed About Glass Care</h2>
              <p className="mb-6">Get monthly tips on glass maintenance, safety updates, and exclusive offers.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg"
                  required
                />
                <button type="submit" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}