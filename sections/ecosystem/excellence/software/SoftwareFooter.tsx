"use client";

import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Plus, Minus, Code2, CloudCog, ShieldCheck, Cpu, GitPullRequest, Layers, Users, HeartHandshake } from "lucide-react";
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
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-rose-500 mb-3 block">ADVANTAGE</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">Why Devopstrio Engineering</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/50 hover:bg-zinc-900 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-rose-500/10 group-hover:border-rose-500/30 transition-all">
                    <Icon className="w-6 h-6 text-zinc-300 group-hover:text-rose-500 transition-colors" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <FAQ faqs={faqs} />
      <CTA
        ctaTitle="Engineer High-Velocity Enterprise"
        ctaHighlight="Software Systems"
        ctaDesc="Partner with Devopstrio software engineers to architect resilient APIs, scalable microservices, and modern web applications."
        ctaBtnText="CONSULT SOFTWARE TEAM"
        backLink="/ecosystem/engineering-excellence"
      />
    </>
  );
}
