"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Github, Code2, Shield, Cpu, Layers, Terminal, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface RepoItem {
  id: string | number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  topics: string[];
  category: string;
  updated_at: string;
}

const FALLBACK_REPOS: RepoItem[] = [
  {
    id: "devopstrio-github-io",
    name: "devopstrio.github.io",
    description: "Devopstrio enterprise accelerator portal & reference architecture hub.",
    html_url: "https://github.com/Devopstrio/devopstrio.github.io",
    language: "TypeScript",
    stargazers_count: 42,
    topics: ["landing-zone", "cloud", "accelerator"],
    category: "landing-zone",
    updated_at: "2026-08-20"
  },
  {
    id: "azure-enterprise-landingzone",
    name: "azure-enterprise-landingzone",
    description: "CAF-aligned Azure Enterprise Landing Zone IaC blueprint with hub-spoke topology & policy guardrails.",
    html_url: "https://github.com/Devopstrio/azure-enterprise-landingzone",
    language: "HCL",
    stargazers_count: 89,
    topics: ["landing-zone", "terraform", "azure"],
    category: "landing-zone",
    updated_at: "2026-08-18"
  },
  {
    id: "aws-multi-account-accelerator",
    name: "aws-multi-account-accelerator",
    description: "AWS Control Tower & Org Landing Zone deployment template with automated SecurityHub and GuardDuty.",
    html_url: "https://github.com/Devopstrio/aws-multi-account-accelerator",
    language: "Terraform",
    stargazers_count: 76,
    topics: ["landing-zone", "aws", "security"],
    category: "landing-zone",
    updated_at: "2026-08-15"
  },
  {
    id: "genai-rag-enterprise-stack",
    name: "genai-rag-enterprise-stack",
    description: "Production GenAI & RAG infrastructure blueprint using Azure OpenAI, LangChain & PGVector.",
    html_url: "https://github.com/Devopstrio/genai-rag-enterprise-stack",
    language: "Python",
    stargazers_count: 114,
    topics: ["ai", "genai", "llm", "rag"],
    category: "ai",
    updated_at: "2026-08-22"
  },
  {
    id: "zero-trust-devsecops-pipeline",
    name: "zero-trust-devsecops-pipeline",
    description: "Hardened GitHub Actions CI/CD workflows with SAST, DAST, Trivy container scanning & SonarQube gates.",
    html_url: "https://github.com/Devopstrio/zero-trust-devsecops-pipeline",
    language: "YAML",
    stargazers_count: 95,
    topics: ["security", "devsecops", "cicd"],
    category: "security",
    updated_at: "2026-08-21"
  },
  {
    id: "aks-production-platform-template",
    name: "aks-production-platform-template",
    description: "Enterprise Azure Kubernetes Service baseline with Workload Identity, Calico CNI & ArgoCD GitOps.",
    html_url: "https://github.com/Devopstrio/aks-production-platform-template",
    language: "Helm",
    stargazers_count: 128,
    topics: ["devops", "kubernetes", "gitops"],
    category: "devops",
    updated_at: "2026-08-25"
  },
  {
    id: "azure-virtual-desktop-landingzone",
    name: "azure-virtual-desktop-landingzone",
    description: "Automated AVD & FSLogix host pool deployment modules for secure remote enterprise desktops.",
    html_url: "https://github.com/Devopstrio/azure-virtual-desktop-landingzone",
    language: "Bicep",
    stargazers_count: 58,
    topics: ["vdi", "avd", "azure"],
    category: "vdi",
    updated_at: "2026-08-14"
  },
  {
    id: "fintech-cloud-compliance-toolkit",
    name: "Fintech Cloud Compliance Toolkit",
    description: "Regulatory compliance guardrails (PCI-DSS, SOC2, HIPAA) for AWS and Azure multi-region architectures.",
    html_url: "https://github.com/Devopstrio/financial-services-lz",
    language: "Terraform",
    stargazers_count: 67,
    topics: ["industry", "compliance", "security"],
    category: "industry",
    updated_at: "2026-08-19"
  },
  {
    id: "healthcare-lz",
    name: "Healthcare Landing Zone",
    description: "HIPAA & HITRUST compliant cloud foundation with encrypted patient data stores and audit trails.",
    html_url: "https://github.com/Devopstrio/healthcare-lz",
    language: "HCL",
    stargazers_count: 54,
    topics: ["industry", "healthcare", "hipaa"],
    category: "industry",
    updated_at: "2026-08-18"
  },
  {
    id: "financial-services-lz",
    name: "Financial Services Landing Zone",
    description: "High-security banking and fintech foundation featuring PCI-DSS v4.0 controls and automated HSM key management.",
    html_url: "https://github.com/Devopstrio/financial-services-lz",
    language: "Terraform",
    stargazers_count: 81,
    topics: ["industry", "fintech", "banking"],
    category: "industry",
    updated_at: "2026-08-20"
  },
  {
    id: "automotive-lz",
    name: "Automotive Landing Zone",
    description: "Connected vehicle and telematics IoT streaming platform baseline with low-latency edge ingestion.",
    html_url: "https://github.com/Devopstrio/automotive-lz",
    language: "TypeScript",
    stargazers_count: 46,
    topics: ["industry", "automotive", "iot"],
    category: "industry",
    updated_at: "2026-08-17"
  },
  {
    id: "retail-lz",
    name: "Retail & E-Commerce Landing Zone",
    description: "Omnichannel retail platform with autoscaling event queues, product catalog caching, and checkout security.",
    html_url: "https://github.com/Devopstrio/retail-lz",
    language: "HCL",
    stargazers_count: 62,
    topics: ["industry", "retail", "ecommerce"],
    category: "industry",
    updated_at: "2026-08-16"
  },
  {
    id: "telecom-lz",
    name: "Telecom & 5G Edge Landing Zone",
    description: "Carrier-grade multi-access edge computing (MEC) architecture with NFV network slice automation.",
    html_url: "https://github.com/Devopstrio/telecom-lz",
    language: "HCL",
    stargazers_count: 39,
    topics: ["industry", "telecom", "5g"],
    category: "industry",
    updated_at: "2026-08-15"
  },
  {
    id: "energy-lz",
    name: "Energy & Utilities Landing Zone",
    description: "Smart grid telemetry, SCADA gateway isolation, and ESG carbon analytics platform blueprint.",
    html_url: "https://github.com/Devopstrio/energy-lz",
    language: "HCL",
    stargazers_count: 48,
    topics: ["industry", "energy", "iot"],
    category: "industry",
    updated_at: "2026-08-14"
  },
  {
    id: "manufacturing-lz",
    name: "Manufacturing Industry Landing Zone",
    description: "Industry 4.0 smart factory architecture with OPC-UA sensor telemetry and predictive maintenance pipelines.",
    html_url: "https://github.com/Devopstrio/manufacturing-lz",
    language: "TypeScript",
    stargazers_count: 51,
    topics: ["industry", "manufacturing", "iiot"],
    category: "industry",
    updated_at: "2026-08-13"
  },
  {
    id: "kubernetes-gitops-flux-cd",
    name: "kubernetes-gitops-flux-cd",
    description: "GitOps deployment controller automation using FluxCD and Kustomize for multi-cluster environments.",
    html_url: "https://github.com/Devopstrio/kubernetes-gitops-flux-cd",
    language: "YAML",
    stargazers_count: 82,
    topics: ["devops", "kubernetes", "gitops"],
    category: "devops",
    updated_at: "2026-08-17"
  },
  {
    id: "azure-openai-enterprise-agent",
    name: "azure-openai-enterprise-agent",
    description: "Enterprise multi-agent orchestrator powered by Azure OpenAI Service & Semantic Kernel.",
    html_url: "https://github.com/Devopstrio/azure-openai-enterprise-agent",
    language: "TypeScript",
    stargazers_count: 103,
    topics: ["ai", "genai", "agent"],
    category: "ai",
    updated_at: "2026-08-24"
  },
  {
    id: "aws-serverless-eventdriven-arch",
    name: "aws-serverless-eventdriven-arch",
    description: "Event-driven microservices architecture using AWS EventBridge, Lambda & DynamoDB.",
    html_url: "https://github.com/Devopstrio/aws-serverless-eventdriven-arch",
    language: "TypeScript",
    stargazers_count: 91,
    topics: ["devops", "aws", "serverless"],
    category: "devops",
    updated_at: "2026-08-16"
  },
  {
    id: "istio-service-mesh-hardening",
    name: "istio-service-mesh-hardening",
    description: "Zero Trust mTLS mesh configuration, authorization policies and telemetry routing.",
    html_url: "https://github.com/Devopstrio/istio-service-mesh-hardening",
    language: "HCL",
    stargazers_count: 74,
    topics: ["security", "kubernetes", "mesh"],
    category: "security",
    updated_at: "2026-08-13"
  },
  {
    id: "snowflake-dbt-data-pipeline",
    name: "snowflake-dbt-data-pipeline",
    description: "Modular dbt modeling and Snowflake warehouse automation pipeline for enterprise analytics.",
    html_url: "https://github.com/Devopstrio/snowflake-dbt-data-pipeline",
    language: "SQL",
    stargazers_count: 63,
    topics: ["ai", "data", "snowflake"],
    category: "ai",
    updated_at: "2026-08-11"
  }
];

export function GitHubAcceleratorsPortal() {
  const [repos, setRepos] = useState<RepoItem[]>(FALLBACK_REPOS);
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadRepos() {
      setLoading(true);
      try {
        // Try internal cached API route first (which has 375 verified repos & token access)
        const res = await fetch("/api/github-repos");
        let rawList: any[] = [];
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.repos) && data.repos.length > 0) {
            rawList = data.repos;
          }
        }

        // Fallback to direct public GitHub API if internal route fails
        if (rawList.length === 0) {
          const directRes = await fetch("https://api.github.com/orgs/Devopstrio/repos?per_page=100&sort=pushed&type=public");
          if (directRes.ok) {
            const data = await directRes.json();
            if (Array.isArray(data) && data.length > 0) {
              rawList = data;
            }
          }
        }

        if (rawList.length > 0) {
          const mapped: RepoItem[] = rawList
            .filter((r: any) => r.name !== ".github")
            .map((r: any) => {
              const nameLower = (r.name || "").toLowerCase();
              const topics = r.topics || [];
              let cat = "devops";
              // Check industry first (before generic 'lz' / 'landing' check catches them)
              if (
                nameLower.includes("fintech") ||
                nameLower.includes("automotive") ||
                nameLower.includes("healthcare") ||
                nameLower.includes("financial") ||
                nameLower.includes("insurance") ||
                nameLower.includes("manufacturing") ||
                nameLower.includes("retail") ||
                nameLower.includes("energy") ||
                nameLower.includes("telecom") ||
                nameLower.includes("media-entertainment") ||
                nameLower.includes("banking") ||
                nameLower.includes("pharma") ||
                nameLower.includes("industry") ||
                topics.includes("industry")
              ) {
                cat = "industry";
              } else if (nameLower.includes("vdi") || nameLower.includes("avd") || topics.includes("vdi")) {
                cat = "vdi";
              } else if (nameLower.includes("landing") || nameLower.endsWith("-lz") || topics.includes("landing-zone")) {
                cat = "landing-zone";
              } else if (
                nameLower.includes("ai") ||
                nameLower.includes("rag") ||
                nameLower.includes("genai") ||
                nameLower.includes("llm") ||
                nameLower.includes("prompt") ||
                nameLower.includes("gpt") ||
                topics.includes("ai")
              ) {
                cat = "ai";
              } else if (
                nameLower.includes("sec") ||
                nameLower.includes("trust") ||
                nameLower.includes("auth") ||
                nameLower.includes("audit") ||
                nameLower.includes("siem") ||
                nameLower.includes("compliance") ||
                topics.includes("security")
              ) {
                cat = "security";
              }

              // Clean formatted name
              let displayName = r.name
                .split(/[-_]/)
                .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ");

              // Industry specific naming polish (e.g. Lz -> Landing Zone)
              if (displayName.endsWith(" Lz")) {
                displayName = displayName.replace(/ Lz$/, " Landing Zone");
              }

              // Meaningful description fallback based on category and name
              let autoDesc = r.desc || r.description;
              if (!autoDesc || autoDesc === "Devopstrio Landing Zone Accelerator") {
                if (cat === "industry") {
                  autoDesc = `Industry-tailored enterprise compliance & cloud architecture blueprint designed specifically for ${displayName.replace(" Landing Zone", "")} workloads.`;
                } else if (cat === "landing-zone") {
                  autoDesc = "CAF-aligned multi-cloud enterprise landing zone blueprint with policy guardrails & hub-spoke topology.";
                } else if (cat === "ai") {
                  autoDesc = "Production-grade enterprise AI, GenAI gateway, and RAG search architecture blueprint.";
                } else if (cat === "security") {
                  autoDesc = "Zero-Trust compliance guardrails, automated security scanning, and IAM baseline controls.";
                } else if (cat === "vdi") {
                  autoDesc = "Automated Azure Virtual Desktop (AVD) & remote enterprise workforce infrastructure blueprint.";
                } else {
                  autoDesc = "Enterprise-grade CI/CD pipeline, GitOps automation, and cloud infrastructure accelerator.";
                }
              }

              return {
                id: r.id || r.name,
                name: displayName,
                description: autoDesc,
                html_url: r.url || r.html_url || `https://github.com/Devopstrio/${r.name}`,
                language: r.lang || r.language || (nameLower.includes("terraform") ? "HCL" : "TypeScript"),
                stargazers_count: r.stars || r.stargazers_count || 0,
                topics: topics.length > 0 ? topics.slice(0, 3) : [cat],
                category: cat,
                updated_at: r.pushed_at ? new Date(r.pushed_at).toISOString().split("T")[0] : "2026-08-20"
              };
            });
          setRepos(mapped);
        }
      } catch (err) {
        console.warn("GitHub API rate limit or network error — fallback catalog active.");
      } finally {
        setLoading(false);
      }
    }
    loadRepos();
  }, []);

  const categories = [
    { id: "all", label: "All Repositories" },
    { id: "landing-zone", label: "Landing Zones" },
    { id: "ai", label: "AI & GenAI" },
    { id: "security", label: "Zero Trust & Security" },
    { id: "devops", label: "DevOps & Kubernetes" },
    { id: "vdi", label: "VDI & Cloud Desktop" },
    { id: "industry", label: "Industry Blueprints" }
  ];

  const filteredRepos = activeFilter === "all"
    ? repos
    : repos.filter((r) => r.category === activeFilter);

  const mainServicesCatalog = [
    {
      title: "Cloud & Landing Zone Services",
      icon: <Layers className="w-6 h-6 text-rose-500" />,
      link: "/services/cloud-services/cloud-architecture",
      linkText: "Explore Cloud Architecture",
      items: ["Azure Landing Zones", "AWS Control Tower", "IaC Terraform & Bicep"]
    },
    {
      title: "DevSecOps & Platform Automation",
      icon: <Terminal className="w-6 h-6 text-rose-500" />,
      link: "/services/devops-automation",
      linkText: "Explore DevOps Automation",
      items: ["ArgoCD & GitOps", "Hardened AKS & EKS", "CI/CD Release Pipelines"]
    },
    {
      title: "AI Transformation & Data Engineering",
      icon: <Sparkles className="w-6 h-6 text-rose-500" />,
      link: "/services/ai-consulting",
      linkText: "Explore AI Services",
      items: ["Azure OpenAI & Vector Search", "LLMOps & Prompt Orchestration", "Enterprise Lakehouse Architecture"]
    },
    {
      title: "Zero Trust Cybersecurity",
      icon: <Shield className="w-6 h-6 text-rose-500" />,
      link: "/services/cybersecurity",
      linkText: "Explore Cybersecurity",
      items: ["Zero Trust Security Baseline", "SOC2 / ISO / HIPAA Guardrails", "Automated SAST & DAST Gates"]
    }
  ];

  return (
    <section id="github-portal" className="w-full py-24 bg-black text-white border-b border-zinc-900 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">

        {/* 1st Header: GitHub Live Repos Portal */}
        <Reveal className="mb-12 text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-black">
            <Github className="w-9 h-9 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-4 text-white">
            Live Open-Source <span className="text-rose-500">Accelerators</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Battle-tested infrastructure as code, enterprise landing zones, and AI deployment blueprints directly from our official open-source repositories.
          </p>
        </Reveal>

        {/* Category Filter Tabs */}
        <Reveal className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 border-b border-zinc-900 pb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  setVisibleCount(9);
                }}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border ${
                  activeFilter === cat.id
                    ? "bg-rose-500 border-rose-500 text-white shadow-[0_4px_20px_rgba(244,63,94,0.35)]"
                    : "bg-zinc-950/60 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Repositories Grid (Shows minimum 9, loads next 6 on click) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredRepos.slice(0, visibleCount).map((repo, idx) => (
            <Reveal key={repo.id} delay={idx * 0.05} className="h-full">
              <div className="group flex flex-col justify-between bg-zinc-950/50 border border-white/5 hover:border-rose-500/40 rounded-2xl p-6 transition-all duration-300 h-full min-h-[220px] backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:-translate-y-1">
                <div>
                  {/* Repo Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-rose-500 font-semibold uppercase tracking-wider">
                      <Code2 className="w-4 h-4 text-rose-500" />
                      <span>{repo.language}</span>
                    </div>
                    {repo.stargazers_count > 0 && (
                      <span className="text-xs md:text-sm font-mono text-amber-400 font-semibold flex items-center gap-1">
                        ★ {repo.stargazers_count}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-rose-400 transition-colors mb-2 tracking-tight">
                    {repo.name}
                  </h3>

                  {/* Description (Clearly visible by default, with group-hover text color polish) */}
                  <p className="text-zinc-400 group-hover:text-zinc-200 text-sm md:text-base font-normal leading-relaxed mb-4 line-clamp-3 transition-colors duration-200">
                    {repo.description}
                  </p>
                </div>

                {/* Footer with GitHub Link */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm md:text-base font-semibold uppercase tracking-wider text-rose-500 hover:text-white transition-colors shrink-0"
                  >
                    <span>View Repo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredRepos.length && (
          <div className="flex justify-center -mt-8 mb-24">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-zinc-900 border border-zinc-800 text-white font-semibold text-sm md:text-base hover:bg-zinc-800 hover:border-rose-500/50 hover:text-rose-400 transition-all duration-300 shadow-xl shadow-black group"
            >
              <span>Load More Repositories ({filteredRepos.length - visibleCount} remaining)</span>
              <span className="w-2 h-2 rounded-full bg-rose-500 group-hover:scale-125 transition-transform" />
            </button>
          </div>
        )}

        {/* 2nd Section Header: Catalog Main Services */}
        <Reveal className="mb-14 text-center max-w-3xl mx-auto border-t border-zinc-900 pt-16">
          {/* <span className="text-xs font-mono font-semibold tracking-[0.25em] uppercase text-rose-500 block mb-3">
            CATALOG & CORE SOLUTIONS
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-4 text-white">
            Main Services & Service Catalog
          </h2>
          
        </Reveal>

        {/* Main Services 2x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {mainServicesCatalog.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 0.1}>
              <div className="group flex flex-col justify-between bg-zinc-950/40 border border-white/5 hover:border-rose-500/30 rounded-3xl p-8 transition-all duration-300 h-full backdrop-blur-md">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-rose-950/30 group-hover:border-rose-500/40 transition-all duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight uppercase mb-6">
                    {service.title}
                  </h3>

                  <ul className="space-y-3 mb-8 border-t border-zinc-900 pt-6">
                    {service.items.map((item) => (
                      <li key={item} className="text-sm md:text-base text-zinc-200 font-semibold flex items-center gap-3">
                        <CheckCircle2 className="w-4.5 h-4.5 text-rose-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-900">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-sm md:text-base font-semibold uppercase tracking-wider text-rose-500 hover:text-white transition-colors"
                  >
                    <span>{service.linkText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Global GitHub Callout Banner */}
        <Reveal className="text-center">
          <div className="bg-gradient-to-r from-zinc-950 via-rose-950/20 to-zinc-950 border border-rose-500/30 rounded-3xl p-8 md:p-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_50px_rgba(244,63,94,0.1)]">
            <div className="text-left">
              <h4 className="text-xl md:text-2xl font-semibold text-white uppercase tracking-wider mb-2">
                Explore Devopstrio GitHub Organization
              </h4>
              {/* <p className="text-zinc-300 text-xs md:text-sm font-semibold">
                Access over 180+ open-source infrastructure modules, IaC blueprints, and enterprise landing zones.
              </p> */}
            </div>

            <a
              href="https://github.com/orgs/Devopstrio/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-semibold text-xs md:text-sm uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shrink-0 shadow-lg shadow-white/10"
            >
              <Github className="w-4 h-4 text-black" />
              <span>Browse All Repos</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
