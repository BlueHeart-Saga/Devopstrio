"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const workflowPhases = [
  {
    num: "01",
    phase: "Discovery & Audit",
    desc: "Deep-dive into active application codebases, infrastructure configurations, pipeline bottlenecks, and security postures.",
    deliverable: "Comprehensive Architecture Audit & Risk Report"
  },
  {
    num: "02",
    phase: "Strategy & Design",
    desc: "Define target-state multi-cloud landing zones, orchestration policies, deployment governance, and resource optimization budgets.",
    deliverable: "Technical Design Authority Document (TDA)"
  },
  {
    num: "03",
    phase: "Automated IaC Setup",
    desc: "Establish modular Infrastructure as Code (IaC) repositories using Terraform, Pulumi, or CloudFormation under strict GitOps policies.",
    deliverable: "Version-Controlled IaC Core Repositories"
  },
  {
    num: "04",
    phase: "Platform Engineering",
    desc: "Build and containerize scalable microservices, Kubernetes clusters, service meshes, zero-trust routing networks, and API gateways.",
    deliverable: "Production-Grade Kubernetes Cluster & CI/CD Pipelines"
  },
  {
    num: "05",
    phase: "SRE & Security Controls",
    desc: "Deploy comprehensive observability telemetry, automated tracing, logging systems, error-budget triggers, and threat protection scripts.",
    deliverable: "Unified Observability Dashboard & Threat Alert Posture"
  },
  {
    num: "06",
    phase: "Operations Enablement",
    desc: "Execute dry-runs, runbook dry-testing, developer platform onboarding workshops, and hand over the keys to your operational team.",
    deliverable: "Complete Operations Runbook & Internal Team Training"
  }
];

export function WorkflowModel() {
  return (
    <section className="w-full py-20 bg-black text-white relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">

        {/* Header Block */}
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-500">
              Engagement Process
            </span>
          </div>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
            A structured, repeatable <span className="font-bold block">framework for <span className="text-rose-500">digital execution</span>.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
            We operate through a 6-phase engineering lifecycle that guarantees alignment between target architecture, deployment security, and long-term operation scalability.
          </p>
        </Reveal>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflowPhases.map((item) => (
            <Reveal
              key={item.phase}
              className="bg-zinc-950/20 border border-zinc-900 p-6 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-colors shadow-sm"
            >
              <div>
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-2">
                  PHASE {item.num}
                </span>
                <strong className="block text-base font-bold text-white mb-2">
                  {item.phase}
                </strong>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex flex-col gap-1.5">
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider block">
                  KEY DELIVERABLE
                </span>
                <span className="text-xs font-semibold text-zinc-200 leading-tight">
                  {item.deliverable}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
