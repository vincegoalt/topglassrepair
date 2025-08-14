import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';
import { Language } from './types';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { WebVitals } from './components/WebVitals';
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
  const pathname = headersList.get('x-invoke-path') || '';
  const lang = pathname.startsWith('/es') ? 'es' : 'en';

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <WebVitals />
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
