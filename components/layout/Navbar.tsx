'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Escape handling, body scroll lock, focus trap, and focus return
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const drawerItems = drawerRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    const focusable = [
      ...(triggerRef.current ? [triggerRef.current] : []),
      ...(drawerItems ? Array.from(drawerItems) : []),
    ];
    drawerItems?.[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        return;
      }

      if (e.key !== 'Tab' || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'The Story', href: isHome ? '#story' : '/#story' },
    { label: 'The Craft', href: isHome ? '#craft' : '/#craft' },
    { label: 'The Menu', href: '/menu' },
    { label: 'Café Outlets', href: isHome ? '#cafes' : '/#cafes' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-espresso/95 backdrop-blur-md border-b border-cream/[0.06] py-4'
          : 'bg-gradient-to-b from-espresso/90 via-espresso/40 to-transparent py-6 sm:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="relative z-10 flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
          >
            <div className="relative h-8 w-32 sm:h-10 sm:w-44 transition-opacity duration-300 hover:opacity-85">
              <Image
                src="/assets/logos/ammy_logo_white.png"
                alt="Ammy's Coffee"
                fill
                priority
                sizes="(max-width: 640px) 128px, 176px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Editorial Nav + Franchise Link */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-center space-x-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.28em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70 ${
                    link.href === '/menu' && pathname === '/menu'
                      ? 'text-caramel font-medium'
                      : 'text-cream/60 hover:text-cream'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/franchise"
              className={`group inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70 ${
                pathname === '/franchise'
                  ? 'text-caramel font-semibold'
                  : 'text-caramel hover:text-cream'
              }`}
            >
              <span>Franchise</span>
              <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-4">
            <Link
              href="/franchise"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[11px] uppercase tracking-[0.2em] font-medium text-caramel focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
            >
              Franchise
            </Link>
            <button
              ref={triggerRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center text-cream/80 hover:text-cream focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-haspopup="dialog"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Positioned absolutely relative to fixed header) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 max-h-[calc(100svh-6rem)] overflow-y-auto overscroll-contain border-b border-cream/[0.08] bg-espresso px-8 py-8"
          >
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1 font-serif text-xl tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70 sm:text-2xl ${
                    link.href === '/menu' && pathname === '/menu'
                      ? 'text-caramel'
                      : 'text-cream/90 hover:text-caramel'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 border-t border-cream/[0.08] pt-5">
                <Link
                  href="/franchise"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium uppercase tracking-[0.25em] text-caramel transition-colors hover:text-caramel-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
                >
                  Franchise Inquiries →
                </Link>
                <span className="font-sans text-[10px] uppercase leading-relaxed tracking-[0.2em] text-cream/60">
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
