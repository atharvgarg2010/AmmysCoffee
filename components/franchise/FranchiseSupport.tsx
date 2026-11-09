import { MapPin, Compass, GraduationCap, Megaphone } from 'lucide-react';

const steps = [
  {
    phase: 'Phase 01',
    title: 'Site & Feasibility Review',
    desc: 'Preliminary evaluation of location catchment, neighborhood footfall patterns, and space layout suitability.',
    icon: MapPin,
  },
  {
    phase: 'Phase 02',
    title: 'Space Design & Layout',
    desc: 'Advisory on espresso bar ergonomics, seating circulation, warm lighting schemes, and equipment recommendations.',
    icon: Compass,
  },
  {
    phase: 'Phase 03',
    title: 'Barista & Recipe Training',
    desc: 'Comprehensive staff onboarding on 100% Arabica espresso extraction, signature beverages, and kitchen preparation standards.',
    icon: GraduationCap,
  },
  {
    phase: 'Phase 04',
    title: 'Launch Onboarding',
    desc: 'Opening checklist guidance, initial supply setup, and ongoing operational communication with our management team.',
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
              Proposed Framework · Subject to Final Agreement
            </span>
            <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.03em] text-cream">
              You run the café. <br />
              <span className="font-light italic text-caramel-light">
                We support the craft.
              </span>
            </h2>
          </div>
          <p className="max-w-[44ch] text-sm leading-relaxed text-cream/70 lg:pb-2">
            A proposed collaborative roadmap designed to guide prospective partners through site review, setup, barista training, and daily operational standards.
          </p>
        </div>

        {/* 4 Steps Roadmap */}
        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.phase}
                className="relative flex flex-col justify-between rounded-2xl border border-cream/10 bg-espresso-surface p-7 sm:p-8 transition-colors hover:border-caramel/40 hover:bg-cream/[0.02]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-caramel font-semibold">
                      {item.phase}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cream/10 bg-espresso text-caramel">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-normal tracking-[-0.01em] text-cream sm:text-[1.35rem]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-cream/65 font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-cream/[0.08] pt-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cream/60">
                    Proposed Roadmap
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
