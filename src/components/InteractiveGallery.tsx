import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

const categories = [
  { id: 1, name: "E-Commerce", img: "https://picsum.photos/seed/ecommerce/800/600" },
  { id: 2, name: "Fintech", img: "https://picsum.photos/seed/fintech/800/600" },
  { id: 3, name: "Web3 & Crypto", img: "https://picsum.photos/seed/web3/800/600" },
  { id: 4, name: "Architecture", img: "https://picsum.photos/seed/arch/800/600" }
];

function SlicedImage({ src }: { src: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, 50]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const y4 = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full flex">
      {[y1, y2, y3, y4].map((y, i) => (
        <div key={i} className="relative w-1/4 h-full overflow-hidden">
          <motion.div 
            style={{ y, left: `-${i * 100}%` }} 
            className="absolute top-[-20%] w-[400%] h-[140%]"
          >
            <img 
              src={src} 
              alt="Gallery" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export function InteractiveGallery() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section className="py-32 bg-[#050503] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 z-10">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              onMouseEnter={() => setActive(cat)}
              className={`text-4xl md:text-6xl font-serif cursor-pointer transition-all duration-500 ${active.id === cat.id ? 'text-white italic translate-x-4' : 'text-white/30 hover:text-white/60'}`}
            >
              {cat.name}
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 h-[60vh] relative rounded-[40px] overflow-hidden bg-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <SlicedImage src={active.img} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
