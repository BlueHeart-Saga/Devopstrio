"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { AlertCircle } from "lucide-react";

interface CapabilityProblemProps {
  serviceSlug: string;
  capabilityTitle: string;
  overrideTitle?: string;
  overrideSubtitle?: string;
  overridePoints?: string[];
}

const problemData: Record<string, { title: string; subtitle: string; points: string[]; image: string }> = {
  "ai-data-innovation": {
    title: "The AI Production Gap",
    subtitle: "Why 85% of enterprise AI initiatives fail to scale beyond localized sandbox environments.",
    points: [
      "Fragmented, localized models that fail to integrate into real-time transactional systems.",
      "High compute latency during model inference causing performance drops and customer churn.",
      "Absence of continuous evaluation, leading to rapid model decay and operational drift."
    ],
    image: "/assets/Services-Page/capability/banner/aidatainnovation.png"
  },
  "cloud-services": {
    title: "Escalating Cloud Waste & Outages",
    subtitle: "How over-provisioned architectures and monolithic configurations drain enterprise profits.",
    points: [
      "Over-allocated virtual hardware driving uncontrolled cloud spend and billing anomalies.",
      "Lack of geo-redundant configurations resulting in catastrophic system downtime.",
      "Slow, manual response mechanisms to traffic peaks, leading to platform unresponsive states."
    ],
    image: "/assets/Services-Page/capability/banner/cloudservices.png"
  },
  "devops-automation": {
    title: "Manual Delivery & Release Chaos",
    subtitle: "Tangled deployment pipelines resulting in sluggish release cycles and regression bugs.",
    points: [
      "Inconsistent environments causing configuration drift between development and production.",
      "Absence of automated validation loops, causing critical defects to reach live environments.",
      "Slow, manual server builds causing severe deployment bottlenecks and delays."
    ],
    image: "/assets/Services-Page/capability/banner/devopsautomation.png"
  },
  "cybersecurity": {
    title: "Vulnerable Assets & Compliance Risks",
    subtitle: "Securing corporate assets and consumer databases against modern zero-day attacks.",
    points: [
      "Undetected package vulnerabilities deployed to production without validation.",
      "Non-compliance with GDPR, HIPAA, or FSQS exposing the firm to heavy legal penalties.",
      "Unmanaged access rights allowing privilege escalation and internal data leakage."
    ],
    image: "/assets/Services-Page/capability/banner/Cybersecurity.png"
  },
  "software-development": {
    title: "Monolithic Software Sprawl & Tech Debt",
    subtitle: "How legacy structures and tightly coupled modules block business innovation.",
    points: [
      "Tightly coupled logic preventing independent feature deployment and upgrades.",
      "Slow, unoptimized page speeds degrading overall search rankings and UX.",
      "High overhead cost of maintaining legacy code compared to microservices."
    ],
    image: "/assets/Services-Page/capability/banner/Softwaredevelopment.png"
  },
  "digital-transformation": {
    title: "Operational Friction & Legacy Lag",
    subtitle: "Bridging the gap between legacy paper workflows and automated cloud systems.",
    points: [
      "Siloed communication and paper-heavy approvals slowing transaction speeds.",
      "Outdated database engines incapable of supporting modern API requirements.",
      "Siloed systems leading to duplicate data processing and operations delays."
    ],
    image: "/assets/Services-Page/capability/banner/Digital_trasfrormation.png"
  },
  "data-engineering": {
    title: "Siloed Data Clusters & High Latency",
    subtitle: "Transforming raw corporate databases into actionable, real-time analytics.",
    points: [
      "Slow, batch-oriented data processing delaying strategic operational reports.",
      "No unified schema registry, creating conflicting definitions of core business KPIs.",
      "High cloud database query costs due to unindexed, unstructured data lakes."
    ],
    image: "/assets/Services-Page/capability/banner/Data_Engineering.png"
  },
  "managed-services": {
    title: "Operational Blindspots & Slow Incidents",
    subtitle: "Managing platform complexity without 24/7 dedicated support teams.",
    points: [
      "Reactive issue response due to lack of advanced telemetry dashboard alerts.",
      "High MTTR (Mean Time to Resolution) leading to system downtime.",
      "Inconsistent system backups and failover checks exposing data to loss."
    ],
    image: "/assets/Services-Page/capability/banner/Managed_Services.png"
  },
  "qa-testing": {
    title: "Post-Release Regressions & Bugs",
    subtitle: "Protecting overall user experience with automated, end-to-end quality validation.",
    points: [
      "Inadequate test coverage leading to critical service crashes in live environments.",
      "Slow manual testing cycles delaying product release windows.",
      "Inconsistent layout validation causing brand damage on mobile browsers."
    ],
    image: "/assets/Services-Page/capability/banner/QA&Testing.png"
  },
  "it-consulting": {
    title: "Architecture Bloat & Stack Overlap",
    subtitle: "Aligning software deployment roadmaps with clear corporate strategies.",
    points: [
      "Redundant SaaS licenses and server expenses across disconnected teams.",
      "Vague cloud transition strategies causing delays in transformation cycles.",
      "Complex custom-coded structures where a simpler SaaS product suffices."
    ],
    image: "/assets/Services-Page/capability/banner/IT_Consulting.png"
  }
};

export function CapabilityProblem({ 
  serviceSlug, 
  capabilityTitle,
  overrideTitle,
  overrideSubtitle,
  overridePoints
}: CapabilityProblemProps) {
  const data = problemData[serviceSlug] || problemData["ai-data-innovation"];
  const displayTitle = overrideTitle || data.title;
  const displaySubtitle = overrideSubtitle || data.subtitle;
  const displayPoints = overridePoints || data.points;

  return (
    <section id="business-problem" className="w-full bg-[#030303] text-white relative overflow-hidden py-16 border-b border-zinc-900/60">
      
      {/* Background glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[40%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center">
        
        {/* 1. Centered Heading Block */}
        <div className="max-w-2xl text-center mb-10">
          <Reveal delay={0.05}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans text-center">
              Solving <span className="text-rose-500 font-semibold">{displayTitle}</span>
            </h2>
          </Reveal>
        </div>

        {/* 2. Responsive Poster Card with 4-Directional Black Edge Fades */}
        <Reveal delay={0.15} className="w-full mb-10 max-w-5xl mx-auto relative">
          
          <div className="relative w-full overflow-hidden z-10 flex justify-center items-center">
            {/* The Image */}
            <img
              src={data.image}
              alt={displayTitle}
              className="w-full h-auto object-contain brightness-[0.95] contrast-[1.02]"
            />

            {/* Edge Fades: Top, Bottom, Left, Right into #030303 background */}
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none z-20" />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none z-20" />
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#030303] to-transparent pointer-events-none z-20" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#030303] to-transparent pointer-events-none z-20" />
          </div>
        </Reveal>

        {/* 3. Problem Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 w-full border-t border-zinc-900/40 pt-10">
          {displayPoints.map((point, idx) => (
            <Reveal key={idx} delay={0.2 + idx * 0.05}>
              <div className="bg-zinc-950/20 border border-zinc-900/60 rounded-xl p-5 hover:border-zinc-800 hover:bg-zinc-900/5 transition-all duration-300 group relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />
                
                <div className="w-7 h-7 rounded bg-rose-950/10 border border-rose-900/10 flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-950/20 group-hover:border-rose-500/20 transition-colors">
                  <AlertCircle size={12} />
                </div>
                
                <p className="text-xs text-zinc-350 leading-relaxed font-semibold text-left">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
