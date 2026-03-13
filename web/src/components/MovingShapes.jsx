import React from 'react';
import { motion } from 'framer-motion';

const shapes = [
  { id: 1, type: 'circle', size: 'w-32 h-32', color: 'from-cyan-500/30 to-violet-500/20', duration: 25, delay: 0 },
  { id: 2, type: 'square', size: 'w-40 h-40', color: 'from-violet-500/30 to-teal-500/20', duration: 30, delay: 2 },
  { id: 3, type: 'triangle', size: 'w-48 h-48', color: 'from-emerald-400/30 to-cyan-500/20', duration: 35, delay: 5 },
  { id: 4, type: 'circle', size: 'w-24 h-24', color: 'from-teal-400/30 to-blue-500/20', duration: 22, delay: 7 },
  { id: 5, type: 'square', size: 'w-56 h-56', color: 'from-violet-400/30 to-cyan-400/20', duration: 40, delay: 10 },
  { id: 6, type: 'circle', size: 'w-44 h-44', color: 'from-cyan-500/25 to-transparent', duration: 28, delay: 3 },
  { id: 7, type: 'triangle', size: 'w-32 h-32', color: 'from-teal-500/25 to-transparent', duration: 32, delay: 8 },
  { id: 8, type: 'square', size: 'w-20 h-20', color: 'from-cyan-600/30 to-violet-500/20', duration: 20, delay: 4 },
  { id: 9, type: 'circle', size: 'w-64 h-64', color: 'from-cyan-500/20 to-emerald-500/10', duration: 45, delay: 12 },
  { id: 10, type: 'triangle', size: 'w-36 h-36', color: 'from-violet-300/30 to-cyan-500/20', duration: 26, delay: 1 },
];

const MovingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} bg-gradient-to-br ${shape.color} backdrop-blur-[2px] border border-white/10 shadow-2xl shadow-primary-500/10`}
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            rotate: 0,
            scale: 1,
            opacity: 0
          }}
          animate={{
            x: [
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`
            ],
            y: [
              `${Math.random() * 100}vh`,
              `${Math.random() * 100}vh`,
              `${Math.random() * 100}vh`,
              `${Math.random() * 100}vh`,
              `${Math.random() * 100}vh`
            ],
            rotate: [0, 120, 240, 360],
            scale: [1, 1.4, 0.7, 1.2, 1],
            opacity: [0, 0.5, 0.8, 0.5, 0]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut"
          }}
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'square' ? '20%' : '0%',
            clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
          }}
        />
      ))}
    </div>
  );
};

export default MovingShapes;
