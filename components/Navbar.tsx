'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Toggle to hide or unhide resume navigation tab
const SHOW_RESUME = false;

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
  onOpenResume?: () => void;
  isSubpage?: boolean;
}

export default function Navbar({ activeSection = 'hero', onNavigate, onOpenResume, isSubpage = false }: NavbarProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Work", id: "work" },
    { label: "Services", id: "services" },
    ...(SHOW_RESUME ? [{ label: "Resume", id: "resume" }] : []),
  ];

  const handleNavClick = (id: string) => {
    if (id === 'resume') {
      if (onOpenResume) onOpenResume();
      return;
    }

    if (isSubpage) {
      if (id === 'hero') {
        router.push('/');
      } else if (id === 'work') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (id === 'services') {
        router.push('/#services');
      } else if (onNavigate) {
        onNavigate(id);
      }
    } else {
      if (onNavigate) {
        onNavigate(id);
      }
    }
  };

  const handleLogoClick = () => {
    if (isSubpage) {
      router.push('/');
    } else if (onNavigate) {
      onNavigate('hero');
    }
  };

  const handleSayHiClick = () => {
    window.open("https://wa.me/27645808094", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <nav
        id="main-navbar"
        aria-label="Main Navigation"
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-2 py-2 transition-all duration-300 ${
          hasScrolled ? 'shadow-md shadow-black/30 bg-surface/95 border-white/15' : ''
        }`}
      >
        {/* 1. Logo */}
        <button
          id="nav-logo"
          onClick={handleLogoClick}
          className="group relative w-9 h-9 p-[1.5px] rounded-full transition-transform duration-300 hover:scale-110 focus:outline-none"
          title="Mohammed Yusuf Portfolio"
        >
          {/* Accent gradient border that reverses on hover */}
          <span className="absolute inset-0 rounded-full accent-gradient group-hover:[background:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)] transition-all duration-500" />
          <span className="relative flex items-center justify-center w-full h-full rounded-full bg-bg">
            <span className="font-display italic text-[13px] text-text-primary leading-none select-none">
              MY
            </span>
          </span>
        </button>

        {/* 2. Divider */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* 3. Nav links */}
        <div className="flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'text-text-primary bg-stroke/50 font-medium'
                    : 'text-muted hover:text-text-primary hover:bg-stroke/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* 5. "Say hi" button with gradient hover border behind */}
        <div className="relative group">
          {/* Hover accent gradient border behind (using absolute span with inset: -2px) */}
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[0.5px]" />
          <button
            id="nav-say-hi-btn"
            onClick={handleSayHiClick}
            className="relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 bg-surface backdrop-blur-md text-text-primary hover:text-white flex items-center gap-1.5 focus:outline-none transition-colors"
          >
            <span>Say hi</span>
            <span className="text-[13px] leading-none transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
