import { motion } from 'motion/react';

export function Stats() {
  return (
    <section className="py-20 bg-[#0a080c] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 bg-white/5 px-10 py-8 rounded-full"
          >
            <span className="text-6xl font-serif italic">6+</span>
            <span className="text-lg font-serif text-gray-300 leading-tight">Years of<br/>experience</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 h-32 rounded-full overflow-hidden relative"
          >
            <img src="https://picsum.photos/seed/fluid/1000/300" alt="Fluid" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a080c] via-transparent to-[#0a080c]" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-12"
          >
            <div>
              <div className="text-4xl font-bold mb-1">800<span className="text-orange-400">+</span></div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Happy customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">120<span className="text-purple-400">+</span></div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Award winning</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
