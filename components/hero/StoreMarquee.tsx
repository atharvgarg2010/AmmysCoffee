'use client';

export default function StoreMarquee() {
  const items = [
    'GREATER KAILASH I (M-BLOCK)',
    'GALLERIA MARKET (GURUGRAM)',
    'SDA MARKET (SOUTH DELHI)',
    'PUNJABI BAGH (CLUB ROAD)',
    'GUJRANWALA TOWN',
    '100% ARABICA SPECIALTY',
    'ARTISANAL BAKERY & DESSERTS',
    'TWO BEANS = ONE BOND',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#18191A] border-y border-[#C88A58]/25 py-3.5 sm:py-4 select-none z-20">
      {/* Infinite Scrolling Track */}
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Set 1 */}
        <div className="flex items-center space-x-7 sm:space-x-12 pr-7 sm:pr-12">
          {items.map((item, index) => (
            <div key={`set1-${index}`} className="flex items-center space-x-7 sm:space-x-12">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-medium text-[#E8B88E]">
                {item}
              </span>
              <span className="text-[#C88A58] text-[11px] font-normal">✦</span>
            </div>
          ))}
        </div>

        {/* Set 2 (Cloned for Seamless Infinite Loop) */}
        <div className="flex items-center space-x-7 sm:space-x-12 pr-7 sm:pr-12" aria-hidden="true">
          {items.map((item, index) => (
            <div key={`set2-${index}`} className="flex items-center space-x-7 sm:space-x-12">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-medium text-[#E8B88E]">
                {item}
              </span>
              <span className="text-[#C88A58] text-[11px] font-normal">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
