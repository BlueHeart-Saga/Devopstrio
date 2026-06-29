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
    <section className="py-32 bg-[#050505] overflow-hidden relative" id="timeline">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 mb-8 relative z-10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold tracking-[0.25em] uppercase text-rose-500 mb-6 block"
        >
          Company History
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-4 uppercase"
        >
          Our <span className="text-rose-500 font-light">Journey</span>
        </motion.h2>
      </div>

      <div className="relative w-full max-w-[100vw] mx-auto mt-10 lg:mt-20">
        {/* Horizontal scroll container with modern scrollbar */}
        <div className="flex overflow-x-auto items-center pb-24 pt-10 px-6 md:px-12 gap-8 md:gap-16 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-zinc-900/40 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-rose-500/80 cursor-grab active:cursor-grabbing">
          {timelineEvents.map((item, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 flex items-center group cursor-pointer"
            >
              {/* Large Year Text */}
              <div className="text-[100px] md:text-[180px] lg:text-[260px] font-black text-zinc-900 transition-colors duration-500 group-hover:text-rose-600 leading-[0.8] tracking-tighter select-none">
                {item.year}
              </div>
              
              {/* Expandable Content Container */}
              <div className="flex flex-col justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-0 opacity-0 group-hover:w-[280px] md:group-hover:w-[350px] group-hover:opacity-100 group-hover:ml-6 md:group-hover:ml-12 border-l border-transparent group-hover:border-zinc-800/80 group-hover:pl-6 md:group-hover:pl-10">
                <h3 className="text-xl md:text-3xl text-white font-bold mb-4 tracking-tight whitespace-nowrap">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed min-w-[250px]">
                  {item.description}
                </p>
                <div className="w-12 h-[2px] bg-rose-600 mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Subtle scroll hint gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

