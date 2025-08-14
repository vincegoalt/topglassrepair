'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/app/types';
import { CONTACT_INFO } from '@/app/lib/config';

interface HeaderProps {
  lang: Language;
}

export default function Header({ lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get paths based on language
  const servicesPath = lang === 'en' ? '/services' : '/servicios';
  const contactPath = lang === 'en' ? '/contact' : '/contacto';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-primary text-white py-2 hidden md:block">
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
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center h-12 md:h-20">
            <div className="relative h-full w-[150px] md:w-[250px]">
              <Image
                src="/images/topglassrepairs.png"
                alt="Top Glass Repairs"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href={`/${lang}`}
              className="text-neutral-700 hover:text-primary transition-colors"
            >
              {lang === 'en' ? 'Home' : 'Inicio'}
            </Link>
            <Link
              href={`/${lang}${servicesPath}`}
              className="text-neutral-700 hover:text-primary transition-colors"
            >
              {lang === 'en' ? 'Services' : 'Servicios'}
            </Link>
            <Link
              href={`/${lang}${contactPath}`}
              className="text-neutral-700 hover:text-primary transition-colors"
            >
              {lang === 'en' ? 'Contact' : 'Contacto'}
            </Link>
            <Link
              href={`tel:${CONTACT_INFO.office}`}
              className="btn btn-primary text-sm xl:text-base"
            >
              {lang === 'en' ? 'Get Free Estimate' : 'Obtener Presupuesto'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 right-0 bg-white shadow-lg border-t`}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Emergency Info */}
            <div className="pb-4 border-b">
              <div className="text-sm text-gray-600 mb-2">🚨 24/7 Emergency</div>
              <a
                href={`tel:${CONTACT_INFO.office}`}
                className="text-primary font-semibold text-lg"
              >
                {CONTACT_INFO.office}
              </a>
            </div>

            {/* Mobile Navigation Links */}
            <Link
              href={`/${lang}`}
              className="block py-3 text-neutral-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {lang === 'en' ? 'Home' : 'Inicio'}
            </Link>
            <Link
              href={`/${lang}${servicesPath}`}
              className="block py-3 text-neutral-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {lang === 'en' ? 'Services' : 'Servicios'}
            </Link>
            <Link
              href={`/${lang}${contactPath}`}
              className="block py-3 text-neutral-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {lang === 'en' ? 'Contact' : 'Contacto'}
            </Link>
            
            {/* Mobile CTA Button */}
            <Link
              href={`tel:${CONTACT_INFO.office}`}
              className="btn btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {lang === 'en' ? 'Get Free Estimate' : 'Obtener Presupuesto'}
            </Link>

            {/* Language Switcher */}
            <div className="pt-4 border-t">
              <Link
                href={lang === 'en' ? '/es' : '/en'}
                className="block py-2 text-center text-primary hover:text-primary/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {lang === 'en' ? 'Español' : 'English'}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}