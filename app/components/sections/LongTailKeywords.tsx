"use client";

import { LongTailKeyword, Language } from "@/app/types";

interface LongTailKeywordsProps {
  title?: string;
  description?: string;
  keywords?: LongTailKeyword[];
  lang: Language;
  locationName?: string;
  phone?: string;
}

export default function LongTailKeywords({
  title = "Glass & Mirror Services",
  description,
  keywords = [],
  lang,
  locationName,
  phone = "(562) 436-2616",
}: LongTailKeywordsProps) {
  // Replace [location] placeholder with actual location name if provided
  const processText = (text: string) => {
    return locationName ? text.replace("[location]", locationName) : text;
  };

  const buttonText = lang === "en" ? "Get Free Estimate" : "Obtener Presupuesto Gratis";

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg leading-6 text-gray-500">
              {description}
            </p>
          )}
        </div>

        {/* Keywords grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keywords.map((keyword, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {processText(keyword.title)}
              </h3>
              <p className="text-gray-600 mb-6">
                {processText(keyword.description)}
              </p>
              <a
                href={`tel:${phone}`}
                className="inline-block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                {buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
