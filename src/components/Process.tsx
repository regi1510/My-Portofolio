import { motion } from 'motion/react';

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding the core problem and defining the vision." },
  { num: "02", title: "Strategy", desc: "Mapping out the architecture and user journeys." },
  { num: "03", title: "Design", desc: "Crafting the visual language and interactive prototypes." },
  { num: "04", title: "Launch", desc: "Bringing the product to life with pixel-perfect precision." }
];

export function Process() {
  return (
    <section className="py-32 bg-[#0a080c] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-serif">Our <span className="italic text-purple-300">Process</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="text-6xl font-serif italic text-white/10 mb-6 group-hover:text-purple-400/30 transition-colors">{step.num}</div>
              <h3 className="text-2xl font-medium mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              {i !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-[-20px] w-10 h-[1px] bg-white/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
