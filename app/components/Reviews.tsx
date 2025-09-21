'use client';

import { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import PhoneLink from '@/app/components/PhoneLink';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  service?: string;
  location?: string;
  verified: boolean;
  helpful: number;
  image?: string;
}

interface ReviewsProps {
  lang: 'en' | 'es';
  reviews?: Review[];
  showForm?: boolean;
  serviceFilter?: string;
  locationFilter?: string;
}

const sampleReviews: Review[] = [
  {
    id: '1',
    author: 'Maria Rodriguez',
    rating: 5,
    date: '2025-01-28',
    text: 'Excellent service! They came out the same day I called for my broken storefront window. Professional, fast, and fair pricing. Highly recommend Top Glass Repairs!',
    service: 'Emergency Glass Repair',
    location: 'Los Angeles',
    verified: true,
    helpful: 12
  },
  {
    id: '2',
    author: 'David Chen',
    rating: 5,
    date: '2025-01-25',
    text: 'Had all my home windows replaced. The team was punctual, clean, and did amazing work. My energy bills have already gone down. Great investment!',
    service: 'Window Replacement',
    location: 'Beverly Hills',
    verified: true,
    helpful: 8
  },
  {
    id: '3',
    author: 'Sarah Johnson',
    rating: 5,
    date: '2025-01-20',
    text: 'They installed a beautiful custom mirror wall in my salon. The design consultation was helpful and the installation was flawless. My clients love it!',
    service: 'Mirror Installation',
    location: 'Santa Monica',
    verified: true,
    helpful: 15
  },
  {
    id: '4',
    author: 'Robert Williams',
    rating: 5,
    date: '2025-01-18',
    text: 'Emergency shower door repair on a Sunday! They arrived within 2 hours and fixed everything perfectly. Saved my weekend. Thank you!',
    service: 'Shower Door Repair',
    location: 'Pasadena',
    verified: true,
    helpful: 6
  },
  {
    id: '5',
    author: 'Jessica Martinez',
    rating: 5,
    date: '2025-01-15',
    text: 'Professional from start to finish. Free estimate was accurate, work was completed on time, and they cleaned up everything. Will use again!',
    service: 'Glass Replacement',
    location: 'Long Beach',
    verified: true,
    helpful: 10
  }
];

export default function Reviews({ 
  lang,
  reviews = sampleReviews, 
  showForm = false,
  serviceFilter,
  locationFilter 
}: ReviewsProps) {
  const [sortBy, setSortBy] = useState<'recent' | 'helpful'>('recent');
  const [helpfulReviews, setHelpfulReviews] = useState<Set<string>>(new Set());

  // Filter reviews
  let filteredReviews = [...reviews];
  if (serviceFilter) {
    filteredReviews = filteredReviews.filter(r => r.service === serviceFilter);
  }
  if (locationFilter) {
    filteredReviews = filteredReviews.filter(r => r.location === locationFilter);
  }

  // Sort reviews
  const sortedReviews = filteredReviews.sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return b.helpful - a.helpful;
    }
  });

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  const handleHelpful = (reviewId: string) => {
    if (!helpfulReviews.has(reviewId)) {
      const newSet = new Set(helpfulReviews);
      newSet.add(reviewId);
      setHelpfulReviews(newSet);
      // In production, this would update the database
    }
  };

  // Generate Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Top Glass Repairs",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toFixed(1),
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date,
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  return (
    <section className="py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(averageRating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold">{averageRating.toFixed(1)}</span>
            <span className="text-neutral-600">({reviews.length} reviews)</span>
          </div>
          <p className="text-lg text-neutral-600">See what our customers say about our glass services</p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div className="flex gap-4">
            {serviceFilter && (
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {serviceFilter}
              </span>
            )}
            {locationFilter && (
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {locationFilter}
              </span>
            )}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'recent' | 'helpful')}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>

        {/* Reviews List */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {sortedReviews.map((review) => (
            <div key={review.id} className="bg-neutral-50 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">{review.author}</h3>
                    {review.verified && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Verified Customer
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-neutral-600">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span>{new Date(review.date).toLocaleDateString()}</span>
                    {review.service && (
                      <>
                        <span>•</span>
                        <span>{review.service}</span>
                      </>
                    )}
                    {review.location && (
                      <>
                        <span>•</span>
                        <span>{review.location}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-neutral-700 mb-4">{review.text}</p>

              {review.image && (
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={review.image}
                    alt="Review image"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleHelpful(review.id)}
                  className={`text-sm flex items-center gap-2 ${
                    helpfulReviews.has(review.id)
                      ? 'text-neutral-500'
                      : 'text-primary hover:text-primary/80'
                  }`}
                  disabled={helpfulReviews.has(review.id)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  Helpful ({review.helpful + (helpfulReviews.has(review.id) ? 1 : 0)})
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">Share Your Experience</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Rating</label>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className="p-1"
                      >
                        <StarOutlineIcon className="h-8 w-8 text-yellow-400 hover:text-yellow-500" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Received
                  </label>
                  <select id="service" className="w-full px-4 py-2 border rounded-lg">
                    <option value="">Select a service</option>
                    <option value="Glass Repair">Glass Repair</option>
                    <option value="Window Replacement">Window Replacement</option>
                    <option value="Mirror Installation">Mirror Installation</option>
                    <option value="Shower Door Repair">Shower Door Repair</option>
                    <option value="Emergency Service">Emergency Service</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="review" className="block text-sm font-medium mb-2">
                    Your Review
                  </label>
                  <textarea
                    id="review"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Tell us about your experience..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Ready to experience our 5-star service?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <PhoneLink phoneNumber="(562) 436-2616" className="btn btn-primary" eventLabel="reviews_cta">
              Call Now: (562) 436-2616
            </PhoneLink>
            <a
              href="https://www.google.com/search?q=top+glass+repairs+los+angeles"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              See More Reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}