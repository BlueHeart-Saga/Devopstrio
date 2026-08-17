"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface FaqItem {
  q: string;
  a: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    q: "What engagement models do you support?",
    a: <>We support flexible engagement models including Dedicated Engineering Teams to scale your capacity, Project-Based Delivery for defined roadmaps, and <Link href="/ecosystem/global-delivery" className="text-rose-500 hover:underline">24/7 Managed SRE Operations</Link> under strict SLAs.</>
  },
  {
    q: "How do you ensure zero-trust security during cloud migrations?",
    a: <>We deploy Infrastructure as Code (IaC) templates scanned for vulnerabilities, lock resources in private VPC subnets, and configure mutual TLS (mTLS) to encrypt service-to-service communications under <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">zero-trust security</Link> principles.</>
  },
  {
    q: "Do you sign strict Service Level Agreements (SLAs)?",
    a: <>Yes. For SRE support and operational maintenance, we sign formal SLAs defining target response times (under 15 minutes for P1 critical alerts) and guaranteed uptime metrics, backed by our <Link href="/ecosystem/global-delivery" className="text-rose-500 hover:underline">global delivery team</Link>.</>
  },
  {
    q: "Can you modernize old legacy monoliths without service disruptions?",
    a: <>Yes. We use the Strangler Fig migration pattern to build microservices incrementally alongside your legacy backend, routing traffic through an API gateway with zero downtime as part of our <Link href="/services/digital-transformation" className="text-rose-500 hover:underline">digital transformation service</Link>.</>
  },
  {
    q: "What cloud providers do you specialize in?",
    a: <>We are certified partners across AWS, Microsoft Azure, and Google Cloud Platform (GCP), designing <Link href="/services/cloud-services" className="text-rose-500 hover:underline">multi-cloud architectures</Link> to avoid vendor lock-in.</>
  },
  {
    q: "How do you approach automated CI/CD pipeline setup?",
    a: <>We build fully automated pipelines using GitHub Actions, GitLab CI, or Jenkins. We integrate automated testing, static analysis security testing (SAST), and rolling Kubernetes updates through <Link href="/services/devops-automation" className="text-rose-500 hover:underline">devops automation</Link>.</>
  },
  {
    q: "Do you assist with cloud cost optimization (FinOps)?",
    a: <>Yes. We audit your cloud footprint to eliminate idle resources, configure auto-scaling, set up spot instances, and recommend compute savings plans to reduce cloud spend by 30-50% through our <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud services</Link>.</>
  },
  {
    q: "How do you manage database scaling and replication?",
    a: <>We architect high-availability database clusters using PostgreSQL, MySQL, and Redis, configuring read replicas, connection pooling, and automated failovers for disaster recovery via <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">data innovation frameworks</Link>.</>
  },
  {
    q: "What compliance frameworks do your setups align with?",
    a: <>Our architectures follow SOC-2 Type II, HIPAA, PCI-DSS, and GDPR guidelines, ensuring built-in encryption at rest and in transit, auditing, and IAM least-privilege policies to ensure robust <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">cybersecurity posture</Link>.</>
  },
  {
    q: "What is your onboarding timeline for dedicated teams?",
    a: <>We can mobilize fully aligned engineering pods within 10 to 14 days, including matching specialized skillsets to your specific technology stack and workflows under our <Link href="/ecosystem/global-delivery" className="text-rose-500 hover:underline">global delivery model</Link>.</>
  },
  {
    q: "How do you handle disaster recovery and backup policies?",
    a: <>We configure automated cross-region backup replication, define clear Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO), and run simulated disaster recovery drills as part of our <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud resilience strategy</Link>.</>
  }
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-24 bg-[#030303] text-white">
      <div className="max-w-4xl mx-auto px-12 xl:px-8">

        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white font-sans">
              Common Service <span className="text-rose-500 font-semibold">Inquiries</span>
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx} delay={idx * 0.03} className="w-full">
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 border backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.25)] ${
                  isOpen ? "bg-zinc-950/60 border-white/15 hover:border-rose-500/30" : "bg-transparent border-white/10 hover:border-rose-500/25 hover:bg-zinc-950/40"
                }`}>
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg md:text-xl font-semibold text-white tracking-tight group-hover:text-rose-400 transition-colors font-sans">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-rose-500/30 transition-all flex-shrink-0 ml-4">
                      {isOpen ? <Minus size={16} className="text-rose-500" /> : <Plus size={16} />}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-350 ease-in-out ${
                      isOpen ? "max-h-[500px] border-t border-white/10 p-6 sm:p-7 pt-5" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-normal">
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
