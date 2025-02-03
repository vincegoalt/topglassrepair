'use client';

import { useState } from 'react';
import { Language } from '@/app/types';
import { getTranslation } from '@/app/utils/languageClient';
import { services } from '@/app/lib/services';

interface ContactFormProps {
  lang: Language;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Get form data
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      // TODO: Implement actual form submission
      // For now, simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label 
          htmlFor="name"
          className="block text-sm font-medium text-neutral-700"
        >
          {getTranslation('contactForm.name', lang)}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      {/* Email */}
      <div>
        <label 
          htmlFor="email"
          className="block text-sm font-medium text-neutral-700"
        >
          {getTranslation('contactForm.email', lang)}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      {/* Phone */}
      <div>
        <label 
          htmlFor="phone"
          className="block text-sm font-medium text-neutral-700"
        >
          {getTranslation('contactForm.phone', lang)}
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      {/* Service */}
      <div>
        <label 
          htmlFor="service"
          className="block text-sm font-medium text-neutral-700"
        >
          {getTranslation('contactForm.service', lang)}
        </label>
        <select
          name="service"
          id="service"
          required
          className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="">{lang === 'en' ? 'Select a service' : 'Seleccione un servicio'}</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name[lang]}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label 
          htmlFor="message"
          className="block text-sm font-medium text-neutral-700"
        >
          {getTranslation('contactForm.message', lang)}
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn btn-primary ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              {lang === 'en' ? 'Sending...' : 'Enviando...'}
            </span>
          ) : (
            getTranslation('contactForm.submit', lang)
          )}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 rounded-md bg-green-50 text-green-800">
          {lang === 'en'
            ? 'Thank you for your message. We will contact you soon!'
            : '¡Gracias por su mensaje. Nos pondremos en contacto pronto!'}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-md bg-red-50 text-red-800">
          {lang === 'en'
            ? 'There was an error sending your message. Please try again.'
            : 'Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.'}
        </div>
      )}
    </form>
  );
}
