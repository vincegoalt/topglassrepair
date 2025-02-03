import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default function RootPage() {
  // Get the Accept-Language header
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language') || '';

  // Check if Spanish is preferred
  const preferSpanish = acceptLanguage
    .split(',')
    .some(lang => lang.startsWith('es'));

  // Redirect to the appropriate language version
  redirect(preferSpanish ? '/es' : '/en');
}

// Disable static generation for this page
export const dynamic = 'force-dynamic';
