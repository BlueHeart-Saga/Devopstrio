"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Shield,
  Lock,
  Key,
  Terminal,
  Activity,
  ChevronRight,
  Cpu,
  Layers,
  CheckCircle,
  Eye,
  AlertTriangle,
  FileCheck,
  Globe
} from "lucide-react";
import Link from "next/link";

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

export default function CybersecurityInnovationLabPage() {
  const [activeTab, setActiveTab] = useState<string>("Cloud & Infrastructure Security");


  // 2) Mini overview cards
  const miniMissionCards = [
    {
      title: "Security by Design",
      desc: "Embedding protection, policy, and governance into systems from the beginning — not after deployment."
    },
    {
      title: "Threat Visibility & Detection",
      desc: "Improving monitoring, alerting, and investigation across cloud, infrastructure, applications, and identities."
    },
    {
      title: "Resilience & Risk Reduction",
      desc: "Strengthening recovery readiness, operational continuity, and security posture across critical systems."
    },
    {
      title: "Compliance & Governance",
      desc: "Aligning security controls to industry, regulatory, and internal governance requirements."
    }
  ];

  // 3) Core Areas of Cybersecurity Innovation
  const innovationAreas: CoreArea[] = [
    {
      title: "Zero Trust Security Architecture",
      desc: "Design identity-centric, least-privilege, segmented security models that protect users, workloads, devices, and critical systems across modern enterprise environments.",
      icon: <Lock className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Cloud Security & Posture Management",
      desc: "Secure cloud environments across Azure, AWS, Google Cloud, and hybrid infrastructure with hardened configurations, policy controls, visibility, and continuous posture improvement.",
      icon: <Shield className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Application Security & DevSecOps",
      desc: "Embed security testing, secrets management, dependency validation, code scanning, and policy controls into modern software delivery workflows.",
      icon: <Terminal className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Identity & Access Security",
      desc: "Strengthen authentication, authorization, privileged access, role governance, and identity lifecycle controls across workforce and platform environments.",
      icon: <Key className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Threat Detection & Security Monitoring",
      desc: "Build visibility across systems, logs, networks, applications, and cloud environments to support faster detection, triage, and response to suspicious activity.",
      icon: <Eye className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Security Automation & Incident Readiness",
      desc: "Automate security workflows, enrich alerts, streamline incident response, and improve operational readiness through repeatable playbooks and integrated tooling.",
      icon: <AlertTriangle className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Data Protection & Governance",
      desc: "Protect sensitive business and customer data through encryption, access policies, secure storage patterns, classification, and governance controls.",
      icon: <Layers className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Compliance, Risk & Security Assurance",
      desc: "Support regulatory alignment, audit readiness, security baselines, control validation, and governance frameworks across enterprise technology estates.",
      icon: <FileCheck className="w-5 h-5 text-rose-500" />
    }
  ];

  // 4) Lifecycle Framework
  const lifecycleTimeline: TimelineStep[] = [
    {
      num: "01",
      title: "Assess",
      desc: "Evaluate current security posture, architecture gaps, access risks, cloud exposure, compliance obligations, and operational vulnerabilities."
    },
    {
      num: "02",
      title: "Model",
      desc: "Define the target security architecture, trust boundaries, identity model, control framework, and risk priorities."
    },
    {
      num: "03",
      title: "Validate",
      desc: "Prototype controls, run threat modeling, test security workflows, review integrations, and confirm technical feasibility across environments."
    },
    {
      num: "04",
      title: "Implement",
      desc: "Deploy security controls, access governance, monitoring, automation, policy enforcement, and platform protections across the stack."
    },
    {
      num: "05",
      title: "Monitor",
      desc: "Enable ongoing logging, alerting, posture monitoring, incident workflows, and operational visibility to detect and respond to threats quickly."
    },
    {
      num: "06",
      title: "Improve",
      desc: "Continuously refine controls, close vulnerabilities, strengthen compliance posture, improve detection quality, and adapt to new threats."
    }
  ];

  // 5) Solutions Built in the Lab
  const solutionBlocks: SolutionBlock[] = [
    {
      title: "Zero Trust Security Foundations",
      desc: "Identity-first access models, segmentation patterns, privileged access controls, and secure user/workload trust boundaries."
    },
    {
      title: "Cloud Security Baselines",
      desc: "Secure landing zone controls, cloud posture management, network protection, workload security, and policy enforcement across cloud environments."
    },
    {
      title: "DevSecOps & Secure Delivery Pipelines",
      desc: "Application security checks, secrets controls, dependency scanning, artifact validation, and policy-as-code integrated into delivery workflows."
    },
    {
      title: "Security Monitoring & Detection Foundations",
      desc: "Centralized logging, detection logic, alert pipelines, monitoring dashboards, and incident escalation workflows for security operations."
    },
    {
      title: "Identity & Access Governance Models",
      desc: "Role design, access review processes, MFA strategy, privileged access workflows, and identity governance foundations."
    },
    {
      title: "Data Protection & Encryption Controls",
      desc: "Sensitive data protection, key management integration, secure storage controls, access restrictions, and classification-aware handling."
    },
    {
      title: "Incident Response & Automation Playbooks",
      desc: "Automated response actions, alert triage workflows, escalation paths, enrichment logic, and security runbooks."
    },
    {
      title: "Compliance & Audit Readiness Frameworks",
      desc: "Security controls aligned to governance requirements, audit evidence collection, control mapping, and operational compliance support."
    }
  ];

  // 6) Architecture layers
  const archLayers: ArchLayer[] = [
    {
      num: "LAYER 1",
      name: "Users, Devices & Access Layer",
      desc: "workforce users • privileged administrators • remote users • devices / endpoints • partner access • MFA / access gateways"
    },
    {
      num: "LAYER 2",
      name: "Application & Workload Layer",
      desc: "enterprise applications • APIs • microservices • container workloads • internal tools • business platforms"
    },
    {
      num: "LAYER 3",
      name: "Cloud, Infrastructure & Network Layer",
      desc: "cloud workloads • virtual networks • firewalls / segmentation • compute environments • storage and databases • hybrid connectivity"
    },
    {
      num: "LAYER 4",
      name: "Security Controls & Policy Layer",
      desc: "IAM / RBAC • secrets management • vulnerability controls • endpoint / workload protection • policy enforcement • encryption and key controls"
    },
    {
      num: "LAYER 5",
      name: "Monitoring, Detection & Response Layer",
      desc: "centralized logs • SIEM-style monitoring • alerts • detection rules • threat investigation workflows • incident response orchestration"
    },
    {
      num: "LAYER 6",
      name: "Governance, Risk & Compliance Layer",
      desc: "compliance controls • audit evidence • risk reviews • access governance • security baselines • resilience / recovery policies"
    }
  ];

  const techChips = [
    "Azure / AWS / GCP security services",
    "SIEM / monitoring stack",
    "IAM / privileged access tooling",
    "secrets & key management",
    "container / workload security",
    "policy-as-code",
    "vulnerability scanning",
    "audit / governance tooling"
  ];

  // 7) Industry / Workload Use Cases
  const industryUseCases: IndustryUseCase[] = [
    {
      name: "Cloud & Infrastructure Security",
      items: [
        "secure cloud landing zones",
        "workload hardening",
        "hybrid network segmentation",
        "posture management and misconfiguration reduction"
      ]
    },
    {
      name: "Application & DevSecOps Security",
      items: [
        "secure CI/CD pipelines",
        "secrets governance",
        "dependency and artifact validation",
        "application vulnerability reduction"
      ]
    },
    {
      name: "Identity & Access Security",
      items: [
        "MFA and conditional access strategies",
        "privileged access governance",
        "role-based access design",
        "user lifecycle and access review processes"
      ]
    },
    {
      name: "Detection & Response",
      items: [
        "centralized security monitoring",
        "threat detection workflows",
        "incident triage automation",
        "response playbooks and escalation paths"
      ]
    },
    {
      name: "Data Protection & Compliance",
      items: [
        "encryption strategy",
        "data access governance",
        "audit control alignment",
        "compliance evidence readiness"
      ]
    },
    {
      name: "Resilience & Risk Reduction",
      items: [
        "ransomware readiness support",
        "security posture improvement",
        "operational continuity planning",
        "recovery and control strengthening"
      ]
    }
  ];

  // 8) Outcomes
  const labDeliverables: Deliverable[] = [
    { title: "Stronger enterprise security posture" },
    { title: "Reduced cloud and identity risk exposure" },
    { title: "Better visibility into threats and suspicious activity" },
    { title: "Faster incident response readiness" },
    { title: "More secure application delivery pipelines" },
    { title: "Improved compliance and audit preparedness" },
    { title: "Better control over sensitive data and privileged access" },
    { title: "Greater operational resilience across critical systems" }
  ];

  const stats = [
    { value: "faster", label: "security incident triage" },
    { value: "improved", label: "cloud posture visibility" },
    { value: "reduced", label: "manual security validation effort" },
    { value: "stronger", label: "access governance consistency" },
    { value: "24×7", label: "monitoring readiness support" }
  ];

  // 9) Why work with us
  const whyWorkWithUs: WhyChoose[] = [
    {
      title: "Security Built into the Architecture, Not Added Later",
      desc: "We design controls into platforms, applications, delivery workflows, and cloud foundations from the beginning."
    },
    {
      title: "Engineering + Security in One Delivery Model",
      desc: "Our cybersecurity approach combines cloud, DevOps, platform engineering, and security expertise rather than treating security as a disconnected workstream."
    },
    {
      title: "Practical Security for Real Production Environments",
      desc: "We focus on controls that are effective, maintainable, and aligned to how modern systems actually operate."
    },
    {
      title: "Identity, Visibility, and Governance at the Core",
      desc: "We strengthen security through better access models, observability, monitoring, and control governance — not just isolated tooling."
    },
    {
      title: "Ready for Modern Compliance Expectations",
      desc: "We help organizations align security practices to operational governance, customer trust, and evolving compliance obligations."
    },
    {
      title: "Continuous Security Improvement Beyond Go-Live",
      desc: "Our lab supports ongoing posture refinement, monitoring maturity, automation improvements, and resilience over time."
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
      name: "DevOps Innovation Lab",
      desc: "Autonomous GitOps pipelines, self-service developer portals, and SRE models.",
      href: "/ecosystem/innovation-labs/devops-lab"
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
        badge="Cybersecurity Innovation Lab"
        floatingLines={true}
        floatingLinesStartColor="#10b981"
        floatingLinesMidColor="#06b6d4"
        floatingLinesEndColor="#6366f1"
        title={
          <>
            Where Security Engineering Meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Operational Resilience
            </span>
          </>
        }
        subtitle="Defend complex cloud-native architectures through multi-tiered identity validation, continuous container vulnerability assessments, and automated incident response loops."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "INNOVATION LABS", href: "/ecosystem/innovation-labs" },
          { label: "CYBERSECURITY LAB" },
        ]}
      >
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Book a Security Strategy Session
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact"
            className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Talk to Our Security Team
          </Link>
        </div>
      </Hero>

      {/* 2. OVERVIEW / MISSION SECTION */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.01] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side content */}
            <div className="lg:col-span-6">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Mission Overview
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                  Where Security Engineering <br />
                  <span className="text-rose-500">Meets Operational Resilience</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  The Devopstrio Cybersecurity Innovation Lab is focused on building secure-by-design technology environments that protect modern enterprises from evolving threats. We combine security architecture, DevSecOps, cloud security, identity governance, threat monitoring, and compliance engineering to help organizations move from reactive security controls to proactive, resilient defense strategies.
                </p>
              </Reveal>
            </div>

            {/* Right side - 4 mini cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {miniMissionCards.map((card, idx) => (
                <Reveal key={card.title} delay={idx * 0.05}>
                  <div className="bg-zinc-950/40 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-5 transition-all duration-300 min-h-[140px] flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                        {card.title}
                      </h4>
                      <p className="text-xs md:text-sm text-zinc-400 font-semibold leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE INNOVATION AREAS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Capabilities
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Core Areas of <span className="text-rose-500">Cybersecurity Innovation</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              The primary capability vectors driving modern Zero Trust architectures, secure pipelines, and compliance assurance.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationAreas.map((area, idx) => (
              <Reveal key={area.title} delay={idx * 0.04} className="h-full">
                <div className="bg-[#0a0a0a]/60 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-6 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px]">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center mb-5">
                      {area.icon}
                    </div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
                      {area.title}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
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
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-left max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Operating Framework
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              How the Cybersecurity Lab Strengthens <span className="text-rose-500">Enterprise Security</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              A structured lifecycle process ensuring that trust boundaries and defense mechanisms are modeled, implemented, and monitored.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {lifecycleTimeline.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.05} className="h-full">
                <div className="bg-zinc-950/80 border border-white/[0.03] hover:border-rose-500/20 rounded-2xl p-5 flex flex-col justify-between h-full min-h-[190px] relative group transition-all duration-300">
                  <div>
                    <span className="text-2xl font-black text-rose-500/10 font-mono tracking-tighter block mb-4 group-hover:text-rose-500/25 transition-colors">
                      {step.num}
                    </span>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SOLUTIONS BUILT IN THE LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Deliverables
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Security Solutions Built <span className="text-rose-500">Inside the Lab</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Operational blueprints and platform blueprints engineered to secure enterprise infrastructure.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionBlocks.map((block, idx) => (
              <Reveal key={block.title} delay={idx * 0.04}>
                <div className="bg-[#0a0a0a]/60 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-6 transition-all duration-300 min-h-[170px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-white/[0.03] pb-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        {block.title}
                      </h4>
                      <span className="text-[9px] font-mono text-rose-500 font-bold">READY TO DEPLOY</span>
                    </div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {block.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REFERENCE ARCHITECTURE */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-650/[0.015] rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Reference Blueprint
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Our Cybersecurity Innovation <span className="text-rose-500">Reference Architecture</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              A comprehensive layered defense model safeguarding users, workloads, networks, and data.
            </p>
          </Reveal>

          {/* Layered Diagram */}
          <div className="flex flex-col gap-4 font-mono">
            {archLayers.map((layer, idx) => (
              <Reveal key={layer.num} delay={idx * 0.05}>
                <div className="bg-zinc-950/60 border border-white/[0.03] rounded-2xl p-5 hover:border-rose-500/20 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-[10px] font-bold text-rose-500 uppercase tracking-widest font-mono border-r border-white/10 pr-2">
                      {layer.num}
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{layer.name}</span>
                  </div>
                  <span className="text-xs md:text-sm text-zinc-400 font-semibold md:max-w-md text-left md:text-right leading-relaxed">
                    {layer.desc}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Tech Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 select-none mt-12">
            {techChips.map((tech) => (
              <span key={tech} className="px-3.5 py-2 bg-zinc-950 border border-white/[0.04] text-[10px] font-mono text-zinc-400 rounded-xl font-bold">
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 7. USE CASES / SCENARIOS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Scenarios
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Security Use Cases We Engineer <span className="text-rose-500">Across the Enterprise</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Targeted security architectures designed to resolve real-world enterprise threat vectors.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            
            {/* Left selector sidebar */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory">
              {industryUseCases.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveTab(cat.name)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-left border transition-all duration-300 flex-shrink-0 snap-start w-[140px] lg:w-full ${
                    activeTab === cat.name
                      ? "bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-[0_0_20px_rgba(244,63,94,0.1)]"
                      : "bg-zinc-950/45 text-zinc-400 border-white/[0.03] hover:text-zinc-300 hover:bg-zinc-900/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">{cat.name}</span>
                  </div>
                  <ChevronRight size={14} className="hidden lg:block text-zinc-555" />
                </button>
              ))}
            </div>

            {/* Right Display Card */}
            <div className="lg:col-span-8">
              <div className="bg-[#0b0b0b]/60 border border-white/[0.03] rounded-3xl p-6 md:p-8 min-h-[260px] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-6 border-b border-white/[0.03] pb-2">
                    ACTIVE USE CASE MAPPING FOR: {activeTab}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(industryUseCases.find((c) => c.name === activeTab)?.items || []).map((item, idx) => (
                      <Reveal key={item} delay={idx * 0.04} className="h-full">
                        <div className="group relative rounded-[20px] border border-white/[0.04] bg-zinc-950/80 p-5 hover:border-rose-500/20 hover:shadow-[0_8px_30px_rgba(244,63,94,0.02)] transition-all duration-300 flex flex-col justify-between h-full min-h-[90px]">
                          <div className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0" />
                            <span className="text-xs md:text-sm font-bold text-zinc-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                              {item}
                            </span>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. INNOVATION OUTCOMES / IMPACT */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Innovation Impact
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                  Outcomes the Cybersecurity Lab <br />
                  <span className="text-rose-500">Helps Deliver</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  Key outcomes and metrics demonstrating mature enterprise defense postures.
                </p>

                {/* Stat-style UI */}
                <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.04] pt-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-rose-500 w-24 flex-shrink-0">
                        {stat.value}
                      </span>
                      <span className="text-[11px] text-zinc-450 uppercase tracking-widest font-semibold">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right side metrics and value list */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {labDeliverables.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.05}>
                  <div className="bg-zinc-950/80 border border-white/[0.03] rounded-2xl p-5 hover:border-rose-500/10 transition-colors duration-300 flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-zinc-300">{item.title}</span>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 9. WHY DEVOPSTRIO CYBERSECURITY LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Why Devopstrio
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Why Organizations Build Security Resilience with the <span className="text-rose-500">Devopstrio Cybersecurity Lab</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Our security approach integrates engineering with defense to build robust digital foundations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWorkWithUs.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.04}>
                <div className="bg-[#0a0a0a]/60 border border-white/[0.03] hover:border-rose-500/20 rounded-[20px] p-6 transition-all duration-300 flex flex-col justify-between min-h-[170px] h-full">
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 10. RELATED LABS / CTA */}
      <section className="w-full py-24 bg-[#020202] relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          {/* Related Labs Grid */}
          <div className="mb-24">
            <Reveal className="mb-14 text-left">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
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
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5 flex items-center justify-between">
                      {lab.name}
                      <ChevronRight size={14} className="text-zinc-650 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {lab.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA Block */}
          <div className="relative rounded-[32px] border border-white/[0.04] bg-zinc-950/50 p-8 md:p-16 text-center overflow-hidden max-w-4xl mx-auto">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                Security Engineering
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-5">
                Ready to strengthen your security architecture and cyber resilience?
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                Partner with the Devopstrio Cybersecurity Innovation Lab to design secure cloud foundations, improve detection and response, modernize identity controls, and build resilient digital systems with confidence.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
                >
                  Book a Security Strategy Session
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Talk to Our Security Team
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
