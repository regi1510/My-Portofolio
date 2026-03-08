import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "Villa Nova", category: "Architecture", img: "https://picsum.photos/seed/villa/1920/1080" },
  { id: 2, title: "Lumina Workspace", category: "Interior", img: "https://picsum.photos/seed/workspace/1920/1080" },
  { id: 3, title: "Echo Pavilion", category: "Structure", img: "https://picsum.photos/seed/pavilion/1920/1080" },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return; // Graceful fallback for accessibility

    const sections = gsap.utils.toArray('.case-study-section');

    sections.forEach((section: any) => {
      const bg = section.querySelector('.parallax-bg');
      const content = section.querySelector('.parallax-content');

      // Background parallax (moves slower, scrubbed)
      gsap.to(bg, {
        yPercent: 20, // GPU friendly transform
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      // Content parallax (moves faster, scrubbed)
      gsap.fromTo(content, 
        { y: 100, opacity: 0 }, // GPU friendly transform & opacity
        {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'center center',
            scrub: true,
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-5xl md:text-7xl font-serif mb-6">
          Cinematic <span className="italic text-orange-200/80">Case Studies</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">Scroll-driven storytelling synced perfectly to your pace.</p>
      </div>

      <div className="flex flex-col">
        {projects.map((project) => (
          <div key={project.id} className="case-study-section relative h-[80vh] w-full overflow-hidden flex items-center justify-center border-t border-white/10">
            {/* Parallax Background */}
            <div className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
              <img 
                src={project.img} 
                alt={project.title} 
                className="parallax-bg w-full h-full object-cover opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#050503] via-transparent to-[#050503] opacity-80" />
            </div>

            {/* Parallax Content */}
            <div className="parallax-content relative z-10 text-center px-6">
              <p className="text-sm tracking-[0.3em] uppercase text-orange-300 mb-4">{project.category}</p>
              <h3 className="text-6xl md:text-8xl font-serif mb-8">{project.title}</h3>
              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-md">
                Explore Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
