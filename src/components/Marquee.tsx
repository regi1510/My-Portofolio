import { motion } from 'motion/react';

export function Marquee() {
  const text = "ANTI-GRAVITY UI • GEMINI AI • DIGITAL ARCHITECTURE • FLUID MOTION • ";
  
  return (
    <div className="flex overflow-hidden whitespace-nowrap py-8 bg-gradient-to-r from-purple-900/10 via-orange-900/10 to-purple-900/10 border-y border-white/5">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
        className="flex gap-8 text-4xl md:text-6xl font-serif italic text-white/30"
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
}
