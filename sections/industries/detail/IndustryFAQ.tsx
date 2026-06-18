"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface FAQItem {
  q: string;
  a: string;
}

interface IndustryFAQProps {
  faqs: FAQItem[];
}

const defaultExtraFAQs: FAQItem[] = [
  {
    q: "How does Devopstrio manage Infrastructure-as-Code (IaC) drift?",
    a: "We deploy active GitOps controllers (ArgoCD or Flux) alongside custom Terraform execution agents. When manual changes are made in the cloud console, our monitoring systems trigger immediate drift alerts and reconcile the state back to the Git source of truth."
  },
  {
    q: "What is your typical SLA response time for production incidents?",
    a: "We offer tiered Support SLAs. For Critical P1 incidents, our 24/7 Site Reliability Engineers guarantee a response and containment plan initiation in under 15 minutes, backed by redundant pager alarms."
  },
  {
    q: "Do you support migration across different public clouds (e.g. AWS to Azure)?",
    a: "Yes. We design cloud-agnostic application models using Kubernetes, Docker, and standard Terraform variables, enabling seamless target-destination shifting with minimal adjustments to the core database layer."
  },
  {
    q: "How do you secure secrets and sensitive access keys in pipelines?",
    a: "We enforce zero-secret code repositories. All database credentials, tokens, and keys are stored in encrypted vaults (HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault) and are dynamically injected into running containers using secure IAM roles."
  },
  {
    q: "How do you optimize public cloud spending and cost controls (FinOps)?",
    a: "We set up automated resource scheduling (shutting down non-production environments after hours), configure Karpenter auto-scaling compute models, and analyze cost graphs to recommend AWS Savings Plans and spot instances."
  },
  {
    q: "What monitoring tools and dashboards do you configure?",
    a: "We standardize on open-source OpenTelemetry agents, routing application traces, metrics, and logs to unified visualization layers like Grafana, Datadog, or Elasticsearch, complete with custom threshold alerts."
  },
  {
    q: "How do you guarantee database replication integrity during migrations?",
    a: "We utilize dual-write application strategies or change data capture (CDC) streaming tools like Debezium, ensuring the destination database is completely in sync with the source database before we switch DNS records."
  },
  {
    q: "Do you assist in third-party security audits (e.g. SOC2, HIPAA)?",
    a: "Yes. We configure automated compliance check pipelines (using Wiz, Snyk, and SonarQube) that audit code, containers, and live infrastructure against SOC2, ISO27001, PCI-DSS, or HIPAA compliance controls."
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
    <section id="faq" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-12 xl:px-8 relative z-10 text-left">

        {/* Section Header */}
        <Reveal className="mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white">
            Technical <span className="text-[#E11D48]">clarifications</span>
          </h2>
        </Reveal>

        {/* Accordion List */}
        <div className="flex flex-col gap-5">
          {finalFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <Reveal key={idx} className="w-full">
                <div className={`group bg-[#0b0b0c] border rounded-[20px] overflow-hidden transition-all duration-300 relative ${
                  isOpen ? "border-rose-500/40 shadow-[0_4px_20px_rgba(244,63,94,0.03)]" : "border-white/10 hover:border-rose-500/35"
                }`}>
                  
                  {/* Subtle Inner Glow on Hover/Active */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent transition-opacity duration-500 pointer-events-none z-0 ${
                    isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`} />

                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors relative z-10"
                  >
                    <span className="text-sm md:text-base font-bold text-zinc-200 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-rose-950/15 group-hover:border-rose-500/20 transition-all duration-300 ${
                      isOpen ? "text-white bg-rose-950/20 border-rose-500/30" : ""
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  <div className={`transition-all duration-350 ease-in-out relative z-10 ${
                    isOpen ? "max-h-[300px] border-t border-white/5 p-6 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                  }`}>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
