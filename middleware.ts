import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Only handle root path - redirect to /en by default
  // All other paths are handled by Next.js routing
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') || ''
    const preferSpanish = acceptLanguage
      .split(',')
      .some(lang => lang.startsWith('es'))

    return NextResponse.redirect(new URL(preferSpanish ? '/es' : '/en', request.url))
  }

  // For all other paths, just continue normally
  return NextResponse.next()
}

// Only run middleware on the root path
export const config = {
  matcher: '/'
}