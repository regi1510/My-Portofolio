import { motion } from 'motion/react';
import { Volume2 } from 'lucide-react';
import { Magnetic } from './Magnetic';

export function Navigation() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white"
    >
      <Magnetic>
        <a href="/" className="text-xl font-bold tracking-tighter uppercase cursor-pointer hover:text-[#89AACC] transition-colors">
          PRYDELAB
        </a>
      </Magnetic>
      
      <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase">
        <Magnetic><a href="#" className="hover:text-[#89AACC] transition-colors block p-2">Portfolio</a></Magnetic>
        <Magnetic><a href="#" className="hover:text-[#89AACC] transition-colors block p-2">Structures</a></Magnetic>
        <Magnetic><a href="#" className="hover:text-[#89AACC] transition-colors block p-2">About Us</a></Magnetic>
        <Magnetic>
          <a href="#" className="px-5 py-2 rounded-full border border-white/30 hover:bg-white hover:text-black transition-colors block font-bold">Contact</a>
        </Magnetic>
        
        <div className="w-[1px] h-4 bg-white/30 mx-2" />
        
        <Magnetic>
          <button className="flex items-center gap-2 hover:text-[#89AACC] transition-colors p-2 font-bold">
            <Volume2 className="w-4 h-4" />
            <span>Sound On</span>
          </button>
        </Magnetic>
      </nav>
    </motion.header>
  );
}
