"use client";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";

import React, { useState, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight, Plus, Minus, Database, Cpu, BarChart2,
  Activity, Layers, Sparkles, Server, Workflow, HardDrive, Shield,
  Zap, Lock, Globe, AlertTriangle, ChevronRight, ChevronLeft, ShieldCheck, EyeOff, Gauge,
  Settings, RefreshCw, ShoppingBag, Factory, BookOpen, Heart, FileText, Sliders,
  Terminal, Box, GitBranch, Key, Users, Command, Network, Monitor, Send, Bell, Cloud,
  Search, Smartphone, Phone, Mail, MessageCircle, MessageSquare, Twitter, Headset, Smile, User, Star, Map,
  BrainCircuit, Bot, Lightbulb, TrendingUp, CheckCircle, Target, Compass, Blocks, Code, FastForward
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// 1. OVERVIEW
// ==========================================
const PlatformOverview = () => {
  const cards = [
    { title: "Internal Developer Platforms", desc: "Build self-service developer portals powered by Backstage to unify engineering workflows.", icon: Terminal },
    { title: "Golden Path Scaffolding", desc: "Automated repo templates, CI/CD pipelines, and IAM boundaries for instant zero-error onboarding.", icon: Workflow },
    { title: "Infrastructure as Code & GitOps", desc: "Declarative multi-cloud provisioning using Terraform, OpenTofu, and ArgoCD sync loops.", icon: GitBranch },
    { title: "Ephemeral Environments", desc: "On-demand isolated preview environments created dynamically per pull request.", icon: Box },
    { title: "Multi-Cloud Control Planes", desc: "Universal API abstraction over AWS, Azure, and GCP using Crossplane and Kubernetes CRDs.", icon: Cloud },
    { title: "Cost & FinOps Governance", desc: "Real-time Kubernetes pod cost tracking, automated idle-node scale downs, and quota enforcement.", icon: Gauge }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-3 block">DEVELOPER EXPERIENCE & INFRASTRUCTURE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white mb-4">
              Self-Service Platforms That Empower Product Teams
            </h2>
            
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group bg-zinc-950/45 border border-zinc-900 rounded-[2rem] overflow-hidden flex flex-col justify-between h-full hover:border-zinc-800 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300 p-8 min-h-[220px]">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight group-hover:text-rose-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 2. WHY PLATFORM ENGINEERING
// ==========================================
const WhyPlatformEngineering = () => {
  const traditional = [
    "Jira-ticket infrastructure requests", "Manual VPC and IAM provisioning", "Inconsistent deployment manifests",
    "Days to onboard new software engineers", "Configuration drift across staging and prod"
  ];
  const platformEngineering = [
    "Self-service 1-click cloud environments", "Declarative GitOps and automated compliance", "Standardized golden path scaffolding",
    "Under 30-minute developer onboarding", "Zero-drift automated reconciliation loops"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">PARADIGM SHIFT</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Moving from Ticket Queues to Self-Service Portals
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Traditional */}
          <Reveal delay={0.1}>
            <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-3xl h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                <Minus className="w-4 h-4 text-zinc-500" /> Traditional Operations
              </h3>
              <ul className="space-y-4">
                {traditional.map((c, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-zinc-300 font-medium">
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Platform Engineering */}
          <Reveal delay={0.2}>
            <div className="p-8 bg-gradient-to-br from-rose-950/20 to-zinc-950 border border-rose-900/30 rounded-3xl h-full shadow-[0_8px_32px_0_rgba(225,29,72,0.1)]">
              <h3 className="text-sm font-bold text-rose-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                <Plus className="w-4 h-4 text-rose-500" /> With Platform Engineering
              </h3>
              <ul className="space-y-4">
                {platformEngineering.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-white font-medium">
                    <CheckCircle className="w-4 h-4 text-rose-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. PLATFORM ARCHITECTURE
// ==========================================
const PlatformArchitecture = () => {
  const layers = [
    { name: "Developer Interface", desc: "Backstage Portal, CLI Tools, Service Catalog", color: "border-blue-500/50 bg-blue-500/10 text-blue-400" },
    { name: "Control Plane & Orchestration", desc: "Kubernetes Operators, Crossplane, Terraform GitOps", color: "border-indigo-500/50 bg-indigo-500/10 text-indigo-400" },
    { name: "Delivery & Continuous Release", desc: "ArgoCD, GitHub Actions, Automated Progressive Canary", color: "border-purple-500/50 bg-purple-500/10 text-purple-400" },
    { name: "Policy & Security Guardrails", desc: "Kyverno, Open Policy Agent (OPA), HashiCorp Vault", color: "border-rose-500/50 bg-rose-500/10 text-rose-400" },
    { name: "Observability & Telemetry", desc: "OpenTelemetry, Prometheus, Grafana, OpenCost", color: "border-amber-500/50 bg-amber-500/10 text-amber-400" },
    { name: "Multi-Cloud Infrastructure", desc: "AWS, Azure, GCP, Equinix Bare Metal & Kubernetes", color: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-4xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">ARCHITECTURE BLUEPRINT</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Modern Internal Developer Platform Stack</h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {layers.map((layer, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className={`p-6 border rounded-2xl flex flex-col md:flex-row justify-between items-center text-center md:text-left transition-all duration-300 hover:brightness-125 hover:-translate-y-1 shadow-lg ${layer.color}`}>
                <span className="text-sm md:text-base font-bold uppercase tracking-widest">{layer.name}</span>
                <span className="text-xs md:text-sm font-medium opacity-90 mt-2 md:mt-0 tracking-wide">{layer.desc}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. PLATFORM CAPABILITIES
// ==========================================
const PlatformCapabilities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 310;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const capabilities = [
    { title: "Service Catalog & IDP", tag: "Discover", desc: "Centralized Backstage software catalog managing APIs, services, and system dependencies.", image: "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp", href: "/ecosystem/technology-stack/platform-engineering/internal-developer-platforms" },
    { title: "Golden Path Scaffolding", tag: "Bootstrap", desc: "Standardized starter repos with built-in linting, CI/CD, and vulnerability checks.", image: "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp", href: "/ecosystem/technology-stack/platform-engineering/golden-path-templates" },
    { title: "Automated Preview Envs", tag: "Validate", desc: "Spun up and torn down per GitHub pull request with zero idle resource wastage.", image: "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp", href: "/ecosystem/technology-stack/platform-engineering/environment-automation" },
    { title: "Kubernetes Operator Fleet", tag: "Automate", desc: "Custom CRDs automating operational tasks like database backups and cert renewals.", image: "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp", href: "/ecosystem/technology-stack/cloud-native/kubernetes-management" },
    { title: "GitOps Continuous Delivery", tag: "Deploy", desc: "Declarative cluster reconciliation with automated rollback on health failures.", image: "/webp/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.webp", href: "/ecosystem/technology-stack/devops-toolchain/gitops-deployments" },
    { title: "Cloud FinOps Engine", tag: "Optimize", desc: "Automated idle compute termination and Kubernetes namespace chargebacks.", image: "/webp/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.webp", href: "/ecosystem/technology-stack/platform-engineering/developer-self-service-portals" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">ENGINEERING SUITE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Core Platform Engineering Capabilities</h2>
          </div>
        </Reveal>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[260px] sm:min-w-[280px] md:min-w-[290px] max-w-[300px] flex-shrink-0 snap-start">
              <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-rose-500/40 hover:shadow-[0_8px_30px_rgba(225,29,72,0.12)] transition-all duration-300 flex flex-col h-full min-h-[330px] group">
                <div className="w-full h-32 relative bg-zinc-900 overflow-hidden border-b border-zinc-800/80">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    unoptimized
                  />
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-rose-500 uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4 line-clamp-2 flex-grow">{item.desc}</p>
                  
                  <Link 
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-1.5 text-rose-500 text-xs font-semibold hover:text-rose-400 transition-colors cursor-pointer w-fit group/btn"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                      <ChevronRight size={12} />
                    </div>
                    Explore {item.title}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Navigation below scroller */}
        <div className="flex items-center justify-between mt-6 px-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <span className="text-xs font-mono text-zinc-500 tracking-wider">
            Explore all capabilities →
          </span>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. TECHNOLOGIES WE USE
// ==========================================
const PlatformTechnologies = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Portals & Catalogs", items: ["Spotify Backstage", "Port", "Compass", "Cortex"] },
    { name: "IaC & Control Planes", items: ["Terraform", "OpenTofu", "Crossplane", "Pulumi"] },
    { name: "GitOps & Delivery", items: ["ArgoCD", "FluxCD", "GitHub Actions", "GitLab CI"] },
    { name: "Containers & Mesh", items: ["Kubernetes", "Helm", "Cilium eBPF", "Istio"] },
    { name: "Policy & Governance", items: ["Kyverno", "OPA Gatekeeper", "HashiCorp Vault", "OpenCost"] }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-5xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">ECOSYSTEM TOOLS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Technologies in Our Platform Toolchain</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tabs sidebar */}
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left px-6 py-4 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === idx ? "bg-rose-500 text-white shadow-lg" : "bg-zinc-950 text-zinc-400 hover:bg-zinc-900 hover:text-white"}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="w-full md:w-2/3 bg-zinc-950/40 border border-zinc-900 rounded-[2rem] p-8 min-h-[250px] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {tabs[activeTab].items.map((item, i) => (
                  <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center flex items-center justify-center hover:border-rose-500/30 transition-colors">
                    <span className="text-sm md:text-base font-medium text-zinc-200 tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ==========================================
// 6. BUSINESS OUTCOMES
// ==========================================
const PlatformOutcomes = () => {
  const outcomes = [
    { value: "85%", title: "Reduction in Onboarding Time" },
    { value: "10x", title: "Faster Service Provisioning" },
    { value: "0", title: "Ticket-Driven Environment Spawns" },
    { value: "35%", title: "Cloud Cost Waste Reduction" },
    { value: "100%", title: "Automated Policy Enforcement" },
    { value: "99.9%", title: "Platform Availability SLA" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">BUSINESS VALUE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Proven Platform Engineering Outcomes</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-8 bg-zinc-950/50 border border-zinc-900 rounded-3xl hover:border-rose-500/30 transition-all flex flex-col justify-between min-h-[180px]">
                <div className="text-4xl sm:text-5xl font-extrabold text-rose-500 tracking-tight mb-2 font-mono">{item.value}</div>
                <div className="text-base md:text-lg font-bold text-white">{item.title}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// INDUSTRY USE CASES
// ==========================================
const PlatformIndustryUseCases = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 310;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const useCases = [
    { title: "FinTech & Banking", tag: "Finance", desc: "Automated PCI-compliant landing zones and self-service environment provisioning.", image: "/webp/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.webp", href: "/industries/banking-finance" },
    { title: "Healthcare & Life Sciences", tag: "Health", desc: "HIPAA-certified ephemeral preview environments and isolated cluster tenancy.", image: "/webp/assets/common/9d91b93f83e6d4cd494ec13611b3e50e-1.webp", href: "/industries/healthcare-life-sciences" },
    { title: "Retail & E-Commerce", tag: "Commerce", desc: "Peak traffic autoscaling platforms and single-click canary release automation.", image: "/webp/assets/common/b384eb0438c55e43c61e7595acc29638-1.webp", href: "/industries/retail-ecommerce" },
    { title: "Industrial & Manufacturing", tag: "Industrial", desc: "Edge IoT runtime scaffolding and container fleet deployment workflows.", image: "/webp/assets/common/e76e125035885aab9c9070ce85df239e-1.webp", href: "/industries/manufacturing" },
    { title: "Telecommunications", tag: "Networking", desc: "Multi-region cloud-native service mesh and automated zero-downtime upgrades.", image: "/webp/assets/common/f03cc521fb070dfae9d87768b791ff70-1.webp", href: "/industries/telecommunications" },
    { title: "Government & Public Sector", tag: "Public", desc: "Sovereign platform baselines, RBAC policy enforcement, and audit logs.", image: "/webp/assets/common/f317dd71184f5c47d601eeb9508bf92c-1.webp", href: "/industries/government-public-sector" },
    { title: "Education & EdTech", tag: "Learning", desc: "Multi-tenant learning cluster management and auto-tear down sandbox labs.", image: "/webp/assets/common/45ea830d170d382ade235db479060da7-1.webp", href: "/industries/education" },
    { title: "Logistics & Supply Chain", tag: "Supply Chain", desc: "Event-driven microservice templates and real-time streaming infrastructure.", image: "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp", href: "/industries/retail-ecommerce" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">SOLUTIONS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Industry Use Cases
            </h2>
          </div>
        </Reveal>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {useCases.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[260px] sm:min-w-[280px] md:min-w-[290px] max-w-[300px] flex-shrink-0 snap-start">
              <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-rose-500/40 hover:shadow-[0_8px_30px_rgba(225,29,72,0.12)] transition-all duration-300 flex flex-col h-full min-h-[330px] group">
                <div className="w-full h-32 relative bg-zinc-900 overflow-hidden border-b border-zinc-800/80">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" unoptimized />
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <span className="text-xs font-semibold tracking-[0.2em] text-rose-400 font-mono uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4 line-clamp-2 flex-grow">{item.desc}</p>
                  <Link 
                    href={item.href}
                    className="mt-auto flex items-center gap-2 text-rose-500 text-xs font-bold hover:text-white transition-colors cursor-pointer w-fit group/btn"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                      <ChevronRight size={12} />
                    </div>
                    Learn More
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Navigation below scroller */}
        <div className="flex items-center justify-between mt-6 px-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <span className="text-xs font-mono text-zinc-500 tracking-wider">
            Explore industry deployments →
          </span>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. FAQ & CTA
// ==========================================
const PlatformFAQ = () => {
  const faqs = [
    { q: "What is an Internal Developer Platform (IDP)?", a: "An IDP is a self-service layer built on top of your cloud infrastructure. It allows developers to configure environments, deploy microservices, and provision databases without raising operational tickets." },
    { q: "How does Platform Engineering differ from DevOps?", a: "DevOps is an operational philosophy emphasizing collaboration between Dev and Ops. Platform Engineering is the concrete practice of building an internal product (the platform) that product teams use to autonomously build and deploy code." },
    { q: "Can we integrate our existing CI/CD pipelines with Backstage?", a: "Yes. Backstage has official plugins for GitHub Actions, GitLab CI, ArgoCD, SonarQube, and Kubernetes, allowing full visibility across existing pipelines." }
  ];
  return <FAQ faqs={faqs} />;
};

const PlatformCTA = () => {
  return (
    <CTA
      ctaTitle="Accelerate Developer Velocity With"
      ctaHighlight="Internal Developer Platforms"
      ctaDesc="Provide self-service infrastructure, automated golden paths, and standardized guardrails for your engineering teams."
      ctaBtnText="EXPLORE PLATFORM SOLUTIONS"
      backLink="/ecosystem/technology-stack"
    />
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function PlatformEngineeringTechPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <Hero
        badge="Technology Stack"
        title={
          <>
            Platform <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Engineering
            </span>
          </>
        }
        subtitle="Empower engineering teams with self-service developer portals, golden path scaffolding, Kubernetes operators, and automated multi-cloud control planes."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "TECHNOLOGY STACK", href: "/ecosystem/technology-stack" },
          { label: "PLATFORM ENGINEERING" }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="/contact#contact-form" className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5">
            Talk to a Platform Architect
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link href="/ecosystem/technology-stack" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
            Explore All Tech Stacks
          </Link>
        </div>
      </Hero>

      <PlatformOverview />
      <WhyPlatformEngineering />
      <PlatformArchitecture />
      <PlatformCapabilities />
      <PlatformTechnologies />
      <PlatformOutcomes />
      <PlatformIndustryUseCases />
      <PlatformFAQ />
      <PlatformCTA />
    </main>
  );
}
