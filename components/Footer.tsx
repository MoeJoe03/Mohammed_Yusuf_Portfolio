'use client';

import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';

const HLS_SOURCE = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  // Background HLS Video (flipped vertically scale-y-[-1], heavier overlay bg-black/60)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ autoStartLoad: true, enableWorker: true });
      hls.loadSource(HLS_SOURCE);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SOURCE;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, []);

  // GSAP Marquee animation: xPercent: -50, duration 40, ease: "none", repeat: -1
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const tween = gsap.to(marquee, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("myusufjogee@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2400);
    window.open("https://wa.me/27645808094", "_blank");
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("064 580 8094");
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2400);
    window.open("https://wa.me/27645808094", "_blank");
  };

  const contactLinks = [
    { label: "WhatsApp", href: "https://wa.me/27645808094" },
    { label: "Email", href: "https://wa.me/27645808094" },
  ];

  return (
    <footer id="contact" className="relative bg-bg pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden text-text-primary">
      {/* Background Video flipped vertically (scale-y-[-1]) with heavy overlay bg-black/60 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] filter brightness-50"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        {/* Top fade gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center">
        {/* Contact Eyebrow & Headline */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke inline-block" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-mono">
              Get in Touch
            </span>
            <span className="w-8 h-px bg-stroke inline-block" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display italic text-text-primary tracking-tight mb-6">
            Let&apos;s build something <br className="hidden sm:inline" />
            <span className="text-white">memorable together.</span>
          </h2>

          <p className="text-sm md:text-base text-muted max-w-md mx-auto leading-relaxed mb-8">
            Currently accepting commissions for select product architectures, brand identities, and spatial web systems.
          </p>

          {/* CTA Contact Options: Email and WhatsApp below */}
          <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
            {/* CTA Email button with gradient hover border ring */}
            <div className="relative group p-[2px] rounded-full w-full sm:w-auto">
              <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[0.5px]" />
              <button
                id="footer-email-btn"
                onClick={handleCopyEmail}
                className="relative w-full sm:w-auto px-7 sm:px-10 py-4 sm:py-4.5 rounded-full bg-surface border border-stroke text-sm sm:text-base font-medium text-text-primary hover:text-white flex items-center justify-between sm:justify-center gap-3 transition-all duration-300 group-hover:border-transparent group-hover:scale-105 shadow-xl"
              >
                <span className="font-mono text-xs text-muted">✉</span>
                <span className="truncate">myusufjogee@gmail.com</span>
                <span className="text-xs font-mono text-accent shrink-0">
                  {emailCopied ? "Copied! ✓" : "↗"}
                </span>
              </button>
            </div>

            {/* WhatsApp option below email: 064 580 8094 */}
            <div className="relative group p-[2px] rounded-full w-full sm:w-auto">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/80 via-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[0.5px]" />
              <button
                id="footer-whatsapp-btn"
                onClick={handleCopyPhone}
                className="relative w-full sm:w-auto px-7 sm:px-10 py-3.5 sm:py-4 rounded-full bg-surface/90 border border-stroke text-sm sm:text-base font-medium text-text-primary hover:text-white flex items-center justify-between sm:justify-center gap-3 transition-all duration-300 group-hover:border-transparent group-hover:scale-105 shadow-lg"
              >
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="font-mono text-xs text-emerald-400 tracking-wider">WhatsApp</span>
                </span>
                <span className="font-mono font-medium tracking-wide">064 580 8094</span>
                <span className="text-xs font-mono text-emerald-400 shrink-0">
                  {phoneCopied ? "Copied & Opening... ✓" : "↗"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* GSAP Marquee: "BUILDING THE FUTURE • " repeated 10x */}
      <div className="relative z-10 w-full overflow-hidden py-10 my-4 select-none border-y border-stroke/20">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap will-change-transform"
          style={{ width: "200%" }}
        >
          <div className="flex shrink-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-4xl sm:text-6xl md:text-8xl font-display uppercase tracking-widest text-text-primary/10 hover:text-text-primary/30 transition-colors mx-6 font-bold"
              >
                BUILDING THE FUTURE •
              </span>
            ))}
          </div>
          <div className="flex shrink-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={`second-${i}`}
                className="text-4xl sm:text-6xl md:text-8xl font-display uppercase tracking-widest text-text-primary/10 hover:text-text-primary/30 transition-colors mx-6 font-bold"
              >
                BUILDING THE FUTURE •
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted font-mono">
        {/* Status indicator: Green pulsing dot + "Available for projects" */}
        <div className="flex items-center gap-3 bg-surface/40 border border-stroke px-4 py-2 rounded-full backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-text-primary/90 text-xs">Available for projects</span>
          <span className="text-muted/60 text-[10px]">Q1/Q2 2026</span>
        </div>

        {/* Contact links (WhatsApp and Email) */}
        <div className="flex items-center gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "WhatsApp" ? "_blank" : undefined}
              rel={link.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="hover:text-text-primary transition-colors underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-muted/60 text-[11px]">
          © {new Date().getFullYear()} Mohammed Yusuf. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
