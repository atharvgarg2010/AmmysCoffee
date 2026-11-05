import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function StorySection() {
  const craftPillars = [
    {
      number: '01',
      title: '100% Single-Origin Arabica',
      description:
        'Sourced from certified high-altitude shade estates. Precision-roasted to unlock rich dark cacao, toasted hazelnut, and caramel sweetness with zero bitterness.',
    },
    {
      number: '02',
      title: 'Artisanal Small-Batch Bakery',
      description:
        'Buttery 72-layer croissants, caramelized San Sebastian cheesecakes, and sourdough tartines baked fresh every morning in our NCR central commissary.',
    },
    {
      number: '03',
      title: 'The Community Third-Place',
      description:
        'A warm sanctuary between home and work. Architectural velvet seating, amber pendant glow, and a space where stories, catch-ups, and ideas unfold.',
    },
  ];

  return (
    <section id="story" className="relative w-full bg-[#FAF8F5] text-[#121313] py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Editorial Top Border Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-[#121313]/[0.08]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Monograph Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#121313]/10 pb-8 mb-16 sm:mb-20">
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.34em] font-medium text-[#C88A58] block mb-3 font-sans">
              CHAPTER II • THE ETHOS & CRAFT
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-[-0.03em] text-[#121313] leading-[1.05]">
              Brewing Conversations, <br />
              <span className="italic text-[#C88A58]">Cultivating Craft.</span>
            </h2>
          </div>
          <div className="mt-6 sm:mt-0 text-left sm:text-right">
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#121313]/50 font-sans block">
              EST. DELHI NCR
            </span>
            <span className="text-xs font-serif italic text-[#121313]/70">
              Two Beans = One Bond
            </span>
          </div>
        </div>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Tactile Architecture & Photographic Proof (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl bg-[#121313]/5 group">
              <Image
                src="/assets/photos/cafe_interior_1.webp"
                alt="Ammy's Coffee Flagship Interior"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121313]/60 via-transparent to-transparent opacity-80" />
              
              {/* Photo Caption Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#121313]/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.24em] font-medium text-[#C88A58] block">
                    SANCTUARY DESIGN
                  </span>
                  <p className="text-xs font-serif text-[#121313] mt-0.5">
                    Amber Glow & Architectural Seating
                  </p>
                </div>
                <a
                  href="#cafes"
                  className="p-2 rounded-full bg-[#121313]/5 hover:bg-[#C88A58] hover:text-white transition-colors"
                  aria-label="Find nearest café"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Secondary Sensory Callout */}
            <div className="p-6 rounded-2xl bg-[#F4EFEA] border border-[#121313]/[0.06]">
              <p className="text-xs sm:text-sm text-[#121313]/70 font-light leading-relaxed italic font-serif">
                &ldquo;From that first pour of 100% Arabica to the last bite of our Tiramisu, everything here is made to feel like a warm hug in a cup.&rdquo;
              </p>
              <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-[#121313]/50 block mt-3 font-sans">
                — AMMY’S BRAND PROMISE
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Craft Pillars (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* The Brand Manifesto Excerpt */}
            <div className="space-y-6 mb-12 sm:mb-16">
              <p className="text-lg sm:text-2xl font-serif text-[#121313] leading-relaxed font-normal">
                This isn’t just your daily caffeine fix. It’s your slow morning ritual, your mid-day creative spark, and the background to conversations that matter.
              </p>
              <p className="text-sm sm:text-base text-[#121313]/70 font-light leading-relaxed">
                Born in the vibrant cultural landscape of Delhi NCR, Ammy’s was built on a simple yet unyielding philosophy: exceptional specialty coffee should never feel cold or unapproachable. We paired the rigor of third-wave roasting with the warmth of a true neighborhood third-place.
              </p>
            </div>

            {/* Craft Pillars List */}
            <div id="craft" className="scroll-mt-32 border-t border-[#121313]/10 divide-y divide-[#121313]/10">
              {craftPillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="py-8 first:pt-8 last:pb-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start group"
                >
                  <div className="sm:col-span-2">
                    <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#C88A58] block">
                      {pillar.number}
                    </span>
                  </div>
                  <div className="sm:col-span-10">
                    <h3 className="text-lg sm:text-xl font-serif text-[#121313] mb-2 group-hover:text-[#C88A58] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#121313]/65 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-10 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-[#121313]/10 mt-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-medium text-[#121313] hover:text-[#C88A58] pb-1 border-b border-[#121313]/30 hover:border-[#C88A58] transition-colors"
              >
                <span>Explore The Menu Catalog</span>
                <span className="text-[#C88A58]">→</span>
              </a>

              <a
                href="#cafes"
                className="text-xs uppercase tracking-[0.24em] text-[#121313]/60 hover:text-[#121313] transition-colors"
              >
                Locate Five Flagships
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
