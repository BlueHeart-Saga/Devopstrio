"use client";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
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
  Globe,
  Search,
  Workflow,
  Cloud,
  Settings,
  Database,
  Network,
  Zap,
  Sparkles
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

const securityLabFaqs = [
  {
    q: "What core research happens in the Cybersecurity Innovation Lab?",
    a: "We focus on Zero Trust network access, automated Cloud Security Posture Management (CSPM), DevSecOps CI/CD vulnerability scanning, and eBPF-based container runtime protection."
  },
  {
    q: "How do you validate threat models for modern enterprise architectures?",
    a: "We simulate red-team attack vectors against cloud-native Kubernetes clusters, API gateways, and IAM permission graphs to identify privilege escalation paths and misconfigurations."
  },
  {
    q: "Can the Cybersecurity Lab help us meet regulatory compliance standards?",
    a: "Yes. We codify automated compliance checks for SOC 2, HIPAA, PCI-DSS, and ISO 27001 into Infrastructure as Code blueprints and CI/CD pipelines."
  },
  {
    q: "How does the lab integrate with production DevSecOps pipelines?",
    a: "We develop custom policy-as-code rules using Open Policy Agent (OPA) and Checkov, enabling engineering teams to enforce automated security gates seamlessly."
  }
];

export default function CybersecurityInnovationLabPage() {
  const [activeTab, setActiveTab] = useState<string>("Cloud & Infrastructure Security");


  // 2) Mini overview cards
  const miniMissionCards = [
    {
      title: "Zero Trust Architecture",
      desc: "Cryptographic workload identity (SPIFFE/SPIRE), least-privilege mTLS networks, and boundary attestation."
    },
    {
      title: "Kernel Runtime Security",
      desc: "Tracing process execution, network sockets, and file integrity via in-kernel eBPF probes without userspace overhead."
    },
    {
      title: "Supply Chain Attestation",
      desc: "Enforcing SLSA Level 3 compliance, automated SBOM generation (Syft), and container signing via Cosign."
    },
    {
      title: "Automated Posture & CSPM",
      desc: "Continuous CIS benchmark auditing, automated Terraform drift remediation, and IAM boundary enforcement."
    }
  ];

  // 3) Core Areas of Cybersecurity Innovation
  const innovationAreas: CoreArea[] = [
    {
      title: "Zero Trust Workload Attestation",
      desc: "Design identity-centric, least-privilege architectures with SPIFFE/SPIRE X.509 certificates and wire-speed mTLS service mesh routing.",
      icon: <Lock className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Cloud Security & Posture Management",
      desc: "Harden multi-cloud environments across AWS and Azure with continuous CIS benchmark scanning, policy enforcement, and drift remediation.",
      icon: <Shield className="w-5 h-5 text-rose-500" />
    },
    {
      title: "eBPF Kernel-Level Runtime Defense",
      desc: "Intercept malicious system calls, file integrity breaches, and socket anomalies at the Linux kernel boundary using Tetragon and Cilium.",
      icon: <Terminal className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Dynamic Secrets & Vault Brokering",
      desc: "Eliminate static credentials using HashiCorp Vault dynamic database engines, automated secret rotation, and PKI cert leasing.",
      icon: <Key className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Software Supply Chain Security (SLSA)",
      desc: "Generate Syft SBOMs, sign OCI container images with Sigstore/Cosign, and block unverified binaries at Kubernetes admission time.",
      icon: <Eye className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Policy-as-Code & Admission Controls",
      desc: "Automate security gatekeeping in Kubernetes using Kyverno and Open Policy Agent (OPA) to disallow root containers and host mounts.",
      icon: <AlertTriangle className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Data Protection & Envelope Encryption",
      desc: "Protect sensitive data using AES-256-GCM envelope encryption, KMS customer-managed keys (CMK), and field-level tokenization.",
      icon: <Layers className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Automated Compliance & Audit Telemetry",
      desc: "Aggregate immutable runtime audit logs and map control evidence directly to SOC 2 Type II, ISO 27001, and Cyber Essentials Plus.",
      icon: <FileCheck className="w-5 h-5 text-rose-500" />
    }
  ];

  // 4) Lifecycle Framework
  const lifecycleTimeline: TimelineStep[] = [
    {
      num: "01",
      title: "Assess",
      desc: "Evaluate current attack surfaces, IAM over-privileging, cloud misconfigurations, supply chain risks, and compliance gaps."
    },
    {
      num: "02",
      title: "Threat Model",
      desc: "Map STRIDE threat vectors, define zero-trust perimeters, design ephemeral credential lifecycles, and establish audit standards."
    },
    {
      num: "03",
      title: "Prototype",
      desc: "Deploy sandboxed eBPF sensors, test Kyverno admission rules, and simulate lateral movement attacks in controlled staging clusters."
    },
    {
      num: "04",
      title: "Engineer",
      desc: "Implement HashiCorp Vault dynamic secret engines, configure CI/CD container signing pipelines, and harden cloud network boundaries."
    },
    {
      num: "05",
      title: "Enforce",
      desc: "Activate blocking admission controllers, enforce mandatory mTLS workload encryption, and connect telemetry to 24/7 SIEM detectors."
    },
    {
      num: "06",
      title: "Assure",
      desc: "Execute continuous penetration tests, automate SOC 2 / ISO 27001 evidence collection, and tune anomaly detection false positives."
    }
  ];

  // 5) Solutions Built in the Lab
  const solutionBlocks: SolutionBlock[] = [
    {
      title: "Zero Trust Workload Attestation",
      desc: "SPIFFE/SPIRE automated X.509 certificate issuance and mTLS wire-speed encryption between containerized services."
    },
    {
      title: "Kernel-Level eBPF Runtime Defense",
      desc: "Tetragon and Cilium security agents blocking privilege escalation and unexpected socket connections at the Linux kernel boundary."
    },
    {
      title: "DevSecOps & Supply Chain Attestation",
      desc: "CI/CD automated vulnerability scanning, secret detection (Gitleaks), and tamper-evident container signing via Sigstore."
    },
    {
      title: "Ephemeral Secrets & Vault Brokering",
      desc: "HashiCorp Vault integration providing dynamic, short-lived database credentials and automated certificate rotation."
    },
    {
      title: "Continuous CSPM & Policy-as-Code",
      desc: "Automated cloud posture enforcement across AWS and Azure using Open Policy Agent and Kyverno admission rules."
    },
    {
      title: "Identity-Aware Access Gateways",
      desc: "Teleport-backed zero-trust bastions replacing legacy VPNs with certificate-based SSH, Kubernetes, and database proxies."
    },
    {
      title: "Automated Incident Response SOAR",
      desc: "Event-driven SOAR pipelines executing automated token revocations, IP isolation, and forensic snapshot capture."
    },
    {
      title: "Continuous Compliance & Audit Telemetry",
      desc: "Automated evidence aggregation pipelines mapping runtime telemetry directly to SOC 2 Type II, ISO 27001, and Cyber Essentials Plus."
    }
  ];

  // 6) Architecture layers
  const archLayers: ArchLayer[] = [
    {
      num: "LAYER 1",
      name: "Users, Workloads & Device Attestation Layer",
      desc: "ephemeral X.509 certificates • hardware-backed MFA • device trust telemetry • SPIFFE client IDs • least-privilege tokens"
    },
    {
      num: "LAYER 2",
      name: "Identity-Aware Edge & Proxy Layer",
      desc: "Teleport access bastions • mTLS ingress proxies • Cloudflare Zero Trust gateways • dynamic JWT verification • WAF rate limiters"
    },
    {
      num: "LAYER 3",
      name: "Workload Runtime & Kernel Security Layer",
      desc: "in-kernel eBPF Tetragon sensors • Cilium network policies • Falco system call monitors • read-only root filesystems • seccomp profiles"
    },
    {
      num: "LAYER 4",
      name: "Secret Brokering & Cryptographic Control Layer",
      desc: "HashiCorp Vault dynamic engines • AWS KMS / Azure Key Vault • KMS envelope encryption • automated PKI cert rotation"
    },
    {
      num: "LAYER 5",
      name: "CI/CD Pipeline & Supply Chain Security Layer",
      desc: "Syft SBOM generation • Cosign binary signing • Trivy container scanning • Kyverno admission webhooks • SLSA Level 3 attestations"
    },
    {
      num: "LAYER 6",
      name: "Detection, Telemetry & Compliance Layer",
      desc: "centralized Wazuh / SIEM telemetry • immutable audit trails • automated evidence collection • SOC 2 / ISO 27001 mapping engines"
    }
  ];

  const techChips = [
    "Cilium (eBPF)",
    "Tetragon",
    "SPIFFE / SPIRE",
    "HashiCorp Vault",
    "Trivy",
    "Sigstore / Cosign",
    "Kyverno / OPA",
    "Falco",
    "Teleport",
    "Wazuh",
    "AWS KMS / Azure Key Vault",
    "Semgrep / Gitleaks"
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
        
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "INNOVATION LABS", href: "/ecosystem/innovation-labs" },
          { label: "CYBERSECURITY LAB" },
        ]}
      >
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Book a Security Strategy Session
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact#contact-form"
            className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Talk to Our Security Team
          </Link>
        </div>
      </Hero>

      {/* 2. OVERVIEW / MISSION SECTION */}
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side content */}
            <div className="lg:col-span-6">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Mission Overview
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                  Proactive Defense Architecture <br />
                  <span className="text-rose-500">For Cloud-Native Estates</span>
                </h2>
                
              </Reveal>
            </div>

            {/* Right side - 4 mini cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {miniMissionCards.map((card, idx) => (
                <Reveal key={card.title} delay={idx * 0.05}>
                  <div className="group relative bg-[#0D0E12] border border-zinc-800/80 hover:border-rose-500/40 rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(244,63,94,0.12)] min-h-[140px] flex flex-col justify-between overflow-hidden">
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
        </div>
      </section>

      {/* 3. CORE INNOVATION AREAS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Capabilities
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Core Areas of <span className="text-rose-500">Cybersecurity Innovation</span>
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
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-left max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Operating Framework
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              How the Cybersecurity Lab Strengthens <span className="text-rose-500">Enterprise Security</span>
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
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Deliverables
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Security Solutions Built <span className="text-rose-500">Inside the Lab</span>
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
      <section className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        

        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left: Heading & Context */}
            <div className="lg:w-1/2 sticky top-24">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  Reference Blueprint
                </span>
                <h2 className="text-xl md:text-2xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-4">
                  Our Cybersecurity Innovation <span className="text-rose-500">Reference Architecture</span>
                </h2>
                

                <div className="flex flex-wrap gap-3">
                  {techChips.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (idx * 0.05) }}
                      className="px-4 py-2 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs font-bold hover:border-rose-500/50 hover:text-rose-400 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
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
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[100px] opacity-25"
          style={{ background: "radial-gradient(circle, #E11D48 0%, rgba(225,29,72,0.4) 35%, transparent 70%)" }}
        />
        
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Scenarios
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Security Use Cases We Engineer <span className="text-rose-500">Across the Enterprise</span>
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

            {/* RIGHT: Rectangular Low Height Image Card */}
            <div className="flex-1 w-full bg-[#0A0A0A] rounded-[24px] border border-zinc-800 shadow-xl overflow-hidden min-h-[360px] lg:min-h-[400px] flex flex-col sm:flex-row">
              
              {/* Abstract Visual Half */}
              <div className="w-full sm:w-5/12 lg:w-5/12 relative h-48 sm:h-auto overflow-hidden bg-zinc-950 flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  {industryUseCases.map((cat, idx) => {
                    if (cat.name !== activeTab) return null;
                    const icons = [Cloud, Workflow, Activity, Shield, Settings, Cpu, Database, Terminal, Network, Layers, Zap, Sparkles];
                    const Icon = icons[idx % icons.length];
                    
                    return (
                      <motion.div
                        key={cat.name + "-visual"}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(244,63,94,0.15),transparent)]" />
                        <Icon className="w-32 h-32 text-rose-500/10 drop-shadow-2xl relative z-10" strokeWidth={1} />
                        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#0A0A0A] to-transparent sm:hidden z-20" />
                        <div className="absolute right-0 w-full h-full bg-gradient-to-l from-[#0A0A0A] to-transparent hidden sm:block z-20" />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Content Half */}
              <div className="w-full sm:w-7/12 lg:w-7/12 p-8 md:p-12 flex flex-col justify-center relative z-30">
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

      {/* 9. WHY DEVOPSTRIO CYBERSECURITY LAB */}
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
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4">
                  Why Devopstrio
                </span>
                <h2 className="text-xl md:text-2xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
                  Why Organizations Build Security Resilience with the <span className="text-rose-500">Devopstrio Cybersecurity Lab</span>
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
      <FAQ faqs={securityLabFaqs} />
      <CTA
        ctaTitle="Safeguard Your Mission-Critical"
        ctaHighlight="Digital Assets"
        ctaDesc="Collaborate with our cybersecurity researchers to implement zero-trust architectures, automate security guardrails, and build resilient defense-in-depth."
        ctaBtnText="BOOK SECURITY STRATEGY SESSION"
        backLink="/ecosystem/innovation-labs"
      />

    </main>
  );
}
