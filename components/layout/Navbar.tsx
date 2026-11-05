'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MapPin, Coffee } from 'lucide-react';

interface NavbarProps {
  onFranchiseClick?: () => void;
}

export default function Navbar({ onFranchiseClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'The Craft', href: '#craft' },
    { label: 'Signature Menu', href: '#menu' },
    { label: 'Our Cafés', href: '#cafes' },
    { label: 'The Vibe', href: '#gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#121313]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#121313]/80 via-[#121313]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Ammy's Coffee Home"
          >
            <div className="relative h-10 w-36 sm:h-12 sm:w-44 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/logos/ammy_logo_white.png"
                alt="Ammy's Coffee"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C88A58] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA: Franchise With Us */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#cafes"
              className="text-xs font-semibold text-white/70 hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C88A58]" />
              <span>5 NCR Outlets</span>
            </a>

            <a
              href="#franchise"
              onClick={onFranchiseClick}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#C88A58] to-[#B57846] hover:from-[#D49B6A] hover:to-[#C88A58] shadow-lg shadow-[#C88A58]/20 hover:shadow-[#C88A58]/40 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
            >
              <span>Franchise With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="#franchise"
              className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-[#C88A58] shadow-sm"
            >
              Franchise
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#121313]/98 border-b border-white/10 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-white/90 hover:text-[#C88A58] transition-colors py-2 border-b border-white/5"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#cafes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/15 text-sm font-semibold text-white/90 hover:bg-white/5"
                >
                  <MapPin className="w-4 h-4 text-[#C88A58]" />
                  <span>Find a Café (GK-1, Galleria, SDA...)</span>
                </a>

                <a
                  href="#franchise"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#C88A58] to-[#B57846] shadow-lg shadow-[#C88A58]/25"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Franchise Opportunity</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

