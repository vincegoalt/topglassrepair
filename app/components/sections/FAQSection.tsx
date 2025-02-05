"use client";

import { useState } from "react";
import { FAQ, Language } from "@/app/types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQSectionProps {
  title: string;
  description?: string;
  faqs: FAQ[];
  lang: Language;
  locationName?: string;
}

export default function FAQSection({
  title,
  description,
  faqs,
  lang,
  locationName,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Replace [location] placeholder with actual location name if provided
  const processText = (text: string) => {
    return locationName ? text.replace("[location]", locationName) : text;
  };

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": processText(faq.question),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": processText(faq.answer)
      }
    }))
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

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

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-start justify-between text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium text-gray-900">
                  {processText(faq.question)}
                </span>
                <span className="ml-6 flex-shrink-0">
                  <ChevronDownIcon
                    className={`h-6 w-6 transform ${
                      openIndex === index ? "rotate-180" : ""
                    } text-gray-500`}
                    aria-hidden="true"
                  />
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`mt-2 ${openIndex === index ? "block" : "hidden"}`}
              >
                <p className="text-base text-gray-500">
                  {processText(faq.answer)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
