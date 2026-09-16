'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Works from '@/components/Works';
import Services from '@/components/Services';
import Explorations from '@/components/Explorations';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';
import ResumeModal from '@/components/ResumeModal';
import LightboxModal from '@/components/LightboxModal';
import { Project, ExplorationItem } from '@/lib/data';

// Toggles for optional sections (hidden until requested to unhide)
const SHOW_EXPLORATIONS = false;
const SHOW_STATS = false;
const SHOW_RESUME = false;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedExploration, setSelectedExploration] = useState<ExplorationItem | null>(null);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const sections = ['hero', 'work', 'services', ...(SHOW_EXPLORATIONS ? ['explorations'] : []), ...(SHOW_STATS ? ['stats'] : []), 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-bg text-text-primary selection:bg-white/20 selection:text-white relative">
      {/* Loading Screen Overlay */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Floating Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onSeeWorks={() => handleNavigate('work')}
        onReachOut={() => window.open("https://wa.me/27645808094", "_blank")}
      />

      {/* Selected Works (Bento Grid) */}
      <Works
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Services */}
      <Services />

      {/* Explorations (Parallax Gallery) - Hidden until requested to unhide */}
      {SHOW_EXPLORATIONS && (
        <Explorations
          onOpenLightbox={(item) => setSelectedExploration(item)}
        />
      )}

      {/* Stats - Hidden until requested to unhide */}
      {SHOW_STATS && <Stats />}

      {/* Contact & Footer */}
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

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedExploration}
        onClose={() => setSelectedExploration(null)}
      />
    </main>
  );
}
