import { motion } from 'motion/react';

export function Testimonials() {
  return (
    <section className="py-32 bg-[#0a080c] text-white overflow-hidden relative border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <svg className="w-12 h-12 mx-auto mb-10 text-purple-400/50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12">
            "They didn't just design a website; they engineered an <span className="italic text-purple-300">experience</span> that completely transformed our brand's digital presence."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <img src="https://picsum.photos/seed/avatar/100/100" alt="Avatar" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
            <div className="text-left">
              <div className="font-medium">Sarah Jenkins</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">CEO, TechVision</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
