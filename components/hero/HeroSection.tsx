import { ArrowDownRight } from 'lucide-react';
import StoreMarquee from './StoreMarquee';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#121313] text-[#FAF8F5]">
      {/* Cinematic Ambient Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          aria-hidden="true"
          poster="/assets/photos/hero_poster.webp"
          className="w-full h-full object-cover opacity-45"
        >
          <source src="/assets/videos/hero_ambient.mp4" type="video/mp4" />
        </video>

        {/* Precision Radial Vignette: allows espresso craft to breathe in center & edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(18,19,19,0.10)_0%,rgba(18,19,19,0.48)_55%,rgba(18,19,19,0.95)_100%)]" />

        {/* Bottom-Only Transition Fade to anchor into the store marquee */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#121313] via-[#121313]/50 to-transparent" />

        {/* Subtle Warm Amber Atmosphere Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[300px] sm:h-[400px] bg-[#C88A58]/[0.06] rounded-full blur-[100px] sm:blur-[140px]" />
      </div>

      {/* Top Spacer for Masthead Navigation */}
      <div className="h-20 sm:h-28 lg:h-36 shrink-0" />

      {/* Main Centered Editorial Stage */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 w-full flex-1 flex flex-col justify-center items-center text-center py-6 sm:py-10">
        
        {/* Monograph Metadata Kicker (font-sans, luxury tracking, clean non-breaking mobile layout) */}
        <div className="animate-hero-pill flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[9.5px] sm:text-[11px] uppercase tracking-[0.28em] sm:tracking-[0.38em] text-[#C88A58] font-sans font-medium mb-6 sm:mb-8 select-none">
          <span className="whitespace-nowrap">VOL. I</span>
          <span className="text-white/25 select-none" aria-hidden="true">•</span>
          <span className="whitespace-nowrap">THE COFFEE ATELIER</span>
          <span className="hidden sm:inline whitespace-nowrap">& COMMUNITY SPACE</span>
          <span className="text-white/25 select-none" aria-hidden="true">•</span>
          <span className="whitespace-nowrap">DELHI NCR</span>
        </div>

        {/* Master Monumental Headline (Fluid Clamp, Zero Drop-Shadow Bloat) */}
        <h1 className="animate-hero-title font-serif font-normal text-[clamp(3.2rem,10.5vw,8.5rem)] leading-[0.88] tracking-[-0.04em] text-[#FAF8F5] mb-6 sm:mb-8">
          From Beans <br />
          <span className="italic font-light text-[#E8B88E]">To Bonds.</span>
        </h1>

        {/* Authentic Brand Manifesto (Refined Measure & Tone) */}
        <p className="animate-hero-desc max-w-[46ch] text-[0.95rem] sm:text-base leading-relaxed text-[#FAF8F5]/70 font-light mx-auto mb-10 sm:mb-12 px-4 sm:px-0 text-pretty">
          At Ammy’s, we brew more than just coffee — we create a space where community thrives and stories unfold. Every cup is a celebration of craft, made with 100% premium Arabica beans, buttery croissants, and small-batch desserts.
        </p>

        {/* Editorial Action Group (Understated Luxury Links, No SaaS Button Glassmorphism) */}
        <div className="animate-hero-actions flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 w-full sm:w-auto">
          <a
            href="#menu"
            className="group inline-flex items-center gap-3 border-b border-[#FAF8F5]/35 pb-2 text-xs uppercase tracking-[0.24em] font-medium text-[#FAF8F5] transition-colors hover:border-[#C88A58] hover:text-[#C88A58] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C88A58]/70"
          >
            <span>View the Menu</span>
            <ArrowDownRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>

          <a
            href="#cafes"
            className="text-xs uppercase tracking-[0.24em] text-[#FAF8F5]/60 hover:text-[#E8B88E] transition-colors pb-2 inline-flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C88A58]/70"
          >
            <span>Find Your Café</span>
            <span className="text-[#C88A58] transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Flagship Outlets Infinite Ribbon */}
      <StoreMarquee />
    </section>
  );
}
