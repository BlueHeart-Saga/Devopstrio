"use client";

import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Plus, Minus, Compass, Cloud, Layers, Network, Repeat, FileCheck, ShieldCheck, Maximize2 } from "lucide-react";
import Link from "next/link";

export function SolutionOutcomesFooter() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const techStack = [
    { category: "Cloud & Foundations", items: ["Microsoft Azure", "AWS", "Google Cloud", "Oracle Cloud"] },
    { category: "Microservices & Containers", items: ["Kubernetes", "Docker", "Istio Service Mesh", "Dapr"] },
    { category: "API & Integration", items: ["Kong API Gateway", "Apigee", "GraphQL", "gRPC", "Kafka"] },
    { category: "Databases & Storage", items: ["PostgreSQL", "Cosmos DB", "Snowflake", "Redis", "MongoDB"] },
    { category: "Architecture Governance", items: ["Enterprise Architect", "Structurizr (C4 Model)", "Lucidchart", "Backstage"] }
  ];

  const businessOutcomes = [
    { title: "Future-Proof", metric: "Technology Architecture", desc: "Decouple systems to allow rapid adoption of new cloud tools without complete rewrites." },
    { title: "50%", metric: "Lower Architectural Risk", desc: "Eliminate single points of failure and security gaps prior to writing application code." },
    { title: "3x", metric: "Faster Time to Market", desc: "Standardized reference blueprints enable engineering teams to start building immediately." },
    { title: "Optimized", metric: "Cloud Infrastructure TCO", desc: "Rightsizing cloud services to eliminate architectural bloat and lower monthly spend." },
    { title: "Seamless", metric: "Legacy Modernization", desc: "Strangler Fig patterns ensure continuous operations while decomposing legacy monoliths." },
    { title: "Enterprise", metric: "Governance & ADRs", desc: "Immutable Architecture Decision Records (ADRs) ensuring long-term technical clarity." }
  ];

  const whyChooseUs = [
    { title: "Enterprise Architecture Mastery", icon: Compass },
    { title: "Multi-Cloud Native Blueprinting", icon: Cloud },
    { title: "Zero Trust Security Integration", icon: ShieldCheck },
    { title: "Domain-Driven Design (DDD)", icon: Layers },
    { title: "Event-Driven Infrastructure", icon: Repeat },
    { title: "WAF Alignment (AWS/Azure)", icon: FileCheck },
    { title: "Scalability & Performance", icon: Maximize2 },
    { title: "Pragmatic Tech Choice", icon: Network }
  ];

  const faqs = [
    { q: "What is Solution Architecture?", a: "Solution Architecture is the discipline of defining the technical structure, components, software stacks, interfaces, and cloud environments required to solve specific business problems efficiently." },
    { q: "How is Solution Architecture different from Software Engineering?", a: "Solution Architecture focuses on strategic planning, system boundaries, integration protocols, security governance, and technology selection before and during development, while Software Engineering focuses on implementing code within that blueprint." },
    { q: "What is Domain-Driven Design (DDD)?", a: "DDD is an architectural approach that models software microservices around real-world business domains, ensuring code structure reflects business logic and team boundaries." },
    { q: "What is an Architecture Decision Record (ADR)?", a: "An ADR is a lightweight document capturing important architectural choices, including context, options considered, trade-offs, and rationale for future engineering teams." },
    { q: "Do you audit existing architectures?", a: "Yes. We perform comprehensive Well-Architected Framework (WAF) reviews for AWS and Azure environments to identify performance bottlenecks, security risks, and cost inefficiencies." },
    { q: "How do you modernize legacy monolithic applications?", a: "We utilize proven patterns like the Strangler Fig pattern, decomposing monoliths into microservices step-by-step with zero operational downtime." },
    { q: "Which cloud providers do you support?", a: "We design cloud-native reference architectures across Microsoft Azure, AWS, Google Cloud Platform (GCP), and hybrid/on-premise infrastructure." },
    { q: "How do we begin a Solution Architecture engagement?", a: "Schedule an Architecture Assessment. Our Chief Architects will audit your current tech stack, review business goals, and deliver a strategic blueprint." }
  ];

  return (
    <>
      {/* 10. TECHNOLOGY STACK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ECOSYSTEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Architecture Technology Ecosystem
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

      {/* 12. WHY DEVOPSTRIO SOLUTION ARCHITECTURE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ADVANTAGE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Why Devopstrio Solution Architecture
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
        ctaTitle="Architect Resilient Systems with"
        ctaHighlight="Solution Architecture"
        ctaDesc="Design cloud-native architectures that scale effortlessly across multi-cloud, microservices, and distributed data."
        ctaBtnText="REQUEST ARCHITECTURE REVIEW"
        backLink="/ecosystem/engineering-excellence"
      />
    </>
  );
}
