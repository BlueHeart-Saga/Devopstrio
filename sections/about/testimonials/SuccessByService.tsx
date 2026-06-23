"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cloud, GitBranch, Cpu, Shield, Code2, Settings } from "lucide-react";

const areas = [
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Multi-cloud transformation, migration, modernisation, and cost optimisation across Azure, AWS, and Google Cloud.",
    metric: "40%", metricLabel: "avg cost reduction",
    clients: "120+ clients",
    color: "blue",
  },
  {
    icon: GitBranch,
    title: "DevOps & Automation",
    description: "CI/CD pipelines, GitOps, Infrastructure as Code, Kubernetes, and full platform engineering practice.",
    metric: "3×", metricLabel: "release velocity",
    clients: "90+ clients",
    color: "orange",
  },
  {
    icon: Cpu,
    title: "AI & Data Innovation",
    description: "Intelligent automation, real-time analytics, ML pipelines, and AI-powered product development.",
    metric: "60%", metricLabel: "faster insights",
    clients: "60+ clients",
    color: "violet",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Cloud security architecture, DevSecOps, compliance, governance, and resilience engineering.",
    metric: "100%", metricLabel: "compliance rate",
    clients: "45+ clients",
    color: "green",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Enterprise applications, SaaS platform development, API development, and legacy modernisation.",
    metric: "500+", metricLabel: "apps built",
    clients: "200+ clients",
    color: "red",
  },
  {
    icon: Settings,
    title: "Managed Services",
    description: "Continuous operations, 24×7 monitoring, incident management, and proactive infrastructure management.",
    metric: "99.9%", metricLabel: "uptime delivered",
    clients: "80+ clients",
    color: "teal",
  },
];

const colorMap: Record<string, { icon: string; metric: string; border: string; hover: string }> = {
  blue:   { icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",   metric: "text-blue-300",   border: "border-zinc-800", hover: "hover:border-blue-500/40" },
  orange: { icon: "text-orange-400 bg-orange-500/10 border-orange-500/20", metric: "text-orange-300", border: "border-zinc-800", hover: "hover:border-orange-500/40" },
  violet: { icon: "text-violet-400 bg-violet-500/10 border-violet-500/20", metric: "text-violet-300", border: "border-zinc-800", hover: "hover:border-violet-500/40" },
  green:  { icon: "text-green-400 bg-green-500/10 border-green-500/20",  metric: "text-green-300",  border: "border-zinc-800", hover: "hover:border-green-500/40" },
  red:    { icon: "text-red-400 bg-red-500/10 border-red-500/20",        metric: "text-[#FF1744]",  border: "border-zinc-800", hover: "hover:border-red-500/40" },
  teal:   { icon: "text-teal-400 bg-teal-500/10 border-teal-500/20",    metric: "text-teal-300",   border: "border-zinc-800", hover: "hover:border-teal-500/40" },
};

export const SuccessByService = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
          >
            Service Areas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Success by <span className="text-[#FF1744]">Service Area</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Consistent, measurable outcomes across every discipline we operate in.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area, idx) => {
            const c = colorMap[area.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className={`group bg-zinc-900/40 border ${c.border} ${c.hover} rounded-2xl p-7 transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${c.icon}`}>
                  <area.icon className="w-6 h-6" />
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{area.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{area.description}</p>

                <div className="flex items-end justify-between pt-5 border-t border-zinc-800/60">
                  <div>
                    <p className={`text-3xl font-black ${c.metric}`}>{area.metric}</p>
                    <p className="text-zinc-600 text-xs font-mono mt-0.5">{area.metricLabel}</p>
                  </div>
                  <span className="text-xs text-zinc-600 font-mono border border-zinc-800 px-2.5 py-1 rounded-full">
                    {area.clients}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
