"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cloud, GitBranch, AppWindow, Database, Shield, Cpu } from "lucide-react";

const architects = [
  {
    initials: "PA",
    name: "Principal Cloud Architect",
    specialization: "Cloud Architecture",
    icon: Cloud,
    certs: ["Azure Solutions Architect Expert", "AWS Solutions Architect Professional"],
    focus: "Multi-cloud architecture and cloud native design patterns for enterprise workloads.",
    color: "blue",
  },
  {
    initials: "PD",
    name: "Principal DevOps Architect",
    specialization: "DevOps & Platform Engineering",
    icon: GitBranch,
    certs: ["CKA — Kubernetes", "HashiCorp Terraform Associate"],
    focus: "GitOps, internal developer platforms, and CI/CD pipeline automation at scale.",
    color: "orange",
  },
  {
    initials: "PE",
    name: "Principal Application Architect",
    specialization: "Enterprise Applications",
    icon: AppWindow,
    certs: ["Microsoft Azure Developer", "Google Cloud Professional Developer"],
    focus: "Microservices, event-driven architectures, and SaaS platform design.",
    color: "violet",
  },
  {
    initials: "PD2",
    name: "Principal Data Architect",
    specialization: "Data Engineering",
    icon: Database,
    certs: ["Azure Data Engineer Associate", "Databricks Certified Associate"],
    focus: "Lakehouse architectures, real-time streaming pipelines, and BI platform design.",
    color: "green",
  },
  {
    initials: "PS",
    name: "Principal Security Architect",
    specialization: "Cybersecurity Architecture",
    icon: Shield,
    certs: ["CISSP", "Azure Security Engineer Associate"],
    focus: "Zero trust network design, DevSecOps integration, and cloud security posture management.",
    color: "teal",
  },
  {
    initials: "PI",
    name: "Principal AI Architect",
    specialization: "AI Infrastructure",
    icon: Cpu,
    certs: ["Azure AI Engineer Associate", "Google Professional ML Engineer"],
    focus: "LLM infrastructure, MLOps pipelines, and AI-powered platform engineering.",
    color: "red",
  },
];

const colorMap: Record<string, { avatar: string; icon: string; cert: string; border: string }> = {
  blue:   { avatar: "from-blue-500 to-blue-700",   icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",   cert: "text-blue-400 bg-blue-500/8 border-blue-500/15",   border: "hover:border-blue-500/40" },
  orange: { avatar: "from-orange-500 to-orange-700", icon: "text-orange-400 bg-orange-500/10 border-orange-500/20", cert: "text-orange-400 bg-orange-500/8 border-orange-500/15", border: "hover:border-orange-500/40" },
  violet: { avatar: "from-violet-500 to-violet-700", icon: "text-violet-400 bg-violet-500/10 border-violet-500/20", cert: "text-violet-400 bg-violet-500/8 border-violet-500/15", border: "hover:border-violet-500/40" },
  green:  { avatar: "from-green-500 to-green-700",  icon: "text-green-400 bg-green-500/10 border-green-500/20",  cert: "text-green-400 bg-green-500/8 border-green-500/15",  border: "hover:border-green-500/40" },
  teal:   { avatar: "from-teal-500 to-teal-700",   icon: "text-teal-400 bg-teal-500/10 border-teal-500/20",   cert: "text-teal-400 bg-teal-500/8 border-teal-500/15",   border: "hover:border-teal-500/40" },
  red:    { avatar: "from-red-500 to-red-700",     icon: "text-[#FF1744] bg-red-500/10 border-red-500/20",   cert: "text-red-400 bg-red-500/8 border-red-500/15",     border: "hover:border-red-500/40" },
};

export const PrincipalArchitects = () => {
  return (
    <section className="py-24 bg-[#111111] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(255,23,68,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
          >
            Principal Architects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Engineering Excellence{" "}
            <span className="text-[#FF1744]">at Scale</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Our principal architects design resilient, secure, and scalable technology ecosystems for enterprise organizations worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {architects.map((arch, idx) => {
            const c = colorMap[arch.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group relative bg-zinc-900/40 border border-zinc-800 ${c.border} rounded-2xl p-7 overflow-hidden transition-all duration-300`}
              >
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.avatar} flex items-center justify-center text-sm font-black text-white shrink-0`}>
                      {arch.initials}
                    </div>
                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${c.icon}`}>
                      <arch.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-base mb-0.5">{arch.name}</h3>
                  <p className="text-[#FF1744] text-xs font-medium mb-4">{arch.specialization}</p>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">{arch.focus}</p>

                  {/* Certs */}
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Certifications</p>
                    {arch.certs.map((cert, i) => (
                      <span key={i} className={`block text-xs px-3 py-1.5 rounded-lg border ${c.cert} font-mono`}>
                        ✓ {cert}
                      </span>
                    ))}
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
