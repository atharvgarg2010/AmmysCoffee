import Image from 'next/image';
import { ArrowDownRight } from 'lucide-react';

export default function StorySection() {
  const pillars = [
    {
      title: '100% Specialty Arabica',
      description:
        'Sourced from certified high-altitude shade estates. Precision-roasted to unlock deep cacao, toasted hazelnut, and natural caramel sweetness with zero bitterness.',
    },
    {
      title: 'Artisanal Bakery & Desserts',
      description:
        'Flaky 72-layer butter croissants, Lotus Biscoff treats, and caramelized San Sebastian cheesecakes baked fresh every morning across Delhi NCR.',
    },
    {
      title: 'The Aesthetic Third-Place',
      description:
        'A warm sanctuary between home and work. Soft amber lighting, bold art, and cozy velvet booths that invite you to slow down and stay longer.',
    },
  ];

  return (
    <section id="story" className="relative w-full bg-[#121313] text-[#FAF8F5] py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Subtle Warm Amber Atmosphere */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#C88A58]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Editorial Section Header: Warm, Human, Elegant */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-medium text-[#C88A58] block mb-4">
            The Ammy&apos;s Philosophy
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-[#FAF8F5] leading-[1.05] tracking-[-0.03em] mb-6">
            Come for the coffee. <br />
            <span className="italic font-light text-[#E8B88E]">Stay for the connection.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
            Step into Ammy&apos;s and enter your second home — where the lighting&apos;s soft, the art&apos;s bold, and the booths practically beg you to stay longer. From that first pour of 100% Arabica to the last bite of our warm San Sebastian, everything here is made to feel like a warm hug in a cup.
          </p>
        </div>

        {/* Visual Storytelling: Editorial Dual Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 sm:mb-28">
          {/* Main Space Photo (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#18191A] border border-white/[0.08]">
              <Image
                src="/assets/photos/cafe_interior_1.webp"
                alt="Ammy's Flagship Interior in Greater Kailash I"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/50">
              The Flagship Lounge • Greater Kailash I (M-Block)
            </p>
          </div>

          {/* Barista Craft Photo (5 cols) */}
          <div className="lg:col-span-5 space-y-3 lg:pt-8">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#18191A] border border-white/[0.08]">
              <Image
                src="/assets/photos/cafe_barista.webp"
                alt="Ammy's Barista Hand-Pulling Specialty Espresso"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C88A58]">
              Handcrafted 100% Arabica Brewed Daily
            </p>
          </div>
        </div>

        {/* The Three Craft Pillars */}
        <div id="craft" className="scroll-mt-32 pt-12 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {pillars.map((pillar, index) => (
              <div key={index} className="space-y-3">
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#C88A58] block font-medium">
                  {`0${index + 1}`}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#FAF8F5] font-normal">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sensory Footer Note */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.26em] text-white/40">
            Delhi NCR • GK-1 • Galleria • SDA • Punjabi Bagh • Gujranwala
          </span>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#E8B88E] hover:text-white transition-colors"
          >
            <span>Explore The Menu</span>
            <ArrowDownRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
