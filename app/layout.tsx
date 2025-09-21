import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';
import { Language } from './types';
import { WebVitals } from './components/WebVitals';
import GoogleAnalytics from './components/GoogleAnalytics';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Top Glass Repairs',
  description: 'Professional glass and mirror services in Los Angeles',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get language from URL
  const headersList = headers();
  const pathCandidates = [
    headersList.get('x-invoke-path'),
    headersList.get('x-matched-path'),
    headersList.get('x-next-pathname'),
    headersList.get('x-next-url'),
  ];

  const pathnameCandidate = pathCandidates.find(Boolean) || '';
  const normalizedPath = pathnameCandidate.split('?')[0] || '';
  const lang = normalizedPath.startsWith('/es') || normalizedPath.includes('/es/') ? 'es' : 'en';

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <GoogleAnalytics />
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
