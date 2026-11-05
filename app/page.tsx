import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import StorySection from '@/components/story/StorySection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#121313] text-[#F5F5F7] selection:bg-[#C88A58]/30">
      {/* Sticky Atmospheric Navbar */}
      <Navbar />

      {/* Hero Section with Ambient 4K Video Background & Dynamic Transitions */}
      <HeroSection />

      {/* Section 2: Brand Ethos, Story & Craft Pillars (Warm Cream Canvas) */}
      <StorySection />

      {/* Temporary section anchor placeholders for upcoming sections */}
      <div id="menu" className="py-8" />
      <div id="gallery" className="py-4" />
      <div id="cafes" className="py-4" />
      <div id="franchise" className="py-8" />
    </main>
  );
}
