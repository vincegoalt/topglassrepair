import { Service, Language } from '@/app/types';
import ServiceCard from '../cards/ServiceCard';

interface ServiceGridProps {
  services: Service[];
  lang: Language;
  location?: string;
  variant?: 'default' | 'compact' | 'featured';
  columns?: 2 | 3 | 4;
  showFeatured?: boolean;
}

export default function ServiceGrid({
  services,
  lang,
  location,
  variant = 'default',
  columns = 3,
  showFeatured = false
}: ServiceGridProps) {
  // If showFeatured is true, display the first service in a featured layout
  const featuredService = showFeatured ? services[0] : null;
  const remainingServices = showFeatured ? services.slice(1) : services;

  // Grid columns configuration
  const gridColumns = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <div className="space-y-8">
      {/* Featured Service */}
      {showFeatured && featuredService && (
        <div className="mb-12">
          <ServiceCard
            service={featuredService}
            lang={lang}
            location={location}
            variant="featured"
          />
        </div>
      )}

      {/* Service Grid */}
      <div className={`grid gap-6 ${gridColumns}`}>
        {remainingServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            lang={lang}
            location={location}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}

// Helper function to filter and sort services
export function filterAndSortServices(
  services: Service[],
  options?: {
    featured?: string[];
    exclude?: string[];
    limit?: number;
  }
) {
  let filteredServices = [...services];

  // Remove excluded services
  if (options?.exclude) {
    filteredServices = filteredServices.filter(
      service => !options.exclude?.includes(service.id)
    );
  }

  // Sort featured services to the front
  if (options?.featured) {
    filteredServices.sort((a, b) => {
      const aFeatured = options.featured?.includes(a.id) ? -1 : 0;
      const bFeatured = options.featured?.includes(b.id) ? -1 : 0;
      return bFeatured - aFeatured;
    });
  }

  // Limit the number of services
  if (options?.limit) {
    filteredServices = filteredServices.slice(0, options.limit);
  }

  return filteredServices;
}

// Helper function to group services by category
export function groupServicesByCategory(
  services: Service[],
  categories: { id: string; name: { [key in Language]: string } }[]
) {
  return categories.map(category => ({
    ...category,
    services: services.filter(service => service.id.startsWith(category.id))
  }));
}
