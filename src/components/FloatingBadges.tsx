import { motion } from 'motion/react';

export function FloatingBadges() {
  return (
    <aside className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Top Right AI Badge */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 right-8 md:right-16 w-24 h-24 opacity-60 mix-blend-screen hidden md:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path id="badgePath1" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
          <text className="text-[10.5px] uppercase tracking-[0.2em] fill-gray-200 font-sans font-bold">
            <textPath href="#badgePath1">NEURAL MASTERY • AI SYNTHESIS •</textPath>
          </text>
        </svg>
      </motion.div>

      {/* Bottom Left Organic Badge */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-8 md:left-16 w-32 h-32 opacity-50 mix-blend-screen hidden md:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path id="badgePath2" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
          <text className="text-[9px] uppercase tracking-[0.25em] fill-[#89AACC] font-display italic font-bold">
            <textPath href="#badgePath2">ANTIQUITY LAYOUT • RAW STATUS •</textPath>
          </text>
        </svg>
      </motion.div>
    </aside>
  );
}
