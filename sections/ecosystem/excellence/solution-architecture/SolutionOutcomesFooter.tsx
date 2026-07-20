"use client";

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
      <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60 z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Questions about <span className="text-white font-bold bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 bg-clip-text text-transparent">Solution Architecture</span>.
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
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl animate-fadeIn flex flex-col gap-4">
                      <p>{faq.a}</p>
                    </div>
                  )}
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
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Design Future-Proof Architectures with Devopstrio</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with Devopstrio to establish scalable, secure, and cloud-native solution blueprints that power enterprise growth.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Schedule an Architecture Assessment
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-white/5 transition-all duration-300"
            >
              Talk to a Chief Architect
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
