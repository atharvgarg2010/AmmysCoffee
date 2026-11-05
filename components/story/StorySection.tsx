import Image from 'next/image';

export default function StorySection() {
  const sensoryChapters = [
    {
      roman: 'I',
      tag: 'THE BEAN',
      title: 'Estate-Grown Arabica',
      description:
        'Sourced from certified high-elevation shade canopies. Precision-roasted to coax out deep cacao nib, toasted hazelnut, and silky caramel sweetness with zero bitterness.',
    },
    {
      roman: 'II',
      tag: 'THE BAKE',
      title: 'Artisanal Viennoiserie',
      description:
        '72 laminated butter layers, handcrafted daily. Flaky morning croissants, caramelized San Sebastian cheesecakes, and small-batch patisserie baked fresh in NCR.',
    },
    {
      roman: 'III',
      tag: 'THE ROOM',
      title: 'The Third-Place Sanctuary',
      description:
        'The intimate space between home and work. Soft amber pendant glow, architectural velvet seating, and a room purposefully built for slow catch-ups and lingering.',
    },
  ];

  return (
    <section id="story" className="relative w-full bg-[#121313] text-[#FAF8F5] py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-white/[0.06]">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C88A58]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#E8B88E]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Monograph Top Label */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-16 sm:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C88A58]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.38em] text-[#C88A58] font-sans font-medium">
              LOOKBOOK // 002 — THE MANIFESTO
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40 font-sans hidden sm:inline">
            DELHI NCR • FIVE FLAGSHIPS
          </span>
        </div>

        {/* Monumental Editorial Statement */}
        <div className="max-w-4xl mb-20 sm:mb-28">
          <h2 className="text-3xl sm:text-5xl lg:text-[4.25rem] font-serif font-normal text-[#FAF8F5] leading-[1.08] tracking-[-0.03em]">
            &ldquo;We brew more than coffee. We cultivate the space where{' '}
            <span className="italic font-light text-[#E8B88E]">
              community thrives and stories unfold.
            </span>
            &rdquo;
          </h2>
          <p className="mt-8 text-base sm:text-lg text-white/60 font-light leading-relaxed max-w-2xl">
            Born in the vibrant café culture of South Delhi and Gurugram, Ammy’s was founded on a singular conviction: third-wave craft coffee should never feel cold or unapproachable. Every cup is an invitation to slow down.
          </p>
        </div>

        {/* Editorial Asymmetric Photographic Spread (Lookbook Diptych) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-24 sm:mb-32">
          {/* Main Visual: Flagship Sanctuary (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden border border-white/[0.08] bg-[#18191A]">
              <Image
                src="/assets/photos/cafe_interior_1.webp"
                alt="Ammy's Flagship Interior Sanctuary"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center grayscale-[15%] contrast-[1.05] hover:scale-[1.02] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121313]/70 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#C88A58] font-sans">
                PLATE 01 / THE SANCTUARY
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-white/40 font-sans">
                GREATER KAILASH I • EST. 2024
              </span>
            </div>
          </div>

          {/* Secondary Visual: Tactile Barista Craft (5 Columns, Offset) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 lg:mb-8">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full overflow-hidden border border-white/[0.08] bg-[#18191A]">
              <Image
                src="/assets/photos/cafe_barista.webp"
                alt="Ammy's Barista Espresso Pour"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center grayscale-[15%] contrast-[1.05] hover:scale-[1.02] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121313]/70 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#E8B88E] font-sans">
                PLATE 02 / THE EXTRACTION
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-white/40 font-sans">
                100% ARABICA CRAFT
              </span>
            </div>
          </div>
        </div>

        {/* The Sensory Triptych (Replaces SaaS Feature List with High-Fashion Editorial Columns) */}
        <div id="craft" className="scroll-mt-32 pt-16 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
            {sensoryChapters.map((chapter) => (
              <div key={chapter.roman} className="flex flex-col space-y-4 group">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C88A58]">
                    [ {chapter.roman} ]
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.32em] text-white/40 font-sans">
                    {chapter.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-[#FAF8F5] leading-snug font-normal group-hover:text-[#E8B88E] transition-colors">
                  {chapter.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                  {chapter.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quiet Editorial Quote Plaque */}
        <div className="mt-24 sm:mt-32 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-sm font-serif italic text-white/50">
            &ldquo;Two beans = one bond. Sourced with honor, served with intention.&rdquo;
          </p>
          <div className="flex items-center space-x-8">
            <a
              href="#menu"
              className="text-xs uppercase tracking-[0.26em] text-[#C88A58] hover:text-[#FAF8F5] transition-colors border-b border-[#C88A58]/40 pb-1"
            >
              The Visual Menu →
            </a>
            <a
              href="#cafes"
              className="text-xs uppercase tracking-[0.26em] text-white/50 hover:text-white transition-colors"
            >
              The Five Cafés
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
