"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Cloud, Cpu, Shield, Database, Check } from "lucide-react";

import Link from "next/link";

export const InternshipTracks = () => {
  const tracks = [
    {
      id: "software",
      title: "Software Engineering",
      icon: Code,
      color: "from-blue-500 to-indigo-500",
      accent: "text-blue-500",
      bgGlow: "rgba(59,130,246,0.15)",
      desc: <>Master modern full-stack development. Build high-performance, responsive web applications and scale secure APIs with our <Link href="/services/software-development" className="text-blue-500 hover:underline">software development</Link> practices.</>,
      techs: ["React.js", "Next.js", "Node.js", "FastAPI", "MongoDB", "PostgreSQL"],
      projects: ["Enterprise Portal", "SaaS Subscriptions", "API Orchestrator"]
    },
    {
      id: "cloud",
      title: "Cloud Engineering",
      icon: Cloud,
      color: "from-cyan-500 to-teal-500",
      accent: "text-cyan-500",
      bgGlow: "rgba(6,182,212,0.15)",
      desc: <>Architect enterprise public cloud runtimes. Plan zero-downtime database replications and design secure land zones under our <Link href="/services/cloud-services" className="text-cyan-500 hover:underline">cloud services</Link> division.</>,
      techs: ["Azure", "AWS", "Google Cloud", "Terraform", "Kubernetes"],
      projects: ["Multi-Region Grid", "Cost Optimization FinOps", "Infrastructure Blueprints"]
    },
    {
      id: "devops",
      title: "DevOps & Automation",
      icon: Cpu,
      color: "from-rose-500 to-pink-500",
      accent: "text-rose-500",
      bgGlow: "rgba(244,63,94,0.15)",
      desc: <>Implement continuous integration and GitOps rollouts. Learn container orchestration, pipelines caching and platform engineering through <Link href="/services/devops-automation" className="text-rose-500 hover:underline">DevOps automation</Link>.</>,
      techs: ["CI/CD", "GitHub Actions", "Azure DevOps", "Docker", "IaC (Terraform)"],
      projects: ["Self-Service DevPortal", "Zero-Trust CI/CD Pipelines", "eBPF Monitoring"]
    },
    {
      id: "ai-data",
      title: "AI & Data Engineering",
      icon: Database,
      color: "from-amber-500 to-orange-500",
      accent: "text-amber-500",
      bgGlow: "rgba(245,158,11,0.15)",
      desc: <>Design data pipelines and deploy LLMs in production. Work on LLMOps, vector databases, analytics dashboards and machine learning models under <Link href="/services/ai-data-innovation" className="text-amber-500 hover:underline">AI & data engineering</Link>.</>,
      techs: ["Generative AI", "Machine Learning", "LLMOps", "Data Pipelines", "Analytics", "Vector DBs"],
      projects: ["Autonomous Multi-Agent", "Vector Search Pipeline", "Telemetry Forecasting"]
    },
    {
      id: "security",
      title: "Cybersecurity",
      icon: Shield,
      color: "from-emerald-500 to-green-500",
      accent: "text-emerald-500",
      bgGlow: "rgba(16,185,129,0.15)",
      desc: <>Audit cloud security posture and establish identity perimeters. Work on threat modeling, vulnerability management, and DevSecOps integrations with our <Link href="/services/cybersecurity" className="text-emerald-500 hover:underline">cybersecurity</Link> team.</>,
      techs: ["Cloud Security", "DevSecOps", "Compliance", "Security Operations", "IAM Policies"],
      projects: ["SAST/DAST Pipeline", "Zero-Trust Identity Okta", "Compliance Audit Readiness"]
    }
  ];

  const [activeTab, setActiveTab] = useState(tracks[0].id);

  return (
    <section id="program-tracks" className="relative py-24 bg-black overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            Curated Specializations
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
            Internship <span className="text-rose-500">Tracks</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-2xl mx-auto">
            Choose a track aligned with your aspirations. Learn industry-standard workflows, receive structured training, and build production projects.
          </p>
        </div>

        {/* Tab Buttons (Mobile selector & desktop tabs) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto bg-zinc-950/80 p-2 rounded-2xl border border-zinc-900 backdrop-blur">
          {tracks.map((track) => {
            const Icon = track.icon;
            const isActive = activeTab === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTab(track.id)}
                className={`flex items-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-zinc-800"
                    : "text-zinc-405 hover:text-white hover:bg-zinc-900/30"
                }`}
              >
                <Icon size={16} className={isActive ? track.accent : "text-zinc-500"} />
                {track.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {tracks.map((track) => {
              if (track.id !== activeTab) return null;
              const Icon = track.icon;
              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden backdrop-blur"
                >
                  {/* Subtle Background Glow */}
                  <div
                    className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-500 opacity-40"
                    style={{ backgroundColor: track.bgGlow }}
                  />

                  {/* Left Column: Icon & Info */}
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                        {track.title}
                      </h3>
                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                        {track.desc}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">Target Technologies</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {track.techs.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-bold text-white bg-zinc-900 px-3.5 py-2 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Demo Projects */}
                  <div className="md:col-span-5 flex flex-col justify-center bg-zinc-950 border border-zinc-900 p-6 rounded-2xl">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-rose-500 mb-4 font-bold">Featured Projects & Goals</h4>
                    <div className="flex flex-col gap-4">
                      {track.projects.map((proj, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3.5 bg-zinc-900/30 rounded-xl border border-zinc-900 hover:border-zinc-800 transition-colors group"
                        >
                          <div className="p-1 rounded-md bg-zinc-900 text-rose-500 border border-zinc-800 group-hover:bg-rose-500 group-hover:text-white transition-all">
                            <Check size={14} />
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-white block">{proj}</span>
                            <span className="text-[11px] text-zinc-500 leading-normal block mt-0.5">Hands-on case validation and delivery metrics.</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
