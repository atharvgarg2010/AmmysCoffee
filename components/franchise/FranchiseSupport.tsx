import { MapPin, Compass, GraduationCap, Megaphone, ArrowUpRight } from 'lucide-react';

const steps = [
  {
    step: 'Phase 01',
    title: 'Site Selection & Catchment Audit',
    desc: 'Our real-estate team evaluates target micro-markets, footfall density, neighboring anchor brands, and lease terms to secure prime retail territory.',
    icon: MapPin,
  },
  {
    step: 'Phase 02',
    title: 'Turnkey Architectural Build',
    desc: 'Full 3D layout blueprints, espresso bar ergonomics, bespoke warm lighting schemes, and direct equipment vendor procurement at enterprise rates.',
    icon: Compass,
  },
  {
    step: 'Phase 03',
    title: 'Barista & Kitchen Academy',
    desc: 'Intensive barista immersion covering espresso extraction parameters, latte art, food prep SOPs, kitchen hygiene, and our signature hospitality ethos.',
    icon: GraduationCap,
  },
  {
    step: 'Phase 04',
    title: 'Launch Blitz & Local Marketing',
    desc: 'High-impact localized PR, food creator activations, targeted digital campaigns, and instant onboarding to Ammy’s customer rewards program.',
    icon: Megaphone,
  },
];

export default function FranchiseSupport() {
  return (
    <section className="relative bg-espresso py-16 sm:py-20 lg:py-28 border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="block text-[11px] font-medium uppercase tracking-[0.3em] text-caramel sm:text-xs">
              360° Turnkey Partner Ecosystem
            </span>
            <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.03em] text-cream">
              You run the café. <br />
              <span className="font-light italic text-caramel-light">
                We back the machine.
              </span>
            </h2>
          </div>
          <p className="max-w-[42ch] text-sm leading-relaxed text-cream/70 lg:pb-2">
            From preliminary lease negotiation to your 50,000th espresso pour, every operational touchpoint is supported by our central management team.
          </p>
        </div>

        {/* 4 Steps Roadmap */}
        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative flex flex-col justify-between rounded-2xl border border-cream/10 bg-espresso-surface p-7 sm:p-8 transition-all duration-300 hover:border-caramel/40 hover:bg-cream/[0.02]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-caramel font-semibold">
                      {item.step}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cream/10 bg-espresso text-caramel">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-normal tracking-[-0.01em] text-cream sm:text-[1.35rem]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-cream/65 font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-cream/[0.06] pt-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cream/40">
                    Step {idx + 1} of 4
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
