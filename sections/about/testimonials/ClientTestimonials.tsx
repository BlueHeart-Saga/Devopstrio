"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "Cloud Engineering", "DevOps", "Data & AI", "Cybersecurity", "Software Engineering"];

const testimonials = [
  {
    category: "Cloud Engineering",
    quote: "Devopstrio provided a structured cloud transformation roadmap that helped us migrate critical workloads with minimal disruption. Their Azure expertise and follow-the-sun support model were outstanding.",
    author: "Enterprise Technology Leader",
    role: "VP of Infrastructure",
    company: "Financial Services Group",
    outcome: "40% reduction in cloud costs",
    initials: "ET",
    color: "blue",
  },
  {
    category: "DevOps",
    quote: "Their DevOps specialists introduced automation and platform engineering practices that significantly improved our delivery speed. We went from monthly releases to multiple deploys per day.",
    author: "Head of Engineering",
    role: "Head of Engineering",
    company: "Global Logistics Company",
    outcome: "3× faster release cycles",
    initials: "HE",
    color: "orange",
  },
  {
    category: "Data & AI",
    quote: "The team successfully built a scalable data platform that accelerated decision-making and improved analytics capabilities across our entire organisation. The AI-driven insights have been transformative.",
    author: "Chief Data Officer",
    role: "Chief Data Officer",
    company: "Healthcare Network",
    outcome: "60% faster reporting",
    initials: "CD",
    color: "violet",
  },
  {
    category: "Cybersecurity",
    quote: "Devopstrio strengthened our security posture while maintaining operational efficiency across cloud environments. Their DevSecOps approach gave us confidence in our compliance readiness.",
    author: "Security Director",
    role: "Director of Cybersecurity",
    company: "Insurance Enterprise",
    outcome: "Zero critical incidents post-engagement",
    initials: "SD",
    color: "green",
  },
  {
    category: "Software Engineering",
    quote: "The quality of engineers and the speed of delivery was exceptional. They built our SaaS platform from the ground up and delivered on time and on budget — something we didn't think was possible.",
    author: "Chief Technology Officer",
    role: "CTO",
    company: "SaaS Startup",
    outcome: "Platform launched in 6 months",
    initials: "CT",
    color: "red",
  },
  {
    category: "Cloud Engineering",
    quote: "We were struggling with multi-cloud complexity and cost overruns. Devopstrio's FinOps practice helped us get visibility and control over our cloud spend within weeks.",
    author: "Cloud Operations Lead",
    role: "Cloud Operations Lead",
    company: "E-Commerce Platform",
    outcome: "35% cloud spend optimised",
    initials: "CO",
    color: "blue",
  },
];

const colorMap: Record<string, { border: string; badge: string; glow: string }> = {
  blue: { border: "border-blue-500/30", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", glow: "from-blue-500/8" },
  orange: { border: "border-orange-500/30", badge: "bg-orange-500/10 text-orange-400 border-orange-500/20", glow: "from-orange-500/8" },
  violet: { border: "border-violet-500/30", badge: "bg-violet-500/10 text-violet-400 border-violet-500/20", glow: "from-violet-500/8" },
  green: { border: "border-green-500/30", badge: "bg-green-500/10 text-green-400 border-green-500/20", glow: "from-green-500/8" },
  red: { border: "border-red-500/30", badge: "bg-red-500/10 text-red-400 border-red-500/20", glow: "from-red-500/8" },
};

export const ClientTestimonials = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? testimonials : testimonials.filter(t => t.category === active);

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Words From Our <span className="text-[#FF1744]">Clients</span>
          </motion.h2>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-[#FF1744] text-white shadow-[0_0_12px_rgba(255,23,68,0.4)]"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((t, idx) => {
              const c = colorMap[t.color];
              return (
                <motion.div
                  key={`${t.author}-${t.category}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={`group relative bg-zinc-900/40 border ${c.border} rounded-2xl p-7 overflow-hidden hover:bg-zinc-900/70 transition-all duration-300`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-xs font-mono px-3 py-1 rounded-full border ${c.badge}`}>
                        {t.category}
                      </span>
                      <Quote className="w-6 h-6 text-zinc-700" />
                    </div>

                    <p className="text-zinc-300 leading-relaxed mb-6 text-sm italic">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm font-black text-white shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{t.role}</p>
                        <p className="text-zinc-500 text-xs">{t.company}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-800/60">
                      <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-1">Key Outcome</p>
                      <p className="text-sm font-semibold text-white">{t.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
