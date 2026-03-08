import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MonitorSmartphone, Figma, Code2, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { 
    title: "Digital Experience", 
    desc: "Crafting immersive, high-performance web applications that defy gravity.", 
    icon: MonitorSmartphone, 
    span: "col-span-1 sm:col-span-2",
    color: "from-purple-500/20 to-indigo-500/20"
  },
  { 
    title: "UX/UI Design", 
    desc: "Intuitive, user-centric interfaces built for the future.", 
    icon: Figma, 
    span: "col-span-1",
    color: "from-pink-500/20 to-rose-500/20"
  },
  { 
    title: "Creative Dev", 
    desc: "WebGL, GSAP, and advanced cinematic animations.", 
    icon: Code2, 
    span: "col-span-1",
    color: "from-orange-500/20 to-amber-500/20"
  },
  { 
    title: "Brand Identity", 
    desc: "Cohesive visual systems that tell a compelling story.", 
    icon: Sparkles, 
    span: "col-span-1 sm:col-span-2",
    color: "from-emerald-500/20 to-teal-500/20"
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // 3. Kinetic Typography Section Headers
    gsap.from('.services-char', {
      y: 50,
      opacity: 0,
      stagger: 0.03,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.services-header',
        start: 'top 80%',
      }
    });

    // 1. The Staggered Bento Grid Reveal
    gsap.from('.service-card', {
      y: 100,
      opacity: 0,
      scale: 0.9,
      stagger: 0.1,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 75%',
      }
    });
  }, { scope: containerRef });

  const title = "What We Do";

  return (
    <section ref={containerRef} className="relative py-32 bg-[#050503] z-10 overflow-hidden">
      
      {/* 5. Subdued Glassmorphism with "Breathing" Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen animate-breathe" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-indigo-900/20 blur-[150px] rounded-full mix-blend-screen animate-breathe" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* 2. The Pinned "Sticky" Scroll Experience */}
        <div className="w-full lg:w-1/3 relative">
          <div className="sticky top-32 services-header">
            <p className="text-purple-400 tracking-[0.3em] uppercase text-sm mb-6 font-medium">Our Expertise</p>
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6 flex flex-wrap gap-x-3">
              {title.split(' ').map((word, wIdx) => (
                <span key={wIdx} className="inline-flex overflow-hidden">
                  {word.split('').map((char, cIdx) => (
                    <span key={cIdx} className="services-char inline-block">{char}</span>
                  ))}
                </span>
              ))}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              We merge high-end design with bleeding-edge engineering to create digital experiences that feel alive, tactile, and unforgettable.
            </p>
          </div>
        </div>

        {/* Bento Grid Services */}
        <div className="w-full lg:w-2/3 services-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              // 4. Magnetic & Hover-Triggered Micro-Interactions + 5. Glassmorphism
              className={`service-card ${service.span} group relative rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]`}
            >
              {/* Inner subtle gradient hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
