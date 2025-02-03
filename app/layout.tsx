import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Language } from './types';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Top Glass Repairs',
  description: 'Professional glass and mirror services in Los Angeles',
};

function getLanguageFromPathname(pathname: string): Language {
  return pathname.startsWith('/es') ? 'es' : 'en';
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang?: string };
}) {
  const lang = params.lang as Language || 'en';

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
