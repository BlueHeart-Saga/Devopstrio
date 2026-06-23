"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineEvents = [
  { year: "2019", title: "Company Founded", description: "Started with a vision to redefine engineering excellence." },
  { year: "2020", title: "Cloud Transformation", description: "Launched our cloud native services practice." },
  { year: "2021", title: "Global Expansion", description: "Opened offices in 3 new countries to support global delivery." },
  { year: "2022", title: "AI & Data Practice", description: "Established our dedicated AI innovation lab." },
  { year: "2023", title: "SaaS Portfolio", description: "Launched our first suite of internal SaaS products." },
  { year: "2024", title: "Engineering Excellence", description: "Introduced our global engineering standards program." },
  { year: "2025", title: "Tech Ecosystem", description: "Partnered with top tier cloud providers globally." },
  { year: "2026", title: "Next Phase", description: "Scaling our impact across the Fortune 500." },
];

export const JourneyTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="py-32 bg-[#0A0A0A] overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,23,68,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Our <span className="text-[#FF1744]">Journey</span>
        </motion.h2>
      </div>

      <div className="relative pl-6 md:pl-0">
        {/* Timeline line */}
        <div className="absolute top-[88px] left-0 w-full h-[2px] bg-zinc-800 hidden md:block">
          <div className="h-full bg-gradient-to-r from-red-600 via-red-500 to-transparent w-1/3" />
        </div>

        <motion.div 
          style={{ x: xTransform }}
          className="flex flex-col md:flex-row gap-12 md:gap-24 md:w-max md:px-[10vw]"
        >
          {timelineEvents.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative w-full md:w-[300px] flex flex-row md:flex-col items-start gap-6 md:gap-0"
            >
              {/* Year marker */}
              <div className="md:mb-12 flex flex-col items-center relative z-10 shrink-0">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-red-500 flex items-center justify-center text-red-500 font-bold shadow-[0_0_15px_rgba(255,23,68,0.3)]">
                  {item.year}
                </div>
                {/* Vertical line for mobile */}
                <div className="w-[2px] h-full bg-zinc-800 absolute top-16 md:hidden" />
              </div>

              {/* Content */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-6 rounded-2xl hover:border-red-500/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
