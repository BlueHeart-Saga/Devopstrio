"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Code2,
  Blocks,
  AppWindow,
  ServerCog,
  Network,
  ShieldCheck,
  RotateCw,
  Activity
} from "lucide-react";
import Link from "next/link";

export default function SoftwareEngineeringPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const architecture = [
    { title: "Microservices", desc: "Decomposing business domains into independently deployable, loosely coupled services." },
    { title: "Modular Monoliths", desc: "Starting simple with clear boundaries before committing to the complexity of microservices." },
    { title: "Event Driven Systems", desc: "Utilizing pub/sub patterns and event streaming for asynchronous, highly resilient architectures." },
    { title: "API First Design", desc: "Treating APIs as first-class products, starting with OpenAPI specifications before writing code." }
  ];

  const frontend = [
    { title: "React & Next.js", desc: "Building dynamic, SSR-optimized web experiences using React and the Next.js framework." },
    { title: "TypeScript", desc: "Enforcing strict type safety across the entire stack, eliminating runtime errors." },
    { title: "Design Systems", desc: "Constructing reusable component libraries that ensure visual consistency across all products." }
  ];

  const backend = [
    { title: "Node.js & FastAPI", desc: "Building high-throughput, non-blocking APIs using Node.js and Python's FastAPI." },
    { title: "Microservices", desc: "Scaling specific compute boundaries dynamically using containerized microservices." },
    { title: "Domain Driven Design", desc: "Aligning software structure intimately with the actual business logic and terminology." }
  ];

  const apiEcosystem = [
    { title: "REST Architectures", desc: "Standardizing resource-oriented communication protocols across internal services." },
    { title: "GraphQL Layer", desc: "Providing flexible, strongly-typed data fetching for complex frontend applications." },
    { title: "API Governance", desc: "Enforcing strict versioning, deprecation policies, and unified API gateway routing." }
  ];

  const governance = [
    "Rigorous Code Reviews enforcing clean code, testing standards, and security checks",
    "Architecture Decision Records (ADRs) documenting every major technical choice",
    "Technical Standards established globally through engineering community consensus"
  ];

  const lifecycle = [
    { step: "Design", desc: "Architecture reviews and threat modeling." },
    { step: "Build", desc: "Test-driven development and pair programming." },
    { step: "Test", desc: "Automated unit, integration, and UI testing." },
    { step: "Deploy", desc: "Canary releases and GitOps synchronization." },
    { step: "Operate", desc: "Observability and proactive incident response." },
    { step: "Improve", desc: "Continuous refactoring and tech debt removal." }
  ];

  const metrics = [
    { value: "<2h", label: "Lead Time for Changes" },
    { value: "Multiple/Day", label: "Deployment Frequency" },
    { value: "<1%", label: "Change Failure Rate" }
  ];

  const faqs = [
    { q: "Do you exclusively use Microservices?", a: "No, we advocate for 'Modular Monoliths' for new projects. We only extract microservices when specific domains require independent scaling or deployment lifecycles." },
    { q: "What is your stance on serverless architecture?", a: "We heavily utilize serverless functions for event-driven glue code and background tasks to minimize operational overhead." },
    { q: "How do you handle API versioning?", a: "We enforce strict semantic versioning at the API gateway layer and require backward compatibility for all minor updates." },
    { q: "Why do you mandate TypeScript?", a: "TypeScript significantly reduces runtime errors, improves IDE autocompletion, and makes large-scale refactoring much safer." },
    { q: "How are architectural decisions made?", a: "Major changes go through an RFC (Request for Comments) process, allowing senior engineers to review and debate before implementation." },
    { q: "What is Domain Driven Design (DDD)?", a: "DDD is an approach where the software architecture is modeled precisely after the business domain, using ubiquitous language shared by developers and business experts." },
    { q: "How do you manage technical debt?", a: "Product teams dedicate roughly 20% of their sprint capacity specifically to refactoring code and paying down technical debt." },
    { q: "Do you use GraphQL or REST?", a: "We use both. REST for system-to-system communication, and GraphQL as an orchestration layer for front-end clients." },
    { q: "How do you ensure code quality?", a: "Through automated static analysis, mandatory peer code reviews, and strict minimum test coverage thresholds enforced in CI/CD." },
    { q: "How can we collaborate on software architecture?", a: "Click 'Build Better Software' below to schedule an architecture review session with our technical leads." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="SOFTWARE ARCHITECTURE"
        lightfall={true}
        lightfallColors={["#f43f5e", "#a855f7", "#3b82f6"]}
        title={
          <>
            Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Engineering Excellence
            </span>
          </>
        }
        subtitle="Building Enterprise Applications With Modern Architecture Principles. We engineer scalable platforms using decoupled architectures, Domain-Driven Design, and API-first methodologies to ensure long-term agility and resilience."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ENGINEERING EXCELLENCE", href: "/ecosystem/engineering-excellence" },
          { label: "SOFTWARE ENGINEERING" }
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

      {/* 2. ENGINEERING ARCHITECTURE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FOUNDATION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Engineering Architecture</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecture.map((arch, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Blocks className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{arch.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{arch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FRONTEND ENGINEERING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CLIENT SIDE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Frontend Engineering</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                We build highly interactive, accessible, and performant user interfaces driven by robust design systems.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {frontend.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <AppWindow className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKEND ENGINEERING */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:order-2">
              {backend.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <ServerCog className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SERVER SIDE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Backend Engineering</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Our backend systems map directly to business logic, ensuring they remain maintainable as complexity scales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. API ECOSYSTEM */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CONNECTIVITY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">API Ecosystem</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {apiEcosystem.map((api, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Network className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{api.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{api.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ARCHITECTURE GOVERNANCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">STANDARDS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Architecture Governance</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                We enforce technical alignment across teams without stifling individual developer autonomy.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {governance.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOFTWARE LIFECYCLE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DELIVERY PIPELINE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Software Lifecycle</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            {lifecycle.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[140px] text-center">
                  <div className="w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-4 text-rose-500 font-mono font-bold text-lg">
                    {idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{stage.step}</h4>
                  <p className="text-[10px] text-zinc-500 font-medium">{stage.desc}</p>
                </div>
                {idx < lifecycle.length - 1 && (
                  <div className="hidden md:flex items-center pt-8">
                    <ArrowUpRight className="w-4 h-4 text-zinc-700" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SOFTWARE DELIVERY METRICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DORA METRICS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Delivery Performance</h2>
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
              Everything you need to know about Software Engineering. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Build Better Software</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with our architecture guild to audit your current stack and design a resilient future state.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Consult Our Architects
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
