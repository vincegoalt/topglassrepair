import { Location, Language } from '@/app/types';
import LocationCard from '../cards/LocationCard';

interface LocationGridProps {
  locations: Location[];
  lang: Language;
  service?: string;
  variant?: 'default' | 'compact';
  columns?: 2 | 3 | 4;
  showFeatured?: boolean;
}

export default function LocationGrid({
  locations,
  lang,
  service,
  variant = 'default',
  columns = 3,
  showFeatured = false
}: LocationGridProps) {
  // If showFeatured is true, display the first location in a featured layout
  const featuredLocation = showFeatured ? locations[0] : null;
  const remainingLocations = showFeatured ? locations.slice(1) : locations;

  // Grid columns configuration
  const gridColumns = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <div className="space-y-8">
      {/* Featured Location */}
      {showFeatured && featuredLocation && (
        <div className="mb-12">
          <div className="bg-primary text-white rounded-lg p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                {lang === 'en'
                  ? `Service Area: ${featuredLocation.name}`
                  : `Área de Servicio: ${featuredLocation.name}`}
              </h2>
              <p className="text-white/90 mb-6">
                {lang === 'en'
                  ? `Professional glass and mirror services in ${featuredLocation.name} and surrounding areas. Contact us today for expert service and free estimates.`
                  : `Servicios profesionales de vidrios y espejos en ${featuredLocation.name} y áreas circundantes. Contáctenos hoy para un servicio experto y presupuestos gratuitos.`}
              </p>
              <LocationCard
                location={featuredLocation}
                lang={lang}
                service={service}
                variant="default"
              />
            </div>
          </div>
        </div>
      )}

      {/* Location Grid */}
      <div className={`grid gap-6 ${gridColumns}`}>
        {remainingLocations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            lang={lang}
            service={service}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}

// Helper function to filter and sort locations
export function filterAndSortLocations(
  locations: Location[],
  options?: {
    featured?: string[];
    exclude?: string[];
    limit?: number;
    nearCity?: string;
  }
) {
  let filteredLocations = [...locations];

  // Remove excluded locations
  if (options?.exclude) {
    filteredLocations = filteredLocations.filter(
      location => !options.exclude?.includes(location.id)
    );
  }

  // Sort featured locations to the front
  if (options?.featured) {
    filteredLocations.sort((a, b) => {
      const aFeatured = options.featured?.includes(a.id) ? -1 : 0;
      const bFeatured = options.featured?.includes(b.id) ? -1 : 0;
      return bFeatured - aFeatured;
    });
  }

  // Sort by proximity to a specific city
  if (options?.nearCity) {
    // For now, this is a placeholder for future implementation
    // Would need to implement actual distance calculation using coordinates
    const targetCity = filteredLocations.find(l => l.id === options.nearCity);
    if (targetCity?.coordinates) {
      filteredLocations.sort((a, b) => {
        if (!a.coordinates || !b.coordinates) return 0;
        // Calculate distances and sort
        return 0; // Placeholder
      });
    }
  }

  // Limit the number of locations
  if (options?.limit) {
    filteredLocations = filteredLocations.slice(0, options.limit);
  }

  return filteredLocations;
}

// Helper function to group locations by region
export function groupLocationsByRegion(
  locations: Location[],
  regions: { id: string; name: { [key in Language]: string } }[]
) {
  return regions.map(region => ({
    ...region,
    locations: locations.filter(location => location.id.startsWith(region.id))
  }));
}
