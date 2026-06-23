"use client";
import React from "react";
import { motion } from "framer-motion";
import { Hammer, Heart, Eye, Briefcase, Zap, ShieldCheck } from "lucide-react";

export const WhatInternsWorkOn = () => {
  const projects = [
    {
      name: "Humanex",
      type: "HR & Recruitment platform",
      tech: "Next.js & FastAPI",
      icon: Briefcase,
      color: "from-violet-500/20 to-purple-500/20 text-purple-400 border-purple-500/20",
      desc: "Built scalable portals to orchestrate talent tracking, screening models and candidate score telemetry."
    },
    {
      name: "SafeSign",
      type: "Compliance & Security Hub",
      tech: "React & Cloud Security",
      icon: ShieldCheck,
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/20",
      desc: "Implemented secure signature validations and zero-trust identity checks inside enterprise compliance loops."
    },
    {
      name: "Brio",
      type: "Real-time Telemetry Dashboard",
      tech: "Node.js & MongoDB",
      icon: Zap,
      color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/20",
      desc: "Architected real-time WebSocket pipelines visualizing active cloud resource allocations and service health."
    },
    {
      name: "Campix",
      type: "Media Assets Platform",
      tech: "Next.js & AWS S3",
      icon: Eye,
      color: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/20",
      desc: "Engineered automated asset transformation pipelines, optimization rules and global CDN caching configurations."
    },
    {
      name: "Prestivo",
      type: "Enterprise ERP System",
      tech: "React, Node.js & PostgreSQL",
      icon: Hammer,
      color: "from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/20",
      desc: "Designed reusable full-stack components for financial dashboards, ledger audit runs and inventory lists."
    },
    {
      name: "CareSuite",
      type: "Healthcare SaaS Portal",
      tech: "FastAPI & PostgreSQL",
      icon: Heart,
      color: "from-red-500/20 to-rose-600/20 text-rose-400 border-rose-500/20",
      desc: "Constructed HIPAA-compliant database structures, access auditing rules and encrypted file transfers."
    }
  ];

  const tasks = [
    { title: "Build React Components", desc: "Write modern, fully-accessible TSX layouts with Tailwind CSS, supporting responsive rules." },
    { title: "Create APIs", desc: "Design REST & gRPC endpoint paths using Node.js and FastAPI, supporting authentication layers." },
    { title: "Deploy Applications", desc: "Configure multi-account cloud landing platforms, container networks, and CDN routing plans." },
    { title: "Implement CI/CD", desc: "Build automated testing scripts and deployment pipelines using GitHub Actions and ArgoCD." },
    { title: "Manage Cloud Infrastructure", desc: "Write reusable Infrastructure-as-Code setups in Terraform targeting AWS, Azure and GCP." },
    { title: "Develop AI Features", desc: "Fine-tune LLM systems, build semantic cache databases, and create stateful autonomous agents." }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-rose-500 font-bold">Practical Execution</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">What Interns Will Work On</h2>
          <p className="text-zinc-400 mt-4 text-sm sm:text-base leading-relaxed">
            Gain exposure to production-grade architectures. Work on real products deployed for global client ecosystems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-zinc-950/60 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 hover:bg-zinc-950 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${proj.color} flex items-center justify-center border mb-6 group-hover:scale-105 transition-transform`}>
                    <Icon size={18} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">{proj.name}</h3>
                    <span className="text-[10px] font-mono bg-zinc-900 text-zinc-500 px-2 py-0.5 rounded border border-zinc-850">
                      {proj.tech}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-rose-500/80 tracking-wide uppercase block mb-3">
                    {proj.type}
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {proj.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tasks grid section */}
        <div className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 sm:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 tracking-tight text-center md:text-left">
            Typical Engineering Task Responsibilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task, idx) => (
              <div
                key={idx}
                className="p-5 bg-zinc-905 border border-zinc-900 hover:border-zinc-800 rounded-xl transition-all hover:bg-zinc-900/10 group"
              >
                <span className="text-xs font-mono font-bold text-rose-500 mb-2 block">
                  TASK-0{idx + 1}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-rose-500 transition-colors mb-2">
                  {task.title}
                </h4>
                <p className="text-xs text-zinc-450 leading-relaxed font-medium">
                  {task.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
