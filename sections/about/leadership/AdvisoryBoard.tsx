"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const advisors = [
  {
    initials: "EA",
    name: "Enterprise Strategy Advisor",
    background: "Former CTO — Global Technology Group",
    expertise: "Enterprise Strategy · Digital Transformation",
    experience: "20+ Years",
    color: "blue",
  },
  {
    initials: "CA",
    name: "Cloud Transformation Advisor",
    background: "Former VP Engineering — Cloud Platform Firm",
    expertise: "Cloud Architecture · Multi-cloud Strategy",
    experience: "18+ Years",
    color: "orange",
  },
  {
    initials: "AA",
    name: "AI & Data Advisor",
    background: "Chief Data Scientist — Fortune 100 Enterprise",
    expertise: "AI Innovation · Machine Learning · DataOps",
    experience: "15+ Years",
    color: "violet",
  },
  {
    initials: "SA",
    name: "Cybersecurity Advisor",
    background: "Former CISO — Financial Services Group",
    expertise: "Cybersecurity Governance · Zero Trust",
    experience: "22+ Years",
    color: "green",
  },
];

const areaChips = [
  "Enterprise Strategy", "Cloud Transformation", "AI & Data Innovation",
  "Cybersecurity Governance", "Platform Engineering", "Digital Modernization"
];

const colorMap: Record<string, { avatar: string; chip: string; border: string }> = {
  blue:   { avatar: "from-blue-500 to-blue-700 ring-blue-500/20",   chip: "bg-blue-500/10 text-blue-400 border-blue-500/20",   border: "hover:border-blue-500/30" },
  orange: { avatar: "from-orange-500 to-orange-700 ring-orange-500/20", chip: "bg-orange-500/10 text-orange-400 border-orange-500/20", border: "hover:border-orange-500/30" },
  violet: { avatar: "from-violet-500 to-violet-700 ring-violet-500/20", chip: "bg-violet-500/10 text-violet-400 border-violet-500/20", border: "hover:border-violet-500/30" },
  green:  { avatar: "from-green-500 to-green-700 ring-green-500/20",  chip: "bg-green-500/10 text-green-400 border-green-500/20",  border: "hover:border-green-500/30" },
};

export const AdvisoryBoard = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute -right-40 top-0 w-96 h-96 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: intro */}
          <div className="lg:sticky lg:top-24">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
            >
              Advisory Board
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
            >
              Industry Experts.
              <br />
              <span className="text-[#FF1744]">Strategic Advisors.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg leading-relaxed mb-8"
            >
              Our advisors bring decades of experience across cloud computing, enterprise architecture, cybersecurity, AI, and global business operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest mb-4">Areas of Expertise</p>
              <div className="flex flex-wrap gap-2">
                {areaChips.map((chip, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-full hover:border-red-500/30 hover:text-zinc-300 transition-colors">
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: advisor cards */}
          <div className="space-y-4">
            {advisors.map((advisor, idx) => {
              const c = colorMap[advisor.color];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`flex gap-5 items-center bg-zinc-900/40 border border-zinc-800 ${c.border} rounded-2xl p-6 transition-all duration-300`}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.avatar} ring-2 flex items-center justify-center text-lg font-black text-white shrink-0`}>
                    {advisor.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div>
                        <h3 className="text-white font-bold text-base">{advisor.name}</h3>
                        <p className="text-zinc-500 text-sm mt-0.5">{advisor.background}</p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs text-zinc-500 font-mono">{advisor.experience}</span>
                      </div>
                    </div>
                    <span className={`inline-block mt-3 text-xs px-3 py-1 rounded-full border ${c.chip}`}>
                      {advisor.expertise}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
