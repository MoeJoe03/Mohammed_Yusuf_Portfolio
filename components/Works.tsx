'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { PROJECTS, Project } from '@/lib/data';

// Toggle to show/hide "View all work" buttons
const SHOW_VIEW_ALL_WORK = false;

interface WorksProps {
  onSelectProject: (project: Project) => void;
  onViewAll?: () => void;
}

export default function Works({ onSelectProject }: WorksProps) {
  return (
    <section id="work" className="bg-bg py-12 md:py-20 text-text-primary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke inline-block" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-mono">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-sm md:text-base text-muted mt-3 max-w-lg">
              A selection of projects I&apos;ve worked on, from concept to launch.
            </p>
          </div>

          {/* Desktop "View all work" button - hidden for now */}
          {SHOW_VIEW_ALL_WORK && (
            <div className="hidden md:inline-flex">
              <div className="relative group p-[2px] rounded-full">
                <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Link
                  href="/work"
                  className="relative rounded-full text-xs font-mono uppercase tracking-wider px-6 py-3 border border-stroke bg-surface hover:bg-bg text-text-primary transition-all duration-300 flex items-center gap-2 group-hover:border-transparent"
                >
                  <span>View all work</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          )}
        </motion.div>

        {/* Bento Grid: 12 cols, alternating spans 7 / 5 / 5 / 7 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className={`${project.colSpan} group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer min-h-[360px] sm:min-h-[420px] md:min-h-[460px] flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 hover:border-stroke/80`}
              >
                {/* Background image */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 contrast-105"
                  />
                  {/* Halftone overlay */}
                  <div
                    className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none halftone-overlay"
                  />
                  {/* Base dark gradient at bottom for default readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent" />
                </div>

                {/* Hover overlay: bg-bg/70 opacity-0 -> 1 + backdrop-blur-lg */}
                <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg z-10 flex flex-col justify-center items-center p-6 text-center">
                  {/* Hover label pill with animated gradient border and white bg */}
                  <div className="relative p-[1.5px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105">
                    <span className="absolute inset-0 accent-gradient animate-gradient-shift" />
                    <div className="relative px-6 py-2.5 rounded-full bg-white text-black text-sm md:text-base font-medium flex items-center gap-2">
                      <span className="font-sans text-neutral-800">View —</span>
                      <span className="font-display italic text-black font-semibold text-lg">
                        {project.title}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-text-primary/80 mt-4 max-w-sm line-clamp-2">
                    {project.subtitle}
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap justify-center">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-muted border border-white/10 rounded-full px-2.5 py-0.5 bg-black/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Normal State Card Content (Top tag & Bottom info) */}
                <div className="relative z-0 flex justify-between items-start">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-primary/70 bg-bg/60 backdrop-blur-sm border border-stroke px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-text-primary/70 bg-bg/60 backdrop-blur-sm border border-stroke px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>

                <div className="relative z-0">
                  <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-primary/80 mt-1.5 font-normal">
                    {project.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile "View all work" button - hidden for now */}
        {SHOW_VIEW_ALL_WORK && (
          <div className="mt-8 flex justify-center md:hidden">
            <Link
              href="/work"
              className="rounded-full text-xs font-mono uppercase tracking-wider px-6 py-3 border border-stroke bg-surface hover:bg-bg text-text-primary transition-all duration-300 flex items-center gap-2"
            >
              <span>View all work ({PROJECTS.length}+)</span>
              <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
