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

const faqs: FAQItem[] = [
  {
    q: "What engagement models do you support?",
    a: (
      <span>
        We support flexible, transparent engagement models including{" "}
        <strong className="text-white font-semibold">Dedicated Engineering Teams</strong> to scale your internal capacity,{" "}
        <strong className="text-white font-semibold">Project-Based Delivery</strong> for defined technical roadmaps, and{" "}
        <Link href="/services/managed-services" className="text-rose-500 hover:underline">
          24/7 Managed SRE Operations
        </Link>{" "}
        under guaranteed SLA commitments.
      </span>
    ),
    tags: ["Dedicated Engineering Pods", "Outcome-Based Roadmaps", "24/7 Managed SRE"]
  },
  {
    q: "How do you ensure zero-trust security during cloud migrations?",
    a: (
      <span>
        We deploy reproducible Infrastructure as Code (IaC) templates pre-scanned for vulnerabilities, isolate resources in private subnets, enforce strict IAM least-privilege policies, and configure mutual TLS (mTLS) under{" "}
        <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">
          zero-trust security architecture
        </Link>.
      </span>
    ),
    proof: "✓ Automated SAST/DAST IaC scanning · Zero-trust mTLS service meshes"
  },
  {
    q: "Do you sign strict Service Level Agreements (SLAs)?",
    a: (
      <span>
        Yes. For SRE operational maintenance and managed services, we sign formal, legally binding SLAs guaranteeing 99.99% system uptime and sub-15-minute response times for critical P1 alerts, backed by our{" "}
        <Link href="/about/global-presence" className="text-rose-500 hover:underline">
          follow-the-sun global delivery network
        </Link>.
      </span>
    ),
    proof: "✓ Guaranteed 99.99% uptime · <15 min P1 response commitment"
  },
  {
    q: "Can you modernize old legacy monoliths without service disruptions?",
    a: (
      <span>
        Yes. We utilize the proven Strangler Fig migration methodology to build modern cloud-native microservices alongside your existing monoliths, routing production traffic progressively through API gateways with zero system downtime as part of our{" "}
        <Link href="/services/digital-transformation" className="text-rose-500 hover:underline">
          digital transformation practice
        </Link>.
      </span>
    ),
    proof: "✓ Strangler Fig architecture · Zero downtime traffic migration"
  },
  {
    q: "What cloud providers do you specialize in?",
    a: (
      <span>
        We are certified engineering partners across AWS, Microsoft Azure, and Google Cloud Platform (GCP). We architect multi-cloud and hybrid landing zones that give enterprises agility, compliance guardrails, and total cloud vendor independence through{" "}
        <Link href="/services/cloud-services" className="text-rose-500 hover:underline">
          cloud architecture engineering
        </Link>.
      </span>
    ),
    tags: ["AWS Advanced Tier", "Microsoft Azure Partner", "Google Cloud Specialised"]
  },
  {
    q: "How do you approach automated CI/CD pipeline setup?",
    a: (
      <span>
        We build fully automated, immutable GitOps deployment pipelines using GitHub Actions, GitLab CI, ArgoCD, or Jenkins. We integrate automated regression testing, container vulnerability scanning, and automated rolling Kubernetes deployments via{" "}
        <Link href="/services/devops-automation" className="text-rose-500 hover:underline">
          DevOps automation
        </Link>.
      </span>
    ),
    tags: ["GitHub Actions", "GitLab CI", "Terraform & ArgoCD"]
  },
  {
    q: "Do you assist with cloud cost optimization (FinOps)?",
    a: (
      <span>
        Yes. We conduct deep infrastructure audits to eliminate idle resources, configure predictive auto-scaling, orchestrate spot instances, and recommend savings plan allocations to reduce cloud compute bills by 30% to 50% through our{" "}
        <Link href="/services/cloud-services" className="text-rose-500 hover:underline">
          FinOps cost optimization practice
        </Link>.
      </span>
    ),
    proof: "✓ Average 30–50% cloud compute spend reduction"
  },
  {
    q: "How do you manage database scaling and replication?",
    a: (
      <span>
        We architect high-availability database clusters across PostgreSQL, MySQL, MongoDB, and Redis, setting up automated multi-region read replicas, connection pooling, and sub-second failovers for mission-critical resilience under our{" "}
        <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">
          data platforms and AI engineering
        </Link>.
      </span>
    ),
    tags: ["Multi-Region Read Replicas", "Automated Failover", "Sub-10ms Latency"]
  },
  {
    q: "What compliance frameworks do your setups align with?",
    a: (
      <span>
        Our systems are engineered strictly against SOC-2 Type II, ISO 27001, HIPAA, PCI-DSS, and GDPR frameworks, ensuring encryption at rest and in transit, continuous automated audit logging, and role-based access controls via{" "}
        <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">
          cybersecurity & governance
        </Link>.
      </span>
    ),
    proof: "✓ SOC-2 Type II · HIPAA · PCI-DSS · ISO 27001 · GDPR compliant"
  },
  {
    q: "What is your onboarding timeline for dedicated teams?",
    a: (
      <span>
        We mobilize fully aligned, dedicated engineering pods within 10 to 14 business days. Every engineer is matched to your specific tech stack, communication tools, and agile rituals under our transparent{" "}
        <Link href="/about/global-presence" className="text-rose-500 hover:underline">
          global delivery model
        </Link>.
      </span>
    ),
    tags: ["10–14 Days Rapid Mobilisation", "Pre-vetted Senior Engineers"]
  },
  {
    q: "How do you handle disaster recovery and backup policies?",
    a: (
      <span>
        We implement automated cross-region snapshot replication, define unambiguous Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO), and execute routine simulated disaster recovery drills as part of our{" "}
        <Link href="/services/cloud-services" className="text-rose-500 hover:underline">
          cloud resilience strategy
        </Link>.
      </span>
    ),
    proof: "✓ Cross-region automated replication · Strict RPO/RTO validation"
  }
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-[#030303] text-white relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        
        {/* Header Block */}
        <Reveal className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
            Common Service <span className="text-rose-500 font-semibold">Inquiries</span>
          </h2>
        </Reveal>

        {/* Accordion FAQ (Open Line-Item Style Matching Contact FAQ) */}
        <div className="flex flex-col border-t border-zinc-900/80 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={faq.q}
                className="border-b border-zinc-900/80 py-6 sm:py-7 transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex justify-between items-center w-full text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-base sm:text-lg md:text-xl font-semibold text-zinc-200 group-hover:text-white transition-colors font-sans pr-4">
                    {faq.q}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-rose-500/40 group-hover:bg-zinc-800 transition-all flex-shrink-0 ml-4">
                    {isOpen ? <Minus size={18} className="text-rose-500" /> : <Plus size={18} />}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="mt-5 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-normal max-w-4xl animate-fadeIn flex flex-col gap-4">
                    <p>{faq.a}</p>
                    
                    {faq.proof && (
                      <span className="text-xs sm:text-sm text-emerald-400 font-semibold tracking-wide flex items-center gap-1.5">
                        {faq.proof}
                      </span>
                    )}

                    {faq.tags && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {faq.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3.5 py-1.5 rounded-lg bg-zinc-900/90 text-zinc-300 border border-zinc-800 text-xs sm:text-sm font-semibold tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Below FAQ Callout Bar */}
        <Reveal delay={0.15}>
          <div className="border border-zinc-900 bg-zinc-950/40 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 backdrop-blur-sm">
            <p className="text-zinc-300 text-sm md:text-base font-medium max-w-xl text-center sm:text-left">
              Have a specific question regarding your technical stack, architecture audit, or team scaling?
            </p>
            <Link 
              href="/contact#contact-form"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#E11D48] hover:bg-rose-600 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:-translate-y-0.5 shrink-0"
            >
              Talk to an Architect <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default FaqSection;
