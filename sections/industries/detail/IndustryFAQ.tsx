"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface FAQItem {
  q: string;
  a: React.ReactNode;
  proof?: string;
  tags?: string[];
}

interface IndustryFAQProps {
  faqs: FAQItem[];
}

const defaultExtraFAQs: FAQItem[] = [
  {
    q: "How does Devopstrio manage Infrastructure-as-Code (IaC) drift?",
    a: <>We deploy active <Link href="/services/devops-automation" className="text-rose-500 hover:underline">GitOps controllers</Link> (ArgoCD or Flux) alongside custom Terraform execution agents. When manual changes are made in the cloud console, our monitoring systems trigger immediate drift alerts and reconcile the state back to the Git source of truth.</>,
    tags: ["ArgoCD & Flux", "Terraform Drift Engine", "Automated Reconciliation"]
  },
  {
    q: "What is your typical SLA response time for production incidents?",
    a: <>We offer tiered Support SLAs. For Critical P1 incidents, our 24/7 <Link href="/services/devops-automation/site-reliability-engineering" className="text-rose-500 hover:underline">Site Reliability Engineers</Link> guarantee a response and containment plan initiation in under 15 minutes, backed by redundant pager alarms.</>,
    proof: "✓ 15-Minute Guaranteed P1 Escalation SLA"
  },
  {
    q: "Do you support migration across different public clouds (e.g. AWS to Azure)?",
    a: <>Yes. We design cloud-agnostic application models using <Link href="/services/cloud-services" className="text-rose-500 hover:underline">Kubernetes</Link>, Docker, and standard Terraform variables, enabling seamless target-destination shifting with minimal adjustments to the core database layer.</>,
    tags: ["Multi-Cloud Native", "AWS / Azure / GCP", "Zero Lock-In"]
  },
  {
    q: "How do you secure secrets and sensitive access keys in pipelines?",
    a: <>We enforce zero-secret code repositories. All database credentials, tokens, and keys are stored in encrypted vaults (HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault) and are dynamically injected into running containers using <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">secure IAM roles</Link>.</>,
    proof: "✓ Zero-Secret Codebase · Encrypted Vault Injection"
  },
  {
    q: "How do you optimize public cloud spending and cost controls (FinOps)?",
    a: <>We set up automated resource scheduling (shutting down non-production environments after hours), configure Karpenter <Link href="/services/cloud-services" className="text-rose-500 hover:underline">auto-scaling compute models</Link>, and analyze cost graphs to recommend AWS Savings Plans and spot instances.</>,
    tags: ["15–50% Cost Savings", "FinOps Telemetry", "Karpenter Auto-scaling"]
  },
  {
    q: "What monitoring tools and dashboards do you configure?",
    a: <>We standardize on open-source <Link href="/services/devops-automation" className="text-rose-500 hover:underline">OpenTelemetry</Link> agents, routing application traces, metrics, and logs to unified visualization layers like Grafana, Datadog, or Elasticsearch, complete with custom threshold alerts.</>,
    proof: "✓ Unified Grafana & OpenTelemetry Observability"
  },
  {
    q: "How do you guarantee database replication integrity during migrations?",
    a: <>We utilize dual-write application strategies or change data capture (CDC) streaming tools like Debezium, ensuring the <Link href="/services/cloud-services" className="text-rose-500 hover:underline">destination database</Link> is completely in sync with the source database before we switch DNS records.</>,
    tags: ["CDC Replication", "Zero-Downtime Migration", "Dual-Write Verification"]
  },
  {
    q: "Do you assist in third-party security audits (e.g. SOC2, HIPAA)?",
    a: <>Yes. We configure automated compliance check pipelines (using Wiz, Snyk, and SonarQube) that audit code, containers, and live infrastructure against SOC2, ISO27001, PCI-DSS, or HIPAA <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">compliance controls</Link>.</>,
    proof: "✓ Pre-Audited Compliance Architecture"
  }
];

export function IndustryFAQ({ faqs }: IndustryFAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Pad the incoming FAQs list to at least 10 items
  const mergedFaqs = [...faqs];
  let extraIdx = 0;
  while (mergedFaqs.length < 10 && extraIdx < defaultExtraFAQs.length) {
    const isDup = mergedFaqs.some(
      item => item.q.toLowerCase() === defaultExtraFAQs[extraIdx].q.toLowerCase()
    );
    if (!isDup) {
      mergedFaqs.push(defaultExtraFAQs[extraIdx]);
    }
    extraIdx++;
  }
  const finalFaqs = mergedFaqs.slice(0, 10);

  return (
    <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] border-b border-zinc-900/60 text-white relative font-sans">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-rose-500 uppercase font-semibold block mb-3">
            KNOWLEDGE BASE & FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight mb-4">
            Technical <span className="bg-gradient-to-r from-red-500 via-rose-500 to-rose-400 bg-clip-text text-transparent font-semibold">clarifications</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
            Everything you need to know about our engineering standards, architecture models, compliance frameworks, and deployment SLA guarantees.
          </p>
        </Reveal>

        {/* Accordion FAQ List */}
        <div className="flex flex-col border-t border-zinc-900 mb-16">
          {finalFaqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="border-b border-zinc-900 py-6 sm:py-7 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex justify-between items-center w-full text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors font-sans pr-4">
                    {item.q}
                  </span>
                  <div className="text-zinc-400 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </div>
                </button>
                
                <div className={`mt-5 text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-normal max-w-4xl flex flex-col gap-4 ${isOpen ? "block animate-fadeIn" : "hidden"}`}>
                  <div>{item.a}</div>
                  
                  {item.proof && (
                    <span className="text-xs sm:text-sm text-emerald-400 font-semibold tracking-wide block mt-1">
                      {item.proof}
                    </span>
                  )}

                  {item.tags && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1.5 rounded-lg bg-zinc-900/90 text-zinc-300 border border-zinc-800 text-xs sm:text-sm font-semibold tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Below FAQ Callout Box */}
        <Reveal delay={0.2}>
          <div className="border border-zinc-900 bg-zinc-950/40 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 hover:border-zinc-800 transition-colors">
            <p className="text-zinc-300 text-sm sm:text-base font-normal max-w-2xl">
              Still have technical questions? Don&apos;t sit with them. Reach out to our principal solutions architects — we respond to every query personally.
            </p>
            <Link 
              href="/contact#contact-form"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase border border-rose-500/30 hover:border-rose-500/60 bg-rose-950/30 hover:bg-rose-900/50 text-rose-400 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Consult Our Engineers <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
