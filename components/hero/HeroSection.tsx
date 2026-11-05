'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#121313] text-[#FAF8F5]">
      {/* Cinematic Ambient Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/photos/hero_poster.webp"
          className="h-full w-full object-cover opacity-35 scale-100"
        >
          <source src="/assets/videos/hero_ambient.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Film Vignette & Matte Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121313] via-[#121313]/40 to-[#121313]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#121313_100%)] opacity-80" />
      </div>

      {/* Top Spacer for Fixed Nav */}
      <div className="h-28 sm:h-36" />

      {/* Main Editorial Statement */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Subtle Category Hook */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C88A58] font-medium">
              Delhi NCR • Specialty Coffee & Artisanal Kitchen
            </span>
          </motion.div>

          {/* Master Headline: Bold Editorial Serif */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-[#FAF8F5] leading-[0.95] mb-8"
          >
            From Beans <br />
            <span className="italic font-light text-[#E8B88E]">To Bonds.</span>
          </motion.h1>

          {/* Authentic Brand Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-xl mb-12"
          >
            From that first pour of 100% Arabica to the last bite of our Tiramisu, everything here is made to feel like a warm hug in a cup. Your slow morning ritual, mid-day pick-me-up, and community third-place.
          </motion.p>

          {/* Editorial CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-white/25 hover:border-white text-xs uppercase tracking-[0.25em] font-medium text-white hover:bg-white hover:text-[#121313] transition-all duration-300"
            >
              <span>Explore Menu</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#cafes"
              className="text-xs uppercase tracking-[0.25em] text-white/60 hover:text-[#C88A58] transition-colors py-4 inline-flex items-center gap-2"
            >
              <span>Find A Café</span>
              <span className="text-[#C88A58]">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Editorial Perimeter Footer & Locations Strip */}
      <div className="relative z-10 border-t border-white/10 mt-16 bg-[#121313]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Location Manifest */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-white/50">
            <span className="text-white/80 font-medium">Outlets:</span>
            <span>GK-1 (M Block)</span>
            <span className="text-white/20">•</span>
            <span>Galleria Gurugram</span>
            <span className="text-white/20">•</span>
            <span>SDA Market</span>
            <span className="text-white/20">•</span>
            <span>Punjabi Bagh</span>
            <span className="text-white/20">•</span>
            <span>Gujranwala Town</span>
          </div>

          {/* Coffee Philosophy Stamp */}
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#C88A58] font-medium shrink-0 flex items-center gap-2">
            <span>100% Arabica Specialty</span>
            <span className="text-white/20">•</span>
            <span className="text-white/40">Artisanal Bakery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
