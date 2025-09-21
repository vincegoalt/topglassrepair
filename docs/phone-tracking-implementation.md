# Phone Click Tracking Implementation Guide

## Overview
This guide explains how to implement phone click tracking throughout your website using Google Analytics.

## Setup Completed

### 1. Created PhoneLink Component (`app/components/PhoneLink.tsx`)
A reusable component that tracks phone clicks with Google Analytics.

### 2. Created Analytics Utilities (`app/utils/analytics.ts`)
Helper functions for tracking various events including phone clicks.

### 3. Added Google Analytics Component (`app/components/GoogleAnalytics.tsx`)
Component that loads Google Analytics and tracks page views.

### 4. Updated Layout (`app/layout.tsx`)
Added Google Analytics to the root layout.

### 5. Updated Global Types (`app/types/global.d.ts`)
Added proper TypeScript definitions for gtag.

## How to Use PhoneLink Component

### Basic Usage
```tsx
import PhoneLink from '@/app/components/PhoneLink';

// Simple usage
<PhoneLink phoneNumber="(562) 436-2616" eventLabel="contact_page">
  Call Us Now
</PhoneLink>

// With custom className
<PhoneLink
  phoneNumber="(562) 436-2616"
  className="btn btn-primary"
  eventLabel="hero_cta"
>
  Get Free Estimate
</PhoneLink>

// Display different text than the phone number
<PhoneLink
  phoneNumber="(562) 436-2616"
  eventLabel="footer_phone"
  displayNumber="(562) 436-2616"
>
  (562) 436-2616
</PhoneLink>
```

### Event Labels
Use descriptive event labels to identify where the click occurred:
- `header_desktop_cta` - Header CTA button on desktop
- `header_mobile_emergency` - Emergency number in mobile header
- `hero_cta` - Hero section CTA
- `footer_phone` - Footer phone number
- `contact_page` - Contact page
- `service_page_{service}` - Service-specific pages
- `location_page_{location}` - Location-specific pages

## Files That Need Updating

Here are the files that contain phone links that should be replaced with the PhoneLink component:

### High Priority (Most Visible)
1. `/app/components/layout/Header.tsx` - ✅ Updated
2. `/app/components/layout/Footer.tsx` - Needs updating
3. `/app/components/sections/Hero.tsx` - Needs updating
4. `/app/components/sections/CallToAction.tsx` - Needs updating

### Service Pages
- `/app/en/services/[service]/page.tsx`
- `/app/es/servicios/[service]/page.tsx`
- `/app/en/services/[service]/in/[location]/page.tsx`
- `/app/es/servicios/[service]/en/[location]/page.tsx`

### Main Pages
- `/app/en/page.tsx`
- `/app/es/page.tsx`
- `/app/en/contact/page.tsx`
- `/app/es/contacto/page.tsx`

### Other Components
- `/app/components/Reviews.tsx`
- `/app/locations/[slug]/page.tsx`
- `/app/en/blog/[slug]/page.tsx`

## Example Update

### Before:
```tsx
<a href="tel:(562) 436-2616" className="btn btn-accent">
  Call Now
</a>
```

### After:
```tsx
import PhoneLink from '@/app/components/PhoneLink';

<PhoneLink
  phoneNumber="(562) 436-2616"
  className="btn btn-accent"
  eventLabel="service_page_cta"
>
  Call Now
</PhoneLink>
```

## Viewing Analytics

Once implemented, you can view phone click data in Google Analytics:

1. Go to your Google Analytics dashboard
2. Navigate to **Events** → **All Events**
3. Look for events with:
   - Event Name: `click`
   - Event Category: `Phone`
   - Event Label: The specific location/context
   - Event Value: The phone number clicked

## Testing

To test the implementation:
1. Open the browser console
2. Click on any phone link
3. In development mode, you should see: `[Analytics Event]` with the event details
4. In production, events will be sent to Google Analytics

## Configuration

Make sure your `.env.local` file contains:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID.

## Best Practices

1. **Always use descriptive event labels** to identify where clicks occur
2. **Be consistent** with naming conventions
3. **Test in development** before deploying to production
4. **Monitor analytics** regularly to ensure tracking is working

## Additional Tracking Functions

The analytics utility also provides:
- `trackFormSubmit(formName)` - Track form submissions
- `trackOutboundLink(url)` - Track external link clicks
- `pageview(url)` - Track page views (automatically handled)

## Support

If you need to track additional events or have questions about the implementation, the analytics infrastructure is now in place and can be easily extended.