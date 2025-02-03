'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  const isSpanish = pathname.startsWith('/es');

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {isSpanish ? 'Algo salió mal!' : 'Something went wrong!'}
        </h1>
        <p className="text-gray-600 mb-8">
          {isSpanish
            ? 'Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde.'
            : 'An unexpected error has occurred. Please try again later.'}
        </p>
        <button
          onClick={reset}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isSpanish ? 'Intentar de nuevo' : 'Try again'}
        </button>
      </div>
    </div>
  );
}
