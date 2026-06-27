"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const WhatInternsWorkOn = () => {
  const projects = [
    {
      name: "Humanex",
      type: "HR & Recruitment platform",
      tech: "Next.js & FastAPI",
      image: "/assets/Home-page/our-products/humanex.png",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      desc: "Built scalable portals to orchestrate talent tracking, screening models and candidate score telemetry."
    },
    {
      name: "SafeSign",
      type: "Compliance & Security Hub",
      tech: "React & Cloud Security",
      image: "/assets/Home-page/our-products/safesign.png",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      desc: "Implemented secure signature validations and zero-trust identity checks inside enterprise compliance loops."
    },
    {
      name: "Brio",
      type: "Real-time Telemetry Dashboard",
      tech: "Node.js & MongoDB",
      image: "/assets/Home-page/our-products/brio.png",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      desc: "Architected real-time WebSocket pipelines visualizing active cloud resource allocations and service health."
    },
    {
      name: "Campix",
      type: "Media Assets Platform",
      tech: "Next.js & AWS S3",
      image: "/assets/Home-page/our-products/campix.png",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      desc: "Engineered automated asset transformation pipelines, optimization rules and global CDN caching configurations."
    },
    {
      name: "Prestivo",
      type: "Enterprise ERP System",
      tech: "React, Node.js & PostgreSQL",
      image: "/assets/Home-page/our-products/prestivo.png",
      color: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      desc: "Designed reusable full-stack components for financial dashboards, ledger audit runs and inventory lists."
    },
    {
      name: "CareSuite",
      type: "Healthcare SaaS Portal",
      tech: "FastAPI & PostgreSQL",
      image: "/assets/Home-page/our-products/caresuite.png",
      color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      desc: "Constructed HIPAA-compliant database structures, access auditing rules and encrypted file transfers."
    },
    {
      name: "Homela",
      type: "PropTech SaaS",
      tech: "React & Node.js",
      image: "/assets/Home-page/our-products/homela.png",
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      desc: "Developed multi-tenant property management dashboards with automated lease tracking and payment systems."
    },
    {
      name: "Justivon",
      type: "Legal Case Management",
      tech: "Next.js & Azure",
      image: "/assets/Home-page/our-products/justivon.png",
      color: "text-zinc-400 bg-zinc-500/10 border-zinc-500/20",
      desc: "Implemented end-to-end legal document workflows, e-discovery models, and billing engines."
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

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 xl:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            Practical Execution
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
            What Interns Will <span className="text-rose-500">Work On</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-2xl mx-auto">
            Gain exposure to production-grade architectures. Work on real products deployed for global client ecosystems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {projects.map((prod, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="overflow-hidden flex flex-col group shadow-[0_8px_30px_rgba(0,0,0,0.3)] bg-zinc-950/80 border border-zinc-800/80 rounded-[24px] hover:border-zinc-700 transition-colors"
              >
                {/* Padded Image Container (like OurProducts) */}
                <div className="relative h-[220px] w-full p-2.5 pb-0">
                  <div className="relative w-full h-full overflow-hidden rounded-[16px] bg-zinc-900 border border-zinc-800/50">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-95" />

                    {/* Product Name Overlay */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {prod.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow relative z-10">
                  <div className="flex items-center mb-4 gap-2 flex-wrap">
                    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${prod.color}`}>
                      {prod.type}
                    </span>
                    <span className="text-[10px] font-mono bg-zinc-900 text-zinc-400 px-2 py-1 rounded border border-zinc-800">
                      {prod.tech}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                    {prod.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tasks grid section */}
        <div className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 tracking-tight text-center md:text-left">
            Typical Engineering Task Responsibilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task, idx) => (
              <div
                key={idx}
                className="p-5 bg-zinc-950/60 border border-zinc-900 hover:border-zinc-800 rounded-xl transition-all hover:bg-zinc-900 group"
              >
                <span className="text-xs font-mono font-bold text-rose-500 mb-2 block">
                  TASK-0{idx + 1}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-rose-500 transition-colors mb-2">
                  {task.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
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
