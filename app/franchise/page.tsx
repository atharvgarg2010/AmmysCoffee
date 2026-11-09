import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FranchiseHero from '@/components/franchise/FranchiseHero';
import FranchisePillars from '@/components/franchise/FranchisePillars';
import FranchiseSupport from '@/components/franchise/FranchiseSupport';
import FranchiseFormats from '@/components/franchise/FranchiseFormats';
import FranchiseSection from '@/components/franchise/FranchiseSection';

export const metadata: Metadata = {
  title: "Franchise Inquiries | Ammy's Coffee — Partner Program",
  description:
    "Explore franchise partnership opportunities with Ammy's Coffee: specialty 100% Arabica coffee craft and artisanal kitchen café formats across select locations.",
  alternates: {
    canonical: 'https://www.ammyscoffee.com/franchise',
  },
  openGraph: {
    title: "Franchise Partnerships | Ammy's Coffee",
    description:
      "Partner with Ammy's Coffee: sit-down 100% Arabica craft coffee and artisanal kitchen café concepts.",
    url: 'https://www.ammyscoffee.com/franchise',
    siteName: "Ammy's Coffee",
    images: [
      {
        url: '/assets/photos/cafe_barista.webp',
        width: 1120,
        height: 1400,
        alt: "Ammy's Coffee Barista & Franchise Concept",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Franchise Partnerships | Ammy's Coffee",
    description:
      "Partner with Ammy's Coffee: sit-down 100% Arabica craft coffee and artisanal kitchen café concepts.",
    images: ['/assets/photos/cafe_barista.webp'],
  },
};

export default function FranchisePage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-espresso text-cream selection:bg-caramel/30 focus:outline-none"
    >
      <span id="top" className="sr-only" />
      <Navbar />

      {/* Top Spacer for Fixed Masthead */}
      <div className="h-20 sm:h-24 lg:h-28 bg-espresso" />

      {/* 1. Franchise Hero & Commercial Highlights */}
      <FranchiseHero />

      {/* 2. Concept Proof & Operational Pillars (Cream Section) */}
      <FranchisePillars />

      {/* 3. Proposed Partner Support Roadmap */}
      <FranchiseSupport />

      {/* 4. Store Formats & Footprints */}
      <FranchiseFormats />

      {/* 5. Concept Lead Application Form */}
      <FranchiseSection />

      <Footer />
    </main>
  );
}
