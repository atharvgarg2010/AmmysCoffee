'use client';

import { Building2, Store, Check, ArrowRight } from 'lucide-react';

const formats = [
  {
    id: 'flagship',
    type: 'Format A',
    name: 'High-Street Café Format',
    indicativeSize: 'Indicative ~1,200 – 2,200 sq. ft. (proposed)',
    ideal: 'Prime High-Street Retail & Prominent Neighborhood Corridors',
    benchmark: 'e.g. Greater Kailash I, Punjabi Bagh',
    highlights: [
      'Full 100% Arabica espresso bar & specialty beverage craft',
      'Artisanal café kitchen (pastas, toasties, waffles, croissants)',
      'Curated seating: booth alcoves, lounge tables & conversation corners',
      'Sit-down hospitality atmosphere designed for comfortable dwell',
    ],
    icon: Building2,
  },
  {
    id: 'galleria',
    type: 'Format B',
    name: 'Galleria & Commercial Format',
    indicativeSize: 'Indicative ~800 – 1,400 sq. ft. (proposed)',
    ideal: 'Commercial Centers, Gallerias & High-Footfall Transit Corridors',
    benchmark: 'e.g. Galleria Gurugram, SDA Market, Delhi',
    highlights: [
      'All-day espresso bar optimized for streamlined service',
      'Artisanal bakery showcase & light savory kitchen menu',
      'Comfortable seating tailored for casual meetings and daily rituals',
      'Compact footprint adapted to retail gallery circulation',
    ],
    icon: Store,
  },
];

export default function FranchiseFormats() {
  const handleSelectFormat = (formatId: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('ammy:select-format', { detail: formatId })
      );
    }
  };

  return (
    <section className="relative bg-espresso py-16 sm:py-20 lg:py-28 border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="block text-[11px] font-medium uppercase tracking-[0.3em] text-caramel sm:text-xs">
            Store Footprint Models · Proposed Concept
          </span>
          <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.03em] text-cream">
            Engineered for prime spaces, <br />
            <span className="font-light italic text-caramel-light">
              adaptable to your location.
            </span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-cream/70 sm:text-base">
            We adapt café layouts to fit location dynamics while safeguarding 100% Arabica coffee standards and guest hospitality. All formats and dimensions below are indicative and subject to site survey and CEO confirmation.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 sm:mt-16">
          {formats.map((format) => {
            const Icon = format.icon;
            return (
              <div
                key={format.name}
                className="relative flex flex-col justify-between rounded-2xl border border-cream/15 bg-espresso-surface p-8 sm:p-10 transition-colors hover:border-caramel/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-md border border-caramel/30 bg-caramel/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-caramel font-semibold">
                      {format.type}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cream/15 bg-espresso text-caramel">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl sm:text-[1.85rem] font-normal tracking-[-0.01em] text-cream">
                    {format.name}
                  </h3>

                  <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs">
                    <span className="rounded-full border border-cream/20 bg-cream/[0.04] px-3 py-1 text-cream/90 font-medium">
                      {format.indicativeSize}
                    </span>
                    <span className="text-caramel font-light">
                      {format.benchmark}
                    </span>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-cream/65">
                    <strong className="text-cream/80">Location Suitability: </strong>
                    {format.ideal}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-cream/10 pt-5">
                    {format.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-cream/75">
                        <Check className="h-4 w-4 text-caramel shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-cream/10 pt-5">
                  <a
                    href="#inquiry"
                    onClick={() => handleSelectFormat(format.id)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-caramel font-medium transition-colors hover:text-caramel-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel rounded-sm"
                  >
                    <span>Inquire About This Format</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-cream/60 font-light">
          Note: Indicative formats only, subject to physical site survey, municipal permits, and definitive partnership agreement.
        </p>
      </div>
    </section>
  );
}
