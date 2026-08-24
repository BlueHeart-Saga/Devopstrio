"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export interface TimelineProcessProps {
  steps?: string[];
  serviceSlug?: string;
}

const getHighLevelSteps = (serviceSlug: string) => {
  switch (serviceSlug) {
    case "ai-data-innovation":
      return [
        "Phase 1: Data Audit - Auditing datasets and token metrics to align with LLM goals.",
        "Phase 2: Strategy Blueprint - Designing custom prompts, semantic caches, and indexing plans.",
        "Phase 3: Pipeline Engineering - Constructing stateful multi-agent workflows and logic pipelines.",
        "Phase 4: Safety Validation - Rigorous evaluation sweeps to ensure model output accuracy.",
        "Phase 5: Secure Rollout - Orchestrating endpoints inside private tenant VPC boundaries.",
        "Phase 6: Feedback Optimization - Active drift monitoring and continuous learning loops."
      ];
    case "cloud-services":
      return [
        "Phase 1: Cloud Audit - Reviewing workloads, storage footprint, and latency limits.",
        "Phase 2: Subnet Blueprint - Drafting multi-account layouts and secure IAM groups.",
        "Phase 3: Infrastructure Code - Writing modular Terraform scripts for cloud resources.",
        "Phase 4: Compliance Scan - Scanning configurations against CIS benchmarks and SOC-2.",
        "Phase 5: Phased Migration - Migrating database workloads with zero downtime.",
        "Phase 6: Scale Optimization - Adjusting auto-scaling and optimizing monthly costs."
      ];
    case "devops-automation":
      return [
        "Phase 1: Pipeline Audit - Analyzing checkout times and delivery bottlenecks.",
        "Phase 2: GitOps Design - Structuring git-triggered plans and target state rules.",
        "Phase 3: CI/CD Build - Writing build scripts and parallel testing integration.",
        "Phase 4: DevSecOps Gate - Inserting automated SAST checks and secret detection.",
        "Phase 5: Promotion Gate - Deploying clusters using canary rollouts and rollbacks.",
        "Phase 6: Observability - Constructing telemetry charts and paging alerts."
      ];
    case "cybersecurity":
      return [
        "Phase 1: Threat Analysis - Auditing network boundaries and IAM vulnerabilities.",
        "Phase 2: Zero-Trust Blueprint - Designing micro-segmentation and token auth rules.",
        "Phase 3: Identity Setup - Implementing Single Sign-On and adaptive MFA access.",
        "Phase 4: Penetration Scan - Running Nessus tests and manual API auth checks.",
        "Phase 5: Unified Logging - Centralizing compute logs for real-time threat-detection.",
        "Phase 6: Compliance Audit - Preparing audit reports for SOC-2 or ISO-27001."
      ];
    case "software-development":
      return [
        "Phase 1: Sprint Mapping - Documenting logic boundaries and user interface mocks.",
        "Phase 2: Microservices Plan - Modeling relational schemas and caching structures.",
        "Phase 3: Code Engineering - Writing modular TypeScript, Go, or Rust runtimes.",
        "Phase 4: Testing Sweep - Building unit tests and Playwright browser scenarios.",
        "Phase 5: CDN Rollout - Promoting compiled assets to edge caching networks.",
        "Phase 6: Performance Tuning - Profiling memory leaks and optimizing latency."
      ];
    case "digital-transformation":
      return [
        "Phase 1: Ecosystem Audit - Assessing legacy mainframes and workflow bottlenecks.",
        "Phase 2: Transformation Path - Drafting migration milestones and project ROI goals.",
        "Phase 3: Automation Loops - Building serverless pipelines and secure API routes.",
        "Phase 4: System Validation - Running modernized and legacy setups in parallel.",
        "Phase 5: Cutover Launch - Routing live traffic with zero service gaps.",
        "Phase 6: Team Enablement - Delivering documentation, workshops, and runbooks."
      ];
    case "data-engineering":
      return [
        "Phase 1: Source Mapping - Inventorying external API schemas and write volumes.",
        "Phase 2: Partition Plan - Designing BigQuery or Databricks cluster partitions.",
        "Phase 3: ELT Pipelines - Writing Airflow or Spark pipelines to ingest datasets.",
        "Phase 4: Quality Assertions - Inserting data assertions to isolate bad records.",
        "Phase 5: Orchestration - Aggregating raw datasets into business-ready dashboards.",
        "Phase 6: Lineage Tracking - Configuring metadata engines to track data streams."
      ];
    case "managed-services":
      return [
        "Phase 1: SLA Alignment - Establishing response windows and on-call schedules.",
        "Phase 2: Telemetry Setup - Deploying agents and connecting logs to alert keys.",
        "Phase 3: Recovery Runbooks - Compiling specific recovery steps and failover guides.",
        "Phase 4: DR Simulation - Executing database recovery to verify RTO/RPO targets.",
        "Phase 5: 24/7 Operations - Commencing round-the-clock monitoring and containment.",
        "Phase 6: Cost Audits - Delivering monthly health logs and cloud savings plans."
      ];
    case "qa-testing":
      return [
        "Phase 1: Vector Scope - Documenting user paths and API validation targets.",
        "Phase 2: Test Automation - Setting up Cypress or Playwright page models.",
        "Phase 3: Mock Scripting - Writing automated cases and seeding databases.",
        "Phase 4: CI/CD Pipeline - Triggering automated test suites on git pull requests.",
        "Phase 5: Concurrency Simulation - Testing peak load thresholds using k6 scripts.",
        "Phase 6: Quality Reports - Publishing bug reports and execution trace logs."
      ];
    case "it-consulting":
      return [
        "Phase 1: Discovery Sprints - Interviewing IT leads and mapping business goals.",
        "Phase 2: Stack Selection - Reviewing cloud options and database features.",
        "Phase 3: DR Planning - Blueprinting failover clusters and secure VPC networks.",
        "Phase 4: PoC Validation - Building sandbox deployments to test configurations.",
        "Phase 5: Migration Runbook - Drafting step-by-step migration and rollback plans.",
        "Phase 6: Handoff Workshops - Running handoff workshops and handing over runbooks."
      ];
    default:
      return [
        "Phase 1: Architecture Consult - Defining boundaries, deliverables, and keys.",
        "Phase 2: Prototyping - Setting up sandbox configurations to test variables.",
        "Phase 3: Pipeline Build - Creating CI/CD paths and provisioning scripts.",
        "Phase 4: Compliance Scan - Scanning systems against security guidelines.",
        "Phase 5: Production Rollout - Switching DNS entries and routing live workloads.",
        "Phase 6: SLA Handoff - Delivering dashboards, runbooks, and training."
      ];
  }
};

const parseStep = (step: string) => {
  let title = "";
  let desc = "";
  
  if (step.includes(" - ")) {
    const parts = step.split(" - ");
    const mainTitle = parts[0] || "";
    desc = parts.slice(1).join(" - ").trim();
    
    // Remove "Phase X:" prefix from title if present
    if (mainTitle.includes(":")) {
      title = mainTitle.split(":").slice(1).join(":").trim();
    } else {
      title = mainTitle.trim();
    }
  } else if (step.includes(":")) {
    const parts = step.split(":");
    title = parts.slice(1).join(":").trim();
    desc = "";
  } else {
    title = step.trim();
    desc = "";
  }
  
  return { title, desc };
};

export function TimelineProcess({ steps, serviceSlug }: TimelineProcessProps) {
  // Use high-level 6-phase steps if serviceSlug is provided
  const activeSteps = serviceSlug ? getHighLevelSteps(serviceSlug) : (steps || []);

  return (
    <section id="process" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.02),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.01),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Section Header */}
        <Reveal className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight font-sans">
            Our Delivery <span className="text-rose-500 font-semibold">Framework</span>
          </h2>
        </Reveal>

        {/* Horizontal Inline Timeline */}
        <div className="relative mt-16 max-w-7xl mx-auto w-full">
          {/* Horizontal connector line on desktop behind the 3D numbers */}
          <div className="absolute top-[22px] left-12 right-12 h-[1px] bg-gradient-to-r from-red-500/20 via-red-500/5 to-zinc-900 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-12 relative z-10">
            {activeSteps.map((step, idx) => {
              const { title, desc } = parseStep(step);
              return (
                <Reveal key={idx} delay={idx * 0.05} className="w-full">
                  <div className="group relative flex flex-col items-center lg:items-start text-center lg:text-left transition-colors duration-300">
                    
                    {/* Node 3D Number */}
                    <div className="mb-4 relative z-20">
                      <span className="text-[38px] font-black tracking-tight leading-none text-red-500 drop-shadow-[0_2px_4px_rgba(239,68,68,0.3)] select-none">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Step details */}
                    <div>
                      {/* <span className="text-[9px] font-bold text-red-500 uppercase tracking-[0.25em] block mb-1">
                        Phase 0{idx + 1}
                      </span> */}
                      <h4 className="text-[11px] md:text-xs font-bold text-white uppercase tracking-wider group-hover:text-red-400 transition-colors duration-300">
                        {title}
                      </h4>
                      {desc && (
                        <p className="text-[10px] md:text-[11px] text-zinc-400 font-semibold leading-relaxed mt-2.5 max-w-[200px] mx-auto lg:mx-0">
                          {desc}
                        </p>
                      )}
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
