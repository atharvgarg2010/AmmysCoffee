'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const outlets = [
  {
    name: 'Punjabi Bagh',
    address: 'Punjabi Bagh, Delhi',
    phone: '+919911000837',
    displayPhone: '+91 99110 00837',
    mapQuery: "Ammy's Coffee Punjabi Bagh Delhi",
    image: '/assets/photos/cafe_ambience.webp',
    hours: '08:00 AM – 11:30 PM • Open Daily',
  },
  {
    name: 'SDA Market',
    address: 'SDA Market, South Delhi',
    phone: '+919911000241',
    displayPhone: '+91 99110 00241',
    mapQuery: "Ammy's Coffee SDA Market South Delhi",
    image: '/assets/photos/cafe_interior_2.webp',
    hours: '08:00 AM – 11:30 PM • Open Daily',
  },
  {
    name: 'Greater Kailash I',
    address:
      '1st Floor, M Block Market (above Wafflesome), Greater Kailash I, New Delhi',
    phone: '+919911000528',
    displayPhone: '+91 99110 00528',
    mapQuery:
      "Ammy's Coffee M Block Market Greater Kailash I New Delhi",
    image: '/assets/photos/cafe_interior_1.webp',
    hours: '08:00 AM – 11:30 PM • Open Daily',
  },
  {
    name: 'Galleria Market',
    address: 'Galleria Market, Gurugram',
    phone: '+919911000179',
    displayPhone: '+91 99110 00179',
    mapQuery: "Ammy's Coffee Galleria Market Gurugram",
    image: '/assets/photos/cafe_barista.webp',
    hours: '08:00 AM – 11:30 PM • Open Daily',
  },
  {
    name: 'Gujranwala Town',
    address: 'Next to Invitation, Gujranwala Town, Delhi',
    phone: '+919911000627',
    displayPhone: '+91 99110 00627',
    mapQuery: "Ammy's Coffee Gujranwala Town Delhi",
    image: '/assets/photos/hero_poster.webp',
    hours: '08:00 AM – 11:30 PM • Open Daily',
  },
];

export default function CafesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeOutlet = outlets[activeIndex] || outlets[0];

  return (
    <section
      id="cafes"
      className="relative w-full scroll-mt-24 overflow-hidden bg-espresso py-20 text-cream sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-caramel/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.3em] text-caramel sm:text-xs">
              The Chill Spot You&apos;ve Been Manifesting
            </span>
            <h2 className="font-serif text-[clamp(2.6rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.03em] text-cream">
              Five cafés. <br />
              <span className="font-light italic text-caramel-light">
                One invitation.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pb-2">
            <p className="max-w-[42ch] text-sm leading-7 text-cream/70">
              From GK-1 to Gurugram, each room is built for slow mornings, long
              conversations, and the kind of afternoon that turns into evening.
            </p>
          </div>
        </div>

        {/* Sticky Editorial Grid: Left Photo Pins, Right Outlets Scroll */}
        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-12 lg:gap-14 lg:items-start">
          
          {/* Left Column: Pinned Sticky Photo Frame */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] max-h-[calc(100vh-10rem)] w-full overflow-hidden rounded-xl border border-cream/10 bg-espresso-surface shadow-2xl">
              <Image
                key={activeOutlet.name}
                src={activeOutlet.image}
                alt={`${activeOutlet.name} interior at Ammy's Coffee`}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover object-center transition-all duration-700"
              />
              {/* Bottom Subtle Gradient for Caption Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-transparent pointer-events-none" />
              
              {/* Photo Overlay Caption */}
              <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                <span className="text-[10px] uppercase tracking-[0.26em] text-caramel font-medium block mb-1">
                  {`0${activeIndex + 1} / 05 • ${activeOutlet.name}`}
                </span>
                <p className="text-xs text-cream/80 font-light">
                  {activeOutlet.hours}
                </p>
              </div>
            </div>
            
            <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-cream/60">
              The Ammy&apos;s Room · Delhi NCR
            </p>
          </div>

          {/* Right Column: Outlets List (Scrolls Naturally Alongside Pinned Photo) */}
          <div className="lg:col-span-7">
            <div className="border-t border-cream/10 divide-y divide-cream/10">
              {outlets.map((outlet, index) => {
                const isActive = activeIndex === index;
                return (
                  <article
                    key={outlet.name}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group cursor-pointer py-7 sm:py-8 px-4 -mx-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-cream/[0.04] border-l-2 border-caramel pl-5'
                        : 'hover:bg-cream/[0.02]'
                    }`}
                  >
                    <div className="flex items-start gap-5 sm:gap-7">
                      <span
                        className={`mt-1 shrink-0 text-[10px] uppercase tracking-[0.24em] transition-colors ${
                          isActive ? 'text-caramel font-semibold' : 'text-cream/40 group-hover:text-caramel'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                          <h3
                            className={`font-serif text-2xl font-normal tracking-[-0.01em] transition-colors sm:text-[1.7rem] ${
                              isActive ? 'text-cream' : 'text-cream/85 group-hover:text-cream'
                            }`}
                          >
                            {outlet.name}
                          </h3>
                          <a
                            href={`tel:${outlet.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Call ${outlet.name} at ${outlet.displayPhone}`}
                            className="text-xs tabular-nums tracking-[0.04em] text-cream/60 transition-colors hover:text-caramel focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
                          >
                            {outlet.displayPhone}
                          </a>
                        </div>

                        <p className="mt-2 max-w-[46ch] text-sm leading-6 text-cream/60">
                          {outlet.address}
                        </p>

                        <div className="mt-3 flex items-center gap-6">
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              outlet.mapQuery
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Open ${outlet.name} in Google Maps (opens in a new tab)`}
                            className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-caramel transition-colors hover:text-caramel-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
                          >
                            Open in Maps
                            <ArrowUpRight className="h-3 w-3" />
                          </a>

                          <span className="text-[10px] uppercase tracking-[0.2em] text-cream/40">
                            {outlet.hours.split('•')[0].trim()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="mt-8 text-xs leading-6 text-cream/50">
              For outlet-specific reservations or private bookings, call the café directly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
