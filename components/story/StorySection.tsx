import Image from 'next/image';
import Link from 'next/link';

const photos = [
  {
    src: '/assets/photos/cafe_interior_1.webp',
    alt: "Ammy's café interior, Delhi NCR",
    span: 7,
    caption: '01 — The Room',
  },
  {
    src: '/assets/photos/cafe_barista.webp',
    alt: "Barista at work at Ammy's Coffee",
    span: 5,
    caption: '02 — The Pull',
  },
  {
    src: '/assets/photos/cafe_interior_2.webp',
    alt: "Ammy's café interior seating",
    span: 5,
    caption: '03 — The Booth',
  },
  {
    src: '/assets/photos/cafe_ambience.webp',
    alt: 'Warm amber café ambience',
    span: 7,
    caption: '04 — The Light',
  },
] as const;

export default function StorySection() {
  return (
    <section
      id="story"
      className="relative w-full scroll-mt-24 overflow-hidden bg-espresso py-20 text-cream sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-caramel/[0.04] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="mb-12 grid grid-cols-1 gap-8 sm:mb-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <span className="mb-3 block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-caramel sm:text-xs">
              The Ammy&apos;s Philosophy
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,5rem)] font-normal leading-[1.05] tracking-[-0.03em] text-cream">
              Come for the coffee. <br />
              <span className="font-light italic text-caramel-light">
                Stay for the connection.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-14">
            <p className="max-w-[58ch] text-base font-normal leading-7 text-cream/70">
              Step into Ammy&apos;s and enter your second home — a place where
              community thrives and stories unfold. From that first pour of 100%
              Arabica to the last bite of our Tiramisu, everything here is made
              to feel like a warm hug in a cup.
            </p>
          </div>
        </div>

        <div
          id="craft"
          className="grid scroll-mt-32 grid-cols-12 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-10"
        >
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className={photo.span === 7 ? 'col-span-7' : 'col-span-5'}
            >
              <div className="relative h-[220px] overflow-hidden bg-espresso-surface sm:h-[340px] md:h-[420px] lg:h-[560px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    photo.span === 7
                      ? '(max-width: 767px) 58vw, (max-width: 1279px) 58vw, 681px'
                      : '(max-width: 767px) 42vw, (max-width: 1279px) 40vw, 479px'
                  }
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 text-[9px] uppercase tracking-[0.2em] text-cream/60 sm:mt-3 sm:text-[10px] sm:tracking-[0.24em]">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-end sm:mt-16">
          <Link
            href="#menu"
            className="inline-flex items-center gap-3 border-b border-cream/30 pb-2 text-[11px] uppercase tracking-[0.24em] text-cream transition-colors hover:border-caramel hover:text-caramel focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
          >
            Explore the Menu
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
