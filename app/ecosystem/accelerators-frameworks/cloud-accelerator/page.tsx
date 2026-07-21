"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Cloud,
  Server,
  ShieldCheck,
  Layers,
  Network,
  Settings,
  Rocket,
  GitBranch,
  CheckCircle2,
  Cpu,
  Database,
  Lock,
  Boxes,
  Code,
  Github,
  Workflow,
  Sliders,
  Flame,
  Play,
  FileText,
  Check,
  ExternalLink,
  X,
  Download,
  Terminal,
  ArrowRight,
  Activity,
  Sparkles,
  Shield,
  Zap,
  BarChart3,
  Key,
  Search,
  FileCode,
  CheckCircle,
  AlertTriangle,
  FolderGit2,
  HardDrive,
  RefreshCw
} from "lucide-react";
import Link from "next/link";

export default function CloudAcceleratorPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);
  const [demoSubmitted, setDemoSubmitted] = useState<boolean>(false);
  const [activeArchHover, setActiveArchHover] = useState<string>("Networking");
  const [activeWfStep, setActiveWfStep] = useState<number>(0);
  const [activeModuleTab, setActiveModuleTab] = useState<string>("Networking");
  const [selectedCloud, setSelectedCloud] = useState<string>("Azure");
  const [selectedModuleModal, setSelectedModuleModal] = useState<any | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    cloudProvider: "Multi-Cloud",
    message: ""
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Auto-advance deployment workflow step demo
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWfStep((prev) => (prev + 1) % 7);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // 1. Business Challenges Data
  const businessChallenges = [
    {
      title: "Manual Infrastructure Deployment",
      desc: "Prone to human error, lengthy delays, and non-standard configurations across teams.",
      icon: AlertTriangle,
      tag: "High Risk"
    },
    {
      title: "Inconsistent Cloud Environments",
      desc: "Drift between dev, staging, and production creating unpredictable runtime failures.",
      icon: RefreshCw,
      tag: "Environment Drift"
    },
    {
      title: "Slow Provisioning",
      desc: "Engineering teams waiting weeks or months to get production-ready cloud landing zones.",
      icon: Activity,
      tag: "Bottleneck"
    },
    {
      title: "Security Misconfigurations",
      desc: "Publicly accessible storage, missing encryption, and lax IAM role permissions.",
      icon: Shield,
      tag: "Vulnerability"
    },
    {
      title: "Governance Complexity",
      desc: "Difficulty enforcing enterprise compliance, audit policies, and resource tagging at scale.",
      icon: Sliders,
      tag: "Compliance"
    },
    {
      title: "Multi-Cloud Management",
      desc: "Managing fragmented operational tools and fragmented IaC setups across Azure, AWS, GCP & OCI.",
      icon: Cloud,
      tag: "Multi-Cloud"
    },
    {
      title: "Limited Automation",
      desc: "Excessive repetitive scripts, missing CI/CD pipelines, and manual verification steps.",
      icon: Code,
      tag: "Inefficiency"
    },
    {
      title: "Operational Overhead",
      desc: "High cost of maintaining custom in-house cloud foundations instead of reusable accelerators.",
      icon: Settings,
      tag: "Cost Burden"
    }
  ];

  // 2. Accelerator Components Data (Interconnected Modularity)
  const acceleratorComponents = [
    {
      id: "tf-modules",
      title: "Terraform Modules",
      desc: "Battle-tested, versioned HCL modules for VNets, IAM, Key Vaults, AKS, and Storage.",
      icon: Code,
      connects: ["Landing Zone Templates", "Security Baselines"]
    },
    {
      id: "lz-templates",
      title: "Landing Zone Templates",
      desc: "Turnkey enterprise multi-account blueprints (Azure CAF, AWS Control Tower, GCP Fabric).",
      icon: Layers,
      connects: ["Networking Blueprints", "Identity & Access"]
    },
    {
      id: "net-blueprints",
      title: "Networking Blueprints",
      desc: "Hub-and-spoke VNet/VPC topologies, Transit Gateway routing, and egress firewalls.",
      icon: Network,
      connects: ["Security Baselines", "CI/CD Integration"]
    },
    {
      id: "identity-access",
      title: "Identity & Access",
      desc: "Zero-trust RBAC templates, OIDC federated auth, Entra ID / Okta SSO integration.",
      icon: Lock,
      connects: ["Security Baselines", "Cost Management"]
    },
    {
      id: "monitoring",
      title: "Monitoring",
      desc: "Pre-configured Prometheus, Grafana dashboards, Azure Monitor & CloudWatch alerts.",
      icon: Activity,
      connects: ["Logging", "CI/CD Integration"]
    },
    {
      id: "logging",
      title: "Logging",
      desc: "Centralized SIEM log shipping, immutable audit trails, and 90-day retention policies.",
      icon: FileText,
      connects: ["Security Baselines", "Monitoring"]
    },
    {
      id: "security-baselines",
      title: "Security Baselines",
      desc: "Automated CIS Benchmarks, Defender for Cloud policies, and HashiCorp Vault secrets.",
      icon: ShieldCheck,
      connects: ["Cost Management", "Backup & Recovery"]
    },
    {
      id: "cost-management",
      title: "Cost Management",
      desc: "FinOps tagging automation, orphan resource cleanup, and budget guardrails.",
      icon: BarChart3,
      connects: ["Landing Zone Templates"]
    },
    {
      id: "backup-recovery",
      title: "Backup & Recovery",
      desc: "Automated snapshot vaults, cross-region replication, and disaster recovery specs.",
      icon: HardDrive,
      connects: ["Security Baselines"]
    },
    {
      id: "cicd-integration",
      title: "CI/CD Integration",
      desc: "GitHub Actions & Azure DevOps pipelines with Terraform plan validation and OIDC.",
      icon: Workflow,
      connects: ["Terraform Modules"]
    }
  ];

  // 3. Reference Architecture Layers (Interactive Hover)
  const refArchLayers = [
    {
      name: "Networking",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      desc: "Hub-and-Spoke VNet/VPC topology, Azure Firewall / AWS Network Firewall, BGP Peering, and ExpressRoute / DirectConnect endpoints.",
      details: ["Hub VNet / Shared VPC", "Automated Subnet Vending", "Central Firewall Egress", "VPN & ExpressRoute Setup"]
    },
    {
      name: "Identity",
      icon: Lock,
      color: "from-purple-500 to-rose-500",
      desc: "Least-privilege Identity & Access Management with Azure Entra ID, AWS IAM Identity Center, and Okta federation.",
      details: ["Privileged Identity (PIM)", "Role-Based Access Control", "OIDC Workload Identity", "Zero-Trust Identity Perimeters"]
    },
    {
      name: "Security",
      icon: ShieldCheck,
      color: "from-rose-500 to-red-600",
      desc: "Continuous security baseline enforcement, Microsoft Defender for Cloud, AWS Security Hub, and Key Vault secret protection.",
      details: ["CIS Benchmark Guardrails", "Key Vault / Secrets Manager", "SIEM Sentinel Integration", "VPC Service Controls"]
    },
    {
      name: "Monitoring",
      icon: Activity,
      color: "from-emerald-500 to-teal-500",
      desc: "Central Log Analytics, Grafana telemetry, metric alerts, and automated budget notifications.",
      details: ["Log Analytics Workspace", "Grafana & Prometheus", "Audit Trail Archives", "Real-Time Drift Alerts"]
    },
    {
      name: "Applications",
      icon: Boxes,
      color: "from-amber-500 to-orange-500",
      desc: "Ready-to-deploy workload landing zones for Container Apps, AKS/EKS Kubernetes clusters, and microservice backends.",
      details: ["AKS / EKS Ready Subnets", "App Service Environments", "PostgreSQL / SQL Databases", "Blob & S3 Storage Isolation"]
    }
  ];

  // 4. Deployment Workflow Timeline
  const workflowSteps = [
    {
      step: 1,
      title: "Clone Repository",
      short: "Git Clone",
      desc: "Fetch the Devopstrio Cloud Accelerator Terraform repository template configured for your target hyperscaler.",
      icon: Github,
      code: "git clone https://github.com/Devopstrio/cloud-accelerator.git"
    },
    {
      step: 2,
      title: "Configure Variables",
      short: "Define tfvars",
      desc: "Customize region specs, IP CIDR blocks, project tags, and compliance requirements in `terraform.tfvars`.",
      icon: FileCode,
      code: 'environment = "production"\nregion      = "eastus2"\nvnet_cidr   = "10.100.0.0/16"'
    },
    {
      step: 3,
      title: "Validate Configuration",
      short: "Syntax & Lint",
      desc: "Execute automated tflint, tfsec security scans, and terraform fmt validation checks.",
      icon: ShieldCheck,
      code: "terraform fmt -check && tfsec . && tflint"
    },
    {
      step: 4,
      title: "Terraform Plan",
      short: "Execution Plan",
      desc: "Generate speculative plan file detailing resource additions, modifications, and policy compliance.",
      icon: Code,
      code: "terraform plan -out=tfplan -no-color"
    },
    {
      step: 5,
      title: "Infrastructure Deployment",
      short: "Apply & Provision",
      desc: "Execute pipeline apply step with state locking in remote encrypted cloud storage backends.",
      icon: Workflow,
      code: "terraform apply tfplan --auto-approve"
    },
    {
      step: 6,
      title: "Post Deployment Validation",
      short: "Verify Policy",
      desc: "Automated post-provisioning smoke tests verify subnet routes, firewall rules, and RBAC bindings.",
      icon: CheckCircle2,
      code: "pytest tests/validate_landing_zone.py --verbose"
    },
    {
      step: 7,
      title: "Monitoring Enabled",
      short: "Live Telemetry",
      desc: "Landing zone live with Grafana dashboard alerts, Sentinel SIEM logging, and continuous drift detection.",
      icon: Rocket,
      code: "STATUS: 🟢 LANDING ZONE LIVE & SECURE"
    }
  ];

  // 5. Supported Cloud Platforms
  const cloudPlatforms = [
    {
      id: "Azure",
      name: "Microsoft Azure",
      tagline: "Azure CAF Enterprise Scale Landing Zones",
      badge: "Azure CAF",
      color: "from-blue-600 to-cyan-500",
      accent: "bg-blue-500",
      desc: "Turnkey Bicep and Terraform implementation of Microsoft's Cloud Adoption Framework for hub-and-spoke topologies.",
      services: [
        "Azure Management Groups & Subscriptions",
        "Hub VNet & Spoke Peering",
        "Azure Firewall & Network Security Groups",
        "Azure Entra ID (Azure AD) RBAC & PIM",
        "Azure Defender for Cloud & Log Analytics",
        "Azure Key Vault & Storage Account Private Endpoints",
        "Azure Kubernetes Service (AKS) Hardened Baseline"
      ]
    },
    {
      id: "AWS",
      name: "Amazon Web Services",
      tagline: "AWS Control Tower & Multi-Account Architecture",
      badge: "AWS Control Tower",
      color: "from-amber-500 to-orange-600",
      accent: "bg-amber-500",
      desc: "Hardened AWS Organizations blueprint with Control Tower Account Factory, GuardDuty centralization, and Transit Gateway routing.",
      services: [
        "AWS Organizations & Account Factory",
        "AWS Transit Gateway & VPC Peering",
        "AWS Network Firewall & Security Groups",
        "AWS IAM Identity Center (AWS SSO)",
        "AWS GuardDuty, Security Hub & CloudTrail",
        "AWS KMS & Private S3 Buckets",
        "Amazon EKS Blueprint with IRSA & VPC CNI"
      ]
    },
    {
      id: "GCP",
      name: "Google Cloud Platform",
      tagline: "GCP Cloud Foundation Toolkit Blueprint",
      badge: "GCP Foundations",
      color: "from-red-500 to-amber-500",
      accent: "bg-red-500",
      desc: "GCP Organization Hierarchy with Shared VPC host projects, Cloud Armor security, and Vertex AI VPC Service Controls.",
      services: [
        "GCP Organization & Folder Hierarchy",
        "Shared VPC Host & Service Projects",
        "Cloud Armor Firewall & NAT Gateways",
        "Google Cloud IAM & Workload Identity",
        "Cloud Audit Logs & Security Command Center",
        "Secret Manager & Encrypted Cloud Storage",
        "Google Kubernetes Engine (GKE) Private Clusters"
      ]
    },
    {
      id: "OCI",
      name: "Oracle Cloud Infrastructure",
      tagline: "OCI CIS Foundations Benchmark Architecture",
      badge: "OCI CIS Foundations",
      color: "from-rose-600 to-red-700",
      accent: "bg-rose-600",
      desc: "Enterprise OCI Compartment hierarchy, VCN peering, Cloud Guard security zones, and Exadata-ready infrastructure.",
      services: [
        "OCI Tenancy & Compartment Hierarchy",
        "Virtual Cloud Networks (VCN) & FastConnect",
        "OCI Network Security Groups & Security Lists",
        "OCI Identity Domains & Group Policies",
        "OCI Cloud Guard & Vulnerability Scanning",
        "OCI Vault & Encrypted Block Volumes",
        "Oracle Container Engine for Kubernetes (OKE)"
      ]
    }
  ];

  // 6. Infrastructure Modules Data (Categorized)
  const infrastructureModules = {
    Networking: [
      { name: "VNet / VPC Module", desc: "Automated creation of hub/spoke virtual networks and CIDR subnet allocation.", badge: "IaC" },
      { name: "Subnets Module", desc: "Private, public, and workload subnets with automated route tables.", badge: "Network" },
      { name: "NSG / Security Groups", desc: "Zero-trust network security rules restricting unnecessary ingress.", badge: "Security" },
      { name: "VPN & DirectConnect", desc: "Site-to-Site VPN tunnels and ExpressRoute gateway provisioning.", badge: "Hybrid" }
    ],
    Security: [
      { name: "Key Vault / KMS", desc: "Hardware Security Module (HSM) secret isolation and rotation rules.", badge: "Secrets" },
      { name: "IAM & RBAC", desc: "Least-privilege role definitions and OIDC identity mapping.", badge: "Identity" },
      { name: "Cloud Firewall", desc: "Central egress rule enforcement and threat intelligence filtering.", badge: "Protection" },
      { name: "Secret Manager", desc: "Automated secret injection for container workloads and CI/CD.", badge: "Vault" }
    ],
    Compute: [
      { name: "Virtual Machines", desc: "Hardened OS image templates with automated patching agents.", badge: "VM" },
      { name: "Kubernetes (AKS/EKS)", desc: "Production-ready cluster blueprints with CNI & Ingress controllers.", badge: "K8s" },
      { name: "App Services", desc: "Auto-scaling web app services with TLS certificate auto-renewal.", badge: "PaaS" }
    ],
    Storage: [
      { name: "Blob Storage", desc: "Encrypted object storage with immutability policies and lifecycle rules.", badge: "Azure" },
      { name: "S3 Object Storage", desc: "Multi-region replicated S3 buckets with KMS customer-managed keys.", badge: "AWS" }
    ],
    Database: [
      { name: "SQL Database", desc: "High-availability managed relational databases with automatic failover.", badge: "RDBMS" },
      { name: "PostgreSQL Engine", desc: "Encrypted PostgreSQL clusters with automated point-in-time backups.", badge: "Postgres" }
    ],
    Monitoring: [
      { name: "Azure Monitor / CloudWatch", desc: "Native cloud telemetry collection and pre-built operational alerts.", badge: "Metrics" },
      { name: "Grafana & Prometheus", desc: "Containerized dashboard setup for deep node and pod metrics.", badge: "Observability" }
    ],
    Logging: [
      { name: "Log Analytics Workspace", desc: "Centralized log ingestion engine with retention and SIEM forwarding.", badge: "Logs" },
      { name: "CloudTrail / Audit Logs", desc: "Immutable audit logging capturing every management API event.", badge: "Audit" }
    ]
  };

  // 7. Security & Governance Cards
  const governanceCards = [
    { title: "RBAC", desc: "Strict Role-Based Access Control mapped directly to corporate identity providers.", icon: Lock },
    { title: "Identity Management", desc: "Federated Single Sign-On (SSO) and Privileged Identity Management (PIM).", icon: ShieldCheck },
    { title: "Policy Enforcement", desc: "Automated Azure Policy & AWS SCP preventing non-compliant resource creation.", icon: Sliders },
    { title: "Secret Management", desc: "Zero clear-text secrets: Centralized Key Vault & KMS with auto-rotation.", icon: Key },
    { title: "Compliance Checks", desc: "Continuous mapping against SOC 2, ISO 27001, HIPAA, and CIS Benchmarks.", icon: CheckCircle2 },
    { title: "Audit Logging", desc: "Centralized, tamper-proof audit trails shipped to SIEM backends.", icon: FileText },
    { title: "Resource Tagging", desc: "Mandatory metadata tags enforcing cost center, owner, and env attributes.", icon: Boxes },
    { title: "Cost Governance", desc: "Automated budget thresholds, orphan disk purging, and FinOps reporting.", icon: BarChart3 }
  ];

  // 8. Key Capabilities Cards
  const keyCapabilities = [
    { title: "Infrastructure as Code", desc: "100% declarative HCL/Bicep modules designed for modular reuse.", icon: Code },
    { title: "Multi-Cloud Support", desc: "Consistent deployment experience across Azure, AWS, GCP, and OCI.", icon: Cloud },
    { title: "Modular Architecture", desc: "Composable building blocks that can be deployed independently.", icon: Layers },
    { title: "Reusable Components", desc: "Standardized templates that eliminate duplicated IaC engineering.", icon: Boxes },
    { title: "Version Controlled Infrastructure", desc: "Git-backed infrastructure definitions with full history and rollback.", icon: GitBranch },
    { title: "Automated Provisioning", desc: "Push-button deployment via CI/CD pipelines in under 15 minutes.", icon: Workflow },
    { title: "Self-Service Deployment", desc: "Empower application teams to request vending machine environments.", icon: Rocket },
    { title: "Enterprise Governance", desc: "Built-in security guardrails, tagging, and regulatory compliance.", icon: ShieldCheck }
  ];

  // 9. Business Benefits KPI Cards
  const businessBenefits = [
    { value: "80%", title: "Faster Provisioning", desc: "Reduce cloud environment setup time from months to minutes using pre-tested IaC.", highlight: "from-rose-500 to-red-600" },
    { value: "100%", title: "Standardized Cloud Environments", desc: "Eliminate configuration drift with single-source-of-truth IaC templates.", highlight: "from-blue-500 to-indigo-600" },
    { value: "95%", title: "Reduced Manual Errors", desc: "Automate security checks, IP allocation, and firewall rules in pipeline runs.", highlight: "from-emerald-500 to-teal-600" },
    { value: "Zero", title: "Improved Security Guardrails", desc: "Default zero-trust architecture preventing public exposure of sensitive assets.", highlight: "from-purple-500 to-rose-500" },
    { value: "35%", title: "Lower Operational Costs", desc: "FinOps tagging and automated idle resource shutdown rules save cloud budget.", highlight: "from-amber-500 to-orange-600" },
    { value: "4x", title: "Accelerated Cloud Adoption", desc: "Deploy production-ready landing zones for immediate team onboarding.", highlight: "from-cyan-500 to-blue-600" }
  ];

  // 10. Use Cases Cards
  const useCases = [
    { title: "Enterprise Landing Zones", desc: "Provision multi-account cloud foundations conforming to Microsoft CAF or AWS Control Tower standards.", icon: Layers },
    { title: "Cloud Migration", desc: "Rapidly create secure target landing zones before migrating legacy on-premise workloads to hyper-scalers.", icon: Rocket },
    { title: "Multi-Cloud Foundation", desc: "Establish consistent governance, identity, and networking across Azure, AWS, GCP, and OCI.", icon: Cloud },
    { title: "Disaster Recovery", desc: "Spin up isolated, identical DR landing zones on-demand in secondary cloud regions.", icon: HardDrive },
    { title: "Development Environments", desc: "Empower developer teams with isolated sandboxes featuring automated teardown policies.", icon: Code },
    { title: "Production Infrastructure", desc: "Deploy hardened, SOC 2 compliant production foundations with high-availability controls.", icon: ShieldCheck },
    { title: "Platform Engineering", desc: "Provide internal developer platforms (IDP) with pre-approved infrastructure templates.", icon: Cpu },
    { title: "Kubernetes Foundation", desc: "Provision network subnets, IAM roles, and storage backends specifically for AKS/EKS clusters.", icon: Boxes }
  ];

  // 11. Related Accelerators Cards
  const relatedAccelerators = [
    {
      title: "Landing Zone Portal",
      desc: "Explore production landing zone blueprints, repository tables, and IaC deployment models.",
      href: "/ecosystem/accelerators-frameworks/landing-zone",
      tag: "Infrastructure"
    },
    {
      title: "DevOps Accelerator",
      desc: "Streamline developer workflows, GitOps pipelines, and microservice container deployment.",
      href: "/ecosystem/accelerators-frameworks/devops-accelerator",
      tag: "CI/CD & GitOps"
    },
    {
      title: "AI Framework",
      desc: "Enterprise GenAI gateway, multi-agent orchestration, and private RAG search architecture.",
      href: "/ecosystem/accelerators-frameworks/ai-framework",
      tag: "Artificial Intelligence"
    },
    {
      title: "Security Framework",
      desc: "Zero-trust compliance guardrails, automated vulnerability scanning, and IAM governance.",
      href: "/ecosystem/accelerators-frameworks/security-framework",
      tag: "Cybersecurity"
    },
    {
      title: "Data Framework",
      desc: "Modern data platform blueprints, warehouse lakehouse pipelines, and analytics automation.",
      href: "/ecosystem/accelerators-frameworks/data-framework",
      tag: "Data Engineering"
    }
  ];

  // 12. FAQ List
  const faqs = [
    {
      q: "What is Devopstrio Cloud Accelerator?",
      a: "The Devopstrio Cloud Accelerator is a comprehensive, reusable Infrastructure as Code (IaC) and automation framework. It functions similarly to Microsoft Azure Landing Zone Accelerator, AWS Cloud Foundation Accelerator, or Google Cloud Foundation Toolkit, but is packaged as a modular, multi-cloud enterprise solution branded for rapid deployment."
    },
    {
      q: "Which cloud providers are supported?",
      a: "We provide first-class support for Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platform (GCP), and Oracle Cloud Infrastructure (OCI). You can deploy single-cloud foundations or unified multi-cloud architectures using consistent IaC tooling."
    },
    {
      q: "Does it use Terraform?",
      a: "Yes. Our accelerator modules are primarily written using HashiCorp Terraform and OpenTofu HCL. We also offer native Microsoft Bicep modules for pure Azure implementations."
    },
    {
      q: "Can it be customized for our specific organization?",
      a: "All Terraform modules and landing zone blueprints are fully parameterized. You can easily adjust IP ranges, naming conventions, management group structures, and security policies to match your enterprise standards."
    },
    {
      q: "Does it support GitHub Actions and Azure DevOps?",
      a: "Yes. We include pre-configured CI/CD workflow templates for GitHub Actions, Azure DevOps, and GitLab CI. These feature automated linting, security scanning (tfsec/checkov), speculative plans, and OIDC federated authentication."
    },
    {
      q: "Is it production ready?",
      a: "Yes. All blueprints undergo rigorous security testing against CIS Benchmarks, NIST 800-53, and SOC 2 standards. They are used by enterprise organizations to host mission-critical production workloads."
    },
    {
      q: "How does governance and policy enforcement work?",
      a: "Governance is embedded directly into the IaC code. We deploy automated guardrails like Azure Policy, AWS Service Control Policies (SCPs), and GCP Organization Constraints that prevent non-compliant resource creation."
    },
    {
      q: "Can existing infrastructure be imported into the accelerator?",
      a: "Yes. Using `terraform import` or automated IaC generator tools, existing cloud subscriptions and resource groups can be mapped into the Cloud Accelerator state."
    },
    {
      q: "How is multi-cloud state locking handled?",
      a: "State management is configured using encrypted, private remote backends (such as Azure Blob Storage with CosmosDB state locking or AWS S3 with DynamoDB table locking)."
    },
    {
      q: "How do we get started with Cloud Accelerator?",
      a: "You can click 'Schedule a Demo' or 'Request Demo & Spec' to schedule an architecture workshop with our cloud engineering team."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Ambient Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      {/* 1. HERO SECTION */}
      <Hero
        badge="ACCELERATORS & FRAMEWORKS"
        colorBends={true}
        colorBendsColors={["#f43f5e", "#ea580c", "#8b5cf6"]}
        title={
          <>
            Devopstrio <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-red-600">
              Cloud Accelerator
            </span>
          </>
        }
        subtitle="Deploy secure, production-ready cloud foundations in minutes with reusable Infrastructure as Code, automated provisioning, and enterprise governance."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ACCELERATORS & FRAMEWORKS", href: "/ecosystem/accelerators-frameworks" },
          { label: "CLOUD ACCELERATOR" }
        ]}
      >
        <div className="flex flex-col items-center gap-6">
          {/* Hero Highlights Badges */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Terraform Modules",
              "Infrastructure as Code",
              "Azure",
              "AWS",
              "Google Cloud",
              "Oracle Cloud"
            ].map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById("architecture");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 cursor-pointer"
            >
              Explore Accelerator
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 border border-zinc-800 hover:border-rose-500/50 rounded-full text-xs md:text-sm font-semibold text-white transition-all duration-300 hover:bg-zinc-900 cursor-pointer"
            >
              <Download className="w-4 h-4 text-rose-500" />
              Request Demo
            </button>
          </div>
        </div>
      </Hero>

      {/* 2. CLOUD ACCELERATOR OVERVIEW */}
      <section className="w-full py-20 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
              FOUNDATIONAL OVERVIEW
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Build Cloud Infrastructure Faster
            </h2>
            <p className="text-zinc-300 text-base md:text-xl leading-relaxed font-medium">
              Our Cloud Accelerator provides reusable Infrastructure as Code modules, deployment automation, networking blueprints, and governance templates that help engineering teams provision secure cloud environments consistently across multiple cloud providers.
            </p>
          </Reveal>

          {/* Overview Highlights 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: "Reusable IaC", icon: Code, desc: "Standardized Terraform and Bicep modules eliminating repetitive infrastructure scripts." },
              { title: "Automated Pipelines", icon: Workflow, desc: "CI/CD execution pipelines for GitHub Actions & Azure DevOps with spec testing." },
              { title: "Networking Blueprints", icon: Network, desc: "Turnkey hub-and-spoke virtual networks with firewall egress & BGP peering." },
              { title: "Enterprise Governance", icon: ShieldCheck, desc: "Automated policy guardrails enforcing RBAC, tagging, and continuous compliance." }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                  <pillar.icon className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS CHALLENGES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PAIN POINTS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Common Infrastructure Problems
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Traditional cloud provisioning is slowed down by fragmented scripts, security gaps, and manual operational overhead.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessChallenges.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-rose-500" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 font-bold">
                        {card.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ACCELERATOR COMPONENTS (Interconnected Cards) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MODULAR BLUEPRINTS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Accelerator Components
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Interconnected building blocks engineered to work in unison or as standalone modules.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {acceleratorComponents.map((comp) => {
              const Icon = comp.icon;
              return (
                <div
                  key={comp.id}
                  className="p-5 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 group relative"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                      {comp.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {comp.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-900">
                    <span className="text-[10px] font-mono text-zinc-500 block mb-1 uppercase tracking-wider font-bold">
                      Connects with:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {comp.connects.map((c, i) => (
                        <span key={i} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-rose-400 border border-zinc-800 font-bold">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. REFERENCE ARCHITECTURE (Animated & Interactive Diagram) */}
      <section id="architecture" className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              TOPOLOGY & FLOW
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Reference Architecture
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Interactive end-to-end cloud foundation diagram. Click or hover on infrastructure layers to view configurations.
            </p>
          </Reveal>

          {/* Flow Diagram Container */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl space-y-12">
            {/* Top Pipeline Pipeline Flow */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                { title: "Git Repository", sub: "Version Control", icon: Github, badge: "Source" },
                { title: "GitHub Actions", sub: "CI/CD Pipeline", icon: Workflow, badge: "Automation" },
                { title: "Terraform Engine", sub: "Spec execution", icon: Code, badge: "IaC" },
                { title: "Cloud Accelerator", sub: "Deployment Factory", icon: Rocket, badge: "Core Engine" }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center text-center p-4 rounded-xl bg-black border border-zinc-850 w-full md:w-52 hover:border-rose-500/40 transition-colors">
                      <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-widest mb-1">
                        {step.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 text-rose-500" />
                      </div>
                      <h4 className="text-sm font-bold text-white">{step.title}</h4>
                      <span className="text-xs text-zinc-400 font-medium">{step.sub}</span>
                    </div>

                    {idx < 3 && (
                      <div className="hidden md:flex items-center text-rose-500">
                        <ArrowRight className="w-6 h-6 animate-pulse" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Central Divider */}
            <div className="flex items-center gap-4 my-4">
              <div className="h-px bg-zinc-800 flex-1" />
              <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-widest px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">
                Provisioned Infrastructure Pillars
              </span>
              <div className="h-px bg-zinc-800 flex-1" />
            </div>

            {/* Interactive Target Pillars Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {refArchLayers.map((layer) => {
                const Icon = layer.icon;
                const isSelected = activeArchHover === layer.name;
                return (
                  <button
                    key={layer.name}
                    onClick={() => setActiveArchHover(layer.name)}
                    onMouseEnter={() => setActiveArchHover(layer.name)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-zinc-900 border-rose-500 text-white shadow-lg shadow-rose-500/10"
                        : "bg-black border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-white"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-rose-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">{layer.name}</h4>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block font-bold">
                        {isSelected ? "Active Layer" : "Click to view"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Layer Info Detail Inspector */}
            {refArchLayers.find((l) => l.name === activeArchHover) && (
              <div className="p-6 rounded-2xl bg-black border border-rose-500/30 flex flex-col md:flex-row justify-between items-center gap-6 animate-fadeIn">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    <h4 className="text-lg font-bold text-white">
                      {activeArchHover} Architecture Pillar
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed">
                    {refArchLayers.find((l) => l.name === activeArchHover)?.desc}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 w-full md:w-auto">
                  {refArchLayers
                    .find((l) => l.name === activeArchHover)
                    ?.details.map((d, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono font-bold text-rose-400 flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        {d}
                      </span>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. DEPLOYMENT WORKFLOW (Interactive Timeline) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              AUTOMATION TIMELINE
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Deployment Workflow
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              7-Step automated pipeline from repository clone to monitored production cloud environment.
            </p>
          </Reveal>

          {/* Timeline Steps Selector */}
          <div className="grid grid-cols-2 md:grid-cols-7 gap-3 mb-8">
            {workflowSteps.map((wf, idx) => {
              const isCurrent = activeWfStep === idx;
              return (
                <button
                  key={wf.step}
                  onClick={() => setActiveWfStep(idx)}
                  className={`p-3 rounded-xl border text-center transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "bg-rose-600/20 border-rose-500 text-white shadow-lg shadow-rose-500/20"
                      : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <span className="text-[10px] font-mono text-rose-400 font-bold block mb-1">
                    Step 0{wf.step}
                  </span>
                  <span className="text-xs font-bold block truncate">{wf.short}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Terminal Preview Box */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30 text-xs font-mono font-bold">
                Stage {workflowSteps[activeWfStep].step} of 7
              </span>
              <h3 className="text-xl font-bold text-white">
                {workflowSteps[activeWfStep].title}
              </h3>
              <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed">
                {workflowSteps[activeWfStep].desc}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActiveWfStep((prev) => (prev > 0 ? prev - 1 : 6))}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-300 cursor-pointer"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveWfStep((prev) => (prev + 1) % 7)}
                  className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white cursor-pointer"
                >
                  Next Step
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-black rounded-2xl p-5 border border-zinc-900 font-mono text-xs text-emerald-400 overflow-x-auto shadow-inner">
              <div className="flex justify-between text-zinc-500 text-[10px] mb-3 pb-2 border-b border-zinc-900">
                <span>bash - automated-pipeline.sh</span>
                <span>EXECUTION LOG</span>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-zinc-300">
                {`$ ${workflowSteps[activeWfStep].code}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SUPPORTED CLOUD PLATFORMS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              HYPERSCALER COMPATIBILITY
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Supported Cloud Platforms
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Pre-built Infrastructure as Code modules tailored for major hyper-scale cloud providers.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudPlatforms.map((platform) => (
              <div
                key={platform.id}
                className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-3xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-xl"
              >
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    {platform.badge}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                      {platform.name}
                    </h3>
                    <span className="text-xs text-zinc-400 font-medium block mt-1">
                      {platform.tagline}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                    {platform.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-zinc-900">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold block">
                      Supported Services:
                    </span>
                    {platform.services.map((svc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INFRASTRUCTURE MODULES (Categorized Grid) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              TERRAFORM LIBRARIES
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Infrastructure Modules
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Modular, version-controlled Infrastructure as Code components ready for production use.
            </p>
          </Reveal>

          {/* Module Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(infrastructureModules).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveModuleTab(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeModuleTab === cat
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                    : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-850"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Category Items Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureModules[activeModuleTab as keyof typeof infrastructureModules]?.map((mod: any, idx: number) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                      <Code className="w-4 h-4 text-rose-500" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-900 text-rose-400 border border-zinc-800">
                      {mod.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                    {mod.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. AUTOMATION PIPELINE (CI/CD Pipeline Flow) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CONTINUOUS INTEGRATION
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Automation Pipeline
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              End-to-end GitOps pipeline executing automated code validation, speculative planning, and safe deployment.
            </p>
          </Reveal>

          {/* CI/CD Flow Visual Grid */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
              {[
                { title: "Developer", icon: Terminal, badge: "User" },
                { title: "Git Push", icon: Github, badge: "Trigger" },
                { title: "GitHub Actions", icon: Workflow, badge: "CI Engine" },
                { title: "Terraform Validate", icon: ShieldCheck, badge: "Lint & Scan" },
                { title: "Terraform Plan", icon: FileCode, badge: "Speculative" },
                { title: "Terraform Apply", icon: Code, badge: "Execute" },
                { title: "Cloud Resources Ready", icon: Rocket, badge: "Live" }
              ].map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center text-center p-4 rounded-xl bg-black border border-zinc-850 hover:border-rose-500/50 transition-all group">
                      <span className="text-[9px] font-mono text-rose-400 font-bold uppercase mb-1">
                        {stage.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-rose-500" />
                      </div>
                      <h4 className="text-xs font-bold text-white">{stage.title}</h4>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 10. SECURITY & GOVERNANCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ZERO TRUST GUARDRAILS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Security & Governance
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Enterprise security features embedded directly into Infrastructure as Code blueprints.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-850 rounded-2xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. KEY CAPABILITIES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CORE FEATURES
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Key Capabilities
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Capabilities designed to accelerate engineering velocity and guarantee security compliance.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. BUSINESS BENEFITS (KPI Cards) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MEASURABLE OUTCOMES
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Business Benefits
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Proven operational impact delivered across enterprise cloud environments.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/80 border border-zinc-800 rounded-3xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl"
              >
                <div>
                  <span className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${benefit.highlight} tracking-tight block mb-3`}>
                    {benefit.value}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. USE CASES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              DEPLOYMENT SCENARIOS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Use Cases
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Tailored cloud foundation implementations for common enterprise engineering needs.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {useCase.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. RELATED ACCELERATORS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ECOSYSTEM SYNERGY
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Related Accelerators
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Explore complementary frameworks in the Devopstrio engineering ecosystem.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedAccelerators.map((acc, idx) => (
              <Link
                key={idx}
                href={acc.href}
                className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {acc.tag}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                    {acc.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {acc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <section id="faq" className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-3xl mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Everything you need to know
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Have questions about the Devopstrio Cloud Accelerator? Check out answers to common inquiries below.
            </p>
          </Reveal>

          {/* Accordion List */}
          <div className="flex flex-col border-t border-zinc-900">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-rose-400 transition-colors">
                      {faq.q}
                    </span>
                    <div className="text-zinc-500 group-hover:text-rose-500 transition-colors ml-4 shrink-0">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-medium max-w-4xl animate-fadeIn">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 16. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 space-y-8">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-2">
              GET STARTED TODAY
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Accelerate Your Cloud Journey
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
              Deploy secure, scalable, and governed cloud infrastructure faster with the Devopstrio Cloud Accelerator.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-3 pl-6 pr-4 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full transition-all duration-300 shadow-lg shadow-rose-600/30 cursor-pointer hover:scale-105"
            >
              Schedule a Demo
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full transition-all duration-300 cursor-pointer"
            >
              <Download className="w-4 h-4 text-rose-500" />
              Download Architecture Guide
            </button>
          </div>
        </div>
      </section>

      {/* DEMO / ARCHITECTURE SPEC MODAL */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl space-y-6">
            <button
              onClick={() => {
                setDemoModalOpen(false);
                setDemoSubmitted(false);
              }}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {demoSubmitted ? (
              <div className="text-center space-y-4 py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Request Received!</h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                  Thank you for your interest in the Devopstrio Cloud Accelerator. Our lead cloud architects will contact you within 24 hours with your requested spec deck.
                </p>
                <button
                  onClick={() => {
                    setDemoModalOpen(false);
                    setDemoSubmitted(false);
                  }}
                  className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-white rounded-full transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-rose-500 font-bold uppercase block mb-1">
                    DEVOPSTRIO ACCELERATOR SPEC DEMO
                  </span>
                  <h3 className="text-xl font-bold text-white">Request Architecture & Demo</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Target Cloud Provider</label>
                    <select
                      value={formData.cloudProvider}
                      onChange={(e) => setFormData({ ...formData, cloudProvider: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    >
                      <option value="Multi-Cloud">Multi-Cloud (Azure, AWS, GCP, OCI)</option>
                      <option value="Azure">Microsoft Azure</option>
                      <option value="AWS">Amazon Web Services (AWS)</option>
                      <option value="GCP">Google Cloud Platform (GCP)</option>
                      <option value="OCI">Oracle Cloud Infrastructure (OCI)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Message / Project Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your infrastructure goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg cursor-pointer"
                >
                  Submit Demo Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
