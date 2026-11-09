import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Compass } from 'lucide-react';

const locations = [
  { name: 'Greater Kailash I', query: "Ammy's Coffee M Block Market Greater Kailash I Delhi" },
  { name: 'Galleria Gurugram', query: "Ammy's Coffee Galleria Market Gurugram" },
  { name: 'SDA Market', query: "Ammy's Coffee SDA Market Delhi" },
  { name: 'Punjabi Bagh', query: "Ammy's Coffee Punjabi Bagh Delhi" },
  { name: 'Gujranwala Town', query: "Ammy's Coffee Gujranwala Town Delhi" },
];

export default function VisitBanner() {
  return (
    <section className="relative w-full bg-espresso pb-20 pt-8 sm:pb-28 lg:pb-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-cream/15 bg-espresso-surface p-8 sm:p-14 lg:p-20 shadow-2xl">
          
          {/* Background Ambient Photo */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/assets/photos/cafe_interior_1.webp"
              alt="Warm café ambience at Ammy's Coffee"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center opacity-25"
            />
            {/* Deep Vignette Overlays for Crisp Editorial Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-espresso/70" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-espresso/80" />
          </div>

          {/* Ambient Warm Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-caramel/10 blur-[120px]" />

          {/* Content Container */}
          <div className="relative z-10 max-w-3xl">
            {/* Kicker Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-espresso/80 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.26em] text-caramel backdrop-blur-md mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-caramel animate-pulse" />
              <span>Delhi NCR Flagships</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.8rem)] font-normal leading-[1.02] tracking-[-0.03em] text-cream">
              Your table is waiting. <br />
              <span className="font-light italic text-caramel-light">
                Come for coffee, stay for connection.
              </span>
            </h2>

            {/* Body */}
            <p className="mt-6 max-w-[52ch] text-base font-light leading-relaxed text-cream/75 sm:text-lg">
              Fresh 100% Arabica pours, artisanal kitchen signatures, and warm ambient rooms open daily across Delhi NCR. No reservations needed — just walk in and make yourself at home.
            </p>

            {/* Direct Action CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#cafes"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-caramel px-8 text-xs font-semibold uppercase tracking-[0.22em] text-espresso transition-all duration-300 hover:bg-caramel-light hover:shadow-lg hover:shadow-caramel/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
              >
                <span>Find Nearest Café</span>
                <Compass className="h-3.5 w-3.5" />
              </a>

              <Link
                href="/menu"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cream/20 bg-cream/[0.04] px-8 text-xs font-medium uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:border-caramel hover:text-caramel hover:bg-cream/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
              >
                <span>Explore Menu</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Direct Neighborhood Quick Links */}
            <div className="mt-12 border-t border-cream/10 pt-8">
              <span className="block text-[10px] uppercase tracking-[0.24em] text-cream/50 mb-3">
                Walk in today across 5 prime neighborhoods
              </span>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {locations.map((loc) => (
                  <a
                    key={loc.name}
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-cream/10 bg-cream/[0.03] px-3 py-1.5 text-xs text-cream/70 transition-all duration-200 hover:border-caramel/60 hover:text-caramel hover:bg-cream/[0.06]"
                  >
                    <MapPin className="h-3 w-3 text-caramel/80 shrink-0" />
                    <span>{loc.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Discreet Franchise Link Footer */}
            <div className="mt-8 flex items-center gap-2 text-xs text-cream/50">
              <span>Interested in partnering with us?</span>
              <Link
                href="/franchise"
                className="inline-flex items-center gap-1 text-caramel transition-colors hover:text-caramel-light hover:underline underline-offset-4 font-medium"
              >
                <span>Explore Franchise Opportunities</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

