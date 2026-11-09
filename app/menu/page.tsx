import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MenuSection from '@/components/menu/MenuSection';

export const metadata: Metadata = {
  title: "The Menu Catalog | Ammy's Coffee — 100% Arabica & Artisanal Kitchen",
  description:
    "Explore the complete Ammy's Coffee menu: handcrafted specialty espresso, signature Spanish lattes, cold brews, artisanal viennoiserie, and desserts across 5 Delhi NCR flagships.",
  alternates: {
    canonical: 'https://www.ammyscoffee.com/menu',
  },
  openGraph: {
    title: "The Menu Catalog | Ammy's Coffee",
    description:
      "Handcrafted 100% Arabica coffees, iced brews, artisan toasties, pastas, and desserts across Delhi NCR.",
    url: 'https://www.ammyscoffee.com/menu',
    siteName: "Ammy's Coffee",
    images: [
      {
        url: '/assets/photos/cafe_interior_1.webp',
        width: 1120,
        height: 1400,
        alt: "Ammy's Coffee Menu & Ambience",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Menu Catalog | Ammy's Coffee",
    description:
      "Handcrafted 100% Arabica coffees, iced brews, artisan toasties, pastas, and desserts across Delhi NCR.",
    images: ['/assets/photos/cafe_interior_1.webp'],
  },
};

export default function MenuPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-cream text-espresso selection:bg-caramel-ink/20 selection:text-espresso focus:outline-none"
    >
      <span id="top" className="sr-only" />
      <Navbar />

      {/* Top Spacer for Masthead Navigation */}
      <div className="h-20 sm:h-24 lg:h-28 bg-espresso" />

      {/* The Full Editorial Menu Catalog */}
      <MenuSection />

      <Footer />
    </main>
  );
}
