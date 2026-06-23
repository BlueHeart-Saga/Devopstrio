"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Landmark, HeartPulse, ShoppingBag, Factory,
  Radio, GraduationCap, Building2
} from "lucide-react";

const industries = [
  { icon: Landmark, name: "Banking & Finance", projects: "300+ projects", color: "blue" },
  { icon: HeartPulse, name: "Healthcare & Life Sciences", projects: "150+ projects", color: "green" },
  { icon: ShoppingBag, name: "Retail & E-Commerce", projects: "200+ projects", color: "orange" },
  { icon: Factory, name: "Manufacturing", projects: "120+ projects", color: "yellow" },
  { icon: Radio, name: "Telecommunications", projects: "90+ projects", color: "violet" },
  { icon: GraduationCap, name: "Education", projects: "80+ projects", color: "teal" },
  { icon: Building2, name: "Government & Public Sector", projects: "60+ projects", color: "red" },
];

const colorMap: Record<string, string> = {
  blue:   "text-blue-400 bg-blue-500/10 border-blue-500/20 hover:border-blue-500/50",
  green:  "text-green-400 bg-green-500/10 border-green-500/20 hover:border-green-500/50",
  orange: "text-orange-400 bg-orange-500/10 border-orange-500/20 hover:border-orange-500/50",
  yellow: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20 hover:border-yellow-500/50",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20 hover:border-violet-500/50",
  teal:   "text-teal-400 bg-teal-500/10 border-teal-500/20 hover:border-teal-500/50",
  red:    "text-[#FF1744] bg-red-500/10 border-red-500/20 hover:border-red-500/50",
};

const partners = ["Microsoft", "AWS", "Google Cloud", "Oracle", "ServiceNow"];

export const IndustriesTrust = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute -left-40 bottom-0 w-96 h-96 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Industries */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
            >
              Industries We Serve
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white"
            >
              Industries We <span className="text-[#FF1744]">Support</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`group flex flex-col items-center text-center gap-3 p-6 border rounded-2xl bg-zinc-900/30 transition-all duration-300 cursor-default ${colorMap[ind.color]}`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${colorMap[ind.color]}`}>
                  <ind.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{ind.name}</p>
                  <p className="text-zinc-600 text-xs font-mono mt-1">{ind.projects}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strategic partnerships */}
        <div>
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
            >
              Strategic Technology Partnerships
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Client Trust & <span className="text-[#FF1744]">Recognition</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="px-8 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-zinc-300 font-semibold text-sm hover:border-red-500/30 hover:text-white transition-all duration-300"
              >
                {p}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            {["Cloud Certifications", "Security Standards", "Engineering Excellence", "Quality Assurance"].map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 px-4 py-3 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-[#FF1744] shrink-0" />
                <span className="text-zinc-400 text-sm">{cert}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
