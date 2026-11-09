import Image from 'next/image';
import { Coffee, UtensilsCrossed, Sparkles, BookOpen, Check } from 'lucide-react';

const proofPoints = [
  {
    num: '01',
    title: '100% Arabica Coffee Craft',
    subtitle: 'Signature Brews & Daily Rituals',
    description:
      'We serve 100% Arabica coffees across espresso classics, iced Spanish lattes, frappes, and signature cold brews crafted for repeat coffee lovers.',
    icon: Coffee,
    highlights: ['100% Arabica house standard', 'Signature cold brews & lattes', 'Consistent extraction recipes'],
  },
  {
    num: '02',
    title: 'Artisanal Kitchen Catalog',
    subtitle: 'Pastas, Toasties & Viennoiserie',
    description:
      'Ammy’s pairs coffee with a verified food catalog: savory pastas, artisan toasties, golden waffles, buttery croissants, and house desserts including our signature Tiramisu.',
    icon: UtensilsCrossed,
    highlights: ['Verified all-day café menu', 'Freshly baked viennoiserie', 'Savory & sweet pairings'],
  },
  {
    num: '03',
    title: 'Warm Neighborhood Atmosphere',
    subtitle: 'Built for Unhurried Dwell',
    description:
      'Every outlet is created as a welcoming third space: warm ambient tones, comfortable seating alcoves, and hospitality built for conversation and slow afternoons.',
    icon: Sparkles,
    highlights: ['Curated seating arrangements', 'Warm ambient lighting', 'Neighborhood destination feel'],
  },
  {
    num: '04',
    title: 'Proposed Operational Guidelines',
    subtitle: 'Centralized Standards & Support',
    description:
      'Proposed partners receive standardized beverage and food recipes, quality bean sourcing guidelines, and operational recommendations to preserve brand integrity.',
    icon: BookOpen,
    highlights: ['Standardized recipe binders', 'Quality coffee bean sourcing', 'Operational launch guidance'],
  },
];

export default function FranchisePillars() {
  return (
    <section
      id="pillars"
      className="relative scroll-mt-24 bg-cream text-espresso py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="block text-[11px] font-medium uppercase tracking-[0.3em] text-caramel-ink sm:text-xs">
            Concept Proof · The Ammy&apos;s Difference
          </span>
          <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.03em] text-espresso">
            Specialty coffee craft, <br />
            <span className="font-light italic text-caramel">
              anchored by an artisanal kitchen.
            </span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-espresso/80 sm:text-base">
            Across 5 Delhi NCR locations, Ammy&apos;s Coffee pairs 100% Arabica espresso craft with fresh kitchen items to build a community-first café experience. Here is the operational concept behind our spaces.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Visual Photography Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-espresso/10 bg-espresso/5 shadow-xl">
              <Image
                src="/assets/photos/cafe_barista.webp"
                alt="Barista crafting 100% Arabica espresso at Ammy's Coffee"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <span className="text-[10px] uppercase tracking-[0.24em] text-caramel-light font-medium block">
                  Craft in Action
                </span>
                <p className="mt-1 font-serif text-xl sm:text-2xl text-cream font-normal">
                  Handcrafted espresso extraction.
                </p>
                <p className="mt-1 text-xs text-cream/70 font-light">
                  Every cup poured with 100% Arabica beans across Delhi NCR.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-espresso/10 bg-white/70 p-6 shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.22em] text-caramel-ink font-semibold block">
                Artisanal Kitchen Quality
              </span>
              <p className="mt-2 text-xs leading-relaxed text-espresso/75">
                Our menu features curated savory and sweet plates — from Italian-style pastas and toasties to flaky croissants and artisanal waffles — freshly prepared to accompany our coffees.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Editorial Concept Blocks */}
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {proofPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="flex flex-col justify-between rounded-2xl border border-espresso/10 bg-white/80 p-7 sm:p-8 transition-colors hover:border-caramel-ink/40 hover:bg-white shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold tracking-[0.24em] text-caramel-ink">
                        {item.num}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-espresso/10 bg-cream text-caramel-ink">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="mt-5 font-serif text-xl sm:text-2xl font-normal tracking-[-0.01em] text-espresso">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-caramel-ink">
                      {item.subtitle}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-espresso/75 font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-espresso/10 pt-4 space-y-2">
                    {item.highlights.map((point) => (
                      <div key={point} className="flex items-center gap-2 text-xs text-espresso/70">
                        <Check className="h-3.5 w-3.5 text-caramel-ink shrink-0" aria-hidden="true" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
