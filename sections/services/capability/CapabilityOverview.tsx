"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CapabilityOverviewProps {
  title: string;
  subtitle: string;
  image: string;
}

function getCapabilityDefinition(title: string, subtitle: string) {
  const t = title.toLowerCase();
  
  if (t.includes("generative ai") || t.includes("llm") || t.includes("rag")) {
    return {
      heading: "Understanding Generative AI",
      paragraph1: "Generative AI represents a paradigm shift in how enterprise organizations process information, automate complex decision-making, and interact with data. Unlike traditional systems that rely on hardcoded rules, Generative AI leverages deep learning models trained on massive datasets to understand context, generate human-like text, synthesize insights, and reason through multi-step workflows in real time.",
      paragraph2: "By deploying secure, Retrieval-Augmented Generation (RAG) pipelines and private fine-tuning engines, we transform raw institutional knowledge into high-value cognitive assets. This capability allows you to build domain-specific virtual experts, automate content generation, and query complex databases using natural language, all while guaranteeing absolute data privacy and compliance."
    };
  }
  
  if (t.includes("ai") || t.includes("machine learning") || t.includes("ml") || t.includes("agent")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: `${title} is the deployment of cognitive intelligence and autonomous workflows directly into enterprise software architecture. It moves organizations past static automation into the realm of self-learning systems that analyze historical telemetry, recognize complex patterns, and execute high-value business processes with minimal human intervention.`,
      paragraph2: `Using stateful agent networks, custom neural modeling, and low-latency inference pipelines, this capability enables your organization to predict customer behavior, automate repetitive operational loops, and optimize resource allocation. It serves as the intelligent foundation for modern digital-first enterprises.`
    };
  }

  if (t.includes("cloud") || t.includes("aws") || t.includes("azure") || t.includes("gcp") || t.includes("finops")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: `${title} is the strategic alignment of computing resources, storage, and networking in highly-available virtualized environments. It empowers enterprises to scale workloads dynamically, secure sensitive workloads within private landing zones, and transition from capital-intensive physical servers to agile, pay-as-you-go cloud architectures.`,
      paragraph2: `Whether establishing multi-region AKS/EKS container grids, optimizing database queries, or automating cost tracking through FinOps practices, this capability ensures that your infrastructure is highly secure, fully compliant with industry standards, and ready to meet traffic demands of any scale.`
    };
  }

  if (t.includes("devops") || t.includes("ci/cd") || t.includes("infrastructure as code") || t.includes("kubernetes") || t.includes("sre") || t.includes("platform engineering")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: `${title} is an engineering methodology that unites software development (Dev) and IT operations (Ops) through automated workflows, shared telemetry, and a culture of continuous collaboration. By treating infrastructure as code (IaC) and automating the build, test, and release cycles, organizations can push updates with speed, reliability, and precision.`,
      paragraph2: `Through platform engineering portals, GitOps deployment gates, and site reliability metrics, this capability eliminates manual release friction. The result is a self-healing system where code updates are verified and deployed to production with zero downtime and full audit trails.`
    };
  }

  if (t.includes("security") || t.includes("vulnerability") || t.includes("penetration") || t.includes("soc") || t.includes("iam") || t.includes("compliance") || t.includes("zero trust")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: `${title} is the systematic hardening of digital assets, network boundaries, and user identities against malicious actors and data breaches. It establishes a resilient defense posture through continuous vulnerability scans, strict access management, and compliance alignment with international regulations like SOC-2, ISO-27001, and HIPAA.`,
      paragraph2: `By implementing zero-trust architectures, micro-segmentation, and real-time SIEM event monitoring, this capability ensures that every system entry point is verified, authenticated, and logged. It protects your brand reputation and client trust by turning security from a checkbox into a core operational strength.`
    };
  }

  if (t.includes("data") || t.includes("lake") || t.includes("warehouse") || t.includes("pipeline") || t.includes("etl") || t.includes("elt")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: `${title} is the engineering of high-throughput systems that ingest, transform, clean, and store vast amounts of raw business data. It provides the structured foundation for modern analytics by transforming fragmented data streams from APIs, databases, and logs into a single source of truth.`,
      paragraph2: `By deploying modern data lakehouses, Apache Airflow orchestrators, and automated quality assertions, this capability guarantees that your business intelligence tools and predictive models run on clean, consistent, and low-latency data. It enables real-time decision-making backed by verifiable facts.`
    };
  }

  if (t.includes("app") || t.includes("web") || t.includes("mobile") || t.includes("saas") || t.includes("api") || t.includes("microservices") || t.includes("software")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: `${title} is the process of planning, coding, and deploying custom software applications tailored to deliver high-performance user experiences and robust backend performance. It utilizes modern frameworks (such as Next.js, React, and Go) to build scalable, responsive platforms that load in milliseconds.`,
      paragraph2: `From API integration gateways to decoupled microservice topologies, this capability focuses on engineering modular systems that are easy to maintain, simple to scale, and deeply aligned with your customer needs. It turns custom software into a primary driver of digital revenue and operational efficiency.`
    };
  }

  if (t.includes("transformation") || t.includes("strategy") || t.includes("process") || t.includes("workflow") || t.includes("change")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: `${title} is the comprehensive modernization of legacy technologies, manual corporate workflows, and operational mindsets to align with the digital age. It goes beyond simple software updates, restructuring how business departments collaborate, share insights, and deliver value to their end customers.`,
      paragraph2: `By automating manual validation loops, refactoring legacy codebases, and coaching teams in agile Scrum frameworks, this capability ensures your organization remains highly competitive, responsive to market shifts, and capable of rapid engineering innovation.`
    };
  }

  if (t.includes("test") || t.includes("qa") || t.includes("quality") || t.includes("regression")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: `${title} is the rigorous, automated verification of software applications to ensure they meet strict functional, performance, and security benchmarks before reaching production. By embedding automated testing suites (like Playwright, Cypress, and k6) into development pipelines, we catch bugs and performance drift instantly.`,
      paragraph2: `This quality engineering practice minimizes release regressions, protects the user experience, and accelerates developer velocity by providing instant feedback. It guarantees that every code release is solid, stable, and ready for your users.`
    };
  }

  if (t.includes("consult") || t.includes("architecture") || t.includes("roadmap") || t.includes("assessment")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: `${title} is the advisory and planning practice that defines technical roadmaps, audits current IT capabilities, and blueprints robust enterprise architectures. It bridges the gap between high-level business goals and down-to-earth engineering execution, preventing costly tech debt and alignment failures.`,
      paragraph2: `By executing stakeholder discovery sprints, choosing ideal technology stacks, and drafting detailed disaster recovery and security runbooks, this capability ensures that your engineering resources are invested wisely and built on stable, future-proof foundations.`
    };
  }

  return {
    heading: `What is ${title}?`,
    paragraph1: `${title} is a dedicated operational and engineering capability designed to streamline systems, eliminate tech bottlenecks, and deploy production-grade configurations. By establishing secure, automated environments, this practice helps organizations align their digital platforms with modern industry standards and compliance policies.`,
    paragraph2: `Leveraging advanced design principles and custom integrations, this capability focuses on ${subtitle.toLowerCase().replace(/\.$/, '')}. It provides the technical scaffolding your teams need to accelerate deployment cycles, enhance observability, and achieve consistent, high-impact business outcomes.`
  };
}

function getOverviewImage(title: string, incomingImage: string): string {
  const overviewImages = [
    "/assets/Services-Page/overview/ai1.png",
    "/assets/Services-Page/overview/ai2.png",
    "/assets/Services-Page/overview/ai3.png",
    "/assets/Services-Page/overview/ai4.png",
    "/assets/Services-Page/overview/ai5.png",
    "/assets/Services-Page/overview/ai6.png",
    "/assets/Services-Page/overview/ai7.png",
    "/assets/Services-Page/overview/ai8.png",
    "/assets/Services-Page/overview/ai9.png",
    "/assets/Services-Page/overview/ai10.png"
  ];
  
  let charSum = 0;
  for (let i = 0; i < title.length; i++) {
    charSum += title.charCodeAt(i);
  }
  
  return overviewImages[charSum % overviewImages.length];
}

export function CapabilityOverview({ title, subtitle, image }: CapabilityOverviewProps) {
  const def = getCapabilityDefinition(title, subtitle);
  const displayImage = getOverviewImage(title, image);

  return (
    <section id="overview" className="w-full py-16 bg-[#030303] text-white relative overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">

        <Reveal>
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">

            {/* Background Glow */}
            <div className="absolute inset-0">
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-rose-600/10 blur-[120px]" />
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-rose-600/5 blur-[120px]" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-0">

              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 text-left">

                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-rose-500 mb-6 block">
                  Capability Overview
                </span>

                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold leading-tight tracking-tight mb-6 text-white uppercase">
                  Accelerating outcomes for <span className="text-rose-500">{title}</span>
                </h2>

                <div className="space-y-4 text-zinc-200 text-xs md:text-sm font-semibold leading-relaxed">
                  <p className="border-l-2 border-rose-500/50 pl-4">
                    {subtitle}
                  </p>
                  <p className="border-l-2 border-white/10 pl-4 text-zinc-400">
                    We deploy automated environments, rigorous telemetry monitoring, and secure VPC routing parameters to align with industry regulatory requirements.
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="p-4 md:p-6 flex items-center justify-center bg-zinc-950/20 border-t lg:border-t-0 lg:border-l border-white/5">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group/img">
                  <img
                    src={displayImage}
                    alt={title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover/img:scale-[1.02] pointer-events-none select-none"
                  />
                  {/* Subtle glow/reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-transparent pointer-events-none" />
                </div>
              </div>

            </div>

          </div>
        </Reveal>

        {/* What Is Definition Section - Separated & Clean */}
        <div className="mt-20 w-full relative z-10">
          <Reveal delay={0.15}>
            {/* Center Main Heading */}
            <div className="text-center mb-8">
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-rose-500 block mb-3">
                Deep Dive Explanation
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-white uppercase">
                What is <span className="text-rose-500">{title}</span> ?
              </h3>
            </div>

            {/* Centered Professional Paragraph Content */}
            <div className="max-w-6xl mx-auto text-center space-y-6">
              <p className="text-sm md:text-base lg:text-lg font-normal text-zinc-100 leading-relaxed font-sans">
                {def.paragraph1}
              </p>
              <p className="text-sm md:text-base lg:text-lg font-normal text-zinc-300 leading-relaxed font-sans">
                {def.paragraph2}
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
