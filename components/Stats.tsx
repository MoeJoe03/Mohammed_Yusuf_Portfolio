'use client';

import React from 'react';
import { motion } from 'motion/react';
import { STATS } from '@/lib/data';

export default function Stats() {
  return (
    <section id="stats" className="bg-bg py-16 md:py-24 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stroke/40 border-y border-stroke/40"
        >
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`py-8 md:py-12 ${
                idx === 0
                  ? 'md:pr-10'
                  : idx === 1
                  ? 'md:px-10'
                  : 'md:pl-10'
              } flex flex-col justify-between`}
            >
              <div className="font-display italic text-6xl md:text-7xl lg:text-8xl text-text-primary tracking-tight leading-none mb-4">
                {stat.value}
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-text-primary mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-xs">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
