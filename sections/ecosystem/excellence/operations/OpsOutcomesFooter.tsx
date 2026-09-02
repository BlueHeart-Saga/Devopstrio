"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Plus, Minus, Repeat, ShieldCheck, Users, Zap, Bot, BarChart3, LineChart, Heart } from "lucide-react";
import Link from "next/link";

export function OpsOutcomesFooter() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const techStack = [
    { category: "Agile & Delivery Management", items: ["Jira Software", "Azure Boards", "Linear", "Monday.com"] },
    { category: "Developer Portals & DevEx", items: ["Spotify Backstage", "Port", "DX Platform", "LinearB"] },
    { category: "Release & Feature Flags", items: ["LaunchDarkly", "Split.io", "Unleash", "Argo Rollouts"] },
    { category: "Engineering Analytics", items: ["Faros.ai", "Jellyfish", "Swarmia", "Sleuth"] },
    { category: "Governance & Compliance", items: ["Confluence", "Notion", "SonarQube", "OPA Gatekeeper"] }
  ];

  const businessOutcomes = [
    { title: "4x", metric: "Faster Delivery Velocity", desc: "Accelerate feature releases through standardized pipelines and automated change governance." },
    { title: "Elite", metric: "DORA Performance Tier", desc: "Elevate deployment frequency and lead time for changes to industry elite benchmarks." },
    { title: "85%", metric: "Reduction in Release Friction", desc: "Eliminate manual Change Advisory Board (CAB) delays with automated compliance policies." },
    { title: "60%", metric: "Faster Developer Onboarding", desc: "Get engineers contributing productive code on day one via self-service developer portals." },
    { title: "Zero", metric: "Governance Blindspots", desc: "Complete visibility into DORA metrics, lead times, code quality, and team throughput." },
    { title: "Optimized", metric: "Resource Capacity", desc: "Data-backed workload management preventing developer burnout and high turn-over." }
  ];

  const whyChooseUs = [
    { title: "DORA & Engineering Analytics Experts", icon: BarChart3 },
    { title: "DevEx & Developer Flow Optimization", icon: Heart },
    { title: "Automated Policy-as-Code Governance", icon: ShieldCheck },
    { title: "Agile & SAFe Enterprise Delivery", icon: Repeat },
    { title: "Autonomous Pod Structuring", icon: Users },
    { title: "Zero-Downtime Release Management", icon: Zap },
    { title: "Ruthless Operational Automation", icon: Bot },
    { title: "Predictive Capacity Forecasting", icon: LineChart }
  ];

  const faqs = [
    { q: "What is Engineering Operations?", a: "Engineering Operations is the discipline of managing software delivery, governance frameworks, developer productivity (DevEx), and team operating models to ensure consistent enterprise delivery velocity." },
    { q: "How are DORA metrics measured?", a: "DORA metrics (Deployment Frequency, Lead Time for Changes, MTTR, Change Failure Rate) are tracked automatically by connecting version control, CI/CD pipelines, and incident management tools." },
    { q: "What is Developer Experience (DevEx) and why does it matter?", a: "DevEx measures developer satisfaction, cognitive load, and friction. High DevEx leads to faster delivery, lower defect rates, and significantly higher retention." },
    { q: "How do you automate Change Advisory Boards (CAB)?", a: "By replacing slow manual meetings with automated pipeline guardrails that verify test coverage, security scans, and code approvals automatically." },
    { q: "Can Engineering Operations integrate with existing Jira / GitHub setups?", a: "Yes. Our frameworks integrate seamlessly with Jira, Azure DevOps, GitHub, GitLab, and developer analytics platforms like Jellyfish or Faros.ai." },
    { q: "How does Engineering Operations support remote or hybrid teams?", a: "By establishing asynchronous documentation standards, self-service portals, and clear metrics that evaluate outcomes rather than hours worked." },
    { q: "What is an autonomous pod structure?", a: "An autonomous pod is a cross-functional engineering squad (PM, Frontend, Backend, SRE, QA) empowered with end-to-end ownership of a specific product domain." },
    { q: "How do we get started with Devopstrio Engineering Operations?", a: "Schedule an Engineering Operations Audit. We will analyze your current SDLC, delivery velocity, and DevEx bottlenecks to present an actionable modernization roadmap." }
  ];

  return (
    <>
      {/* 10. TECHNOLOGY STACK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ECOSYSTEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Engineering Operations Tech Stack
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-2xl">
                <h4 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-rose-500 mb-6 border-b border-zinc-900 pb-4">
                  {stack.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-zinc-900 text-zinc-300 rounded-md text-xs font-medium border border-zinc-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. BUSINESS OUTCOMES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">IMPACT & ROI</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Measurable Business Outcomes
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessOutcomes.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/80 border border-zinc-900 rounded-3xl relative overflow-hidden group hover:border-rose-500/40 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl group-hover:bg-rose-500/10 transition-colors pointer-events-none" />
                <span className="text-xs font-mono text-rose-500 font-bold uppercase tracking-widest block mb-2">{item.title}</span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-4">{item.metric}</h3>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. WHY DEVOPSTRIO OPERATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ADVANTAGE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Why Devopstrio Engineering Operations
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/50 hover:bg-zinc-900 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-rose-500/10 group-hover:border-rose-500/30 transition-all">
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-rose-500 transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60 z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Questions about <span className="text-white font-bold bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 bg-clip-text text-transparent">Engineering Operations</span>.
            </h2>
          </Reveal>

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
                  <div className={`mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl flex flex-col gap-4 ${isOpen ? "block animate-fadeIn" : "hidden"}`}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. CTA */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.035),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Scale Engineering Operational Excellence with Devopstrio</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with Devopstrio to standardize delivery governance, optimize developer experience, and drive elite DORA metric performance.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Schedule an Operations Audit
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-white/5 transition-all duration-300"
            >
              Talk to an Operations Architect
              <div className="w-7 h-7 rounded-full bg-rose-500 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
