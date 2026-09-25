'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';
import ResumeModal from '@/components/ResumeModal';
import { ALL_PROJECTS, Project } from '@/lib/data';
import { LayoutGrid, ListFilter, ArrowUpRight, Sparkles } from 'lucide-react';

const SHOW_RESUME = false;

export default function AllWorkPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const filteredProjects = ALL_PROJECTS;

  return (
    <main className="min-h-screen bg-bg text-text-primary selection:bg-white/20 selection:text-white relative">
      {/* Floating Navbar */}
      <Navbar
        activeSection="work"
        isSubpage={true}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Page Content */}
      <div className="pt-28 md:pt-36 pb-20 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Back Link Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-text-primary transition-colors py-1 group"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke inline-block" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-mono">
              Complete Archive / 2024 — 2026
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-text-primary">
                All <span className="font-display italic">Selected Works</span>
              </h1>
              <p className="text-sm md:text-base text-muted mt-4 max-w-2xl leading-relaxed">
                A comprehensive archive of selected digital platforms, interactive 3D web experiences, bespoke e-commerce architectures, and high-performance design systems.
              </p>
            </div>

            {/* Quick Metrics Badge */}
            <div className="flex items-center gap-3 self-start lg:self-end bg-surface/80 border border-stroke rounded-2xl px-5 py-3.5 backdrop-blur-sm shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#89AACC]" />
                <span className="text-xs font-mono text-text-primary font-medium">
                  {ALL_PROJECTS.length} Documented Projects
                </span>
              </div>
              <span className="w-px h-4 bg-stroke" />
              <span className="text-xs font-mono text-muted">
                100% Production Grade
              </span>
            </div>
          </div>
        </motion.div>

        {/* Controls: Project Count & View Mode Switcher */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stroke/40">
          <div className="text-xs font-mono text-muted">
            <span>
              Showing <strong className="text-text-primary">{filteredProjects.length}</strong> projects
            </span>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-surface border border-stroke rounded-full">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                viewMode === 'grid'
                  ? 'bg-white/10 text-text-primary font-medium shadow-sm'
                  : 'text-muted hover:text-text-primary'
              }`}
              title="Grid view"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                viewMode === 'table'
                  ? 'bg-white/10 text-text-primary font-medium shadow-sm'
                  : 'text-muted hover:text-text-primary'
              }`}
              title="Index list view"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Index</span>
            </button>
          </div>
        </div>

        {/* GRID VIEW */}
        {viewMode === 'grid' && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer min-h-[420px] sm:min-h-[480px] flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 hover:border-stroke/90 shadow-lg"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 contrast-105"
                    />
                    {/* Halftone texture overlay */}
                    <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none halftone-overlay" />
                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-bg/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md z-10 flex flex-col justify-center items-center p-6 text-center">
                    {/* Hover pill button */}
                    <div className="relative p-[1.5px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105">
                      <span className="absolute inset-0 accent-gradient animate-gradient-shift" />
                      <div className="relative px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium flex items-center gap-2">
                        <span className="font-sans text-neutral-800">View —</span>
                        <span className="font-display italic text-black font-semibold text-lg">
                          {project.title}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-text-primary/85 mt-4 max-w-sm line-clamp-2">
                      {project.subtitle}
                    </p>

                    <div className="flex gap-2 mt-4 flex-wrap justify-center">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-muted border border-white/10 rounded-full px-2.5 py-0.5 bg-black/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Top Card Badges */}
                  <div className="relative z-20 flex justify-between items-start w-full">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-text-primary/80 bg-bg/70 backdrop-blur-sm border border-stroke px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="relative z-0 pt-20">
                    <div className="text-xs font-mono text-muted mb-1">
                      {project.client}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-primary/80 mt-1.5 font-normal line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* INDEX / TABLE VIEW */}
        {viewMode === 'table' && filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="border border-stroke rounded-3xl bg-surface/70 overflow-hidden backdrop-blur-sm shadow-xl"
          >
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-stroke text-xs font-mono text-muted uppercase tracking-wider">
              <div className="col-span-4">Project / Subtitle</div>
              <div className="col-span-3">Category</div>
              <div className="col-span-3">Client</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-stroke/60">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-5 hover:bg-white/[0.03] transition-colors cursor-pointer items-center"
                >
                  {/* Title & Subtitle */}
                  <div className="md:col-span-4">
                    <div className="flex items-center justify-between md:justify-start gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg font-display italic text-text-primary group-hover:text-white transition-colors">
                          {project.title}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline-block" />
                      </div>
                      <span className="md:hidden text-[11px] font-mono text-text-primary/70 border border-stroke rounded-full px-2 py-0.5">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-xs text-muted truncate max-w-sm mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Category */}
                  <div className="hidden md:block md:col-span-3 text-xs font-mono text-text-primary/80">
                    <span className="border border-stroke/80 bg-bg/50 px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Client & Tags Preview */}
                  <div className="md:col-span-3 text-xs text-muted">
                    <div className="text-text-primary/90 font-medium">
                      {project.client}
                    </div>
                    <div className="truncate text-[11px] font-mono text-muted/70 mt-0.5">
                      {project.tags.slice(0, 3).join(' • ')}
                    </div>
                  </div>

                  {/* Action Link & Visit Site */}
                  <div className="md:col-span-2 text-right flex justify-end items-center gap-2">
                    {(project.siteUrl || project.link) && (
                      <a
                        href={project.siteUrl || project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono border border-stroke hover:border-white text-muted hover:text-white bg-bg/60 hover:bg-white/10 transition-all"
                        title={`Visit ${project.title} live site`}
                      >
                        <span>Visit</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-stroke group-hover:border-white/30 group-hover:bg-white/10 transition-all text-xs text-muted group-hover:text-text-primary" title="View details">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Reusable Footer */}
      <Footer />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Modal - Hidden until requested to unhide */}
      {SHOW_RESUME && (
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      )}
    </main>
  );
}
