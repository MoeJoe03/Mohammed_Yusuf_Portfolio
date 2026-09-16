'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '@/lib/data';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-stroke/60 bg-surface/80 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                {project.category}
              </span>
              <span className="text-stroke">•</span>
              <span className="text-xs font-mono text-text-primary/70">{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-bg border border-stroke flex items-center justify-center text-text-primary hover:text-white hover:border-white/40 transition-colors focus:outline-none"
              aria-label="Close Project Details"
            >
              ✕
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Title & Subtitle */}
            <div>
              <h2 className="text-3xl sm:text-5xl font-display italic text-text-primary mb-3">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-text-primary/80">
                {project.subtitle}
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-stroke">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.modalImage || project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 halftone-overlay opacity-10 pointer-events-none" />
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-bg border border-stroke/60 text-xs font-mono">
              <div>
                <span className="text-muted block mb-1">CLIENT</span>
                <span className="text-text-primary font-medium">{project.client}</span>
              </div>
              <div>
                <span className="text-muted block mb-1">ROLE</span>
                <span className="text-text-primary font-medium">{project.role}</span>
              </div>
              <div>
                <span className="text-muted block mb-1">TIMELINE</span>
                <span className="text-text-primary font-medium">{project.year}</span>
              </div>
              <div>
                <span className="text-muted block mb-1">DELIVERABLES</span>
                <span className="text-text-primary font-medium">
                  {project.deliverables ? "Production Concept" : `${project.tags.length} Key Milestones`}
                </span>
              </div>
            </div>

            {/* Narrative Overview */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
                Executive Summary
              </h4>
              <p className="text-sm sm:text-base text-text-primary/90 leading-relaxed">
                {project.description}
              </p>
              {project.deliverables && (
                <div className="pt-1">
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2">
                    Deliverable
                  </h4>
                  <p className="text-sm text-text-primary/90 leading-relaxed bg-bg border border-stroke/60 rounded-xl p-4 font-normal whitespace-pre-line">
                    {project.deliverables}
                  </p>
                </div>
              )}
              {project.detailedDescription && (
                <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
                  {project.detailedDescription}
                </p>
              )}
            </div>

            {/* Tags / Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-3">
                Tech Stack &amp; Disciplines
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full border border-stroke bg-bg text-text-primary/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-6 border-t border-stroke/60 bg-surface flex justify-between items-center text-xs font-mono">
            <span className="text-muted">Mohammed Yusuf Archive</span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full accent-gradient text-bg font-sans font-medium hover:opacity-90 transition-opacity"
            >
              Close Project
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
