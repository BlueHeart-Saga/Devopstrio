"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Cloud, Cpu, Shield, Bot, Database } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface CapabilityPoint {
  name: string;
  desc: string;
}

interface AcceleratorCategory {
  id: string;
  name: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
  image: string;
  points: CapabilityPoint[];
}

export function AcceleratorsEcosystem() {
  const [activeTab, setActiveTab] = useState("cloud");

  const categories: AcceleratorCategory[] = [
    {
      id: "cloud",
      name: "Cloud Accelerator",
      subtitle: "Enterprise-Ready Landing Zones & Multi-Cloud Architecture Blueprints",
      href: "/ecosystem/accelerators-frameworks/cloud-accelerator",
      icon: <Cloud size={16} />,
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design.webp",
      points: [
        {
          name: "Azure Landing Zones (CAF)",
          desc: "Modular Bicep and Terraform landing zones aligned with Microsoft Cloud Adoption Framework."
        },
        {
          name: "AWS Multi-Account Factory",
          desc: "Control Tower and Organizations blueprints for scalable enterprise governance."
        },
        {
          name: "OCI Foundation Templates",
          desc: "Pre-configured Oracle Cloud infrastructure with baseline tenancy isolation."
        },
        {
          name: "Multi-Cloud Governance Engine",
          desc: "Automated policy enforcement, drift detection, and multi-cloud budget alerts."
        },
        {
          name: "Zero-Trust Network Blueprints",
          desc: "Hub-and-spoke virtual networks with inspection firewalls and micro-segmentation."
        },
        {
          name: "Automated DNS & Hybrid Peering",
          desc: "Centralized private resolver fabrics interconnecting on-premises and clouds."
        }
      ]
    },
    {
      id: "devops",
      name: "DevOps Accelerator",
      subtitle: "Standardized CI/CD Factories, GitOps & Platform Engineering Automation",
      href: "/ecosystem/accelerators-frameworks/devops-accelerator",
      icon: <Cpu size={16} />,
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design-1.webp",
      points: [
        {
          name: "Reusable CI/CD Pipelines",
          desc: "Battle-tested GitHub Actions and GitLab CI workflows with integrated build caching."
        },
        {
          name: "Azure DevOps Release Gates",
          desc: "Automated canary deployments, quality gates, and artifact provenance tracking."
        },
        {
          name: "Kubernetes GitOps Blueprints",
          desc: "ArgoCD and Flux patterns managing multi-cluster declarative application rollouts."
        },
        {
          name: "Terraform Module Registry",
          desc: "Standardized infrastructure modules with policy-as-code validation and testing."
        },
        {
          name: "Helm & Kustomize Packaging",
          desc: "Pre-configured container release charts with dynamic environment overlays."
        },
        {
          name: "Ephemeral Preview Environments",
          desc: "On-demand staging sandboxes automatically spun up for pull requests."
        }
      ]
    },
    {
      id: "security",
      name: "Security Framework",
      subtitle: "Secure SDLC, Zero Trust Architecture & Continuous Compliance Automation",
      href: "/ecosystem/accelerators-frameworks/security-framework",
      icon: <Shield size={16} />,
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design-3.webp",
      points: [
        {
          name: "Shift-Left DevSecOps Gates",
          desc: "Automated SAST, DAST, SCA dependency scanning and secret leakage prevention."
        },
        {
          name: "Cloud Security Posture (CSPM)",
          desc: "Real-time compliance auditing against CIS benchmarks and automated remediation."
        },
        {
          name: "Zero-Trust Identity & Access",
          desc: "Least-privilege IAM roles, just-in-time access, and multi-factor validation."
        },
        {
          name: "Container & Runtime Defense",
          desc: "eBPF-powered anomaly detection, image signing with Cosign, and admission control."
        },
        {
          name: "WAF & Edge Threat Mitigation",
          desc: "Pre-tuned firewall rulesets mitigating DDoS, bot abuse, and OWASP Top 10 exploits."
        },
        {
          name: "Compliance Automation (SOC2 / ISO)",
          desc: "Automated evidence collection and continuous controls reporting frameworks."
        }
      ]
    },
    {
      id: "ai",
      name: "Enterprise AI Framework",
      subtitle: "RAG Architectures, GenAI Orchestration & Semantic Agent Factories",
      href: "/ecosystem/accelerators-frameworks/ai-framework",
      icon: <Bot size={16} />,
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design-2.webp",
      points: [
        {
          name: "Autonomous AI Agent Workflows",
          desc: "Multi-agent coordination frameworks with deterministic reasoning and human feedback."
        },
        {
          name: "Enterprise RAG Architecture",
          desc: "Hybrid search pipelines integrating dense vector embeddings and BM25 sparse index."
        },
        {
          name: "Prompt Engineering & Evaluation",
          desc: "Systematic prompt versioning, synthetic benchmarking, and regression scoring."
        },
        {
          name: "Semantic Knowledge Assistants",
          desc: "Domain-tuned conversational copilots with deep document indexing and citations."
        },
        {
          name: "LLM Guardrails & Governance",
          desc: "Real-time PII redaction, toxic output filtering, and hallucination safeguards."
        },
        {
          name: "Distributed Inference Optimization",
          desc: "vLLM model serving, KV-cache management, and hardware acceleration runtimes."
        }
      ]
    },
    {
      id: "data",
      name: "Data Framework",
      subtitle: "High-Throughput Lakehouse Architectures, Streaming & Analytics Foundations",
      href: "/ecosystem/accelerators-frameworks/data-framework",
      icon: <Database size={16} />,
      image: "/webp/assets/ecosystem/grid/accelerators-frameworks-_Grid/Generated-Design-4.webp",
      points: [
        {
          name: "Modern Data Lakehouse Fabric",
          desc: "Unified Delta Lake and Apache Iceberg storage layers with ACID transactions."
        },
        {
          name: "Real-Time Streaming Pipelines",
          desc: "Kafka and Apache Flink streaming frameworks for ultra-low latency event processing."
        },
        {
          name: "Automated dbt Data Modeling",
          desc: "Modular transformation workflows with automated data freshness and schema tests."
        },
        {
          name: "Centralized Data Governance",
          desc: "Automated lineage tracking, role-based masking, and catalog indexing."
        },
        {
          name: "Databricks & Spark Optimization",
          desc: "Pre-tuned cluster autoscale configs and distributed compute pipelines."
        },
        {
          name: "Enterprise Analytics Blueprints",
          desc: "Semantic metric layers, BI acceleration caches, and real-time dashboard models."
        }
      ]
    }
  ];

  // Smooth scroll active tab pill into view in the horizontal container on user click
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const container = document.getElementById("accelerators-tabs-container");
    const activeEl = document.getElementById(`accelerator-tab-${tabId}`);
    if (container && activeEl) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      const relativeLeft = activeRect.left - containerRect.left + container.scrollLeft;
      const targetScrollLeft = relativeLeft - (containerRect.width / 2) + (activeRect.width / 2);

      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: "smooth"
      });
    }
  };

  const currentCat = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="framework" className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              ENTERPRISE IP & ACCELERATORS
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Framework <span className="text-rose-500">Ecosystem</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
              Explore specialized enterprise accelerators, production-tested blueprints, and automated delivery frameworks.
            </p>
          </div>
        </Reveal>

        {/* Tab Pills Selector - Exactly 5 Categories */}
        <div className="w-full flex justify-center mb-12">
          <div
            id="accelerators-tabs-container"
            className="w-full max-w-full overflow-x-auto scrollbar-hide py-2 px-1"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 mx-auto w-max bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-1.5 sm:p-2 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {categories.map((c) => (
                <button
                  key={c.id}
                  id={`accelerator-tab-${c.id}`}
                  onClick={() => handleTabClick(c.id)}
                  className={`px-3.5 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 ${
                    activeTab === c.id
                      ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.4)]"
                      : "bg-transparent border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {c.icon}
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Redesigned Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Tall Big Card (Only card with link button to dedicated solution page) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/40 p-8 flex flex-col justify-between h-full min-h-[460px] bg-gradient-to-br from-zinc-950/95 via-[#0a0506]/95 to-[#0f0709]/95 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Internal decorative glowing meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />

              {/* Expanding Image Layer with Glassmorphism */}
              <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover/tall:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                <img
                  src={currentCat.image}
                  alt={currentCat.name}
                  className="w-full h-full object-cover scale-110 group-hover/tall:scale-100 transition-transform duration-1000 ease-out opacity-80"
                  loading="lazy"
                />
                
                {/* Frosted Glass Blur Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
                
                {/* Vignette Gradient for depth and text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5 border border-white/5 rounded-[24px]" />
              </div>

              {/* Card top details */}
              <div className="relative z-10 flex flex-col justify-center my-auto">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center mb-6 text-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                  {currentCat.icon}
                </div>
                <span className="text-[11px] font-bold tracking-widest text-rose-500 uppercase mb-3 block">
                  Proprietary Accelerator
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-3 group-hover/tall:text-rose-300 transition-colors">
                  {currentCat.name}
                </h3>
                <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  {currentCat.subtitle}
                </p>
              </div>

              {/* Bottom Link Button to dedicated solution page */}
              <div className="pt-6 border-t border-white/10 mt-auto relative z-10">
                <Link
                  href={currentCat.href}
                  className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-[0_4px_16px_rgba(225,29,72,0.35)] group-hover/tall:shadow-[0_4px_20px_rgba(225,29,72,0.5)]"
                >
                  <span>Explore solution</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/tall:translate-x-0.5 group-hover/tall:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right Capabilities Grid (Small cards with NO explore button, NO navigation, 2-line description on hover) */}
          <div className="lg:col-span-3 min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full"
              >
                {currentCat.points.map((pt) => (
                  <div
                    key={pt.name}
                    className="group/card flex flex-col justify-between bg-zinc-950/40 border border-white/5 hover:border-rose-500/30 hover:bg-zinc-950/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 min-h-[190px] md:min-h-[200px] h-full relative overflow-hidden backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] cursor-default select-none hover:-translate-y-1"
                  >
                    {/* Subtle color highlight glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Top Capability Title */}
                    <div className="relative z-10 transition-transform duration-300 group-hover/card:-translate-y-0.5">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.6)] group-hover/card:scale-125 transition-transform" />
                        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 group-hover/card:text-rose-400 transition-colors">
                          Capability Focus
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover/card:text-rose-300 transition-colors">
                        {pt.name}
                      </h4>
                    </div>

                    {/* Short 2-line description visible smoothly on hover */}
                    <div className="relative z-10 mt-auto pt-3">
                      <p className="text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed line-clamp-2 transition-all duration-300 opacity-90 sm:opacity-0 sm:group-hover/card:opacity-100 sm:translate-y-1 sm:group-hover/card:translate-y-0 group-hover/card:text-zinc-200">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
