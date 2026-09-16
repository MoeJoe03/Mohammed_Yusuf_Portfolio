'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, ServiceItem } from '@/lib/data';
import { CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleInquire = (serviceTitle: string) => {
    setSelectedService(null);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-bg py-16 md:py-24 text-text-primary border-t border-stroke/30 relative">
      <div id="journal" className="absolute -top-24 opacity-0 pointer-events-none" aria-hidden="true" />
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
                Capabilities &amp; Solutions
              </span>
            </div>
            <h2 id="services-heading" className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary">
              <span className="font-display italic">Services</span>
            </h2>
            <p className="text-sm md:text-base text-muted mt-3 max-w-lg leading-relaxed">
              Bespoke digital engineering, high-converting commerce platforms, native mobile applications, and scalable CMS architectures crafted to scale brands.
            </p>
          </div>

          {/* Desktop "Book a consultation" button */}
          <div className="hidden md:inline-flex">
            <div className="relative group p-[2px] rounded-full">
              <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <a
                href="#contact"
                className="relative rounded-full text-xs font-mono uppercase tracking-wider px-6 py-3 border border-stroke bg-surface hover:bg-bg text-text-primary transition-all duration-300 flex items-center gap-2 group-hover:border-transparent focus:outline-none"
              >
                <span>Book a consultation</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 4 services displayed as horizontal pills matching the site's design */}
        <div className="flex flex-col gap-4">
          {SERVICES.map((service, index) => {
            return (
              <motion.article
                key={service.id}
                id={`service-item-${service.id}`}
                onClick={() => setSelectedService(service)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 p-4 sm:p-5 rounded-[32px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke hover:border-stroke/80 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-black/20"
              >
                {/* Left: Number, Thumbnail & Title */}
                <div className="flex items-center gap-3.5 sm:gap-6 min-w-0">
                  {/* Number Badge */}
                  <span className="text-xs font-mono text-muted/60 pl-2 shrink-0 group-hover:text-text-primary transition-colors hidden xs:inline-block">
                    {service.number}
                  </span>

                  {/* Thumbnail */}
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border border-stroke/60">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>

                  {/* Title & Category */}
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-muted group-hover:text-text-primary/70 transition-colors">
                      {service.category}
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-text-primary group-hover:text-white transition-colors truncate font-sans">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Scope & Interactive Arrow */}
                <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-6 shrink-0 px-2 sm:px-4 sm:pr-4 border-t sm:border-t-0 border-stroke/30 pt-3 sm:pt-0">
                  <div className="flex items-center gap-2 sm:gap-4 text-xs text-muted font-mono">
                    <span className="bg-bg/60 border border-stroke/70 px-2.5 py-1 rounded-full text-[11px] text-text-primary/80 hidden md:inline-block">
                      {service.scope}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-stroke flex items-center justify-center text-xs text-muted group-hover:text-text-primary group-hover:border-white/30 group-hover:bg-stroke/40 transition-all duration-300">
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Mobile Consultation Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="#contact"
            className="rounded-full text-xs font-mono uppercase tracking-wider px-6 py-3 border border-stroke bg-surface hover:bg-bg text-text-primary transition-all duration-300 flex items-center gap-2"
          >
            <span>Book a consultation</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-2xl bg-surface border border-stroke rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-bg border border-stroke flex items-center justify-center text-text-primary hover:text-white hover:border-white/30 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>

              {/* Eyebrow & Badges */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-muted mb-3 uppercase tracking-wider">
                <span className="text-text-primary/90 font-medium">{selectedService.category}</span>
                <span>•</span>
                <span>{selectedService.scope}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-display italic text-text-primary mb-5 leading-tight">
                {selectedService.title}
              </h2>

              {/* Image Preview */}
              <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-stroke relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent" />
              </div>

              {/* Description */}
              <div className="space-y-4 mb-6 text-text-primary/90 text-sm sm:text-base leading-relaxed">
                <p className="text-base sm:text-lg text-white font-normal">
                  {selectedService.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="mb-6 p-5 rounded-2xl bg-bg/70 border border-stroke/70">
                <div className="flex items-center gap-2 text-xs font-mono text-muted uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#89AACC]" />
                  <span>Key Deliverables &amp; Scope</span>
                </div>
                <div className="space-y-2.5">
                  {selectedService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-primary/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="mb-8">
                <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-2.5">
                  Technologies &amp; Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedService.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-surface border border-stroke text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="pt-6 border-t border-stroke/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-stroke text-xs font-mono uppercase tracking-wider hover:bg-stroke/40 text-muted hover:text-text-primary transition-colors text-center"
                >
                  Close
                </button>

                <button
                  onClick={() => handleInquire(selectedService.title)}
                  className="w-full sm:w-auto relative group p-[1.5px] rounded-full overflow-hidden"
                >
                  <span className="absolute inset-0 accent-gradient animate-gradient-shift" />
                  <div className="relative px-6 py-2.5 rounded-full bg-white text-black text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2">
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
