import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#121313] text-[#F5F5F7] selection:bg-[#C88A58]/30">
      {/* Sticky Atmospheric Navbar */}
      <Navbar />

      {/* Hero Section with Ambient 4K Video Background & Dynamic Transitions */}
      <HeroSection />

      {/* Temporary section anchor placeholders for smooth navigation links */}
      <div id="story" className="py-12" />
      <div id="craft" className="py-4" />
      <div id="menu" className="py-4" />
      <div id="gallery" className="py-4" />
      <div id="cafes" className="py-4" />
      <div id="franchise" className="py-12" />
    </main>
  );
}

