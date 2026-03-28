import { useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { AntiquityGallery } from './components/AntiquityGallery';
import { FloatingBadges } from './components/FloatingBadges';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Showreel } from './components/Showreel';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { InteractiveGallery } from './components/InteractiveGallery';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Clients } from './components/Clients';
import { Awards } from './components/Awards';
import { KineticTypographySection } from './components/KineticTypographySection';
import { GlassmorphismShowcase } from './components/GlassmorphismShowcase';
import { FAQ } from './components/FAQ';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Noise } from './components/Noise';
import { ScrollProgress } from './components/ScrollProgress';
import { LoadingScreen } from './components/LoadingScreen';
import { CursorSpotlight } from './components/CursorSpotlight';
import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white font-sans selection:bg-purple-500/30 cursor-none relative">
      <SmoothScroll />
      
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s ease-out" }} className="overflow-x-hidden">
        <Noise />
        <ScrollProgress />
        <CursorSpotlight />
        <CustomCursor />
        <FloatingBadges />
        <Navigation />
        <Hero />
        <Manifesto />
        <AntiquityGallery />
        <Marquee />
        <About />
        <Showreel />
        <Services />
        <Stats />
        <InteractiveGallery />
        <Process />
        <Projects />
        <Testimonials />
        <Clients />
        <Awards />
        <KineticTypographySection />
        <GlassmorphismShowcase />
        <FAQ />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
}
