"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  ShieldAlert,
  Lock,
  Key,
  Cpu,
  Layers,
  Sparkles,
  Link as LinkIcon,
  ShieldCheck,
  Server,
  Activity,
  GitBranch
} from "lucide-react";
import Link from "next/link";

export default function CybersecurityPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const technologies = [
    "Microsoft Defender", "CrowdStrike", "Okta", "Azure AD", "Vault", "Trivy", "SonarQube"
  ];

  const frameworkFeatures = [
    "Cilium network policies enforcing container pod microsegmentation",
    "Zero Trust access guidelines protecting corporate resources",
    "Encryption-in-transit configurations securing internal network channels"
  ];

  const identityFeatures = [
    "Okta enterprise SSO integrations authenticating user profiles",
    "Azure AD (Entra ID) directories managing resource credentials",
    "Multi-factor authentication (MFA) validation flows securing admin portals",
    "Temporary access profile tokens limiting database session times"
  ];

  const appFeatures = [
    "SonarQube static analysis checking code blocks for logic vulnerabilities",
    "Trivy container scanners auditing base operational software lists",
    "SBOM manifest builders indexing external package files",
    "Vulnerability tracking dashboards prioritizing urgent updates"
  ];

  const cloudFeatures = [
    "HashiCorp Vault parameters managing credentials inside enclaves",
    "Cloud Security Posture Management scanning cloud configurations",
    "VPC firewall rules shutting down idle open public ports"
  ];

  const complianceFeatures = [
    "SOC 2 compliance blueprints enforcing audit trails automatically",
    "ISO 27001 mapping grids tracking system access records",
    "Data privacy checklists checking settings against GDPR rules"
  ];

  const socFeatures = [
    "Microsoft Defender endpoints scanning active user workstations",
    "CrowdStrike Falcon threat intelligence flagging suspicious file actions",
    "Event log analyzers routing urgent alerts to on-call engineers"
  ];

  const faqs = [
    { q: "Why use Cilium network policies inside clusters?", a: "Cilium uses eBPF at the Linux kernel level, allowing you to write highly efficient, API-aware firewall rules between container pods without network lag." },
    { q: "How are dynamic credentials generated with HashiCorp Vault?", a: "Vault connects directly with database providers, spinning up temporary credentials that are deleted automatically when their TTL expires." },
    { q: "Do you support single sign-on (SSO) for legacy apps?", a: "Yes, we deploy reverse-proxy authentication gateways that wrap legacy tools in SAML/OIDC checks." },
    { q: "What is container scanning and how often does it run?", a: "Trivy scans container images for software vulnerabilities. We configure scanners to run on every commit and daily in registry storage." },
    { q: "How do you enforce Zero Trust access?", a: "We audit user locations, device compliance scores, and permissions on every single request, denying access if any metrics fall below safe limits." },
    { q: "What happens when a security alert is triggered?", a: "Our SOC pipelines parse logs and route urgent events to PagerDuty while isolating the affected host automatically." },
    { q: "Can we automate SOC compliance reports?", a: "Yes, we configure dashboard integrations that index user logs and system metrics, exporting auditor-ready reports on demand." },
    { q: "How do we prevent API token exposures?", a: "We run git hooks that block commits containing secrets, and use Vault to inject values directly into runtime memory." },
    { q: "What is microsegmentation?", a: "It isolates network communication down to individual pods or containers, blocking lateral movement if a node is compromised." },
    { q: "How do we start auditing our systems security?", a: "Click 'Consult Security Architects' to schedule a vulnerability scan and evaluate your access settings." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        <div className="absolute inset-0 z-0">
          <img src="/assets/ecosystem/sub-page-hero/Ecosystem_technology_stack/Cybersecurity.png" alt="Cybersecurity Technology background" className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-20">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              Cybersecurity Unit
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-8 max-w-2xl mx-auto">
              Cilium network policies and SSO authentication.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-zinc-200 text-sm md:text-base lg:text-lg leading-relaxed font-medium">
              Configure security frameworks, deploy identity platforms, verify app code, run cloud posture audits, and automate compliance tracking.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Consult Security Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>


      {/* TECHNOLOGIES BAR */}
      <section className="w-full py-10 bg-zinc-950 border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {technologies.map((tech, idx) => (
              <span key={idx} className="text-zinc-500 hover:text-zinc-300 transition-colors duration-300 text-xs md:text-sm font-mono tracking-wider font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SECURITY FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ZERO TRUST</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Security Framework</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Enforce packet microsegmentation. Setup Cilium network filters and encrypt pod communication pathways.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {frameworkFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Lock className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. IDENTITY PLATFORM */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {identityFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Key className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DIRECTORY AUTH</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Identity Platform</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Secure enterprise access points. Integrate Okta SSO profiles and coordinate Azure Entra ID credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APPLICATION SECURITY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">APPSEC</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Application Security</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Analyze code safety parameters. Run SonarQube logic tests and execute Trivy container checks on pull requests automatically.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Cpu className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOUD SECURITY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {cloudFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Server className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">POSTURE MANAGEMENT</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Cloud Security</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Isolate cloud database networks. Inject credentials dynamically using HashiCorp Vault enclaves, removing static files key folders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPLIANCE & GOVERNANCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">COMPLIANCE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Compliance & Governance</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Pass security audits easily. Align configurations with SOC 2, ISO 27001, and international data privacy targets automatically.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {complianceFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOC OPERATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {socFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Activity className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">THREAT DEFENSE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">SOC Operations</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Detect anomalies in real-time. Use CrowdStrike and Microsoft Defender to scan workstations and server hosts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FAQ</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-zinc-950/50 border border-zinc-900 rounded-xl overflow-hidden hover:border-zinc-800 transition-colors duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white"
                  >
                    {faq.q}
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-rose-500" : ""}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[200px] border-t border-zinc-900/60" : "max-h-0"}`}>
                    <p className="p-6 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Secure Your Infrastructure</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with our security architects to run a vulnerability assessment and configure Zero Trust parameters.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Consult Security Architects
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
