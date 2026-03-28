import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Magnetic } from './Magnetic';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      gsap.from('.hero-headline-line', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });
      
      gsap.from('.hero-fade-in', {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.8
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    tl.to('.hero-bg-parallax', { yPercent: 15, ease: 'none' }, 0)
      .to('.hero-content-wrapper', { yPercent: -25, opacity: 0, ease: 'none' }, 0)
      .to('.hero-headline-word', { 
        y: -20,
        opacity: 0.5,
        stagger: 0.01, 
        ease: 'power1.inOut' 
      }, 0);
  }, { scope: containerRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -10);
    setRotateY(((x - centerX) / centerX) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const headlineLines = [
    { text: "Redefining", style: "font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200" },
    { text: "possibilities", style: "" },
    { text: "and designing", style: "block mt-4 md:mt-6 text-white/90" },
    { text: "impactful structures", style: "relative z-10", underline: true },
    { text: "and", style: "block mt-4 md:mt-6 text-white/90" },
    { text: "unforgettable", style: "text-orange-200/80 font-serif italic" },
    { text: "experiences.", style: "" }
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent pt-20 md:pt-0">
      
      {/* 4. Cinematic Video Placeholder - Reduced opacity for less crowding */}
      <div className="hero-bg-parallax absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        >
          <source src="https://cdn.coverr.co/videos/coverr-dark-abstract-particles-2641/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050503]/50 via-[#050503]/80 to-[#050503] backdrop-blur-[1px]" />
      </div>

      {/* 3. Vibrant Depth & Gradients - Cinematic Drift */}
      <div className="hero-bg-parallax absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/20 blur-[120px] rounded-full mix-blend-screen" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/15 blur-[120px] rounded-full mix-blend-screen" 
        />
      </div>

      <div className="hero-content-wrapper max-w-7xl mx-auto px-8 relative z-10 w-full flex-grow flex flex-col justify-center pt-24 pb-32">
        <header className="max-w-4xl">
          <div className="hero-fade-in inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-10 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
            <span className="text-xs uppercase tracking-[0.2em] text-gray-200 font-bold">Available for freelance</span>
          </div>

          {/* 2. Kinetic Typography Entrance & Interaction */}
          <h1 className="text-[10vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-white leading-[1.2] md:leading-[1.1] flex flex-wrap gap-x-3 gap-y-2 md:gap-x-4 items-center">
            {headlineLines.map((line, i) => (
              <div key={i} className={`overflow-hidden ${line.style.includes('block') ? 'w-full' : ''} py-1`}>
                <span className={`hero-headline-line inline-flex flex-wrap gap-x-2 gap-y-1 md:gap-x-4 ${line.style} ${line.underline ? 'group relative' : ''}`}>
                  {line.text.split(' ').map((word, wIdx) => (
                    <span key={wIdx} className="hero-headline-word inline-block transition-all duration-500 hover:font-bold hover:text-white hover:scale-105 cursor-crosshair">
                      {word}
                    </span>
                  ))}
                  {line.underline && (
                    <span className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#89AACC]/50 to-[#4E85BF]/50 opacity-30 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  )}
                </span>
              </div>
            ))}
          </h1>

          {/* 5. Mobile-First & Thumb-Friendly CTA */}
          <div className="hero-fade-in mt-16 md:mt-24 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-8 md:gap-12 w-full z-20">
            {/* 3D Tilt Button with Cinematic Float */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-24 h-24 md:w-32 md:h-32 shrink-0 relative"
            >
              <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-pulse" />
              <motion.div
                animate={{ rotateX, rotateY }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full h-full relative z-10"
              >
                <Magnetic>
                  <button className="w-full h-full rounded-full border border-white/20 flex items-center justify-center text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 group relative overflow-hidden bg-white/5 backdrop-blur-md font-bold text-white shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 text-center leading-tight group-hover:scale-105 transition-transform duration-500">
                      Explore<br/>Vision
                    </span>
                  </button>
                </Magnetic>
              </motion.div>
            </motion.div>

            <p className="max-w-[280px] sm:max-w-xs md:max-w-sm text-gray-300 text-sm md:text-base leading-relaxed sm:border-l border-white/20 sm:pl-8 font-medium">
              Award-winning portfolio integrating Anti-gravity UI principles and Gemini AI skills to craft the next generation of digital experiences.
            </p>
          </div>
        </header>
      </div>

      {/* Local Time Widget */}
      <div className="hero-content-wrapper hero-fade-in absolute top-24 right-8 md:top-auto md:bottom-12 md:right-12 flex flex-col items-end text-xs font-mono tracking-widest text-gray-400 z-20">
        <span className="mb-1 font-bold">LOCAL TIME</span>
        <span className="text-gray-200 text-sm mb-1">06:25 AM PST</span>
        <span>LOS ANGELES, CA</span>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-content-wrapper hero-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 opacity-80">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        <span className="text-xs uppercase tracking-[0.3em] text-gray-300 font-bold" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </div>
    </section>
  );
}
