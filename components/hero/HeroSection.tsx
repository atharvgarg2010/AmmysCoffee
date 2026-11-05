'use client';

import { ArrowDownRight } from 'lucide-react';
import StoreMarquee from './StoreMarquee';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#111213] text-[#FAF8F5]">
      {/* Full-Bleed Ambient Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/photos/hero_poster.webp"
          className="h-full w-full object-cover opacity-40 scale-100"
        >
          <source src="/assets/videos/hero_ambient.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Film Vignette & Matte Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111213] via-[#111213]/55 to-[#111213]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#111213_90%)] opacity-85" />
      </div>

      {/* Top Spacer for Masthead Navigation */}
      <div className="h-20 sm:h-24" />

      {/* Main Center Editorial Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 w-full flex-1 flex flex-col items-center justify-center text-center py-4 sm:py-6">
        {/* Monograph Tag */}
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#C88A58] font-mono mb-5">
          <span>VOL. I</span>
          <span className="text-white/25">•</span>
          <span>THE COFFEE ATELIER & COMMUNITY SPACE</span>
          <span className="text-white/25">•</span>
          <span>DELHI NCR</span>
        </div>

        {/* Master Headline: Harmonious Proportional Serif */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-serif font-normal tracking-[-0.02em] text-[#FAF8F5] leading-[0.98] mb-6 select-none">
          From Beans <br />
          <span className="italic font-light text-[#E8B88E]">To Bonds.</span>
        </h1>

        {/* Serene Editorial Narrative */}
        <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed max-w-xl mx-auto mb-8">
          At Ammy’s, we brew more than just coffee — we create a space where community thrives and stories unfold. Each cup is a celebration of craft, made with 100% premium Arabica beans, buttery croissants, and small-batch desserts.
        </p>

        {/* Minimalist Editorial Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          <a
            href="#menu"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/30 hover:border-white text-[11px] uppercase tracking-[0.24em] font-medium text-white hover:bg-white hover:text-[#111213] transition-all duration-300"
          >
            <span>Explore Menu Catalog</span>
            <ArrowDownRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>

          <a
            href="#cafes"
            className="text-[11px] uppercase tracking-[0.24em] text-white/70 hover:text-[#C88A58] transition-colors py-3 inline-flex items-center gap-2"
          >
            <span>The Five Outlets</span>
            <span className="text-[#C88A58]">→</span>
          </a>
        </div>
      </div>

      {/* Store Marquee Bar (Deep Espresso & Soft Caramel Outlets Ticker) */}
      <StoreMarquee />
    </section>
  );
}
