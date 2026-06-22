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

  const labs: ShowcaseDetails[] = [
    {
      id: "ai",
      name: "AI Innovation Lab",
      icon: <Brain size={18} />,
      badge: "Cognitive Intelligence",
      desc: "Investigating LLM architectures, localized parameters fine-tuning, and structured safety guardrails.",
      focusAreas: ["Generative AI Pipelines", "Multi-Agent Workflow Swarms", "Semantic Vector Search Routing", "Enterprise Copilots Frameworks", "Knowledge Graph Integrations"],
      projects: [
        { name: "Hiring Agent System", desc: "Autonomous matching of resume profiles against job vectors.", stage: "Pilot Run" },
        { name: "Prompt Security Shield", desc: "Rust agent blocking prompt injections in real time.", stage: "Validation" },
        { name: "Doc Intelligence Engine", desc: "Parsing PDF catalogs into unified vector embeddings.", stage: "Prototype" }
      ]
    },
    {
      id: "cloud",
      name: "Cloud Innovation Lab",
      icon: <Cloud size={18} />,
      badge: "Infrastructure Scale",
      desc: "Testing serverless scaling delays, multicloud deployments orchestration, and green hosting systems.",
      focusAreas: ["Serverless Scaling Optimizations", "Multi-Cloud Orchestration (OCI/AWS)", "Carbon Audit & Cloud FinOps", "Kubernetes Karpenter Scaling", "Platform Engineering Architecture"],
      projects: [
        { name: "FinOps Cost Auditor", desc: "Tracking idle compute resources and automatically scaling down node groups.", stage: "Prototype" },
        { name: "Landing Zone Builder", desc: "Automating AWS Control Tower setups using Terraform scripts.", stage: "Pilot Run" }
      ]
    },
    {
      id: "devops",
      name: "DevOps Innovation Lab",
      icon: <Terminal size={18} />,
      badge: "SRE & Delivery",
      desc: "Standardizing internal developer portals (IDP), SRE tracing logs, and automated deployment scripts.",
      focusAreas: ["GitOps Continuous Deployments", "Internal Developer Portals", "Observability (OpenTelemetry)", "CI/CD Pipeline Optimizers", "Self-Healing Kubernetes Nodes"],
      projects: [
        { name: "Dev Portal Dashboard", desc: "Unified developer portal utilizing Backstage scaffolding templates.", stage: "Validation" },
        { name: "ArgoCD Automation Hook", desc: "GitOps triggers verifying Kubernetes manifest health logs.", stage: "Prototype" }
      ]
    },
    {
      id: "cyber",
      name: "Cybersecurity Lab",
      icon: <Shield size={18} />,
      badge: "Zero-Trust Security",
      desc: "Evaluating vulnerability scanning patterns, dynamic secret injectors, and TLS connections integrity.",
      focusAreas: ["Zero Trust Network Boundaries", "Dynamic Vault Credentials Rotation", "Continuous Compliance Auditors", "Adversarial Code Injection Sweeps"],
      projects: [
        { name: "Dynamic Secrets Rotator", desc: "K8s daemon rotation keys on database clusters dynamically.", stage: "Validation" },
        { name: "Compliance Check Daemon", desc: "Parsing IaC files to detect security violations before push.", stage: "Prototype" }
      ]
    },
    {
      id: "data",
      name: "Data & Analytics Lab",
      icon: <Database size={18} />,
      badge: "Intelligence Platforms",
      desc: "Creating unified lakehouse architectures, Kafka telemetry streams, and SRE logging aggregators.",
      focusAreas: ["Data Lakehouse Storage Schema", "Real-Time Telemetry Streaming", "MLOps Pipeline Integrations", "Predictive SRE Fault Analysis"],
      projects: [
        { name: "Kafka Stream Parser", desc: "Piping SRE metrics streams into analytical database tables.", stage: "Pilot Run" },
        { name: "SRE Prediction Engine", desc: "Detecting network bandwidth anomalies using timeseries models.", stage: "Prototype" }
      ]
    }
  ];

  const currentLab = labs.find(l => l.id === activeTab) || labs[0];

  return (
    <section id="showcase" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D EXPLORER
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Innovation Labs <span className="text-rose-500">Showcase</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Select a specialized laboratory to explore its primary research focus areas and active prototyping programs.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Tab Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {labs.map((lab) => (
              <button
                key={lab.id}
                onClick={() => setActiveTab(lab.id)}
                className={`flex items-center justify-between p-5 rounded-2xl text-left border transition-all duration-300 ${
                  activeTab === lab.id
                    ? "bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
                    : "bg-zinc-950/45 text-zinc-450 border-zinc-900/80 hover:text-zinc-350 hover:bg-zinc-900/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                    activeTab === lab.id ? "bg-rose-950/30 border-rose-500/30" : "bg-zinc-900 border-zinc-800"
                  }`}>
                    {lab.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{lab.name}</h4>
                    <span className="text-[9px] text-zinc-500 font-mono font-bold tracking-widest">{lab.badge}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Display Board */}
          <div className="lg:col-span-8 min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-950/40 border border-zinc-900/60 rounded-3xl p-8 backdrop-blur-sm"
              >
                <div className="border-b border-zinc-900/60 pb-6 mb-8">
                  <h3 className="text-lg font-bold text-white mb-2">{currentLab.name}</h3>
                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed">
                    {currentLab.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Focus Areas */}
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest mb-4">
                      RESEARCH FOCUS AREAS
                    </span>
                    <ul className="space-y-3">
                      {currentLab.focusAreas.map((area) => (
                        <li key={area} className="flex items-center gap-2.5 text-xs text-zinc-400 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Active Projects */}
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest mb-4">
                      ACTIVE PROTOTYPES
                    </span>
                    <div className="space-y-4">
                      {currentLab.projects.map((proj) => (
                        <div
                          key={proj.name}
                          className="bg-zinc-900/30 border border-zinc-900 rounded-xl p-4 flex flex-col justify-between min-h-[90px]"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-[11px] font-bold text-white uppercase tracking-wider">{proj.name}</h5>
                            <span className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
                              {proj.stage}
                            </span>
                          </div>
                          <p className="text-[10px] text-zinc-500 font-semibold leading-relaxed">
                            {proj.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
