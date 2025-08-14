"use client";

import { useState } from "react";
import { FAQ, Language } from "@/app/types";

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
    <section className="py-16 md:py-24 bg-white section-pattern relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* FAQ list */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-white/50"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    {processText(faq.question)}
                  </h3>
                </div>
                <div className="ml-6 flex-shrink-0">
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    } text-primary`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <div className="pl-14 pr-4">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {processText(faq.answer)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
