"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Terminal,
  Cpu,
  Workflow,
  Database,
  Layers,
  Sparkles,
  Link as LinkIcon,
  ShieldCheck,
  Server,
  Activity,
  GitBranch
} from "lucide-react";
import Link from "next/link";

export default function DevOpsToolchainPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const technologies = [
    "GitHub Actions", "Azure DevOps", "Jenkins", "Terraform", "ArgoCD", "Prometheus", "Grafana"
  ];

  const lifecycleFeatures = [
    "Continuous Integration builds testing codebase commits automatically",
    "Continuous Deployment pipelines pushing versions to cloud nodes",
    "Release Orchestration managers coordinating staging rollouts"
  ];

  const cicdFeatures = [
    "GitHub Actions workflows running automated test libraries",
    "Azure DevOps multi-stage pipelines coordinating environment builds",
    "Jenkins legacy system setups migrated to lightweight YAML configurations",
    "Reusable Actions workflows caching dependency layers for speed"
  ];

  const gitopsFeatures = [
    "ArgoCD deployment controllers coordinating cluster state setups",
    "Git-tracked manifest modifications validating resource changes",
    "Automatic rollback setups reverting invalid deployment actions",
    "Declarative configuration tracking matching local repositories"
  ];

  const infraFeatures = [
    "Terraform modular workspaces provisioning cloud infrastructure",
    "State file locks preventing parallel configuration overwrite errors",
    "Drift Detection checks verifying actual resource parameters in cloud"
  ];

  const obsFeatures = [
    "Prometheus telemetry scrapers monitoring pod resource stats",
    "Grafana dashboards visualising live latency and traffic metrics",
    "Alertmanager routing threshold alerts to pager tools"
  ];

  const secFeatures = [
    "SAST code scanners scanning pull requests for credentials",
    "Container vulnerability checkers auditing base operating systems",
    "Policy-as-code libraries blocking non-compliant build pushes"
  ];

  const faqs = [
    { q: "What is GitOps and how does it improve deployments?", a: "GitOps uses Git as the single source of truth for infrastructure and applications. Tools like ArgoCD continuously pull configurations from Git, ensuring clusters match the repo." },
    { q: "How do you secure credentials in GitHub Actions?", a: "We standardize on OpenID Connect (OIDC) to federate authentication, avoiding stored long-lived API keys entirely." },
    { q: "Can we migrate from Jenkins to GitHub Actions?", a: "Yes, we analyze your Jenkinsfiles and refactor them into modular, reusable GitHub Actions workflows, typically reducing build durations." },
    { q: "What is infrastructure drift?", a: "Drift happens when manual changes are made to cloud resources directly, bypassing IaC code. We run daily checks to alert on drifts." },
    { q: "How does Prometheus scrape cluster metrics?", a: "Prometheus scrapes raw metrics from HTTP endpoints exposed by applications and system agents, storing them in a time-series database." },
    { q: "Do you integrate static application security testing (SAST)?", a: "Yes, we inject SonarQube or Trivy scans directly into pull request checks, preventing vulnerabilities from merging." },
    { q: "What is policy-as-code?", a: "It is the practice of managing security policies in code files (e.g. Open Policy Agent). Build runners verify configurations against policies automatically." },
    { q: "How are Terraform state files secured?", a: "We store states in remote cloud buckets (e.g. S3, Azure Blob) with encryption enabled, and use database-backed locks to prevent parallel writes." },
    { q: "Can we configure custom Grafana alert channels?", a: "Yes, we route threshold breaches to Slack, MS Teams, PagerDuty, or customized webhook integrations." },
    { q: "How do we get started with the DevOps Toolchain?", a: "Click 'Consult DevOps Engineers' to schedule an audit of your delivery pipelines and plan a migration path." }
  ];

  const heroMetrics = [
    { value: "GitHub / Azure", label: "CI/CD Platforms" },
    { value: "ArgoCD", label: "GitOps Engines" },
    { value: "Terraform", label: "IaC & Workspaces" },
    { value: "Grafana", label: "Observability Stacks" }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="DevOps Engineering Unit"
        title={
          <>
            DevOps <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Toolchain
            </span>
          </>
        }
        subtitle="Build CI/CD pipelines, configure GitOps engines, write infrastructure code, deploy telemetry stacks, and automate policy validations."
        dotField={true}
        dotFieldProps={{
          dotRadius: 1.5,
          dotSpacing: 14,
          bulgeStrength: 67,
          glowRadius: 160,
          sparkle: false,
          waveAmplitude: 0,
          gradientFrom: "rgba(99, 102, 241, 0.35)",
          gradientTo: "rgba(79, 70, 229, 0.15)",
          glowColor: "#0c0a1f",
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "TECHNOLOGY STACK", href: "/ecosystem/technology-stack" },
          { label: "DEVOPS TOOLCHAIN" }
        ]}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
        >
          Consult DevOps Engineers
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </Hero>


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

      {/* 2. DEVOPS LIFECYCLE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">LIFECYCLE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">DevOps Lifecycle</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Optimize build pipelines from commit to deploy. Enforce quality checking, verify parameters, and route code configurations.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lifecycleFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Workflow className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CI/CD FACTORY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {cicdFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Cpu className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PIPELINES</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">CI/CD Factory</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Standardize builds pipelines. Create reusable workflows in GitHub Actions and manage environments inside Azure DevOps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GITOPS PLATFORM */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">RECONCILIATION</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">GitOps Platform</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Sync cluster status to Git files. Use ArgoCD loop controllers to apply configuration changes automatically.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gitopsFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <GitBranch className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INFRASTRUCTURE AUTOMATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {infraFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Server className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">INFRASTRUCTURE AS CODE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Infrastructure Automation</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Manage cloud assets in files. Use Terraform templates to provision networks, load balancers, and database servers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OBSERVABILITY STACK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">METRICS TELEMETRY</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Observability Stack</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Monitor system logs and resource statuses. Set up Prometheus metrics scrapers and Grafana analytical charts.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {obsFeatures.map((feat, idx) => (
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

      {/* 7. SECURITY AUTOMATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {secFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DEVSECOPS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Security Automation</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Embed verification rules inside pipeline actions. Scan repositories for secrets and check images for package vulnerabilities automatically.
              </p>
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
              Everything you need to know about our GitOps strategies, CI/CD pipeline automation layers, and remote Terraform state encryptions. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Deploy DevOps Pipelines</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with our DevOps engineering unit to build high-speed CI/CD pipelines and GitOps deployments.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Consult DevOps Engineers
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
