"use client";

import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
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
      <FAQ faqs={faqs} />
      <CTA
        ctaTitle="Optimize Delivery Velocity with"
        ctaHighlight="Engineering Operations"
        ctaDesc="Align engineering strategy, DORA metrics, and agile governance for predictable enterprise execution."
        ctaBtnText="CONSULT OPS TEAM"
        backLink="/ecosystem/engineering-excellence"
      />
    </>
  );
}
