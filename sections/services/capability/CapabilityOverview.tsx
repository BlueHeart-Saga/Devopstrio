"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

interface CapabilityOverviewProps {
  title: string;
  subtitle: string;
  image: string;
  overrideHeading?: string;
  overrideParagraph1?: React.ReactNode;
  overrideParagraph2?: React.ReactNode;
  overrideDeepDiveHeading?: string;
  overrideDeepDiveParagraph1?: React.ReactNode;
  overrideDeepDiveParagraph2?: React.ReactNode;
}

function getCapabilityDefinition(title: string, subtitle: string): {
  heading: string;
  paragraph1: React.ReactNode;
  paragraph2: React.ReactNode;
} {
  const t = title.toLowerCase();
  
  if (t.includes("generative ai") || t.includes("llm") || t.includes("rag")) {
    return {
      heading: "Understanding Generative AI",
      paragraph1: (
        <span>
          Generative AI represents a paradigm shift in how enterprise organizations process information, automate complex decision-making, and interact with data. Unlike traditional systems that rely on hardcoded rules, Generative AI leverages deep learning models trained on massive datasets to understand context, generate human-like text, synthesize insights, and reason through multi-step workflows. Discover how this is supported by our{" "}
          <Link href="/services/data-engineering" className="text-rose-500 hover:underline font-bold">
            data engineering platforms
          </Link>{" "}
          and read our{" "}
          <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">
            company overview
          </Link>{" "}
          for compliance.
        </span>
      ),
      paragraph2: (
        <span>
          By deploying secure, Retrieval-Augmented Generation (RAG) pipelines and private fine-tuning engines, we transform raw institutional knowledge into high-value cognitive assets. This capability allows you to build domain-specific virtual experts, automate content generation, and query databases using natural language, backed by our{" "}
          <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">
            cloud architecture frameworks
          </Link>{" "}
          for complete privacy and compliance.
        </span>
      )
    };
  }
  
  if (t.includes("ai") || t.includes("machine learning") || t.includes("ml") || t.includes("agent")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: (
        <span>
          {title} is the deployment of cognitive intelligence and autonomous workflows directly into enterprise software architecture. It moves organizations past static automation into the realm of self-learning systems that analyze historical telemetry, recognize complex patterns, and execute high-value business processes with minimal human intervention. Learn more about our core{" "}
          <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline font-bold">
            AI & data innovation
          </Link>{" "}
          services.
        </span>
      ),
      paragraph2: (
        <span>
          Using stateful agent networks, custom neural modeling, and low-latency inference pipelines, this capability enables your organization to predict customer behavior, automate repetitive operational loops, and optimize resource allocation. We tie these models directly into{" "}
          <Link href="/services/software-development" className="text-rose-500 hover:underline font-bold">
            custom software development platforms
          </Link>{" "}
          to deliver high-speed enterprise value.
        </span>
      )
    };
  }

  if (t.includes("cloud") || t.includes("aws") || t.includes("azure") || t.includes("gcp") || t.includes("finops")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: (
        <span>
          {title} is the strategic alignment of computing resources, storage, and networking in highly-available virtualized environments. It empowers enterprises to scale workloads dynamically, secure sensitive workloads within private landing zones, and transition from capital-intensive physical servers to agile, pay-as-you-go cloud architectures. Explore our{" "}
          <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">
            DevOps automation pipelines
          </Link>{" "}
          designed to optimize cloud efficiency.
        </span>
      ),
      paragraph2: (
        <span>
          Whether establishing multi-region AKS/EKS container grids, optimizing database queries, or automating cost tracking through FinOps practices, this capability ensures that your infrastructure is highly secure, fully compliant with industry standards. Secure your environment using our{" "}
          <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">
            enterprise cybersecurity controls
          </Link>{" "}
          for maximum protection.
        </span>
      )
    };
  }

  if (t.includes("devops") || t.includes("ci/cd") || t.includes("infrastructure as code") || t.includes("kubernetes") || t.includes("sre") || t.includes("platform engineering")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: (
        <span>
          {title} is an engineering methodology that unites software development (Dev) and IT operations (Ops) through automated workflows, shared telemetry, and a culture of continuous collaboration. By treating infrastructure as code (IaC) and automating the build, test, and release cycles, organizations push updates with speed. Learn how this integrates with{" "}
          <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">
            multi-cloud fabrics
          </Link>{" "}
          and read our{" "}
          <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">
            company overview
          </Link>{" "}
          for details.
        </span>
      ),
      paragraph2: (
        <span>
          Through platform engineering portals, GitOps deployment gates, and site reliability metrics, this capability eliminates manual release friction. The result is a self-healing system where code updates are verified and deployed with zero downtime, paired with our{" "}
          <Link href="/services/qa-testing" className="text-rose-500 hover:underline font-bold">
            automated QA testing tools
          </Link>{" "}
          for release validation.
        </span>
      )
    };
  }

  if (t.includes("security") || t.includes("vulnerability") || t.includes("penetration") || t.includes("soc") || t.includes("iam") || t.includes("compliance") || t.includes("zero trust")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: (
        <span>
          {title} is the systematic hardening of digital assets, network boundaries, and user identities against malicious actors and data breaches. It establishes a resilient defense posture through continuous vulnerability scans, strict access management, and compliance alignment with international regulations like SOC-2, ISO-27001, and HIPAA. Look at our{" "}
          <Link href="/services/managed-services" className="text-rose-500 hover:underline font-bold">
            managed security operations
          </Link>{" "}
          for 24/7 proactive coverage.
        </span>
      ),
      paragraph2: (
        <span>
          By implementing zero-trust architectures, micro-segmentation, and real-time SIEM event monitoring, this capability ensures that every system entry point is verified, authenticated, and logged. It protects your brand reputation by coordinating closely with our{" "}
          <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">
            secure cloud environments
          </Link>{" "}
          to keep infrastructure hardened.
        </span>
      )
    };
  }

  if (t.includes("data") || t.includes("lake") || t.includes("warehouse") || t.includes("pipeline") || t.includes("etl") || t.includes("elt")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: (
        <span>
          {title} is the engineering of high-throughput systems that ingest, transform, clean, and store vast amounts of raw business data. It provides the structured foundation for modern analytics by transforming fragmented data streams from APIs, databases, and logs into a single source of truth. Check our{" "}
          <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline font-bold">
            cognitive AI models
          </Link>{" "}
          that build on clean datasets.
        </span>
      ),
      paragraph2: (
        <span>
          By deploying modern data lakehouses, Apache Airflow orchestrators, and automated quality assertions, this capability guarantees that your business intelligence tools and predictive models run on clean data. Discover how our{" "}
          <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">
            compute and storage solutions
          </Link>{" "}
          deliver the necessary scale.
        </span>
      )
    };
  }

  if (t.includes("app") || t.includes("web") || t.includes("mobile") || t.includes("saas") || t.includes("api") || t.includes("microservices") || t.includes("software")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: (
        <span>
          {title} is the process of planning, coding, and deploying custom software applications tailored to deliver high-performance user experiences and robust backend performance. It utilizes modern frameworks to build scalable, responsive platforms. Explore our{" "}
          <Link href="/services/digital-transformation" className="text-rose-500 hover:underline font-bold">
            digital transformation services
          </Link>{" "}
          and read our{" "}
          <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">
            company overview
          </Link>{" "}
          for design details.
        </span>
      ),
      paragraph2: (
        <span>
          From API integration gateways to decoupled microservice topologies, this capability focuses on engineering modular systems that are easy to maintain and simple to scale. We partner with our{" "}
          <Link href="/services/qa-testing" className="text-rose-500 hover:underline font-bold">
            automated QA testing teams
          </Link>{" "}
          to eliminate bugs before deployment.
        </span>
      )
    };
  }

  if (t.includes("transformation") || t.includes("strategy") || t.includes("process") || t.includes("workflow") || t.includes("change")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: (
        <span>
          {title} is the comprehensive modernization of legacy technologies, manual corporate workflows, and operational mindsets to align with the digital age. It goes beyond simple software updates, restructuring how business departments collaborate. Check out our{" "}
          <Link href="/services/it-consulting" className="text-rose-500 hover:underline font-bold">
            IT consulting services
          </Link>{" "}
          and see our{" "}
          <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">
            company overview
          </Link>{" "}
          for transition templates.
        </span>
      ),
      paragraph2: (
        <span>
          By automating manual validation loops, refactoring legacy codebases, and coaching teams in agile Scrum frameworks, this capability ensures your organization remains highly competitive. Learn how our{" "}
          <Link href="/services/software-development" className="text-rose-500 hover:underline font-bold">
            custom software engineering
          </Link>{" "}
          powers modern growth.
        </span>
      )
    };
  }

  if (t.includes("test") || t.includes("qa") || t.includes("quality") || t.includes("regression")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: (
        <span>
          {title} is the rigorous, automated verification of software applications to ensure they meet strict functional, performance, and security benchmarks before reaching production. By embedding automated testing suites into development pipelines, we catch bugs instantly. Learn about our{" "}
          <Link href="/services/software-development" className="text-rose-500 hover:underline font-bold">
            software development services
          </Link>{" "}
          and read our{" "}
          <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">
            company overview
          </Link>{" "}
          to see our approach.
        </span>
      ),
      paragraph2: (
        <span>
          This quality engineering practice minimizes release regressions, protects the user experience, and accelerates developer velocity. Explore our{" "}
          <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">
            DevOps and GitOps delivery pipelines
          </Link>{" "}
          for continuous integration and testing.
        </span>
      )
    };
  }

  if (t.includes("consult") || t.includes("architecture") || t.includes("roadmap") || t.includes("assessment")) {
    return {
      heading: `What is ${title}?`,
      paragraph1: (
        <span>
          {title} is the advisory and planning practice that defines technical roadmaps, audits current IT capabilities, and blueprints robust enterprise architectures. It bridges the gap between high-level business goals and down-to-earth engineering execution. Read our client{" "}
          <Link href="/about/testimonials" className="text-rose-500 hover:underline font-bold">
            testimonials
          </Link>{" "}
          and explore our{" "}
          <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">
            company overview
          </Link>{" "}
          for architectural audits.
        </span>
      ),
      paragraph2: (
        <span>
          By executing stakeholder discovery sprints, choosing ideal technology stacks, and drafting detailed disaster recovery and security runbooks, this capability ensures that your resources are invested wisely. Discover our{" "}
          <Link href="/services/digital-transformation" className="text-rose-500 hover:underline font-bold">
            digital transformation roadmap strategies
          </Link>{" "}
          to modernization.
        </span>
      )
    };
  }

  return {
    heading: `What is ${title}?`,
    paragraph1: (
      <span>
        {title} is a dedicated operational and engineering capability designed to streamline systems, eliminate tech bottlenecks, and deploy production-grade configurations. By establishing secure, automated environments, this practice helps organizations align their digital platforms. Explore our{" "}
        <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">
          company overview
        </Link>{" "}
        for further info.
      </span>
    ),
    paragraph2: (
      <span>
        Leveraging advanced design principles and custom integrations, this capability focuses on {subtitle.toLowerCase().replace(/\.$/, '')}. It provides the technical scaffolding your teams need to accelerate deployment cycles, enhance observability, and achieve consistent, high-impact business outcomes. Check our{" "}
        <Link href="/services" className="text-rose-500 hover:underline font-bold">
          full catalog of services
        </Link>{" "}
        to see how capabilities align.
      </span>
    )
  };
}

function getOverviewImage(title: string, incomingImage?: string): string {
  if (incomingImage && incomingImage.includes("/assets/Services-Page/Capability Overview section images/")) {
    return incomingImage;
  }

  const overviewImages = [
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 107.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 108.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 110.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 111.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 112.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 113.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 114.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 115.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 116.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 117.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 118.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 119.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 120.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 121.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 303.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 304.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 305.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 306.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 307.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 308.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 309.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 310.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 311.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 312.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 313.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 314.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 315.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 316.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 317.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 318.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 319.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 329.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 331.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 332.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 333.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 334.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 335.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 336.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 337.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 338.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 339.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 340.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 341.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 355.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 356.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 357.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 358.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 359.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 360.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 361.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 362.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 363.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 364.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 365.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 366.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 367.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 420.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 434.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 435.png",
    "/assets/Services-Page/Capability Overview section images/reorder/Frame 436.png"
  ];
  
  let hash = 5381;
  const str = (title || "") + (incomingImage || "");
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }
  
  return overviewImages[Math.abs(hash) % overviewImages.length];
}

export function CapabilityOverview({ 
  title, 
  subtitle, 
  image, 
  overrideHeading, 
  overrideParagraph1, 
  overrideParagraph2,
  overrideDeepDiveHeading,
  overrideDeepDiveParagraph1,
  overrideDeepDiveParagraph2
}: CapabilityOverviewProps) {
  const def = getCapabilityDefinition(title, subtitle);
  const displayImage = getOverviewImage(title, image);

  return (
    <section id="overview" className="w-full py-16 bg-[#030303] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6 text-white font-sans">
                  {overrideHeading || <>Transforming operations with <span className="text-rose-500 font-semibold">{title}</span></>}
                </h2>

                <div className="space-y-4 text-zinc-200 text-xs md:text-sm font-semibold leading-relaxed text-left">
                  <p className="border-l-2 border-rose-500/50 pl-4 text-left">
                    {overrideParagraph1 || subtitle}
                  </p>
                  <p className="border-l-2 border-white/10 pl-4 text-zinc-400 text-left">
                    {overrideParagraph2 || "We deploy automated environments, rigorous telemetry monitoring, and secure VPC routing parameters to align with industry regulatory requirements."}
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
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-white font-sans">
                {overrideDeepDiveHeading || <>What is <span className="text-rose-500 font-semibold">{title}</span> ?</>}
              </h3>
            </div>

            {/* Centered Professional Paragraph Content */}
            <div className="max-w-6xl mx-auto text-center space-y-6">
              <p className="text-sm md:text-base lg:text-lg font-normal text-zinc-100 leading-relaxed font-sans">
                {overrideDeepDiveParagraph1 || def.paragraph1}
              </p>
              <p className="text-sm md:text-base lg:text-lg font-normal text-zinc-300 leading-relaxed font-sans">
                {overrideDeepDiveParagraph2 || def.paragraph2}
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
