"use client";

import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
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
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-sky-400 mb-3 block">ECOSYSTEM</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Platform Engineering Tech Stack
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-2xl">
                <h4 className="text-sm font-mono font-bold tracking-[0.2em] uppercase text-sky-400 mb-6 border-b border-zinc-900 pb-4">
                  {stack.category}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {stack.items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-zinc-900 text-zinc-200 rounded-md text-xs md:text-sm font-medium border border-zinc-800">
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
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-sky-400 mb-3 block">IMPACT & ROI</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Measurable Business Outcomes
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessOutcomes.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/80 border border-zinc-900 rounded-3xl relative overflow-hidden group hover:border-sky-500/40 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors pointer-events-none" />
                <span className="text-xs md:text-sm font-mono text-sky-400 font-bold uppercase tracking-widest block mb-2">{item.title}</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">{item.metric}</h3>
                <p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. WHY DEVOPSTRIO PLATFORM ENGINEERING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-sky-400 mb-3 block">ADVANTAGE</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Why Devopstrio Platform Engineering
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-sky-500/50 hover:bg-zinc-900 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-all">
                    <Icon className="w-6 h-6 text-zinc-300 group-hover:text-sky-400 transition-colors" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <FAQ faqs={faqs} />
      <CTA
        ctaTitle="Empower Developer Velocity with"
        ctaHighlight="Internal Developer Platforms"
        ctaDesc="Automate provisioning, golden paths, and self-service cloud infrastructure to reduce cognitive load and boost developer throughput."
        ctaBtnText="REQUEST PLATFORM BLUEPRINT"
        backLink="/ecosystem/engineering-excellence"
      />
    </>
  );
}
