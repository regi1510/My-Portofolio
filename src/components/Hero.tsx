import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Magnetic } from './Magnetic';
import { Hero3D } from './Hero3D';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // 1 & 4. Text Splitting Entrance with Physics-Based Custom Easing (power4.out)
    if (!prefersReducedMotion) {
      gsap.from('.hero-char', {
        y: 100,
        opacity: 0,
        rotationX: -90,
        scale: 0.8,
        duration: 1.5,
        stagger: 0.02,
        ease: 'power4.out',
        delay: 0.2
      });
      
      gsap.from('.hero-fade-in', {
        opacity: 0,
        y: 30,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 1
      });
    }

    // 2 & 6. Scroll Scrubbing and CSS Sticky Stacking Transitions
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1, // Smooth scrubbing
      }
    });

    // Background rotates and zooms
    tl.to('.hero-bg-zoom', { scale: 1.2, rotation: 5, ease: 'power1.inOut' }, 0)
      // Hero text parallaxes slightly but DOES NOT disappear
      .to('.hero-scale-text', { yPercent: 15, ease: 'none' }, 0)
      // Other UI elements fade out faster
      .to('.hero-fade-out', { opacity: 0, y: -50, ease: 'power1.inOut' }, 0)
      // Floating elements move at different speeds for parallax depth
      .to('.hero-floating-1', { yPercent: -80, ease: 'none' }, 0)
      .to('.hero-floating-2', { yPercent: -40, ease: 'none' }, 0)
      .to('.hero-badge', { yPercent: -60, ease: 'none' }, 0);
  }, { scope: containerRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -15);
    setRotateY(((x - centerX) / centerX) * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const headlineLines = [
    { text: "Redefining", style: "font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300" },
    { text: "possibilities", style: "" },
    { text: "and designing", style: "block mt-2 md:mt-4" },
    { text: "impactful structures", style: "relative z-10", underline: true },
    { text: "and", style: "block mt-2 md:mt-4" },
    { text: "unforgettable", style: "text-orange-200/80 font-serif italic" },
    { text: "experiences.", style: "" }
  ];

  return (
    // 6. CSS Sticky Stacking: Make the container 200vh so it scrolls, but the inner content is sticky
    <section ref={containerRef} className="relative h-[200vh] w-full bg-[#050503]">
      
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pt-20 md:pt-0">
        
        {/* 4. Cinematic Video Placeholder (Zooming on scroll) */}
        <div className="hero-bg-zoom absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="https://cdn.coverr.co/videos/coverr-dark-abstract-particles-2641/1080p.mp4" type="video/mp4" />
          </video>
          {/* Glassmorphic/Dark Overlay */}
          <div className="absolute inset-0 bg-[#050503]/70 backdrop-blur-[2px]" />
        </div>

        {/* 3. WebGL Shaders / Lightweight 3D Elements */}
        <div className="hero-bg-zoom absolute inset-0 w-full h-full pointer-events-none z-0">
          <Hero3D />
        </div>

        {/* Architectural Grid Background */}
        <div className="hero-bg-zoom absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        {/* 5. Vibrant Depth & Gradients (Breathing) */}
        <div className="hero-bg-zoom absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/30 blur-[120px] rounded-full mix-blend-screen animate-breathe" style={{ animationDelay: '0s' }} />
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen animate-breathe" style={{ animationDelay: '-2s' }} />
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-orange-900/20 blur-[120px] rounded-full mix-blend-screen animate-breathe" style={{ animationDelay: '-4s' }} />
          <div className="absolute bottom-[10%] right-[20%] w-[30%] h-[40%] bg-pink-900/20 blur-[100px] rounded-full mix-blend-screen animate-breathe" style={{ animationDelay: '-6s' }} />
        </div>

        <div className="hero-scale-text max-w-7xl mx-auto px-6 relative z-10 w-full flex-grow flex flex-col justify-center pt-24 pb-32">
          {/* 5. Glassmorphism Layer for Content */}
          <div className="max-w-5xl relative">
            <div className="hero-fade-in inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] mb-6 md:mb-8">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-gray-300 font-medium">Available for freelance</span>
            </div>

            {/* 1. Text Splitting for Kinetic Typography Entrance */}
            <h1 className="text-[12vw] sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] flex flex-wrap gap-x-3 md:gap-x-4 items-center" style={{ perspective: 1000 }}>
              {headlineLines.map((line, i) => (
                <div key={i} className={`overflow-hidden ${line.style.includes('block') ? 'w-full' : ''}`}>
                  <span className={`inline-flex flex-wrap gap-x-3 md:gap-x-4 ${line.style} ${line.underline ? 'group relative' : ''}`}>
                    {line.text.split(' ').map((word, wIdx) => (
                      <span key={wIdx} className="inline-flex transition-all duration-300 hover:font-black hover:text-purple-300 hover:scale-110 hover:-rotate-2 cursor-crosshair">
                        {word.split('').map((char, cIdx) => (
                          <span key={cIdx} className="hero-char inline-block">{char}</span>
                        ))}
                      </span>
                    ))}
                    {line.underline && (
                      <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    )}
                  </span>
                </div>
              ))}
            </h1>

            {/* Mobile-First & Thumb-Friendly CTA */}
            <div className="hero-fade-out hero-fade-in mt-10 md:mt-16 flex flex-row items-center justify-start gap-4 md:gap-8 w-full z-20">
              {/* 3D Tilt Button */}
              <div 
                style={{ perspective: 1000 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 shrink-0"
              >
                <motion.div
                  animate={{ rotateX, rotateY }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-full h-full"
                >
                  <Magnetic>
                    <button className="w-full h-full rounded-full border border-white/20 flex items-center justify-center text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-500 group relative overflow-hidden bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative z-10 text-center leading-tight group-hover:scale-110 transition-transform duration-500">
                        Explore<br/>Vision
                      </span>
                    </button>
                  </Magnetic>
                </motion.div>
              </div>

              <p className="max-w-[200px] sm:max-w-xs md:max-w-sm text-gray-300 md:text-gray-400 text-[10px] sm:text-xs md:text-sm leading-relaxed border-l border-white/20 md:border-white/10 pl-4 md:pl-6 drop-shadow-md md:drop-shadow-none">
                Award-winning portfolio integrating Anti-gravity UI principles and Gemini AI skills to craft the next generation of digital experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Spinning Circular Text Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="hero-badge hero-fade-out absolute bottom-32 -right-12 scale-50 md:scale-100 md:top-1/3 md:left-[5%] md:right-auto md:bottom-auto w-32 h-32 flex items-center justify-center pointer-events-none z-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text className="text-[10px] uppercase tracking-[0.2em] fill-white">
                <textPath href="#circlePath">AWARD WINNING DESIGN • NEXT LEVEL UI •</textPath>
              </text>
            </svg>
          </motion.div>
        </motion.div>

        {/* Floating Elements (Anti-gravity vibe) */}
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hero-floating-1 absolute top-1/4 right-[-10%] md:right-[10%] w-48 h-72 md:w-72 md:h-96 rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl block overflow-hidden z-0 opacity-40 md:opacity-100"
        >
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/glass/400/600')] opacity-20 mix-blend-overlay object-cover" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hero-floating-2 absolute bottom-1/4 left-[-10%] md:left-auto md:right-[25%] w-32 h-32 md:w-48 md:h-48 rounded-full border border-purple-500/30 bg-gradient-to-tr from-purple-500/20 to-transparent backdrop-blur-md block z-0 opacity-40 md:opacity-100"
        />

        {/* Local Time Widget */}
        <div className="hero-fade-out hero-fade-in absolute top-24 right-6 md:top-auto md:bottom-10 md:right-10 flex flex-col items-end text-[8px] md:text-[10px] font-mono tracking-widest text-gray-500 z-20">
          <span className="mb-1">LOCAL TIME</span>
          <span className="text-white text-[10px] md:text-xs mb-1">06:25 AM PST</span>
          <span>LOS ANGELES, CA</span>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-fade-out hero-fade-in absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/50 to-transparent" />
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/50" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </div>

      </div>
    </section>
  );
}
