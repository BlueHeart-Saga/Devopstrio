"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Cloud, Database, Shield, Layout, Terminal, Zap, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SubCardItem {
  name: string;
  desc?: string;
}

interface CategoryDetail {
  id: string;
  label: string;
  icon: React.ReactNode;
  desc: string;
  href: string;
  examples: SubCardItem[];
}

const categoryBgImages: Record<string, string> = {
  saas: "/webp/assets/ecosystem/grid/platforms-solutions-page_grid_5/Generated-Design.webp",
  devops: "/webp/assets/ecosystem/grid/platforms-solutions-page_grid_5/Generated-Design-1.webp",
  cloud: "/webp/assets/ecosystem/grid/platforms-solutions-page_grid_5/Generated-Design-2.webp",
  security: "/webp/assets/ecosystem/grid/platforms-solutions-page_grid_5/Generated-Design-4.webp",
  data: "/webp/assets/ecosystem/grid/platforms-solutions-page_grid_5/Generated-Design-3.webp",
  automation: "/webp/assets/ecosystem/grid/platforms-solutions-page_grid_5/Generated-Design-1.webp",
};

const platformLinks: Record<string, string> = {
  "Humanex": "https://humanex.devopstrio.co.uk/",
  "Brio": "https://brio.devopstrio.co.uk/",
  "eSigniva": "https://esigniva.com/",
  "SafeSign": "https://esigniva.com/",
  "CareSuite": "https://caresuite.devopstrio.co.uk/",
  "Homela": "https://homela.devopstrio.co.uk/",
  "Campix": "https://campix.devopstrio.co.uk/",
  "Justivon": "https://justivon.devopstrio.co.uk/",
  "Prestivo": "https://prestivo.devopstrio.co.uk/",
};

export function PlatformCategories() {
  const [activeCategory, setActiveCategory] = useState("saas");

  const categories: CategoryDetail[] = [
    {
      id: "saas",
      label: "SaaS Platforms",
      icon: <Layout size={16} />,
      desc: "Multi-tenant software products built for scalability, subscription management, user onboarding, and enterprise business automation.",
      href: "/ecosystem/platforms-solutions/saas-platforms",
      examples: [
        { name: "Humanex" },
        { name: "Brio" },
        { name: "eSigniva" },
        { name: "CareSuite" },
        { name: "Homela" },
        { name: "Campix" },
        { name: "Justivon" },
        { name: "Prestivo" }
      ]
    },
    {
      id: "devops",
      label: "DevOps Platform",
      icon: <Terminal size={16} />,
      desc: "Unified CI/CD pipeline automation, GitOps deployment engines, and automated Kubernetes container management.",
      href: "/ecosystem/platforms-solutions/devops-platform",
      examples: [
        {
          name: "GitOps Deployment Engine",
          desc: "Declarative Kubernetes cluster synchronization with automated zero-downtime rollbacks and drift correction."
        },
        {
          name: "CI/CD Pipeline Accelerator",
          desc: "Pre-configured GitHub Actions and GitLab CI runners for rapid, compliant build and release pipelines."
        },
        {
          name: "Release Governance Portal",
          desc: "Automated change approvals, security gating policies, and continuous compliance audit tracking."
        },
        {
          name: "Kubernetes Pod Orchestrator",
          desc: "Self-healing cluster autoscaling, Karpenter pod scheduling, and resilient multi-region traffic failover."
        },
        {
          name: "Developer Self-Service Hub",
          desc: "Internal developer platform enabling one-click ephemeral preview environment provisioning."
        }
      ]
    },
    {
      id: "cloud",
      label: "Cloud Management Platform",
      icon: <Cloud size={16} />,
      desc: "Centralized multi-cloud infrastructure governance, automated resource lifecycle provisioning, and intelligent cost tuning.",
      href: "/ecosystem/platforms-solutions/cloud-management-platform",
      examples: [
        {
          name: "Cloud Operations Center",
          desc: "Unified multi-cloud dashboard tracking real-time health, uptime SLAs, and distributed infrastructure workloads."
        },
        {
          name: "FinOps & Cost Optimizer",
          desc: "Automated cloud spend anomaly detection, idle resource reclamation, and reserved capacity tuning."
        },
        {
          name: "Multi-Cloud IaC Provisioner",
          desc: "Standardized Terraform and OpenTofu blueprints for automated multi-account landing zone builds."
        },
        {
          name: "Infrastructure Portal",
          desc: "Centralized inventory catalog managing compute, storage, and networking across AWS, Azure, and OCI."
        },
        {
          name: "Telemetry & Monitoring Hub",
          desc: "Integrated Prometheus and Grafana metrics aggregating distributed telemetry into actionable alerts."
        }
      ]
    },
    {
      id: "security",
      label: "Security Platform",
      icon: <Shield size={16} />,
      desc: "Enterprise zero-trust architecture, automated vulnerability scanning, identity governance, and continuous compliance.",
      href: "/ecosystem/platforms-solutions/security-platform",
      examples: [
        {
          name: "Zero-Trust Identity Portal",
          desc: "Centralized IAM policy enforcement, single sign-on integration, and adaptive contextual authentication."
        },
        {
          name: "Cloud Security Posture (CSPM)",
          desc: "Continuous multi-cloud configuration auditing against CIS benchmarks, SOC 2, and ISO 27001."
        },
        {
          name: "Vulnerability & CVE Scanner",
          desc: "Automated container image and dependency security scanning integrated directly into CI/CD build stages."
        },
        {
          name: "Secrets & PKI Vault",
          desc: "Automated SSL/TLS certificate rotation, dynamic secrets management, and encryption key lifecycle control."
        },
        {
          name: "Compliance & Audit Dashboard",
          desc: "Real-time compliance scorecard tracking regulatory controls, audit trails, and policy deviations."
        }
      ]
    },
    {
      id: "data",
      label: "Data Platform",
      icon: <Database size={16} />,
      desc: "Enterprise data ecosystems for petabyte-scale lakehouses, real-time event streaming, governance, and business intelligence.",
      href: "/ecosystem/platforms-solutions/data-platform",
      examples: [
        {
          name: "Data Lakehouse Storage",
          desc: "High-throughput object storage layer with ACID transactions and schema evolution enforcement."
        },
        {
          name: "Real-Time Streaming Engine",
          desc: "Event-driven Kafka streaming pipelines processing millions of events per second with sub-second latency."
        },
        {
          name: "Data Governance & Catalog",
          desc: "Automated metadata indexing, column-level data lineage, and automated PII data masking."
        },
        {
          name: "Business Intelligence Studio",
          desc: "Interactive executive dashboards and embedded analytics models visualizing key performance metrics."
        },
        {
          name: "Vector Store & Semantic Search",
          desc: "Optimized vector indexing enabling high-accuracy similarity search for enterprise RAG and AI."
        }
      ]
    },
    {
      id: "automation",
      label: "Automation Platform",
      icon: <Zap size={16} />,
      desc: "Intelligent workflow orchestration, robotic process automation, automated runbooks, and incident response pipelines.",
      href: "/ecosystem/platforms-solutions/automation-platform",
      examples: [
        {
          name: "Incident Remediation Engine",
          desc: "Automated runbooks resolving common infrastructure alerts and service restarts without human delay."
        },
        {
          name: "Enterprise Workflow Orchestrator",
          desc: "Low-code visual workflow automation connecting disparate SaaS APIs and enterprise backends."
        },
        {
          name: "ITSM Ticket Dispatcher",
          desc: "AI-driven ticket classification, priority assignment, and bi-directional ServiceNow integration."
        },
        {
          name: "Policy & Compliance Sentinel",
          desc: "Automated drift correction enforcing security baselines and configuration rules automatically."
        },
        {
          name: "Scheduled Task Automation Hub",
          desc: "Distributed cron scheduler executing batch processing, database maintenance, and backup validations."
        }
      ]
    }
  ];

  const currentCat = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <section id="categories" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-650/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-8 relative z-10">
        
        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
              Platform <span className="text-rose-500">Categories</span>
            </h2>
          </div>
        </Reveal>

        {/* Tab Pills Selector */}
        <div className="flex items-center justify-start lg:justify-center gap-2 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 border-b border-zinc-900/60">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 ${activeCategory === cat.id
                ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.35)]"
                : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Tall Card (Col 1) - Featured Big Card with Explore Link */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[400px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Internal decorative glowing meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-violet-650/5 rounded-full blur-3xl pointer-events-none" />

              {/* Dynamic Abstract Background Image for Left Card */}
              {categories.map((cat) => (
                <img key={cat.id}
                  src={categoryBgImages[cat.id]}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none transition-opacity duration-700 ease-in-out ${
                    activeCategory === cat.id ? "opacity-35" : "opacity-0"
                  }`}
                loading="lazy" />
              ))}

              {/* Card top details */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-white mb-4">
                  <div className="w-9 h-9 rounded-xl bg-rose-600/10 flex items-center justify-center text-rose-500">
                    {currentCat.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {currentCat.label}
                  </h3>
                </div>

                <div className="w-10 h-[2px] bg-rose-500 mb-4" />

                <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
                  {currentCat.desc}
                </p>
              </div>

              {/* Card bottom Explore Button */}
              <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="uppercase tracking-wider">Architecture</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Production Ready
                  </span>
                </div>

                <Link
                  href={currentCat.href}
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-xl transition-all duration-300 shadow-lg shadow-rose-600/30 group/btn"
                >
                  <span>Explore Solution</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right Assets Grid (Col 2-4) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {currentCat.examples.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="h-full"
                >
                  {activeCategory === "saas" ? (
                    /* SaaS Platform Tab: 8 Untouched External Launch Cards */
                    (() => {
                      const targetLink = platformLinks[item.name] || `/contact?platform=${encodeURIComponent(item.name)}`;
                      const isExternal = targetLink.startsWith("http");

                      return (
                        <div className="group/card flex flex-col justify-between bg-zinc-950/30 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 min-h-[160px] h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                          <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                          <div>
                            <a
                              href={targetLink}
                              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                              className="inline-block hover:text-rose-400 transition-colors"
                            >
                              <h4 className="text-lg md:text-xl font-semibold text-white group-hover/card:text-rose-400 transition-colors mb-2">
                                {item.name}
                              </h4>
                            </a>
                          </div>

                          <a
                            href={targetLink}
                            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="inline-flex items-center gap-2.5 group/link mt-auto w-fit cursor-pointer"
                          >
                            <span className="w-7 h-7 rounded-full bg-rose-600/10 group-hover/link:bg-rose-600 text-rose-500 group-hover/link:text-white flex items-center justify-center transition-all duration-300">
                              <ArrowUpRight
                                size={12}
                                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                              />
                            </span>
                            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-zinc-400 group-hover/link:text-zinc-200 transition-colors">
                              Launch System
                            </span>
                          </a>
                        </div>
                      );
                    })()
                  ) : (
                    /* Other Platform Tabs: Clean 2-Line Informational Cards (No Launch Button) */
                    <div className="group/card flex flex-col justify-between bg-zinc-950/30 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 min-h-[160px] h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-white group-hover/card:text-rose-400 transition-colors mb-3">
                          {item.name}
                        </h4>

                        {item.desc && (
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
