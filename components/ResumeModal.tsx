'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-3xl bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stroke/60 bg-surface/80 backdrop-blur-md sticky top-0 z-20">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                Curriculum Vitae
              </span>
              <h2 className="text-2xl font-display italic text-text-primary">
                Mohammed Yusuf
              </h2>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-bg border border-stroke flex items-center justify-center text-text-primary hover:text-white hover:border-white/40 transition-colors focus:outline-none"
              aria-label="Close Resume"
            >
              ✕
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-sm">
            {/* Summary */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2">
                Executive Profile
              </h4>
              <p className="text-text-primary/90 leading-relaxed">
                Chicago-based Design Director &amp; Fullstack Creative Technologist with 20+ years of experience engineering high-fidelity digital platforms, interactive installations, and luxury brand design systems. Specialized in real-time GPU shaders, motion graphics, and zero-latency ergonomic UI.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-4">
                Selected Leadership &amp; Roles
              </h4>
              <div className="space-y-6 border-l border-stroke pl-4">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h5 className="font-medium text-text-primary">Principal Creative Technologist</h5>
                    <span className="text-xs font-mono text-muted">2021 — Present</span>
                  </div>
                  <p className="text-xs text-muted mb-2">Monolith Interactive Labs • Chicago / Remote</p>
                  <p className="text-xs text-text-primary/80 leading-relaxed">
                    Directing computational design pipelines, WebGL physics engines, and custom hardware input integrations for automotive and museum installations.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h5 className="font-medium text-text-primary">Head of Design Systems</h5>
                    <span className="text-xs font-mono text-muted">2016 — 2021</span>
                  </div>
                  <p className="text-xs text-muted mb-2">Verve Digital Studio • New York / Chicago</p>
                  <p className="text-xs text-text-primary/80 leading-relaxed">
                    Standardized design tokens and component architecture for Fortune 500 financial and enterprise clients, scaling to 14M+ active daily users.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h5 className="font-medium text-text-primary">Senior Interactive Developer</h5>
                    <span className="text-xs font-mono text-muted">2010 — 2016</span>
                  </div>
                  <p className="text-xs text-muted mb-2">Krypton Media • Chicago</p>
                  <p className="text-xs text-text-primary/80 leading-relaxed">
                    Pioneered early canvas and mobile touchscreen choreography, earning multiple FWA of the Day, Awwwards Site of the Month, and Cannes Lions Bronze honors.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Tooling */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-3">
                Core Stack &amp; Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 bg-bg rounded-xl border border-stroke/50">
                  <span className="text-white block font-medium mb-1">Creative Frontend</span>
                  <span className="text-muted">React, TypeScript, Next.js, Vite, GSAP, Framer Motion, Tailwind CSS, Three.js, WebGL</span>
                </div>
                <div className="p-3 bg-bg rounded-xl border border-stroke/50">
                  <span className="text-white block font-medium mb-1">Design &amp; Direction</span>
                  <span className="text-muted">Figma, Cinema 4D, Octane, Typographic Systems, Ergonomic Research, Prototyping</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2">
                Education
              </h4>
              <div className="flex justify-between items-baseline text-xs">
                <span className="text-text-primary font-medium">B.F.A. in Visual Communication &amp; Human-Computer Interaction</span>
                <span className="text-mono text-muted">School of the Art Institute of Chicago</span>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-6 border-t border-stroke/60 bg-surface flex justify-between items-center text-xs font-mono">
            <span className="text-muted">Available worldwide for Q1/Q2</span>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="px-5 py-2.5 rounded-full border border-stroke bg-bg hover:bg-stroke/40 text-text-primary transition-colors flex items-center gap-2"
              >
                <span>{downloadSuccess ? "PDF Generated ✓" : "Download PDF"}</span>
                <span>↓</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full accent-gradient text-bg font-sans font-medium hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
