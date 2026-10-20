"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import {
  Cloud,
  Database,
  Shield,
  Layout,
  Terminal,
  Zap,
  ArrowUpRight,
  GitBranch,
  Workflow,
  ShieldCheck,
  Boxes,
  Activity,
  Server,
  BarChart3,
  Layers,
  Network,
  KeyRound,
  SearchCheck,
  Lock,
  FileCheck,
  ShieldAlert,
  HardDrive,
  RefreshCw,
  Cpu,
  Send,
  CheckCircle2,
  Clock,
  Gauge,
  ChevronLeft,
  ChevronRight,
  LucideIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SubCardItem {
  name: string;
  tag?: string;
  desc?: string;
  icon?: LucideIcon;
}

interface CategoryDetail {
  id: string;
  label: string;
  icon: React.ReactNode;
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
      href: "/ecosystem/platforms-solutions/devops-platform",
      examples: [
        {
          name: "GitOps Deployment Engine",
          tag: "Sync Engine",
          desc: "Declarative Kubernetes cluster synchronization with automated zero-downtime rollbacks and drift correction.",
          icon: GitBranch
        },
        {
          name: "CI/CD Pipeline Accelerator",
          tag: "Build & Test",
          desc: "Pre-configured GitHub Actions and GitLab CI runners for rapid, compliant build and release pipelines.",
          icon: Workflow
        },
        {
          name: "Release Governance Portal",
          tag: "Gating & Audit",
          desc: "Automated change approvals, security gating policies, and continuous compliance audit tracking.",
          icon: ShieldCheck
        },
        {
          name: "Kubernetes Pod Orchestrator",
          tag: "Autoscaling",
          desc: "Self-healing cluster autoscaling, Karpenter pod scheduling, and resilient multi-region traffic failover.",
          icon: Boxes
        },
        {
          name: "Developer Self-Service Hub",
          tag: "IDP Portal",
          desc: "Internal developer platform enabling one-click ephemeral preview environment provisioning.",
          icon: Terminal
        },
        {
          name: "Telemetry & Log Observability",
          tag: "Observability",
          desc: "Deep container tracing, eBPF network metrics, and centralized cluster log telemetry aggregation.",
          icon: Activity
        }
      ]
    },
    {
      id: "cloud",
      label: "Cloud Management Platform",
      icon: <Cloud size={16} />,
      href: "/ecosystem/platforms-solutions/cloud-management-platform",
      examples: [
        {
          name: "Cloud Operations Center",
          tag: "Fleet Health",
          desc: "Unified multi-cloud dashboard tracking real-time health, uptime SLAs, and distributed infrastructure workloads.",
          icon: Server
        },
        {
          name: "FinOps & Cost Optimizer",
          tag: "FinOps",
          desc: "Automated cloud spend anomaly detection, idle resource reclamation, and reserved capacity tuning.",
          icon: BarChart3
        },
        {
          name: "Multi-Cloud IaC Provisioner",
          tag: "IaC Modules",
          desc: "Standardized Terraform and OpenTofu blueprints for automated multi-account landing zone builds.",
          icon: Layers
        },
        {
          name: "Infrastructure Asset Catalog",
          tag: "Inventory",
          desc: "Centralized inventory catalog managing compute, storage, and networking across AWS, Azure, and OCI.",
          icon: Database
        },
        {
          name: "Telemetry & Monitoring Hub",
          tag: "Metrics",
          desc: "Integrated Prometheus and Grafana metrics aggregating distributed telemetry into actionable alerts.",
          icon: Activity
        },
        {
          name: "Zero-Trust Cloud Mesh",
          tag: "Network Mesh",
          desc: "Automated hub-and-spoke VNet peering, transit gateways, and egress firewall routing control.",
          icon: Network
        }
      ]
    },
    {
      id: "security",
      label: "Security Platform",
      icon: <Shield size={16} />,
      href: "/ecosystem/platforms-solutions/security-platform",
      examples: [
        {
          name: "Zero-Trust Identity Portal",
          tag: "IAM & SSO",
          desc: "Centralized IAM policy enforcement, single sign-on integration, and adaptive contextual authentication.",
          icon: KeyRound
        },
        {
          name: "Cloud Security Posture (CSPM)",
          tag: "CSPM Audit",
          desc: "Continuous multi-cloud configuration auditing against CIS benchmarks, SOC 2, and ISO 27001.",
          icon: ShieldCheck
        },
        {
          name: "Vulnerability & CVE Scanner",
          tag: "Image Scanning",
          desc: "Automated container image and dependency security scanning integrated directly into CI/CD build stages.",
          icon: SearchCheck
        },
        {
          name: "Secrets & PKI Vault",
          tag: "Secrets Vault",
          desc: "Automated SSL/TLS certificate rotation, dynamic secrets management, and encryption key lifecycle control.",
          icon: Lock
        },
        {
          name: "Compliance & Audit Sentinel",
          tag: "Compliance",
          desc: "Real-time compliance scorecard tracking regulatory controls, audit trails, and policy deviations.",
          icon: FileCheck
        },
        {
          name: "Threat Intelligence & SIEM",
          tag: "Threat Defense",
          desc: "Continuous runtime behavioral analysis, automated anomaly detection, and rapid incident response.",
          icon: ShieldAlert
        }
      ]
    },
    {
      id: "data",
      label: "Data Platform",
      icon: <Database size={16} />,
      href: "/ecosystem/platforms-solutions/data-platform",
      examples: [
        {
          name: "Data Lakehouse Storage",
          tag: "Lakehouse",
          desc: "High-throughput object storage layer with ACID transactions and schema evolution enforcement.",
          icon: HardDrive
        },
        {
          name: "Real-Time Streaming Engine",
          tag: "Kafka Stream",
          desc: "Event-driven Kafka streaming pipelines processing millions of events per second with sub-second latency.",
          icon: Zap
        },
        {
          name: "Data Governance & Catalog",
          tag: "Metadata Lineage",
          desc: "Automated metadata indexing, column-level data lineage, and automated PII data masking.",
          icon: Layers
        },
        {
          name: "Business Intelligence Studio",
          tag: "BI Dashboards",
          desc: "Interactive executive dashboards and embedded analytics models visualizing key performance metrics.",
          icon: BarChart3
        },
        {
          name: "Vector Store & Semantic Search",
          tag: "RAG Vectors",
          desc: "Optimized vector indexing enabling high-accuracy similarity search for enterprise RAG and AI.",
          icon: Database
        },
        {
          name: "Automated CDC Ingestion",
          tag: "CDC Ingestion",
          desc: "Continuous change data capture pipelines synchronizing operational databases with lakehouse tables.",
          icon: RefreshCw
        }
      ]
    },
    {
      id: "automation",
      label: "Automation Platform",
      icon: <Zap size={16} />,
      href: "/ecosystem/platforms-solutions/automation-platform",
      examples: [
        {
          name: "Incident Remediation Engine",
          tag: "Auto-Remediate",
          desc: "Automated runbooks resolving common infrastructure alerts and service restarts without human delay.",
          icon: Cpu
        },
        {
          name: "Enterprise Workflow Orchestrator",
          tag: "Low-Code Flows",
          desc: "Low-code visual workflow automation connecting disparate SaaS APIs and enterprise backends.",
          icon: Workflow
        },
        {
          name: "ITSM Ticket Dispatcher",
          tag: "ServiceNow AI",
          desc: "AI-driven ticket classification, priority assignment, and bi-directional ServiceNow integration.",
          icon: Send
        },
        {
          name: "Policy & Compliance Sentinel",
          tag: "Drift Repair",
          desc: "Automated drift correction enforcing security baselines and configuration rules automatically.",
          icon: CheckCircle2
        },
        {
          name: "Scheduled Task Automation Hub",
          tag: "Task Engine",
          desc: "Distributed cron scheduler executing batch processing, database maintenance, and backup validations.",
          icon: Clock
        },
        {
          name: "Automated Capacity Controller",
          tag: "Workload Tuning",
          desc: "Predictive workload autoscaling dynamically managing compute resources based on real-time demand.",
          icon: Gauge
        }
      ]
    }
  ];

  const currentCat = categories.find(c => c.id === activeCategory) || categories[0];

  const [isPaused, setIsPaused] = useState(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const handlePrevTab = () => {
    setActiveCategory((prev) => {
      const currentIndex = categories.findIndex((c) => c.id === prev);
      const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
      return categories[prevIndex].id;
    });
  };

  const handleNextTab = () => {
    setActiveCategory((prev) => {
      const currentIndex = categories.findIndex((c) => c.id === prev);
      const nextIndex = (currentIndex + 1) % categories.length;
      return categories[nextIndex].id;
    });
  };

  // Auto-switch tabs every 8 seconds smoothly
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveCategory((prev) => {
        const currentIndex = categories.findIndex((c) => c.id === prev);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex].id;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused, categories]);

  // Center active tab in scroll container whenever active tab changes
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeCategory]);

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

        {/* Tab Pills Selector with Navigation Controls */}
        <div
          className="relative max-w-5xl mx-auto mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center justify-between gap-2">
            {/* Left Prev Navigation Button */}
            <button
              type="button"
              onClick={handlePrevTab}
              aria-label="Previous platform category"
              className="flex shrink-0 w-9 h-9 items-center justify-center rounded-full bg-zinc-950/80 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-rose-500/50 hover:bg-zinc-900 transition-all shadow-md cursor-pointer group"
            >
              <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Scrollable Tab Pills Container */}
            <div
              ref={tabsContainerRef}
              className="flex items-center gap-2 overflow-x-auto scrollbar-hide scroll-smooth py-2 px-1 w-full justify-start md:justify-center border-b border-zinc-900/60"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    ref={isActive ? activeTabRef : null}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.35)] scale-[1.02]"
                        : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Next Navigation Button */}
            <button
              type="button"
              onClick={handleNextTab}
              aria-label="Next platform category"
              className="flex shrink-0 w-9 h-9 items-center justify-center rounded-full bg-zinc-950/80 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-rose-500/50 hover:bg-zinc-900 transition-all shadow-md cursor-pointer group"
            >
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left Tall Card (Col 1) - Featured Big Card WITHOUT description */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[380px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
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

              {/* Card top details - Clean, No Description */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-white mb-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-600/10 border border-rose-500/20 flex items-center justify-center text-rose-500">
                    {currentCat.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                    {currentCat.label}
                  </h3>
                </div>

                <div className="w-10 h-[2px] bg-rose-500 my-4" />
              </div>

              {/* Card bottom Explore Button */}
              <div className="relative z-10 mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
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

          {/* Right Assets Grid (Col 2-4: 3 Columns x 2 Rows) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {currentCat.examples.map((item, idx) => {
                const IconComponent = item.icon;

                return (
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
                      /* Other Platform Tabs: Premium Enterprise Sub-Cards (6 Cards, 3x2 Grid) */
                      <div className="group/card flex flex-col justify-between bg-gradient-to-b from-zinc-900/40 via-zinc-950/70 to-black/90 border border-white/10 hover:border-rose-500/50 hover:bg-zinc-900/40 rounded-2xl p-6 transition-all duration-300 min-h-[175px] h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:-translate-y-1">
                        {/* Top Accent Glow on Hover */}
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500/0 group-hover/card:via-rose-500/70 to-transparent transition-all duration-500" />
                        <div className="absolute -top-10 -right-10 w-28 h-28 bg-rose-500/10 rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                          <div>
                            {/* Card Top: Icon & Feature Tag */}
                            <div className="flex items-center justify-between mb-4">
                              {IconComponent && (
                                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center group-hover/card:scale-110 group-hover/card:bg-rose-500 group-hover/card:text-white transition-all duration-300">
                                  <IconComponent className="w-5 h-5" />
                                </div>
                              )}
                              {item.tag && (
                                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold px-2 py-0.5 rounded bg-zinc-900/90 border border-zinc-800/80 group-hover/card:border-rose-500/30 transition-colors">
                                  {item.tag}
                                </span>
                              )}
                            </div>

                            {/* Card Title */}
                            <h4 className="text-base sm:text-lg font-bold text-white group-hover/card:text-rose-400 transition-colors mb-2 leading-snug">
                              {item.name}
                            </h4>

                            {/* 2-Line Specific Description */}
                            {item.desc && (
                              <p className="text-xs sm:text-sm text-zinc-400 group-hover/card:text-zinc-300 leading-relaxed font-normal transition-colors line-clamp-3">
                                {item.desc}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
