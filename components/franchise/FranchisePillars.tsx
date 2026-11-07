import { Coffee, UtensilsCrossed, Sparkles, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'Dual-Engine Revenue',
    subtitle: 'High Ticket Size: Specialty Coffee + Kitchen',
    description:
      'Unlike street-side grab-and-go kiosks restricted to beverage margins, Ammy’s is a sit-down lifestyle café. Handcrafted specialty coffees paired with our kitchen catalog (artisan toasties, croissants, waffles, and tiramisu) significantly increase Average Order Value (AOV).',
    badge: 'Higher Average Order Value',
    features: ['Specialty Coffee Margins', 'Hot Kitchen & Bakery Add-ons', 'All-Day Dining Appeal'],
    icon: UtensilsCrossed,
  },
  {
    num: '02',
    title: '100% Arabica Roasting',
    subtitle: 'Cult Repeat Rituals & Signature Brews',
    description:
      'We roast 100% specialty-grade Arabica sourced from top Indian estates. Signature favorites like our Spanish Latte, Caramel Frappé, and signature Cold Brews convert first-time guests into 4x/week habitual brand loyalists.',
    badge: 'Fierce Daily Habit Retention',
    features: ['Proprietary Roasting Profiles', 'Signature Flavor Profiles', 'Year-Round Demand'],
    icon: Coffee,
  },
  {
    num: '03',
    title: 'All-Day Dwell Time',
    subtitle: 'The "Chill Spot" Architectural Magnet',
    description:
      'Ammy’s rooms are intentionally curated: soft amber lighting, acoustic relief walls, plush seating, and warm hospitality. Guests use our cafés for morning laptop sessions, afternoon meetings, and late-night catch-ups, keeping tables occupied from 08:00 AM to 11:30 PM.',
    badge: 'Morning-to-Midnight Seat Occupancy',
    features: ['High Organic Social Sharing', 'Repeat Community Dwell', 'Multi-Hour Table Turns'],
    icon: Sparkles,
  },
  {
    num: '04',
    title: 'Turnkey Central Sourcing',
    subtitle: 'Standardized SOPs & Zero Operator Guesswork',
    description:
      'Franchise partners receive central roasted bean supply, pre-negotiated vendor pricing for premium dairy and packaging, standardized recipe binders, and centralized POS software to track inventory, COGS, and labor efficiency seamlessly.',
    badge: 'Predictable Operational Economics',
    features: ['Pre-Negotiated Bulk Sourcing', 'Standardized Recipe Cards', 'Real-Time Inventory Cloud'],
    icon: SlidersHorizontal,
  },
];

export default function FranchisePillars() {
  return (
    <section id="pillars" className="relative scroll-mt-24 bg-espresso py-16 sm:py-20 lg:py-28 border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="block text-[11px] font-medium uppercase tracking-[0.3em] text-caramel sm:text-xs">
            Why Franchise With Ammy&apos;s
          </span>
          <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.03em] text-cream">
            Built for enduring profitability, <br />
            <span className="font-light italic text-caramel-light">
              not fleeting café trends.
            </span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-cream/70 sm:text-base">
            We engineered the Ammy&apos;s model around four competitive advantages that solve the primary operational headaches of traditional F&B franchising.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group relative flex flex-col justify-between rounded-3xl border border-cream/10 bg-espresso-surface p-8 sm:p-10 transition-all duration-300 hover:border-caramel/40 hover:bg-cream/[0.02] hover:shadow-xl hover:shadow-black/30"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-[0.24em] text-caramel">
                      {pillar.num}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cream/10 bg-espresso text-caramel transition-colors group-hover:border-caramel/40 group-hover:bg-caramel/10">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-6">
                    <span className="inline-block rounded-md border border-caramel/25 bg-caramel/[0.08] px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] font-medium text-caramel">
                      {pillar.badge}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl sm:text-[1.8rem] font-normal tracking-[-0.01em] text-cream">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-caramel-light/80">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Body Copy */}
                  <p className="mt-4 text-sm leading-relaxed text-cream/70 font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Checklist Footer */}
                <div className="mt-8 border-t border-cream/[0.08] pt-6">
                  <div className="flex flex-wrap gap-y-2 gap-x-4">
                    {pillar.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-1.5 text-xs text-cream/65">
                        <CheckCircle2 className="h-3.5 w-3.5 text-caramel shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
