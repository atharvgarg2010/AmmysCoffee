import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FranchiseHero from '@/components/franchise/FranchiseHero';
import FranchisePillars from '@/components/franchise/FranchisePillars';
import FranchiseSupport from '@/components/franchise/FranchiseSupport';
import FranchiseFormats from '@/components/franchise/FranchiseFormats';
import FranchiseSection from '@/components/franchise/FranchiseSection';

export const metadata: Metadata = {
  title: "Franchise Partnerships | Ammy's Coffee — Pan-India Expansion",
  description:
    "Partner with Ammy's Coffee: upscale sit-down specialty coffee and artisanal kitchen franchise expanding across prime retail corridors in Delhi NCR and Tier-1 Indian metros.",
};

export default function FranchisePage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-espresso text-cream selection:bg-caramel/30"
    >
      <Navbar />

      {/* Top Spacer for Fixed Masthead */}
      <div className="h-20 sm:h-24 lg:h-28 bg-espresso" />

      {/* 1. Franchise Hero & Commercial Highlights */}
      <FranchiseHero />

      {/* 2. Why Partner With Ammy's (4 Core Growth Pillars Bento Grid) */}
      <FranchisePillars />

      {/* 3. 360° Turnkey Partner Support Roadmap */}
      <FranchiseSupport />

      {/* 4. Store Formats & Footprints (High-Street vs Galleria) */}
      <FranchiseFormats />

      {/* 5. Confidential Lead Application Form */}
      <FranchiseSection />

      <Footer />
    </main>
  );
}
