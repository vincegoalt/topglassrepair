'use client';

import Script from 'next/script';

interface AnalyticsProps {
  gaId?: string;
  gtagId?: string;
}

export default function Analytics({ gaId, gtagId }: AnalyticsProps) {
  const measurementId = gaId || gtagId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!measurementId) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>

      {/* Google Search Console verification */}
      <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />

      {/* Structured data for organization */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Top Glass Repairs",
            "url": "https://topglassrepairs.com",
            "logo": "https://topglassrepairs.com/logo.png",
            "sameAs": [
              "https://facebook.com/topglassrepairs",
              "https://instagram.com/topglassrepairs",
              "https://twitter.com/topglassrepairs"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-562-436-2616",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": ["en", "es"]
            }
          })
        }}
      />

      {/* Website search action schema for Google */}
      <Script
        id="website-search-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://topglassrepairs.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://topglassrepairs.com/en/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
}

// Event tracking helper functions
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export function trackConversion(conversionId: string, value?: number, currency?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency || 'USD',
    });
  }
}

export function trackPhoneClick(phoneNumber: string) {
  trackEvent('click', 'contact', 'phone', undefined);
  trackConversion('phone_call_conversion');
}

// Extend window type for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}