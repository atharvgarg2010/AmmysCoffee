import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MenuSection from '@/components/menu/MenuSection';

export const metadata: Metadata = {
  title: "The Menu Catalog | Ammy's Coffee — 100% Arabica & Artisanal Kitchen",
  description:
    "Explore the complete Ammy's Coffee menu: handcrafted specialty espresso, signature Spanish lattes, cold brews, artisanal viennoiserie, and desserts across 5 Delhi NCR flagships.",
};

export default function MenuPage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-cream text-espresso selection:bg-caramel-ink/20 selection:text-espresso"
    >
      <Navbar />

      {/* Top Spacer for Masthead Navigation */}
      <div className="h-20 sm:h-24 lg:h-28 bg-espresso" />

      {/* The Full Editorial Menu Catalog */}
      <MenuSection />

      <Footer />
    </main>
  );
}
