'use client';

import { ArrowDownRight } from 'lucide-react';
import StoreMarquee from './StoreMarquee';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#101112] text-[#FAF8F5]">
      {/* Cinematic Ambient Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/photos/hero_poster.webp"
          className="w-full h-full object-cover opacity-45 scale-105"
        >
          <source src="/assets/videos/hero_ambient.mp4" type="video/mp4" />
        </video>

        {/* Precision Radial Vignette (Ensures 100% Crisp Typography Contrast) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,17,18,0.68)_0%,rgba(16,17,18,0.88)_70%,#101112_100%)]" />

        {/* Vertical Ambient Shadow for Masthead and Bottom Bar Integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#101112]/85 via-transparent to-[#101112]" />

        {/* Subtle Warm Amber Atmosphere Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C88A58]/[0.06] rounded-full blur-[140px]" />
      </div>

      {/* Top Spacer for Masthead Navigation */}
      <div className="h-28 sm:h-36" />

      {/* Main Centered Editorial Stage */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-center text-center py-8 sm:py-12">
        {/* Monograph Metadata Kicker */}
        <div className="animate-hero-pill inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11.5px] uppercase tracking-[0.32em] text-[#C88A58] font-mono mb-6 sm:mb-8 select-none">
          <span>VOL. I</span>
          <span className="text-white/25">•</span>
          <span>THE COFFEE ATELIER & COMMUNITY SPACE</span>
          <span className="text-white/25">•</span>
          <span>DELHI NCR</span>
        </div>

        {/* Master Monumental Headline */}
        <h1 className="animate-hero-title text-6xl sm:text-8xl md:text-9xl lg:text-[7.5rem] xl:text-[8.5rem] font-serif font-normal tracking-[-0.03em] text-[#FAF8F5] leading-[0.92] mb-7 sm:mb-8 select-none drop-shadow-sm">
          From Beans <br />
          <span className="italic font-light text-[#E8B88E]">To Bonds.</span>
        </h1>

        {/* Authentic Brand Manifesto */}
        <p className="animate-hero-desc text-base sm:text-lg md:text-[1.15rem] text-[#FAF8F5]/80 font-light leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
          At Ammy’s, we brew more than just coffee — we create a space where community thrives and stories unfold. Each cup is a celebration of craft, made with 100% premium Arabica beans, buttery croissants, and small-batch desserts.
        </p>

        {/* Editorial Action Group */}
        <div className="animate-hero-actions flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <a
            href="#menu"
            className="group inline-flex items-center gap-3 px-8 sm:px-9 py-4 border border-white/35 hover:border-white text-[11px] sm:text-xs uppercase tracking-[0.26em] font-medium text-[#FAF8F5] bg-black/20 backdrop-blur-sm hover:bg-[#FAF8F5] hover:text-[#101112] transition-all duration-300"
          >
            <span>Explore Menu Catalog</span>
            <ArrowDownRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>

          <a
            href="#cafes"
            className="text-[11px] sm:text-xs uppercase tracking-[0.26em] text-white/75 hover:text-[#C88A58] transition-colors py-4 inline-flex items-center gap-2 group"
          >
            <span>The Five Outlets</span>
            <span className="text-[#C88A58] transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Flagship Outlets Infinite Ribbon */}
      <StoreMarquee />
    </section>
  );
}
