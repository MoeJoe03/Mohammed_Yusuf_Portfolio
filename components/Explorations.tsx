'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPLORATIONS, ExplorationItem } from '@/lib/data';

interface ExplorationsProps {
  onOpenLightbox: (item: ExplorationItem) => void;
}

export default function Explorations({ onOpenLightbox }: ExplorationsProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinnedCenterRef = useRef<HTMLDivElement | null>(null);
  const col1Ref = useRef<HTMLDivElement | null>(null);
  const col2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const pinned = pinnedCenterRef.current;
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;

    if (!section || !pinned) return;

    const ctx = gsap.context(() => {
      // Pinning the center content using GSAP ScrollTrigger
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinned,
        pinSpacing: false,
      });

      // Parallax scroll on Column 1 and Column 2
      if (col1 && col2) {
        gsap.fromTo(
          col1,
          { y: 120 },
          {
            y: -140,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          col2,
          { y: -60 },
          {
            y: 180,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const col1Items = [EXPLORATIONS[0], EXPLORATIONS[2], EXPLORATIONS[4]];
  const col2Items = [EXPLORATIONS[1], EXPLORATIONS[3], EXPLORATIONS[5]];

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative min-h-[300vh] bg-bg overflow-clip select-none border-t border-stroke/30"
    >
      {/* Layer 1: Pinned Center (z-10) */}
      <div
        ref={pinnedCenterRef}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-center px-6 z-10 pointer-events-none"
      >
        <div className="max-w-xl mx-auto flex flex-col items-center pointer-events-auto bg-bg/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
          {/* Eyebrow */}
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-mono mb-4">
            Explorations
          </span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-text-primary tracking-tight mb-4">
            Visual <span className="font-display italic">playground</span>
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-muted max-w-md mx-auto mb-8 leading-relaxed">
            Generative sketches, procedural geometries, and unconstrained typography experiments crafted late at night.
          </p>

          {/* WhatsApp / Contact button */}
          <div className="relative group p-[2px] rounded-full">
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <a
              id="explorations-contact-btn"
              href="https://wa.me/27645808094"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider border border-stroke bg-surface hover:bg-bg text-text-primary transition-all duration-300 flex items-center gap-2 group-hover:border-transparent focus:outline-none"
            >
              <span>Chat on WhatsApp</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Layer 2: Parallax Columns (z-20, absolute layout covering the height) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex justify-center items-start pt-24 pb-48">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 gap-8 md:gap-40 items-start">
          {/* Column 1 */}
          <div ref={col1Ref} className="flex flex-col gap-32 sm:gap-48 items-center md:items-end">
            {col1Items.map((item) => (
              <div
                key={item.id}
                id={`exp-card-${item.id}`}
                onClick={() => onOpenLightbox(item)}
                className={`pointer-events-auto w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-2xl overflow-hidden border border-stroke bg-surface cursor-pointer group shadow-2xl transition-all duration-500 hover:scale-105 hover:border-white/40 ${item.rotation}`}
              >
                <div className="relative w-full h-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Halftone subtle texture */}
                  <div className="absolute inset-0 halftone-overlay opacity-15 pointer-events-none" />

                  {/* Card content */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex flex-col justify-end">
                    <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
                      {item.medium}
                    </span>
                    <h4 className="text-sm sm:text-base font-display italic text-text-primary group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                  </div>

                  {/* Expand icon pill */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    ⤢
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div ref={col2Ref} className="flex flex-col gap-32 sm:gap-48 items-center md:items-start pt-32 sm:pt-48">
            {col2Items.map((item) => (
              <div
                key={item.id}
                id={`exp-card-${item.id}`}
                onClick={() => onOpenLightbox(item)}
                className={`pointer-events-auto w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-2xl overflow-hidden border border-stroke bg-surface cursor-pointer group shadow-2xl transition-all duration-500 hover:scale-105 hover:border-white/40 ${item.rotation}`}
              >
                <div className="relative w-full h-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Halftone subtle texture */}
                  <div className="absolute inset-0 halftone-overlay opacity-15 pointer-events-none" />

                  {/* Card content */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex flex-col justify-end">
                    <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
                      {item.medium}
                    </span>
                    <h4 className="text-sm sm:text-base font-display italic text-text-primary group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                  </div>

                  {/* Expand icon pill */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    ⤢
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
