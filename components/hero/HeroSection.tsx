'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowDown, Sparkles, Coffee, Store, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#121313]">
      {/* Background Video Loop with Poster Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/photos/hero_poster.webp"
          className="h-full w-full object-cover opacity-45 scale-105 transform animate-fade-in"
        >
          <source src="/assets/videos/hero_ambient.mp4" type="video/mp4" />
        </video>

        {/* Ambient Gradient Overlays for High-Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121313] via-[#121313]/60 to-[#121313]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,19,19,0.85)_100%)]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-16 flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Top Pill: Brand Motif */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#C88A58] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
              Two Beans = One Bond
            </span>
            <span className="text-white/30">•</span>
            <span className="text-xs text-[#E8B88E] font-medium">
              Delhi NCR Flagship
            </span>
          </motion.div>

          {/* Master Headline: Editorial Serif */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white leading-[1.1] tracking-tight mb-6"
          >
            Brewing Conversations. <br />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FAF8F5] via-[#E8B88E] to-[#C88A58]">
              Cultivating Craft.
            </span>
          </motion.h1>

          {/* Authentic Brand Narrative (Extracted from Brand Deck) */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-white/80 leading-relaxed font-light mb-10 max-w-2xl"
          >
            From that first pour of <span className="text-white font-medium">100% Arabica</span> to the last bite of our artisanal Tiramisu, everything at Ammy’s is crafted to feel like a <span className="text-[#E8B88E] font-medium">warm hug in a cup</span>. Your slow morning ritual, mid-day pick-me-up, and favorite community space.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#C88A58] to-[#B57846] hover:from-[#D49B6A] hover:to-[#C88A58] shadow-xl shadow-[#C88A58]/25 hover:shadow-[#C88A58]/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Explore Signature Menu</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>

            <a
              href="#franchise"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 group"
            >
              <span>Franchise Opportunity</span>
              <ArrowRight className="w-4 h-4 text-[#C88A58] transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Location Quick-Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 text-xs text-white/60"
          >
            <Store className="w-3.5 h-3.5 text-[#C88A58]" />
            <span>Cafés open now in:</span>
            <span className="text-white/80 font-medium">
              GK-1 • Galleria Gurugram • SDA Market • Punjabi Bagh • Gujranwala Town
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Proof Strip & Scroll Indicator */}
      <div className="relative z-10 border-t border-white/10 bg-[#121313]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C88A58]/15 flex items-center justify-center shrink-0">
                <Coffee className="w-5 h-5 text-[#C88A58]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wider">100% Arabica</p>
                <p className="text-xs text-white/60">Single-origin craft brew</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C88A58]/15 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#C88A58]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wider">Artisanal Bakery</p>
                <p className="text-xs text-white/60">Croissants & small-batch desserts</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C88A58]/15 flex items-center justify-center shrink-0">
                <Store className="w-5 h-5 text-[#C88A58]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wider">5 Prime Outlets</p>
                <p className="text-xs text-white/60">Across Delhi & Gurugram</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C88A58]/15 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#C88A58]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wider">Proven Expansion</p>
                <p className="text-xs text-white/60">Turnkey franchise model</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

