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
  RefreshCw,
  Container,
  GitPullRequest,
  Eye,
  Bell,
  Box,
  LayoutGrid,
  Layers3,
  Radio,
  FileCheck,
  Share2,
  HardDrive
} from "lucide-react";
import Link from "next/link";

export default function DevOpsAcceleratorPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);
  const [demoSubmitted, setDemoSubmitted] = useState<boolean>(false);
  const [activePipelineStage, setActivePipelineStage] = useState<number>(0);
  const [activeTechCategory, setActiveTechCategory] = useState<string>("Source Control");
  const [activeCicdComponent, setActiveCicdComponent] = useState<string>("Source Control");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    toolchain: "GitHub Actions + Kubernetes",
    message: ""
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Auto-advance Delivery Pipeline stage demo
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePipelineStage((prev) => (prev + 1) % 9);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // 1. Business Challenges Data
  const businessChallenges = [
    {
      title: "Slow Manual Deployments",
      desc: "Frequent release delays caused by repetitive manual execution steps and missing automation.",
      icon: AlertTriangle,
      tag: "High Friction"
    },
    {
      title: "Inconsistent Release Processes",
      desc: "Different teams employing divergent build, test, and deployment scripts across environments.",
      icon: RefreshCw,
      tag: "Inconsistency"
    },
    {
      title: "Complex CI/CD Setup",
      desc: "Spending months configuring pipeline YAML files, runner agents, and security plugins from scratch.",
      icon: Workflow,
      tag: "Time Sink"
    },
    {
      title: "Environment Configuration Drift",
      desc: "Dev, QA, and Production clusters drifting out of sync due to ad-hoc manual modifications.",
      icon: Layers,
      tag: "Drift Risk"
    },
    {
      title: "Limited Deployment Visibility",
      desc: "Lack of centralized dashboards to trace pipeline statuses, build failures, and active releases.",
      icon: Eye,
      tag: "Blindspot"
    },
    {
      title: "Manual Infrastructure Provisioning",
      desc: "Waiting on ticket-based requests to provision subnets, storage buckets, and Kubernetes nodes.",
      icon: Server,
      tag: "Bottleneck"
    },
    {
      title: "Scaling Kubernetes Workloads",
      desc: "Difficulty configuring production Helm values, ingress routing, zero-downtime rollouts, and HPAs.",
      icon: Container,
      tag: "Complexity"
    },
    {
      title: "Security Gaps in Delivery Pipelines",
      desc: "Hardcoded credentials, unvetted container dependencies, and missing SAST/DAST pipeline gates.",
      icon: Shield,
      tag: "Vulnerability"
    }
  ];

  // 2. Accelerator Capabilities Grid
  const acceleratorCapabilities = [
    { title: "CI/CD Templates", desc: "Standardized YAML actions for GitHub, Azure DevOps, and GitLab CI.", icon: Workflow, connects: "Automation" },
    { title: "GitOps Framework", desc: "Automated sync using ArgoCD and Flux with declarative cluster manifests.", icon: GitBranch, connects: "GitOps" },
    { title: "Kubernetes Deployment", desc: "Hardened application deployment manifests with anti-affinity & resource limits.", icon: Container, connects: "K8s Engine" },
    { title: "Helm Charts", desc: "Parametric Helm 3 charts standardizing ingress, services, and HPAs.", icon: Boxes, connects: "Packaging" },
    { title: "Infrastructure as Code", desc: "Reusable Terraform & Bicep modules for VPCs, AKS/EKS, and Key Vaults.", icon: Code, connects: "Provisioning" },
    { title: "Automated Testing", desc: "Integrated unit, integration, and security testing gates in pipeline builds.", icon: CheckCircle2, connects: "Quality" },
    { title: "Release Automation", desc: "Automated version tagging, semantic changelogs, and release notes.", icon: Rocket, connects: "Delivery" },
    { title: "Monitoring Integration", desc: "Auto-injected Prometheus ServiceMonitors and RED telemetry dashboards.", icon: Activity, connects: "Telemetry" },
    { title: "Rollback Automation", desc: "Instant automated rollbacks triggered by failing health probes or canary metrics.", icon: RefreshCw, connects: "Resilience" },
    { title: "Multi-Cloud Deployment", desc: "Single deployment pipeline targeting Azure AKS, AWS EKS, GCP GKE & OCI OKE.", icon: Cloud, connects: "Multi-Cloud" }
  ];

  // 3. DevOps Delivery Pipeline Stages (Interactive Progress Flow)
  const deliveryPipelineStages = [
    { step: 1, name: "Developer", short: "Code Commit", icon: Terminal, desc: "Engineer pushes feature branch code or opens a Pull Request in Git.", snippet: "git commit -m 'feat: add payment gateway service'\ngit push origin feature/payments" },
    { step: 2, name: "Git Repository", short: "Repo Sync", icon: Github, desc: "Source code repository triggers automated GitHub Actions / Azure DevOps webhooks.", snippet: "Event: pull_request.opened -> trigger .github/workflows/ci.yml" },
    { step: 3, name: "Pull Request", short: "PR Gate", icon: GitPullRequest, desc: "Automated PR validation pipeline checks syntax, linting, and branch protection rules.", snippet: "PR #142: Linting PASS | Commit signature VERIFIED" },
    { step: 4, name: "Code Review", short: "Peer Review", icon: FileCheck, desc: "Peer approval required along with automated SonarQube quality gate verification.", snippet: "Quality Gate: PASSED (0 bugs, 0 vulnerabilities, 94.2% coverage)" },
    { step: 5, name: "Build", short: "Container Build", icon: Box, desc: "Builds OCI container images with multi-stage Dockerfiles and pushes to container registry.", snippet: "docker build -t registry.devopstrio.com/payments:v1.4.0 --target release ." },
    { step: 6, name: "Test", short: "Auto Tests", icon: CheckCircle2, desc: "Executes unit, integration, and contract tests against ephemeral sandbox environments.", snippet: "pytest tests/unit/ && pytest tests/integration/ (42 tests passed in 12s)" },
    { step: 7, name: "Security Scan", short: "DevSecOps", icon: ShieldCheck, desc: "Trivy container layer scan & Snyk dependency vulnerability check executed.", snippet: "Trivy: 0 CRITICAL, 0 HIGH CVEs found. Snyk license compliance OK." },
    { step: 8, name: "Deploy", short: "GitOps Apply", icon: Workflow, desc: "ArgoCD detects updated image tag in Git and performs a zero-downtime rolling update.", snippet: "ArgoCD: Syncing app/payments-service -> Cluster AKS-EastUS2 [Sync OK]" },
    { step: 9, name: "Monitor", short: "Telemetry", icon: Activity, desc: "Prometheus scrapes metrics, Grafana RED dashboards update, and alert triggers monitor health.", snippet: "Health Check: HTTP 200 OK | Latency p95: 14ms | Error Rate: 0.00%" }
  ];

  // 4. GitOps Workflow Steps
  const gitOpsSteps = [
    { name: "Developer", icon: Terminal, desc: "Commits manifest changes to Git repo." },
    { name: "GitHub / Git", icon: Github, desc: "Acts as single source of truth." },
    { name: "GitHub Actions", icon: Workflow, desc: "Runs validation & updates image tags." },
    { name: "ArgoCD / Flux", icon: GitBranch, desc: "Continuously monitors Git state for drift." },
    { name: "Kubernetes Cluster", icon: Container, desc: "Reconciles desired state automatically." },
    { name: "Production Live", icon: Rocket, desc: "Workload active with zero manual kubectl commands." }
  ];

  // 5. CI/CD Components (Categorized Cards)
  const cicdComponents = {
    "Source Control": [
      { name: "GitHub Enterprise", desc: "Repository management, code reviews, branch protection, and Dependabot automation.", badge: "GitHub" },
      { name: "GitLab", desc: "Built-in CI/CD pipelines, container registry, and merge request approvals.", badge: "GitLab" },
      { name: "Azure Repos", desc: "Enterprise Git hosting integrated with Azure Boards and Azure Pipelines.", badge: "Azure" }
    ],
    "Build": [
      { name: "GitHub Actions", desc: "Matrix builds, reusable composite actions, and OIDC federated authentication.", badge: "GitHub" },
      { name: "Azure Pipelines", desc: "YAML multi-stage deployment pipelines for cloud and hybrid workloads.", badge: "Azure" },
      { name: "Jenkins", desc: "Declarative Jenkinsfile pipeline libraries for legacy enterprise integrations.", badge: "Jenkins" }
    ],
    "Testing": [
      { name: "Unit Testing", desc: "Automated unit test execution embedded into PR validation checks.", badge: "Unit" },
      { name: "Integration Testing", desc: "Ephemeral environment testing using Docker Compose or Kubernetes vclusters.", badge: "Integration" },
      { name: "Quality Gates", desc: "SonarQube & Coveralls static analysis enforcing code coverage thresholds.", badge: "SonarQube" }
    ],
    "Deployment": [
      { name: "Blue-Green Deployment", desc: "Zero-downtime environment switching between active and idle production stacks.", badge: "Blue-Green" },
      { name: "Canary Release", desc: "Progressive traffic shifting (5% -> 25% -> 100%) backed by automated metric analysis.", badge: "Canary" },
      { name: "Rolling Update", desc: "Sequential pod replacement guaranteeing continuous service availability.", badge: "Rolling" }
    ],
    "Release": [
      { name: "Automated Releases", desc: "Semantic release tagging, automated changelog generation, and GitHub releases.", badge: "Semantic" },
      { name: "Versioning", desc: "SemVer automated incrementing based on Git commit message conventions.", badge: "SemVer" },
      { name: "Automated Rollback", desc: "Automated revert to last stable Git commit upon health check failure.", badge: "Rollback" }
    ],
    "Notifications": [
      { name: "Microsoft Teams", desc: "Instant deployment status webhooks sent directly to engineering channels.", badge: "Teams" },
      { name: "Slack", desc: "Interactive Slack bot notifications with deployment approve/reject buttons.", badge: "Slack" },
      { name: "Email & PagerDuty", desc: "Critical pipeline failure notifications and incident management routing.", badge: "Alerts" }
    ]
  };

  // 6. Infrastructure Automation Data
  const infrastructureTools = [
    { title: "Terraform Modules", desc: "Modular, version-controlled HCL blueprints for cloud infrastructure.", icon: Code },
    { title: "Bicep Templates", desc: "Domain-specific language for Azure infrastructure deployments.", icon: Layers },
    { title: "ARM Templates", desc: "Declarative JSON templates for native Azure Resource Manager.", icon: FileCode },
    { title: "Ansible Playbooks", desc: "Automated configuration management and VM OS patching.", icon: Settings },
    { title: "CloudFormation", desc: "Native AWS infrastructure provisioning code templates.", icon: Cloud },
    { title: "Pulumi", desc: "Infrastructure as Code written in TypeScript, Python, or Go.", icon: Cpu }
  ];

  // 7. Container & Kubernetes Cards
  const containerTools = [
    { title: "Docker Images", desc: "Optimized multi-stage OCI container image builds with minimal footprints.", icon: Container },
    { title: "Kubernetes", desc: "Production cluster manifests featuring Pod Disruption Budgets and HPAs.", icon: Boxes },
    { title: "Helm Charts", desc: "Parametric deployment packages simplifying Kubernetes app releases.", icon: Layers },
    { title: "Azure AKS", desc: "Hardened Azure Kubernetes Service blueprints with CNI & Entra ID.", icon: Cloud },
    { title: "AWS EKS", desc: "Enterprise Elastic Kubernetes Service setups with IAM Roles for Service Accounts (IRSA).", icon: Server },
    { title: "Google GKE", desc: "Autopilot and Standard GKE cluster setups with VPC Service Controls.", icon: Cpu },
    { title: "Red Hat OpenShift", desc: "Enterprise OpenShift GitOps and Security Context Constraint (SCC) blueprints.", icon: ShieldCheck },
    { title: "Container Registry", desc: "Private Azure ACR, AWS ECR, and Harbor setups with automated image scanning.", icon: HardDrive }
  ];

  // 8. Observability & Monitoring Cards
  const observabilityTools = [
    { title: "Prometheus", desc: "Kubernetes metric scraping with pre-configured ServiceMonitors.", icon: Activity },
    { title: "Grafana", desc: "Pre-built RED (Rate, Errors, Duration) dashboards for instant cluster visibility.", icon: BarChart3 },
    { title: "Azure Monitor", desc: "Native cloud telemetry, Log Analytics, and Container Insights.", icon: Cloud },
    { title: "AWS CloudWatch", desc: "Unified metric collection, log group archiving, and metric alarms.", icon: Eye },
    { title: "Loki", desc: "High-density log aggregation directly integrated with Grafana dashboards.", icon: FileText },
    { title: "Elasticsearch", desc: "ELK stack centralization for deep log parsing and search index.", icon: Search },
    { title: "OpenTelemetry", desc: "Vendor-neutral tracing collector agents auto-injected into workloads.", icon: Network },
    { title: "Alertmanager", desc: "Intelligent alert grouping, deduplication, and PagerDuty integration.", icon: Bell }
  ];

  // 9. Security Integration Cards (DevSecOps)
  const securityTools = [
    { title: "DevSecOps", desc: "Security gates embedded directly into every CI/CD pipeline step.", icon: ShieldCheck },
    { title: "Secrets Management", desc: "Zero clear-text secrets: HashiCorp Vault & Key Vault dynamic injection.", icon: Key },
    { title: "Vulnerability Scanning", desc: "SonarQube & Snyk static application security testing (SAST).", icon: Search },
    { title: "Container Scanning", desc: "Trivy & Clair image layer analysis blocking CVE vulnerabilities.", icon: Container },
    { title: "RBAC", desc: "Strict Kubernetes Role-Based Access Control and OIDC identity mapping.", icon: Lock },
    { title: "Policy as Code", desc: "Kyverno & OPA Gatekeeper enforcing cluster admission policies.", icon: Sliders },
    { title: "Compliance Checks", desc: "Automated verification against SOC 2, ISO 27001, and CIS Benchmarks.", icon: CheckCircle2 },
    { title: "Supply Chain Security", desc: "Cosign container signing and Software Bill of Materials (SBOM) generation.", icon: Share2 }
  ];

  // 10. Supported Technologies Categorized Tech Stack
  const supportedTechStack = {
    "Source Control": [
      { name: "GitHub", desc: "Enterprise code management & pull request workflows.", icon: Github },
      { name: "GitLab", desc: "Integrated Git repository & pipeline runner platform.", icon: GitBranch },
      { name: "Azure Repos", desc: "Cloud Git hosting backed by Azure DevOps.", icon: Cloud }
    ],
    "CI/CD": [
      { name: "GitHub Actions", desc: "Native automation workflows and matrix runners.", icon: Workflow },
      { name: "Azure DevOps", desc: "Enterprise YAML pipelines & release management.", icon: Cloud },
      { name: "Jenkins", desc: "Extensible open-source automation server.", icon: Settings },
      { name: "GitLab CI", desc: "Concurrent pipeline runners & container registries.", icon: Rocket }
    ],
    "Containers": [
      { name: "Docker", desc: "OCI compliant container runtime & image tooling.", icon: Container },
      { name: "Kubernetes", desc: "Container orchestration platform for microservices.", icon: Boxes },
      { name: "Helm", desc: "Package manager for Kubernetes manifests.", icon: Layers },
      { name: "Red Hat OpenShift", desc: "Enterprise Kubernetes container platform.", icon: ShieldCheck }
    ],
    "Infrastructure": [
      { name: "Terraform", desc: "Declarative Infrastructure as Code for multi-cloud.", icon: Code },
      { name: "Bicep", desc: "Domain-specific language for Azure resources.", icon: Layers },
      { name: "ARM Templates", desc: "Native Azure Resource Manager templates.", icon: FileCode },
      { name: "Ansible", desc: "Configuration management & automation playbooks.", icon: Settings }
    ],
    "Monitoring": [
      { name: "Grafana", desc: "Visualization dashboards for metrics & logs.", icon: BarChart3 },
      { name: "Prometheus", desc: "Time-series monitoring & alert engine.", icon: Activity },
      { name: "Azure Monitor", desc: "Full-stack monitoring across Azure services.", icon: Cloud },
      { name: "Datadog", desc: "SaaS observability & application performance.", icon: Eye }
    ],
    "Cloud": [
      { name: "Microsoft Azure", desc: "Hyper-scale cloud platform support.", icon: Cloud },
      { name: "Amazon Web Services", desc: "AWS cloud foundation & EKS integrations.", icon: Server },
      { name: "Google Cloud", desc: "GCP Cloud Foundation & GKE automation.", icon: Cpu },
      { name: "Oracle Cloud", desc: "OCI infrastructure & OKE cluster support.", icon: Database }
    ]
  };

  // 11. Business Outcomes (KPI Cards)
  const businessOutcomes = [
    { value: "90%", title: "Faster Deployments", desc: "Reduce release cycle times from weeks to minutes using automated CI/CD pipelines.", highlight: "from-rose-500 to-red-600" },
    { value: "80%", title: "Reduced Manual Work", desc: "Eliminate repetitive deployment tasks with push-button GitOps automation.", highlight: "from-blue-500 to-indigo-600" },
    { value: "100%", title: "Pipeline Automation", desc: "Full end-to-end coverage from git commit to production monitoring.", highlight: "from-emerald-500 to-teal-600" },
    { value: "Multi-Cloud", title: "Cloud Ready", desc: "Deploy seamlessly across Azure, AWS, GCP, and on-premise OpenShift.", highlight: "from-purple-500 to-rose-500" },
    { value: "Enterprise", title: "Governance Enforced", desc: "Embedded DevSecOps security gates, policy-as-code, and audit logging.", highlight: "from-amber-500 to-orange-600" },
    { value: "Continuous", title: "Delivery Enabled", desc: "Zero-downtime blue/green and canary release strategies built-in.", highlight: "from-cyan-500 to-blue-600" }
  ];

  // 12. Use Cases Cards
  const useCases = [
    { title: "Enterprise CI/CD", desc: "Standardize software delivery across hundreds of repositories with reusable pipeline templates.", icon: Workflow },
    { title: "Cloud-Native Applications", desc: "Build, package, and deploy microservices rapidly into modern cloud environments.", icon: Rocket },
    { title: "Kubernetes Platform", desc: "Provision and manage production-ready AKS, EKS, and GKE cluster configurations.", icon: Container },
    { title: "Microservices Deployment", desc: "Automate complex multi-service rollouts with dependency mapping and health checks.", icon: Boxes },
    { title: "Hybrid Cloud", desc: "Connect on-premise data centers with public cloud infrastructure using GitOps sync.", icon: Network },
    { title: "Multi-Cloud Delivery", desc: "Maintain single-source-of-truth pipelines targeting Azure, AWS, and Google Cloud.", icon: Cloud },
    { title: "SaaS Platforms", desc: "Accelerate tenant environment provisioning and automated multi-tenant releases.", icon: Layers },
    { title: "Digital Transformation", desc: "Modernize legacy release processes into automated continuous integration workflows.", icon: RefreshCw }
  ];

  // 13. Related Accelerators Cards
  const relatedAccelerators = [
    { title: "Landing Zone Portal", desc: "Explore enterprise cloud landing zone blueprints and IaC repository directory.", href: "/ecosystem/accelerators-frameworks/landing-zone", tag: "Landing Zone" },
    { title: "Cloud Accelerator", desc: "Reusable IaC modules for rapid multi-cloud foundation and network deployment.", href: "/ecosystem/accelerators-frameworks/cloud-accelerator", tag: "Cloud IaC" },
    { title: "AI Framework", desc: "Enterprise GenAI gateway, multi-agent orchestration, and RAG search architectures.", href: "/ecosystem/accelerators-frameworks/ai-framework", tag: "AI Engineering" },
    { title: "Security Framework", desc: "Zero-trust compliance guardrails, automated vulnerability scanning, and IAM.", href: "/ecosystem/accelerators-frameworks/security-framework", tag: "Cybersecurity" },
    { title: "Data Framework", desc: "Modern data platform blueprints, warehouse lakehouses, and analytics pipelines.", href: "/ecosystem/accelerators-frameworks/data-framework", tag: "Data Platform" }
  ];

  // 14. FAQ List
  const faqs = [
    {
      q: "What is the Devopstrio DevOps Accelerator?",
      a: "The Devopstrio DevOps Accelerator is an enterprise engineering framework providing pre-built, reusable CI/CD pipeline templates, GitOps automation workflows, Infrastructure as Code modules, and Kubernetes deployment blueprints. It enables organizations to establish production-grade software delivery in days instead of months."
    },
    {
      q: "Does it support GitHub Actions?",
      a: "Yes. We provide comprehensive GitHub Actions composite actions, matrix build workflows, branch protection templates, and automated release actions configured out of the box."
    },
    {
      q: "Can it deploy workloads to Kubernetes?",
      a: "Yes. The accelerator includes battle-tested Helm 3 charts, Kustomize overlays, and GitOps sync manifests for Azure AKS, AWS EKS, GCP GKE, and Red Hat OpenShift."
    },
    {
      q: "Which cloud providers are supported?",
      a: "We support Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platform (GCP), and Oracle Cloud Infrastructure (OCI). The pipelines are designed to deploy multi-cloud or hybrid environments seamlessly."
    },
    {
      q: "Is Infrastructure as Code (IaC) included?",
      a: "Yes. The DevOps Accelerator includes parameterized Terraform HCL, Microsoft Bicep, ARM, and Ansible playbooks for provisioning cloud resources alongside application pipelines."
    },
    {
      q: "Can existing legacy pipelines be migrated?",
      a: "Yes. Our team can audit existing Jenkins, Azure Pipelines, or custom shell scripts and refactor them into modular, maintainable YAML pipelines using the accelerator templates."
    },
    {
      q: "Does it include monitoring and telemetry?",
      a: "Yes. Every application deployment template includes auto-injected Prometheus ServiceMonitors, Grafana RED dashboards, Loki logging configurations, and health check alerts."
    },
    {
      q: "Can it integrate with Azure DevOps?",
      a: "Yes. We support Azure Repos, Azure Pipelines, Azure Artifacts, and Azure Key Vault natively within the accelerator framework."
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
              DevOps Accelerator
            </span>
          </>
        }
        subtitle="Accelerate software delivery with enterprise-ready CI/CD pipelines, GitOps automation, Infrastructure as Code, Kubernetes deployment templates, and modern DevOps practices."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ACCELERATORS & FRAMEWORKS", href: "/ecosystem/accelerators-frameworks" },
          { label: "DEVOPS ACCELERATOR" }
        ]}
      >
        <div className="flex flex-col items-center gap-6">
          {/* Hero Highlights Badges */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "CI/CD Automation",
              "GitHub Actions",
              "Azure DevOps",
              "Kubernetes",
              "Terraform",
              "GitOps"
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
                const el = document.getElementById("pipeline");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 cursor-pointer"
            >
              Explore DevOps Accelerator
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 border border-zinc-800 hover:border-rose-500/50 rounded-full text-xs md:text-sm font-semibold text-white transition-all duration-300 hover:bg-zinc-900 cursor-pointer"
            >
              <Download className="w-4 h-4 text-rose-500" />
              Request a Demo
            </button>
          </div>
        </div>
      </Hero>

      {/* 2. DEVOPS ACCELERATOR OVERVIEW */}
      <section className="w-full py-20 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
              FOUNDATIONAL OVERVIEW
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Accelerating Modern Software Delivery
            </h2>
            <p className="text-zinc-300 text-base md:text-xl leading-relaxed font-medium">
              The Devopstrio DevOps Accelerator provides reusable automation frameworks, deployment pipelines, GitOps templates, and Infrastructure as Code modules that enable engineering teams to release software faster, securely, and consistently across cloud environments.
            </p>
          </Reveal>

          {/* Overview Highlights 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: "Reusable CI/CD", icon: Workflow, desc: "Standardized YAML actions for GitHub Actions and Azure DevOps." },
              { title: "GitOps Sync", icon: GitBranch, desc: "Declarative cluster synchronization powered by ArgoCD & Flux." },
              { title: "Kubernetes Ready", icon: Container, desc: "Production Helm templates, ingress rules, and HPA configurations." },
              { title: "DevSecOps Built-In", icon: ShieldCheck, desc: "Automated vulnerability scanning, SAST, and image layer auditing." }
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
              Challenges We Solve
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Eliminate release bottlenecks, environment drift, and manual engineering overhead.
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

      {/* 4. ACCELERATOR CAPABILITIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PLATFORM CAPABILITIES
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Accelerator Capabilities
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              10 core automation frameworks designed to scale engineering delivery speed.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {acceleratorCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {cap.desc}
                    </p>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-rose-400 border border-zinc-800 font-bold self-start uppercase">
                    {cap.connects}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. DEVOPS DELIVERY PIPELINE (Interactive Horizontal Progress Flow) */}
      <section id="pipeline" className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CONTINUOUS DELIVERY FLOW
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              DevOps Delivery Pipeline
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Interactive 9-stage pipeline: Developer → Git → PR → Review → Build → Test → Security Scan → Deploy → Monitor.
            </p>
          </Reveal>

          {/* Pipeline Stage Selectors */}
          <div className="grid grid-cols-3 md:grid-cols-9 gap-2 mb-8">
            {deliveryPipelineStages.map((stg, idx) => {
              const isCurrent = activePipelineStage === idx;
              return (
                <button
                  key={stg.step}
                  onClick={() => setActivePipelineStage(idx)}
                  className={`p-3 rounded-xl border text-center transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "bg-rose-600/20 border-rose-500 text-white shadow-lg shadow-rose-500/20"
                      : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <span className="text-[9px] font-mono text-rose-400 font-bold block mb-0.5">
                    Stage {stg.step}
                  </span>
                  <span className="text-xs font-bold block truncate">{stg.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Terminal Inspector */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30 text-xs font-mono font-bold">
                Stage {deliveryPipelineStages[activePipelineStage].step} of 9: {deliveryPipelineStages[activePipelineStage].short}
              </span>
              <h3 className="text-xl font-bold text-white">
                {deliveryPipelineStages[activePipelineStage].name}
              </h3>
              <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed">
                {deliveryPipelineStages[activePipelineStage].desc}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActivePipelineStage((prev) => (prev > 0 ? prev - 1 : 8))}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-300 cursor-pointer"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActivePipelineStage((prev) => (prev + 1) % 9)}
                  className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white cursor-pointer"
                >
                  Next Stage
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-black rounded-2xl p-5 border border-zinc-900 font-mono text-xs text-emerald-400 overflow-x-auto shadow-inner">
              <div className="flex justify-between text-zinc-500 text-[10px] mb-3 pb-2 border-b border-zinc-900">
                <span>pipeline-stage-{deliveryPipelineStages[activePipelineStage].step}.sh</span>
                <span>EXECUTION LOG</span>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-zinc-300">
                {deliveryPipelineStages[activePipelineStage].snippet}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GITOPS WORKFLOW (Git Single Source of Truth) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              DECLARATIVE DEPLOYMENTS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Git as the Single Source of Truth
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Continuous synchronization between Git repositories and Kubernetes clusters using ArgoCD and Flux.
            </p>
          </Reveal>

          {/* GitOps Flow Diagram */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
              {gitOpsSteps.map((st, idx) => {
                const Icon = st.icon;
                return (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center text-center p-4 rounded-xl bg-black border border-zinc-850 hover:border-rose-500/50 transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-rose-500" />
                      </div>
                      <h4 className="text-xs font-bold text-white">{st.name}</h4>
                      <p className="text-[10px] text-zinc-400 mt-1">{st.desc}</p>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CI/CD COMPONENTS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              TOOLCHAIN INTEGRATION
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              CI/CD Components
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Modular components spanning Source Control, Build, Testing, Deployment, Release, and Notifications.
            </p>
          </Reveal>

          {/* Component Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(cicdComponents).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCicdComponent(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeCicdComponent === cat
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                    : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-850"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Component Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cicdComponents[activeCicdComponent as keyof typeof cicdComponents]?.map((comp: any, idx: number) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {comp.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                    {comp.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {comp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INFRASTRUCTURE AUTOMATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              IAC BLUEPRINTS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Infrastructure Automation
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Declarative IaC templates automating cloud resources from Git commits.
            </p>
          </Reveal>

          {/* Flow Diagram: Git -> Terraform -> Cloud -> Infrastructure Ready */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { label: "Git", icon: Github, sub: "Code Manifest" },
              { label: "Terraform", icon: Code, sub: "Plan & Apply" },
              { label: "Cloud Provider", icon: Cloud, sub: "Azure/AWS/GCP" },
              { label: "Infrastructure Ready", icon: CheckCircle2, sub: "100% Provisioned" }
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-black border border-zinc-900 w-full md:w-52">
                  <step.icon className="w-5 h-5 text-rose-500 mb-2" />
                  <span className="text-xs font-bold text-white">{step.label}</span>
                  <span className="text-[10px] text-zinc-400 font-mono">{step.sub}</span>
                </div>
                {i < 3 && <ArrowRight className="w-5 h-5 text-rose-500 hidden md:block" />}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructureTools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {tool.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. CONTAINER & KUBERNETES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CONTAINER ORCHESTRATION
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Container & Kubernetes
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Production-ready Kubernetes manifests, Helm charts, and cloud container cluster configurations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {containerTools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {tool.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. OBSERVABILITY & MONITORING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              FULL-STACK TELEMETRY
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Observability & Monitoring
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Real-time monitoring, metrics scraping, centralized logging, and automated alert manager routing.
            </p>
          </Reveal>

          {/* Flow Diagram: Application -> Metrics/Logs/Tracing -> Dashboard -> Alerts */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { label: "Application", icon: Boxes, sub: "Microservices" },
              { label: "Metrics / Logs / Traces", icon: Activity, sub: "OpenTelemetry" },
              { label: "Dashboard", icon: BarChart3, sub: "Grafana & CloudWatch" },
              { label: "Alerts", icon: Bell, sub: "Teams / Slack / PagerDuty" }
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-black border border-zinc-900 w-full md:w-52">
                  <step.icon className="w-5 h-5 text-rose-500 mb-2" />
                  <span className="text-xs font-bold text-white">{step.label}</span>
                  <span className="text-[10px] text-zinc-400 font-mono">{step.sub}</span>
                </div>
                {i < 3 && <ArrowRight className="w-5 h-5 text-rose-500 hidden md:block" />}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {observabilityTools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {tool.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. SECURITY INTEGRATION (DevSecOps) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              DEVSECOPS PIPELINE GATES
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Security Integration
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Shift-left security: Secrets management, container scanning, policy enforcement, and SBOM compliance.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityTools.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {sec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. SUPPORTED TECHNOLOGIES (Categorized Tech Stack) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              TECHNOLOGY ECOSYSTEM
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Supported Technologies
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Deep integration across industry-standard DevOps, CI/CD, and cloud native tools.
            </p>
          </Reveal>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(supportedTechStack).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTechCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTechCategory === cat
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                    : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-850"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards for active category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportedTechStack[activeTechCategory as keyof typeof supportedTechStack]?.map((tech: any, idx: number) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium mt-1">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. BUSINESS OUTCOMES (Large KPI Cards) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MEASURABLE OUTCOMES
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Business Outcomes
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Accelerate software releases while ensuring zero-downtime reliability and enterprise compliance.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/80 border border-zinc-800 rounded-3xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl"
              >
                <div>
                  <span className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${outcome.highlight} tracking-tight block mb-3`}>
                    {outcome.value}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {outcome.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. USE CASES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              DEPLOYMENT SCENARIOS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Use Cases
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Proven implementation patterns for modern software engineering teams.
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

      {/* 15. RELATED ACCELERATORS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
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

      {/* 16. FAQ SECTION */}
      <section id="faq" className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-3xl mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Everything you need to know
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Have questions about the Devopstrio DevOps Accelerator? Check out answers to common inquiries below.
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

      {/* 17. CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 space-y-8">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-2">
              AUTOMATE YOUR SOFTWARE RELEASES
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Accelerate Every Software Release
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
              Deliver secure, automated, and scalable software faster with the Devopstrio DevOps Accelerator.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-3 pl-6 pr-4 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full transition-all duration-300 shadow-lg shadow-rose-600/30 cursor-pointer hover:scale-105"
            >
              Schedule a DevOps Workshop
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full transition-all duration-300 cursor-pointer"
            >
              <Download className="w-4 h-4 text-rose-500" />
              Explore DevOps Solutions
            </button>
          </div>
        </div>
      </section>

      {/* DEMO / WORKSHOP MODAL */}
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
                <h3 className="text-xl font-bold text-white">Workshop Request Submitted!</h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                  Thank you for your interest in the Devopstrio DevOps Accelerator. Our lead platform engineers will contact you within 24 hours to confirm your workshop schedule.
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
                    DEVOPSTRIO ACCELERATOR WORKSHOP
                  </span>
                  <h3 className="text-xl font-bold text-white">Schedule a DevOps Workshop</h3>
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
                    <label className="block text-zinc-400 font-semibold mb-1">Primary Toolchain / Cloud</label>
                    <select
                      value={formData.toolchain}
                      onChange={(e) => setFormData({ ...formData, toolchain: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    >
                      <option value="GitHub Actions + Kubernetes">GitHub Actions + Kubernetes (AKS/EKS/GKE)</option>
                      <option value="Azure DevOps + Azure AKS">Azure DevOps + Azure AKS</option>
                      <option value="GitOps ArgoCD + Flux">GitOps ArgoCD / FluxCD</option>
                      <option value="Terraform + Multi-Cloud">Terraform IaC + Multi-Cloud</option>
                      <option value="Jenkins / Legacy Migration">Jenkins / Legacy CI/CD Migration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Project Details / Goals</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your pipeline or platform goals..."
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
                  Submit Workshop Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
