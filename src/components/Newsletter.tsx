import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-32 bg-[#0a080c] text-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-serif mb-4">Join the <span className="italic text-orange-300">Lab</span></h2>
            <p className="text-gray-400">Get exclusive insights on anti-gravity UI, AI design workflows, and digital architecture straight to your inbox.</p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent border-b-2 border-white/20 py-4 pr-12 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center hover:text-orange-400 transition-colors">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
