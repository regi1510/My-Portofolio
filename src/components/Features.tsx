import { motion } from 'motion/react';

export function Features() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] flex flex-col justify-between group hover:border-purple-500/50 transition-colors"
          >
            <div className="mb-12 relative w-full aspect-square rounded-xl bg-gradient-to-br from-gray-900 to-black overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
              {/* Abstract 3D shape placeholder */}
              <div className="w-32 h-32 rounded-full border-4 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-700 ease-out" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">SEO goal setting</h3>
              <p className="text-gray-400 leading-relaxed">
                Helps you set and achieve SEO goals with guided assistance.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-2 p-8 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-[#0a0a0a] flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15)_0%,transparent_50%)]" />
            
            <div className="mb-12 relative w-full h-64 rounded-xl border border-white/10 bg-[#111] overflow-hidden shadow-2xl group-hover:border-purple-500/50 transition-colors">
               {/* Mini Dashboard Snippet */}
               <div className="p-4 border-b border-white/5 flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-red-500" />
                 <div className="w-2 h-2 rounded-full bg-yellow-500" />
                 <div className="w-2 h-2 rounded-full bg-green-500" />
               </div>
               <div className="p-6">
                 <div className="h-4 w-1/3 bg-white/10 rounded mb-4" />
                 <div className="h-2 w-1/4 bg-white/5 rounded mb-8" />
                 <div className="h-32 w-full bg-gradient-to-t from-purple-500/20 to-transparent rounded-t-lg border-t border-purple-500/50" />
               </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3">User-friendly dashboard</h3>
              <p className="text-purple-200/70 leading-relaxed max-w-md">
                Perform complex SEO audits and optimizations with a single click.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-2 p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] flex flex-col justify-between group hover:border-white/20 transition-colors"
          >
            <div className="mb-12 relative w-full h-64 rounded-xl border border-white/5 bg-[#111] overflow-hidden flex items-end">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,90 L20,70 L40,80 L60,50 L80,60 L100,30" fill="none" stroke="#8b5cf6" strokeWidth="1" />
                <path d="M0,90 L20,70 L40,80 L60,50 L80,60 L100,30 L100,100 L0,100 Z" fill="url(#purple-fade-2)" opacity="0.2" />
                <defs>
                  <linearGradient id="purple-fade-2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Visual reports</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Visual insights into your site's performance.
              </p>
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] flex flex-col justify-between group hover:border-white/20 transition-colors"
          >
            <div className="mb-12 relative w-full aspect-square rounded-xl bg-gradient-to-br from-gray-900 to-black overflow-hidden flex items-center justify-center">
               {/* Abstract 3D shape placeholder */}
               <div className="w-0 h-0 border-l-[60px] border-l-transparent border-b-[100px] border-b-white/20 border-r-[60px] border-r-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:rotate-12 transition-transform duration-700 ease-out" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Keyword Generator</h3>
              <p className="text-gray-400 leading-relaxed">
                Automatic suggestions and the best keywords to target.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
