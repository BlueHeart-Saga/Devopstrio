"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  Terminal,
  Cpu,
  Activity,
  Lock,
  Eye,
  Layers,
  Sparkles,
  Workflow,
  ShieldCheck,
  Server
} from "lucide-react";
import Link from "next/link";

export default function DevOpsPlatformPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const heroMetrics = [
    { value: "Self-Service", label: "Dev Provisioning" },
    { value: "< 5m", label: "Build & Deploy Time" },
    { value: "GitOps", label: "Sync Engine" },
    { value: "100%", label: "PR SAST Scanned" }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const portalFeatures = [
    "Backstage Developer Portal for unified discovery",
    "Comprehensive Service Catalog tracking ownership and API bounds",
    "Self-service Engineering Templates creating compliant repo templates",
    "Internal Developer Platform (IDP) reducing operational complexity",
    "Standardized Golden Paths ensuring reliable security compliance"
  ];

  const cicdFeatures = [
    "GitHub Actions automated workflow runners",
    "Azure DevOps multi-stage delivery configuration templates",
    "GitLab CI runner integration and pipeline tracking",
    "Jenkins legacy system migration and modernization scripts",
    "Zero-downtime deployment automation loops"
  ];

  const iacFeatures = [
    "Terraform modular configuration structures for multi-provider clouds",
    "Pulumi code-based infrastructure definition templates",
    "Kubernetes cluster templates and provisioning scripts",
    "Helm chart registries managing versioned application sets",
    "GitOps pipelines syncing clusters using ArgoCD controllers"
  ];

  const obsFeatures = [
    "Prometheus metrics gathering across cloud nodes",
    "Grafana dashboard layouts visualizing container statistics",
    "Loki log aggregator indexing application console outputs",
    "OpenTelemetry telemetry instruments inside custom APIs",
    "Distributed tracing tracking transaction request pathways"
  ];

  const secFeatures = [
    "Continuous DevSecOps loops running security validations",
    "HashiCorp Vault parameters managing database credentials",
    "Vulnerability scanning checking container base layers",
    "Compliance automation checking setup metrics against audits"
  ];

  const faqs = [
    { q: "What is an Internal Developer Platform (IDP)?", a: "An IDP is a self-service system built by platform engineers that lets developers provision databases, preview environments, and deploy code without submitting tickets." },
    { q: "Does your portal support Backstage plugins?", a: "Yes, our custom Backstage portal template supports standard plugins including Kubernetes tracker, ArgoCD, and SonarQube dashboards." },
    { q: "How do you secure secrets inside the CI/CD pipeline?", a: "We leverage OIDC tokens to authorize GitHub Actions and GitLab runners directly with cloud credential managers, avoiding long-lived static keys." },
    { q: "What tools do you use for GitOps syncs?", a: "We standardize on ArgoCD and FluxCD to continuously monitor and pull declarative state changes from repositories directly into clusters." },
    { q: "Does the platform support hybrid cloud configurations?", a: "Yes, our IaC templates provision and route traffic cleanly between local datacenters and AWS/Azure regions." },
    { q: "How are cluster metrics aggregated?", a: "We configure Prometheus agents to scrape telemetry from Kubernetes nodes and push them to a central, high-performance Grafana workspace." },
    { q: "Does the platform run security checks on pull requests?", a: "Yes, every commit triggers automated SAST scans, dependency audits, and container base checking before merging." },
    { q: "Can we migrate our legacy Jenkins pipelines?", a: "Yes, we provide migration templates and automation scripts to port Jenkinsfile definitions to modern YAML systems." },
    { q: "What SLA tracking mechanisms are configured?", a: "Our observability layer maps SLO dashboards checking average request latency, error ratios, and system uptime." },
    { q: "How do we get started with the DevOps Platform?", a: "You can click 'Talk To Platform Engineers' to connect with our core team and evaluate configuration options." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="Platform Engineering Unit"
        title={
          <>
            Enterprise DevOps <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Platform
            </span>
          </>
        }
        subtitle="Unify developer tools, automate delivery pipelines, provision secure cloud nodes, and monitor services telemetry inside one platform."
        bgImage="/assets/ecosystem/sub-page-hero/Ecosystem_flatform&solutions/devops.png"
        stats={heroMetrics}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "PLATFORMS & SOLUTIONS", href: "/ecosystem/platforms-solutions" },
          { label: "DEVOPS PLATFORM" }
        ]}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
        >
          Talk To Platform Engineers
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </Hero>


      {/* 2. SELF-SERVICE DEVELOPER PORTAL */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DEVELOPER PORTAL</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Self-Service Portal</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Reduce developer cognitive load. Empower teams to create repository templates and configure environments without manual tickets.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portalFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Terminal className="w-4 h-4 text-rose-500" />
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
                    <Workflow className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PIPELINE RUNNERS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">CI/CD Factory</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Deploy clean automation steps, verify build syntax automatically, and release versions to cloud locations with zero downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INFRASTRUCTURE AUTOMATION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">IAC DESIGNS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Infrastructure Automation</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Deploy secure server blueprints using declarative templates, track settings in Git, and orchestrate kubernetes containers.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {iacFeatures.map((feat, idx) => (
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

      {/* 5. OBSERVABILITY PLATFORM */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {obsFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Activity className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TELEMETRY MONITOR</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Observability Platform</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Query runtime logs, trace request pathways across services, and plot latency graphs to identify resource bottlenecks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECURITY & COMPLIANCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">GOVERNANCE & SEC</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Security & Compliance</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Inject policy verification templates, manage configuration values inside vault boundaries, and audit pipeline steps automatically.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {secFeatures.map((feat, idx) => (
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

      {/* 7. PLATFORM ARCHITECTURE */}
      <section className="w-full py-28 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">BLUEPRINT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Platform Architecture</h2>
          </Reveal>

          <div className="max-w-3xl mx-auto bg-zinc-950/40 border border-zinc-900/80 rounded-3xl p-8 lg:p-12 relative overflow-hidden font-mono text-xs hover:border-rose-500/20 transition-all duration-500 shadow-2xl">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Developers</span>
                <span className="text-zinc-400">Trigger code push or system configurations request</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Backstage Portal</span>
                <span className="text-zinc-400">Template selection and service registrations lookup</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">CI/CD Factory</span>
                <span className="text-zinc-400">Vulnerability scanning and container build tests</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Kubernetes Platform</span>
                <span className="text-zinc-400">GitOps synchronization loop deployment checks</span>
              </div>
              <div className="text-center text-zinc-800 text-lg font-bold">↓</div>
              <div className="flex items-center justify-between p-5 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                <span className="font-bold text-rose-500 text-sm">Cloud Infrastructure</span>
                <span className="text-zinc-400">Provisioned resource grids and databases</span>
              </div>
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
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Accelerate Engineering Cycles</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with our system engineers to build unified Golden Paths.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Talk To Platform Engineers
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
