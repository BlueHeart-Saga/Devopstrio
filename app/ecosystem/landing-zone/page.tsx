"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
import { LandingZoneHeroGraphic } from "@/components/ui/LandingZoneHeroGraphic";

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
  category: "Landing Zone" | "Multicloud" | "AI & Data" | "Security" | "VDI / AVD" | "Industry" | "DevOps" | "Terraform" | "Networking";
  categories?: string[];
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
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<"stars" | "updated" | "name">("stars");
  const [heroCloudTab, setHeroCloudTab] = useState<"azure" | "aws" | "gcp" | "oci">("azure");
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
  // Baseline Initial Repositories
  const baselineRepositories: RepoItem[] = [
    // 1. Landing Zones
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
      features: ["CAF Architecture", "Subscription Vending", "Policy Guardrails"],
      htmlUrl: "https://github.com/Devopstrio/caf-landing-zone",
      codeSnippet: `module "enterprise_landing_zone" {\n  source  = "Devopstrio/caf-landing-zone/azurerm"\n  version = "2.4.0"\n\n  root_parent_id   = var.root_management_group_id\n  root_id          = "devopstrio"\n  root_name        = "Devopstrio Global Enterprise"\n  deploy_core_landing_zones = true\n}`,
      docsContent: "Comprehensive deployment guide for Azure Cloud Adoption Framework (CAF) Enterprise Landing Zones."
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
      features: ["AWS Control Tower", "Account Factory", "Transit Gateway"],
      htmlUrl: "https://github.com/Devopstrio/aws-control-tower-lz",
      codeSnippet: `module "aws_landing_zone" {\n  source  = "Devopstrio/control-tower-lz/aws"\n  version = "1.8.2"\n\n  organization_unit_name = "Core-Workloads"\n  enable_guardduty       = true\n}`,
      docsContent: "AWS Control Tower custom Landing Zone engine with automated Account Factory setup."
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
      features: ["GCP Organization", "Shared VPC Host", "Cloud Armor"],
      htmlUrl: "https://github.com/Devopstrio/gcp-foundations-lz",
      codeSnippet: `module "gcp_landing_zone" {\n  source  = "Devopstrio/foundations/google"\n  version = "2.1.0"\n\n  org_id = "1234567890"\n  shared_vpc_host_project = "devopstrio-vpc-host"\n}`,
      docsContent: "GCP Cloud Foundation Fabric module supporting multi-folder landing zone hierarchy."
    },

    // 2. AI & Data
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
      features: ["OpenAI Setup", "RAG Pipeline", "Vector DB Guardrails"],
      htmlUrl: "https://github.com/Devopstrio/genai-enterprise-lz",
      codeSnippet: `module "ai_landing_zone" {\n  source  = "Devopstrio/ai-landing-zone/azurerm"\n  version = "3.0.0"\n\n  deploy_azure_openai = true\n  enable_private_endpoint = true\n  vector_db_type = "qdrant"\n}`,
      docsContent: "AI-ready enterprise foundation delivering private OpenAI network perimeters and secure RAG deployment templates."
    },
    {
      id: "repo-azure-openai-rag",
      name: "Azure OpenAI & RAG Accelerator",
      desc: "Production enterprise RAG blueprint with Azure OpenAI GPT-4o, Cognitive Search indexer, LangChain orchestrator, and VPC peering.",
      language: "Python / Bicep",
      framework: "GenAI Engine",
      version: "v2.2",
      status: "🟢 Active",
      stars: 265,
      rating: "★★★★★",
      lastUpdated: "2 days ago",
      tags: ["AI & Data", "Azure", "OpenAI", "RAG", "Python"],
      cloud: "Azure",
      category: "AI & Data",
      features: ["OpenAI Setup", "RAG Pipeline", "Vector DB Guardrails"],
      htmlUrl: "https://github.com/Devopstrio/azure-openai-rag-accelerator",
      codeSnippet: `module "openai_rag" {\n  source = "Devopstrio/openai-rag/azure"\n  model_deployment = "gpt-4o"\n  enable_vector_search = true\n}`,
      docsContent: "Enterprise RAG deployment blueprint for high-throughput enterprise knowledge bases."
    },
    {
      id: "repo-databricks-lakehouse",
      name: "Databricks Unity Catalog & Lakehouse LZ",
      desc: "Governed Databricks lakehouse architecture with Unity Catalog access controls, Delta Lake storage perimeters, and automated ETL clusters.",
      language: "Python / Terraform",
      framework: "Data Lakehouse",
      version: "v1.7",
      status: "🟢 Active",
      stars: 198,
      rating: "★★★★★",
      lastUpdated: "4 days ago",
      tags: ["AI & Data", "Databricks", "Lakehouse", "Terraform"],
      cloud: "Multi-Cloud",
      category: "AI & Data",
      features: ["Unity Catalog Lakehouse", "RAG Pipeline", "Vector DB Guardrails"],
      htmlUrl: "https://github.com/Devopstrio/databricks-lakehouse-lz",
      codeSnippet: `module "databricks_lz" {\n  source = "Devopstrio/databricks/lakehouse"\n  unity_catalog_enabled = true\n}`,
      docsContent: "Databricks multi-cloud workspace provisioning with automated Unity Catalog governance."
    },

    // 3. Security
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
      features: ["Zero-Trust Baseline", "Key Vault HSM", "Sentinel SIEM"],
      htmlUrl: "https://github.com/Devopstrio/zero-trust-security-baseline",
      codeSnippet: `module "security_baseline" {\n  source  = "Devopstrio/security-baseline/tf"\n  version = "2.1.0"\n\n  enable_sentinel_siem = true\n  enable_key_vault_hsm = true\n}`,
      docsContent: "Enterprise security baseline module deploying Azure Sentinel SIEM and Key Vault HSMs."
    },
    {
      id: "repo-sentinel-defender-siem",
      name: "Azure Sentinel & Defender SIEM Pipeline",
      desc: "Centralized SIEM/SOAR pipeline with automated threat hunting workbooks, incident response playbooks, and Microsoft Defender connector.",
      language: "KQL / Bicep",
      framework: "SIEM Operations",
      version: "v2.0",
      status: "🟢 Active",
      stars: 231,
      rating: "★★★★★",
      lastUpdated: "5 days ago",
      tags: ["Security", "Azure", "SIEM", "Sentinel", "Compliance"],
      cloud: "Azure",
      category: "Security",
      features: ["Sentinel SIEM", "Zero-Trust Baseline", "SOC2 & CIS Controls"],
      htmlUrl: "https://github.com/Devopstrio/sentinel-defender-pipeline",
      codeSnippet: `module "sentinel_siem" {\n  source = "Devopstrio/sentinel/azure"\n  retention_days = 365\n  enable_defender_sync = true\n}`,
      docsContent: "End-to-end security incident detection and automated remediation workflows."
    },

    // 4. VDI / AVD
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
      features: ["FSLogix Profiles", "Host Pool Scaling", "Golden Image Automation"],
      htmlUrl: "https://github.com/Devopstrio/avd-enterprise-landingzone",
      codeSnippet: `module "avd_landing_zone" {\n  source  = "Devopstrio/avd-landing-zone/azurerm"\n  version = "1.9.0"\n\n  host_pool_type = "Pooled"\n  max_sessions   = 16\n  enable_fslogix = true\n}`,
      docsContent: "Automated Virtual Desktop Infrastructure (VDI) blueprint for enterprise workforce streaming."
    },
    {
      id: "repo-avd-fslogix-cloudcache",
      name: "AVD FSLogix Cloud Cache & Profile Engine",
      desc: "High-resiliency FSLogix multi-region profile replication engine using Azure Premium Files and active Cloud Cache mirroring.",
      language: "PowerShell / Bicep",
      framework: "Storage Optimization",
      version: "v1.5",
      status: "🟢 Active",
      stars: 167,
      rating: "★★★★★",
      lastUpdated: "1 week ago",
      tags: ["VDI / AVD", "Azure", "Storage", "FSLogix"],
      cloud: "Azure",
      category: "VDI / AVD",
      features: ["FSLogix Profiles", "Host Pool Scaling", "Golden Image Automation"],
      htmlUrl: "https://github.com/Devopstrio/avd-fslogix-cloudcache",
      codeSnippet: `module "fslogix_cache" {\n  source = "Devopstrio/fslogix/azure"\n  cache_mode = "CloudCache"\n  storage_redundancy = "ZRS"\n}`,
      docsContent: "Resilient FSLogix profile architecture ensuring sub-second login times across AVD pools."
    },

    // 5. Industry
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
      tags: ["Industry", "Security", "Azure", "AWS", "PCI-DSS"],
      cloud: "Multi-Cloud",
      category: "Industry",
      features: ["PCI-DSS Baseline", "Immutable Storage", "SOC2 Controls"],
      htmlUrl: "https://github.com/Devopstrio/fintech-compliance-lz",
      codeSnippet: `module "fintech_landing_zone" {\n  source  = "Devopstrio/fintech-lz/azurerm"\n  version = "2.0.0"\n\n  enable_pci_compliance = true\n  enable_immutable_logs = true\n}`,
      docsContent: "FinTech landing zone tailored for banking, payment processing, and regulated workloads."
    },
    {
      id: "repo-healthcare-hipaa",
      name: "Healthcare HIPAA Compliance Vault",
      desc: "HIPAA and HITRUST certified healthcare data perimeters with encrypted EHR ingestion channels, private clusters, and BAA compliance policies.",
      language: "HCL / Terraform",
      framework: "HealthTech Platform",
      version: "v1.8",
      status: "🟢 Active",
      stars: 210,
      rating: "★★★★★",
      lastUpdated: "6 days ago",
      tags: ["Industry", "Healthcare", "HIPAA", "Terraform", "Security"],
      cloud: "Multi-Cloud",
      category: "Industry",
      features: ["HIPAA Compliance Vault", "PCI-DSS Baseline", "SOC2 Controls"],
      htmlUrl: "https://github.com/Devopstrio/healthcare-hipaa-compliance",
      codeSnippet: `module "healthcare_vault" {\n  source = "Devopstrio/hipaa-vault/aws"\n  phi_encryption_at_rest = true\n  enable_audit_retention = true\n}`,
      docsContent: "Zero-trust clinical and healthcare landing zone satisfying HIPAA Security and Privacy rules."
    },
    {
      id: "repo-retail-ecommerce-lz",
      name: "Retail Omnichannel E-Commerce LZ",
      desc: "Scalable retail architecture handling Black Friday traffic spikes with CDN edge caching, serverless checkout queues, and real-time inventory sync.",
      language: "HCL / Terraform",
      framework: "Retail Cloud",
      version: "v2.1",
      status: "🟢 Active",
      stars: 185,
      rating: "★★★★★",
      lastUpdated: "1 week ago",
      tags: ["Industry", "Retail", "E-Commerce", "Multi-Cloud"],
      cloud: "Multi-Cloud",
      category: "Industry",
      features: ["FinOps Cost Optimization", "PCI-DSS Baseline", "SOC2 Controls"],
      htmlUrl: "https://github.com/Devopstrio/retail-ecommerce-landingzone",
      codeSnippet: `module "ecommerce_lz" {\n  source = "Devopstrio/retail-lz/azure"\n  enable_edge_caching = true\n  auto_scale_max = 50\n}`,
      docsContent: "High-density retail cloud infrastructure with automated auto-scaling and payment gateway isolation."
    },

    // 6. Multicloud
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
      tags: ["Multicloud", "Networking", "Azure", "AWS", "Terraform"],
      cloud: "Multi-Cloud",
      category: "Multicloud",
      features: ["AWS / Azure / GCP", "Hub-Spoke Transit", "Cloud Governance"],
      htmlUrl: "https://github.com/Devopstrio/hub-spoke-network",
      codeSnippet: `module "hub_spoke_network" {\n  source  = "Devopstrio/hub-spoke/network"\n  version = "1.4.0"\n\n  hub_vnet_cidr   = "10.0.0.0/16"\n  spoke_vnets     = ["10.1.0.0/16", "10.2.0.0/16"]\n  enable_azure_firewall = true\n}`,
      docsContent: "Cross-cloud network topology providing isolated spokes and secure egress firewalls."
    },
    {
      id: "repo-directconnect-expressroute",
      name: "AWS & Azure DirectConnect Transit Mesh",
      desc: "Automated interconnect mesh linking AWS DirectConnect Gateway with Azure ExpressRoute and GCP Cloud Interconnect via Megaport/Equinix.",
      language: "HCL / Terraform",
      framework: "Transit Mesh",
      version: "v1.9",
      status: "🟢 Active",
      stars: 202,
      rating: "★★★★★",
      lastUpdated: "3 days ago",
      tags: ["Multicloud", "Networking", "AWS", "Azure", "GCP"],
      cloud: "Multi-Cloud",
      category: "Multicloud",
      features: ["AWS & Azure Mesh", "Hub-Spoke Transit", "Cloud Governance"],
      htmlUrl: "https://github.com/Devopstrio/directconnect-expressroute-mesh",
      codeSnippet: `module "transit_mesh" {\n  source = "Devopstrio/transit-mesh/tf"\n  bgp_asn = 65000\n  redundant_circuits = true\n}`,
      docsContent: "Dedicated high-speed interconnect fabric for latency-sensitive multi-cloud workloads."
    },

    // 7. DevOps
    {
      id: "repo-k8s-gitops-engine",
      name: "Kubernetes GitOps & ArgoCD Enterprise Engine",
      desc: "Turnkey AKS, EKS, and GKE cluster vending machine with ArgoCD application sets, sealed secrets, Kyverno policies, and Cilium eBPF mesh.",
      language: "Helm / Terraform",
      framework: "GitOps Platform",
      version: "v3.1",
      status: "🟢 Active",
      stars: 356,
      rating: "★★★★★",
      lastUpdated: "1 day ago",
      tags: ["DevOps", "Kubernetes", "ArgoCD", "Terraform", "GitOps"],
      cloud: "Multi-Cloud",
      category: "DevOps",
      features: ["K8s Cluster Engine", "GitOps ArgoCD", "CI/CD Pipeline"],
      htmlUrl: "https://github.com/Devopstrio/k8s-gitops-engine",
      codeSnippet: `module "gitops_engine" {\n  source = "Devopstrio/k8s-gitops/module"\n  argocd_sync_wave = true\n  cilium_cni_enabled = true\n}`,
      docsContent: "Enterprise Kubernetes platform bootstrap with automated day-2 add-ons."
    },
    {
      id: "repo-terraform-github-actions",
      name: "Terraform GitHub Actions CI/CD Pipeline Suite",
      desc: "Reusable GitHub Actions workflows for automated Terraform plan/apply, OIDC authentication, tfsec scanning, and Infracost checks.",
      language: "YAML / Actions",
      framework: "CI/CD Suite",
      version: "v2.5",
      status: "🟢 Active",
      stars: 289,
      rating: "★★★★★",
      lastUpdated: "2 days ago",
      tags: ["DevOps", "CI/CD", "GitHub Actions", "Terraform"],
      cloud: "Multi-Cloud",
      category: "DevOps",
      features: ["IaC Module", "CI/CD Pipeline", "GitOps Automation"],
      htmlUrl: "https://github.com/Devopstrio/terraform-github-actions-suite",
      codeSnippet: `uses: Devopstrio/terraform-pipeline@v2\nwith:\n  terraform_version: 1.8.0\n  enable_infracost: true\n  enable_tfsec: true`,
      docsContent: "Production CI/CD pipelines enforcing security gates before applying infrastructure changes."
    }
  ];

  // Keyboard shortcut listener for Search (Ctrl + K / Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const searchInput = document.getElementById("repo-search-input");
        if (searchInput) {
          searchInput.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Category Icon SVG Helper matching custom visual styling
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI & Data":
        return (
          <svg className="w-5 h-5 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3c0 4.5-4.5 9-9 9 4.5 0 9 4.5 9 9 0-4.5 4.5-9 9-9-4.5 0-9-4.5-9-9z"/>
          </svg>
        );
      case "Multicloud":
        return (
          <svg className="w-5 h-5 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
            <path d="M12 12v6m0-6l-2.5 2.5m2.5-2.5l2.5 2.5"/>
          </svg>
        );
      case "Landing Zone":
        return (
          <svg className="w-5 h-5 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        );
      case "Security":
        return <Shield className="w-5 h-5 text-rose-400" />;
      case "VDI / AVD":
        return <HardDrive className="w-5 h-5 text-rose-400" />;
      case "Industry":
        return <Boxes className="w-5 h-5 text-rose-400" />;
      case "DevOps":
      default:
        return (
          <svg className="w-5 h-5 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="6" height="6" x="3" y="3" rx="1.5"/>
            <rect width="6" height="6" x="15" y="15" rx="1.5"/>
            <path d="M6 9v3a3 3 0 0 0 3 3h6"/>
          </svg>
        );
    }
  };

  // Comprehensive Multi-Category Intelligence Engine
  function classifyRepo(name: string, desc: string = "", topics: string[] = [], lang: string = ""): {
    primaryCategory: RepoItem["category"];
    categories: string[];
    cloud: RepoItem["cloud"];
    features: string[];
  } {
    const text = `${name} ${desc} ${lang} ${(topics || []).join(" ")}`.toLowerCase();
    const cats = new Set<string>();

    const matches = (terms: string[]) => terms.some((term) => text.includes(term.toLowerCase()));

    // 1. AI & Data
    const isAI = matches([
      "ai", "genai", "rag", "llm", "agent", "prompt", "openai", "copilot", "databricks",
      "fabric", "vector", "embedding", "dataset", "inference", "model", "neural", "vision",
      "speech", "cognitive", "lakehouse", "analytics", "data", "ml", "mlops", "mlflow",
      "deepseek", "gemini", "bedrock", "langchain", "llamaindex", "qdrant", "chroma", "pinecone"
    ]);
    if (isAI) cats.add("AI & Data");

    // 2. Security
    const isSecurity = matches([
      "security", "zero-trust", "zerotrust", "compliance", "sentinel", "defender", "vault",
      "keyvault", "identity", "siem", "soc2", "cis", "hipaa", "iso27001", "auth", "rbac",
      "iam", "guardrail", "audit", "policy", "encryption", "waf", "firewall", "privilege",
      "scanner", "secret", "trivy", "sonar", "hsm", "pam"
    ]);
    if (isSecurity) cats.add("Security");

    // 3. VDI / AVD
    const isVDI = matches([
      "vdi", "avd", "w365", "desktop", "citrix", "fslogix", "session-host", "session",
      "remote-desktop", "workspace", "virtual-desktop", "horizon", "packer"
    ]);
    if (isVDI) cats.add("VDI / AVD");

    // 4. Industry
    const isIndustry = matches([
      "fintech", "banking", "finance", "healthcare", "health", "life-sciences", "retail",
      "ecommerce", "e-commerce", "saas", "telecom", "telecommunications", "pharma", "energy",
      "automotive", "insurance", "public-sector", "government", "pci", "pci-dss", "hipaa",
      "finops", "carbon", "sustainability", "cost", "budget", "marketplace", "broker", "payment"
    ]);
    if (isIndustry) cats.add("Industry");

    // 5. Landing Zone
    const isLZ = matches([
      "landing-zone", "landingzone", "landing", "caf", "foundation", "starter", "alz",
      "platform-engineering", "control-tower", "subscription-vending", "subscription"
    ]);
    if (isLZ) cats.add("Landing Zone");

    // 6. Multicloud
    const isMulticloud = matches([
      "multicloud", "multi-cloud", "cross-cloud", "hybrid", "aws", "azure", "gcp", "google", "oci",
      "oracle", "cloud", "bicep", "terraform", "cloudformation", "opentofu", "hub-spoke", "transit",
      "vpc", "vnet", "s3", "blob", "compute", "eks", "aks", "gke"
    ]);
    if (isMulticloud) cats.add("Multicloud");

    // 7. DevOps
    const isDevOps = matches([
      "devops", "terraform", "bicep", "actions", "cicd", "pipeline", "yaml", "gitops",
      "ansible", "docker", "kubernetes", "k8s", "helm", "argo", "automation", "iac",
      "sdk", "cli", "edge", "observability", "prometheus", "grafana", "monitor", "telemetry"
    ]);
    if (isDevOps || cats.size === 0) cats.add("DevOps");

    // Priority Category Selection (Specific domain categories take precedence over generic Landing Zone or DevOps)
    let primaryCategory: RepoItem["category"] = "DevOps";
    if (isAI) primaryCategory = "AI & Data";
    else if (isSecurity) primaryCategory = "Security";
    else if (isVDI) primaryCategory = "VDI / AVD";
    else if (isIndustry) primaryCategory = "Industry";
    else if (isLZ) primaryCategory = "Landing Zone";
    else if (isMulticloud) primaryCategory = "Multicloud";
    else primaryCategory = "DevOps";

    // Cloud tag
    let cloud: RepoItem["cloud"] = "Multi-Cloud";
    if (matches(["azure", "entra", "bicep", "vnet", "avd", "fabric"])) cloud = "Azure";
    else if (matches(["aws", "bedrock", "control-tower", "s3", "lambda", "ecs"])) cloud = "AWS";
    else if (matches(["gcp", "google", "vertex", "bigquery"])) cloud = "Google Cloud";
    else if (matches(["oci", "oracle"])) cloud = "Oracle Cloud";

    // Dynamic, Rich Feature Chips tailored per repo
    let features: string[] = [];
    if (primaryCategory === "AI & Data") {
      if (text.includes("rag")) features.push("RAG Pipeline");
      if (text.includes("openai") || text.includes("gpt")) features.push("OpenAI Setup");
      if (text.includes("vector") || text.includes("qdrant") || text.includes("pinecone")) features.push("Vector DB Guardrails");
      if (text.includes("agent")) features.push("Agentic Workflow");
      if (text.includes("databricks") || text.includes("lakehouse") || text.includes("spark")) features.push("Unity Catalog Lakehouse");
      if (text.includes("bedrock")) features.push("AWS Bedrock LLM");
      if (features.length < 3) features.push("OpenAI Setup", "RAG Pipeline", "Vector DB Guardrails");
    } else if (primaryCategory === "Security") {
      if (text.includes("sentinel") || text.includes("siem")) features.push("Sentinel SIEM");
      if (text.includes("vault") || text.includes("hsm") || text.includes("key")) features.push("Key Vault HSM");
      if (text.includes("zero-trust") || text.includes("zerotrust")) features.push("Zero-Trust Baseline");
      if (text.includes("compliance") || text.includes("soc2") || text.includes("cis")) features.push("SOC2 & CIS Controls");
      if (features.length < 3) features.push("Zero-Trust Baseline", "Key Vault HSM", "Sentinel SIEM");
    } else if (primaryCategory === "VDI / AVD") {
      if (text.includes("fslogix")) features.push("FSLogix Profiles");
      if (text.includes("session") || text.includes("pool") || text.includes("host")) features.push("Host Pool Scaling");
      if (text.includes("packer") || text.includes("image")) features.push("Golden Image Automation");
      if (features.length < 3) features.push("FSLogix Profiles", "Host Pool Scaling", "Golden Image");
    } else if (primaryCategory === "Industry") {
      if (text.includes("pci") || text.includes("fintech") || text.includes("bank") || text.includes("payment")) features.push("PCI-DSS Baseline");
      if (text.includes("hipaa") || text.includes("health") || text.includes("pharma")) features.push("HIPAA Compliance Vault");
      if (text.includes("finops") || text.includes("cost")) features.push("FinOps Cost Optimization");
      if (features.length < 3) features.push("PCI-DSS / HIPAA", "Immutable Storage", "SOC2 Controls");
    } else if (primaryCategory === "Multicloud") {
      if (text.includes("transit") || text.includes("hub") || text.includes("mesh")) features.push("Hub-Spoke Transit");
      if (text.includes("aws") && text.includes("azure")) features.push("AWS & Azure Mesh");
      if (text.includes("gcp") || text.includes("google")) features.push("GCP Shared VPC");
      if (features.length < 3) features.push("AWS / Azure / GCP", "Hub-Spoke Transit", "Cloud Governance");
    } else if (primaryCategory === "Landing Zone") {
      if (text.includes("caf")) features.push("CAF Architecture");
      if (text.includes("vending") || text.includes("account")) features.push("Subscription Vending");
      if (text.includes("policy") || text.includes("guardrail")) features.push("Policy Guardrails");
      if (features.length < 3) features.push("CAF Architecture", "Subscription Vending", "Policy Guardrails");
    } else {
      if (text.includes("k8s") || text.includes("kubernetes")) features.push("K8s Cluster Engine");
      if (text.includes("argo") || text.includes("gitops")) features.push("GitOps ArgoCD");
      if (text.includes("terraform") || text.includes("bicep")) features.push("IaC Automation");
      if (features.length < 3) features.push("IaC Module", "CI/CD Pipeline", "GitOps Automation");
    }
    features = Array.from(new Set(features)).slice(0, 3);

    return {
      primaryCategory,
      categories: Array.from(cats),
      cloud,
      features
    };
  }

  // Live Fetch 100% of GitHub Repositories via Multi-Page Loop on Mount
  useEffect(() => {
    async function fetchOrgRepos() {
      setReposLoading(true);
      try {
        let page = 1;
        let allRawRepos: any[] = [];
        let hasMore = true;

        // Multi-page fetch loop up to 10 pages (1000 repositories)
        while (hasMore && page <= 10) {
          const response = await fetch(
            `https://api.github.com/orgs/Devopstrio/repos?per_page=100&page=${page}&sort=pushed&type=public`,
            { headers: { Accept: "application/vnd.github.v3+json" } }
          );

          if (!response.ok) break;

          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            allRawRepos = allRawRepos.concat(data);
            if (data.length < 100) {
              hasMore = false;
            } else {
              page++;
            }
          } else {
            hasMore = false;
          }
        }

        if (allRawRepos.length > 0) {
          const parsedRepos: RepoItem[] = allRawRepos.map((item: any) => {
            const rawName = item.name || "";
            const rawDesc = item.description || "";
            const rawTopics = item.topics || [];
            const rawLang = item.language || "HCL / Terraform";

            const classification = classifyRepo(rawName, rawDesc, rawTopics, rawLang);

            const lastPushDate = item.pushed_at
              ? new Date(item.pushed_at).toLocaleDateString("en-GB", { month: "short", day: "numeric", year: "numeric" })
              : "Recently";

            const readableName = rawName
              .split(/[-_]/)
              .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ");

            return {
              id: item.id ? String(item.id) : rawName,
              name: readableName,
              desc: rawDesc || `Enterprise ${classification.primaryCategory.toLowerCase()} cloud accelerator and production-ready IaC blueprint by Devopstrio.`,
              language: rawLang,
              framework: rawLang === "HCL" ? "Terraform Module" : "DevOps Engine",
              version: "v1.0",
              status: "🟢 Active",
              stars: item.stargazers_count || 0,
              rating: "★★★★★",
              lastUpdated: lastPushDate,
              tags: [classification.cloud, classification.primaryCategory, rawLang, "Enterprise", ...classification.categories],
              cloud: classification.cloud,
              category: classification.primaryCategory,
              categories: classification.categories,
              features: classification.features,
              htmlUrl: item.html_url || `https://github.com/Devopstrio/${rawName}`,
              codeSnippet: `module "${rawName.replace(/[^a-zA-Z0-9]/g, "_")}" {\n  source  = "Devopstrio/${rawName}/azurerm"\n  version = "1.0.0"\n\n  environment = "production"\n  enable_monitoring = true\n  enable_governance = true\n}`,
              docsContent: `Official architecture blueprint and deployment code for ${readableName}. Integrates directly with Devopstrio CI/CD pipelines and multi-cloud governance rules.`
            };
          });

          // Enforce category classification for baseline repositories too
          const enrichedBaseline: RepoItem[] = baselineRepositories.map((r) => {
            const classification = classifyRepo(r.name, r.desc, r.tags, r.language);
            return {
              ...r,
              category: classification.primaryCategory,
              categories: classification.categories,
              features: classification.features,
              cloud: classification.cloud
            };
          });

          // Combine unique repositories
          const combinedMap = new Map<string, RepoItem>();
          enrichedBaseline.forEach((r) => combinedMap.set(r.name.toLowerCase(), r));
          parsedRepos.forEach((r) => combinedMap.set(r.name.toLowerCase(), r));
          const combinedList = Array.from(combinedMap.values());

          setLiveRepos(combinedList);
          setLiveRepoCount(combinedList.length);
        } else {
          setLiveRepos(baselineRepositories);
          setLiveRepoCount(baselineRepositories.length);
        }
      } catch (err) {
        console.warn("Failed to fetch live GitHub API repos, using baseline list:", err);
        setLiveRepos(baselineRepositories);
        setLiveRepoCount(baselineRepositories.length);
      } finally {
        setReposLoading(false);
      }
    }

    fetchOrgRepos();
  }, []);

  const activeRepoList = liveRepos.length > 0 ? liveRepos : baselineRepositories;

  // Comprehensive Multi-Tag, Multi-Cloud, Search Relevance, and Sort Logic
  const filteredRepos = activeRepoList
    .filter((repo) => {
      // 1. Precise Category Filtering
      if (activeFilter !== "All") {
        const isMatch =
          repo.category === activeFilter ||
          (repo.categories && repo.categories.includes(activeFilter)) ||
          repo.tags.some((t) => t.toLowerCase() === activeFilter.toLowerCase());

        if (!isMatch) return false;
      }

      // 2. Keyword Search Filter (multi-word match across name, description, category, tags, and features)
      if (searchTerm.trim()) {
        const words = searchTerm.toLowerCase().trim().split(/\s+/).filter(Boolean);
        const corpus = `${repo.name} ${repo.desc} ${repo.category} ${(repo.categories || []).join(" ")} ${repo.cloud} ${repo.language} ${repo.tags.join(" ")} ${repo.features.join(" ")}`.toLowerCase();
        
        const allMatched = words.every((word) => corpus.includes(word));
        if (!allMatched) return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Priority 1: Search relevance ranking (Exact / Title matches come first)
      if (searchTerm.trim()) {
        const sLower = searchTerm.toLowerCase().trim();
        const aTitleMatch = a.name.toLowerCase().includes(sLower);
        const bTitleMatch = b.name.toLowerCase().includes(sLower);
        if (aTitleMatch && !bTitleMatch) return -1;
        if (!aTitleMatch && bTitleMatch) return 1;
      }

      // Priority 2: Standard sort criteria
      if (sortBy === "stars") {
        return (Number(b.stars) || 0) - (Number(a.stars) || 0);
      }
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "updated") {
        return a.lastUpdated.localeCompare(b.lastUpdated);
      }
      return 0;
    });

  // Calculate Pagination Slices
  const totalPages = Math.ceil(filteredRepos.length / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedRepos = filteredRepos.slice(startIndex, startIndex + pageSize);

  // Sliding 5-page window calculation (1..5 -> 2..6 -> 3..7 -> etc.)
  const getVisiblePages = (current: number, total: number, maxVisible: number = 5) => {
    if (total <= maxVisible) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    let start = current;
    if (start + maxVisible - 1 > total) {
      start = Math.max(1, total - maxVisible + 1);
    }
    const pages: number[] = [];
    for (let i = 0; i < maxVisible && start + i <= total; i++) {
      pages.push(start + i);
    }
    return pages;
  };

  // Reset page when filter or search changes
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  // Category Tab Dynamic Counts Helper
  const getTabCount = (tabId: string) => {
    if (tabId === "All") return activeRepoList.length;
    return activeRepoList.filter(
      (r) => r.category === tabId || (r.categories && r.categories.includes(tabId))
    ).length;
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
      <section className="relative w-full min-h-[85vh] lg:min-h-[88vh] flex items-center bg-[#030303] text-white pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden border-b border-zinc-900/80 font-sans">
        
        {/* 1. Ambient Radial Glow (#E11D48 Neon) */}
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.08)_0%,rgba(225,29,72,0.02)_50%,transparent_70%)] pointer-events-none z-[1]" />
        
        {/* Additional Subtle Top Right Glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[55%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.05),transparent_70%)] pointer-events-none z-0" />

        {/* 2. Dark Gradient Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none z-[1] bg-[linear-gradient(180deg,rgba(3,3,3,0.75)_0%,rgba(3,3,3,0.4)_40%,rgba(3,3,3,0.92)_100%),linear-gradient(90deg,rgba(3,3,3,0.85)_0%,rgba(3,3,3,0.3)_50%,rgba(3,3,3,0.85)_100%)]" />

        {/* 3. Film Grain Noise SVG Overlay */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
          }}
        />

        {/* 4. Right Side Unique Landing Zone Architectural Graphic */}
        <div className="absolute right-0 sm:right-6 md:right-10 lg:right-16 top-10 sm:top-14 md:top-18 bottom-0 w-full lg:w-[58%] h-full pointer-events-none z-0 opacity-80 lg:opacity-100 flex items-center justify-end">
          <LandingZoneHeroGraphic className="w-full h-full" />
        </div>

        {/* 5. Main Hero Content Container */}
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-12 flex flex-col text-left">
              {/* Main Heading with Trailing Underscore Accent */}
              <Reveal delay={0.05} className="mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12] font-sans max-w-4xl">
                  Enterprise Cloud Landing Zones
                  <span className="text-rose-500 font-semibold animate-pulse">_</span>
                </h1>
              </Reveal>

              {/* Description Subtitle - Left Aligned With Heading */}
              <div className="max-w-2xl">
                <Reveal delay={0.15}>
                  <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8">
                    Automated, production-grade landing zone blueprints built with Terraform &amp; Bicep.
                    <br />
                    Pre-hardened zero-trust infrastructure engineered for rapid enterprise scale.
                  </p>
                </Reveal>

                {/* Action Buttons (Explore Repositories & Request Demo / Spec) */}
                <Reveal delay={0.25}>
                  <div className="flex flex-wrap gap-4 items-center justify-start">
                    {/* Primary Button: Explore Repositories */}
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById("git-showcase");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center bg-zinc-950 hover:bg-rose-600 border border-zinc-700/90 hover:border-rose-500 rounded-md overflow-hidden transition-all duration-300 group cursor-pointer shadow-2xl hover:shadow-[0_0_30px_rgba(225,29,72,0.4)]"
                    >
                      <span className="px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm md:text-base font-semibold text-white tracking-wide border-r border-zinc-800 group-hover:border-rose-500/60 transition-colors flex items-center gap-2">
                        <Github className="w-4 h-4 text-rose-400 group-hover:text-white transition-colors" />
                        <span>Explore Repositories</span>
                      </span>
                      <span className="px-3.5 sm:px-4 py-3.5 sm:py-4 text-white bg-zinc-900 group-hover:bg-rose-700 transition-colors flex items-center justify-center">
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>

                    {/* Secondary Button: Request Demo & Spec */}
                    <button
                      type="button"
                      onClick={() => setDemoModalOpen(true)}
                      className="inline-flex items-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-md text-xs sm:text-sm md:text-base font-semibold text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-600 transition-all duration-300 group cursor-pointer shadow-lg hover:-translate-y-0.5"
                    >
                      <Download className="w-4 h-4 text-rose-500 mr-2 group-hover:scale-110 transition-transform" />
                      <span>Request Demo &amp; Spec</span>
                    </button>
                  </div>
                </Reveal>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* KPI STATS STRIP */}
      <section className="w-full py-12 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-5xl mx-auto">
              {kpis.map((kpi, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center px-2">
                  <span className="text-3xl md:text-4xl xl:text-5xl font-bold text-rose-500 tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(225,29,72,0.3)] select-none">
                    {kpi.value}
                  </span>
                  <span className="text-zinc-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
                    {kpi.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. WHAT IS A LANDING ZONE? */}
      <section className="py-16 lg:py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
                What is a Cloud <span className="text-rose-500 font-semibold">Landing Zone?</span>
              </h2>
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
                  <h3 className="text-zinc-100 text-base sm:text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LANDING ZONE ARCHITECTURE DIAGRAM */}
      <section className="py-16 lg:py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
                Landing Zone <span className="text-rose-500 font-semibold">Architecture Pipeline</span>
              </h2>
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
                    <h4 className="text-sm sm:text-base font-semibold text-white">{step.title}</h4>
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
                <div key={i} className="p-3 rounded-xl bg-black border border-zinc-800 text-xs font-mono font-semibold text-zinc-300 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  {sub}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SUPPORTED CLOUDS */}
      <section className="py-16 lg:py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
                Supported <span className="text-rose-500 font-semibold">Cloud Platforms</span>
              </h2>
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
                    <span className="inline-flex items-center px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-[#E11D48] text-white">
                      {cloud.badge}
                    </span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-rose-400 transition-colors">{cloud.name}</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">{cloud.desc}</p>
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
      <section className="py-16 lg:py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
                Core Landing Zone <span className="text-rose-500 font-semibold">Components</span>
              </h2>
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
                <span className="text-xs sm:text-sm font-medium text-zinc-200">{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GIT REPOSITORY SHOWCASE ⭐ & DASHBOARD WITH PAGINATION & PREMIUM CARDS */}
      <section id="git-showcase" className="w-full py-24 bg-black text-white border-b border-zinc-900 relative overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8 relative z-10">

          {/* Section Header */}
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
                Enterprise <span className="text-rose-500 font-semibold">Landing Zone Accelerators</span>
              </h2>
            </div>
          </Reveal>

          {/* Live Search Bar (Ctrl + K Shortcut Support) */}
          <Reveal delay={0.1}>
            <div className="max-w-3xl mx-auto w-full">
              <div className="relative flex items-center">
                <Search className="absolute left-4.5 w-4 h-4 text-zinc-400 pointer-events-none" />
                <input
                  id="repo-search-input"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search repositories by name, description, topic or tech..."
                  className="w-full bg-[#09090C] border border-zinc-800 focus:border-rose-500 rounded-2xl pl-12 pr-24 py-3.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-rose-500/40 transition-all shadow-inner"
                />
                <div className="absolute right-4 flex items-center gap-2">
                  {searchTerm ? (
                    <button
                      type="button"
                      onClick={() => handleSearchChange("")}
                      className="p-1 rounded-md text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      title="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  ) : (
                    <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-semibold text-zinc-400 bg-zinc-900 border border-zinc-700/80 rounded-md shadow-sm">
                      Ctrl K
                    </kbd>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Category Filter Bar (All 8 Categories in Single Line) */}
          <Reveal delay={0.15}>
            <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar border-b border-zinc-900 pb-6">
              {[
                { id: "All", label: "All" },
                { id: "Landing Zone", label: "Landing Zones" },
                { id: "Multicloud", label: "Multicloud" },
                { id: "AI & Data", label: "AI & Data" },
                { id: "Security", label: "Security" },
                { id: "VDI / AVD", label: "VDI / AVD" },
                { id: "Industry", label: "Industry" },
                { id: "DevOps", label: "DevOps & IaC" },
              ].map((tab) => {
                const isActive = activeFilter === tab.id;
                const count = getTabCount(tab.id);
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleFilterClick(tab.id)}
                    className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border flex items-center gap-2 cursor-pointer shrink-0 ${
                      isActive
                        ? "bg-rose-500 border-rose-500 text-white shadow-[0_4px_20px_rgba(244,63,94,0.35)]"
                        : "bg-zinc-950/60 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold transition-colors ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Live GitHub Sync Counter Badge */}
          <Reveal delay={0.2}>
            <div className="flex items-center justify-center pt-1 pb-2">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-rose-400 bg-rose-950/30 border border-rose-500/30 rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(225,29,72,0.15)] font-mono">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_#f43f5e]" />
                Live · {activeRepoList.length} Repositories Loaded from GitHub
              </span>
            </div>
          </Reveal>

          {/* DYNAMIC REPOSITORY CARD GRID WITH FLUID FRAMER-MOTION TRANSITION */}
          {paginatedRepos.length === 0 ? (
            <div className="py-16 px-6 text-center rounded-2xl bg-[#09090C] border border-zinc-800/80 space-y-4">
              <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">No repositories found matching your query</h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto font-normal">
                No repository matches topic &quot;{activeFilter}&quot; {searchTerm ? `or keyword "${searchTerm}"` : ""}. Try adjusting your filters or search keywords.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter("All");
                  setSearchTerm("");
                  setCurrentPage(1);
                }}
                className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs border border-zinc-800 transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeFilter}-${currentPage}-${searchTerm}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
              >
                {paginatedRepos.map((repo, idx) => {
                  const displayCategory =
                    activeFilter !== "All" &&
                    (repo.category === activeFilter || repo.categories?.includes(activeFilter))
                      ? activeFilter
                      : repo.category;

                  return (
                    <motion.div
                      key={repo.id || idx}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.22, delay: idx * 0.03 }}
                      className="group flex flex-col justify-between bg-zinc-950/50 border border-white/5 hover:border-rose-500/40 rounded-2xl p-6 transition-all duration-300 h-full min-h-[220px] backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:-translate-y-1"
                    >

                      <div>
                        {/* Top Header: Language / Topic (Stars Removed) */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-rose-500 font-semibold uppercase tracking-wider">
                            <Code className="w-4 h-4 text-rose-500 flex-shrink-0" />
                            <span>{repo.language}</span>
                          </div>
                        </div>

                        {/* Title & Description Container (Fixed Height Smooth Swap on Hover) */}
                        <div className="relative min-h-[85px] md:min-h-[92px] flex items-center my-2 overflow-hidden">
                          {/* Normal State: Repo Title */}
                          <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-rose-400 transition-all duration-300 tracking-tight leading-snug absolute inset-0 flex items-start group-hover:opacity-0 group-hover:-translate-y-2 pointer-events-none">
                            {repo.name}
                          </h3>

                          {/* Hover State: 2-line Sub-content Description */}
                          <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 absolute inset-0 flex items-start">
                            {repo.desc}
                          </p>
                        </div>
                      </div>

                      {/* Card Bottom Meta & Action Buttons */}
                      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto">
                        <button
                          type="button"
                          onClick={() => setSelectedRepoModal(repo)}
                          className="inline-flex items-center gap-1.5 text-sm md:text-base font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors cursor-pointer"
                          title="View Architecture Specification"
                        >
                          <BookOpen className="w-4 h-4 text-rose-500" />
                          <span>Spec</span>
                        </button>
                        <a
                          href={repo.htmlUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm md:text-base font-semibold uppercase tracking-wider text-rose-500 hover:text-white transition-colors shrink-0"
                        >
                          <span>View Repo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          )}

          {/* CLEAN CENTERED SLIDING 5-PAGE WINDOW PAGINATION */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-10 pb-2 border-t border-zinc-900 mt-10">
              {/* Previous Button */}
              <button
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                  const el = document.getElementById("git-showcase");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                  currentPage === 1
                    ? "opacity-30 cursor-not-allowed bg-zinc-950 text-zinc-600 border border-zinc-900"
                    : "bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-rose-500/50"
                }`}
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              {/* 5-Page Sliding Window */}
              <div className="flex items-center gap-1.5">
                {getVisiblePages(currentPage, totalPages, 5).map((page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      const el = document.getElementById("git-showcase");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`w-9 h-9 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      currentPage === page
                        ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-rose-600/40 scale-105"
                        : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  const el = document.getElementById("git-showcase");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                  currentPage === totalPages
                    ? "opacity-30 cursor-not-allowed bg-zinc-950 text-zinc-600 border border-zinc-900"
                    : "bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-rose-500/50"
                }`}
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Repository Directory Compact Table (Without Stars Column) */}
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
      <section className="py-16 lg:py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
                6-Step <span className="text-rose-500 font-semibold">Deployment Workflow</span>
              </h2>
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
                <h4 className="text-sm sm:text-base font-semibold text-white pt-2">{wf.title}</h4>
                <p className="text-xs text-zinc-400 font-normal">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INFRASTRUCTURE MODULES */}
      <section className="py-16 lg:py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
                Infrastructure <span className="text-rose-500 font-semibold">Modules</span>
              </h2>
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
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-rose-400 transition-colors">{mod.name}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">{mod.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. AUTOMATION & IAC */}
      <section className="py-16 lg:py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
                Automation &amp; <span className="text-rose-500 font-semibold">IaC Engine</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["GitHub Actions", "Azure DevOps", "Terraform / OpenTofu", "Ansible", "Bicep", "ARM Templates"].map((tool, idx) => (
              <div key={idx} className="p-5 rounded-[20px] bg-[#0A0A0A] border border-zinc-800/80 text-center font-medium text-xs sm:text-sm text-white hover:border-rose-500/40 transition-colors">
                <Workflow className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. SECURITY & GOVERNANCE */}
      <section className="py-16 lg:py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
                Security &amp; <span className="text-rose-500 font-semibold">Governance</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Azure Policy / AWS SCP", "Defender for Cloud", "IAM & Entra ID", "RBAC Least Privilege", "Key Vault HSM", "Sentinel SIEM", "Audit Logging", "SOC2 / HIPAA Compliance"].map((sec, idx) => (
              <div key={idx} className="p-4 rounded-[16px] bg-[#0A0A0A] border border-zinc-800/80 flex items-center gap-3 hover:border-rose-500/40 transition-colors">
                <Shield className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-zinc-200">{sec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. MONITORING & OPERATIONS */}
      <section className="py-16 lg:py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
                Monitoring &amp; <span className="text-rose-500 font-semibold">Operations</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Azure Monitor", "Log Analytics", "Grafana Dashboards", "Prometheus Metrics", "Automated Alerts", "Operational Insights"].map((mon, idx) => (
              <div key={idx} className="p-4 rounded-[20px] bg-[#0A0A0A] border border-zinc-800/80 text-center font-medium text-xs sm:text-sm text-zinc-200 hover:border-rose-500/40 transition-colors">
                <Activity className="w-5 h-5 text-rose-500 mx-auto mb-2" />
                {mon}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. DOCUMENTATION */}
      <section className="py-16 lg:py-20 bg-[#030303] border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
                Architecture <span className="text-rose-500 font-semibold">Documentation</span>
              </h2>
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
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-rose-400 transition-colors">{doc.name}</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">{doc.desc}</p>
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
      <section className="py-20 md:py-24 bg-[#030303] text-white border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">

          <Reveal className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
              Questions we get <span className="text-rose-500 font-semibold">asked every day</span>.
            </h2>
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
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-normal max-w-3xl animate-in fade-in duration-200 flex flex-col gap-4">
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
              <p className="text-zinc-400 text-xs md:text-sm font-normal">
                Still have questions? Reach out to our cloud architects — we respond to every message personally.
              </p>
              <button
                onClick={() => setDemoModalOpen(true)}
                className="gap-2 inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex-shrink-0"
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
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#E11D48] text-white">
                {selectedRepoModal.cloud} &bull; {selectedRepoModal.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white pt-1">{selectedRepoModal.name}</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">{selectedRepoModal.desc}</p>
            </div>

            {/* Code Snippet Box */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-zinc-400">Terraform Code Example ({selectedRepoModal.version}):</span>
              <pre className="p-4 rounded-[16px] bg-black border border-zinc-800 text-xs font-mono text-rose-300 overflow-x-auto">
                <code>{selectedRepoModal.codeSnippet}</code>
              </pre>
            </div>

            {/* Documentation Info */}
            <div className="p-4 rounded-[16px] bg-black border border-zinc-800 space-y-2">
              <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-rose-500" /> Documentation & Setup Overview
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">{selectedRepoModal.docsContent}</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedRepoModal(null)}
                className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-xs cursor-pointer transition-colors"
              >
                Close Window
              </button>
              <a
                href={selectedRepoModal.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-[#E11D48] hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-colors"
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
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {modalMode === "pdf" ? "Architecture PDF Request Dispatched!" : "Demo Request Received!"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-sm mx-auto font-normal leading-relaxed">
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
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    {modalMode === "pdf" ? (
                      <Download className="w-5 h-5 text-rose-500" />
                    ) : (
                      <Sparkles className="w-5 h-5 text-rose-500" />
                    )}
                    {modalMode === "pdf" ? "Download Architecture PDF" : "Request Landing Zone Demo"}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-normal leading-relaxed">
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
