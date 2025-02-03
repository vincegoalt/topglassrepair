import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Only handle the root path
  if (request.nextUrl.pathname === '/') {
    // Get the Accept-Language header
    const acceptLanguage = request.headers.get('accept-language') || ''
    
    // Check if Spanish is preferred
    const preferSpanish = acceptLanguage
      .split(',')
      .some(lang => lang.startsWith('es'))
    
    // Create the URL for redirection
    const url = new URL(preferSpanish ? '/es' : '/en', request.url)
    
    // Return the response with the redirect
    return NextResponse.redirect(url)
  }
}

// Configure the middleware to only run on the homepage
export const config = {
  matcher: '/'
}
