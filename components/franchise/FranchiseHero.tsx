import { ArrowRight, ArrowDown, Award, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';

const stats = [
  { label: 'Brand Footprint', value: 'Delhi NCR', detail: 'Proven flagship presence' },
  { label: 'Coffee Quality', value: '100% Arabica', detail: 'Single origin & specialty blends' },
  { label: 'Revenue Model', value: 'Dual Engine', detail: 'Beverage craft + artisanal kitchen' },
  { label: 'Partner Program', value: 'Turnkey 360°', detail: 'Site, build, training & supply' },
];

export default function FranchiseHero() {
  return (
    <section className="relative overflow-hidden bg-espresso pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-20 top-10 h-[450px] w-[450px] rounded-full bg-caramel/[0.06] blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-[500px] w-[500px] rounded-full bg-caramel/[0.04] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Breadcrumb / Kicker */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-caramel/30 bg-espresso-surface/80 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-caramel backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-caramel animate-pulse" />
          <span>Pan-India Expansion · Partner Program</span>
        </div>

        {/* Monumental Headline */}
        <div className="mt-8 max-w-4xl">
          <h1 className="font-serif text-[clamp(2.8rem,6.5vw,5.5rem)] font-normal leading-[1] tracking-[-0.03em] text-cream">
            Specialty coffee is booming. <br />
            <span className="font-light italic text-caramel-light">
              Build a flagship that lasts.
            </span>
          </h1>

          <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-cream/75 sm:text-lg">
            India&apos;s coffee culture is shifting from grab-and-go street kiosks to upscale, sit-down lifestyle destinations. Ammy&apos;s Coffee unites 100% specialty Arabica roasting, an artisanal kitchen, and high customer dwell time into an enduring, profitable café asset.
          </p>

          {/* Quick Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#inquiry"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-caramel px-8 text-xs font-semibold uppercase tracking-[0.22em] text-espresso transition-all duration-300 hover:bg-caramel-light hover:shadow-lg hover:shadow-caramel/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
            >
              <span>Apply for Franchise</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <a
              href="#pillars"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cream/20 bg-cream/[0.03] px-7 text-xs font-medium uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:border-caramel hover:text-caramel hover:bg-cream/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
            >
              <span>Why Partner With Us</span>
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Key Metrics / Highlights Bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-cream/10 pt-10 sm:grid-cols-4 sm:gap-6 sm:pt-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-cream/10 bg-espresso-surface/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-caramel/30 hover:bg-cream/[0.02]"
            >
              <span className="block text-[10px] uppercase tracking-[0.24em] text-caramel">
                {stat.label}
              </span>
              <span className="mt-2 block font-serif text-2xl font-normal tracking-[-0.01em] text-cream sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-xs text-cream/55 font-light">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
