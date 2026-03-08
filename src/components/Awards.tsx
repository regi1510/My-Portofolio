import { motion } from 'motion/react';

const awards = [
  { year: "2026", title: "Site of the Year", platform: "Awwwards", project: "Lumina Workspace" },
  { year: "2025", title: "FWA of the Month", platform: "The FWA", project: "Echo Pavilion" },
  { year: "2025", title: "Best UI Design", platform: "CSS Design Awards", project: "Villa Nova" },
  { year: "2024", title: "Developer Award", platform: "Awwwards", project: "TechVision" }
];

export function Awards() {
  return (
    <section className="py-32 bg-[#0a080c] text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-serif">Recognition <span className="italic text-orange-300">& Awards</span></h2>
        </div>
        <div className="flex flex-col">
          {awards.map((award, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 group cursor-pointer hover:bg-white/5 px-4 -mx-4 transition-colors rounded-xl"
            >
              <div className="flex items-center gap-8 md:w-1/2 mb-4 md:mb-0">
                <span className="text-sm text-gray-500 font-mono">{award.year}</span>
                <h3 className="text-2xl md:text-3xl font-serif group-hover:text-orange-300 transition-colors">{award.title}</h3>
              </div>
              <div className="flex items-center justify-between md:w-1/2">
                <span className="text-lg text-gray-300">{award.platform}</span>
                <span className="text-sm text-gray-500 italic">{award.project}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
