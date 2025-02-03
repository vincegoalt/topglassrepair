'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Client-side navigation to English version
    router.replace('/en');
  }, [router]);

  // Show a minimal loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-gray-600">Loading...</div>
    </div>
  );
}

// Enable static generation
export const dynamic = 'force-static';
