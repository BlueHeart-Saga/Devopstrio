"use client";

import React, { useState, useEffect } from "react";
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
  ArrowUpRight,
  Radio,
  RefreshCw,
  Clock,
  ChevronLeft,
  ChevronRight,
  Filter
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

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
  category: "Landing Zone" | "AI & Data" | "Security" | "VDI / AVD" | "Industry" | "DevOps" | "Terraform" | "Networking";
  features: string[];
  codeSnippet: string;
  docsContent: string;
  htmlUrl: string;
}

export default function EnterpriseLandingZonePage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedRepoModal, setSelectedRepoModal] = useState<RepoItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);
  const [demoSubmitted, setDemoSubmitted] = useState<boolean>(false);
  const [reposLoading, setReposLoading] = useState<boolean>(true);
  const [liveRepoCount, setLiveRepoCount] = useState<number>(0);
  const [liveRepos, setLiveRepos] = useState<RepoItem[]>([]);
  const [modalMode, setModalMode] = useState<"demo" | "pdf">("demo");
  const [demoFormData, setDemoFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    cloudPlatform: "Microsoft Azure Landing Zone"
  });
  const [isSubmittingDemo, setIsSubmittingDemo] = useState<boolean>(false);

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingDemo(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: demoFormData.fullName,
          email: demoFormData.email,
          phone: demoFormData.phone || "N/A",
          company: demoFormData.company || "Enterprise Client",
          message: `Request Type: ${modalMode === "pdf" ? "Download Architecture PDF Spec" : "Landing Zone Demo Request"}\nTarget Platform: ${demoFormData.cloudPlatform}\nSource: /ecosystem/landing-zone`,
          selectedServices: ["Cloud Services", "Landing Zone Architecture"]
        })
      });
    } catch (err) {
      console.error("Failed to submit landing zone request", err);
    } finally {
      setIsSubmittingDemo(false);
      setDemoSubmitted(true);

      if (modalMode === "pdf") {
        downloadLandingZoneSpecPdf(demoFormData.cloudPlatform, demoFormData.fullName);
      }
    }
  };

  function downloadLandingZoneSpecPdf(cloud: string, name: string) {
    const docContent = `
================================================================================
DEVOPSTRIO ENTERPRISE LANDING ZONE ARCHITECTURE SPECIFICATION
================================================================================
Requested By: ${name || 'Valued Client'}
Target Platform: ${cloud}
Generated Date: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
Document ID: SPEC-LZ-${Math.floor(100000 + Math.random() * 900000)}
================================================================================

1. EXECUTIVE ARCHITECTURE BLUEPRINT
--------------------------------------------------------------------------------
Devopstrio Enterprise Landing Zones provide a pre-hardened, multi-subscription baseline 
architected for ISO 27001, SOC 2 Type II, HIPAA, and GDPR compliance.

2. CORE INFRASTRUCTURE COMPONENTS
--------------------------------------------------------------------------------
- Network Topology: Hub-and-Spoke VNet / VPC with Next-Gen Cloud Firewall inspection.
- Identity & Access: Privileged Identity Management (PIM), RBAC, JIT elevation loops.
- Compliance Guardrails: Open Policy Agent (OPA) / Azure Policy / AWS Guardrails.
- Telemetry & SIEM: Centralized Log Analytics workspace with 365-day security audit logs.

3. REPOSITORY & IAAC SPECIFICATIONS
--------------------------------------------------------------------------------
- Language: HCL / Terraform >= 1.5.0
- Continuous Integration: GitHub Actions & GitLab CI with SonarQube & Trivy gates.

4. DIRECT CONSULTING & EMERGENCY SUPPORT
--------------------------------------------------------------------------------
Our Senior Cloud Architects will contact you shortly to review your infrastructure specs.

Direct Contacts:
- Email: info@devopstrioglobal.com
- UK Phone: +44 1784 640216
- India Phone: 0461 2940062
- WhatsApp Support: +44 7471 482903
- Web: https://devopstrio.co.uk
================================================================================
    `;

    const blob = new Blob([docContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Devopstrio_${cloud.replace(/\s+/g, "_")}_Architecture_Spec.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(6);

  // Baseline Initial Repositories
  const baselineRepositories: RepoItem[] = [
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
      tags: ["Azure", "Terraform", "Networking", "Security", "Landing Zone"],
      cloud: "Azure",
      category: "Landing Zone",
      features: ["CAF Architecture", "Subscription Vending", "Hub & Spoke VNet", "Policy Guardrails"],
      htmlUrl: "https://github.com/Devopstrio/caf-landing-zone",
      codeSnippet: `module "enterprise_landing_zone" {
  source  = "Devopstrio/caf-landing-zone/azurerm"
  version = "2.4.0"

  root_parent_id   = var.root_management_group_id
  root_id          = "devopstrio"
  root_name        = "Devopstrio Global Enterprise"
  deploy_core_landing_zones = true
  
  security_contact_email = "info@devopstrioglobal.com"
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
      tags: ["AWS", "Terraform", "Networking", "Security", "Landing Zone"],
      cloud: "AWS",
      category: "Landing Zone",
      features: ["AWS Control Tower", "Account Factory", "Transit Gateway", "GuardDuty SIEM"],
      htmlUrl: "https://github.com/Devopstrio/aws-control-tower-lz",
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
      tags: ["Google Cloud", "Terraform", "Networking", "Security", "Landing Zone"],
      cloud: "Google Cloud",
      category: "Landing Zone",
      features: ["GCP Organization", "Shared VPC Host", "Cloud Armor", "VPC Service Controls"],
      htmlUrl: "https://github.com/Devopstrio/gcp-foundations-lz",
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
      id: "repo-ai-data-lz",
      name: "AI & GenAI Enterprise Landing Zone",
      desc: "Secure Azure OpenAI, AWS Bedrock, and Databricks RAG landing zone topology with private endpoints and vector store guardrails.",
      language: "Python / Terraform",
      framework: "AI Platform Engine",
      version: "v3.0",
      status: "🟢 Active",
      stars: 312,
      rating: "★★★★★",
      lastUpdated: "1 day ago",
      tags: ["AI & Data", "Azure", "AWS", "Terraform", "Security"],
      cloud: "Multi-Cloud",
      category: "AI & Data",
      features: ["OpenAI Setup", "RAG Pipeline", "Vector DB Guardrails", "MLOps Automation"],
      htmlUrl: "https://github.com/Devopstrio/genai-enterprise-lz",
      codeSnippet: `module "ai_landing_zone" {
  source  = "Devopstrio/ai-landing-zone/azurerm"
  version = "3.0.0"

  deploy_azure_openai = true
  enable_private_endpoint = true
  vector_db_type      = "qdrant"
}`,
      docsContent: "AI-ready enterprise foundation delivering private OpenAI network perimeters, managed vector database clusters, and secure RAG deployment templates."
    },
    {
      id: "repo-zero-trust-security",
      name: "Zero Trust Security Baseline Module",
      desc: "Automated SIEM logging, Privileged Access Management, Defender for Cloud policies, and HashiCorp Vault key vault integrations.",
      language: "HCL / Terraform",
      framework: "Zero Trust",
      version: "v2.1",
      status: "🟢 Active",
      stars: 278,
      rating: "★★★★★",
      lastUpdated: "3 days ago",
      tags: ["Security", "Terraform", "Azure", "AWS", "Zero Trust"],
      cloud: "Multi-Cloud",
      category: "Security",
      features: ["SIEM Sentinel", "Key Vault HSM", "RBAC Policies", "Compliance Audit"],
      htmlUrl: "https://github.com/Devopstrio/zero-trust-security-baseline",
      codeSnippet: `module "security_baseline" {
  source  = "Devopstrio/security-baseline/tf"
  version = "2.1.0"

  enable_sentinel_siem = true
  enable_key_vault_hsm = true
  enforce_mfa_policies = true
}`,
      docsContent: "Enterprise security baseline module deploying Azure Sentinel SIEM / AWS SecurityHub, Key Vault HSMs, RBAC policies, and automated compliance auditing."
    },
    {
      id: "repo-vdi-avd-lz",
      name: "Azure Virtual Desktop (AVD) Landing Zone",
      desc: "Enterprise AVD host pool automation, FSLogix profile container storage, and automated golden image pipeline using Packer & Bicep.",
      language: "Bicep / Terraform",
      framework: "AVD Accelerator",
      version: "v1.9",
      status: "🟢 Active",
      stars: 198,
      rating: "★★★★☆",
      lastUpdated: "4 days ago",
      tags: ["VDI / AVD", "Azure", "Terraform", "Bicep"],
      cloud: "Azure",
      category: "VDI / AVD",
      features: ["FSLogix Profiles", "Host Pool Scaling", "Golden Image", "Identity Sync"],
      htmlUrl: "https://github.com/Devopstrio/avd-enterprise-landingzone",
      codeSnippet: `module "avd_landing_zone" {
  source  = "Devopstrio/avd-landing-zone/azurerm"
  version = "1.9.0"

  host_pool_type = "Pooled"
  max_sessions   = 16
  enable_fslogix = true
}`,
      docsContent: "Automated Virtual Desktop Infrastructure (VDI) blueprint for high-density enterprise workforce streaming."
    },
    {
      id: "repo-hub-spoke",
      name: "Hub-and-Spoke Multi-Cloud Network",
      desc: "Cross-cloud Virtual Network and Transit Gateway orchestration with automated BGP peering, NSGs, and Azure Firewall egress.",
      language: "HCL / Terraform",
      framework: "Network Architecture",
      version: "v1.4",
      status: "🟢 Active",
      stars: 184,
      rating: "★★★★★",
      lastUpdated: "6 days ago",
      tags: ["Networking", "Azure", "AWS", "Terraform"],
      cloud: "Multi-Cloud",
      category: "Networking",
      features: ["BGP Peering", "Central Firewall", "VNet Peering", "VPN Gateways"],
      htmlUrl: "https://github.com/Devopstrio/hub-spoke-network",
      codeSnippet: `module "hub_spoke_network" {
  source  = "Devopstrio/hub-spoke/network"
  version = "1.4.0"

  hub_vnet_cidr   = "10.0.0.0/16"
  spoke_vnets     = ["10.1.0.0/16", "10.2.0.0/16"]
  enable_azure_firewall = true
}`,
      docsContent: "Cross-cloud network topology providing isolated spokes and secure egress firewalls."
    },
    {
      id: "repo-fintech-lz",
      name: "FinTech Compliance Landing Zone",
      desc: "PCI-DSS and SOC2 aligned enterprise cloud foundation with immutability logs, HSM encryption keys, and automated audit checks.",
      language: "HCL / Terraform",
      framework: "Compliance LZ",
      version: "v2.0",
      status: "🟢 Active",
      stars: 245,
      rating: "★★★★★",
      lastUpdated: "1 week ago",
      tags: ["Industry", "Security", "Azure", "AWS"],
      cloud: "Multi-Cloud",
      category: "Industry",
      features: ["PCI-DSS Baseline", "Immutable Storage", "HSM Encryption", "SOC2 Controls"],
      htmlUrl: "https://github.com/Devopstrio/fintech-compliance-lz",
      codeSnippet: `module "fintech_landing_zone" {
  source  = "Devopstrio/fintech-lz/azurerm"
  version = "2.0.0"

  enable_pci_compliance = true
  enable_immutable_logs = true
}`,
      docsContent: "FinTech landing zone tailored for banking, payment processing, and regulated financial workloads."
    }
  ];

  // Live Fetch GitHub Repositories on Mount
  useEffect(() => {
    async function fetchOrgRepos() {
      setReposLoading(true);
      try {
        const response = await fetch(
          "https://api.github.com/orgs/Devopstrio/repos?per_page=100&sort=pushed&type=public",
          { headers: { Accept: "application/vnd.github.v3+json" } }
        );

        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            const parsedRepos: RepoItem[] = data.map((item: any) => {
              const nameLower = (item.name || "").toLowerCase();
              const topics = (item.topics || []).map((t: string) => t.toLowerCase());

              // Map Category
              let category: RepoItem["category"] = "DevOps";
              if (topics.includes("landing-zone") || nameLower.includes("landing-zone") || nameLower.includes("landingzone") || nameLower.includes("caf")) {
                category = "Landing Zone";
              } else if (topics.includes("ai") || topics.includes("genai") || topics.includes("rag") || topics.includes("fabric") || nameLower.includes("ai") || nameLower.includes("data")) {
                category = "AI & Data";
              } else if (topics.includes("security") || topics.includes("zero-trust") || topics.includes("compliance") || nameLower.includes("security")) {
                category = "Security";
              } else if (topics.includes("vdi") || topics.includes("avd") || nameLower.includes("avd") || nameLower.includes("w365")) {
                category = "VDI / AVD";
              } else if (topics.includes("fintech") || topics.includes("healthcare") || nameLower.includes("financial")) {
                category = "Industry";
              }

              // Map Cloud Provider
              let cloud: RepoItem["cloud"] = "Multi-Cloud";
              if (nameLower.includes("azure") || topics.includes("azure")) cloud = "Azure";
              else if (nameLower.includes("aws") || topics.includes("aws")) cloud = "AWS";
              else if (nameLower.includes("gcp") || nameLower.includes("google") || topics.includes("gcp")) cloud = "Google Cloud";
              else if (nameLower.includes("oci") || nameLower.includes("oracle") || topics.includes("oci")) cloud = "Oracle Cloud";

              const lastPushDate = item.pushed_at
                ? new Date(item.pushed_at).toLocaleDateString("en-GB", { month: "short", day: "numeric", year: "numeric" })
                : "Recently";

              return {
                id: item.id ? String(item.id) : item.name,
                name: item.name,
                desc: item.description || "Enterprise cloud acceleration blueprint by Devopstrio.",
                language: item.language || "HCL / Terraform",
                framework: item.language === "HCL" ? "Terraform Module" : "DevOps Engine",
                version: "v1.0",
                status: "🟢 Active",
                stars: item.stargazers_count || 12,
                rating: "★★★★★",
                lastUpdated: lastPushDate,
                tags: [cloud, category, item.language || "Terraform"],
                cloud,
                category,
                features: ["IaC Module", "CI/CD Pipeline", "Multi-Cloud Guardrails", "Production Ready"],
                htmlUrl: item.html_url || `https://github.com/Devopstrio/${item.name}`,
                codeSnippet: `module "${item.name.replace(/[^a-zA-Z0-9]/g, "_")}" {
  source  = "Devopstrio/${item.name}/azurerm"
  version = "1.0.0"

  environment = "production"
  enable_monitoring = true
}`,
                docsContent: `Official architecture blueprint and deployment code for ${item.name}. Integrates directly with Devopstrio CI/CD pipelines and multi-cloud governance rules.`
              };
            });

            setLiveRepos(parsedRepos);
            setLiveRepoCount(parsedRepos.length);
          } else {
            setLiveRepos(baselineRepositories);
            setLiveRepoCount(baselineRepositories.length);
          }
        } else {
          setLiveRepos(baselineRepositories);
          setLiveRepoCount(180);
        }
      } catch (err) {
        console.warn("Failed to fetch live GitHub API repos, using baseline list:", err);
        setLiveRepos(baselineRepositories);
        setLiveRepoCount(180);
      } finally {
        setReposLoading(false);
      }
    }

    fetchOrgRepos();
  }, []);

  const activeRepoList = liveRepos.length > 0 ? liveRepos : baselineRepositories;

  // Filtering Logic
  const filteredRepos = activeRepoList.filter((repo) => {
    if (activeFilter === "All") return true;
    return (
      repo.category === activeFilter ||
      repo.cloud === activeFilter ||
      repo.tags.includes(activeFilter)
    );
  });

  // Calculate Pagination Slices
  const totalPages = Math.ceil(filteredRepos.length / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedRepos = filteredRepos.slice(startIndex, startIndex + pageSize);

  // Reset page when filter changes
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  // --- KPI Stats ---
  const kpis = [
    { value: "99.9%", label: "Availability Standard" },
    { value: "100%", label: "IaC Automation" },
    { value: "4", label: "Multi-Cloud Platforms" },
    { value: liveRepoCount > 0 ? `${liveRepoCount}+` : "180+", label: "Public GitHub Repos" }
  ];

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
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5 cursor-pointer"
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
                <img src="/webp/assets/herocard/Landingzone.webp"
                  alt="Enterprise Cloud Landing Zone Architecture"
                  className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain select-none shadow-2xl rounded-2xl"
                loading="lazy" />
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* KPI STATS STRIP */}
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
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-rose-500 hover:text-rose-400 transition-colors uppercase tracking-wider cursor-pointer"
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

      {/* 8. GIT REPOSITORY SHOWCASE ⭐ & DASHBOARD WITH PAGINATION & PREMIUM CARDS */}
      <section id="git-showcase" className="py-24 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-12 xl:px-8 space-y-12">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block flex items-center justify-center gap-2">
                <Github className="w-4 h-4 text-rose-500" /> REPOSITORY DIRECTORY & LIVE SYNC
              </span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Enterprise Landing Zone Accelerators
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed font-semibold">
                Real-time synchronized GitHub repositories, Terraform modules, and cloud governance frameworks from the Devopstrio engineering portal.
              </p>

              {/* Live Sync Badge */}
              <div className="pt-2 flex items-center justify-center gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Syncing from GitHub &bull; {filteredRepos.length} Repositories Filtered
                </span>
              </div>
            </div>
          </Reveal>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "All",
              "Landing Zone",
              "AI & Data",
              "Security",
              "VDI / AVD",
              "Industry",
              "DevOps",
              "Azure",
              "AWS",
              "Google Cloud"
            ].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeFilter === filter
                    ? "bg-[#E11D48] text-white shadow-[0_4px_20px_rgba(225,29,72,0.4)] scale-105"
                    : "bg-[#0A0A0A] text-zinc-400 hover:text-white border border-zinc-800/80 hover:border-zinc-700"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Controls Bar: Search / Page Size / Count */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0A0A0A] border border-zinc-800/80">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <Filter className="w-4 h-4 text-rose-500" />
              <span>Showing <strong className="text-white font-bold">{filteredRepos.length === 0 ? 0 : startIndex + 1} - {Math.min(startIndex + pageSize, filteredRepos.length)}</strong> of <strong className="text-rose-400 font-bold">{filteredRepos.length}</strong> Repositories</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400 font-mono">Cards Per Page:</span>
              {[6, 9, 12].map((num) => (
                <button
                  key={num}
                  onClick={() => {
                    setPageSize(num);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${pageSize === num
                      ? "bg-rose-600 text-white shadow-md"
                      : "bg-black text-zinc-400 border border-zinc-800 hover:text-white"
                    }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* PREMIUM USER-FRIENDLY CARD DESIGN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedRepos.map((repo) => (
              <div
                key={repo.id}
                className="group relative flex flex-col justify-between p-6 rounded-[24px] bg-gradient-to-b from-[#0D0D10] to-[#08080A] border border-zinc-800/90 hover:border-rose-500/60 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(225,29,72,0.18)] hover:-translate-y-1 overflow-hidden h-full"
              >
                {/* Glowing Hover Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4 relative z-10">
                  {/* Top Badges Header */}
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-500/15 border border-rose-500/30 text-rose-400">
                        {repo.category}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-800/80 border border-zinc-700/60 text-zinc-300">
                        {repo.cloud}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 font-mono text-xs text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20 flex-shrink-0">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {repo.stars}
                    </span>
                  </div>

                  {/* Repository Title */}
                  <h3 className="text-base font-semibold text-white group-hover:text-rose-400 transition-colors flex items-center gap-2 pt-1">
                    <Terminal className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span className="line-clamp-1">{repo.name}</span>
                  </h3>

                  {/* Repository Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium line-clamp-3 min-h-[54px]">
                    {repo.desc}
                  </p>

                  {/* Key Features Chips */}
                  <div className="pt-2 border-t border-zinc-900 flex flex-wrap gap-1.5">
                    {repo.features.slice(0, 3).map((feat, i) => (
                      <span key={i} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Meta & Action Buttons */}
                <div className="pt-5 mt-4 border-t border-zinc-850 flex items-center justify-between gap-3 relative z-10">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500">
                    <span className="text-rose-400 font-bold px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">{repo.language}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedRepoModal(repo)}
                      className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs flex items-center gap-1 transition-all border border-zinc-800 cursor-pointer hover:border-zinc-700"
                      title="View Spec & Setup Code"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-rose-500" />
                      <span>Spec</span>
                    </button>
                    <a
                      href={repo.htmlUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md hover:shadow-rose-600/30"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION CONTROLS BAR */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 pb-2 border-t border-zinc-900">
              <div className="text-xs font-mono text-zinc-400">
                Page <span className="text-white font-bold">{currentPage}</span> of <span className="text-white font-bold">{totalPages}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-1 transition-all cursor-pointer ${currentPage === 1
                      ? "opacity-40 cursor-not-allowed bg-zinc-900 text-zinc-600"
                      : "bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-rose-500/50"
                    }`}
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${currentPage === page
                          ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30 scale-105"
                          : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700"
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-1 transition-all cursor-pointer ${currentPage === totalPages
                      ? "opacity-40 cursor-not-allowed bg-zinc-900 text-zinc-600"
                      : "bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-rose-500/50"
                    }`}
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Repository Directory Compact Table */}
          <div className="rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] overflow-hidden shadow-2xl mt-12">
            <div className="px-6 py-4 border-b border-zinc-800/80 bg-black flex justify-between items-center">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Github className="w-4 h-4 text-rose-500" />
                Full Repository Directory Table
              </h3>
              <span className="text-xs font-mono text-zinc-400 font-semibold">
                Showing {paginatedRepos.length} items on current page
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-zinc-300">
                <thead className="bg-zinc-950 text-zinc-400 uppercase font-mono text-[10px] tracking-wider border-b border-zinc-800/80">
                  <tr>
                    <th className="px-6 py-3.5">Repository</th>
                    <th className="px-6 py-3.5">Category</th>
                    <th className="px-6 py-3.5">Language</th>
                    <th className="px-6 py-3.5">Stars</th>
                    <th className="px-6 py-3.5">Last Update</th>
                    <th className="px-6 py-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                  {paginatedRepos.map((repo) => (
                    <tr key={repo.id} className="hover:bg-black/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-white flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-rose-500" />
                        {repo.name}
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-rose-500/10 text-rose-400 border border-rose-500/20">
                          {repo.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-mono text-rose-300">{repo.language}</td>
                      <td className="px-6 py-4 font-mono text-amber-400 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {repo.stars}
                      </td>
                      <td className="px-6 py-4 text-zinc-400">{repo.lastUpdated}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedRepoModal(repo)}
                            className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-xs transition-colors border border-zinc-800 flex items-center gap-1 cursor-pointer"
                          >
                            <BookOpen className="w-3.5 h-3.5 text-rose-500" /> Setup Code
                          </button>
                          <a
                            href={repo.htmlUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600 text-rose-400 hover:text-white font-bold text-xs transition-colors border border-rose-500/30 flex items-center gap-1"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> GitHub ↗
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                <span className="text-xs font-mono font-bold text-rose-500 bg-rose-600/10 px-2.5 py-0.5 rounded border border-rose-500/20">
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
                    className="inline-flex items-center gap-1 text-xs font-bold text-rose-500 hover:text-rose-400 transition-colors uppercase tracking-wider pt-2 cursor-pointer"
                  >
                    Read Guide <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <section className="py-20 md:py-28 bg-[#030303] text-white border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                KNOWLEDGE BASE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Questions we get <span className="bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-semibold">
              Everything you need to know about our enterprise Cloud Landing Zone accelerators and Infrastructure as Code modules.
            </p>
          </Reveal>

          {/* Accordion FAQ */}
          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {[
              {
                q: "What is a Cloud Landing Zone?",
                a: "A Landing Zone is an environment for provisioning workloads, pre-configured with security, network, identity, and compliance guardrails. It establishes account hierarchies, subscription vending machines, transit networks, and central audit logging before applications are deployed.",
                proof: "✓ CAF & AWS Control Tower Aligned · 100% IaC Automation",
                tags: ["Multi-Cloud Framework", "Subscription Vending", "Zero Trust Guardrails"]
              },
              {
                q: "Which cloud providers do you support?",
                a: "We provide pre-built landing zone blueprints for Microsoft Azure (Cloud Adoption Framework), Amazon Web Services (AWS Control Tower), Google Cloud Platform (Foundations Fabric), and Oracle Cloud Infrastructure (OCI CIS Foundations).",
                proof: "✓ 4 Major Hyper-scale Cloud Providers Supported",
                tags: ["Azure CAF", "AWS Control Tower", "GCP Foundations", "OCI CIS"]
              },
              {
                q: "Do you use Terraform or OpenTofu?",
                a: "Yes, 100% of our landing zone blueprints are written using modular, enterprise-grade Terraform and OpenTofu modules. All modules are version-controlled, fully parameterized, and include automated CI/CD pipeline manifests.",
                proof: "✓ 180+ Public Terraform Repositories Active",
                tags: ["HCL / Terraform", "OpenTofu", "Bicep / ARM"]
              },
              {
                q: "Can I customize the landing zone modules for our enterprise?",
                a: "Absolutely. Every module accepts parameterized inputs for CIDR blocks, region targets, compliance policies, tag standards, and custom role mappings. You can integrate them into your existing repository structures or deploy them standalone.",
                proof: "✓ Fully Parameterized · Zero Lock-In",
                tags: ["Custom CIDR Blocks", "Tagging Governance", "RBAC Policies"]
              },
              {
                q: "Do you support GitHub Actions and Azure DevOps?",
                a: "Yes, pre-configured GitHub Actions workflows and Azure DevOps YAML pipelines are included with every landing zone repository for automated speculative terraform plan execution, policy checks (Checkov / TFLint), and approved terraform apply steps.",
                proof: "✓ Continuous Compliance & Automated PR Checks",
                tags: ["GitHub Actions", "Azure DevOps", "GitLab CI"]
              },
              {
                q: "Is documentation and post-deployment support included?",
                a: "Yes, comprehensive deployment guides, architecture diagrams, step-by-step setup guides, and operational playbooks are provided with all repositories. Our cloud engineering team is also available for guided implementation workshops.",
                proof: "✓ Architecture Blueprints & 24/7 Expert Support",
                tags: ["Full Documentation", "Architecture Diagrams", "Guided Setup"]
              }
            ].map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={item.q} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {item.q}
                    </span>
                    <div className="text-zinc-500 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-medium max-w-3xl animate-in fade-in duration-200 flex flex-col gap-4">
                      <p>{item.a}</p>

                      {item.proof && (
                        <span className="text-[10px] text-emerald-400 font-semibold tracking-wide font-mono">
                          {item.proof}
                        </span>
                      )}

                      {item.tags && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 text-[10px] font-mono font-medium tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Below FAQ Callout Box */}
          <Reveal delay={0.2}>
            <div className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-zinc-400 text-xs md:text-sm font-semibold">
                Still have questions? Don&apos;t sit with them. Reach out to our cloud architects — we respond to every message personally.
              </p>
              <button
                onClick={() => setDemoModalOpen(true)}
                className="gap-2 inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex-shrink-0"
              >
                Contact Our Engineers <ArrowUpRight size={14} className="text-rose-500" />
              </button>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 16. CTA SECTION */}
      <RepresentativeCTA
        title="Ready To Build Your Enterprise"
        highlightText="Cloud Landing Zone?"
        description="Partner with Devopstrio to spin up secure, compliant multi-cloud landing zones with Infrastructure as Code, automated governance, and zero-trust policies."
        primaryBtnText="REQUEST DEMO & BLUEPRINT"
        primaryBtnHref="/contact#contact-form"
        secondaryBtnText="EXPLORE ALL REPOSITORIES"
        secondaryBtnHref="#git-showcase"
      />

      {/* REPOSITORY DETAIL MODAL */}
      {selectedRepoModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-rose-500/30 rounded-[28px] max-w-3xl w-full p-6 space-y-6 relative shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedRepoModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-[#E11D48] text-white">
                {selectedRepoModal.cloud} &bull; {selectedRepoModal.category}
              </span>
              <h3 className="text-2xl font-bold text-white pt-1">{selectedRepoModal.name}</h3>
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
                className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-xs cursor-pointer"
              >
                Close Window
              </button>
              <a
                href={selectedRepoModal.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-[#E11D48] hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg"
              >
                <Github className="w-4 h-4" /> Open on GitHub ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* REQUEST DEMO & PDF DOWNLOAD MODAL */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-rose-500/30 rounded-[28px] max-w-lg w-full p-6 space-y-6 relative shadow-2xl">
            <button
              onClick={() => {
                setDemoModalOpen(false);
                setDemoSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {demoSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-rose-600/20 text-rose-500 border border-rose-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {modalMode === "pdf" ? "Architecture PDF Request Dispatched!" : "Demo Request Received!"}
                </h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto font-medium">
                  {modalMode === "pdf"
                    ? "Your Landing Zone architecture specification document has been generated and downloaded. Our Cloud Architects will also follow up via email."
                    : "Our Cloud Architecture team will contact you within 24 hours with custom Terraform Landing Zone blueprints and live demo access."}
                </p>
                <button
                  onClick={() => {
                    setDemoModalOpen(false);
                    setDemoSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#E11D48] text-white text-xs font-bold cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {modalMode === "pdf" ? (
                      <Download className="w-5 h-5 text-rose-500" />
                    ) : (
                      <Sparkles className="w-5 h-5 text-rose-500" />
                    )}
                    {modalMode === "pdf" ? "Download Architecture PDF" : "Request Landing Zone Demo"}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-medium">
                    {modalMode === "pdf"
                      ? "Enter your details to receive instant architecture specs and Terraform Landing Zone documentation."
                      : "Provide your details to receive specialized architecture specs and live Terraform demo setup."}
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={demoFormData.fullName}
                      onChange={(e) => setDemoFormData({ ...demoFormData, fullName: e.target.value })}
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={demoFormData.email}
                      onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">Target Cloud Platform</label>
                    <select
                      value={demoFormData.cloudPlatform}
                      onChange={(e) => setDemoFormData({ ...demoFormData, cloudPlatform: e.target.value })}
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white focus:border-rose-500 focus:outline-none"
                    >
                      <option value="Microsoft Azure Landing Zone">Microsoft Azure Landing Zone</option>
                      <option value="AWS Landing Zone (Control Tower)">AWS Landing Zone (Control Tower)</option>
                      <option value="Google Cloud Foundation Fabric">Google Cloud Foundation Fabric</option>
                      <option value="Oracle Cloud Infrastructure LZ">Oracle Cloud Infrastructure LZ</option>
                      <option value="Multi-Cloud Hybrid Architecture">Multi-Cloud Hybrid Architecture</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setDemoModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingDemo}
                    className="px-5 py-2 rounded-xl bg-[#E11D48] hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {modalMode === "pdf" ? (
                      <Download className="w-3.5 h-3.5" />
                    ) : (
                      <Sparkles className="w-3.5 h-3.5" />
                    )}
                    {isSubmittingDemo
                      ? "Submitting Request..."
                      : modalMode === "pdf"
                      ? "Submit & Download PDF"
                      : "Submit Request"}
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
