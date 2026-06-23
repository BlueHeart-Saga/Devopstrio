"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Technology Experts", value: "525+" },
  { label: "Global Locations", value: "4+" },
  { label: "Projects Delivered", value: "2500+" },
  { label: "Nationalities", value: "20+" },
  { label: "Learning Sessions", value: "100+" },
  { label: "Employee Satisfaction", value: "95%" },
];

export const LifeHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#000000]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,23,68,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(255,23,68,0.2)]">
              Life at Devopstrio
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
          >
            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#FF1744]">Innovation</span><br />
            Meets Opportunity
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Building world-class AI, Cloud, Data, and DevOps solutions while creating meaningful careers and lasting impact.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#open-positions" className="px-8 py-4 bg-[#FF1744] hover:bg-red-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(255,23,68,0.4)] hover:shadow-[0_0_30px_rgba(255,23,68,0.6)]">
              Explore Careers
            </a>
            <a href="#join-team" className="px-8 py-4 bg-zinc-900/50 hover:bg-zinc-800 text-white rounded-lg font-semibold transition-all duration-300 border border-zinc-800 hover:border-red-500/50 backdrop-blur-sm">
              Join Our Team
            </a>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 border-t border-zinc-800/50 pt-10"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#FF1744] transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
