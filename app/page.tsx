import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/hero/HeroSection';
import StorySection from '@/components/story/StorySection';
import CafesSection from '@/components/cafes/CafesSection';
import VisitBanner from '@/components/home/VisitBanner';

export default function HomePage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-espresso text-cream selection:bg-caramel/30 focus:outline-none"
    >
      <span id="top" className="sr-only" />
      <Navbar />
      <HeroSection />
      <StorySection />
      <CafesSection />
      <VisitBanner />
      <Footer />
    </main>
  );
}
