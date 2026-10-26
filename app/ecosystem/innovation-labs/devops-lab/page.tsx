"use client";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/services/Hero";
import Image from "next/image";
import {
  ArrowUpRight,
  Settings,
  Workflow,
  Terminal,
  Activity,
  Shield,
  ChevronRight,
  Cpu,
  Layers,
  CheckCircle,
  GitBranch,
  Lock,
  Search,
  Sparkles,
  Globe,
  Cloud,
  Database,
  Network,
  Zap
} from "lucide-react";
import Link from "next/link";

const colorMap: Record<string, { border: string; icon: string; number: string; glow: string }> = {
  rose:    { border: "border-rose-500/30 hover:border-rose-500/60",    icon: "text-rose-500 bg-rose-500/10 border-rose-500/20",    number: "text-rose-500/10",    glow: "from-rose-500/10" },
  blue:    { border: "border-blue-500/30 hover:border-blue-500/60",    icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",    number: "text-blue-500/10",    glow: "from-blue-500/10" },
  emerald: { border: "border-emerald-500/30 hover:border-emerald-500/60", icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", number: "text-emerald-500/10", glow: "from-emerald-500/10" },
  orange:  { border: "border-orange-500/30 hover:border-orange-500/60", icon: "text-orange-400 bg-orange-500/10 border-orange-500/20", number: "text-orange-500/10", glow: "from-orange-500/10" },
  purple:  { border: "border-purple-500/30 hover:border-purple-500/60", icon: "text-purple-400 bg-purple-500/10 border-purple-500/20", number: "text-purple-500/10", glow: "from-purple-500/10" },
  cyan:    { border: "border-cyan-500/30 hover:border-cyan-500/60",    icon: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",    number: "text-cyan-500/10",    glow: "from-cyan-500/10" }
};

interface CoreArea {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface TimelineStep {
  num: string;
  title: string;
  desc: string;
}

interface SolutionBlock {
  title: string;
  desc: string;
}

interface ArchLayer {
  num: string;
  name: string;
  desc: string;
}

interface IndustryUseCase {
  name: string;
  image: string;
  items: string[];
}

interface Deliverable {
  title: string;
}

interface WhyChoose {
  title: string;
  desc: string;
}

interface RelatedLab {
  name: string;
  desc: string;
  href: string;
}

const devopsLabFaqs = [
  {
    "q": "What core DevOps and platform engineering practices are tested in the lab?",
    "a": "We test GitOps delivery workflows, ephemeral preview environments, automated canary deployments, platform developer portals (Backstage), and end-to-end OpenTelemetry distributed observability."
  },
  {
    "q": "How does the lab implement GitOps with ArgoCD and Flux?",
    "a": "We configure declarative, version-controlled cluster state management where every Kubernetes manifest, Helm release, and infrastructure change is stored in Git, enabling automated drift detection, reconciliation, and instant rollbacks."
  },
  {
    "q": "What deployment strategies are evaluated to guarantee zero downtime?",
    "a": "We engineer and benchmark progressive delivery strategies using Argo Rollouts and Flagger, including blue/green switching, automated canary analysis with Prometheus metric thresholds, and instant automated traffic rollbacks on error spikes."
  },
  {
    "q": "How does the DevOps Lab approach Internal Developer Platforms (IDPs)?",
    "a": "We build custom developer self-service portals using Spotify Backstage and Port, allowing developers to spin up secure, compliant microservices, databases, and CI/CD pipelines in minutes using vetted software templates."
  },
  {
    "q": "How do you measure and accelerate DORA metrics in the lab?",
    "a": "We integrate automated DORA metric tracking (Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service) into CI/CD pipelines, displaying real-time velocity and reliability telemetry on team dashboards."
  },
  {
    "q": "What is the lab's strategy for ephemeral and on-demand test environments?",
    "a": "We use Kubernetes-based operators (vcluster, Loft) and Terraform to dynamically spin up isolated, production-like test environments for each pull request, tearing them down automatically once tests complete to optimize cloud costs."
  },
  {
    "q": "How does the DevOps Lab integrate Infrastructure as Code (IaC) drift management?",
    "a": "We implement scheduled automated IaC pipeline runs using Terraform Cloud, Atlantis, and OpenTofu to detect configuration drift between Git repository definitions and actual cloud runtime environments, auto-alerting on discrepancies."
  },
  {
    "q": "How do you implement full-stack observability with OpenTelemetry?",
    "a": "We instrument microservices with vendor-neutral OpenTelemetry SDKs, collecting distributed traces, structured logs, and metrics forwarded to Jaeger, Grafana Tempo, and Prometheus for correlated, sub-second root-cause diagnosis."
  },
  {
    "q": "How does the lab automate release security and compliance gates?",
    "a": "We incorporate policy-as-code gates using Open Policy Agent (OPA/Gatekeeper) and Kyverno, automatically verifying that container images are signed, root execution is disabled, and resource limits are specified before any deployment."
  },
  {
    "q": "How can our engineering organization engage the DevOps Lab for transformation?",
    "a": "We offer hands-on DevOps acceleration sprints where our SREs and platform engineers audit your current deployment bottlenecks, implement modern CI/CD/GitOps blueprints, and train your internal teams on platform self-service."
  }
];

export default function DevOpsInnovationLabPage() {
  const [activeTab, setActiveTab] = useState<string>("Delivery Acceleration");


  // 2) Mini overview cards
  const miniMissionCards = [
    {
      title: "Pipeline Acceleration",
      desc: "Improving build, test, release, and deployment speed through automation and workflow design."
    },
    {
      title: "Platform Standardization",
      desc: "Creating reusable internal platforms, templates, and environments that simplify engineering operations."
    },
    {
      title: "Reliability & Visibility",
      desc: "Embedding monitoring, alerting, observability, and incident workflows into the software lifecycle."
    },
    {
      title: "Security in the Delivery Flow",
      desc: "Integrating policy checks, secrets controls, vulnerability scanning, and governance into DevOps pipelines."
    }
  ];

  // 3) Core Areas of DevOps Innovation
  const innovationAreas: CoreArea[] = [
    {
      title: "CI/CD Pipeline Engineering",
      desc: "Design automated build, test, release, and deployment pipelines that reduce manual effort and improve release consistency.",
      icon: <Workflow className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Platform Engineering",
      desc: "Build internal developer platforms, reusable engineering templates, golden paths, and self-service environments for delivery teams.",
      icon: <Layers className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Infrastructure as Code",
      desc: "Standardize infrastructure provisioning and environment management through reusable, version-controlled automation.",
      icon: <Terminal className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Kubernetes & Container Delivery",
      desc: "Support containerized workloads, cluster deployment workflows, workload packaging, and scalable runtime operations.",
      icon: <Cpu className="w-5 h-5 text-rose-500" />
    },
    {
      title: "DevSecOps & Compliance Automation",
      desc: "Embed security checks, secrets handling, policy validation, dependency scanning, and compliance controls directly into delivery workflows.",
      icon: <Shield className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Site Reliability Engineering",
      desc: "Improve service reliability through SLOs, incident workflows, proactive monitoring, automation, and operational readiness patterns.",
      icon: <Settings className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Observability & Monitoring",
      desc: "Create visibility across applications, pipelines, infrastructure, and services using logs, metrics, traces, and real-time alerts.",
      icon: <Activity className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Release Governance & Environment Automation",
      desc: "Improve release confidence through deployment approvals, change control workflows, staging automation, rollback patterns, and release visibility.",
      icon: <GitBranch className="w-5 h-5 text-rose-500" />
    }
  ];

  // 4) Lifecycle Framework
  const lifecycleTimeline: TimelineStep[] = [
    {
      num: "01",
      title: "Assess",
      desc: "Evaluate current delivery pipelines, environment bottlenecks, release delays, reliability gaps, and operational pain points."
    },
    {
      num: "02",
      title: "Design",
      desc: "Define the target DevOps operating model, deployment workflow, platform standards, security controls, and observability strategy."
    },
    {
      num: "03",
      title: "Prototype",
      desc: "Build pilot pipelines, IaC modules, environment templates, release patterns, and platform workflows in controlled stages."
    },
    {
      num: "04",
      title: "Automate",
      desc: "Implement CI/CD, infrastructure provisioning, testing automation, deployment workflows, and security validation pipelines."
    },
    {
      num: "05",
      title: "Operate",
      desc: "Deploy production-ready DevOps foundations with observability, release governance, incident readiness, and support processes."
    },
    {
      num: "06",
      title: "Optimize",
      desc: "Continuously improve build speed, deployment frequency, failure recovery, reliability, and developer experience through telemetry and iteration."
    }
  ];

  // 5) Solutions Built in the Lab
  const solutionBlocks: SolutionBlock[] = [
    {
      title: "Enterprise CI/CD Pipelines",
      desc: "Automated build, test, approval, release, and deployment workflows tailored to modern engineering teams."
    },
    {
      title: "Internal Developer Platforms",
      desc: "Reusable platform foundations, self-service environments, shared templates, and standardized deployment paths for development teams."
    },
    {
      title: "Infrastructure Automation Frameworks",
      desc: "IaC modules, environment provisioning workflows, cloud infrastructure templates, and automated configuration patterns."
    },
    {
      title: "Kubernetes Delivery Platforms",
      desc: "Container build pipelines, deployment workflows, cluster release processes, and runtime management foundations."
    },
    {
      title: "DevSecOps Guardrails",
      desc: "Pipeline-integrated security scanning, secrets policies, artifact validation, access controls, and governance automation."
    },
    {
      title: "Observability & Reliability Foundations",
      desc: "Logging, monitoring, tracing, alerting, incident response, and service health visibility for engineering operations."
    },
    {
      title: "Release Governance & Change Automation",
      desc: "Approval flows, release coordination, rollback procedures, environment promotion logic, and deployment control patterns."
    },
    {
      title: "SRE Enablement Models",
      desc: "Reliability engineering practices, SLO frameworks, operational runbooks, alerting strategies, and failure response workflows."
    }
  ];

  // 6) Architecture layers
  const archLayers: ArchLayer[] = [
    {
      num: "LAYER 1",
      name: "Source & Planning Layer",
      desc: "Git repositories • work items / tickets • release branches • change requests • backlog & sprint systems"
    },
    {
      num: "LAYER 2",
      name: "Build & Validation Layer",
      desc: "build pipelines • unit tests • linting • artifact creation • dependency validation • code quality checks"
    },
    {
      num: "LAYER 3",
      name: "Security & Policy Layer",
      desc: "secrets scanning • SAST / dependency checks • policy gates • container image validation • compliance rules"
    },
    {
      num: "LAYER 4",
      name: "Deployment & Environment Layer",
      desc: "CI/CD releases • IaC provisioning • Kubernetes deployment • environment promotion • config management • rollback workflows"
    },
    {
      num: "LAYER 5",
      name: "Runtime & Observability Layer",
      desc: "app monitoring • logs • metrics • traces • health checks • release telemetry • alerting"
    },
    {
      num: "LAYER 6",
      name: "Reliability & Operations Layer",
      desc: "incident workflows • SLO/SLA monitoring • runbooks • change governance • failure response • performance tuning • optimization loops"
    }
  ];

  const techChips = [
    "GitHub Actions",
    "Azure DevOps",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Helm",
    "ArgoCD (GitOps)",
    "Prometheus",
    "Grafana",
    "OpenSearch",
    "SonarQube",
    "HashiCorp Vault"
  ];

  // 7) Industry / Workload Use Cases
  const industryUseCases: IndustryUseCase[] = [
    {
      name: "Delivery Acceleration",
      image: "/webp/assets/ecosystem/devops-lab/scenarios/delivery-acceleration.webp",
      items: [
        "slow release pipeline modernization",
        "multi-stage CI/CD implementation",
        "deployment automation for enterprise apps",
        "release consistency across teams"
      ]
    },
    {
      name: "Platform Engineering",
      image: "/webp/assets/ecosystem/devops-lab/scenarios/platform-engineering.webp",
      items: [
        "self-service developer environments",
        "golden templates for application teams",
        "reusable deployment blueprints",
        "internal platform standardization"
      ]
    },
    {
      name: "Infrastructure Automation",
      image: "/webp/assets/ecosystem/devops-lab/scenarios/infrastructure-automation.webp",
      items: [
        "automated environment provisioning",
        "cloud infrastructure pipelines",
        "configuration standardization",
        "infrastructure drift reduction"
      ]
    },
    {
      name: "DevSecOps",
      image: "/webp/assets/ecosystem/devops-lab/scenarios/devsecops.webp",
      items: [
        "secure build pipelines",
        "dependency and artifact scanning",
        "secrets governance",
        "policy-as-code enforcement"
      ]
    },
    {
      name: "Reliability & SRE",
      image: "/webp/assets/ecosystem/devops-lab/scenarios/reliability-sre.webp",
      items: [
        "observability rollout",
        "incident response automation",
        "SLO / alerting implementation",
        "high-availability delivery operations"
      ]
    },
    {
      name: "Kubernetes & Container Delivery",
      image: "/webp/assets/ecosystem/devops-lab/scenarios/kubernetes-container-delivery.webp",
      items: [
        "cluster deployment workflows",
        "container release pipelines",
        "GitOps environment promotion",
        "application rollout and rollback strategies"
      ]
    }
  ];

  // 8) Outcomes
  const labDeliverables: Deliverable[] = [
    { title: "Faster build and deployment cycles" },
    { title: "Reduced manual release overhead" },
    { title: "Better release consistency across environments" },
    { title: "Improved platform reliability and observability" },
    { title: "Stronger delivery security and compliance posture" },
    { title: "Faster issue detection and rollback readiness" },
    { title: "Better developer productivity" },
    { title: "More resilient software operations" }
  ];

  const stats = [
    { value: "Faster", label: "deployments" },
    { value: "Lower", label: "change failure rates" },
    { value: "Shorter", label: "recovery times" },
    { value: "24×7", label: "operational readiness" },
    { value: "Standardized", label: "platform workflows" },
    { value: "Improved", label: "environment consistency" }
  ];

  // 9) Why work with us
  const whyWorkWithUs: WhyChoose[] = [
    {
      title: "Delivery Engineering, Not Just Tool Setup",
      desc: "We don’t just install CI/CD tools — we redesign delivery systems to improve speed, quality, reliability, and operational maturity."
    },
    {
      title: "Platform Thinking from Day One",
      desc: "We focus on reusable platforms, engineering standards, and scalable operating models that reduce long-term complexity."
    },
    {
      title: "Security Embedded into the Workflow",
      desc: "Secrets, policies, scanning, and governance are integrated into the delivery lifecycle rather than treated as a separate afterthought."
    },
    {
      title: "Built for Real Engineering Teams",
      desc: "Our DevOps models are designed to support developers, QA, operations, and security teams in real production environments."
    },
    {
      title: "Reliability as a Core Design Principle",
      desc: "Monitoring, observability, rollback readiness, and operational resilience are built into the architecture from the start."
    },
    {
      title: "Continuous Improvement Beyond Go-Live",
      desc: "We help teams keep improving deployment speed, stability, and developer experience after the initial platform rollout."
    }
  ];

  // 10) Related labs
  const relatedLabs: RelatedLab[] = [
    {
      name: "AI Innovation Lab",
      desc: "R&D and applied innovation for enterprise machine learning.",
      href: "/ecosystem/innovation-labs/ai-lab"
    },
    {
      name: "Cloud Innovation Lab",
      desc: "Enterprise landing zones, platform engineering, and hybrid cloud migrations.",
      href: "/ecosystem/innovation-labs/cloud-lab"
    },
    {
      name: "Cybersecurity Lab",
      desc: "Threat mitigation, pen-testing, and compliance architecture auditing.",
      href: "/ecosystem/innovation-labs/cybersecurity-lab"
    },
    {
      name: "Data & Analytics Lab",
      desc: "Enterprise data lakes, stream processing, and business intelligence models.",
      href: "/ecosystem/innovation-labs/data-analytics-lab"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <Hero
        badge="DevOps Innovation Lab"
        floatingLines={true}
        floatingLinesStartColor="#f43f5e"
        floatingLinesMidColor="#ea580c"
        floatingLinesEndColor="#8b5cf6"
        title={
          <>
            Where Delivery Engineering Becomes <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Competitive Advantage
            </span>
          </>
        }
        
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "INNOVATION LABS", href: "/ecosystem/innovation-labs" },
          { label: "DEVOPS LAB" },
        ]}
      >
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Book a DevOps Discovery Session
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact#contact-form"
            className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Talk to Our DevOps Team
          </Link>
        </div>
      </Hero>

      {/* Sticky Section Nav */}
      <div className="sticky top-16 md:top-20 z-40 border-b border-zinc-900/80 bg-black/85 backdrop-blur-xl">
        <nav aria-label="On this page" className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 sm:px-8 lg:px-12 scrollbar-none">
          {[
            { id: "overview", label: "Overview" },
            { id: "capabilities", label: "Capabilities" },
            { id: "framework", label: "Framework" },
            { id: "deliverables", label: "Deliverables" },
            { id: "architecture", label: "Architecture" },
            { id: "scenarios", label: "Scenarios" },
            { id: "outcomes", label: "Outcomes" },
            { id: "differentiators", label: "Why Us" },
            { id: "ecosystem", label: "Other Labs" },
          ].map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-zinc-900/70 border border-transparent hover:border-zinc-800 transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>


      {/* 2. OVERVIEW / MISSION SECTION */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden scroll-mt-20" id="overview">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        

        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Top Heading */}
          <Reveal className="mb-10 max-w-3xl">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              Mission Overview
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-5 text-white">
              Where Delivery Engineering <br />
              <span className="text-rose-500">Becomes Competitive Advantage</span>
            </h2>
          </Reveal>

          {/* 4 mini cards below heading */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {miniMissionCards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.05} className="h-full">
                <div className="group relative bg-[#0D0E12] border border-zinc-800/80 hover:border-rose-500/40 rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(244,63,94,0.12)] min-h-[140px] h-full flex flex-col justify-between overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-rose-500/[0.06] group-hover:bg-rose-500/20 rounded-full blur-xl transition-all duration-500 pointer-events-none" />
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white tracking-wide mb-2">
                      {card.title}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 font-normal leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE INNOVATION AREAS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden scroll-mt-20" id="capabilities">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-5 text-white">
              Core Areas of <span className="text-rose-500">DevOps Innovation</span>
            </h2>
            
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationAreas.map((area, idx) => (
              <Reveal key={area.title} delay={idx * 0.04} className="h-full">
                <div className="group relative bg-[#0D0E12] border border-zinc-800/80 hover:border-rose-500/40 rounded-[22px] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(244,63,94,0.12)] flex flex-col justify-between h-full min-h-[220px] overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-rose-500/[0.08] group-hover:bg-rose-500/25 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-rose-500/40 group-hover:bg-rose-500/10 flex items-center justify-center mb-5 transition-colors duration-300">
                      {area.icon}
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-white tracking-tight mb-2.5">
                      {area.title}
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LIFECYCLE / OPERATING MODEL */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden scroll-mt-20" id="framework">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
          
          <Reveal className="mb-14 text-left max-w-3xl">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              Operating Framework
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-5 text-white">
              How the DevOps Lab Transforms <span className="text-rose-500">Delivery Workflows</span>
            </h2>
            
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleTimeline.map((step, idx) => {
              const icons = [Search, Layers, Terminal, Workflow, Cloud, Settings];
              const colors = ["rose", "blue", "emerald", "orange", "purple", "cyan"];
              const Icon = icons[idx];
              const c = colorMap[colors[idx]];
              
              return (
                <Reveal key={step.num} delay={idx * 0.05} className="h-full">
                  <div
                    className={`group relative h-full bg-zinc-900/40 border ${c.border} rounded-2xl p-8 overflow-hidden transition-all duration-300 flex flex-col`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                    {/* Large number watermark */}
                    <span className={`absolute top-4 right-6 text-[5.5rem] font-black ${c.number} select-none leading-none transition-transform duration-300 group-hover:scale-110`}>
                      {step.num}
                    </span>

                    <div className="relative z-10 flex flex-col flex-1">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${c.icon}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{step.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. SOLUTIONS BUILT IN THE LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden scroll-mt-20" id="deliverables">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-5 text-white">
              DevOps Solutions Built <span className="text-rose-500">Inside the Lab</span>
            </h2>
            
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {solutionBlocks.map((block, idx) => {
              const icons = [Cloud, Search, Database, Shield, Cpu, Activity, Workflow, CheckCircle];
              const Icon = icons[idx % icons.length];
              return (
                <Reveal key={block.title} delay={idx * 0.04} className="h-full">
                  <div className="group relative bg-[#0D0E12] border border-zinc-800/80 hover:border-rose-500/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(244,63,94,0.14)] h-full flex flex-col justify-between overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/[0.08] group-hover:bg-rose-500/25 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />
                    
                    {/* Glassmorphic Sheen & Quote-like Icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-3xl" />
                    <Icon className="absolute top-8 right-8 text-zinc-800/40 w-12 h-12 group-hover:text-rose-500/20 transition-colors duration-500" strokeWidth={1} />
                    
                    <div className="relative z-10">
                      <div className="mb-6">
                        <span className="px-3 py-1 bg-zinc-950/80 border border-zinc-800 text-rose-500/80 text-[10px] font-mono font-bold tracking-widest rounded-full uppercase shadow-sm">
                          Ready to Deploy
                        </span>
                      </div>
                      
                      <h4 className="text-base md:text-lg font-bold text-white tracking-wide leading-tight mb-4 pr-12 group-hover:text-rose-50 transition-colors">
                        {block.title}
                      </h4>
                      <div className="h-[1px] w-12 bg-rose-500/20 mb-4 group-hover:w-full transition-all duration-500" />
                      <p className="text-sm text-zinc-400 leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">
                        {block.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. REFERENCE ARCHITECTURE */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden scroll-mt-20" id="architecture">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        

        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left: Heading, Chips & Blueprint Image */}
            <div className="lg:w-1/2 sticky top-16 lg:top-20">
              <Reveal>
                <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
                  Reference Blueprint
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-4">
                  Our DevOps Innovation <span className="text-rose-500">Reference Architecture</span>
                </h2>

                <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6">
                  {techChips.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (idx * 0.05) }}
                      className="px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs font-medium hover:border-rose-500/50 hover:text-rose-400 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Blueprint Visual */}
                <div className="w-full rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950/60 shadow-2xl relative group">
                  <img
                    src="/webp/assets/ecosystem/devops-lab/reference-blueprint.webp"
                    alt="DevOps Innovation Reference Architecture"
                    className="w-full h-64 sm:h-72 md:h-80 xl:h-[350px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </Reveal>
            </div>

            {/* Right: Architecture Steps */}
            <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
              <div className="space-y-6 relative">
                {/* Vertical Connector Line */}
                <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-zinc-900/80" />
                
                {archLayers.map((layer, idx) => {
                  const stepNumber = (idx + 1).toString().padStart(2, "0");
                  return (
                    <motion.div
                      key={layer.num}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex gap-6 relative group"
                    >
                      <div className="w-14 h-14 rounded-full bg-black border-2 border-zinc-800 flex items-center justify-center text-zinc-500 font-bold shrink-0 relative z-10 group-hover:border-rose-500/50 group-hover:text-rose-400 transition-colors shadow-lg">
                        {stepNumber}
                      </div>
                      <div className="pt-3 pb-8">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{layer.name}</h3>
                        <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed">{layer.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. USE CASES / SCENARIOS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden scroll-mt-20" id="scenarios">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
          
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
              Scenarios
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-5 text-white">
              DevOps Use Cases We Engineer <span className="text-rose-500">Across the Delivery Lifecycle</span>
            </h2>
            
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* LEFT: Topics List (Compact) */}
            <div className="flex flex-row lg:flex-col gap-2.5 lg:w-[280px] xl:w-[320px] shrink-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 w-full snap-x snap-mandatory scrollbar-none">
              {industryUseCases.map((cat, idx) => {
                const icons = [Cloud, Workflow, Activity, Shield, Settings, Cpu, Database, Terminal, Network, Layers, Zap, Sparkles];
                const Icon = icons[idx % icons.length];
                
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveTab(cat.name)}
                    className={`flex items-center gap-3 px-4 py-4 rounded-xl border text-left transition-all duration-300 shrink-0 lg:shrink-0 snap-start
                      ${activeTab === cat.name
                        ? "bg-rose-500/10 border-rose-500/40 text-white shadow-[0_0_15px_rgba(244,63,94,0.1)] w-[240px] lg:w-full"
                        : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white w-[240px] lg:w-full"}`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border shrink-0 transition-colors
                      ${activeTab === cat.name ? "bg-rose-500/20 border-rose-500/30 text-rose-500" : "bg-zinc-800 border-zinc-700 text-zinc-400"}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-xs md:text-sm leading-tight tracking-wide uppercase">{cat.name}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT: Rectangular Image Card */}
            <div className="flex-1 w-full bg-[#0A0A0A] rounded-[24px] border border-zinc-800 shadow-xl overflow-hidden min-h-[400px] lg:min-h-[450px] flex flex-col sm:flex-row">
              
              {/* Image Left Side - Full Frame */}
              <div className="w-full sm:w-1/2 lg:w-5/12 relative min-h-[320px] sm:min-h-full overflow-hidden bg-black flex items-center justify-center border-b sm:border-b-0 sm:border-r border-zinc-800/80">
                <AnimatePresence mode="wait">
                  {industryUseCases.map((cat) => {
                    if (cat.name !== activeTab) return null;
                    
                    return (
                      <motion.div
                        key={cat.name + "-visual"}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0 w-full h-full bg-black flex items-center justify-center"
                      >
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                          className="object-cover object-center w-full h-full"
                          priority
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Content Half */}
              <div className="w-full sm:w-1/2 lg:w-7/12 p-8 md:p-12 flex flex-col justify-center relative z-30">
                <AnimatePresence mode="wait">
                  {industryUseCases.map((cat, idx) => {
                    if (cat.name !== activeTab) return null;
                    const icons = [Cloud, Workflow, Activity, Shield, Settings, Cpu, Database, Terminal, Network, Layers, Zap, Sparkles];
                    const Icon = icons[idx % icons.length];
                    
                    return (
                      <motion.div
                        key={cat.name + "-content"}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 rounded-xl border border-rose-500/30 bg-rose-950/20 flex items-center justify-center text-rose-500 shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-tight">Implementation Scenario</span>
                            <span className="text-xs font-semibold text-rose-500/80 leading-tight mt-1">{cat.name}</span>
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                          {cat.name} Solutions
                        </h3>
                        
                        <div className="mt-6 flex flex-col gap-4">
                           {cat.items.map(item => (
                             <div key={item} className="flex items-start gap-3">
                               <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0" />
                               <span className="text-sm font-semibold text-zinc-300 leading-relaxed capitalize">
                                 {item}
                               </span>
                             </div>
                           ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
              
            </div>
            
          </div>

        </div>
      </section>

      {/* 8. INNOVATION OUTCOMES / IMPACT */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
                  Innovation Impact
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-5 text-white">
                  Outcomes the DevOps Lab <br />
                  <span className="text-rose-500">Helps Deliver</span>
                </h2>
                

                {/* Manifesto-style Stats */}
                <div className="space-y-6 text-xl md:text-2xl font-light text-zinc-300 mt-10 pt-6 border-t border-white/[0.04]">
                  {stats.map((stat) => (
                    <p key={stat.label} className="hover:text-white transition-colors cursor-default flex items-center gap-4">
                      <span className="font-semibold text-rose-500">{stat.value}</span>
                      <span className="font-medium text-white">{stat.label}</span>
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right side metrics and value list */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {labDeliverables.map((item, idx) => {
                const icons = [Activity, Workflow, Shield, Cpu, Database, Search, Layers, Cloud];
                const Icon = icons[idx % icons.length];
                return (
                  <Reveal key={item.title} delay={idx * 0.05} className="h-full">
                    <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-900 hover:border-rose-500/30 transition-all duration-300 h-full flex flex-col">
                      {/* Hover gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center mb-5 group-hover:bg-rose-500/20 group-hover:text-rose-500 transition-colors duration-300 border border-zinc-700 group-hover:border-rose-500/30 text-zinc-400 shadow-inner shrink-0">
                          <Icon size={18} />
                        </div>
                        <h4 className="text-sm font-bold text-white group-hover:text-rose-500 transition-colors duration-300 leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 9. WHY DEVOPSTRIO DEVOPS LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Heading & Stats */}
            <div className="sticky top-32">
              <Reveal>
                <span className="text-base md:text-lg font-bold tracking-[0.2em] uppercase text-rose-500 block mb-4">
                  Why Devopstrio
                </span>
                <h2 className="text-xl md:text-2xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
                  Why Organizations Build Delivery Excellence with the <span className="text-rose-500">Devopstrio DevOps Lab</span>
                </h2>
                

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-zinc-800/50">
                  <div>
                    <p className="text-3xl font-black text-white tracking-tight">250+</p>
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-2">Enterprises</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white tracking-tight">99.9%</p>
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-2">Uptime SLAs</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white tracking-tight">24/7</p>
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-2">Global Support</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Initiative cards */}
            <div className="space-y-4">
              {whyWorkWithUs.map((item, idx) => {
                const icons = [CheckCircle, Cloud, Search, Workflow, Settings, Activity, Database, Terminal, Shield, Network, Cpu, Layers];
                const Icon = icons[idx % icons.length];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex gap-5 items-start bg-zinc-950/40 border border-white/[0.03] rounded-2xl p-6 hover:border-rose-500/30 transition-all duration-300 group hover:bg-zinc-900/40"
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-rose-500/10 group-hover:border-rose-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-rose-400 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold tracking-wide text-sm md:text-base mb-1.5">{item.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 10. RELATED LABS / CTA */}
      <section className="w-full py-24 bg-[#020202] relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Related Labs Grid */}
          <div className="mb-24">
            <Reveal className="mb-14 text-left">
              <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-3.5 block">
                Ecosystem
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-5">
                Explore More <span className="text-rose-500">Innovation Labs</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedLabs.map((lab) => (
                <Link
                  key={lab.name}
                  href={lab.href}
                  className="group bg-zinc-950/60 border border-white/[0.03] hover:border-rose-500/20 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between min-h-[160px]"
                >
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white tracking-wide mb-2.5 flex items-center justify-between">
                      {lab.name}
                      <ChevronRight size={14} className="text-zinc-650 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      {lab.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          </div>
      </section>
      <FAQ faqs={devopsLabFaqs} />
      <CTA
        ctaTitle="Accelerate Software Delivery With"
        ctaHighlight="Modern DevOps Golden Paths"
        ctaDesc="Work with our DevOps architects to build high-velocity developer platforms, automated GitOps pipelines, and resilient deployment environments."
        ctaBtnText="BOOK DEVOPS DISCOVERY SESSION"
        backLink="/ecosystem/innovation-labs"
      />

    </main>
  );
}
