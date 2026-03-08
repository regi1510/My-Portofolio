import { motion } from 'motion/react';
import { Magnetic } from './Magnetic';

export function Footer() {
  return (
    <footer className="py-32 bg-[#0a080c] text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12vw] font-serif italic mb-10 text-outline transition-all duration-500 leading-none"
        >
          Let's talk.
        </motion.h2>
        
        <Magnetic>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="px-10 py-5 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors text-lg"
          >
            hello@designportfolio.com
          </motion.button>
        </Magnetic>

        <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4 border-t border-white/10 pt-8">
          <p>© 2026 Design Portfolio. All rights reserved.</p>
          <div className="flex gap-8">
            <Magnetic><a href="#" className="hover:text-white transition-colors">Twitter</a></Magnetic>
            <Magnetic><a href="#" className="hover:text-white transition-colors">LinkedIn</a></Magnetic>
            <Magnetic><a href="#" className="hover:text-white transition-colors">Dribbble</a></Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
}
