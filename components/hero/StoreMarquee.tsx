'use client';

export default function StoreMarquee() {
  const outlets = [
    'GREATER KAILASH I (M-BLOCK)',
    'GALLERIA MARKET (GURUGRAM)',
    'SDA MARKET (SOUTH DELHI)',
    'PUNJABI BAGH (CLUB ROAD)',
    'GUJRANWALA TOWN',
    '100% ARABICA SPECIALTY',
    'FIVE DELHI NCR FLAGSHIPS',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#641D26] border-y border-[#C8B273]/20 py-4 sm:py-4.5 select-none z-20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      {/* Infinite Scrolling Track */}
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Set 1 */}
        <div className="flex items-center space-x-8 sm:space-x-12 pr-8 sm:pr-12">
          {outlets.map((item, index) => (
            <div key={`set1-${index}`} className="flex items-center space-x-8 sm:space-x-12">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.32em] font-medium text-[#C8B273]">
                {item}
              </span>
              <span className="text-[#C8B273]/50 text-xs sm:text-sm font-light">✦</span>
            </div>
          ))}
        </div>

        {/* Set 2 (Identical Clone for Seamless Infinite Loop) */}
        <div className="flex items-center space-x-8 sm:space-x-12 pr-8 sm:pr-12" aria-hidden="true">
          {outlets.map((item, index) => (
            <div key={`set2-${index}`} className="flex items-center space-x-8 sm:space-x-12">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.32em] font-medium text-[#C8B273]">
                {item}
              </span>
              <span className="text-[#C8B273]/50 text-xs sm:text-sm font-light">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
