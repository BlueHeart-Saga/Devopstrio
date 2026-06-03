"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { 
  CheckCircle2, BrainCircuit, Cloud, Cpu, ShieldCheck, 
  Blocks, Target, Globe2, Network
} from "lucide-react";

const advantages = [
  {
    title: "AI-Powered Innovation",
    desc: "Transform operations with intelligent automation, AI solutions, machine learning, and data-driven decision-making.",
    icon: BrainCircuit,
    image: "/assets/cases/case_aihire.png"
  },
  {
    title: "Cloud Without Complexity",
    desc: "Design, migrate, and manage secure cloud environments across AWS, Azure, Google Cloud, and hybrid infrastructures.",
    icon: Cloud,
    image: "/assets/cases/case_search.png"
  },
  {
    title: "DevOps & Infrastructure Automation",
    desc: "Accelerate software delivery with CI/CD pipelines, Infrastructure as Code, platform engineering, and automated operations.",
    icon: Cpu,
    image: "/assets/cases/case_aml.png"
  },
  {
    title: "Enterprise Security First",
    desc: "Protect applications, cloud platforms, and critical business assets with proactive security and compliance-focused architectures.",
    icon: ShieldCheck,
    image: "/assets/cases/case_nhs.png"
  },
  {
    title: "Scalable Digital Products",
    desc: "Build modern web applications, SaaS platforms, mobile applications, and enterprise software engineered for long-term growth.",
    icon: Blocks,
    image: "/assets/cases/case_edtech.png"
  },
  {
    title: "Industry-Focused Solutions",
    desc: "Delivering specialised technology solutions for Financial Services, Healthcare, Telecommunications, Logistics, Retail, Manufacturing, Media, and Public Sector organisations.",
    icon: Target,
    image: "/assets/why_hero.png"
  },
  {
    title: "Global Delivery Excellence",
    desc: "Supporting businesses across multiple regions with expert engineering teams, 24×7 operational support, and proven delivery frameworks.",
    icon: Globe2,
    image: "/assets/cases/case_search.png"
  },
  {
    title: "End-to-End Technology Partnership",
    desc: "From strategy and architecture to implementation, optimisation, and managed services, we help organisations succeed at every stage of digital transformation.",
    icon: Network,
    image: "/assets/cases/case_aml.png"
  }
];

export function OurAdvantage() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#030303] text-white border-y border-zinc-900 relative overflow-x-hidden">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        {/* Header Section */}
        <Reveal className="max-w-4xl mx-auto mb-10 flex flex-col items-center text-center gap-6">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block  px-4 py-1.5 ">
              THE DEVOPSTRIO ADVANTAGE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1] mt-2">
            Technology Without Limits <br className="hidden md:block" />
            <span className="font-bold">Built for Growth. Proven by Results</span>
          </h2>
          <div className="flex flex-col gap-4 text-zinc-400 text-base md:text-lg leading-relaxed mt-4 max-w-3xl mx-auto">
            <p>
              At DevOpsTrio, we help organisations modernise infrastructure, accelerate innovation, and unlock new growth opportunities through AI, Cloud, DevOps, Security, and Digital Engineering.
            </p>
            <p>
              From startups to enterprises and public sector organisations, we deliver scalable, secure, and future-ready technology solutions that create measurable business impact.
            </p>
          </div>
        </Reveal>
      </div>

        {/* Full-width Infinite Scroll Marquee with Fade-Out Edges */}
        <div 
          className="relative w-full overflow-hidden py-4 flex"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 0.75rem)); }
            }
            .animate-marquee {
              animation: marquee 50s linear infinite;
              display: flex;
              gap: 1.5rem;
              width: max-content;
              padding-left: 1.5rem;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="animate-marquee">
            {/* Render 2 sets of advantages for seamless infinite loop */}
            {[...advantages, ...advantages].map((adv, index) => {
              const Icon = adv.icon;
              return (
                <div 
                  key={`${adv.title}-${index}`}
                  className="w-[300px] md:w-[350px] shrink-0 p-6 md:p-8 rounded-2xl border border-zinc-800/60 bg-zinc-950/80 hover:border-zinc-700 transition-all duration-500 group flex flex-col gap-4 relative overflow-hidden shadow-2xl cursor-default"
                >
                  {/* Distinct Image Background Overlay */}
                  <div className="absolute inset-0 z-0 opacity-[0.15] group-hover:opacity-30 transition-opacity duration-700 pointer-events-none mix-blend-screen">
                    <img src={adv.image} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
                  </div>

                  {/* Dynamic Icon */}
                  <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 relative z-10 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mt-2 relative z-10 group-hover:text-rose-300 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-semibold relative z-10">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

    </section>
  );
}
