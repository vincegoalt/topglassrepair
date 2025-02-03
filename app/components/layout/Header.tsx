import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/app/types';
import { CONTACT_INFO } from '@/app/lib/config';

interface HeaderProps {
  lang: Language;
}

export default function Header({ lang }: HeaderProps) {
  // Get paths based on language
  const servicesPath = lang === 'en' ? '/services' : '/servicios';
  const contactPath = lang === 'en' ? '/contact' : '/contacto';

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center">
            <span className="mr-4">🚨 24/7 Emergency Service</span>
            <a href={`tel:${CONTACT_INFO.office}`} className="hover:text-accent">
              {CONTACT_INFO.office}
            </a>
          </div>
          <div>
            <Link
              href={lang === 'en' ? '/es' : '/en'}
              className="hover:text-accent"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center h-20">
            <div className="relative h-full w-[250px]">
              <Image
                src="/images/topglassrepairs.png"
                alt="Top Glass Repairs"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              href={`/${lang}`}
              className="text-neutral-700 hover:text-primary"
            >
              {lang === 'en' ? 'Home' : 'Inicio'}
            </Link>
            <Link
              href={`/${lang}${servicesPath}`}
              className="text-neutral-700 hover:text-primary"
            >
              {lang === 'en' ? 'Services' : 'Servicios'}
            </Link>
            <Link
              href={`/${lang}${contactPath}`}
              className="text-neutral-700 hover:text-primary"
            >
              {lang === 'en' ? 'Contact' : 'Contacto'}
            </Link>
            <Link
              href={`tel:${CONTACT_INFO.office}`}
              className="btn btn-primary"
            >
              {lang === 'en' ? 'Get Free Estimate' : 'Obtener Presupuesto'}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
