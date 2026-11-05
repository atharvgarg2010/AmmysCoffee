'use client';

import { motion } from 'framer-motion';

export default function CraftSeal() {
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center select-none group">
      {/* Rotating Circular Text Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
        className="absolute inset-0 w-full h-full"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <path
            id="textPath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[7.2px] uppercase tracking-[0.24em] fill-[#E8B88E]/80 font-mono">
            <textPath href="#textPath" startOffset="0%">
              ✦ FROM BEANS TO BONDS ✦ 100% ARABICA CRAFT ✦
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Center Emblem: Dual Bean Wings in Warm Bronze */}
      <div className="w-12 h-12 rounded-full bg-[#1A1B1C] border border-[#C88A58]/40 flex items-center justify-center shadow-lg shadow-[#C88A58]/20 group-hover:scale-110 group-hover:border-[#C88A58] transition-all duration-300">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C88A58"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
        >
          <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.5 4.5 8.3.5.3 1.1 0 1.1-.6v-2.2c0-.4.2-.8.6-.9 2.5-.9 4.3-3.2 4.3-6 0-3.6-2.9-6.6-6.5-6.6" />
          <path d="M12 2c5.5 0 10 4.5 10 10 0 3.5-1.8 6.5-4.5 8.3-.5.3-1.1 0-1.1-.6v-2.2c0-.4-.2-.8-.6-.9-2.5-.9-4.3-3.2-4.3-6 0-3.6 2.9-6.6 6.5-6.6" />
        </svg>
      </div>
    </div>
  );
}

