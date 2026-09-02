"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Plus, Minus, Layers, Heart, ShieldCheck, Cloud, Bot, BarChart3, Terminal, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function PlatformOutcomesFooter() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const techStack = [
    { category: "Developer Portals", items: ["Spotify Backstage", "Port", "Cortex"] },
    { category: "IaC & Automation", items: ["Terraform", "OpenTofu", "Bicep", "Pulumi", "Ansible"] },
    { category: "GitOps & Deployment", items: ["ArgoCD", "Flux", "GitHub Actions", "Azure DevOps"] },
    { category: "Kubernetes & Containers", items: ["AKS", "EKS", "OpenShift", "Helm", "Kustomize"] },
    { category: "Observability", items: ["Prometheus", "Grafana", "Datadog", "OpenTelemetry"] },
    { category: "Security & Policy", items: ["Open Policy Agent (OPA)", "HashiCorp Vault", "Trivy"] }
  ];

  const businessOutcomes = [
    { title: "80%", metric: "Faster Developer Onboarding", desc: "Get new engineers committing production code on day one with golden path templates." },
    { title: "10x", metric: "Deployment Frequency", desc: "Empower teams to release features independently via automated self-service pipelines." },
    { title: "100%", metric: "Policy Compliance", desc: "Automate security and compliance checks early in the development lifecycle." },
    { title: "Lower", metric: "Cloud Infrastructure Costs", desc: "Eliminate orphaned cloud resources with automated environment lifecycle management." },
    { title: "Enhanced", metric: "Developer Satisfaction", desc: "Drastically reduce developer burnout by removing ticket-based infrastructure bottlenecks." },
    { title: "Unified", metric: "Software Visibility", desc: "Single pane of glass for all microservices, APIs, owner metadata, and system health." }
  ];

  const whyChooseUs = [
    { title: "Backstage IDP Specialists", icon: Layers },
    { title: "DevEx Centric Design", icon: Heart },
    { title: "Policy as Code Security", icon: ShieldCheck },
    { title: "Multi-Cloud Native Foundations", icon: Cloud },
    { title: "GitOps Continuous Delivery", icon: Bot },
    { title: "Full-Stack Telemetry & Tracing", icon: BarChart3 },
    { title: "Automated IaC Workflows", icon: Terminal },
    { title: "Enterprise Scalability", icon: CheckCircle2 }
  ];

  const faqs = [
    { q: "What is Platform Engineering?", a: "Platform Engineering is the discipline of designing and building toolchains and workflows that enable self-service capabilities for software engineering organizations in the cloud-native era." },
    { q: "How is Platform Engineering different from DevOps?", a: "While DevOps focuses on culture and automated pipelines, Platform Engineering builds the actual internal platform (IDP) as a product that developers use to self-serve infrastructure and deployments." },
    { q: "What is an Internal Developer Platform (IDP)?", a: "An IDP is a centralized portal (e.g. Spotify Backstage) where developers can access software catalogs, create new microservices from templates, view environment statuses, and manage deployments." },
    { q: "Why use Spotify Backstage?", a: "Backstage is the industry-standard open-source platform for building IDPs. It provides a unified developer portal, centralized service catalog, and rich plugin ecosystem." },
    { q: "How do you improve Developer Experience (DevEx)?", a: "By eliminating manual ticketing processes for cloud infrastructure, standardizing CI/CD pipelines, and providing self-service provisioning." },
    { q: "Can you build platform foundations on Azure or AWS?", a: "Yes. We design cloud landing zones and IaC automation modules natively on Microsoft Azure, AWS, and Google Cloud." },
    { q: "How do you handle security and governance?", a: "We embed Policy-as-Code (OPA, Azure Policy) directly into the platform pipelines so guardrails are enforced automatically." },
    { q: "How do we get started with Platform Engineering?", a: "Schedule a Platform Assessment with our team. We'll audit your current developer toolchains, deployment friction, and build a tailored IDP roadmap." }
  ];

  return (
    <>
      {/* 10. TECHNOLOGY STACK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ECOSYSTEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Platform Engineering Tech Stack
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

      {/* 12. WHY DEVOPSTRIO PLATFORM ENGINEERING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ADVANTAGE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Why Devopstrio Platform Engineering
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
              Questions about <span className="text-white font-bold bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 bg-clip-text text-transparent">Platform Engineering</span>.
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
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Accelerate Software Delivery with Devopstrio</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with Devopstrio to build a modern Internal Developer Platform, automate infrastructure, and empower engineering teams to deliver software with confidence.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Schedule a Platform Assessment
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-white/5 transition-all duration-300"
            >
              Talk to a Platform Architect
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
