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

  // Get the first segment after the leading slash
  const segments = pathname.split('/')
  const langSegment = segments[1]

  // If no language segment or invalid language, redirect to /en
  if (!langSegment || !['en', 'es'].includes(langSegment)) {
    const url = new URL(`/en${pathname}`, request.url)
    return NextResponse.redirect(url)
  }

  // For all other routes, set x-invoke-path header and continue
  const response = NextResponse.next()
  response.headers.set('x-invoke-path', pathname)
  return response
}

// Configure the middleware to run on all routes except static files
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
    // Include root (/) when matching all routes
    '/'
  ]
}
