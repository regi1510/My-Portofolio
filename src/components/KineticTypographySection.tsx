import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function KineticTypographySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text = "Expressive Kinetic Typography";

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const chars = gsap.utils.toArray('.kinetic-char');
    
    gsap.from(chars, {
      y: 100,
      opacity: 0,
      stagger: 0.03,
      ease: 'power2.out',
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 relative z-10 bg-transparent overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-purple-400 tracking-[0.3em] uppercase text-sm mb-8 font-medium">Interactive Headlines</p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tighter flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-4">
          {text.split(' ').map((word, wordIndex) => (
            <div key={wordIndex} className="kinetic-word overflow-hidden flex">
              {word.split('').map((char, charIndex) => (
                <span 
                  key={charIndex} 
                  className="kinetic-char inline-block transition-all duration-300 hover:font-[900] hover:text-purple-300 hover:scale-125 hover:-translate-y-2 cursor-crosshair"
                >
                  {char}
                </span>
              ))}
            </div>
          ))}
        </h2>
        <p className="mt-12 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Hover over the letters to see the variable font weight shift dynamically. The characters stagger in smoothly using GSAP, creating a focal point that commands attention.
        </p>
      </div>
    </section>
  );
}
