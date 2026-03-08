import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useAppStore } from '../store';

export function LiquidCursor() {
  const { cursorPosition, setCursorPosition, setScrollVelocity } = useAppStore();
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    let lastY = 0;
    let lastTime = Date.now();
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition([e.clientX, e.clientY]);
      
      const target = e.target as HTMLElement;
      if (target && typeof target.closest === 'function') {
        setIsHovering(target.tagName === 'BUTTON' || target.closest('button') !== null);
      } else {
        setIsHovering(false);
      }
    };
    
    let scrollTimeout: number;
    const handleScroll = (e: WheelEvent) => {
      const now = Date.now();
      const dt = now - lastTime;
      const dy = e.deltaY;
      
      if (dt > 0) {
        const vel = dy / dt;
        setScrollVelocity(vel);
      }
      
      lastTime = now;
      
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        setScrollVelocity(0);
      }, 150);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [setCursorPosition, setScrollVelocity]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-difference"
      style={{
        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
      }}
      animate={{
        x: cursorPosition[0] - 16,
        y: cursorPosition[1] - 16,
        scale: isHovering ? 2 : 1,
        opacity: isHovering ? 0.5 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
}
