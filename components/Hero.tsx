'use client';

import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';

interface HeroProps {
  onSeeWorks: () => void;
  onReachOut: () => void;
}

const ROLES = ["Creative", "Fullstack", "Founder", "Scholar"];
const HLS_SOURCE = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function Hero({ onSeeWorks, onReachOut }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroContainerRef = useRef<HTMLDivElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // HLS Video Initialization
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        autoStartLoad: true,
        enableWorker: true,
      });
      hls.loadSource(HLS_SOURCE);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          // Autoplay policy fallback
        });
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SOURCE;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // Cycling roles every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.0, stagger: 0.1 },
        "-=0.8"
      );
    }, heroContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroContainerRef}
      className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-bg text-center px-4 pt-32 pb-12 select-none"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 filter brightness-90 contrast-105"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Subtle radial vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-bg/40 to-bg" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
      </div>

      {/* Spacer to balance vertical alignment */}
      <div className="w-full h-8" />

      {/* Hero Content (centered, z-10) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center my-auto">
        {/* Eyebrow */}
        <div className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8 font-mono">
          COLLECTION &apos;26
        </div>

        {/* Name */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Mohammed Yusuf
        </h1>

        {/* Role line (Hidden) */}
        <p id="hero-role-line" className="hidden blur-in text-lg sm:text-xl md:text-2xl text-text-primary/90 mb-4 font-normal items-center justify-center flex-wrap gap-x-2">
          <span>A</span>
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block text-2xl sm:text-3xl md:text-4xl text-white font-medium"
          >
            {ROLES[roleIndex]}
          </span>
          <span>lives in Chicago.</span>
        </p>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-12 leading-relaxed">
          Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex items-center gap-4 flex-wrap justify-center">
          {/* "See Works": Solid button */}
          <div className="relative group p-[2px] rounded-full">
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <button
              id="hero-see-works-btn"
              onClick={onSeeWorks}
              className="relative rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg font-medium transition-all duration-300 hover:scale-105 group-hover:bg-bg group-hover:text-text-primary focus:outline-none flex items-center gap-2"
            >
              <span>See Works</span>
              <span className="text-xs">↓</span>
            </button>
          </div>

          {/* "Reach out...": Outlined button */}
          <div className="relative group p-[2px] rounded-full">
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <button
              id="hero-reach-out-btn"
              onClick={onReachOut}
              className="relative rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary font-medium transition-all duration-300 hover:scale-105 group-hover:border-transparent focus:outline-none flex items-center gap-1.5"
            >
              <span>Reach out...</span>
              <span className="text-xs">↗</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Bottom-center) */}
      <div
        onClick={onSeeWorks}
        className="relative z-10 flex flex-col items-center gap-3 cursor-pointer group pt-8 select-none"
      >
        <span className="text-xs text-muted uppercase tracking-[0.2em] font-mono group-hover:text-text-primary transition-colors">
          SCROLL
        </span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="w-full h-full bg-accent animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
