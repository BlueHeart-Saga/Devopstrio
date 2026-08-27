"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Accelerator {
  title: string;
  category: string;
  desc: string;
  ipCode: string;
  icon: React.ReactNode;
}
export function InnovationAccelerators() {
  const [activeTab, setActiveTab] = useState("cloud");

  const accelerators = [
    {
      id: "cloud",
      tab: "Cloud Landing Zone",
      title: "Enterprise Cloud Landing Zone Accelerator",
      desc: "Spin up a highly secure, modular AWS or Azure environment in minutes with our pre-built Terraform configurations.",
      features: [
        "Modular IaC scripts for instant account boundary setup.",
        "Pre-configured IAM roles and network transit hubs.",
        "Embedded compliance checks and FinOps tagging."
      ],
      cta: "Explore Cloud Assets",
      image: "/webp/assets/ecosystem/Innovation-labs-innovation-Accelerators/Cloud-Landing-Zones.webp"
    },
    {
      id: "devops",
      tab: "DevOps Pipeline",
      title: "Zero-Touch CI/CD Delivery Pipeline",
      desc: "Accelerate software delivery with a standardized GitOps workflow leveraging GitHub Actions and ArgoCD.",
      features: [
        "Automated image vulnerability scanning and reporting.",
        "Self-healing ArgoCD deployment synchronization hooks.",
        "Standardized deployment manifests and OpenTelemetry tracing."
      ],
      cta: "View Pipeline Specs",
      image: "/webp/assets/ecosystem/Innovation-labs-innovation-Accelerators/Devops-Pipeline.webp"
    },
    {
      id: "ai",
      tab: "AI Agent Framework",
      title: "Cognitive AI Agent Framework",
      desc: "Rapidly build and deploy LLM-powered enterprise assistants using our structured Python class abstractions.",
      features: [
        "Multi-agent task orchestration and loop routing.",
        "Built-in semantic memory indexers using vector databases.",
        "Real-time prompt injection safeguards and guardrails."
      ],
      cta: "Deploy AI Framework",
      image: "/webp/assets/ecosystem/Innovation-labs-innovation-Accelerators/AI-Agent-Framework.webp"
    },
    {
      id: "sec",
      tab: "Security Compliance",
      title: "Automated Security & Compliance Framework",
      desc: "Ensure day-one compliance with continuous Kubernetes daemon checks and dynamic secret rotation protocols.",
      features: [
        "Automated CIS benchmark verification against clusters.",
        "Dynamic secret injectors and Vault integration.",
        "Pre-commit IaC vulnerability scanning."
      ],
      cta: "View Security Tools",
      image: "/webp/assets/ecosystem/Innovation-labs-innovation-Accelerators/Security-Complaice.webp"
    },
    {
      id: "data",
      tab: "Data Lakehouse",
      title: "Unified Data Lakehouse Framework",
      desc: "Instantly deploy real-time telemetry ingestion pipelines mapping perfectly into scalable Databricks lakehouses.",
      features: [
        "Scaffolded Kafka event streaming architectures.",
        "Standardized analytical table schemas and indexing.",
        "Predictive MLOps pipeline integrations."
      ],
      cta: "Explore Data Assets",
      image: "/webp/assets/ecosystem/Innovation-labs-innovation-Accelerators/Data-lakehouse.webp"
    }
  ];

  const currentAsset = accelerators.find(a => a.id === activeTab) || accelerators[0];

  return (
    <section id="accelerators" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white">
            Innovation <span className="text-rose-500">Accelerators</span>
          </h2>
          {/* <p className="text-zinc-300 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed mt-3">
            Pre-packaged frameworks and codebase templates engineered by our labs to speed up delivery schedules.
          </p> */}
        </Reveal>

        {/* Top Pill Navigation Menu */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 p-2 bg-zinc-950/80 backdrop-blur-md border border-zinc-900/80 rounded-full shadow-2xl max-w-full overflow-x-auto mx-auto w-fit relative z-20">
            {accelerators.map((acc) => {
              const isActive = activeTab === acc.id;
              return (
                <button
                  key={acc.id}
                  onClick={() => setActiveTab(acc.id)}
                  className={`px-5 md:px-7 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap ${isActive
                      ? "bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.35)]"
                      : "bg-transparent text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                    }`}
                >
                  {acc.tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Split Showcase Container */}
        <div className="bg-zinc-950/40 backdrop-blur-3xl rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-zinc-800/50">
          <div className="flex flex-col lg:flex-row h-full min-h-[500px]">

            {/* Left Image Pane */}
            <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-full overflow-hidden bg-black border-r border-zinc-900/50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentAsset.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  src={currentAsset.image}
                  alt={currentAsset.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-[24px] lg:rounded-l-[32px] lg:rounded-tr-none"
                />
              </AnimatePresence>
            </div>

            {/* Right Content Pane */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-gradient-to-br from-transparent to-black/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAsset.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-snug mb-4">
                    {currentAsset.title}
                  </h3>

                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-normal">
                    {currentAsset.desc}
                  </p>

                  {/* Vertical Feature Boxes */}
                  <div className="space-y-3.5 mb-10">
                    {currentAsset.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:bg-zinc-900/60 hover:border-rose-500/20 transition-all duration-300"
                      >
                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0 shadow-inner border border-zinc-800">
                          <Check size={14} className="text-rose-500" />
                        </div>
                        <p className="text-sm md:text-base text-zinc-200 font-medium leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button className="px-8 py-4 rounded-xl text-sm md:text-base font-bold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] w-fit">
                    {currentAsset.cta}
                  </button>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
