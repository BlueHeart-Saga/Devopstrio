"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CapabilityProblemProps {
  serviceSlug: string;
  capabilityTitle: string;
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
    image: "/assets/services/problem-ai.png"
  },
  "cloud-services": {
    title: "Escalating Cloud Waste & Outages",
    subtitle: "How over-provisioned architectures and monolithic configurations drain enterprise profits.",
    points: [
      "Over-allocated virtual hardware driving uncontrolled cloud spend and billing anomalies.",
      "Lack of geo-redundant configurations resulting in catastrophic system downtime.",
      "Slow, manual response mechanisms to traffic peaks, leading to platform unresponsive states."
    ],
    image: "/assets/services/problem-cloud.png"
  },
  "devops-automation": {
    title: "Manual Delivery & Release Chaos",
    subtitle: "Tangled deployment pipelines resulting in sluggish release cycles and regression bugs.",
    points: [
      "Inconsistent environments causing configuration drift between development and production.",
      "Absence of automated validation loops, causing critical defects to reach live environments.",
      "Slow, manual server builds causing severe deployment bottlenecks and delays."
    ],
    image: "/assets/services/problem-devops.png"
  },
  "cybersecurity": {
    title: "Vulnerable Assets & Compliance Risks",
    subtitle: "Securing corporate assets and consumer databases against modern zero-day attacks.",
    points: [
      "Undetected package vulnerabilities deployed to production without validation.",
      "Non-compliance with GDPR, HIPAA, or FSQS exposing the firm to heavy legal penalties.",
      "Unmanaged access rights allowing privilege escalation and internal data leakage."
    ],
    image: "/assets/services/problem-cybersecurity.png"
  },
  "software-development": {
    title: "Monolithic Software Sprawl & Tech Debt",
    subtitle: "How legacy structures and tightly coupled modules block business innovation.",
    points: [
      "Tightly coupled logic preventing independent feature deployment and upgrades.",
      "Slow, unoptimized page speeds degrading overall search rankings and UX.",
      "High overhead cost of maintaining legacy code compared to microservices."
    ],
    image: "/assets/services/problem-software.png"
  },
  "digital-transformation": {
    title: "Operational Friction & Legacy Lag",
    subtitle: "Bridging the gap between legacy paper workflows and automated cloud systems.",
    points: [
      "Siloed communication and paper-heavy approvals slowing transaction speeds.",
      "Outdated database engines incapable of supporting modern API requirements.",
      "Siloed systems leading to duplicate data processing and operations delays."
    ],
    image: "/assets/services/problem-transformation.png"
  },
  "data-engineering": {
    title: "Siloed Data Clusters & High Latency",
    subtitle: "Transforming raw corporate databases into actionable, real-time analytics.",
    points: [
      "Slow, batch-oriented data processing delaying strategic operational reports.",
      "No unified schema registry, creating conflicting definitions of core business KPIs.",
      "High cloud database query costs due to unindexed, unstructured data lakes."
    ],
    image: "/assets/services/problem-data.png"
  },
  "managed-services": {
    title: "Operational Blindspots & Slow Incidents",
    subtitle: "Managing platform complexity without 24/7 dedicated support teams.",
    points: [
      "Reactive issue response due to lack of advanced telemetry dashboard alerts.",
      "High MTTR (Mean Time to Resolution) leading to system downtime.",
      "Inconsistent system backups and failover checks exposing data to loss."
    ],
    image: "/assets/services/problem-managed.png"
  },
  "qa-testing": {
    title: "Post-Release Regressions & Bugs",
    subtitle: "Protecting overall user experience with automated, end-to-end quality validation.",
    points: [
      "Inadequate test coverage leading to critical service crashes in live environments.",
      "Slow manual testing cycles delaying product release windows.",
      "Inconsistent layout validation causing brand damage on mobile browsers."
    ],
    image: "/assets/services/problem-testing.png"
  },
  "it-consulting": {
    title: "Architecture Bloat & Stack Overlap",
    subtitle: "Aligning software deployment roadmaps with clear corporate strategies.",
    points: [
      "Redundant SaaS licenses and server expenses across disconnected teams.",
      "Vague cloud transition strategies causing delays in transformation cycles.",
      "Complex custom-coded structures where a simpler SaaS product suffices."
    ],
    image: "/assets/services/problem-consulting.png"
  }
};

export function CapabilityProblem({ serviceSlug, capabilityTitle }: CapabilityProblemProps) {
  const data = problemData[serviceSlug] || problemData["ai-data-innovation"];

  return (
    <section id="business-problem" className="w-full bg-[#030303] text-white relative overflow-hidden pt-16 pb-0">
      {/* Centered Top Heading */}
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10 text-center mb-12">
        <Reveal>
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-rose-500 block mb-3">
            The Business Challenge
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-6 text-white uppercase">
            Solving <span className="text-rose-500">{data.title}</span>
          </h2>
        </Reveal>
      </div>

      {/* Full-bleed Poster Image (Edge-to-edge, No Borders) */}
      <div className="w-full relative overflow-hidden aspect-[21/9] md:aspect-[24/9]">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover brightness-[0.7] contrast-[1.05]"
        />
        {/* Soft edge gradients to blend top & bottom transitions */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
