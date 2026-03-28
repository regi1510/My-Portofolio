import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function AntiquityGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.antiquity-item');
    
    items.forEach((item: any, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=50px",
          end: "center center",
          scrub: 1,
        },
        y: 150,
        opacity: 0,
        rotate: gsap.utils.random(-5, 5),
        scale: 0.9,
        ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-8 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24">
          <h3 className="text-4xl md:text-6xl font-display italic text-white mb-6 drop-shadow-md">The AI Masters Collection</h3>
          <p className="text-gray-300 font-sans tracking-widest uppercase text-sm font-bold">Curated Digital Antiquity</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            { title: "Neural Synthesis", desc: "Raw status algorithms.", img: "https://picsum.photos/seed/ai10/600/800" },
            { title: "Cognitive Architecture", desc: "Organic shapes in code.", img: "https://picsum.photos/seed/ai11/600/800", mt: "md:mt-24" },
            { title: "Quantum Aesthetics", desc: "Bold statements only.", img: "https://picsum.photos/seed/ai12/600/800", mt: "md:mt-12" }
          ].map((item, i) => (
            <figure key={i} className={`antiquity-item group relative ${item.mt || ''}`}>
              <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] mb-6 shadow-2xl shadow-black/50">
                <div className="absolute inset-0 bg-[#0a0f1a]/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Organic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a15]/90 via-transparent to-transparent z-20" />
              </div>
              <figcaption>
                <h4 className="text-2xl font-display text-white mb-2 group-hover:text-[#89AACC] transition-colors">{item.title}</h4>
                <p className="text-base text-gray-400 font-sans">{item.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
