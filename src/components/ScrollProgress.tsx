import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 w-[2px] h-32 bg-white/10 z-50 hidden md:block">
      <motion.div
        className="w-full bg-gradient-to-b from-purple-500 to-orange-500 origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
}
