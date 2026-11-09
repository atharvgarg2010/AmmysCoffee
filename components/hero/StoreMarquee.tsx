'use client';

import { useState } from 'react';

const items = [
  'GREATER KAILASH I (M-BLOCK)',
  'GALLERIA MARKET (GURUGRAM)',
  'SDA MARKET (SOUTH DELHI)',
  'PUNJABI BAGH',
  'GUJRANWALA TOWN',
  'TWO BEANS — ONE BOND',
];

export default function StoreMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      role="region"
      aria-label="Our flagship café locations"
      className="relative z-20 w-full shrink-0 select-none overflow-hidden border-y border-caramel/25 bg-espresso-surface py-4 sm:py-5"
    >
      {/* Infinite Scrolling Track */}
      <div
        className={`animate-marquee flex items-center whitespace-nowrap ${
          paused ? 'paused' : ''
        }`}
      >
        {/* Set 1 */}
        <div className="flex items-center space-x-8 pr-8 sm:space-x-14 sm:pr-14">
          {items.map((item, index) => (
            <div
              key={`set1-${index}`}
              className="flex items-center space-x-8 sm:space-x-14"
            >
              <span className="text-[10.5px] font-medium uppercase tracking-[0.34em] text-caramel-light sm:text-xs sm:tracking-[0.38em]">
                {item}
              </span>
              <span
                className="text-[10px] text-caramel/75 sm:text-[11px]"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>
          ))}
        </div>

        {/* Set 2 (Cloned for Seamless Infinite Loop) */}
        <div
          className="flex items-center space-x-8 pr-8 sm:space-x-14 sm:pr-14"
          aria-hidden="true"
        >
          {items.map((item, index) => (
            <div
              key={`set2-${index}`}
              className="flex items-center space-x-8 sm:space-x-14"
            >
              <span className="text-[10.5px] font-medium uppercase tracking-[0.34em] text-caramel-light sm:text-xs sm:tracking-[0.38em]">
                {item}
              </span>
              <span
                className="text-[10px] text-caramel/75 sm:text-[11px]"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        aria-pressed={paused}
        aria-label={paused ? 'Resume store ribbon' : 'Pause store ribbon'}
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 border border-caramel/25 bg-espresso-surface px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-caramel transition-colors hover:text-caramel-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
      >
        {paused ? 'Play' : 'Pause'}
      </button>
    </div>
  );
}
