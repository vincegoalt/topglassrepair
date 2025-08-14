'use client';

import { useState } from 'react';

interface ShowcaseImageSplitProps {
  imageUrl: string;
  alt: string;
  lang: 'en' | 'es';
}

export default function ShowcaseImageSplit({ imageUrl, alt, lang }: ShowcaseImageSplitProps) {
  const [isShowing, setIsShowing] = useState<'before' | 'after'>('after');

  return (
    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Container for the split image */}
      <div className="relative w-full h-full">
        {/* Before side (left half) */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isShowing === 'before' ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={imageUrl}
              alt={`Before: ${alt}`}
              className="absolute inset-0 w-[200%] h-full object-cover object-left"
              style={{ clipPath: 'inset(0 50% 0 0)' }}
            />
            <div className="absolute top-4 left-4 badge badge-primary">
              {lang === 'en' ? 'Before' : 'Antes'}
            </div>
          </div>
        </div>

        {/* After side (right half) */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isShowing === 'after' ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={imageUrl}
              alt={`After: ${alt}`}
              className="absolute inset-0 w-[200%] h-full object-cover object-right"
              style={{ clipPath: 'inset(0 0 0 50%)' }}
            />
            <div className="absolute top-4 left-4 badge badge-accent">
              {lang === 'en' ? 'After' : 'Después'}
            </div>
          </div>
        </div>

        {/* Split view (both sides) */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isShowing === 'before' || isShowing === 'after' ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="relative w-full h-full flex">
            {/* Before side */}
            <div className="relative w-1/2 h-full overflow-hidden">
              <img
                src={imageUrl}
                alt={`Before: ${alt}`}
                className="absolute inset-0 w-[200%] h-full object-cover object-left"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-4 left-4 badge badge-primary">
                {lang === 'en' ? 'Before' : 'Antes'}
              </div>
            </div>
            
            {/* Divider line */}
            <div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-lg z-10" />
            
            {/* After side */}
            <div className="relative w-1/2 h-full overflow-hidden">
              <img
                src={imageUrl}
                alt={`After: ${alt}`}
                className="absolute inset-0 w-[200%] h-full object-cover object-right"
                style={{ transform: 'translateX(-100%)' }}
              />
              <div className="absolute top-4 right-4 badge badge-accent">
                {lang === 'en' ? 'After' : 'Después'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => setIsShowing(isShowing === 'before' ? 'after' : 'before')}
          className="btn btn-glass"
        >
          {isShowing === 'before' 
            ? (lang === 'en' ? 'Show After' : 'Ver Después')
            : (lang === 'en' ? 'Show Before' : 'Ver Antes')}
        </button>
      </div>
    </div>
  );
}