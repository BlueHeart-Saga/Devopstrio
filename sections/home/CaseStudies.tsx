"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Award, Zap, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    tag: "AI WORKFLOW AUTOMATION",
    title: "AI recruitment scoring & candidate ingestion engine",
    challenge: "Recruiting teams lacked reliable audit trails, resulting in manual processing delays across high-volume hiring programs.",
    strategy: "Embed governed LLM-based evaluation metrics and create high-concurrency screening pipelines.",
    solution: "Designed and deployed a highly resilient AI screening platform processing over 100,000 candidate records.",
    technologies: ["Next.js", "FastAPI", "OpenAI API", "PostgreSQL", "Kubernetes"],
    result: "75% reduction in candidate screening cycle time"
  },
  {
    tag: "CLOUD NATIVE PLATFORMS",
    title: "Infrastructure modernization for regulated fintech operation",
    challenge: "A legacy virtualization environment slowed release cadences, increased cloud spend, and introduced operational compliance drift.",
    strategy: "Implement multi-region secure landing zones, transition to declarative Infrastructure as Code (IaC), and institute strict SRE metrics.",
    solution: "Successfully migrated core payment channels to a Kubernetes operating model backed by automated CI/CD security gating.",
    technologies: ["Azure Cloud", "HashiCorp Terraform", "GitHub Actions", "SIEM Tools"],
    result: "38% infrastructure operating cost reduction"
  },
  {
    tag: "ENTERPRISE BUSINESS DATA",
    title: "Unified analytics dashboard layer for executive oversight",
    challenge: "C-suite executives lacked integrated dashboard visibility across core financial, operational, and customer performance databases.",
    strategy: "Create real-time semantic data routing, clean up database index models, and deploy responsive UI layers.",
    solution: "Delivered a secure operational intelligence platform for enterprise strategy, sales, and analytics divisions.",
    technologies: ["AWS", "Python Engine", "React", "Vector Databases", "Apache Kafka"],
    result: "12x speedup in real-time executive report compiling"
  }
];

export function CaseStudies() {
  return (
    <section id="cases" className="w-full py-20 md:py-32 bg-[#050505] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-20 items-start">
        
        {/* Left Side: Overview & Trusted Stats */}
        <div className="sticky top-28 flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">

              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                CLIENT IMPACT
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
              Real outcomes delivered for <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">ambitious organizations</span>.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-bold mb-8 max-w-sm">
              We focus on delivering measurable engineering improvement, not just theoretical blueprints. Explore our recent engineering case studies.
            </p>
          </div>

          {/* Quick Metrics Card */}
          <div className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-xl flex flex-col gap-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-rose-950/20 flex items-center justify-center text-rose-500">
                <Award size={16} />
              </div>
              <span className="text-xs font-semibold text-zinc-200">Delivery Excellence</span>
            </div>
            <div className="flex flex-col gap-1.5 border-t border-zinc-900 pt-4">
              <span className="text-2xl font-bold text-rose-500">100,000+</span>
              <span className="text-xs text-zinc-450 leading-relaxed font-bold">Candidate profiles processed securely through AI recruitment integrations.</span>
            </div>
            <div className="flex flex-col gap-1.5 border-t border-zinc-900 pt-4">
              <span className="text-2xl font-bold text-rose-500">99.99%</span>
              <span className="text-xs text-zinc-450 leading-relaxed font-bold">Uptime achieved across core transactional banking systems.</span>
            </div>
          </div>
        </div>

        {/* Right Side: Case Studies List */}
        <div className="flex flex-col gap-16 divide-y divide-zinc-900">
          {caseStudies.map((study, idx) => (
            <Reveal key={study.title} className={`flex flex-col gap-6 ${idx > 0 ? "pt-16" : ""}`}>
              
              {/* Tag and Title */}
              <div>
                <span className="text-xs font-mono tracking-widest text-rose-500 block mb-2">
                  {study.tag}
                </span>
                <h3 className="text-xl md:text-2xl font-normal text-white">
                  {study.title}
                </h3>
              </div>

              {/* Challenge -> Strategy -> Solution */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-455 border-y border-zinc-900/60 py-6">
                <div>
                  <span className="block font-semibold text-zinc-300 mb-1">Challenge</span>
                  <p className="leading-relaxed font-bold">{study.challenge}</p>
                </div>
                <div>
                  <span className="block font-semibold text-zinc-300 mb-1">Strategy</span>
                  <p className="leading-relaxed font-bold">{study.strategy}</p>
                </div>
                <div>
                  <span className="block font-semibold text-zinc-300 mb-1">Solution</span>
                  <p className="leading-relaxed font-bold">{study.solution}</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-mono text-zinc-500 mr-2 uppercase">Core Tech:</span>
                {study.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-0.5 bg-zinc-900 border border-zinc-850 rounded text-xs text-zinc-350"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Result Indicator */}
              <div className="inline-flex items-center gap-2 p-3 bg-rose-950/20 border border-rose-900/30 rounded-lg text-rose-500 text-sm font-semibold max-w-max mt-2">
                <Zap size={14} />
                <span>{study.result}</span>
              </div>

            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
