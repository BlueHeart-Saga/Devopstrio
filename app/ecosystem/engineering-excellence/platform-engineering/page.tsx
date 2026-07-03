"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  Settings2,
  Box,
  Rocket,
  Layers,
  ArrowDownCircle,
  Clock,
  Briefcase
} from "lucide-react";
import Link from "next/link";

export default function PlatformEngineeringPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const idp = [
    { title: "Backstage Integration", desc: "Consolidating all developer tooling, documentation, and APIs into a single pane of glass using Spotify's Backstage framework." },
    { title: "Developer Portal", desc: "A unified dashboard where developers can view their active PRs, CI/CD statuses, and active cloud environments." },
    { title: "Service Catalog", desc: "A searchable registry of all microservices, outlining ownership, dependencies, and health metrics." }
  ];

  const selfService = [
    { title: "Cloud Provisioning", desc: "Allowing developers to click a button and instantly spin up namespace environments without filing IT tickets." },
    { title: "Golden Paths", desc: "Pre-approved, heavily automated templates for building new services that guarantee security compliance out of the box." },
    { title: "Software Templates", desc: "Scaffolding repositories with CI/CD YAML files, linter rules, and boilerplate code already injected." }
  ];

  const devExperience = [
    { title: "Developer Onboarding", desc: "Reducing the time for a new engineer to push their first commit to production from weeks to days." },
    { title: "Engineering Workflows", desc: "Standardizing CLI tools and local development environments to prevent 'it works on my machine' errors." },
    { title: "Automation", desc: "Abstracting away complex Kubernetes configurations and network plumbing." }
  ];

  const components = [
    { title: "CI/CD Factory", desc: "Centralized pipeline templates managing testing and deployment rollouts." },
    { title: "Observability", desc: "Pre-configured telemetry and logging injected into every service." },
    { title: "Security Layers", desc: "Automated vulnerability scanning and secrets rotation built into the platform base." },
    { title: "Cloud Infrastructure", desc: "Multi-tenant Kubernetes clusters segmented securely via namespace isolation." }
  ];

  const productivity = [
    "Deployment Automation removing manual gatekeepers and wait times",
    "Infrastructure Automation managing state changes declaratively via GitOps",
    "Elimination of repetitive manual configuration for every new project"
  ];

  const architectureFlow = [
    { step: "Developer", desc: "Writes code & pushes to repo." },
    { step: "Platform", desc: "Triggers tests & checks policies." },
    { step: "Cloud", desc: "Provisions compute & networking." },
    { step: "Operations", desc: "Monitors telemetry & scaling." }
  ];

  const metrics = [
    { value: "-85%", label: "Wait Time for Infrastructure" },
    { value: "<2 Days", label: "New Engineer Onboarding" },
    { value: "0", label: "Manual Jira Tickets for Setup" }
  ];

  const faqs = [
    { q: "What is an Internal Developer Platform (IDP)?", a: "An IDP is a self-service layer built over your existing infrastructure that abstracts away complexity, allowing developers to deploy code without deep ops knowledge." },
    { q: "What are 'Golden Paths'?", a: "Golden Paths are standardized, supported ways to build and deploy software in an organization. If a developer uses a Golden Path, security and pipeline configuration are handled automatically." },
    { q: "Why use Backstage?", a: "Backstage organizes the chaos of microservices into a central catalog, linking repositories, documentation, and ownership metadata in one place." },
    { q: "Does platform engineering replace DevOps?", a: "No, platform engineering evolves DevOps. Instead of DevOps engineers manually running pipelines for developers, they build self-service products that developers use." },
    { q: "How do you measure developer experience (DevEx)?", a: "We track metrics like time-to-first-commit for new hires, lead time for changes, and the number of support tickets filed to the infrastructure team." },
    { q: "Can we use our existing CI/CD tools?", a: "Yes, our platform implementations wrap around your existing tools (e.g., GitHub Actions, Jenkins) to provide a unified interface without forcing a migration." },
    { q: "How do you handle cloud costs in a self-service model?", a: "We implement Time-to-Live (TTL) policies on developer sandboxes, automatically shutting them down after hours, and display cost visibility directly in the portal." },
    { q: "Is Platform Engineering only for large enterprises?", a: "While it originated in massive tech companies, any engineering organization with more than 30 developers benefits from standardizing workflows and reducing onboarding friction." },
    { q: "Who owns the software running on the platform?", a: "The development teams own their application code (You Build It, You Run It), while the Platform team owns the underlying infrastructure and tooling reliability." },
    { q: "How do we get started with Platform Engineering?", a: "Click 'Explore Platform Engineering' to schedule a consultation with our platform architects." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        <div className="absolute inset-0 z-0">
          <img src="/assets/ecosystem/sub-page-hero/ecosystem_Engineering_excellence/Platform_engineering.png" alt="Platform Engineering background" className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-20">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Settings2 className="w-3.5 h-3.5" />
              DEVELOPER PRODUCTIVITY
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Platform Engineering
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-6">
              Accelerating Developer Productivity Through Internal Platforms.
            </p>
            <p className="text-zinc-200 text-sm md:text-base lg:text-lg leading-relaxed font-medium">
              We treat the developer as our customer, building self-service Internal Developer Platforms (IDPs) that eliminate friction and reduce operational bottlenecks.
            </p>
          </Reveal>
          
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Consult Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. INTERNAL DEVELOPER PLATFORM */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PORTALS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Internal Developer Platform</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {idp.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Box className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SELF-SERVICE INFRASTRUCTURE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">AUTONOMY</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Self-Service Infrastructure</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                We replace IT support tickets with automated Golden Paths, allowing developers to provision securely via self-service templates.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {selfService.map((service, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Rocket className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEVELOPER EXPERIENCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DEVEX</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Developer Experience</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {devExperience.map((exp, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{exp.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PLATFORM COMPONENTS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:order-2">
              {components.map((comp, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                  <h4 className="text-base font-bold text-white mb-2">{comp.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{comp.desc}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PILLARS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Platform Components</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Our platforms are assembled from core pillars that handle the heavy lifting of infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING PRODUCTIVITY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SPEED</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Engineering Productivity</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Removing manual toil from the engineering lifecycle allows teams to focus exclusively on business logic.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {productivity.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PLATFORM ARCHITECTURE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FLOW</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Platform Architecture</h2>
          </Reveal>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4">
            {architectureFlow.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[160px] text-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl">
                  <h4 className="text-base font-bold text-rose-500 mb-2">{stage.step}</h4>
                  <p className="text-xs text-zinc-300 font-medium">{stage.desc}</p>
                </div>
                {idx < architectureFlow.length - 1 && (
                  <div className="hidden md:flex items-center">
                    <ArrowUpRight className="w-5 h-5 text-zinc-700" />
                  </div>
                )}
                {idx < architectureFlow.length - 1 && (
                  <div className="flex md:hidden items-center">
                    <ArrowDownCircle className="w-5 h-5 text-zinc-700" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRODUCTIVITY METRICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ROI</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Productivity Metrics</h2>
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

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Explore Platform Engineering</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Eliminate developer bottlenecks by partnering with us to build an Internal Developer Platform tailored to your tech stack.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Explore Platform Engineering
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
