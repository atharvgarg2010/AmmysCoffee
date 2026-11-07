import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FranchiseSection from '@/components/franchise/FranchiseSection';

export const metadata: Metadata = {
  title: "Franchise Partnerships | Ammy's Coffee — B2B Acquisition",
  description:
    "Partner with Ammy's Coffee: high-ticket specialty coffee lifestyle brand expanding across prime retail corridors in Delhi NCR and Tier-1 Indian metros.",
};

export default function FranchisePage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-espresso text-cream selection:bg-caramel/30"
    >
      <Navbar />

      {/* Top Spacer for Masthead Navigation */}
      <div className="h-20 sm:h-24 lg:h-28 bg-espresso" />

      {/* Dedicated Franchise Acquisition Platform */}
      <FranchiseSection />

      <Footer />
    </main>
  );
}
