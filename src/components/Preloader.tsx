import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return p + Math.floor(Math.random() * 15) + 1;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050503] flex flex-col items-center justify-center text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#050503] to-[#050503] opacity-50" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-[15vw] md:text-[10vw] font-serif italic font-light tracking-tighter leading-none mb-4">
              {Math.min(progress, 100)}%
            </div>
            
            <div className="w-64 h-[2px] bg-white/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-orange-500"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            <div className="mt-8 text-[10px] uppercase tracking-[0.3em] text-gray-500 animate-pulse">
              Loading Experience
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
