'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExplorationItem } from '@/lib/data';

interface LightboxModalProps {
  item: ExplorationItem | null;
  onClose: () => void;
}

export default function LightboxModal({ item, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl cursor-zoom-out select-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full bg-surface border border-stroke rounded-3xl overflow-hidden cursor-default shadow-2xl flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-105 transition-transform"
            aria-label="Close Lightbox"
          >
            ✕
          </button>

          {/* Main Visual Image */}
          <div className="relative w-full aspect-square sm:aspect-[4/3] max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 halftone-overlay opacity-10 pointer-events-none" />
          </div>

          {/* Description bar */}
          <div className="p-6 bg-surface border-t border-stroke/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-1">
                {item.medium}
              </span>
              <h3 className="text-2xl font-display italic text-text-primary">
                {item.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted">
                Visual Playground Study
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full border border-stroke text-xs font-mono hover:bg-stroke/40 text-text-primary transition-colors"
              >
                Close (ESC)
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
