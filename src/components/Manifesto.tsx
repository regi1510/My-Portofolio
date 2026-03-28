import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    tl.to('.manifesto-blob-1', { y: -200, x: 100, rotate: 90, scale: 1.5 }, 0)
      .to('.manifesto-blob-2', { y: 200, x: -100, rotate: -90, scale: 1.2 }, 0);

    const texts = gsap.utils.toArray('.manifesto-reveal');
    texts.forEach((text: any, i) => {
      gsap.from(text, {
        scrollTrigger: {
          trigger: text,
          start: "top bottom-=100px",
          end: "bottom center",
          scrub: 1,
        },
        y: 80,
        opacity: 0,
        rotateX: -30,
        transformOrigin: "0% 50%",
        ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 px-8 overflow-hidden bg-transparent">
      {/* Organic Shapes */}
      <div className="manifesto-blob-1 absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-[#89AACC]/20 blur-[120px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] mix-blend-screen pointer-events-none" />
      <div className="manifesto-blob-2 absolute bottom-0 right-[-10%] w-[40vw] h-[40vw] bg-[#F0F4F8]/10 blur-[100px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] mix-blend-screen pointer-events-none" />

      <article className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <header className="lg:col-span-4 flex flex-col justify-start order-2 lg:order-1">
            <div className="manifesto-reveal w-12 h-[1px] bg-white/50 mb-8" />
            <span className="manifesto-reveal text-sm tracking-[0.4em] uppercase text-gray-300 mb-8 block font-sans font-bold">Raw Status</span>
            <p className="manifesto-reveal text-base md:text-lg text-gray-200 leading-relaxed font-sans font-medium">
              We don't just build websites. We engineer intelligence. 
              Fusing antiquity aesthetics with cutting-edge <strong className="text-white font-bold">AI Masters</strong>, 
              we create digital experiences that breathe, adapt, and dominate the modern web.
            </p>
            <div className="manifesto-reveal mt-12 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#89AACC] rounded-full animate-pulse shadow-[0_0_10px_#89AACC]" />
              </div>
              <span className="text-sm uppercase tracking-widest text-gray-300 font-bold">System Active</span>
            </div>
          </header>
          
          <div className="lg:col-span-8 order-1 lg:order-2">
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-display leading-[0.85] tracking-tight flex flex-col">
              <span className="manifesto-reveal italic text-white ml-0 lg:ml-12">Antiquity</span>
              <span className="manifesto-reveal text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Meets</span>
              <span className="manifesto-reveal italic text-[#89AACC] ml-0 lg:ml-24 drop-shadow-lg">AI Masters.</span>
            </h2>
          </div>
        </div>
      </article>
    </section>
  );
}
