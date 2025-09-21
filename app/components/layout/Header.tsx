'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Language } from '@/app/types';
import { CONTACT_INFO } from '@/app/lib/config';
import { NAV_SERVICES, NAV_LOCATIONS, PRIMARY_SERVICE_SLUG } from '@/app/data/navigation';
import PhoneLink from '@/app/components/PhoneLink';

interface HeaderProps {
  lang: Language;
}

export default function Header({ lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'areas' | null>(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileAreasOpen, setIsMobileAreasOpen] = useState(false);
  const pathname = usePathname();
  
  // Get paths based on language
  const servicesPath = lang === 'en' ? '/services' : '/servicios';
  const contactPath = lang === 'en' ? '/contact' : '/contacto';
  const locationsPath = lang === 'en' ? '/locations' : `/es/servicios/${PRIMARY_SERVICE_SLUG.es}`;
  const translations = {
    emergencyBanner: lang === 'en' ? '24/7 Emergency Service' : 'Servicio de Emergencia 24/7',
    home: lang === 'en' ? 'Home' : 'Inicio',
    services: lang === 'en' ? 'Services' : 'Servicios',
    serviceAreas: lang === 'en' ? 'Service Areas' : 'Áreas de Servicio',
    contact: lang === 'en' ? 'Contact' : 'Contacto',
    estimate: lang === 'en' ? 'Get Free Estimate' : 'Obtener Presupuesto',
    viewAllServices: lang === 'en' ? 'View All Services' : 'Ver Todos los Servicios',
    viewAllLocations: lang === 'en' ? 'View All Service Areas' : 'Ver Todas las Áreas de Servicio',
    callNow: lang === 'en' ? 'Call Now' : 'Llamar Ahora',
    featuredServices: lang === 'en' ? 'Featured Services' : 'Servicios Destacados',
    featuredAreas: lang === 'en' ? 'Popular Service Areas' : 'Áreas Populares'
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (menu: 'services' | 'areas') => {
    setActiveDropdown((current) => (current === menu ? null : menu));
  };

  const closeDropdowns = () => setActiveDropdown(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdowns();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    closeDropdowns();
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileAreasOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center">
            <span className="mr-4">🚨 {translations.emergencyBanner}</span>
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
              {translations.home}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={closeDropdowns}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-neutral-700 hover:text-primary transition-colors ${activeDropdown === 'services' ? 'text-primary' : ''}`}
                onClick={() => handleDropdownToggle('services')}
              >
                {translations.services}
                <svg
                  className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-0 top-full mt-3 w-[22rem] xl:w-[26rem] transition-all duration-150 ${
                  activeDropdown === 'services'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
                      {translations.featuredServices}
                    </h4>
                    <Link
                      href={`/${lang}${servicesPath}`}
                      className="text-sm text-primary hover:text-primary/80"
                    >
                      {translations.viewAllServices}
                    </Link>
                  </div>
                  <div className="mt-3 grid gap-2">
                    {NAV_SERVICES.map((service) => (
                      <Link
                        key={service.slug.en}
                        href={`/${lang}${servicesPath}/${service.slug[lang]}`}
                        className="block rounded-lg p-3 hover:bg-neutral-50 transition-colors"
                      >
                        <p className="font-semibold text-neutral-900">{service.name[lang]}</p>
                        <p className="text-sm text-neutral-500 leading-snug">
                          {service.description[lang]}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('areas')}
              onMouseLeave={closeDropdowns}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-neutral-700 hover:text-primary transition-colors ${activeDropdown === 'areas' ? 'text-primary' : ''}`}
                onClick={() => handleDropdownToggle('areas')}
              >
                {translations.serviceAreas}
                <svg
                  className={`w-4 h-4 transition-transform ${activeDropdown === 'areas' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-0 top-full mt-3 w-[20rem] xl:w-[24rem] transition-all duration-150 ${
                  activeDropdown === 'areas'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
                      {translations.featuredAreas}
                    </h4>
                    <Link
                      href={locationsPath}
                      className="text-sm text-primary hover:text-primary/80"
                    >
                      {translations.viewAllLocations}
                    </Link>
                  </div>
                  <div className="mt-3 grid grid-cols-1 gap-2">
                    {NAV_LOCATIONS.map((location) => {
                      const baseServiceSlug = PRIMARY_SERVICE_SLUG[lang];
                      const href = lang === 'en'
                        ? `/${lang}${servicesPath}/${baseServiceSlug}/in/${location.slug.en}`
                        : `/es${servicesPath}/${baseServiceSlug}/en/${location.slug.es}`;

                      return (
                        <Link
                          key={location.slug.en}
                          href={href}
                          className="block rounded-lg px-3 py-2 hover:bg-neutral-50 transition-colors"
                        >
                          <span className="font-medium text-neutral-900">{location.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={`/${lang}${contactPath}`}
              className="text-neutral-700 hover:text-primary transition-colors"
            >
              {translations.contact}
            </Link>
            <PhoneLink
              phoneNumber={CONTACT_INFO.office}
              className="btn btn-primary text-sm xl:text-base"
              eventLabel="header_desktop_cta"
            >
              {translations.estimate}
            </PhoneLink>
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
              <PhoneLink
                phoneNumber={CONTACT_INFO.office}
                className="text-primary font-semibold text-lg"
                eventLabel="header_mobile_emergency"
                displayNumber={CONTACT_INFO.office}
              >
                {CONTACT_INFO.office}
              </PhoneLink>
            </div>

            {/* Mobile Navigation Links */}
            <Link
              href={`/${lang}`}
              className="block py-3 text-neutral-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations.home}
            </Link>

            {/* Mobile Services submenu */}
            <button
              type="button"
              className="w-full flex items-center justify-between py-3 text-neutral-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileServicesOpen((prev) => !prev)}
            >
              <span>{translations.services}</span>
              <svg
                className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMobileServicesOpen && (
              <div className="space-y-2 pb-2">
                {NAV_SERVICES.map((service) => (
                  <Link
                    key={service.slug.en}
                    href={`/${lang}${servicesPath}/${service.slug[lang]}`}
                    className="block rounded-lg bg-neutral-50 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name[lang]}
                  </Link>
                ))}
                <Link
                  href={`/${lang}${servicesPath}`}
                  className="block px-4 py-2 text-sm font-medium text-primary hover:text-primary/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations.viewAllServices}
                </Link>
              </div>
            )}

            {/* Mobile Service Areas submenu */}
            <button
              type="button"
              className="w-full flex items-center justify-between py-3 text-neutral-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileAreasOpen((prev) => !prev)}
            >
              <span>{translations.serviceAreas}</span>
              <svg
                className={`w-5 h-5 transition-transform ${isMobileAreasOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMobileAreasOpen && (
              <div className="space-y-2 pb-2">
                {NAV_LOCATIONS.map((location) => {
                  const baseServiceSlug = PRIMARY_SERVICE_SLUG[lang];
                  const href = lang === 'en'
                    ? `/${lang}${servicesPath}/${baseServiceSlug}/in/${location.slug.en}`
                    : `/es${servicesPath}/${baseServiceSlug}/en/${location.slug.es}`;

                  return (
                    <Link
                      key={location.slug.en}
                      href={href}
                      className="block rounded-lg bg-neutral-50 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {location.name}
                    </Link>
                  );
                })}
                <Link
                  href={locationsPath}
                  className="block px-4 py-2 text-sm font-medium text-primary hover:text-primary/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations.viewAllLocations}
                </Link>
              </div>
            )}

            <Link
              href={`/${lang}${contactPath}`}
              className="block py-3 text-neutral-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations.contact}
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
