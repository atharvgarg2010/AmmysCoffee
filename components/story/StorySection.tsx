import Image from 'next/image';

export default function StorySection() {
  const photos = [
    {
      src: '/assets/photos/cafe_interior_1.webp',
      alt: "Ammy's Flagship Interior in Greater Kailash I",
      tag: 'Greater Kailash I • The Sanctuary',
      colSpan: 'md:col-span-7',
      tagColor: 'text-white/80',
    },
    {
      src: '/assets/photos/cafe_barista.webp',
      alt: "Handcrafted 100% Arabica Espresso Pull",
      tag: '100% Single-Origin Arabica Craft',
      colSpan: 'md:col-span-5',
      tagColor: 'text-[#E8B88E]',
    },
    {
      src: '/assets/photos/cafe_interior_2.webp',
      alt: "Cozy Velvet Booths and Art Walls",
      tag: 'Aesthetic Corners & Velvet Booths',
      colSpan: 'md:col-span-5',
      tagColor: 'text-[#C88A58]',
    },
    {
      src: '/assets/photos/cafe_ambience.webp',
      alt: "Warm Amber Café Ambience",
      tag: 'Amber Glow & Community Space',
      colSpan: 'md:col-span-7',
      tagColor: 'text-white/80',
    },
  ];

  return (
    <section id="story" className="relative w-full bg-[#121313] text-[#FAF8F5] py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Subtle Ambient Atmosphere */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#C88A58]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-medium text-[#C88A58] block mb-3 font-sans">
            The Ammy&apos;s Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#FAF8F5] leading-[1.08] tracking-[-0.03em] mb-5">
            Come for the coffee. <br />
            <span className="italic font-light text-[#E8B88E]">Stay for the connection.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-2xl">
            Step into Ammy&apos;s and enter your second home — where the lighting&apos;s soft, the art&apos;s bold, and the booths practically beg you to stay longer. From that first pour of 100% Arabica to the last bite of our warm San Sebastian, everything here is made to feel like a warm hug in a cup.
          </p>
        </div>

        {/* Editorial Photographic Bento Grid */}
        <div id="craft" className="scroll-mt-32 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`${photo.colSpan} relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#18191A] group shadow-xl`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle Vignette Gradient for Tag Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
              
              {/* Floating Caption Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 pointer-events-none">
                <span className={`text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-medium ${photo.tagColor}`}>
                  {photo.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
