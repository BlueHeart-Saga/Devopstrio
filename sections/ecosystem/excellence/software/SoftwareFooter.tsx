"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Check, Plus, Minus, Code2, CloudCog, ShieldCheck, Cpu, GitPullRequest, Layers, Users, HeartHandshake } from "lucide-react";
import Link from "next/link";

export function SoftwareFooter() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyChooseUs = [
    { title: "Modern Technology Stack", icon: Code2 },
    { title: "Cloud-Native Development", icon: CloudCog },
    { title: "Security-First Engineering", icon: ShieldCheck },
    { title: "AI-Driven Innovation", icon: Cpu },
    { title: "Agile Delivery", icon: GitPullRequest },
    { title: "Enterprise Architecture", icon: Layers },
    { title: "Scalable Engineering Teams", icon: Users },
    { title: "Long-Term Technology Partnership", icon: HeartHandshake }
  ];

  const faqs = [
    { q: "What software development services do you provide?", a: "We provide end-to-end software engineering including enterprise web applications, SaaS platform development, API engineering, legacy modernization, and mobile backend services." },
    { q: "Do you build enterprise SaaS platforms?", a: "Yes, we specialize in building highly scalable, secure, and multi-tenant SaaS platforms using cloud-native architectures and modern frameworks." },
    { q: "Which programming languages do you use?", a: "Our core stack includes TypeScript (React, Next.js, Node.js), Python (FastAPI), and C# (.NET). We adapt our stack based on your specific enterprise needs." },
    { q: "Do you develop cloud-native applications?", a: "Absolutely. We design applications specifically for cloud environments (AWS, Azure, GCP) using microservices, containers (Docker/Kubernetes), and serverless patterns." },
    { q: "How do you ensure software quality?", a: "We enforce strict quality standards through automated unit, integration, and UI testing (Playwright/Cypress), mandatory code reviews, and continuous integration pipelines." },
    { q: "Can you modernize legacy applications?", a: "Yes. We use a phased modernization approach—ranging from API wrapping to complete re-platforming and microservice extraction—to modernize legacy systems without business disruption." },
    { q: "How do you manage software security?", a: "We practice DevSecOps, meaning security is integrated throughout the SDLC. This includes secure coding practices, automated SAST/DAST scanning, dependency checking, and zero-trust principles." },
    { q: "How can we start a project?", a: "You can reach out via our contact page to schedule an initial discovery call. We'll discuss your business needs, perform an initial architecture assessment, and propose an engineering roadmap." }
  ];

  return (
    <>
      {/* 13. WHY DEVOPSTRIO ENGINEERING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ADVANTAGE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Why Devopstrio Engineering</h2>
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
              Questions we get <span className="text-white font-bold bg-gradient-to-r from-red-650 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
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
                  <div className={`mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl flex flex-col gap-4 ${isOpen ? "block animate-fadeIn" : "hidden"}`}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.035),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Build Better Software with Devopstrio</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with Devopstrio to design, develop, and scale secure, cloud-native software that accelerates innovation and delivers measurable business value.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Start Your Project
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-white/5 transition-all duration-300"
            >
              Speak with an Engineering Expert
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
