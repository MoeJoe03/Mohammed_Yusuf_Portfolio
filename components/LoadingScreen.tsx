'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const ROTATING_WORDS = ["Design", "Create", "Inspire"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  // Counter from 000 to 100 over 2700ms using requestAnimationFrame
  useEffect(() => {
    let animId: number;
    let completed = false;
    const duration = 2700;
    const start = performance.now();

    const frame = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      // Non-linear easing for natural feeling counter
      const currentCount = Math.min(100, Math.floor(progress * 100));
      setCount(currentCount);

      if (progress < 1) {
        animId = requestAnimationFrame(frame);
      } else if (!completed) {
        completed = true;
        setCount(100);
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    };

    animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  // Rotating words cycling every 900ms
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      id="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none pointer-events-auto"
    >
      {/* Top-left: "Portfolio" label */}
      <div className="flex items-center justify-between w-full">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs text-muted uppercase tracking-[0.3em] font-mono"
        >
          Portfolio
        </motion.span>
        <span className="text-xs text-muted/60 tracking-widest hidden sm:inline-block">
          2026 ARCHIVE
        </span>
      </div>

      {/* Center: Rotating words */}
      <div className="flex items-center justify-center my-auto min-h-[140px] text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={ROTATING_WORDS[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80 tracking-tight"
          >
            {ROTATING_WORDS[wordIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Bottom section with counter display and progress bar */}
      <div className="w-full flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <span className="text-xs text-muted uppercase tracking-[0.2em] font-mono">
            Initializing Studio
          </span>
          <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none">
            {String(count).padStart(3, "0")}
          </div>
        </div>

        {/* Bottom progress bar */}
        <div className="w-full h-[3px] bg-stroke/50 rounded-full overflow-hidden relative">
          <div
            className="h-full accent-gradient transition-transform duration-75 ease-linear origin-left"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
