import { ArrowRight, Sparkles } from 'lucide-react';

export function GlassmorphismShowcase() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-32 z-10">
      {/* Noise Texture Overlay for Tactile Depth */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Glass Navigation Bar */}
      <nav className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] px-6 py-4 flex justify-between items-center z-20">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-white" />
          <span className="font-bold tracking-widest uppercase text-sm text-white">GlassUI</span>
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-white/80">
          <li className="hover:text-white cursor-pointer transition-colors">Features</li>
          <li className="hover:text-white cursor-pointer transition-colors">Showcase</li>
          <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
        </ul>
        <button className="px-6 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-sm font-medium border border-white/10 text-white">
          Get Started
        </button>
      </nav>

      {/* Floating Glass Project Card */}
      <div className="w-[90%] max-w-lg rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-10 relative z-20 transform hover:-translate-y-2 transition-transform duration-500">
        {/* Inner subtle highlight to mimic glass edge */}
        <div className="absolute top-0 left-0 w-full h-full rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        
        <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center mb-8 shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-50" />
          <Sparkles className="w-8 h-8 text-white relative z-10" />
        </div>
        
        <h3 className="text-3xl font-serif mb-4 text-white">Premium Tactile Interfaces</h3>
        <p className="text-white/80 leading-relaxed mb-8">
          By combining translucent UI layers, soft background blurs, and subtle noise textures, we create digital experiences that feel tangible, premium, and high-end.
        </p>
        
        <button className="w-full py-4 rounded-xl bg-white text-purple-900 font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-colors shadow-lg">
          Explore Component <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
