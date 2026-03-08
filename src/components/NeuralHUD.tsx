import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useAppStore } from '../store';
import { Cpu, Zap, Activity } from 'lucide-react';

export function NeuralHUD() {
  const { appState, setAppState, cursorPosition } = useAppStore();
  const [time, setTime] = useState('');
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toISOString().split('T')[1].split('.')[0] + '.' + now.getMilliseconds().toString().padStart(3, '0'));
    }, 50);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  const handleEnter = () => {
    setAppState('bento-sphere');
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden mix-blend-difference text-white">
      {/* Dynamic SVG Border */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <motion.path
          d={`M 20 20 L ${windowSize.width - 20} 20 L ${windowSize.width - 20} ${windowSize.height - 20} L 20 ${windowSize.height - 20} Z`}
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* Top Left: System Status */}
      <div className="absolute top-8 left-8 font-mono text-xs tracking-widest uppercase flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-cyan-400" />
          <span>SYS.STATUS: ONLINE</span>
        </div>
        <div className="flex items-center gap-2">
          <Cpu size={14} className="text-purple-400" />
          <span>MEM.ALLOC: 42.8%</span>
        </div>
      </div>

      {/* Top Right: Time Sync */}
      <div className="absolute top-8 right-8 font-mono text-xs tracking-widest text-right">
        <div className="text-gray-400">T-SYNC</div>
        <div>{time}</div>
      </div>

      {/* Bottom Left: Coordinates */}
      <div className="absolute bottom-8 left-8 font-mono text-xs tracking-widest">
        <div className="text-gray-400">POS.VECTOR</div>
        <div>X: {Math.round(cursorPosition[0])}</div>
        <div>Y: {Math.round(cursorPosition[1])}</div>
      </div>

      {/* Center: Zero-State Interaction */}
      {appState === 'zero-state' && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button 
            onClick={handleEnter}
            className="group relative px-8 py-4 font-sans text-sm tracking-[0.3em] uppercase overflow-hidden"
          >
            <div className="absolute inset-0 border border-white/30 group-hover:border-white transition-colors duration-500" />
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center gap-3">
              <Zap size={16} className="group-hover:text-cyan-400 transition-colors" />
              Initialize Sequence
            </span>
          </button>
        </motion.div>
      )}

      {/* Bottom Right: State Indicator */}
      <div className="absolute bottom-8 right-8 font-mono text-xs tracking-widest text-right">
        <div className="text-gray-400">PHASE</div>
        <div className="text-cyan-400">{appState.toUpperCase()}</div>
      </div>
    </div>
  );
}
