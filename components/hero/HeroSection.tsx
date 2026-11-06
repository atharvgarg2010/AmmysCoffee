import Link from 'next/link';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import StoreMarquee from './StoreMarquee';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-espresso text-cream">
      {/* Cinematic Ambient Background Video */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden bg-espresso">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 motion-reduce:opacity-100"
          style={{ backgroundImage: "url('/assets/photos/hero_poster.webp')" }}
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          aria-hidden="true"
          poster="/assets/photos/hero_poster.webp"
          className="h-full w-full object-cover object-center opacity-45 motion-reduce:hidden"
        >
          <source src="/assets/videos/hero_ambient.mp4" type="video/mp4" />
        </video>

        {/* Precision Radial Vignette: allows espresso craft to breathe in center & edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(18,19,19,0.28)_0%,rgba(18,19,19,0.58)_55%,rgba(18,19,19,0.95)_100%)]" />

        {/* Bottom-Only Transition Fade to anchor into the store marquee */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-espresso via-espresso/50 to-transparent" />

        {/* Subtle Warm Amber Atmosphere Glow */}
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-caramel/[0.06] blur-[100px] sm:h-[400px] sm:w-[600px] sm:blur-[140px]" />
      </div>

      {/* Top Spacer for Masthead Navigation */}
      <div className="h-20 sm:h-28 lg:h-36 shrink-0" />

      {/* Main Centered Editorial Stage */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 w-full flex-1 flex flex-col justify-center items-center text-center py-6 sm:py-10">
        
        {/* Monograph Metadata Kicker (font-sans, luxury tracking, clean non-breaking mobile layout) */}
        <div className="animate-hero-pill mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-caramel select-none sm:mb-8 sm:text-[11px] sm:tracking-[0.38em]">
          <span className="whitespace-nowrap">VOL. I</span>
          <span className="select-none text-cream/25" aria-hidden="true">•</span>
          <span className="whitespace-nowrap">THE COFFEE ATELIER</span>
          <span className="hidden whitespace-nowrap sm:inline">&amp; COMMUNITY SPACE</span>
          <span className="select-none text-cream/25" aria-hidden="true">•</span>
          <span className="whitespace-nowrap">DELHI NCR</span>
        </div>

        {/* Master Monumental Headline (Fluid Clamp, Zero Drop-Shadow Bloat) */}
        <h1 className="animate-hero-title mb-6 font-serif text-[clamp(3.2rem,10.5vw,8.5rem)] font-normal leading-[0.88] tracking-[-0.04em] text-cream sm:mb-8">
          From Beans <br />
          <span className="font-light italic text-caramel-light">To Bonds.</span>
        </h1>

        {/* Authentic Brand Manifesto (Refined Measure & Tone) */}
        <p className="animate-hero-desc mx-auto mb-10 max-w-[46ch] px-4 text-[0.95rem] font-light leading-relaxed text-cream/80 text-pretty sm:mb-12 sm:px-0 sm:text-base">
          At Ammy’s, we brew more than just coffee — we create a space where
          community thrives and stories unfold. Every cup is a celebration of
          craft, made with 100% premium Arabica beans, buttery croissants, and
          small-batch desserts.
        </p>

        {/* Editorial Action Group (Understated Luxury Links, No SaaS Button Glassmorphism) */}
        <div className="animate-hero-actions flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row sm:gap-10">
          <Link
            href="/menu"
            className="group inline-flex min-h-11 items-center gap-3 border-b border-cream/35 pb-2 text-xs font-medium uppercase tracking-[0.24em] text-cream transition-colors hover:border-caramel hover:text-caramel focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
          >
            <span>View the Menu</span>
            <ArrowDownRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </Link>

          <a
            href="#cafes"
            className="group inline-flex min-h-11 items-center gap-2 border-b border-transparent pb-2 text-xs uppercase tracking-[0.24em] text-cream/75 transition-colors hover:text-caramel-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
          >
            <span>Find Your Café</span>
            <ArrowRight className="h-3.5 w-3.5 text-caramel transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Flagship Outlets Infinite Ribbon */}
      <StoreMarquee />
    </section>
  );
}

