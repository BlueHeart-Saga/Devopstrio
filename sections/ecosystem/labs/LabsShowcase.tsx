"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Brain, Cloud, Terminal, Shield, Database, CheckSquare, PlusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ShowcaseDetails {
  id: string;
  name: string;
  icon: React.ReactNode;
  badge: string;
  desc: string;
  focusAreas: string[];
  projects: { name: string; desc: string; stage: string }[];
}

export function LabsShowcase() {
  const [activeTab, setActiveTab] = useState("ai");

  const labs = [
    {
      id: "ai",
      name: "AI Innovation Lab",
      icon: <Brain size={20} />,
      image: "/assets/ecosystem/innovation-labs-page-Showcase-_Card/AI.png",
      quote: "\"Accelerating enterprise workflows through autonomous agents and safe cognitive automation frameworks.\"",
      projects: [
        { stat: "Hiring Agent", label: "Autonomous resume matching engine." },
        { stat: "Prompt Shield", label: "Real-time prompt injection blocker." }
      ],
      tags: ["Generative AI", "Agentic Workflows", "Vector Search"],
      cta: "Explore AI Lab"
    },
    {
      id: "cloud",
      name: "Cloud Innovation Lab",
      icon: <Cloud size={20} />,
      image: "/assets/ecosystem/innovation-labs-page-Showcase-_Card/Cloud.png",
      quote: "\"Driving zero-downtime scalability and sustainable green hosting across distributed multicloud architectures.\"",
      projects: [
        { stat: "FinOps Auditor", label: "Automated idle node scale-down." },
        { stat: "Landing Zones", label: "Terraform IaC generation." }
      ],
      tags: ["Serverless", "Kubernetes", "Green Cloud"],
      cta: "Explore Cloud Lab"
    },
    {
      id: "devops",
      name: "DevOps Innovation Lab",
      icon: <Terminal size={20} />,
      image: "/assets/ecosystem/innovation-labs-page-Showcase-_Card/Devops.png",
      quote: "\"Standardizing developer portals and self-healing pipelines to drastically reduce code-to-production lead times.\"",
      projects: [
        { stat: "Portal Dashboard", label: "Unified Backstage scaffold." },
        { stat: "ArgoCD Hook", label: "Automated manifest health checks." }
      ],
      tags: ["GitOps", "OpenTelemetry", "CI/CD"],
      cta: "Explore DevOps Lab"
    },
    {
      id: "cyber",
      name: "Cybersecurity Lab",
      icon: <Shield size={20} />,
      image: "/assets/ecosystem/innovation-labs-page-Showcase-_Card/cyber.png",
      quote: "\"Pioneering zero-trust environments with dynamic secret rotation and continuous compliance auditing.\"",
      projects: [
        { stat: "Secrets Rotator", label: "Dynamic cluster key rotation." },
        { stat: "IaC Checker", label: "Pre-deployment security sweeps." }
      ],
      tags: ["Zero Trust", "DevSecOps", "Compliance"],
      cta: "Explore Cyber Lab"
    },
    {
      id: "data",
      name: "Data & Analytics Lab",
      icon: <Database size={20} />,
      image: "/assets/ecosystem/innovation-labs-page-Showcase-_Card/Data.png",
      quote: "\"Constructing ultra-low latency telemetry streaming architectures and unified analytical lakehouses.\"",
      projects: [
        { stat: "Stream Parser", label: "Kafka-driven metrics ingestion." },
        { stat: "Prediction Engine", label: "Bandwidth anomaly detection." }
      ],
      tags: ["Data Mesh", "Kafka", "Lakehouse"],
      cta: "Explore Data Lab"
    }
  ];

  const currentLab = labs.find(l => l.id === activeTab) || labs[0];

  return (
    <section id="showcase" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
        <Reveal className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D EXPLORER
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Discover Our <span className="text-rose-500">Innovation Showcases</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            See how Devopstrio is actively pushing the boundaries of enterprise engineering.
          </p>
        </Reveal>

        {/* Main Interactive Showcase Container */}
        <div className="bg-[#0A0A0A] border border-zinc-800/80 rounded-[32px] md:p-3 shadow-2xl relative overflow-hidden mb-8">
          <div className="flex flex-col lg:flex-row h-full w-full bg-[#050505] rounded-[24px] overflow-hidden relative z-10 border border-white/5">
            
            {/* Left Content Pane */}
            <div className="w-full lg:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  {/* Header / Brand */}
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500">
                      {currentLab.icon}
                    </div>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">
                      {currentLab.name}
                    </span>
                  </div>

                  {/* Big Quote / Headline */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-12 tracking-tight">
                    {currentLab.quote}
                  </h3>

                  {/* Stats / Projects Row */}
                  <div className="grid grid-cols-2 gap-8 mb-12 border-l-[3px] border-rose-500 pl-6">
                    {currentLab.projects.map((proj, i) => (
                      <div key={i}>
                        <div className="text-lg md:text-xl font-black text-white mb-2 tracking-tight">
                          {proj.stat}
                        </div>
                        <p className="text-xs text-zinc-400 font-medium leading-relaxed max-w-[200px]">
                          {proj.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags & Services */}
                  <div className="mt-auto">
                    <span className="block text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-4">
                      Core Technologies & Focus
                    </span>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentLab.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4">
                      <button className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-rose-600 hover:bg-rose-500 text-white transition-colors">
                        {currentLab.cta}
                      </button>
                      <button className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider border border-zinc-700 hover:border-zinc-500 text-white transition-colors">
                        View Case Studies
                      </button>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Image Pane */}
            <div className="w-full lg:w-[45%] min-h-[400px] lg:min-h-full relative overflow-hidden bg-black rounded-b-[24px] lg:rounded-bl-none lg:rounded-r-[24px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentLab.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  src={currentLab.image}
                  alt={currentLab.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-1000 hover:scale-105"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#050505] via-[#050505]/30 to-transparent" />
            </div>

          </div>
        </div>

        {/* Bottom Tab Selectors (Horizontal Row) */}
        <div className="flex flex-wrap items-center justify-center gap-0 overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950/40 w-fit mx-auto">
          {labs.map((lab, index) => {
            const isActive = activeTab === lab.id;
            return (
              <button
                key={lab.id}
                onClick={() => setActiveTab(lab.id)}
                className={`flex items-center justify-center px-6 py-5 border-r border-zinc-900 last:border-r-0 transition-all duration-300 ${
                  isActive 
                    ? "bg-rose-500/10 text-rose-500 border-b-2 border-b-rose-500 shadow-[inset_0_-2px_0_0_rgba(225,29,72,1)]" 
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/40 border-b-2 border-b-transparent"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`${isActive ? "text-rose-500" : "text-zinc-500"} transition-colors`}>
                    {lab.icon}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider hidden md:block">
                    {lab.name.replace(" Innovation Lab", "")}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
