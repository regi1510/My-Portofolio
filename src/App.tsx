import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
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
import { Preloader } from './components/Preloader';
import { CursorSpotlight } from './components/CursorSpotlight';
import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  const { scrollYProgress } = useScroll();
  
  const color1 = useTransform(
    scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    ['#050503', '#1a0b2e', '#0f172a', '#2e0b1a', '#050503']
  );
  
  const color2 = useTransform(
    scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    ['#0a080c', '#0f172a', '#1a0b2e', '#0a080c', '#0a080c']
  );

  const backgroundImage = useMotionTemplate`radial-gradient(circle at 50% 0%, ${color1}, ${color2})`;

  return (
    <motion.div 
      style={{ backgroundImage }}
      className="min-h-screen text-white font-sans selection:bg-purple-500/30 cursor-none relative"
    >
      <SmoothScroll />
      <Preloader />
      <Noise />
      <ScrollProgress />
      <CursorSpotlight />
      <CustomCursor />
      <Navigation />
      <Hero />
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
    </motion.div>
  );
}
