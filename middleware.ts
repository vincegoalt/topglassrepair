import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  // Skip public files
  if (PUBLIC_FILE.test(request.nextUrl.pathname)) {
    return NextResponse.next()
  }

  const pathname = request.nextUrl.pathname

  // Handle root path redirect
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') || ''
    const preferSpanish = acceptLanguage
      .split(',')
      .some(lang => lang.startsWith('es'))
    const url = new URL(preferSpanish ? '/es' : '/en', request.url)
    return NextResponse.redirect(url)
  }

  // Skip API routes, _next paths
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('/_next')
  ) {
    return NextResponse.next()
  }

  // Get the first segment after the leading slash
  const segments = pathname.split('/')
  const langSegment = segments[1]

  // Check if we have a valid language prefix
  const hasValidLang = langSegment && ['en', 'es'].includes(langSegment)

  // If path starts with valid language, continue without redirect
  if (hasValidLang) {
    const response = NextResponse.next()
    response.headers.set('x-invoke-path', pathname)
    return response
  }

  // If no language segment or invalid language, redirect to /en version
  const url = new URL(`/en${pathname}`, request.url)
  return NextResponse.redirect(url)
}

// Configure the middleware to run on all routes except static files
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.png, apple-icon.png (favicon files)
     * - public folder
     * - api routes
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|public).*)'
  ]
}
