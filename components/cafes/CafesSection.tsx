'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronDown, ChevronUp, MapPin, Phone, Clock } from 'lucide-react';

const outlets = [
  {
    name: 'Punjabi Bagh',
    tag: 'Flagship Roastery',
    address: 'Punjabi Bagh, Delhi',
    phone: '+919911000837',
    displayPhone: '+91 99110 00837',
    mapQuery: "Ammy's Coffee Punjabi Bagh Delhi",
    image: '/assets/photos/cafe_interior_1.webp',
    hours: '08:00 AM – 11:30 PM • Open Daily',
    vibe: 'Signature neon wall, hand-crafted wicker seating & artisanal espresso bar.',
  },
  {
    name: 'SDA Market',
    tag: 'Campus & Creative Lounge',
    address: 'SDA Market, Opposite IIT Main Gate, South Delhi',
    phone: '+919911000241',
    displayPhone: '+91 99110 00241',
    mapQuery: "Ammy's Coffee SDA Market South Delhi",
    image: '/assets/photos/cafe_interior_2.webp',
    hours: '08:00 AM – 11:30 PM • Open Daily',
    vibe: 'Sunlit booth alcoves designed for deep focus, cold brews & long conversations.',
  },
  {
    name: 'Greater Kailash I',
    tag: 'Boutique Market Flagship',
    address:
      '1st Floor, M Block Market (above Wafflesome), Greater Kailash I, New Delhi',
    phone: '+919911000528',
    displayPhone: '+91 99110 00528',
    mapQuery:
      "Ammy's Coffee M Block Market Greater Kailash I New Delhi",
    image: '/assets/photos/cafe_ambience.webp',
    hours: '08:00 AM – 11:30 PM • Open Daily',
    vibe: 'Warm amber glow, fluted architectural wall relief & flagship coffee kitchen.',
  },
  {
    name: 'Galleria Market',
    tag: 'DLF Phase IV Flagship',
    address: 'Galleria Market, DLF Phase IV, Gurugram',
    phone: '+919911000179',
    displayPhone: '+91 99110 00179',
    mapQuery: "Ammy's Coffee Galleria Market Gurugram",
    image: '/assets/photos/cafe_barista.webp',
    hours: '08:00 AM – 11:30 PM • Open Daily',
    vibe: 'Specialty pour-over bar, single origins & lively evening open terrace breeze.',
  },
  {
    name: 'Gujranwala Town',
    tag: 'North Delhi Flagship',
    address: 'Next to Invitation, Gujranwala Town, Delhi',
    phone: '+919911000627',
    displayPhone: '+91 99110 00627',
    mapQuery: "Ammy's Coffee Gujranwala Town Delhi",
    image: '/assets/photos/hero_poster.webp',
    hours: '08:00 AM – 11:30 PM • Open Daily',
    vibe: 'Grand community room, bespoke pastry showcase & late evening conversations.',
  },
];

export default function CafesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const activeOutlet = outlets[activeIndex] || outlets[0];

  // Scroll to a specific outlet card inside the container
  const scrollToOutlet = useCallback((index: number) => {
    setActiveIndex(index);
    const cardEl = cardRefs.current[index];
    if (cardEl && listRef.current) {
      const container = listRef.current;
      const targetScroll = cardEl.offsetTop - container.offsetTop;
      container.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  }, []);

  // Update active card based on scroll position inside list
  const handleListScroll = useCallback(() => {
    const container = listRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    setIsAtTop(scrollTop <= 12);
    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 16);

    const targetCenter = scrollTop + clientHeight * 0.35;
    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      const cardCenter = el.offsetTop - container.offsetTop + el.offsetHeight / 2;
      const dist = Math.abs(cardCenter - targetCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  // Wheel interception on desktop:
  // When cursor is within the section and the outlet list hasn't finished scrolling,
  // scroll the list first. Once reaching top/bottom boundary, allow page to scroll naturally.
  useEffect(() => {
    const section = sectionRef.current;
    const list = listRef.current;
    if (!section || !list) return;

    const onWheel = (e: WheelEvent) => {
      // Only enable pinned wheel delegation on desktop screens (>= 1024px)
      if (window.innerWidth < 1024) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 140 && rect.bottom >= window.innerHeight * 0.4;
      if (!inView) return;

      const { scrollTop, scrollHeight, clientHeight } = list;
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      const canScrollDown = isScrollingDown && scrollTop < scrollHeight - clientHeight - 4;
      const canScrollUp = isScrollingUp && scrollTop > 4;

      if (canScrollDown || canScrollUp) {
        e.preventDefault();
        list.scrollTop += e.deltaY * 0.85;
      }
    };

    section.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      section.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cafes"
      className="relative w-full scroll-mt-24 overflow-hidden bg-espresso py-20 text-cream sm:py-28 lg:py-36"
    >
      {/* Ambient background glow */}
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
            <div className="mt-3.5 inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-caramel font-medium">
              <Clock className="h-3.5 w-3.5 text-caramel shrink-0" />
              <span>All Flagships Open Daily · 08:00 AM – 11:30 PM</span>
            </div>
          </div>
        </div>

        {/* Sticky Editorial Grid: Left Photo Pins, Right Outlets Scroll */}
        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-12 lg:gap-14 lg:items-start">
          
          {/* Left Column: Pinned Sticky Photo Frame */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] h-[460px] sm:h-[520px] lg:h-[580px] w-full overflow-hidden rounded-2xl border border-cream/10 bg-espresso-surface shadow-2xl">
              
              {/* Stacked Images for instantaneous, silky cross-fade */}
              {outlets.map((outlet, index) => (
                <div
                  key={outlet.name}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <Image
                    src={outlet.image}
                    alt={`${outlet.name} interior at Ammy's Coffee`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1023px) 100vw, 42vw"
                    className="object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
                  />
                </div>
              ))}

              {/* Gradient Overlays for contrast */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-espresso via-espresso/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 z-20 bg-gradient-to-b from-espresso/40 via-transparent to-transparent pointer-events-none" />

              {/* Top Status Tag */}
              <div className="absolute top-5 left-5 right-5 z-30 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-espresso/60 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-caramel backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-caramel animate-pulse" />
                  {`Outlet 0${activeIndex + 1} / 05`}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-cream/70 font-medium">
                  {activeOutlet.tag}
                </span>
              </div>

              {/* Bottom Photo Overlay Details */}
              <div className="absolute bottom-5 left-5 right-5 z-30 pointer-events-none">
                <h4 className="font-serif text-2xl font-normal tracking-[-0.01em] text-cream mb-1">
                  {activeOutlet.name}
                </h4>
                <p className="text-xs text-cream/75 font-light leading-relaxed mb-3 max-w-[38ch]">
                  {activeOutlet.vibe}
                </p>

                {/* Outlet Progress Indicators */}
                <div className="flex items-center gap-1.5">
                  {outlets.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => scrollToOutlet(i)}
                      aria-label={`Switch to outlet 0${i + 1}`}
                      className={`h-1 rounded-full transition-all duration-300 pointer-events-auto ${
                        activeIndex === i
                          ? 'w-7 bg-caramel'
                          : 'w-2 bg-cream/25 hover:bg-cream/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Editorial Footer Line */}
            <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-cream/60">
              <span>The Ammy&apos;s Room</span>
              <span>Open Daily · 08:00 AM – 11:30 PM</span>
            </div>
          </div>

          {/* Right Column: Outlets Scroll Track */}
          <div className="lg:col-span-7 relative">
            
            {/* Top Fade Shadow (indicates content above when scrolled) */}
            <div
              className={`pointer-events-none absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-espresso to-transparent z-20 transition-opacity duration-300 ${
                isAtTop ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {/* Bounded Scroll Container on desktop (Invisible scrollbar, smooth scroll track) */}
            <div
              ref={listRef}
              onScroll={handleListScroll}
              className="lg:h-[580px] lg:overflow-y-auto no-scrollbar border-t border-cream/10 divide-y divide-cream/10"
            >
              {outlets.map((outlet, index) => {
                const isActive = activeIndex === index;
                return (
                  <article
                    key={outlet.name}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => scrollToOutlet(index)}
                    className={`group relative cursor-pointer py-7 sm:py-8 px-5 sm:px-7 -mx-2 sm:-mx-4 rounded-2xl transition-all duration-300 ease-out ${
                      isActive
                        ? 'bg-gradient-to-r from-caramel/[0.09] via-cream/[0.03] to-transparent shadow-lg shadow-black/20'
                        : 'hover:bg-gradient-to-r hover:from-caramel/[0.05] hover:via-cream/[0.015] hover:to-transparent'
                    }`}
                  >
                    {/* Left Vertical Accent Bar (Absolute - Zero Layout Jitter) */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-3 bottom-3 w-[2.5px] rounded-r-full transition-all duration-500 ease-out ${
                        isActive
                          ? 'bg-caramel opacity-100 scale-y-100 shadow-[0_0_12px_rgba(200,138,88,0.7)]'
                          : 'bg-caramel/40 opacity-0 scale-y-50 group-hover:opacity-100 group-hover:scale-y-90'
                      }`}
                    />

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 sm:gap-6 min-w-0 flex-1">
                        {/* Monospace Badge Number */}
                        <span
                          className={`mt-1 shrink-0 inline-flex items-center justify-center font-mono text-[10px] tracking-[0.2em] rounded-md px-2.5 py-1 transition-all duration-300 ${
                            isActive
                              ? 'bg-caramel/20 text-caramel border border-caramel/40 font-semibold'
                              : 'text-cream/40 border border-cream/10 group-hover:text-caramel group-hover:border-caramel/30 group-hover:bg-caramel/[0.08]'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div className="min-w-0 flex-1">
                          {/* Kicker tag with live indicator */}
                          <div className="flex items-center gap-2 mb-1.5">
                            <span
                              className={`text-[10px] uppercase tracking-[0.24em] font-medium transition-colors ${
                                isActive
                                  ? 'text-caramel'
                                  : 'text-caramel/70 group-hover:text-caramel'
                              }`}
                            >
                              {outlet.tag}
                            </span>
                            {isActive && (
                              <span className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] text-cream/45">
                                <span className="h-1.5 w-1.5 rounded-full bg-caramel animate-pulse" />
                                Live View
                              </span>
                            )}
                          </div>

                          {/* Outlet Name with subtle kinetic nudge */}
                          <h3
                            className={`font-serif text-2xl font-normal tracking-[-0.01em] transition-all duration-300 sm:text-[1.8rem] ${
                              isActive
                                ? 'text-cream translate-x-1'
                                : 'text-cream/80 group-hover:text-cream group-hover:translate-x-1'
                            }`}
                          >
                            {outlet.name}
                          </h3>

                          {/* Address */}
                          <div className="mt-2.5 flex items-start gap-2 text-sm leading-relaxed text-cream/70 transition-colors group-hover:text-cream/85">
                            <MapPin
                              className={`h-3.5 w-3.5 shrink-0 mt-1 transition-colors ${
                                isActive
                                  ? 'text-caramel'
                                  : 'text-caramel/70 group-hover:text-caramel'
                              }`}
                            />
                            <p className="max-w-[46ch]">{outlet.address}</p>
                          </div>

                          {/* Ambiance Note */}
                          <p className="mt-2 text-xs leading-5 text-cream/50 font-light max-w-[46ch] transition-colors group-hover:text-cream/70">
                            {outlet.vibe}
                          </p>

                          {/* Links & Timings */}
                          <div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6 pt-3 border-t border-cream/[0.06]">
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                outlet.mapQuery
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              aria-label={`Open ${outlet.name} in Google Maps (opens in a new tab)`}
                              className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-caramel transition-all duration-300 hover:text-caramel-light font-medium group-hover:translate-x-0.5"
                            >
                              Open in Maps
                              <ArrowUpRight className="h-3 w-3" />
                            </a>

                            <a
                              href={`tel:${outlet.phone}`}
                              onClick={(e) => e.stopPropagation()}
                              aria-label={`Call ${outlet.name} at ${outlet.displayPhone}`}
                              className="inline-flex items-center gap-1.5 text-xs tabular-nums tracking-[0.04em] text-cream/60 transition-colors hover:text-caramel"
                            >
                              <Phone className="h-3 w-3 text-caramel/70" />
                              {outlet.displayPhone}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Right Arrow Action Circle */}
                      <div
                        className={`shrink-0 h-9 w-9 rounded-full border flex items-center justify-center transition-all duration-300 mt-1 ${
                          isActive
                            ? 'border-caramel bg-caramel text-espresso shadow-md shadow-caramel/20'
                            : 'border-cream/15 text-cream/40 group-hover:border-caramel/60 group-hover:text-caramel group-hover:bg-caramel/10 group-hover:scale-105'
                        }`}
                      >
                        <ArrowUpRight
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isActive
                              ? 'translate-x-0.5 -translate-y-0.5'
                              : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                          }`}
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom Fade Shadow (indicates more content below) */}
            <div
              className={`pointer-events-none absolute bottom-12 left-0 right-0 h-16 bg-gradient-to-t from-espresso to-transparent z-20 transition-opacity duration-300 ${
                isAtBottom ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {/* Scroll Navigation & Hint Footer */}
            <div className="mt-5 flex items-center justify-between border-t border-cream/10 pt-4 text-xs text-cream/50">
              <span className="text-[10px] uppercase tracking-[0.22em] text-cream/60">
                {isAtBottom
                  ? 'All 5 Outlets Explored'
                  : 'Scroll through flagships (5)'}
              </span>

              {/* Quick prev/next jumper buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={activeIndex === 0}
                  onClick={() => scrollToOutlet(Math.max(0, activeIndex - 1))}
                  aria-label="Previous café"
                  className="rounded-lg border border-cream/15 p-1.5 text-cream/60 transition-colors hover:border-caramel hover:text-caramel disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronUp className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  disabled={activeIndex === outlets.length - 1}
                  onClick={() =>
                    scrollToOutlet(Math.min(outlets.length - 1, activeIndex + 1))
                  }
                  aria-label="Next café"
                  className="rounded-lg border border-cream/15 p-1.5 text-cream/60 transition-colors hover:border-caramel hover:text-caramel disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}