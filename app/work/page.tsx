'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';
import ResumeModal from '@/components/ResumeModal';
import { ALL_PROJECTS, Project } from '@/lib/data';
import { Search, LayoutGrid, ListFilter, ArrowUpRight, Sparkles, X } from 'lucide-react';

const SHOW_RESUME = false;

export default function AllWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(ALL_PROJECTS.map((p) => p.category)));
    return ['All', ...cats];
  }, []);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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

        {/* Filter & Control Bar */}
        <div className="mb-10 space-y-5">
          {/* Top Bar: Search Input & View Mode Switcher */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, technology, or client..."
                className="w-full pl-11 pr-10 py-3 rounded-full bg-surface border border-stroke text-sm text-text-primary placeholder:text-muted/60 focus:outline-none focus:border-stroke/80 focus:ring-1 focus:ring-white/20 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted hover:text-text-primary transition-colors"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center justify-end gap-1 p-1 bg-surface border border-stroke rounded-full self-end sm:self-auto shrink-0">
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

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const count =
                category === 'All'
                  ? ALL_PROJECTS.length
                  : ALL_PROJECTS.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative text-xs font-mono rounded-full px-4 py-2 whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? 'border-transparent text-white font-medium bg-stroke/60'
                      : 'border-stroke/60 text-muted hover:text-text-primary hover:border-stroke bg-surface/60'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full accent-gradient opacity-30 pointer-events-none" />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span>{category}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-muted'
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Info Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-muted mb-6 px-1">
          <span>
            Showing <strong className="text-text-primary">{filteredProjects.length}</strong> of{' '}
            {ALL_PROJECTS.length} projects
          </span>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-muted hover:text-text-primary underline underline-offset-4 transition-colors"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 border border-stroke rounded-3xl bg-surface/50 p-8">
            <div className="w-12 h-12 rounded-full border border-stroke flex items-center justify-center mx-auto mb-4 text-muted">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display italic text-text-primary mb-2">
              No matching projects found
            </h3>
            <p className="text-sm text-muted max-w-sm mx-auto mb-6">
              We couldn&apos;t find any case studies matching &ldquo;{searchQuery}&rdquo;. Try clearing your search query or selecting another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="rounded-full text-xs font-mono uppercase tracking-wider px-6 py-2.5 border border-stroke bg-surface hover:bg-bg text-text-primary transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

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
                  <div className="relative z-0 flex justify-between items-start">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-text-primary/80 bg-bg/70 backdrop-blur-sm border border-stroke px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-text-primary/80 bg-bg/70 backdrop-blur-sm border border-stroke px-3 py-1 rounded-full">
                      {project.year}
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
              <div className="col-span-1">Year</div>
              <div className="col-span-4">Project / Subtitle</div>
              <div className="col-span-3">Category</div>
              <div className="col-span-3">Client</div>
              <div className="col-span-1 text-right">View</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-stroke/60">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-5 hover:bg-white/[0.03] transition-colors cursor-pointer items-center"
                >
                  {/* Year */}
                  <div className="md:col-span-1 text-xs font-mono text-muted flex items-center justify-between md:justify-start">
                    <span>{project.year}</span>
                    <span className="md:hidden text-[11px] font-mono text-text-primary/70 border border-stroke rounded-full px-2 py-0.5">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-display italic text-text-primary group-hover:text-white transition-colors">
                        {project.title}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline-block" />
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

                  {/* Action Link */}
                  <div className="md:col-span-1 text-right flex justify-end">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-stroke group-hover:border-white/30 group-hover:bg-white/10 transition-all text-xs text-muted group-hover:text-text-primary">
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
