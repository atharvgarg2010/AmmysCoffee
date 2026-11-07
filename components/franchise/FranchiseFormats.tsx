import { Building2, Store, Check, ArrowRight } from 'lucide-react';

const formats = [
  {
    type: 'Format A',
    name: 'High-Street Lifestyle Flagship',
    size: '1,200 – 2,200 sq. ft.',
    ideal: 'Prime High-Street Retail, Affluent Residential & Cultural Corridors',
    benchmark: 'e.g. Greater Kailash I, Punjabi Bagh Flagships',
    highlights: [
      'Full-scale specialty coffee bar & multi-roast pour-over station',
      'Full artisanal kitchen (pizzas, pastas, sourdough toasties, waffles)',
      'Curated seating: deep plush booths, community tables & solo work alcoves',
      'Optional open-air alfresco patio seating where permits allow',
      'Maximum brand presence, highest dwell time & largest ticket sizes',
    ],
    icon: Building2,
  },
  {
    type: 'Format B',
    name: 'Galleria & Commercial Hub',
    size: '800 – 1,400 sq. ft.',
    ideal: 'Premium Shopping Gallerias, Tech Campuses & High-Footfall Transit Hubs',
    benchmark: 'e.g. Galleria Gurugram, SDA Market (Opposite IIT)',
    highlights: [
      'High-throughput espresso bar optimized for swift peak-hour service',
      'Artisanal bakery showcase, grab-and-go specialty coolers & light kitchen',
      'Laptop-friendly high-top tables with integrated charging points',
      'Fast table turns during breakfast, lunch & evening hours',
      'Optimized space footprint with strong revenue per square foot',
    ],
    icon: Store,
  },
];

export default function FranchiseFormats() {
  return (
    <section className="relative bg-espresso py-16 sm:py-20 lg:py-28 border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="block text-[11px] font-medium uppercase tracking-[0.3em] text-caramel sm:text-xs">
            Store Footprint & Models
          </span>
          <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.03em] text-cream">
            Engineered for prime retail spaces, <br />
            <span className="font-light italic text-caramel-light">
              flexible to your location.
            </span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-cream/70 sm:text-base">
            We adapt our footprint to match local footfall patterns while protecting brand standards, guest atmosphere, and unit economics.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 sm:mt-16">
          {formats.map((format) => {
            const Icon = format.icon;
            return (
              <div
                key={format.name}
                className="group relative flex flex-col justify-between rounded-3xl border border-cream/15 bg-espresso-surface p-8 sm:p-12 transition-all duration-300 hover:border-caramel/50 hover:shadow-2xl hover:shadow-black/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-md border border-caramel/30 bg-caramel/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-caramel font-semibold">
                      {format.type}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cream/15 bg-espresso text-caramel">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl sm:text-[1.85rem] font-normal tracking-[-0.01em] text-cream">
                    {format.name}
                  </h3>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full border border-cream/20 bg-cream/[0.04] px-3 py-1 text-cream font-medium">
                      Footprint: {format.size}
                    </span>
                    <span className="text-caramel font-light">
                      {format.benchmark}
                    </span>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-cream/60">
                    <strong className="text-cream/80">Ideal Location: </strong>
                    {format.ideal}
                  </p>

                  <div className="mt-8 space-y-3 border-t border-cream/10 pt-6">
                    {format.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-cream/75">
                        <Check className="h-4 w-4 text-caramel shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 border-t border-cream/10 pt-6">
                  <a
                    href="#inquiry"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-caramel font-medium transition-colors hover:text-caramel-light"
                  >
                    <span>Inquire About This Format</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
