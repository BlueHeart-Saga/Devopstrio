"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    tag: "FinOps · Cloud",
    title: "Cloud Cost Optimisation",
    challenge: "Escalating multi-cloud operational expenses with no visibility into spend patterns across 3 cloud providers.",
    solution: "Implemented a FinOps governance framework with automated tagging, rightsizing policies, and real-time cost dashboards.",
    outcome: "40% reduction in monthly cloud spending within 90 days.",
    metric: "40%",
    metricLabel: "cost saved",
    color: "blue",
  },
  {
    tag: "DevOps · Platform",
    title: "Platform Modernisation",
    challenge: "Slow quarterly release cycles, manual deployment processes, and frequent production incidents causing business disruption.",
    solution: "End-to-end DevOps transformation: GitOps pipelines, Kubernetes migration, and an internal developer platform.",
    outcome: "3× faster software delivery with 80% reduction in deployment-related incidents.",
    metric: "3×",
    metricLabel: "faster delivery",
    color: "orange",
  },
  {
    tag: "Security · Compliance",
    title: "Security Transformation",
    challenge: "Complex regulatory compliance requirements (ISO 27001, SOC 2) and growing cloud attack surface.",
    solution: "DevSecOps implementation, automated compliance scanning, zero-trust network architecture, and continuous monitoring.",
    outcome: "Achieved full compliance certification and reduced risk exposure significantly.",
    metric: "100%",
    metricLabel: "compliance achieved",
    color: "green",
  },
];

const colorMap: Record<string, { accent: string; metric: string; tag: string; border: string }> = {
  blue:   { accent: "bg-blue-500/10 border-blue-500/20 text-blue-400",   metric: "text-blue-300",   tag: "text-blue-400 bg-blue-500/10 border-blue-500/20",   border: "group-hover:border-blue-500/40" },
  orange: { accent: "bg-orange-500/10 border-orange-500/20 text-orange-400", metric: "text-orange-300", tag: "text-orange-400 bg-orange-500/10 border-orange-500/20", border: "group-hover:border-orange-500/40" },
  green:  { accent: "bg-green-500/10 border-green-500/20 text-green-400",  metric: "text-green-300",  tag: "text-green-400 bg-green-500/10 border-green-500/20",  border: "group-hover:border-green-500/40" },
};

export const CaseStudyHighlights = () => {
  const [active, setActive] = useState(0);
  const cs = caseStudies[active];
  const c = colorMap[cs.color];

  return (
    <section id="case-studies" className="py-24 bg-[#050505] border-t border-zinc-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_60%,rgba(255,23,68,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
          >
            Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
          >
            Case Study <span className="text-rose-500">Highlights</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tab list */}
          <div className="flex flex-row lg:flex-col gap-3 lg:w-72 shrink-0 overflow-x-auto lg:overflow-visible">
            {caseStudies.map((cs, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl border text-left transition-all duration-300 shrink-0 lg:shrink
                  ${active === idx
                    ? "bg-rose-500/10 border-rose-500/40 text-white"
                    : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"}`}
              >
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${active === idx ? "text-rose-400 bg-rose-500/10 border-rose-500/30" : "text-zinc-600 bg-zinc-800 border-zinc-700"}`}>
                  0{idx + 1}
                </span>
                <span className="font-semibold text-sm">{cs.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className={`group bg-zinc-900/40 border border-zinc-800 ${c.border} rounded-2xl overflow-hidden transition-colors duration-300`}
              >
                {/* Header */}
                <div className="p-8 border-b border-zinc-800/60 flex items-center justify-between">
                  <div>
                    <span className={`text-xs font-mono px-3 py-1 rounded-full border ${c.tag} mb-3 inline-block`}>
                      {cs.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{cs.title}</h3>
                  </div>
                  <div className="text-right shrink-0 ml-6">
                    <p className={`text-5xl font-black ${c.metric}`}>{cs.metric}</p>
                    <p className="text-zinc-600 text-xs font-mono mt-1">{cs.metricLabel}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: Target, label: "Challenge", text: cs.challenge },
                    { icon: Lightbulb, label: "Solution", text: cs.solution },
                    { icon: TrendingUp, label: "Outcome", text: cs.outcome },
                  ].map((block, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 mb-3">
                        <block.icon className="w-4 h-4 text-rose-500" />
                        <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">{block.label}</p>
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">{block.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
