"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    q: "What engagement models do you support?",
    a: "We support flexible engagement models including Dedicated Engineering Teams to scale your capacity, Project-Based Delivery for defined roadmaps, and 24/7 Managed SRE Operations under strict SLAs."
  },
  {
    q: "How do you ensure zero-trust security during cloud migrations?",
    a: "We deploy Infrastructure as Code (IaC) templates scanned for vulnerabilities, lock resources in private VPC subnets, and configure mutual TLS (mTLS) to encrypt service-to-service communications."
  },
  {
    q: "Do you sign strict Service Level Agreements (SLAs)?",
    a: "Yes. For SRE support and operational maintenance, we sign formal SLAs defining target response times (under 15 minutes for P1 critical alerts) and guaranteed uptime metrics."
  },
  {
    q: "Can you modernize old legacy monoliths without service disruptions?",
    a: "Yes. We use the Strangler Fig migration pattern to build microservices incrementally alongside your legacy backend, routing traffic through an API gateway with zero downtime."
  },
  {
    q: "What cloud providers do you specialize in?",
    a: "We are certified partners across AWS, Microsoft Azure, and Google Cloud Platform (GCP), designing multi-cloud architectures to avoid vendor lock-in."
  },
  {
    q: "How do you approach automated CI/CD pipeline setup?",
    a: "We build fully automated pipelines using GitHub Actions, GitLab CI, or Jenkins. We integrate automated testing, static analysis security testing (SAST), and rolling Kubernetes updates."
  },
  {
    q: "Do you assist with cloud cost optimization (FinOps)?",
    a: "Yes. We audit your cloud footprint to eliminate idle resources, configure auto-scaling, set up spot instances, and recommend compute savings plans to reduce cloud spend by 30-50%."
  },
  {
    q: "How do you manage database scaling and replication?",
    a: "We architect high-availability database clusters using PostgreSQL, MySQL, and Redis, configuring read replicas, connection pooling, and automated failovers for disaster recovery."
  },
  {
    q: "What compliance frameworks do your setups align with?",
    a: "Our architectures follow SOC-2 Type II, HIPAA, PCI-DSS, and GDPR guidelines, ensuring built-in encryption at rest and in transit, auditing, and IAM least-privilege policies."
  },
  {
    q: "What is your onboarding timeline for dedicated teams?",
    a: "We can mobilize fully aligned engineering pods within 10 to 14 days, including matching specialized skillsets to your specific technology stack and workflows."
  },
  {
    q: "How do you handle disaster recovery and backup policies?",
    a: "We configure automated cross-region backup replication, define clear Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO), and run simulated disaster recovery drills."
  }
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">

        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white uppercase">
              Common service <span className="text-rose-500">inquiries</span>
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx} delay={idx * 0.03} className="w-full">
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 border backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.25)] ${
                  isOpen ? "bg-zinc-950/50 border-white/10 hover:border-rose-500/20" : "bg-transparent border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/30"
                }`}>
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-xs md:text-sm font-bold text-white tracking-wide">
                      {faq.q}
                    </span>
                    <span className="text-zinc-500 hover:text-white transition-colors flex-shrink-0 ml-4">
                      {isOpen ? <Minus size={14} className="text-rose-500" /> : <Plus size={14} />}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-350 ease-in-out ${
                      isOpen ? "max-h-[300px] border-t border-white/5 p-6 pt-4" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    <p className="text-xs md:text-sm text-zinc-200 leading-relaxed font-semibold">
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
