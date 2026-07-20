"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Server,
  Cpu,
  Shield,
  Layers,
  GitBranch,
  Star,
  Activity,
  Terminal,
  Settings,
  CheckCircle2,
  Sparkles,
  BookOpen,
  ArrowRight,
  Lock,
  Boxes,
  Database,
  CloudLightning,
  Search,
  Check,
  ExternalLink,
  Code,
  Github,
  GitFork,
  Cloud,
  FileCode,
  Workflow,
  Eye,
  Sliders,
  HardDrive,
  Key,
  Flame,
  X,
  Play,
  FileText,
  HelpCircle,
  Plus,
  Minus,
  Download,
  ArrowUpRight
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

// --- Types ---
interface RepoItem {
  id: string;
  name: string;
  desc: string;
  language: string;
  framework: string;
  version: string;
  status: string;
  stars: number;
  rating: string;
  lastUpdated: string;
  tags: string[];
  cloud: "Azure" | "AWS" | "Google Cloud" | "Oracle Cloud" | "Multi-Cloud";
  category: "Landing Zone" | "Terraform" | "Networking" | "Security" | "Monitoring";
  features: string[];
  codeSnippet: string;
  docsContent: string;
}

export default function EnterpriseLandingZonePage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedRepoModal, setSelectedRepoModal] = useState<RepoItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);
  const [demoSubmitted, setDemoSubmitted] = useState<boolean>(false);

  // --- KPI Stats ---
  const kpis = [
    { value: "99.9%", label: "Availability Standard" },
    { value: "100%", label: "IaC Automation" },
    { value: "4", label: "Multi-Cloud Platforms" },
    { value: "50+", label: "Terraform Modules" }
  ];

  // --- Repository Database ---
  const repositories: RepoItem[] = [
    {
      id: "repo-azure-lz",
      name: "Azure Enterprise Landing Zone",
      desc: "Production-ready Azure CAF Enterprise Landing Zone topology using Terraform. Includes Hub-and-Spoke VNet, Log Analytics, Azure Firewall, Azure Defender, and Privileged Identity Management.",
      language: "HCL / Terraform",
      framework: "Azure CAF",
      version: "v2.4",
      status: "🟢 Active",
      stars: 342,
      rating: "★★★★★",
      lastUpdated: "2 days ago",
      tags: ["Azure", "Terraform", "Networking", "Security", "Monitoring"],
      cloud: "Azure",
      category: "Landing Zone",
      features: ["Documentation", "Modules", "Examples", "Pipelines", "Releases"],
      codeSnippet: `module "enterprise_landing_zone" {
  source  = "Devopstrio/caf-landing-zone/azurerm"
  version = "2.4.0"

  root_parent_id   = var.root_management_group_id
  root_id          = "devopstrio"
  root_name        = "Devopstrio Global Enterprise"
  deploy_core_landing_zones = true
  
  security_contact_email = "security@devopstrio.com"
  log_analytics_retention_days = 90
}`,
      docsContent: "Comprehensive deployment guide for Azure Cloud Adoption Framework (CAF) Enterprise Landing Zones. Covers management group hierarchy, subscription vending machine, central log analytics workspace, and Azure Firewall policy automation."
    },
    {
      id: "repo-aws-lz",
      name: "AWS Enterprise Landing Zone",
      desc: "Hardened multi-account AWS landing zone blueprint leveraging Control Tower, AWS Organizations, Transit Gateway, and GuardDuty centralization.",
      language: "HCL / Terraform",
      framework: "AWS Control Tower",
      version: "v1.8",
      status: "🟢 Active",
      stars: 289,
      rating: "★★★★☆",
      lastUpdated: "5 days ago",
      tags: ["AWS", "Terraform", "Networking", "Security"],
      cloud: "AWS",
      category: "Landing Zone",
      features: ["Documentation", "Modules", "Examples", "Pipelines", "Releases"],
      codeSnippet: `module "aws_landing_zone" {
  source  = "Devopstrio/control-tower-lz/aws"
  version = "1.8.2"

  organization_unit_name = "Core-Workloads"
  sso_admin_group        = "CloudArchitects"
  enable_guardduty       = true
  enable_security_hub    = true
  transit_gateway_asn    = 64512
}`,
      docsContent: "AWS Control Tower custom Landing Zone engine with automated Account Factory setup, IAM Identity Center (AWS SSO) integration, and Centralized Logging S3 buckets."
    },
    {
      id: "repo-gcp-lz",
      name: "Google Cloud Landing Zone",
      desc: "Standardized GCP organization hierarchy with Shared VPC networks, Cloud IAM roles, Cloud Armor policies, and Vertex AI private VPC perimeters.",
      language: "HCL / Terraform",
      framework: "GCP Foundations",
      version: "v2.1",
      status: "🟢 Active",
      stars: 215,
      rating: "★★★★★",
      lastUpdated: "3 days ago",
      tags: ["Google Cloud", "Terraform", "Networking", "Security"],
      cloud: "Google Cloud",
      category: "Landing Zone",
      features: ["Documentation", "Modules", "Examples", "Pipelines", "Releases"],
      codeSnippet: `module "gcp_landing_zone" {
  source  = "Devopstrio/foundations/google"
  version = "2.1.0"

  org_id          = "1234567890"
  billing_account = "012345-6789AB-CDEF01"
  shared_vpc_host_project = "devopstrio-vpc-host"
  enable_vertex_ai_perimeter = true
}`,
      docsContent: "GCP Cloud Foundation Fabric module supporting multi-folder landing zone hierarchy, Shared VPC subnets, Organization Policy constraints, and VPC Service Controls."
    },
    {
      id: "repo-oracle-lz",
      name: "Oracle Cloud Landing Zone",
      desc: "Enterprise OCI Compartment structure, VCN peering, Identity Domain policies, and Cloud Guard baseline security guardrails.",
      language: "HCL / Terraform",
      framework: "OCI CIS Foundations",
      version: "v1.5",
      status: "🟢 Active",
      stars: 168,
      rating: "★★★★☆",
      lastUpdated: "1 week ago",
      tags: ["Oracle Cloud", "Terraform", "Networking", "Security"],
      cloud: "Oracle Cloud",
      category: "Landing Zone",
      features: ["Documentation", "Modules", "Examples", "Pipelines", "Releases"],
      codeSnippet: `module "oci_landing_zone" {
  source  = "Devopstrio/cis-landing-zone/oci"
  version = "1.5.0"

  tenancy_ocid     = var.tenancy_ocid
  compartment_name = "Devopstrio-Production-LZ"
  enable_cloud_guard = true
}`,
      docsContent: "OCI Enterprise Landing Zone conforming to CIS Oracle Cloud Infrastructure Foundations Benchmark. Automates compartment structure, VCN hub, and security zones."
    },
    {
      id: "repo-networking",
      name: "Hub-and-Spoke Networking Module",
      desc: "Cross-cloud Virtual Network and Transit Gateway orchestration module with automated BGP peering, Network Security Groups, and Cloud Firewalls.",
      language: "HCL / Terraform",
      framework: "Terraform Module",
      version: "v1.3",
      status: "🟢 Active",
      stars: 194,
      rating: "★★★★★",
      lastUpdated: "Yesterday",
      tags: ["Terraform", "Networking", "Azure", "AWS"],
      cloud: "Multi-Cloud",
      category: "Networking",
      features: ["Documentation", "Modules", "Examples", "Pipelines", "Releases"],
      codeSnippet: `module "hub_spoke_network" {
  source  = "Devopstrio/hub-spoke/network"
  version = "1.3.0"

  hub_vnet_cidr   = "10.0.0.0/16"
  spoke_vnets     = ["10.1.0.0/16", "10.2.0.0/16"]
  enable_azure_firewall = true
}`,
      docsContent: "Reusable network architecture module provisioning Hub VNets/VPCs, Azure ExpressRoute / AWS DirectConnect gateway attachments, and central egress firewalls."
    },
    {
      id: "repo-security",
      name: "Zero Trust Security Baseline Module",
      desc: "Automated SIEM logging, Privileged Access Management, Defender for Cloud policies, and HashiCorp Vault key vault integrations.",
      language: "HCL / Terraform",
      framework: "Zero Trust",
      version: "v2.1",
      status: "🟢 Active",
      stars: 278,
      rating: "★★★★★",
      lastUpdated: "3 days ago",
      tags: ["Security", "Terraform", "Azure", "AWS"],
      cloud: "Multi-Cloud",
      category: "Security",
      features: ["Documentation", "Modules", "Examples", "Pipelines", "Releases"],
      codeSnippet: `module "security_baseline" {
  source  = "Devopstrio/security-baseline/tf"
  version = "2.1.0"

  enable_sentinel_siem = true
  enable_key_vault_hsm = true
  enforce_mfa_policies = true
}`,
      docsContent: "Enterprise security baseline module deploying Azure Sentinel SIEM / AWS SecurityHub, Key Vault HSMs, RBAC policies, and automated compliance auditing."
    }
  ];

  // Filtering Logic
  const filteredRepos = repositories.filter((repo) => {
    if (activeFilter === "All") return true;
    return repo.tags.includes(activeFilter) || repo.cloud === activeFilter || repo.category === activeFilter;
  });

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-20 font-sans selection:bg-rose-600 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex items-center bg-[#030303] text-white pt-20 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-zinc-900/80">
        {/* Background Ambient Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">

              <Reveal delay={0.05}>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  ENTERPRISE ACCELERATION
                </span>
              </Reveal>

              {/* Heading */}
              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                  Enterprise Cloud <br />
                  <span className="text-[#E11D48]">Landing Zones.</span>
                </h1>
              </Reveal>

              {/* Description */}
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-6">
                  Accelerate cloud adoption with secure, scalable, and automated landing zones built using Infrastructure as Code (Terraform / Bicep) and enterprise-grade governance across Azure, AWS, GCP, and Oracle Cloud.
                </p>
              </Reveal>

              {/* Cloud Highlights Badges */}
              <Reveal delay={0.25}>
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  {[
                    { name: "Azure Landing Zone", color: "bg-[#E11D48]" },
                    { name: "AWS Landing Zone", color: "bg-[#E11D48]" },
                    { name: "Google Cloud", color: "bg-[#E11D48]" },
                    { name: "Oracle Cloud", color: "bg-[#E11D48]" },
                    { name: "Terraform", color: "bg-zinc-800" },
                    { name: "GitHub Actions", color: "bg-zinc-800" }
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className={`inline-flex items-center justify-center px-3 py-1.5 rounded text-[10px] md:text-xs font-black tracking-[0.1em] uppercase ${item.color} text-white shadow-[0_4px_15px_rgba(225,29,72,0.25)] hover:scale-105 transition-all duration-300`}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-4 items-center justify-start">
                  <button
                    onClick={() => {
                      const el = document.getElementById("git-showcase");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                  >
                    <Github className="w-4 h-4 mr-2" /> Explore Repositories
                  </button>
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-rose-500 mr-2" /> Request Demo & Spec
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Hero Image */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
              <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
                <img
                  src="/assets/herocard/Landingzone.png"
                  alt="Enterprise Cloud Landing Zone Architecture"
                  className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain select-none shadow-2xl rounded-2xl"
                />
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* KPI STATS STRIP (Home Page Style) */}
      <section className="w-full py-12 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-5xl mx-auto">
              {kpis.map((kpi, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center px-2">
                  <span className="text-3xl md:text-4xl xl:text-5xl font-black text-rose-500 tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(225,29,72,0.4)] select-none">
                    {kpi.value}
                  </span>
                  <span className="text-zinc-300 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                    {kpi.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. WHAT IS A LANDING ZONE? */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                FOUNDATIONAL OVERVIEW
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white leading-tight mb-4">
                What is a Cloud Landing Zone?
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-semibold">
                A Landing Zone is an environment for provisioning workloads, pre-configured with security, network, identity, and compliance guardrails.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Secure Cloud Foundation", icon: Shield, desc: "Isolated accounts, subscriptions, and security perimeters for production and dev workloads." },
              { title: "Standardized Architecture", icon: Boxes, desc: "Repeatable hub-and-spoke topology across Azure, AWS, GCP, and Oracle Cloud." },
              { title: "Identity & Access Control", icon: Lock, desc: "Centralized Azure AD / Okta / AWS SSO integration with strict RBAC rules." },
              { title: "Network Orchestration", icon: Server, desc: "Automated Virtual Networks, Subnets, Firewalls, ExpressRoute, and Transit Gateways." },
              { title: "Governance & Policies", icon: Sliders, desc: "Continuous policy enforcement, automated drift detection, and SOC2/HIPAA compliance." },
              { title: "Automated Security", icon: Flame, desc: "SIEM log analytics, Key Vault secret isolation, Defender for Cloud, and Sentinel." },
              { title: "IaC Automation", icon: Code, desc: "100% Infrastructure as Code with Terraform modules and automated CI/CD pipelines." },
              { title: "Central Operations", icon: Activity, desc: "Unified monitoring, cost optimization, log archiving, and incident management." }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="flex flex-col bg-[#0A0A0A] rounded-[24px] p-6 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] group h-full">
                  <item.icon className="w-8 h-8 text-rose-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-zinc-100 text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-medium">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LANDING ZONE ARCHITECTURE DIAGRAM */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                HIGH-LEVEL WORKFLOW
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white leading-tight mb-4">
                Landing Zone Architecture Pipeline
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-semibold">
                End-to-end automated pipeline from developer commit to multi-cloud landing zone deployment.
              </p>
            </div>
          </Reveal>

          <div className="p-8 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
              {[
                { title: "Developer", icon: Terminal, badge: "IaC Commit" },
                { title: "GitHub", icon: Github, badge: "Repo Sync" },
                { title: "GitHub Actions", icon: Workflow, badge: "CI/CD Pipeline" },
                { title: "Terraform", icon: Code, badge: "Plan & Apply" },
                { title: "Cloud Landing Zone", icon: Cloud, badge: "Live Deployment" }
              ].map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center text-center p-5 rounded-[18px] bg-black border border-zinc-800 w-full lg:w-48 group hover:border-rose-500/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-rose-600/10 text-rose-500 border border-rose-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-rose-400 font-bold mb-1 uppercase tracking-widest">{step.badge}</span>
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                  </div>

                  {idx < 4 && (
                    <div className="hidden lg:flex items-center text-rose-500">
                      <ArrowRight className="w-6 h-6 animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Sub Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-10 pt-8 border-t border-zinc-800/80 text-center">
              {["Networking", "Security", "Identity", "Monitoring", "Logging"].map((sub, i) => (
                <div key={i} className="p-3 rounded-xl bg-black border border-zinc-800 text-xs font-mono font-bold text-zinc-300 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  {sub}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SUPPORTED CLOUDS */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                MULTI-CLOUD SUPPORT
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white leading-tight mb-4">
                Supported Cloud Platforms
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-semibold">
                Pre-built landing zones tailored for all major hyper-scale cloud providers.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Azure Landing Zone", desc: "Microsoft Cloud Adoption Framework (CAF) with Subscription Vending & Policy Guardrails.", badge: "Azure" },
              { name: "AWS Landing Zone", desc: "AWS Control Tower multi-account architecture with Organization Units & GuardDuty.", badge: "AWS" },
              { name: "Google Cloud Landing Zone", desc: "GCP Foundations Fabric with Shared VPC networks & VPC Service Controls.", badge: "Google Cloud" },
              { name: "Oracle Cloud Landing Zone", desc: "OCI CIS Foundations Benchmark with Compartment hierarchy & Cloud Guard.", badge: "Oracle Cloud" }
            ].map((cloud, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="flex flex-col bg-[#0A0A0A] rounded-[24px] p-6 border border-zinc-800/80 hover:border-rose-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] group h-full justify-between">
                  <div className="space-y-3">
                    <span className="inline-flex items-center px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest bg-[#E11D48] text-white">
                      {cloud.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">{cloud.name}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">{cloud.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      const el = document.getElementById("git-showcase");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-rose-500 hover:text-rose-400 transition-colors uppercase tracking-wider"
                  >
                    View Blueprint <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE COMPONENTS GRID */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                BUILDING BLOCKS
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white leading-tight mb-4">
                Core Landing Zone Components
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-semibold">
                12 essential foundation blocks built into every enterprise deployment.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Identity & Access", "Hub & Spoke Networking", "Resource Groups & OUs", "Policy Enforcement",
              "IAM & Role Mapping", "Security Center & Defender", "Centralized Monitoring", "Log Analytics Archive",
              "Backup & DR Vaults", "Cost & FinOps Controls", "Compliance Governance", "CI/CD Pipeline Automation"
            ].map((comp, idx) => (
              <div key={idx} className="p-4 rounded-[16px] bg-[#0A0A0A] border border-zinc-800/80 flex items-center gap-3 hover:border-rose-500/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span className="text-xs font-bold text-zinc-200">{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GIT REPOSITORY SHOWCASE ⭐ & DASHBOARD */}
      <section id="git-showcase" className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-12 xl:px-8 space-y-12">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                GIT REPOSITORY SHOWCASE & DASHBOARD
              </span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Enterprise Repository Directory
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed font-semibold">
                Browse production-ready GitHub repositories, Terraform modules, and deployment automation pipelines.
              </p>
            </div>
          </Reveal>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {["All", "Azure", "AWS", "Google Cloud", "Oracle Cloud", "Terraform", "Networking", "Security", "Monitoring"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#E11D48] text-white shadow-[0_4px_15px_rgba(225,29,72,0.35)]"
                    : "bg-[#0A0A0A] text-zinc-400 hover:text-white border border-zinc-800/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Repository Dashboard Table */}
          <div className="rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] overflow-hidden shadow-2xl">
            <div className="px-6 py-4 border-b border-zinc-800/80 bg-black flex justify-between items-center">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Github className="w-4 h-4 text-rose-500" />
                Repository Directory Table
              </h3>
              <span className="text-xs font-mono text-zinc-400 font-semibold">
                Showing {filteredRepos.length} Repositories
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-zinc-300">
                <thead className="bg-zinc-950 text-zinc-400 uppercase font-mono text-[10px] tracking-wider border-b border-zinc-800/80">
                  <tr>
                    <th className="px-6 py-3.5">Repository</th>
                    <th className="px-6 py-3.5">Language</th>
                    <th className="px-6 py-3.5">Version</th>
                    <th className="px-6 py-3.5">Status</th>
                    <th className="px-6 py-3.5">Last Update</th>
                    <th className="px-6 py-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                  {filteredRepos.map((repo) => (
                    <tr key={repo.id} className="hover:bg-black/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-white flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-rose-500" />
                        {repo.name}
                      </td>
                      <td className="px-6 py-4 font-mono text-rose-400">{repo.language}</td>
                      <td className="px-6 py-4 font-mono text-zinc-300">{repo.version}</td>
                      <td className="px-6 py-4 font-bold text-emerald-400">{repo.status}</td>
                      <td className="px-6 py-4 text-zinc-400">{repo.lastUpdated}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setSelectedRepoModal(repo)}
                          className="px-3 py-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600 text-rose-400 hover:text-white font-bold text-xs transition-colors border border-rose-500/30 flex items-center gap-1.5 ml-auto"
                        >
                          <BookOpen className="w-3.5 h-3.5" /> View Docs & Setup
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* GitHub Repository Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredRepos.map((repo) => (
              <div
                key={repo.id}
                className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all flex flex-col justify-between space-y-6 group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-[#E11D48] text-white">
                        {repo.cloud} &bull; {repo.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-2 group-hover:text-rose-400 transition-colors">
                        {repo.name}
                      </h3>
                    </div>
                    <span className="text-amber-400 text-xs tracking-widest font-mono">
                      {repo.rating}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {repo.desc}
                  </p>

                  <div className="pt-2 border-t border-zinc-850 flex flex-wrap gap-2 text-[10px] font-mono text-zinc-400">
                    {repo.features.map((feat, i) => (
                      <span key={i} className="text-emerald-400 font-bold flex items-center gap-1">
                        ✔ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-850 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {repo.stars}
                  </span>

                  <button
                    onClick={() => setSelectedRepoModal(repo)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-lg"
                  >
                    <span>View Repository</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. DEPLOYMENT WORKFLOW */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                DEPLOYMENT PROCESS
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white leading-tight mb-4">
                6-Step Deployment Workflow
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-semibold">
                From code clone to automated multi-cloud environment creation.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { step: "01", title: "Clone Repo", desc: "Clone target landing zone blueprint repo." },
              { step: "02", title: "Config Vars", desc: "Define parameters in terraform.tfvars." },
              { step: "03", title: "GitHub Actions", desc: "Trigger automated PR check pipeline." },
              { step: "04", title: "Terraform Plan", desc: "Review speculative execution plan." },
              { step: "05", title: "Terraform Apply", desc: "Provision infrastructure with state lock." },
              { step: "06", title: "LZ Live", desc: "Landing zone active & compliant." }
            ].map((wf, idx) => (
              <div key={idx} className="p-5 rounded-[20px] bg-[#0A0A0A] border border-zinc-800/80 space-y-2 text-center relative hover:border-rose-500/40 transition-colors">
                <span className="text-xs font-mono font-extrabold text-rose-500 bg-rose-600/10 px-2.5 py-0.5 rounded border border-rose-500/20">
                  Step {wf.step}
                </span>
                <h4 className="text-sm font-bold text-white pt-2">{wf.title}</h4>
                <p className="text-[11px] text-zinc-400 font-medium">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INFRASTRUCTURE MODULES */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                REUSABLE TERRAFORM MODULES
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white leading-tight mb-4">
                Infrastructure Modules
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-semibold">
                Modular, version-controlled Infrastructure as Code blocks.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "VNet Module", desc: "Automated subnets, NAT Gateways & NSG rules." },
              { name: "Storage Module", desc: "Encrypted Blob/S3 storage with private endpoints." },
              { name: "Key Vault Module", desc: "HSM secret isolation, RBAC & auto-rotation." },
              { name: "Firewall Module", desc: "Central egress rule enforcement & threat intelligence." },
              { name: "AKS Module", desc: "Hardened Kubernetes, Cilium eBPF & OIDC IRSA." },
              { name: "VM Module", desc: "Hardened OS images, automated patching & SSH key vault." },
              { name: "SQL Module", desc: "HA PostgreSQL/MySQL with failover replicas." },
              { name: "Monitoring Module", desc: "Log Analytics workspaces & pre-built alert rules." }
            ].map((mod, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] space-y-3 group h-full">
                  <div className="w-10 h-10 rounded-xl bg-rose-600/10 text-rose-500 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">{mod.name}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">{mod.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. AUTOMATION & IAC */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                ORCHESTRATION TOOLING
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white leading-tight mb-4">
                Automation & IaC Engine
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-semibold">
                Compatible with industry standard DevOps tools.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["GitHub Actions", "Azure DevOps", "Terraform / OpenTofu", "Ansible", "Bicep", "ARM Templates"].map((tool, idx) => (
              <div key={idx} className="p-5 rounded-[20px] bg-[#0A0A0A] border border-zinc-800/80 text-center font-bold text-xs text-white hover:border-rose-500/40 transition-colors">
                <Workflow className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. SECURITY & GOVERNANCE */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                ZERO TRUST SECURITY
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white leading-tight mb-4">
                Security & Governance
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-semibold">
                Continuous policy auditing and automated threat mitigation.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Azure Policy / AWS SCP", "Defender for Cloud", "IAM & Entra ID", "RBAC Least Privilege", "Key Vault HSM", "Sentinel SIEM", "Audit Logging", "SOC2 / HIPAA Compliance"].map((sec, idx) => (
              <div key={idx} className="p-4 rounded-[16px] bg-[#0A0A0A] border border-zinc-800/80 flex items-center gap-3 hover:border-rose-500/40 transition-colors">
                <Shield className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span className="text-xs font-bold text-zinc-200">{sec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. MONITORING & OPERATIONS */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                REAL-TIME OBSERVABILITY
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white leading-tight mb-4">
                Monitoring & Operations
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-semibold">
                Comprehensive metrics, logging archives, and automated alerts.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Azure Monitor", "Log Analytics", "Grafana Dashboards", "Prometheus Metrics", "Automated Alerts", "Operational Insights"].map((mon, idx) => (
              <div key={idx} className="p-4 rounded-[20px] bg-[#0A0A0A] border border-zinc-800/80 text-center font-bold text-xs text-zinc-200 hover:border-rose-500/40 transition-colors">
                <Activity className="w-5 h-5 text-rose-500 mx-auto mb-2" />
                {mon}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. DOCUMENTATION */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                KNOWLEDGE BASE
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white leading-tight mb-4">
                Architecture Documentation
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-semibold">
                Complete engineering guides for setup and maintenance.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Deployment Guide", desc: "Step-by-step setup instructions for Terraform & CI/CD." },
              { name: "Architecture Guide", desc: "Deep dive into hub-and-spoke topologies & account trees." },
              { name: "Security Guide", desc: "RBAC, Key Vault, and compliance policy enforcement." },
              { name: "Network Guide", desc: "VNet peering, ExpressRoute, VPN, and Firewall routes." },
              { name: "Operations Guide", desc: "Day-2 operational tasks, monitoring alerts, and backups." },
              { name: "Troubleshooting Guide", desc: "Common terraform apply fixes and diagnostic steps." }
            ].map((doc, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-6 rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 space-y-3 hover:border-rose-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] group h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <BookOpen className="w-6 h-6 text-rose-500 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">{doc.name}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">{doc.desc}</p>
                  </div>
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-rose-500 hover:text-rose-400 transition-colors uppercase tracking-wider pt-2"
                  >
                    Read Guide <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 15. FAQ */}
      <section className="py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-4xl mx-auto px-6 md:px-12 xl:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">Landing Zone FAQ</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "What is a Landing Zone?", a: "A Landing Zone is an environment for provisioning workloads, pre-configured with security, network, identity, and compliance guardrails." },
              { q: "Which cloud providers do you support?", a: "We support Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platform (GCP), and Oracle Cloud Infrastructure (OCI)." },
              { q: "Do you use Terraform?", a: "Yes, 100% of our landing zone blueprints are written using modular, enterprise-grade Terraform and OpenTofu." },
              { q: "Can I customize modules?", a: "Absolutly. Every module accepts parameterized inputs for CIDR blocks, region targets, compliance policies, and naming conventions." },
              { q: "Do you support GitHub Actions?", a: "Yes, pre-configured GitHub Actions workflows for speculative terraform plan and automated terraform apply are included." },
              { q: "Is documentation included?", a: "Yes, comprehensive deployment guides, architecture diagrams, and operational playbooks are provided with all repositories." }
            ].map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="rounded-[18px] bg-[#0A0A0A] border border-zinc-800/80 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-5 text-left flex justify-between items-center text-sm font-bold text-white hover:text-rose-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <Minus className="w-4 h-4 text-rose-500" /> : <Plus className="w-4 h-4 text-zinc-500" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/80 pt-3 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 15. CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Build Your Enterprise Landing Zone
          </h2>
          <p className="text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed font-semibold">
            Partner with Devopstrio to spin up secure, compliant multi-cloud landing zones with Infrastructure as Code in days.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 mr-2" /> Request Demo
            </button>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <Download className="w-4 h-4 text-rose-500 mr-2" /> Download Architecture PDF
            </button>
          </div>
        </div>
      </section>

      {/* REPOSITORY DETAIL MODAL */}
      {selectedRepoModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-rose-500/30 rounded-[28px] max-w-3xl w-full p-6 space-y-6 relative shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedRepoModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-[#E11D48] text-white">
                {selectedRepoModal.cloud} &bull; {selectedRepoModal.category}
              </span>
              <h3 className="text-2xl font-extrabold text-white pt-1">{selectedRepoModal.name}</h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-medium">{selectedRepoModal.desc}</p>
            </div>

            {/* Code Snippet Box */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-zinc-400">Terraform Code Example ({selectedRepoModal.version}):</span>
              <pre className="p-4 rounded-[16px] bg-black border border-zinc-800 text-xs font-mono text-rose-300 overflow-x-auto">
                <code>{selectedRepoModal.codeSnippet}</code>
              </pre>
            </div>

            {/* Documentation Info */}
            <div className="p-4 rounded-[16px] bg-black border border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-rose-500" /> Documentation & Setup Overview
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-medium">{selectedRepoModal.docsContent}</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedRepoModal(null)}
                className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-xs"
              >
                Close Window
              </button>
              <a
                href="https://github.com/Devopstrio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-[#E11D48] hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg"
              >
                <Github className="w-4 h-4" /> Open on GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      {/* REQUEST DEMO MODAL */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-rose-500/30 rounded-[28px] max-w-lg w-full p-6 space-y-6 relative shadow-2xl">
            <button
              onClick={() => {
                setDemoModalOpen(false);
                setDemoSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {demoSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-rose-600/20 text-rose-500 border border-rose-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Demo Request Received!</h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto font-medium">
                  Our Cloud Architecture team will contact you within 24 hours with custom Terraform Landing Zone blueprints and architecture specifications.
                </p>
                <button
                  onClick={() => {
                    setDemoModalOpen(false);
                    setDemoSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#E11D48] text-white text-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDemoSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-rose-500" />
                    Request Landing Zone Demo
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-medium">
                    Provide your details to receive specialized architecture specs and live Terraform demo setup.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Target Cloud Platform</label>
                    <select className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none">
                      <option>Microsoft Azure Landing Zone</option>
                      <option>AWS Landing Zone (Control Tower)</option>
                      <option>Google Cloud Foundation Fabric</option>
                      <option>Oracle Cloud Infrastructure LZ</option>
                      <option>Multi-Cloud Hybrid Architecture</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setDemoModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#E11D48] hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </main>
  );
}
