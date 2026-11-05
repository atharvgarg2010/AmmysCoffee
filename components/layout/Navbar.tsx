'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Craft', href: '#craft' },
    { label: 'Menu', href: '#menu' },
    { label: 'Cafés', href: '#cafes' },
    { label: 'Vibe', href: '#gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#121313]/90 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark / Emblem */}
          <Link href="/" className="relative z-10 flex items-center focus:outline-none">
            <div className="relative h-9 w-32 sm:h-11 sm:w-40 transition-opacity duration-300 hover:opacity-85">
              <Image
                src="/assets/logos/ammy_logo_white.png"
                alt="Ammy's Coffee"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation: Editorial Tracked Typography */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Understated Editorial Franchise Link */}
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-mono">
              NCR • 5 OUTLETS
            </span>
            <a
              href="#franchise"
              className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-[#C88A58] hover:text-[#FAF8F5] transition-colors duration-200 py-1"
            >
              <span>Franchise</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="#franchise"
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C88A58]"
            >
              Franchise
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white/80 hover:text-white p-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-full bg-[#121313] border-b border-white/10 px-8 py-10 shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-wide text-white/90 hover:text-[#C88A58] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
                <a
                  href="#franchise"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.25em] text-[#C88A58] font-semibold"
                >
                  Franchise Inquiries →
                </a>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                  GK-1 • Galleria • SDA • Punjabi Bagh • Gujranwala Town
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
