"use client";
import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  { year: "2019", title: "Company Founded", description: "Started with a vision to redefine engineering excellence across borders." },
  { year: "2020", title: "Cloud Transformation", description: "Launched our cloud native services practice, accelerating digital adoption." },
  { year: "2021", title: "Global Expansion", description: "Opened offices in 3 new countries to support rapid global delivery." },
  { year: "2022", title: "AI & Data Practice", description: "Established our dedicated AI innovation lab to pioneer machine learning models." },
  { year: "2023", title: "SaaS Portfolio", description: "Launched our first suite of internal SaaS products for enterprise use." },
  { year: "2024", title: "Engineering Excellence", description: "Introduced our global engineering standards program to unify code quality." },
  { year: "2025", title: "Tech Ecosystem", description: "Partnered with top tier cloud providers globally for seamless integrations." },
  { year: "2026", title: "Next Phase", description: "Scaling our impact across the Fortune 500 with unparalleled agility." },
];

export const JourneyTimeline = () => {
  return (
    <section className="py-32 bg-black overflow-hidden relative" id="timeline">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold tracking-[0.25em] uppercase text-red-600 mb-6 block"
        >
          Company History
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-4 uppercase"
        >
          Our <span className="text-red-600 font-light">Journey</span>
        </motion.h2>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-0">
        {/* Center vertical spine */}
        <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800/80 transform md:-translate-x-1/2" />

        <div className="flex flex-col gap-20">
          {timelineEvents.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Half width spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Center Node / Dot */}
                <div className="absolute left-[24px] md:left-1/2 transform -translate-x-1/2 w-[5px] h-[5px] bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)] z-10" />

                {/* Content Side */}
                <div className={`w-full pl-12 md:pl-0 md:w-1/2 flex flex-col relative ${isEven ? 'md:items-start md:pl-16' : 'md:items-end md:pr-16'}`}>
                  
                  {/* Horizontal connecting branch */}
                  <div className={`absolute top-[40px] w-12 h-[1px] bg-zinc-800 hidden md:block ${isEven ? 'left-0' : 'right-0'}`} />

                  {/* Year & Content Box Wrapper */}
                  <div className={`flex flex-col ${isEven ? 'items-start text-left' : 'md:items-end md:text-right items-start text-left'} w-full md:max-w-[420px]`}>
                    
                    {/* The Large Red Year */}
                    <div className={`flex items-center gap-6 mb-6 ${isEven ? 'flex-row' : 'md:flex-row-reverse flex-row'}`}>
                      <span className="text-6xl md:text-7xl font-black text-red-600 tracking-tighter leading-none drop-shadow-[0_2px_15px_rgba(220,38,38,0.15)]">
                        {item.year}
                      </span>
                      <div className="h-[1px] bg-zinc-800 w-16 md:w-24 hidden sm:block" />
                    </div>

                    {/* The Framed Box */}
                    <div className="border border-zinc-800/80 bg-[#0A0A0A]/80 backdrop-blur-md p-8 hover:border-red-600/30 transition-all duration-500 w-full relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h4 className="text-xl md:text-2xl text-zinc-100 font-light uppercase tracking-widest mb-4 relative z-10">
                        {item.title}
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed font-medium relative z-10">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

