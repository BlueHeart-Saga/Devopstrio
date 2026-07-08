"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cloud, GitBranch, AppWindow, Database, Shield, Cpu } from "lucide-react";

import Link from "next/link";

const architects = [
  {
    initials: "PA",
    name: "Principal Cloud Architect",
    specialization: "Cloud Architecture",
    icon: Cloud,
    certs: ["Azure Solutions Architect Expert", "AWS Solutions Architect Professional"],
    focus: <>Multi-cloud architecture and cloud native design patterns for enterprise workloads under our <Link href="/services/cloud-services" className="text-blue-400 hover:underline font-bold">cloud services</Link> division.</>,
    color: "blue",
    image: "/assets/common/90361fed0bb781d7c86e451995b4dbce 1.png",
  },
  {
    initials: "PD",
    name: "Principal DevOps Architect",
    specialization: "DevOps & Platform Engineering",
    icon: GitBranch,
    certs: ["CKA — Kubernetes", "HashiCorp Terraform Associate"],
    focus: <>GitOps, internal developer platforms, and CI/CD pipeline automation at scale as part of <Link href="/services/devops-automation" className="text-orange-400 hover:underline font-bold">DevOps automation</Link>.</>,
    color: "orange",
    image: "/assets/common/945ab601f043c558e0a8162da2a1eb4c 1.png",
  },
  {
    initials: "PE",
    name: "Principal Application Architect",
    specialization: "Enterprise Applications",
    icon: AppWindow,
    certs: ["Microsoft Azure Developer", "Google Cloud Professional Developer"],
    focus: <>Microservices, event-driven architectures, and SaaS platform design within <Link href="/services/software-development" className="text-violet-450 hover:underline font-bold">software development</Link>.</>,
    color: "violet",
    image: "/assets/common/9d230407fdcdb1a78debc2abe0ff1925 1.png",
  },
  {
    initials: "PD2",
    name: "Principal Data Architect",
    specialization: "Data Engineering",
    icon: Database,
    certs: ["Azure Data Engineer Associate", "Databricks Certified Associate"],
    focus: <>Lakehouse architectures, real-time streaming pipelines, and BI platform design under <Link href="/services/data-engineering" className="text-green-455 hover:underline font-bold">data engineering</Link>.</>,
    color: "green",
    image: "/assets/common/9d91b93f83e6d4cd494ec13611b3e50e 1.png",
  },
  {
    initials: "PS",
    name: "Principal Security Architect",
    specialization: "Cybersecurity Architecture",
    icon: Shield,
    certs: ["CISSP", "Azure Security Engineer Associate"],
    focus: <>Zero trust network design, DevSecOps integration, and cloud security posture management via <Link href="/services/cybersecurity" className="text-teal-400 hover:underline font-bold">cybersecurity</Link>.</>,
    color: "teal",
    image: "/assets/common/b384eb0438c55e43c61e7595acc29638 1.png",
  },
  {
    initials: "PI",
    name: "Principal AI Architect",
    specialization: "AI Infrastructure",
    icon: Cpu,
    certs: ["Azure AI Engineer Associate", "Google Professional ML Engineer"],
    focus: <>LLM infrastructure, MLOps pipelines, and AI-powered platform engineering driven by <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline font-bold">AI & data innovation</Link>.</>,
    color: "red",
    image: "/assets/common/ddb20908c846f1426649343fea590cb7 1.png",
  },
];

const colorMap: Record<string, { avatar: string; icon: string; cert: string; border: string; shadow: string; glow: string }> = {
  blue: { 
    avatar: "from-blue-500 to-blue-700", 
    icon: "text-blue-400 bg-blue-500/10 border-blue-500/20", 
    cert: "text-blue-400 bg-blue-500/8 border-blue-500/15", 
    border: "hover:border-blue-500/40",
    shadow: "hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)]",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.06),transparent_60%)]"
  },
  orange: { 
    avatar: "from-orange-500 to-orange-700", 
    icon: "text-orange-400 bg-orange-500/10 border-orange-500/20", 
    cert: "text-orange-400 bg-orange-500/8 border-orange-500/15", 
    border: "hover:border-orange-500/40",
    shadow: "hover:shadow-[0_20px_40px_rgba(249,115,22,0.12)]",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.06),transparent_60%)]"
  },
  violet: { 
    avatar: "from-violet-500 to-violet-700", 
    icon: "text-violet-400 bg-violet-500/10 border-violet-500/20", 
    cert: "text-violet-400 bg-violet-500/8 border-violet-500/15", 
    border: "hover:border-violet-500/40",
    shadow: "hover:shadow-[0_20px_40px_rgba(139,92,246,0.12)]",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.06),transparent_60%)]"
  },
  green: { 
    avatar: "from-green-500 to-green-700", 
    icon: "text-green-400 bg-green-500/10 border-green-500/20", 
    cert: "text-green-400 bg-green-500/8 border-green-500/15", 
    border: "hover:border-green-500/40",
    shadow: "hover:shadow-[0_20px_40px_rgba(34,197,94,0.12)]",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.06),transparent_60%)]"
  },
  teal: { 
    avatar: "from-teal-500 to-teal-700", 
    icon: "text-teal-400 bg-teal-500/10 border-teal-500/20", 
    cert: "text-teal-400 bg-teal-500/8 border-teal-500/15", 
    border: "hover:border-teal-500/40",
    shadow: "hover:shadow-[0_20px_40px_rgba(20,184,166,0.12)]",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.06),transparent_60%)]"
  },
  red: { 
    avatar: "from-red-500 to-red-700", 
    icon: "text-rose-500 bg-red-500/10 border-red-500/20", 
    cert: "text-red-400 bg-red-500/8 border-red-500/15", 
    border: "hover:border-red-500/40",
    shadow: "hover:shadow-[0_20px_40px_rgba(255,23,68,0.12)]",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(255,23,68,0.06),transparent_60%)]"
  },
};

export const PrincipalArchitects = () => {
  return (
    <section className="py-24 bg-[#030303] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:36px_36px]" />
      {/* Ambient background glows */}
      <div className="absolute -left-40 bottom-1/4 w-96 h-96 rounded-full bg-rose-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute -right-40 top-1/4 w-96 h-96 rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
          >
            Principal Architects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
          >
            Engineering Excellence <span className="text-rose-500">at Scale</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            Our principal architects design resilient, secure, and scalable technology ecosystems for enterprise organizations worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architects.map((arch, idx) => {
            const c = colorMap[arch.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative w-full h-[320px] md:h-[340px] rounded-[1.75rem] overflow-hidden border border-zinc-900 bg-[#0A0A0C] ${c.border} ${c.shadow} select-none transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Background Image */}
                <img
                  src={arch.image}
                  alt={arch.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out z-0 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/40 z-10" />

                {/* Ambient Color Glow Overlay */}
                <div className={`absolute inset-0 ${c.glow} pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-15`} />

                {/* Premium Glassic Blur Overlay on Hover (Sweeps from bottom-right) */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[6px] transition-all duration-700 ease-in-out z-20 pointer-events-none [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)]" />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-30">
                  {/* Top Row: Icon */}
                  <div className="flex justify-start items-center transform transition-transform duration-500 group-hover:-translate-y-0.5">
                    <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${c.icon}`}>
                      <arch.icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Bottom Area: Name, Specialization, Focus & Certs */}
                  <div className="text-left pt-8 transform transition-transform duration-500 group-hover:-translate-y-0.5">
                    <h3 className="text-white font-bold text-base mb-0.5 transition-colors duration-300 group-hover:text-white">
                      {arch.name}
                    </h3>
                    <p className="text-[#FF1744] text-xs font-semibold mb-3">
                      {arch.specialization}
                    </p>

                    {/* Focus Description - fully visible and bold */}
                    <p className="text-zinc-200 text-xs leading-relaxed font-bold mb-4">
                      {arch.focus}
                    </p>

                    {/* Certifications - slides up and fades in on hover */}
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-in-out space-y-1.5 mt-1">
                      <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                        Certifications
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {arch.certs.map((cert, i) => (
                          <span key={i} className={`block text-[10px] px-2.5 py-1 rounded-md border ${c.cert} font-mono truncate`}>
                            ✓ {cert}
                          </span>
                        ))}
                      </div>
                    </div>
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
