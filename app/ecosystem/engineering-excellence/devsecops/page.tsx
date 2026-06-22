"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  ShieldCheck,
  FileCode2,
  Container,
  CloudCog,
  CheckCircle,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";

export default function DevSecOpsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const sdlc = [
    { step: "Plan", desc: "Threat Modeling" },
    { step: "Code", desc: "IDE Linting" },
    { step: "Build", desc: "SAST & SCA" },
    { step: "Test", desc: "DAST Scans" },
    { step: "Deploy", desc: "Policy Checks" },
    { step: "Operate", desc: "Runtime Defense" }
  ];

  const appSec = [
    { title: "SAST (Static Analysis)", desc: "Scanning source code for SQL injection, cross-site scripting (XSS), and logic flaws before it is even compiled." },
    { title: "DAST (Dynamic Analysis)", desc: "Simulating automated attacks against running web applications to find vulnerabilities in live endpoints." },
    { title: "Dependency Scanning", desc: "Continuous auditing of third-party NPM and PyPI packages for known CVEs using tools like Snyk." }
  ];

  const containerSec = [
    { title: "Image Scanning", desc: "Analyzing Docker images layer-by-layer inside the CI pipeline using Trivy to block insecure builds." },
    { title: "Runtime Protection", desc: "Deploying eBPF-based agents (like Falco) to monitor container behavior and block malicious shell executions." },
    { title: "SBOM Generation", desc: "Automatically creating Software Bill of Materials for every release to track exact software supply chain lineage." }
  ];

  const cloudSec = [
    { title: "IAM Least Privilege", desc: "Enforcing strict, temporary role-based access for cloud resources rather than long-lived static credentials." },
    { title: "Secrets Management", desc: "Utilizing HashiCorp Vault to inject database passwords at runtime, preventing secrets from leaking in code." },
    { title: "Zero Trust Architecture", desc: "Never trusting internal network traffic by default; enforcing mutual TLS between all microservices." }
  ];

  const compliance = [
    "ISO 27001 automated control mapping ensuring continuous certification readiness",
    "SOC 2 compliance tracking for data security and privacy guarantees",
    "GDPR automated data masking and localized routing policies"
  ];

  const secOps = [
    { title: "Threat Detection", desc: "Aggregating cloud audit logs into a central SIEM to detect brute-force attempts and anomalous data exfiltration." },
    { title: "Incident Response", desc: "Executing automated containment scripts that instantly isolate compromised nodes from the broader network." },
    { title: "Continuous Monitoring", desc: "24/7 security desks monitoring global threat feeds and applying zero-day hotfixes." }
  ];

  const metrics = [
    { value: "<24h", label: "Critical Vulnerability Closure Rate" },
    { value: "100%", label: "Compliance Score" },
    { value: "0", label: "Code-Level Secrets Leaked" }
  ];

  const faqs = [
    { q: "What does 'Shifting Left' mean in security?", a: "Shifting left means integrating security checks earlier in the development lifecycle (like inside the developer's IDE or the PR check) rather than waiting until the code is deployed to test it." },
    { q: "Does DevSecOps slow down CI/CD pipelines?", a: "We heavily optimize our scanning tools. We use differential scanning (only checking changed code) to ensure security gates add seconds, not minutes, to pipeline times." },
    { q: "How do you handle false positives from security scanners?", a: "We employ security engineers who tune the static analysis rulesets, suppressing known false positives so developers maintain trust in the automated alerts." },
    { q: "What is an SBOM and why is it important?", a: "A Software Bill of Materials is an inventory of all open-source libraries used in your application. It's crucial for quickly determining if you are affected when a massive vulnerability (like Log4j) is disclosed." },
    { q: "How do you prevent secrets from being pushed to GitHub?", a: "We run pre-commit hooks (like Talisman or Gitleaks) that scan code locally before it leaves the developer's laptop, blocking the push if API keys are detected." },
    { q: "What is Runtime Protection for containers?", a: "It involves monitoring the active behavior of a container. If a web server container suddenly tries to execute a shell command or download a file, the runtime protection instantly kills it." },
    { q: "How do developers access database credentials?", a: "They don't. Applications authenticate to databases using temporary, short-lived tokens generated dynamically by an identity provider or vault." },
    { q: "Do you offer compliance audits?", a: "Yes, our automated platforms map technical configurations directly to SOC 2 and ISO 27001 controls, massively simplifying the auditor review process." },
    { q: "How do you handle Zero-Day vulnerabilities?", a: "Our threat intelligence feeds trigger automated image scans across all registries. Vulnerable containers are automatically patched and rolled over with zero downtime." },
    { q: "How can we implement DevSecOps?", a: "Click 'Secure Every Deployment' below to schedule a DevSecOps maturity assessment with our security architects." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full py-32 bg-black overflow-hidden border-b border-zinc-900/60 flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.035),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-10">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              SHIFT LEFT SECURITY
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              DevSecOps Excellence
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-6">
              Embedding Security Across The Entire Software Lifecycle.
            </p>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold">
              We weave security checks invisibly into developer workflows, automating vulnerability scanning, secrets management, and compliance so you can move fast without breaking security.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. SECURE DEVELOPMENT LIFECYCLE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">SDLC PIPELINE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Secure Development Lifecycle</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {sdlc.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[140px] text-center p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                  <h4 className="text-sm font-bold text-rose-500 mb-2">{stage.step}</h4>
                  <p className="text-[10px] text-zinc-400 font-medium">{stage.desc}</p>
                </div>
                {idx < sdlc.length - 1 && (
                  <div className="hidden md:flex items-center">
                    <ArrowUpRight className="w-5 h-5 text-zinc-700" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 3. APPLICATION SECURITY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">APPSEC</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Application Security</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                We utilize static and dynamic code analysis to catch injection flaws and logic errors before they reach staging.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {appSec.map((sec, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <FileCode2 className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{sec.title}</h4>
                  <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTAINER SECURITY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:order-2">
              {containerSec.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Container className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">KUBERNETES</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Container Security</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                We enforce immutable infrastructure, scanning every container layer and deploying eBPF runtime defenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOUD SECURITY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">INFRASTRUCTURE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Cloud Security</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudSec.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <CloudCog className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPLIANCE AUTOMATION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">GOVERNANCE</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Compliance Automation</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                We automate evidence collection for audits, translating security postures into continuous compliance dashboards.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {compliance.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <CheckCircle className="w-4 h-4 text-rose-500 mt-1 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECURITY OPERATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">SECOPS</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Security Operations</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secOps.map((op, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <ShieldAlert className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{op.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{op.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECURITY METRICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">POSTURE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Security Metrics</h2>
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
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
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

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Secure Every Deployment</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Eliminate pipeline vulnerabilities and simplify compliance audits by partnering with our DevSecOps experts.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Audit Your Infrastructure
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
