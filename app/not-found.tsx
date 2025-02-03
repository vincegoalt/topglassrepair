'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const isSpanish = pathname.startsWith('/es');
  
  const homeLink = isSpanish ? '/es' : '/en';
  const servicesLink = isSpanish ? '/es/servicios' : '/en/services';

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {isSpanish ? 'Página no encontrada' : 'Page Not Found'}
        </h2>
        <p className="text-gray-600 mb-8">
          {isSpanish
            ? 'Lo sentimos, la página que estás buscando no existe.'
            : 'Sorry, the page you are looking for does not exist.'}
        </p>
        <div className="space-x-4">
          <Link
            href={homeLink}
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isSpanish ? 'Ir al inicio' : 'Go Home'}
          </Link>
          <Link
            href={servicesLink}
            className="inline-block bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            {isSpanish ? 'Ver servicios' : 'View Services'}
          </Link>
        </div>
      </div>
    </div>
  );
}
