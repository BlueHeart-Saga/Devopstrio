"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Plus, Minus, ShieldCheck, Bot, Cloud, CheckCircle2, FileCheck, Sliders, Cpu, Lock } from "lucide-react";
import Link from "next/link";

export function DevSecOpsOutcomesFooter() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const techStack = [
    { category: "DevSecOps Platforms", items: ["GitHub Advanced Security", "GitLab", "Azure DevOps", "Jenkins"] },
    { category: "Security & Scanning", items: ["Microsoft Defender", "Trivy", "OWASP ZAP", "SonarQube", "Checkov", "Snyk"] },
    { category: "Containers", items: ["Docker", "Kubernetes", "Helm"] },
    { category: "Infrastructure", items: ["Terraform", "Bicep", "Ansible"] },
    { category: "Monitoring", items: ["Prometheus", "Grafana", "Azure Monitor", "Elastic Stack"] },
    { category: "Cloud", items: ["Microsoft Azure", "AWS", "Google Cloud", "Oracle Cloud"] }
  ];

  const businessOutcomes = [
    { title: "Secure", metric: "Software Releases", desc: "Block vulnerabilities from entering production environments via automated quality gates." },
    { title: "Reduced", metric: "Security Risks", desc: "Minimize exposure by catching bugs early in local IDEs and PR reviews." },
    { title: "Faster", metric: "Deployment Cycles", desc: "Eliminate manual security sign-off bottlenecks with continuous compliance checks." },
    { title: "Continuous", metric: "Compliance", desc: "Maintain real-time audit readiness for ISO 27001, SOC 2, and GDPR." },
    { title: "Cloud", metric: "Security Posture", desc: "Enforce uniform posture management (CSPM) across Azure, AWS, and Kubernetes fleets." },
    { title: "Trusted", metric: "Enterprise Delivery", desc: "Deliver high-velocity software backed by software bill of materials (SBOM) provenance." }
  ];

  const whyChooseUs = [
    { title: "Security by Design", icon: ShieldCheck },
    { title: "Automated Security Pipelines", icon: Bot },
    { title: "Cloud-Native Protection", icon: Cloud },
    { title: "Continuous Compliance", icon: CheckCircle2 },
    { title: "Enterprise Governance", icon: FileCheck },
    { title: "Modern DevSecOps Practices", icon: Sliders },
    { title: "AI-Driven Security Operations", icon: Cpu },
    { title: "End-to-End Secure Delivery", icon: Lock }
  ];

  const faqs = [
    { q: "What is DevSecOps?", a: "DevSecOps stands for Development, Security, and Operations. It is an engineering approach that integrates security practices throughout the entire software delivery lifecycle rather than treating security as a final gate." },
    { q: "How does DevSecOps improve software delivery?", a: "By shifting security left, developers find and fix vulnerabilities early when they are cheap and easy to resolve. This eliminates last-minute security blocks and accelerates overall release velocity." },
    { q: "Do you integrate security into CI/CD pipelines?", a: "Yes. We embed automated security scanning tools (SAST, DAST, SCA, secret scanning, container scanning) directly into GitHub Actions, Azure DevOps, GitLab, and Jenkins pipelines." },
    { q: "Which cloud platforms do you secure?", a: "We secure workloads across Microsoft Azure, AWS, Google Cloud, and multi-cloud environments using unified Cloud Security Posture Management (CSPM) and Infrastructure as Code scanning." },
    { q: "Do you support Kubernetes security?", a: "Yes. We implement Kubernetes cluster hardening, RBAC controls, pod security standards, container image vulnerability scanning, and eBPF runtime protection." },
    { q: "How do you manage compliance?", a: "We use Compliance as Code tools to map security controls automatically to regulatory frameworks such as ISO 27001, SOC 2, GDPR, HIPAA, and PCI DSS." },
    { q: "Can you secure existing applications?", a: "Yes. We perform initial security audits, introduce automated pipeline security gates, and help teams remediate existing vulnerabilities without disrupting active development." },
    { q: "How do we start a DevSecOps engagement?", a: "Contact us to schedule an initial Security Assessment. We will evaluate your current CI/CD pipelines, cloud posture, and development workflows to build a DevSecOps roadmap." }
  ];

  return (
    <>
      {/* 11. TECHNOLOGY STACK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 mb-3 block">ECOSYSTEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              DevSecOps Technology Stack
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-2xl">
                <h4 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-500 mb-6 border-b border-zinc-900 pb-4">
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

      {/* 12. BUSINESS OUTCOMES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 mb-3 block">IMPACT & ROI</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Measurable Business Outcomes
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessOutcomes.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/80 border border-zinc-900 rounded-3xl relative overflow-hidden group hover:border-red-500/40 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-colors pointer-events-none" />
                <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest block mb-2">{item.title}</span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-4">{item.metric}</h3>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. WHY DEVOPSTRIO DEVSECOPS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 mb-3 block">ADVANTAGE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Why Devopstrio DevSecOps
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-red-500/50 hover:bg-zinc-900 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all">
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-red-500 transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60 z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Questions about <span className="text-white font-bold bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">DevSecOps Engineering</span>.
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
                    <div className="text-zinc-550 group-hover:text-red-500 transition-colors ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <div className={`mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl flex flex-col gap-4 ${isOpen ? "block animate-fadeIn" : "hidden"}`}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15. CTA */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.035),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Secure Every Release with Devopstrio</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Build and deliver software confidently with Devopstrio's DevSecOps approach—combining automation, cloud security, compliance, and continuous protection across your entire software delivery lifecycle.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(239,68,68,0.2)]"
            >
              Schedule a Security Consultation
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-white/5 transition-all duration-300"
            >
              Explore DevSecOps Services
              <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
