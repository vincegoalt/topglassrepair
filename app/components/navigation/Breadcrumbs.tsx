import Link from 'next/link';
import { Language } from '@/app/types';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  lang: Language;
}

export function generateServiceBreadcrumbs(lang: Language, serviceName: string): BreadcrumbItem[] {
  const prefix = lang === 'en' ? '/en' : '/es';
  const servicesPath = lang === 'en' ? '/services' : '/servicios';
  const servicesLabel = lang === 'en' ? 'Services' : 'Servicios';

  return [
    { label: lang === 'en' ? 'Home' : 'Inicio', href: prefix },
    { label: servicesLabel, href: `${prefix}${servicesPath}` },
    { label: serviceName }
  ];
}

export function generateLocationBreadcrumbs(lang: Language, locationName: string): BreadcrumbItem[] {
  const prefix = lang === 'en' ? '/en' : '/es';
  const locationsPath = lang === 'en' ? '/locations' : '/ubicaciones';
  const locationsLabel = lang === 'en' ? 'Locations' : 'Ubicaciones';

  return [
    { label: lang === 'en' ? 'Home' : 'Inicio', href: prefix },
    { label: locationsLabel, href: `${prefix}${locationsPath}` },
    { label: locationName }
  ];
}

export function generateServiceLocationBreadcrumbs(
  lang: Language,
  serviceName: string,
  locationName: string
): BreadcrumbItem[] {
  const prefix = lang === 'en' ? '/en' : '/es';
  const servicesPath = lang === 'en' ? '/services' : '/servicios';
  const servicesLabel = lang === 'en' ? 'Services' : 'Servicios';

  const preposition = lang === 'en' ? 'in' : 'en';
  return [
    { label: lang === 'en' ? 'Home' : 'Inicio', href: prefix },
    { label: servicesLabel, href: `${prefix}${servicesPath}` },
    { label: serviceName, href: `${prefix}${servicesPath}/${serviceName}` },
    { label: locationName, href: `${prefix}${servicesPath}/${serviceName}/${preposition}/${locationName}` }
  ];
}

export default function Breadcrumbs({ items, lang }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-neutral-400" aria-hidden="true">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-neutral-500 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
