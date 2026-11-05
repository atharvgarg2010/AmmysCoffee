export default function StoreMarquee() {
  const items = [
    'GREATER KAILASH I (M-BLOCK)',
    'GALLERIA MARKET (GURUGRAM)',
    'SDA MARKET (SOUTH DELHI)',
    'PUNJABI BAGH (CLUB ROAD)',
    'GUJRANWALA TOWN',
    'TWO BEANS = ONE BOND',
  ];

  return (
    <div
      role="region"
      aria-label="Our flagship café locations"
      className="relative w-full overflow-hidden bg-[#18191A] border-y border-[#C88A58]/25 py-4 sm:py-5 select-none z-20 shrink-0"
    >
      {/* Infinite Scrolling Track */}
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Set 1 */}
        <div className="flex items-center space-x-8 sm:space-x-14 pr-8 sm:pr-14">
          {items.map((item, index) => (
            <div key={`set1-${index}`} className="flex items-center space-x-8 sm:space-x-14">
              <span className="text-[10.5px] sm:text-xs uppercase tracking-[0.34em] sm:tracking-[0.38em] font-medium text-[#E8B88E]">
                {item}
              </span>
              <span className="text-[#C88A58]/75 text-[8px] sm:text-[9px]" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </div>

        {/* Set 2 (Cloned for Seamless Infinite Loop) */}
        <div className="flex items-center space-x-8 sm:space-x-14 pr-8 sm:pr-14" aria-hidden="true">
          {items.map((item, index) => (
            <div key={`set2-${index}`} className="flex items-center space-x-8 sm:space-x-14">
              <span className="text-[10.5px] sm:text-xs uppercase tracking-[0.34em] sm:tracking-[0.38em] font-medium text-[#E8B88E]">
                {item}
              </span>
              <span className="text-[#C88A58]/75 text-[8px] sm:text-[9px]" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
