import { ArrowRight, ArrowDown } from 'lucide-react';

const stats = [
  { term: '5 Outlets', definition: 'Proven Delhi NCR presence' },
  { term: '100% Arabica', definition: 'House coffee standard' },
  { term: 'Artisanal Kitchen', definition: 'Pastas, toasties & croissants' },
  { term: 'Delhi NCR', definition: 'Five established neighborhoods' },
];

export default function FranchiseHero() {
  return (
    <section className="relative overflow-hidden bg-espresso pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-20 top-10 h-[450px] w-[450px] rounded-full bg-caramel/[0.05] blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-[500px] w-[500px] rounded-full bg-caramel/[0.03] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Kicker Tag */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-caramel/30 bg-espresso-surface px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-caramel">
          <span>Franchise Inquiry · Proposed Partner Program</span>
        </div>

        {/* Hero Headline */}
        <div className="mt-8 max-w-4xl">
          <h1 className="font-serif text-[clamp(2.8rem,6.5vw,5.5rem)] font-normal leading-[1] tracking-[-0.03em] text-cream">
            Five Delhi NCR cafés. <br />
            <span className="font-light italic text-caramel-light">
              One 100% Arabica standard.
            </span>
          </h1>

          <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-cream/75 sm:text-lg">
            Ammy&apos;s Coffee unites handcrafted 100% Arabica coffee, an artisanal kitchen, and warm ambient rooms into an inviting neighborhood destination. We are exploring franchise partnerships with aligned operators in select locations.
          </p>

          {/* Quick Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#inquiry"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-caramel px-8 text-xs font-semibold uppercase tracking-[0.22em] text-espresso transition-colors hover:bg-caramel-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
            >
              <span>Submit Concept Inquiry</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <a
              href="#pillars"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cream/20 bg-cream/[0.03] px-7 text-xs font-medium uppercase tracking-[0.22em] text-cream transition-colors hover:border-caramel hover:text-caramel hover:bg-cream/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
            >
              <span>Review Concept Pillars</span>
              <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Hairline Definition List (Clean Editorial Style, No Rounded Cards) */}
        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-cream/15 pt-10 sm:grid-cols-4 sm:pt-12">
          {stats.map((stat) => (
            <div key={stat.term} className="border-l border-cream/15 pl-5 sm:pl-6">
              <dt className="font-serif text-2xl font-normal tracking-[-0.01em] text-cream sm:text-3xl">
                {stat.term}
              </dt>
              <dd className="mt-1.5 text-xs text-cream/65 font-light leading-relaxed">
                {stat.definition}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
