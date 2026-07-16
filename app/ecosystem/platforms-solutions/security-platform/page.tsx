"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  Lock,
  ShieldAlert,
  Key,
  Activity,
  Eye,
  Layers,
  Sparkles,
  Cpu,
  Workflow,
  Server
} from "lucide-react";
import Link from "next/link";

export default function SecurityPlatformPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const heroMetrics = [
    { value: "Zero Trust", label: "Architecture Model" },
    { value: "SOC-2/PCI", label: "Compliance Targets" },
    { value: "Dynamic", label: "Vault Credentials" },
    { value: "Real-time", label: "VPC Threat Audits" }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const zeroFeatures = [
    "Identity Verification protocols validating device signatures",
    "Continuous Authentication checks monitoring browser session footprints",
    "Least Privilege Access boundaries limiting workspace directories"
  ];

  const appFeatures = [
    "Static Application Security Testing (SAST) scanning repository commits",
    "Dynamic Application Security Testing (DAST) testing endpoint parameters",
    "Container Security scanning base software dependencies",
    "Software Bill of Materials (SBOM) generators indexing packages"
  ];

  const cloudFeatures = [
    "Configuration Audits checking cloud ports and bucket configurations",
    "Threat Detection trackers flagging abnormal instance creations",
    "Network Security monitors analyzing active VPC traffic paths",
    "IAM Compliance checks pointing out broad access policy rules"
  ];

  const secretFeatures = [
    "Dynamic Secret Generation spinning up database logins on-demand",
    "Central Key Management services encrypting application tables",
    "Automatic Rotation schedules updating API passwords weekly"
  ];

  const siemFeatures = [
    "Security Information Event Management (SIEM) archiving server logs",
    "Incident Management tracks routing priority cases to security teams",
    "Vulnerability Tracking maps showing risk indicators per system host"
  ];

  const faqs = [
    { q: "How are dynamic secrets generated?", a: "We integrate with HashiCorp Vault. When an application requests database access, Vault creates a temporary database credential with a set time-to-live (TTL), then deletes it automatically." },
    { q: "Does the platform support SAML and OIDC SSO?", a: "Yes, it integrates out of the box with Okta, Azure AD, Ping Identity, and Google Workspace." },
    { q: "What security benchmarks do the cloud audits align with?", a: "Our scans check compliance against CIS Benchmarks, SOC 2, HIPAA, and PCI-DSS requirements." },
    { q: "Does the platform scan code inside pull requests?", a: "Yes, our SAST scanners interface with GitHub Actions, GitLab CI, and Bitbucket Pipelines to check for vulnerabilities before merging." },
    { q: "Is VPC network traffic analyzed in real-time?", a: "Yes, we monitor VPC flow logs using machine learning to detect unusual data egress rates or connections to known malicious IPs." },
    { q: "How are critical incident alerts routed?", a: "We integrate with PagerDuty, Opsgenie, and email systems, routing critical events to the active security engineer." },
    { q: "Does it support hardware security modules (HSM)?", a: "Yes, key management can be backed by cloud HSM providers to ensure strict key access rules." },
    { q: "Can we track software license compliance?", a: "Yes, our SBOM tools catalog open-source licenses and alert you if restricted licenses are introduced." },
    { q: "What happens when a security anomaly is detected?", a: "The platform triggers alert alerts and can optionally execute automated blocking scripts (e.g. revoking a user session)." },
    { q: "How do we get started with the Security Platform?", a: "Click 'Secure Your Enterprise' to discuss your compliance requirements and start a vulnerability assessment." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="Security Operations Unit"
        title={
          <>
            Enterprise Security <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Platform
            </span>
          </>
        }
        subtitle="Enforce Zero Trust architecture, audit container dependencies, manage database keys dynamically, and analyze live system events."
        particles={true}
        particleColors={["#ffffff", "#fda4af", "#f43f5e"]}
        particleBaseSize={150}
        magicRings={true}
        magicRingsColor="#f43f5e"
        magicRingsColorTwo="#9f1239"
        magicRingsRingCount={4}
        magicRingsSpeed={0.5}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "PLATFORMS & SOLUTIONS", href: "/ecosystem/platforms-solutions" },
          { label: "SECURITY PLATFORM" }
        ]}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
        >
          Secure Your Enterprise
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </Hero>


      {/* 2. ZERO TRUST ARCHITECTURE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">IDENTITY TRUST</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Zero Trust Architecture</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Establish strict security boundaries. Validate device configurations, authenticate connections continuously, and enforce least privilege roles.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {zeroFeatures.map((feat, idx) => (
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

      {/* 3. APPLICATION SECURITY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {appFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Cpu className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">APPSEC LOOP</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Application Security</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Embed checks inside code loops. Scan repository files for secrets, audit packages for vulnerabilities, and compile dependency bill metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOUD SECURITY GOVERNANCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CLOUD SEC</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Cloud Security Governance</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Verify cloud asset security configurations automatically. Scan for open database ports, flag unencrypted buckets, and track admin access paths.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cloudFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Server className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECURE SECRETS MANAGEMENT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {secretFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Key className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">VAULT SERVICE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Secrets Management</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Centralize credential security parameters. Generate temporary database tokens dynamically, rotating them automatically to prevent key exposures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECURITY ARCHITECTURE */}
      <section className="w-full py-28 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TOPOLOGY FLOW</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Security Architecture</h2>
          </Reveal>

          <div className="max-w-3xl mx-auto bg-zinc-950/40 border border-zinc-900/80 rounded-3xl p-8 lg:p-12 relative overflow-hidden font-mono text-xs hover:border-rose-500/20 transition-all duration-500 shadow-2xl">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Users & Devices</span>
                <span className="text-zinc-400">Enforce device trust checks and browser integrity validation</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Identity Layer</span>
                <span className="text-zinc-400">SAML SSO, OIDC, Multi-factor auth checks</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Security Controls</span>
                <span className="text-zinc-400">WAF filtering, temporary access token issuance</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Applications</span>
                <span className="text-zinc-400">Container isolations, database proxy endpoints</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SIEM & OBSERVABILITY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">EVENT MONITOR</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">SIEM & Observability</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Index server logs, trace event pathways, and monitor live vulnerability indicators across all platform environments.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siemFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Activity className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Questions we get <span className="text-white font-bold bg-gradient-to-r from-red-655 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-bold">
              Everything you need to know about our Zero Trust security controls, SAML/OIDC credentials, and compliance targets. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
            </p>
          </Reveal>

          {/* Accordion FAQ */}
          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group"
                  >
                    <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <div className="text-zinc-550 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl animate-fadeIn flex flex-col gap-4">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Below FAQ callout */}
          <Reveal delay={0.2}>
            <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-zinc-400 text-xs md:text-sm font-bold">
                Still have questions? Don&apos;t sit with them. Reach out to our team — we respond to every message personally.
              </p>
              <a
                href="mailto:info@devopstrioglobal.com"
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Engineers <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Secure Your Operations</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with our cybersecurity engineers to discuss compliance configurations and audit templates.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Secure Your Enterprise
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
