"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  TerminalSquare,
  Workflow,
  Container,
  Activity,
  ShieldCheck,
  GitBranch,
  Settings
} from "lucide-react";
import Link from "next/link";

export default function DevOpsAcceleratorPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const templates = [
    { title: "GitHub Actions", desc: "Reusable composite actions combining linting, testing, and Docker build steps into single line calls." },
    { title: "Azure DevOps", desc: "Standardized YAML templates utilizing Azure Pipelines to deploy seamlessly into AKS or App Services." },
    { title: "GitLab Pipelines", desc: "Modular .gitlab-ci.yml includes that enforce security scanning and caching for fast runner execution." }
  ];

  const kubernetes = [
    { title: "Helm Templates", desc: "Parameter-driven Helm charts that standardize how ingress, services, and deployments are structured." },
    { title: "Kustomize Overlays", desc: "Environment-specific patching strategies allowing Dev, Staging, and Prod configurations to remain DRY." },
    { title: "Operator Patterns", desc: "Custom Kubernetes controllers automating complex database backups and certificate renewals." }
  ];

  const gitOps = [
    "ArgoCD ApplicationSets automatically synchronizing cluster state with Git repository manifests",
    "FluxCD controllers handling multi-tenant tenant isolation and rapid drift reconciliation",
    "Automated progressive delivery via Flagger for safe Canary and Blue/Green rollouts"
  ];

  const observability = [
    { title: "Prometheus Operator", desc: "Pre-configured ServiceMonitors scraping application metrics automatically upon deployment." },
    { title: "Grafana Dashboards", desc: "Standardized RED (Rate, Errors, Duration) dashboards injected into the observability stack." },
    { title: "OpenTelemetry", desc: "Auto-instrumentation sidecars tracing distributed requests without code modification." }
  ];

  const devSecOps = [
    { step: "Code", desc: "SonarQube gates blocking PRs." },
    { step: "Build", desc: "Trivy scanning image layers." },
    { step: "Deploy", desc: "Kyverno enforcing cluster policies." },
    { step: "Run", desc: "Falco detecting runtime threats." }
  ];

  const metrics = [
    { value: "-75%", label: "Pipeline Build Time" },
    { value: "100%", label: "Deployment Consistency" },
    { value: "0", label: "Manual Release Steps" }
  ];

  const faqs = [
    { q: "What is the DevOps Delivery Accelerator?", a: "It is a suite of pre-written, highly optimized CI/CD pipeline templates and Kubernetes manifests that drastically reduce the time needed to set up software delivery pipelines." },
    { q: "Do these templates support monorepos?", a: "Yes, our GitHub Actions and GitLab templates include path-filtering logic to ensure only the changed microservices are built and deployed, saving massive amounts of compute time." },
    { q: "How do you handle secrets in CI/CD?", a: "We integrate with HashiCorp Vault or native cloud secret managers. Secrets are never hardcoded; they are fetched dynamically during the pipeline run using short-lived tokens (OIDC)." },
    { q: "What is GitOps?", a: "GitOps uses Git as the single source of truth for declarative infrastructure and applications. Tools like ArgoCD constantly monitor the Git repo and automatically pull changes into the Kubernetes cluster." },
    { q: "Can we use our existing Jenkins setup?", a: "While we highly recommend migrating to modern YAML-based CI (like GitHub Actions), we do provide Jenkins declarative pipeline libraries if migration isn't immediately feasible." },
    { q: "How do you achieve zero-downtime deployments?", a: "We configure Kubernetes deployments with readiness probes and rolling update strategies, or implement advanced Canary releases using Flagger and service meshes like Istio." },
    { q: "Are the Helm charts production-ready?", a: "Yes. Our base Helm charts include pre-configured pod disruption budgets, resource limits, anti-affinity rules, and horizontal pod autoscaler (HPA) settings." },
    { q: "Do the pipelines include security scanning?", a: "Every template includes required DevSecOps steps: SAST (Code), SCA (Dependencies), and Container Image scanning. Pipelines will fail if critical CVEs are found." },
    { q: "How are these accelerators maintained?", a: "Devopstrio maintains these templates centrally. When we release an update (e.g., a new security tool), your pipelines inherit the change automatically via centralized includes." },
    { q: "How do we integrate this into our workflow?", a: "Click 'Standardize Your Pipelines' below to schedule a pipeline architecture review with our DevOps specialists." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="PIPELINE IP"
        colorBends={true}
        colorBendsColors={["#f43f5e", "#ea580c", "#8b5cf6"]}
        title={
          <>
            DevOps <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Delivery Accelerator
            </span>
          </>
        }
        subtitle="Standardized CI/CD and Platform Engineering Framework. Stop reinventing the wheel for every new project. Use our centralized pipeline templates, GitOps blueprints, and Kubernetes manifests to automate software delivery safely and rapidly."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ACCELERATORS & FRAMEWORKS", href: "/ecosystem/accelerators-frameworks" },
          { label: "DEVOPS ACCELERATOR" }
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

      {/* 2. ENGINEERING TEMPLATES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CI/CD</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Engineering Templates</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates.map((template, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Workflow className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{template.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{template.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KUBERNETES FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CONTAINERS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Kubernetes Framework</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Our accelerator includes battle-tested Helm charts and Kustomize overlays designed for high-availability enterprise workloads.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {kubernetes.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Container className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. GITOPS FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4 lg:order-2">
              {gitOps.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <GitBranch className="w-4 h-4 text-rose-500 mt-1 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DELIVERY</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">GitOps Framework</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Eliminate manual kubectl interventions. We integrate ArgoCD to sync cluster state directly from your Git repositories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OBSERVABILITY STACK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TELEMETRY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Observability Stack</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {observability.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Activity className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DEVSECOPS INTEGRATION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SECURITY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">DevSecOps Integration</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {devSecOps.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[180px] text-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                  <ShieldCheck className="w-6 h-6 text-rose-500 mb-4" />
                  <h4 className="text-base font-bold text-white mb-2">{stage.step}</h4>
                  <p className="text-xs text-zinc-300 font-medium">{stage.desc}</p>
                </div>
                {idx < devSecOps.length - 1 && (
                  <div className="hidden md:flex items-center">
                    <ArrowUpRight className="w-5 h-5 text-zinc-700" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DELIVERY METRICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ROI</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Delivery Metrics</h2>
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
              Everything you need to know about the DevOps Accelerator. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Engineers <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Standardize Your Pipelines</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Eliminate pipeline drift and reduce CI/CD build times by adopting our centralized DevOps delivery frameworks.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Implement CI/CD Templates
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
