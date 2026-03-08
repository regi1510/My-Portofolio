import { motion } from 'motion/react';

const logos = [
  { name: 'Acme Corp', icon: 'Acme' },
  { name: 'Echo Valley', icon: 'Echo' },
  { name: 'Quantum', icon: 'Quantum' },
  { name: 'PULSE', icon: 'Pulse' },
  { name: 'Outside', icon: 'Outside' },
  { name: 'APEX', icon: 'Apex' },
  { name: 'Celestial', icon: 'Celestial' },
  { name: '2TWICE', icon: 'Twice' },
];

export function LogoTicker() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-gray-500 mb-10 font-medium tracking-wide">
          Trusted by the world's most innovative teams
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {logos.map((logo, i) => (
            <motion.div 
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center p-6 rounded-xl border border-white/5 bg-[#0a0a0a] hover:bg-[#111] transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3 opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                <div className="w-6 h-6 bg-white rounded-sm" />
                <span className="text-white font-bold tracking-tight">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
