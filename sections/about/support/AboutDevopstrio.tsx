"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  "AI & Data Innovation",
  "Cloud Engineering",
  "DevOps & Automation",
  "Cybersecurity",
  "Software Development",
  "Digital Transformation",
  "Data Engineering",
  "Managed Services",
  "QA & Testing",
  "IT Consulting",
];

export const AboutDevopstrio = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute -right-32 top-0 w-96 h-96 rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
            >
              About Devopstrio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Devopstrio <span className="text-[#FF1744]">Limited</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg leading-relaxed mb-8"
            >
              Founded in 2019 and headquartered in London, Devopstrio is a global technology consulting and engineering company helping enterprises modernise their platforms, accelerate innovation, and build resilient digital ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { label: "Founded", value: "2019" },
                { label: "HQ", value: "London, UK" },
                { label: "Experts", value: "525+" },
                { label: "Countries", value: "4+" },
              ].map((stat, i) => (
                <div key={i} className="px-5 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono">{stat.label}</p>
                  <p className="text-white font-bold text-lg">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: service list */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-zinc-500 text-sm font-mono uppercase tracking-widest mb-5"
            >
              Specialisations
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((svc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="flex items-center gap-3 px-4 py-3 bg-zinc-900/40 border border-zinc-800 rounded-lg hover:border-red-500/30 transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF1744] group-hover:shadow-[0_0_6px_rgba(255,23,68,0.8)] transition-shadow shrink-0" />
                  <span className="text-zinc-300 text-sm font-medium">{svc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
