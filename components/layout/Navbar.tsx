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
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Story', href: '#story' },
    { label: 'The Craft', href: '#craft' },
    { label: 'Menu Catalog', href: '#menu' },
    { label: 'Café Outlets', href: '#cafes' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[#111213]/95 backdrop-blur-md border-b border-white/[0.06] py-4'
          : 'bg-gradient-to-b from-[#111213]/90 via-[#111213]/40 to-transparent py-6 sm:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <Link href="/" className="relative z-10 flex items-center focus:outline-none">
            <div className="relative h-8 w-32 sm:h-10 sm:w-44 transition-opacity duration-300 hover:opacity-85">
              <Image
                src="/assets/logos/ammy_logo_white.png"
                alt="Ammy's Coffee"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Editorial Nav + Franchise Link */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.28em] text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <span className="text-white/20">|</span>

            <a
              href="#franchise"
              className="group inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-[#C88A58] hover:text-[#FAF8F5] transition-colors"
            >
              <span>Franchise</span>
              <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="#franchise"
              className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#C88A58]"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-x-0 top-full bg-[#111213] border-b border-white/[0.08] px-8 py-8 shadow-2xl overflow-hidden"
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
              <div className="pt-6 border-t border-white/[0.08] flex flex-col space-y-3">
                <a
                  href="#franchise"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.25em] text-[#C88A58] font-medium"
                >
                  Franchise Inquiries →
                </a>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                  I. GK-1 • II. Galleria • III. SDA • IV. Punjabi Bagh • V. Gujranwala
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
