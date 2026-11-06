import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/hero/HeroSection';
import StorySection from '@/components/story/StorySection';
import CafesSection from '@/components/cafes/CafesSection';
import FranchiseSection from '@/components/franchise/FranchiseSection';

export default function HomePage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-espresso text-cream selection:bg-caramel/30"
    >
      <Navbar />
      <HeroSection />
      <StorySection />
      <CafesSection />
      <FranchiseSection />
      <Footer />
    </main>
  );
}
