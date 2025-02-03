import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Supported languages
const LANGUAGES = ['en', 'es'];
const DEFAULT_LANGUAGE = 'en';

// Function to get the preferred language from request headers
function getPreferredLanguage(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Check if any of our supported languages is preferred
  const preferredLanguage = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().substring(0, 2))
    .find(lang => LANGUAGES.includes(lang));
  
  return preferredLanguage || DEFAULT_LANGUAGE;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Exclude static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // This will match files like favicon.ico, robots.txt, etc.
  ) {
    return NextResponse.next();
  }

  // Check if the pathname starts with a supported language
  const pathnameHasLanguage = LANGUAGES.some(
    lang => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (pathnameHasLanguage) {
    // Add x-pathname header for use in layout.tsx
    const response = NextResponse.next();
    response.headers.set('x-pathname', pathname);
    return response;
  }

  // If no language in pathname, redirect to preferred language
  const preferredLanguage = getPreferredLanguage(request);
  
  // Create new URL with language prefix
  const newUrl = new URL(
    `/${preferredLanguage}${pathname === '/' ? '' : pathname}`,
    request.url
  );

  // Preserve query parameters
  newUrl.search = request.nextUrl.search;

  return NextResponse.redirect(newUrl);
}

export const config = {
  // Matcher ignoring static files and API routes
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)'],
};
