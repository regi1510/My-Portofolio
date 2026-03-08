import { motion } from 'motion/react';

const clients = ["Google", "Spotify", "Netflix", "Airbnb", "Nike", "Apple", "Tesla", "Vogue"];

export function Clients() {
  return (
    <section className="py-20 bg-[#050503] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-gray-500 tracking-widest uppercase mb-16">Selected Clients</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 items-center justify-items-center opacity-60">
          {clients.map((client, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl md:text-3xl font-serif italic hover:text-purple-400 hover:scale-110 transition-all cursor-pointer"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
