'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDownRight, Compass, Sparkles, MapPin, Coffee } from 'lucide-react';
import CraftSeal from './CraftSeal';

export default function HeroSection() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const outlets = [
    { name: 'GK-1 M-Block', city: 'South Delhi', time: 'Open till 11:30 PM' },
    { name: 'Galleria Market', city: 'DLF IV, Gurugram', time: 'Open till 11:00 PM' },
    { name: 'SDA Market', city: 'Opposite IIT Delhi', time: 'Open till 11:00 PM' },
    { name: 'Punjabi Bagh', city: 'Club Road, Delhi', time: 'Open till 11:30 PM' },
    { name: 'Gujranwala Town', city: 'North Delhi', time: 'Open till 11:00 PM' },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#111213] text-[#FAF8F5]">
      {/* Ambient Roastery Glow & Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Amber Crema Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#C88A58]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-[#E8B88E]/10 rounded-full blur-[120px]" />

        {/* Subtle Architectural Grid Hairlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Top Spacer for Fixed Nav */}
      <div className="h-28 sm:h-36" />

      {/* Main Monumental Stage */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col justify-center py-6 sm:py-10">
        {/* Top Provenance & Live Delhi Time Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8 sm:mb-12">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#C88A58] font-mono">
            <span className="flex h-2 w-2 rounded-full bg-[#C88A58] animate-ping" />
            <span>NEW DELHI & GURUGRAM • 100% ARABICA CRAFT</span>
          </div>

          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-white/50 font-mono">
            <span className="text-white/80 font-medium">IST {timeStr || '16:00 PM'}</span>
            <span className="text-white/20">•</span>
            <span className="text-[#E8B88E]">5 CAFÉS BREWING</span>
          </div>
        </div>

        {/* Master Headline + Rotating Craft Seal Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-9">
            <h1 className="text-6xl sm:text-8xl lg:text-[7rem] xl:text-[8rem] font-serif font-normal tracking-[-0.03em] text-[#FAF8F5] leading-[0.9] select-none">
              Two Beans <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FAF8F5] via-[#E8B88E] to-[#C88A58]">
                One Bond.
              </span>
            </h1>
          </div>

          {/* Rotating Artisanal Seal on Right */}
          <div className="lg:col-span-3 flex lg:justify-end items-center pb-2">
            <CraftSeal />
          </div>
        </div>

        {/* Centerpiece Showcase: The Cinematic Video Atelier Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="border-l-2 border-[#C88A58] pl-6 space-y-4">
              <p className="text-lg sm:text-xl text-white/90 font-serif italic leading-relaxed">
                &ldquo;From that first pour of 100% Arabica to the last bite of our Tiramisu, everything here is made to feel like a warm hug in a cup.&rdquo;
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-white/50 font-mono">
                The Community Third-Place • Est. 2024
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#menu"
                className="group relative inline-flex items-center gap-3 px-8 py-4.5 bg-[#FAF8F5] text-[#111213] text-xs uppercase tracking-[0.25em] font-bold shadow-2xl shadow-[#C88A58]/20 hover:bg-[#C88A58] hover:text-white transition-all duration-300"
              >
                <span>Explore The Menu</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>

              <a
                href="#franchise"
                className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 hover:border-[#C88A58] text-xs uppercase tracking-[0.25em] font-medium text-white/80 hover:text-white transition-all duration-300"
              >
                <span>Franchise Desk</span>
                <span className="text-[#C88A58]">→</span>
              </a>
            </div>
          </div>

          {/* Right Cinematic Video Window (Vibrant & Warm!) */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.8)] group">
              {/* Full-Vibrancy Video Reel */}
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/photos/hero_poster.webp"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
              >
                <source src="/assets/videos/hero_ambient.mp4" type="video/mp4" />
              </video>

              {/* Subtle Warm Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111213]/80 via-transparent to-[#111213]/20 pointer-events-none" />

              {/* Floating Live Badge: Signature Drink */}
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#E8B88E]">
                <Coffee className="w-3 h-3 text-[#C88A58]" />
                <span>Spanish Latte • ₹260</span>
              </div>

              {/* Floating Live Badge: Bottom Left */}
              <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/80">
                <Sparkles className="w-3 h-3 text-[#C88A58]" />
                <span>San Sebastian Cheesecake • Artisanal Kitchen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive 5-Outlet Radar Ticker */}
        <div className="pt-6 border-t border-white/[0.08]">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#C88A58] mb-3">
            <MapPin className="w-3 h-3" />
            <span>Visit Our 5 Delhi NCR Flagships Today:</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {outlets.map((outlet) => (
              <a
                key={outlet.name}
                href="#cafes"
                className="group p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#C88A58]/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-white/95 group-hover:text-[#E8B88E] transition-colors">
                    {outlet.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[10px] text-white/50 font-light truncate">{outlet.city}</p>
                <p className="text-[9px] uppercase tracking-wider text-[#C88A58] mt-1 font-mono">
                  {outlet.time}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
