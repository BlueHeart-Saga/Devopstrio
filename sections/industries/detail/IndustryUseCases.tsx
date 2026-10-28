"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface UseCaseItem {
  title: string;
  result: React.ReactNode;
  image?: string;
  link?: string;
  href?: string;
}

interface IndustryUseCasesProps {
  useCases: UseCaseItem[];
}

const allUseCaseImages = [
  "/webp/assets/Industries-page/main-usecases/multicloudgitopsingress.webp",
  "/webp/assets/Industries-page/main-usecases/infra.webp",
  "/webp/assets/Industries-page/main-usecases/zerotrustacces.webp",
  "/webp/assets/Industries-page/main-usecases/automationintegrate.webp",
  "/webp/assets/Industries-page/main-usecases/distributedtelemetrylogging.webp",
  "/webp/assets/Industries-page/main-usecases/loadverification.webp",
  "/webp/assets/Industries-page/main-usecases/Dynamiccreditscoring.webp",
  "/webp/assets/Industries-page/main-usecases/transactionledgerauditing.webp"
];

const getUseCaseImage = (title: string, index: number): string => {
  const cleanTitle = title.toLowerCase().trim();

  if (cleanTitle.includes("credit") || cleanTitle.includes("score") || cleanTitle.includes("scoring")) {
    return "/webp/assets/Industries-page/main-usecases/Dynamiccreditscoring.webp";
  }
  if (cleanTitle.includes("automation") || cleanTitle.includes("integrate")) {
    return "/webp/assets/Industries-page/main-usecases/automationintegrate.webp";
  }
  if (cleanTitle.includes("telemetry") || cleanTitle.includes("logging") || cleanTitle.includes("log")) {
    return "/webp/assets/Industries-page/main-usecases/distributedtelemetrylogging.webp";
  }
  if (cleanTitle.includes("infra") || cleanTitle.includes("code") || cleanTitle.includes("iac") || cleanTitle.includes("baseline")) {
    return "/webp/assets/Industries-page/main-usecases/infra.webp";
  }
  if (cleanTitle.includes("load") || cleanTitle.includes("verification") || cleanTitle.includes("peak")) {
    return "/webp/assets/Industries-page/main-usecases/loadverification.webp";
  }
  if (cleanTitle.includes("gitops") || cleanTitle.includes("ingress") || cleanTitle.includes("multi-cloud")) {
    return "/webp/assets/Industries-page/main-usecases/multicloudgitopsingress.webp";
  }
  if (cleanTitle.includes("ledger") || cleanTitle.includes("audit") || cleanTitle.includes("transaction")) {
    return "/webp/assets/Industries-page/main-usecases/transactionledgerauditing.webp";
  }
  if (cleanTitle.includes("zero") || cleanTitle.includes("trust") || cleanTitle.includes("access") || cleanTitle.includes("isolation")) {
    return "/webp/assets/Industries-page/main-usecases/zerotrustacces.webp";
  }

  return allUseCaseImages[index % allUseCaseImages.length];
};

export const getUseCaseLink = (title: string, customLink?: string): string => {
  if (customLink) return customLink;
  const cleanTitle = title.toLowerCase().trim();

  // 1. AI & Machine Learning
  if (cleanTitle.includes("credit") || cleanTitle.includes("score") || cleanTitle.includes("scoring") || cleanTitle.includes("fraud")) {
    return "/services/ai-data-innovation/machine-learning-engineering";
  }
  if (cleanTitle.includes("agent") || cleanTitle.includes("autonomous")) {
    return "/services/ai-data-innovation/ai-agents-automation";
  }
  if (cleanTitle.includes("generative") || cleanTitle.includes("llm")) {
    return "/services/ai-data-innovation/generative-ai-solutions";
  }
  if (cleanTitle.includes("analytics") || cleanTitle.includes("insight") || cleanTitle.includes("prediction") || cleanTitle.includes("ai")) {
    return "/services/ai-data-innovation";
  }

  // 2. Data Engineering & Telemetry
  if (cleanTitle.includes("cdr") || cleanTitle.includes("big-data") || cleanTitle.includes("high-volume")) {
    return "/services/data-engineering/big-data-engineering";
  }
  if (cleanTitle.includes("telemetry") || cleanTitle.includes("streaming") || cleanTitle.includes("sensor") || cleanTitle.includes("real-time") || cleanTitle.includes("wearable") || cleanTitle.includes("ingest") || cleanTitle.includes("logging")) {
    return "/services/data-engineering/real-time-data-processing";
  }
  if (cleanTitle.includes("pipeline") || cleanTitle.includes("etl") || cleanTitle.includes("elt")) {
    return "/services/data-engineering/etl-elt-pipelines";
  }
  if (cleanTitle.includes("warehouse") || cleanTitle.includes("lakehouse") || cleanTitle.includes("database shift")) {
    return "/services/data-engineering/data-warehousing";
  }

  // 3. Cybersecurity & Zero-Trust
  if (cleanTitle.includes("zero-trust") || cleanTitle.includes("access isolation") || cleanTitle.includes("isolation")) {
    return "/services/cybersecurity/zero-trust-architecture";
  }
  if (cleanTitle.includes("pii") || cleanTitle.includes("masker") || cleanTitle.includes("compliance") || cleanTitle.includes("audit") || cleanTitle.includes("trial") || cleanTitle.includes("governance")) {
    return "/services/cybersecurity/compliance-governance";
  }
  if (cleanTitle.includes("security") || cleanTitle.includes("vulnerability") || cleanTitle.includes("threat") || cleanTitle.includes("pentest")) {
    return "/services/cybersecurity/security-assessment";
  }

  // 4. QA & Performance Testing
  if (cleanTitle.includes("exam") || cleanTitle.includes("load") || cleanTitle.includes("verification") || cleanTitle.includes("peak") || cleanTitle.includes("testing")) {
    return "/services/qa-testing/performance-testing";
  }

  // 5. DevOps & Cloud Infrastructure
  if (cleanTitle.includes("gitops") || cleanTitle.includes("continuous deployment") || cleanTitle.includes("cicd") || cleanTitle.includes("ingress") || cleanTitle.includes("release")) {
    return "/services/devops-automation/cicd-implementation";
  }
  if (cleanTitle.includes("infrastructure-as-code") || cleanTitle.includes("iac") || cleanTitle.includes("baseline") || cleanTitle.includes("drift")) {
    return "/services/devops-automation/infrastructure-as-code";
  }
  if (cleanTitle.includes("platform") || cleanTitle.includes("kubernetes") || cleanTitle.includes("cluster")) {
    return "/services/devops-automation/platform-engineering";
  }
  if (cleanTitle.includes("sre") || cleanTitle.includes("automation integration") || cleanTitle.includes("monitoring") || cleanTitle.includes("flash sale") || cleanTitle.includes("concurrency") || cleanTitle.includes("incident")) {
    return "/services/devops-automation/site-reliability-engineering";
  }
  if (cleanTitle.includes("devops") || cleanTitle.includes("automation")) {
    return "/services/devops-automation";
  }

  // 6. Software & Product Engineering
  if (cleanTitle.includes("ledger") || cleanTitle.includes("invoicing") || cleanTitle.includes("drawing") || cleanTitle.includes("cad") || cleanTitle.includes("product")) {
    return "/services/software-development/product-engineering";
  }
  if (cleanTitle.includes("catalog") || cleanTitle.includes("parts") || cleanTitle.includes("storefront") || cleanTitle.includes("auto parts") || cleanTitle.includes("enterprise app")) {
    return "/services/software-development/enterprise-application-development";
  }

  // 7. Cloud Services
  if (cleanTitle.includes("modernization") || cleanTitle.includes("migration") || cleanTitle.includes("record") || cleanTitle.includes("county")) {
    return "/services/cloud-services/cloud-migration";
  }
  if (cleanTitle.includes("cloud") || cleanTitle.includes("transcoding") || cleanTitle.includes("media") || cleanTitle.includes("4k") || cleanTitle.includes("5g") || cleanTitle.includes("lms") || cleanTitle.includes("streaming")) {
    return "/services/cloud-services/cloud-architecture";
  }

  // 8. Digital Transformation
  if (cleanTitle.includes("citizen") || cleanTitle.includes("application ingress") || cleanTitle.includes("gateway") || cleanTitle.includes("transformation")) {
    return "/services/digital-transformation/enterprise-modernization";
  }

  return "/services";
};

const defaultExtraUseCases: UseCaseItem[] = [
  {
    title: "Multi-Cloud GitOps Ingress",
    link: "/services/devops-automation/cicd-implementation",
    result: <>Unified <span className="text-rose-500 font-medium">continuous deployment</span> gates across Azure and AWS, cutting release times by 84%.</>
  },
  {
    title: "Infrastructure-as-Code Baseline",
    link: "/services/devops-automation/infrastructure-as-code",
    result: <>99.98% drop in environment configuration <span className="text-rose-500 font-medium">drift</span> via Terraform standardization audits.</>
  },
  {
    title: "Zero-Trust Access Isolation",
    link: "/services/cybersecurity/zero-trust-architecture",
    result: <>Secured credential flows and database access paths under <span className="text-rose-500 font-medium">SOC-2 compliance</span> parameters.</>
  },
  {
    title: "SRE Automation Integration",
    link: "/services/devops-automation/site-reliability-engineering",
    result: <>Automated alert resolution rules that resolved 92% of server-load incidents under <span className="text-rose-500 font-medium">SRE automation</span> parameters.</>
  },
  {
    title: "Distributed Telemetry Logging",
    link: "/services/data-engineering/real-time-data-processing",
    result: <>Gathered 4TB of daily <span className="text-rose-500 font-medium">application logs</span> into unified ElasticSearch systems under 15ms indexing latency.</>
  },
  {
    title: "High-Throughput Load Verification",
    link: "/services/qa-testing/performance-testing",
    result: <>Simulated 500,000 requests per second under <span className="text-rose-500 font-medium">peak-period models</span> to discover database lock bugs.</>
  }
];

export function IndustryUseCases({ useCases }: IndustryUseCasesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Merge to guarantee at least 8 use cases are rendered
  const mergedUseCases = [...useCases];
  let extraIdx = 0;
  while (mergedUseCases.length < 8 && extraIdx < defaultExtraUseCases.length) {
    const item = { ...defaultExtraUseCases[extraIdx] };
    mergedUseCases.push(item);
    extraIdx++;
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="use-cases" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">

        {/* Section Header */}
        <Reveal className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
            Domain <span className="text-[#E11D48] font-semibold">capabilities in action</span>
          </h2>
        </Reveal>

        {/* CSS style block to hide scrollbar across all major browsers */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none !important;
          }
          .hide-scrollbar {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
          }
        `}} />

        {/* Carousel Slider Wrapper */}
        <div className="relative w-full">
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory scroll-smooth"
            style={{
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none"
            }}
          >
            {mergedUseCases.map((uc, idx) => {
              const displayImage = uc.image || getUseCaseImage(uc.title, idx);
              const targetLink = uc.link || uc.href || getUseCaseLink(uc.title);

              return (
                <Link
                  key={idx}
                  href={targetLink}
                  className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] bg-[#0b0b0c] border border-white/10 rounded-[24px] overflow-hidden flex flex-col justify-between hover:border-rose-500/40 hover:shadow-[0_8px_32px_rgba(244,63,94,0.12)] hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer"
                >
                  {/* Subtle Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                  {/* Padded image layout */}
                  <div className="p-3 pb-0 relative z-10">
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 rounded-[16px] border border-white/5">
                      <img 
                        src={displayImage}
                        alt={uc.title}
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 pointer-events-none select-none"
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow text-left relative z-10">
                    <span className="text-[11px] font-mono tracking-widest text-[#E11D48] uppercase font-semibold block mb-2">
                      Engineering Deployment
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug group-hover:text-rose-400 transition-colors font-sans">
                      {uc.title}
                    </h3>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="px-6 pb-6 pt-3 mt-auto border-t border-white/5 flex items-center justify-between text-[#E11D48] group-hover:text-rose-400 transition-colors relative z-10">
                    <span className="text-xs uppercase font-semibold tracking-wider">
                      Explore Capability
                    </span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Carousel Navigation Arrow Controls */}
        <div className="flex gap-4 mt-8 justify-start relative z-20">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
          >
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
