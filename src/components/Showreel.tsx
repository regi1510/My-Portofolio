import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play } from 'lucide-react';

export function Showreel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const width = useTransform(scrollYProgress, [0, 1], ["30%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["50vh", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["200px", "0px"]);

  return (
    <section ref={containerRef} className="h-[200vh] relative bg-[#050503]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ width, height, borderRadius }}
          className="relative overflow-hidden group cursor-pointer border border-white/10"
        >
          <img 
            src="https://picsum.photos/seed/showreel/1920/1080" 
            alt="Showreel Cover" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-500">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:scale-110">
              <Play className="w-8 h-8 ml-1" />
            </div>
          </div>
          
          <div className="absolute bottom-10 left-10">
            <div className="text-white text-sm tracking-widest uppercase font-medium mb-2">2026 Showreel</div>
            <div className="text-gray-400 text-xs">Watch the magic happen (1:45)</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
