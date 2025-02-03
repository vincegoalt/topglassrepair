import { Language } from '@/app/types';

interface Feature {
  icon?: string | React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  description?: string;
  features: Feature[];
  lang: Language;
  variant?: 'grid' | 'list' | 'cards';
  columns?: 2 | 3 | 4;
  background?: 'white' | 'light' | 'primary';
}

export default function Features({
  title,
  description,
  features,
  lang,
  variant = 'grid',
  columns = 3,
  background = 'white'
}: FeaturesProps) {
  // Background styles
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-secondary',
    primary: 'bg-primary text-white'
  }[background];

  // Grid columns
  const gridColumns = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  // Feature item styles based on variant
  const getFeatureStyles = () => {
    switch (variant) {
      case 'list':
        return 'flex items-start space-x-4 p-4';
      case 'cards':
        return 'bg-white rounded-lg shadow-md p-6 text-center';
      default: // grid
        return 'text-center p-6';
    }
  };

  // Icon container styles based on variant and background
  const getIconStyles = () => {
    const baseStyles = 'text-4xl mb-4';
    if (variant === 'list') {
      return `${baseStyles} text-primary`;
    }
    if (background === 'primary') {
      return `${baseStyles} text-white`;
    }
    return `${baseStyles} text-primary`;
  };

  return (
    <section className={`py-12 md:py-20 ${backgroundStyles}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                background === 'primary' ? 'text-white' : ''
              }`}>
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-lg max-w-3xl mx-auto ${
                background === 'primary' ? 'text-white/90' : 'text-neutral-600'
              }`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Features Grid/List */}
        <div className={`
          ${variant === 'grid' || variant === 'cards' ? `grid gap-8 ${gridColumns}` : 'space-y-6'}
          ${variant === 'list' ? 'max-w-3xl mx-auto' : ''}
        `}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                ${getFeatureStyles()}
                ${background === 'primary' && variant === 'cards' ? 'bg-white/10' : ''}
              `}
            >
              {/* Icon */}
              {feature.icon && (
                <div className={getIconStyles()}>
                  {typeof feature.icon === 'string' ? (
                    <span>{feature.icon}</span>
                  ) : (
                    feature.icon
                  )}
                </div>
              )}

              {/* Content */}
              <div className={variant === 'list' ? 'flex-1' : ''}>
                <h3 className={`
                  font-bold mb-2
                  ${variant === 'list' ? 'text-xl' : 'text-lg'}
                  ${background === 'primary' ? 'text-white' : ''}
                `}>
                  {feature.title}
                </h3>
                <p className={`
                  ${background === 'primary' ? 'text-white/90' : 'text-neutral-600'}
                  ${variant === 'list' ? 'text-base' : 'text-sm'}
                `}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
