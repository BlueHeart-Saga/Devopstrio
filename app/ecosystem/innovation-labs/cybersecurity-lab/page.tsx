"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Shield,
  Lock,
  Key,
  Terminal,
  Activity,
  ChevronDown,
  ChevronRight,
  Cpu,
  Layers,
  CheckCircle2,
  Eye,
  AlertTriangle,
  FileCheck
} from "lucide-react";
import Link from "next/link";

export default function CybersecurityInnovationLabPage() {
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Hero highlights
  const heroHighlights = [
    "Zero Trust",
    "Cloud Security",
    "Security Automation",
    "Threat Intelligence",
    "AI-Powered Cyber Defense",
    "DevSecOps",
    "Identity & Access Management",
    "Compliance Automation"
  ];

  // Hero metrics
  const heroMetrics = [
    { value: "24/7", label: "Security Monitoring" },
    { value: "100+", label: "Security Assessments" },
    { value: "99.99%", label: "Secure Availability" },
    { value: "Zero Trust", label: "Ready" }
  ];

  // Security Innovation Domains
  const securityDomains = [
    {
      title: "Zero Trust Architecture",
      desc: "Designing network boundaries where all access is verified, authenticated, and authorized based on real-time device health.",
      icon: <Lock className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Cloud Security",
      desc: "Configuring multi-cloud enclaves, cloud access brokers, network firewalls, and database configuration guardrails.",
      icon: <Shield className="w-6 h-6 text-rose-500" />
    },
    {
      title: "DevSecOps",
      desc: "Integrating static code checks (SAST), software composition scans (SCA), and secrets detectors into CI/CD loops.",
      icon: <Terminal className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Identity & Access Management",
      desc: "Establishing granular role privileges, single sign-on parameters, and multi-factor authentication guardrails.",
      icon: <Key className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Threat Intelligence",
      desc: "Consuming global indicator feeds to map attacker behaviors and preemptively block network vectors.",
      icon: <Eye className="w-6 h-6 text-rose-500" />
    },
    {
      title: "AI Security",
      desc: "Deploying model anomaly detection, training data access restrictions, and model api threat mitigation.",
      icon: <Cpu className="w-6 h-6 text-rose-500" />
    }
  ];

  // Security Solutions Portfolio
  const solutionsPortfolio = [
    {
      name: "Zero Trust Platform",
      tagline: "Granular Access Control",
      desc: "Implementing secure application access gateways and context-aware session checks for all users."
    },
    {
      name: "Cloud Security Platform",
      tagline: "Posture Management",
      desc: "Continuous drift checking of cloud resources, misconfiguration alerts, and auto-remediation playbooks."
    },
    {
      name: "DevSecOps Framework",
      tagline: "Pipeline Compliance",
      desc: "Container image signing, vulnerability checks, and security gates built into delivery systems."
    },
    {
      name: "Security Operations Center",
      tagline: "24/7 Security Operations",
      desc: "Deploying SIEM and SOAR engines to gather telemetry, parse events, and isolate compromised servers."
    },
    {
      name: "Identity Management",
      tagline: "Privileged Access Management",
      desc: "Just-in-time access configurations, SSH session records, and credential vault rotations."
    },
    {
      name: "Compliance Automation",
      tagline: "Audit Ready Controls",
      desc: "Mapping hosting states to SOC2, ISO 27001, HIPAA, and PCI-DSS compliance dashboards."
    }
  ];

  // Security Operations & Automation
  const securityOps = [
    { title: "Threat Detection", desc: "Correlating network packet logs and host logs to locate malicious indicators of compromise." },
    { title: "Incident Response", desc: "Automating responses to isolate servers, block malicious IPs, and alert security handlers." },
    { title: "Security Automation", desc: "Deploying configuration templates to fix missing firewalls and insecure access rules." },
    { title: "SIEM Integration", desc: "Aggregating telemetry from multi-cloud subscriptions into Microsoft Sentinel or Splunk lakes." },
    { title: "Threat Hunting", desc: "Proactively auditing user logs to detect slow privilege escalation attempts." },
    { title: "Vulnerability Management", desc: "Scheduling automated application package scans, host port reviews, and dependency charts." }
  ];

  // Security Framework
  const securityFramework = [
    { phase: "Identify", title: "Asset Discovery", desc: "Inventorying servers, public APIs, credentials, and data stores." },
    { phase: "Protect", title: "Guardrail Setup", desc: "Enforcing encryption keys, network block rules, and multi-factor logins." },
    { phase: "Detect", title: "Continuous Scan", desc: "Deploying anomaly filters, scanning build packages, and auditing logs." },
    { phase: "Respond", title: "Auto Mitigation", desc: "Isolating containers, revoking credentials, and executing playbooks." }
  ];

  // Security Impact
  const impactStats = [
    { value: "90%", label: "Faster Threat Detection" },
    { value: "60%", label: "Automated Response" },
    { value: "24/7", label: "Security Operations" },
    { value: "Compliance", label: "Enterprise Ready" }
  ];

  const successStories = [
    {
      title: "Cloud Security Modernization",
      challenge: "A retail client had inconsistent firewalls across multiple AWS regions, triggering security alerts.",
      solution: "Enforced standardized Terraform Security Hub enclaves and auto-remediation loops.",
      result: "90% faster threat isolation and 100% compliance alignment across regional enclaves."
    },
    {
      title: "Zero Trust Transformation",
      challenge: "A finance company suffered from outdated VPN rules, giving contractors excess server access.",
      solution: "Decompiled network layouts and built context-aware, identity-verified web portals.",
      result: "Contractor compromise risks reduced to zero and audited user logs for all database queries."
    },
    {
      title: "Security Operations Automation",
      challenge: "A tech startup struggled to monitor alerts 24/7, leading to delayed response on critical breaches.",
      solution: "Deployed a SOAR pipeline to ingest threat events and trigger automated container isolation.",
      result: "60% automated incident remediation, reducing average response time from hours to seconds."
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "What is the primary focus of the Cybersecurity Innovation Lab?",
      a: "The lab focuses on building enterprise-grade Zero Trust architectures, secure cloud enclaves, DevSecOps pipelines, identity governance, and automated threat hunting playbooks."
    },
    {
      q: "How do you implement Zero Trust architecture?",
      a: "We enforce least-privilege access rules, continuous session verification, micro-segmentation, and device health checks across all user connections."
    },
    {
      q: "What is DevSecOps and how does the lab automate security in CI/CD?",
      a: "DevSecOps integrates security directly into build pipelines, automating dependency scans, software composition analysis (SCA), secrets detection, and runtime audits."
    },
    {
      q: "What cloud security configurations do you support?",
      a: "We secure workloads on Azure (Microsoft Defender, Sentinel), AWS (Security Hub, GuardDuty), Google Cloud, and Oracle Cloud, building custom Landing Zones."
    },
    {
      q: "How does security orchestration, automation, and response (SOAR) work?",
      a: "SOAR automates incident responses by using API workflows to block malicious IPs, suspend compromised roles, and isolate containers when threats are detected."
    },
    {
      q: "What is threat hunting and intelligence?",
      a: "It is the proactive search for hidden indicators of compromise (IoCs) within system logs using threat intelligence feeds and anomaly detection scripts."
    },
    {
      q: "How do you protect containerized workloads (Kubernetes)?",
      a: "We enforce cluster security boundaries, configure runtime detection engines like Falco, restrict API privileges, and scan images before release."
    },
    {
      q: "How does the lab support compliance audits?",
      a: "We deploy real-time monitoring and compliance templates to verify configuration statuses against SOC2, ISO 27001, HIPAA, and PCI-DSS rules."
    },
    {
      q: "What identity and access management (IAM) strategies do you use?",
      a: "We configure single sign-on (SSO), multi-factor authentication (MFA), role-based privilege parameters, and privileged access management (PAM) pipelines."
    },
    {
      q: "How can we engage with the Cybersecurity Innovation Lab?",
      a: "You can schedule a Threat Assessment Workshop where our security architects audit your network topology, review access controls, and design a Zero Trust blueprint."
    }
  ];

  // Related connections
  const relatedConnections = [
    { name: "DevOps Innovation Lab", desc: "Self-service developer platforms, GitOps configurations, and SRE operations.", href: "/ecosystem/innovation-labs/devops-lab" },
    { name: "Cloud Innovation Lab", desc: "Cloud-native platform engineering, Landing Zones, and multi-cloud architectures.", href: "/ecosystem/innovation-labs/cloud-lab" },
    { name: "Cisco Alliance", desc: "Enterprise networks setups, threat defense, and smart routing installations.", href: "/ecosystem/partnerships/cisco" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">

        {/* Background Gradients & Grids */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center text-center">

          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Shield className="w-3.5 h-3.5" />
              Cybersecurity Innovation Lab
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-5xl mb-6">
              Building Cyber Resilience, Zero Trust Architecture <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
                & AI-Powered Security Operations
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="max-w-3xl">
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-10">
              Protecting digital enterprises through zero-trust network models, cloud security guardrails, automated pipeline scanning, and real-time SIEM/SOAR incident operations.
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk To Security Experts
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Security Assessment
            </Link>
          </Reveal>

          {/* Pillars */}
          <Reveal delay={0.4} className="flex flex-wrap justify-center gap-3 max-w-4xl select-none mb-16">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                {item}
              </span>
            ))}
          </Reveal>

          {/* Metrics */}
          <Reveal delay={0.5} className="w-full max-w-5xl border-t border-zinc-900/60 pt-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 select-none">
              {heroMetrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-mono font-black text-rose-500 mb-1">{metric.value}</div>
                  <div className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">{metric.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      {/* 2. SECURITY INNOVATION DOMAINS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              SECURITY RESEARCH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Security Innovation <span className="text-rose-500">Domains</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Engineering proactive containment, identity bounds, and threat analysis models.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityDomains.map((domain, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 min-h-[200px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 border-b border-zinc-900/60 pb-4">
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">{domain.title}</h4>
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {domain.icon}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CYBERSECURITY ARCHITECTURE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.01] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ZERO TRUST BLUEPRINT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Cybersecurity <span className="text-rose-500">Architecture</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Multi-tiered validation model securing resources from identity checkpoint to data repository.
            </p>
          </Reveal>

          {/* Technical Stack Architecture Diagram */}
          <div className="max-w-4xl mx-auto bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/[0.02] rounded-full blur-xl pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10 font-mono">

              {/* Layer 1 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">01. Users & Devices</span>
                <span className="text-xs text-zinc-400 font-bold">Remote Staff, Partners, Contractor Terminals, Mobile Nodes</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 2 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">02. Identity Layer</span>
                <span className="text-xs text-zinc-400 font-bold">Single Sign-On, MFA verification, Privileged Access policies</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 3 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">03. Security Controls</span>
                <span className="text-xs text-zinc-400 font-bold">Web Application Firewalls (WAF), API access logs, network routers</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 4 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">04. Applications</span>
                <span className="text-xs text-zinc-400 font-bold">Microservice APIs, staging databases, static file portals</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 5 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">05. Cloud Infrastructure</span>
                <span className="text-xs text-zinc-400 font-bold">Virtual Private Networks, Kubernetes clusters, local hardware</span>
              </div>

              <div className="flex justify-center"><ChevronDown className="w-5 h-5 text-zinc-800" /></div>

              {/* Layer 6 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-2xl gap-4 group hover:border-rose-500/10 transition-all duration-300">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">06. Monitoring & Response</span>
                <span className="text-xs text-zinc-400 font-bold">SIEM analytics, SOAR playbooks, Threat alerts, isolated boxes</span>
              </div>

            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 select-none mt-12">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Technology Layer:</span>
            {["Microsoft Defender", "CrowdStrike", "Palo Alto", "Cisco Security", "Azure Security", "OCI Security"].map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SECURITY SOLUTIONS PORTFOLIO */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Security Solutions <span className="text-rose-500">Portfolio</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsPortfolio.map((sol, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">
                      {sol.tagline}
                    </span>
                    <span className="text-xs font-mono text-zinc-700">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                    {sol.name}
                  </h3>

                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECURITY OPERATIONS & AUTOMATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              AUTOMATED MONITORING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Security Operations & <span className="text-rose-500">Automation</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityOps.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500 font-bold font-mono text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECURITY FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              REMEDIATION CYCLES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Cybersecurity <span className="text-rose-500">Framework</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {securityFramework.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group overflow-hidden"
              >
                <div className="text-[28px] font-black text-rose-500/15 font-mono tracking-tighter leading-none mb-3">
                  0{idx + 1}
                </div>
                <span className="text-[9px] font-mono text-rose-500 uppercase tracking-widest block mb-1 font-bold">
                  {step.phase}
                </span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{step.title}</h4>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 select-none mt-12">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Methodology:</span>
            {["Identify", "Protect", "Detect", "Respond"].map((srv) => (
              <span key={srv} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {srv}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECURITY IMPACT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  METRICS & CASES
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6 text-white">
                  Security Lab <span className="text-rose-500">Impact</span>
                </h2>
                <p className="text-zinc-350 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-8">
                  Lowering detection times and securing cloud configurations automatically without user overhead.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-6 select-none">
                {impactStats.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 text-left group"
                  >
                    <div className="text-2xl md:text-3xl font-black text-rose-500 tracking-tighter mb-2 font-mono group-hover:scale-105 transition-transform duration-300 origin-left">
                      {item.value}
                    </div>
                    <div className="text-[9px] md:text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-snug font-bold">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300"
              >
                <div>
                  <span className="text-[10px] font-mono text-rose-500 tracking-wider uppercase font-bold block mb-1">
                    Security Case Study
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-white mb-6 tracking-wide">
                    {story.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Challenge</span>
                      <p className="text-xs text-zinc-350 leading-relaxed font-bold">{story.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Solution</span>
                      <p className="text-xs text-zinc-350 leading-relaxed font-bold">{story.solution}</p>
                    </div>
                    <div className="pt-2 border-t border-zinc-900/80">
                      <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Result</span>
                      <p className="text-xs text-zinc-350 font-bold leading-relaxed">{story.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left sticky top-28">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  SECURITY QUESTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-5">
                  Frequently Asked <span className="text-rose-500">Questions</span>
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md">
                  Everything you need to know about our security assessments, DevSecOps pipelines, and threat mitigation models.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col gap-4 select-none">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/10 rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white uppercase tracking-wider"
                      >
                        {faq.q}
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-550 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-rose-500" : ""
                            }`}
                        />
                      </button>

                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[250px] border-t border-zinc-900/60" : "max-h-0"
                          }`}
                      >
                        <p className="p-6 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RELATED CONNECTIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Related Ecosystem <span className="text-rose-500">Connections</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedConnections.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 min-h-[160px]"
              >
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
                    {partner.name}
                    <ChevronRight className="w-4 h-4 text-zinc-650 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
                  </h4>
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden text-center">
        {/* Ambient background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 flex flex-col items-center">

          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              SECURE YOUR INFRASTRUCTURE
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Build a Resilient <span className="text-rose-500">Cybersecurity Strategy</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Partner with our Security Innovation Lab to enforce enterprise-grade Zero Trust architecture and secure your cloud deployments.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk To Security Experts
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Security Assessment
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
