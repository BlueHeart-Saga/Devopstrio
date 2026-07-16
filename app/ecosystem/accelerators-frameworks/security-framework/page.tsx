"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  ShieldAlert,
  Lock,
  FileCheck,
  Network,
  AlertTriangle,
  Fingerprint
} from "lucide-react";
import Link from "next/link";

export default function SecurityFrameworkPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const secureSdlc = [
    { title: "Threat Modeling", desc: "Identifying structural vulnerabilities during the design phase using STRIDE methodologies." },
    { title: "IDE Security", desc: "Providing developers with real-time linting that highlights insecure code patterns as they type." },
    { title: "Automated Pentesting", desc: "Running headless browsers to perform DAST (Dynamic Application Security Testing) against staging environments." }
  ];

  const compliance = [
    "ISO 27001 ISMS automated control mapping and evidence collection dashboards",
    "SOC 2 Type II continuous compliance monitoring for cloud configurations",
    "GDPR automated data masking and localized storage routing policies"
  ];

  const zeroTrust = [
    { title: "Microsegmentation", desc: "Using Cilium eBPF to drop any network traffic between containers that isn't explicitly whitelisted." },
    { title: "Identity Aware Proxies", desc: "Enforcing MFA and device health checks before allowing access to internal developer portals." },
    { title: "Mutual TLS", desc: "Automatically encrypting all inter-service communication inside the Kubernetes cluster via service mesh." }
  ];

  const devSecOpsControls = [
    { step: "Source", desc: "Secret scanning (Gitleaks)." },
    { step: "Build", desc: "Dependency scanning (Snyk)." },
    { step: "Registry", desc: "Image scanning (Trivy)." },
    { step: "Runtime", desc: "Behavior monitoring (Falco)." }
  ];

  const riskManagement = [
    { title: "Vulnerability Prioritization", desc: "Correlating CVEs against actual runtime context. If a vulnerable package is loaded but not executed, it's deprioritized." },
    { title: "Automated Remediation", desc: "Opening automated Pull Requests that bump vulnerable package versions to their secure baselines." },
    { title: "Incident Runbooks", desc: "Executable scripts that instantly revoke compromised API keys and isolate affected instances." }
  ];

  const metrics = [
    { value: "100%", label: "Zero-Trust Enforcement" },
    { value: "<4h", label: "Critical CVE Remediation" },
    { value: "Continuous", label: "Audit Readiness" }
  ];

  const faqs = [
    { q: "What is Zero Trust Architecture?", a: "Zero Trust is a security concept centered on the belief that organizations should not automatically trust anything inside or outside its perimeters and must verify anything trying to connect to its systems before granting access." },
    { q: "How do you automate SOC 2 compliance?", a: "We use CSPM (Cloud Security Posture Management) tools to map your AWS/Azure configurations directly to SOC 2 controls, automatically generating the evidence auditors need." },
    { q: "What happens if a developer commits an API key?", a: "Our pre-commit hooks intercept the push locally. If bypassed, server-side scanners detect the secret, block the merge, and trigger an automated key rotation workflow." },
    { q: "Does adding security testing slow down builds?", a: "No. We utilize differential scanning (only scanning the files changed in the PR) to keep security checks under two minutes." },
    { q: "What is eBPF and why use it for security?", a: "eBPF allows us to run sandboxed programs directly in the Linux kernel without changing kernel source code. It provides unprecedented visibility into container behavior, allowing us to block malicious system calls instantly." },
    { q: "How do you manage cross-cloud identities?", a: "We establish a centralized Identity Provider (like Entra ID or Okta) and use federation (OIDC) to grant short-lived, least-privilege tokens to applications and engineers." },
    { q: "What is Threat Modeling?", a: "Before writing code, engineers map out the architecture, identify potential attack vectors (like spoofing or tampering), and design mitigations into the system upfront." },
    { q: "Do you provide penetration testing?", a: "While we automate continuous security testing, we partner with specialized, independent offensive security firms for annual manual pentesting to satisfy compliance requirements." },
    { q: "How do you prioritize which vulnerabilities to fix?", a: "We use context-aware scoring. A critical CVE in a container that has no internet access and no sensitive data is prioritized lower than a medium CVE on a public-facing API gateway." },
    { q: "How do we implement these controls?", a: "Click 'Secure Your Architecture' below to schedule a DevSecOps maturity assessment with our security leads." }
  ];

  return (
    <main className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="SECURITY IP"
        colorBends={true}
        colorBendsColors={["#10b981", "#06b6d4", "#6366f1"]}
        title={
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Security Framework
            </span>
          </>
        }
        subtitle="Embedding security across architecture, development and operations. Leverage our proprietary security blueprints to implement Zero Trust networks, automate compliance evidence gathering, and secure your software supply chain by default."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ACCELERATORS & FRAMEWORKS", href: "/ecosystem/accelerators-frameworks" },
          { label: "SECURITY FRAMEWORK" }
        ]}
      >
        <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Consult Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
      </Hero>

      {/* 2. SECURE SDLC */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DEVELOPMENT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Secure SDLC</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secureSdlc.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Lock className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ZERO TRUST ARCHITECTURE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">NETWORK</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Zero Trust Architecture</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                We eliminate the concept of a "trusted internal network", enforcing cryptographic identity checks on every single request.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {zeroTrust.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Fingerprint className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPLIANCE FRAMEWORKS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4 lg:order-2">
              {compliance.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">GOVERNANCE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Compliance Frameworks</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Translate complex legal frameworks into actionable, automated technical policies mapped directly to your infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEVSECOPS CONTROLS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PIPELINE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">DevSecOps Controls</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {devSecOpsControls.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[160px] text-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                  <Network className="w-6 h-6 text-rose-500 mb-4" />
                  <h4 className="text-base font-bold text-white mb-2">{stage.step}</h4>
                  <p className="text-xs text-zinc-300 font-medium">{stage.desc}</p>
                </div>
                {idx < devSecOpsControls.length - 1 && (
                  <div className="hidden md:flex items-center">
                    <ArrowUpRight className="w-5 h-5 text-zinc-700" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RISK MANAGEMENT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">OPERATIONS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Risk Management</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {riskManagement.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECURITY METRICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">OUTCOMES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Security Metrics</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/20 border border-zinc-900/60 rounded-xl hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-center items-center">
                <span className="text-4xl font-black text-white tracking-tight mb-2">{m.value}</span>
                <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">{m.label}</span>
              </div>
            ))}
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
              Everything you need to know about the Security Framework. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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
                    <div className="text-zinc-500 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
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

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Secure Your Architecture</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Eliminate reactive fire-fighting. Deploy our proprietary security framework to embed Zero-Trust principles deeply into your core architecture.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Implement Zero Trust
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
