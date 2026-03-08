import { motion } from 'motion/react';
import { Code2, Palette, Zap } from 'lucide-react';

export function About() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-serif mb-6">About <span className="italic text-purple-300">Me</span></h2>
          <p className="text-gray-400 max-w-2xl text-lg">A modular overview of my skills, philosophy, and experience.</p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          
          {/* Primary Focus - Span 2x2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="col-span-1 md:col-span-2 row-span-2 rounded-[20px] bg-white/5 border border-white/10 p-8 relative overflow-hidden flex flex-col justify-end group"
          >
            <img 
              src="https://picsum.photos/seed/portrait/800/800" 
              alt="Portrait" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050503] via-[#050503]/50 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif mb-3">Digital Architect</h3>
              <p className="text-gray-300 leading-relaxed max-w-md">Bridging the gap between high-end design and robust engineering. I build experiences that are as performant as they are beautiful.</p>
            </div>
          </motion.div>

          {/* Skill 1 - Span 1x1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="col-span-1 row-span-1 rounded-[20px] bg-gradient-to-br from-purple-500/10 to-transparent border border-white/10 p-6 flex flex-col justify-between hover:bg-white/10 transition-colors"
          >
            <Palette className="w-8 h-8 text-purple-400" />
            <div>
              <h4 className="text-lg font-medium mb-1">UX/UI Design</h4>
              <p className="text-sm text-gray-400">Figma, Prototyping</p>
            </div>
          </motion.div>

          {/* Skill 2 - Span 1x1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="col-span-1 row-span-1 rounded-[20px] bg-gradient-to-br from-orange-500/10 to-transparent border border-white/10 p-6 flex flex-col justify-between hover:bg-white/10 transition-colors"
          >
            <Code2 className="w-8 h-8 text-orange-400" />
            <div>
              <h4 className="text-lg font-medium mb-1">Frontend Dev</h4>
              <p className="text-sm text-gray-400">React, TypeScript</p>
            </div>
          </motion.div>

          {/* Philosophy - Span 2x1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-2 row-span-1 rounded-[20px] bg-white/5 border border-white/10 p-8 flex items-center gap-6 hover:bg-white/10 transition-colors"
          >
            <Zap className="w-12 h-12 text-yellow-400 shrink-0" />
            <div>
              <h4 className="text-xl font-serif mb-2">Performance First</h4>
              <p className="text-sm text-gray-400">60 FPS animations, optimized assets, and clean code architecture.</p>
            </div>
          </motion.div>

          {/* Tech Stack - Span 2x1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 rounded-[20px] bg-white/5 border border-white/10 p-8 flex flex-col justify-center"
          >
            <h4 className="text-sm tracking-widest uppercase text-gray-500 mb-4">Core Stack</h4>
            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'WebGL', 'Three.js'].map(tech => (
                <span key={tech} className="px-4 py-2 rounded-full border border-white/10 text-sm bg-white/5">{tech}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
