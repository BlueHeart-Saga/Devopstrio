"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "cloud",
    label: "Cloud Platforms",
    tools: [
      { name: "Microsoft Azure", badge: "Primary", color: "blue" },
      { name: "Amazon Web Services", badge: "Primary", color: "orange" },
      { name: "Google Cloud Platform", badge: "Primary", color: "green" },
      { name: "Oracle Cloud Infrastructure", badge: "Partner", color: "red" },
    ],
  },
  {
    id: "platform",
    label: "Engineering Platforms",
    tools: [
      { name: "Kubernetes", badge: "Core", color: "blue" },
      { name: "Terraform", badge: "Core", color: "violet" },
      { name: "GitHub Actions", badge: "Core", color: "zinc" },
      { name: "Azure DevOps", badge: "Core", color: "blue" },
      { name: "Docker", badge: "Core", color: "blue" },
      { name: "ArgoCD", badge: "GitOps", color: "orange" },
    ],
  },
  {
    id: "dev",
    label: "Development Technologies",
    tools: [
      { name: "React", badge: "Frontend", color: "blue" },
      { name: "Next.js", badge: "Frontend", color: "zinc" },
      { name: "Python", badge: "Backend", color: "yellow" },
      { name: "FastAPI", badge: "Backend", color: "green" },
      { name: "Node.js", badge: "Backend", color: "green" },
      { name: "TypeScript", badge: "Language", color: "blue" },
    ],
  },
];

const badgeColors: Record<string, string> = {
  blue:   "text-blue-400 bg-blue-500/10 border-blue-500/20",
  orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  green:  "text-green-400 bg-green-500/10 border-green-500/20",
  red:    "text-red-400 bg-red-500/10 border-red-500/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  yellow: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  zinc:   "text-zinc-300 bg-zinc-800 border-zinc-700",
};

export const TechnologyExpertise = () => {
  const [active, setActive] = useState("cloud");
  const current = categories.find(c => c.id === active)!;

  return (
    <section className="py-24 bg-[#111111] border-t border-zinc-900 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
          >
            Technology Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            The Stack We <span className="text-[#FF1744]">Master</span>
          </motion.h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300 ${
                active === cat.id
                  ? "bg-red-500/10 border-red-500/40 text-white shadow-[0_0_15px_rgba(255,23,68,0.2)]"
                  : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tool grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {current.tools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col items-center gap-3 p-5 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 rounded-2xl text-center transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                  <span className="text-lg font-black text-white">{tool.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-tight mb-2">{tool.name}</p>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${badgeColors[tool.color]}`}>
                    {tool.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
