"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const techStack = [
  {
    category: "Front-end",
    desc: "We build ultra-fast, responsive web interfaces designed for seamless user experiences.",
    techs: [
      { 
        name: "React / Next.js", 
        desc: "Dynamic, ultra-fast web applications.",
        icon: "/assets/Tech-icons/react-icon_svgstack_com_29171780931136.svg"
      },
      { 
        name: "Angular", 
        desc: "Structured enterprise web platforms.",
        icon: "/assets/Tech-icons/free-angular-js-logo_svgstack_com_7451780931851.svg"
      },
      { 
        name: "Vue.js", 
        desc: "Lightweight, reactive interfaces.",
        icon: "/assets/Tech-icons/vue-js-logo_svgstack_com_31551780931568.svg"
      },
      { 
        name: "Tailwind CSS", 
        desc: "Clean, responsive utility-first styles.",
        icon: "/assets/Tech-icons/tailwindcss-logo_svgstack_com_31451780931467.svg"
      },
      {
        name: "TypeScript",
        desc: "Type-safe, scalable web development.",
        icon: "/assets/Tech-icons/typescript-logo_svgstack_com_31481780931142.svg"
      },
      {
        name: "Svelte",
        desc: "Lightweight compiler-driven web code.",
        icon: "/assets/Tech-icons/svelte-logo_svgstack_com_31421780931630.svg"
      },
      {
        name: "Vite",
        desc: "Lightning-fast frontend build tooling.",
        icon: "/assets/Tech-icons/vite-js-logo_svgstack_com_31531780931342.svg"
      },
      {
        name: "HTML5 & CSS3",
        desc: "Semantic structures and responsive designs.",
        icon: "/assets/Tech-icons/html5-logo_svgstack_com_28511780931179.svg"
      }
    ]
  },
  {
    category: "Back-end",
    desc: "High-performance microservices and secure APIs engineered for speed and reliability.",
    techs: [
      { 
        name: "Node.js / TypeScript", 
        desc: "Custom APIs and microservice hooks.",
        icon: "/assets/Tech-icons/nodejs-logo_svgstack_com_28911780931118.svg"
      },
      { 
        name: "Go (Golang)", 
        desc: "Highly concurrent backend systems.",
        icon: "/assets/Tech-icons/go-lang-logo_svgstack_com_28411780931472.svg"
      },
      { 
        name: "Rust", 
        desc: "Memory-safe, lightning-fast execution.",
        icon: "/assets/Tech-icons/rust-logo_svgstack_com_31291780931285.svg"
      },
      { 
        name: "Python", 
        desc: "Powerful data and machine learning runtimes.",
        icon: "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg"
      },
      {
        name: "NestJS",
        desc: "Structured, modular backend APIs.",
        icon: "/assets/Tech-icons/nestjs-logo_svgstack_com_28861780931513.svg"
      },
      {
        name: "GraphQL",
        desc: "Efficient, unified client-side queries.",
        icon: "/assets/Tech-icons/graphql_svgstack_com_28421780931889.svg"
      },
      {
        name: "Java / Spring",
        desc: "Reliable, multi-threaded enterprise logic.",
        icon: "/assets/Tech-icons/java-logo_svgstack_com_28601780931218.svg"
      },
      {
        name: "Laravel / PHP",
        desc: "Rapid backend application structures.",
        icon: "/assets/Tech-icons/laravel-logo_svgstack_com_28681780931212.svg"
      }
    ]
  },
  {
    category: "Mobile",
    desc: "Stunning iOS and Android applications engineered for fluid motion and native speed.",
    techs: [
      { 
        name: "Swift / iOS", 
        desc: "Premium, optimized native iOS apps.",
        icon: "/assets/Tech-icons/swift-logo_svgstack_com_31441780931792.svg"
      },
      { 
        name: "Kotlin / Android", 
        desc: "Modern, high-performance Android apps.",
        icon: "/assets/Tech-icons/green-android-logo_svgstack_com_7441780931950.svg"
      },
      { 
        name: "React Native", 
        desc: "Cross-platform shared Javascript apps.",
        icon: "/assets/Tech-icons/react-icon_svgstack_com_29171780931136.svg"
      },
      { 
        name: "Flutter", 
        desc: "Beautiful, fluid cross-platform screens.",
        icon: "/assets/Tech-icons/flutter-logo_svgstack_com_28331780931244.svg"
      },
      {
        name: "Dart Language",
        desc: "Structured syntax powering fast widgets.",
        icon: "/assets/Tech-icons/dart-programming-logo_svgstack_com_28151780931574.svg"
      },
      {
        name: "Xamarin",
        desc: "Enterprise-grade cross-platform builds.",
        icon: "/assets/Tech-icons/xamarin-logo_svgstack_com_31581780931804.svg"
      }
    ]
  },
  {
    category: "Database & Cloud",
    desc: "Secure cloud architectures and resilient database systems scaling automatically.",
    techs: [
      { 
        name: "PostgreSQL", 
        desc: "Secure, relational enterprise databases.",
        icon: "/assets/Tech-icons/postgre-sql-logo_svgstack_com_29021780931526.svg"
      },
      { 
        name: "Redis", 
        desc: "Lightning-fast in-memory cache.",
        icon: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg"
      },
      { 
        name: "AWS", 
        desc: "Scalable, high-availability cloud setups.",
        icon: "/assets/Tech-icons/amazon-aws-logo_svgstack_com_7491780931192.svg"
      },
      { 
        name: "Docker & K8s", 
        desc: "Reliable container orchestration.",
        icon: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg"
      },
      {
        name: "MongoDB",
        desc: "Scale-ready document NoSQL databases.",
        icon: "/assets/Tech-icons/mongo-db-logo_svgstack_com_28831780931486.svg"
      },
      {
        name: "MySQL",
        desc: "Reliable, open-source transactional engines.",
        icon: "/assets/Tech-icons/mysql-logo_svgstack_com_28851780931423.svg"
      },
      {
        name: "Google Cloud",
        desc: "Serverless runtimes and smart data.",
        icon: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg"
      },
      {
        name: "Microsoft Azure",
        desc: "Secure, compliant enterprise cloud solutions.",
        icon: "/assets/Tech-icons/microsoft-azure-logo_svgstack_com_7501780931055.svg"
      },
      {
        name: "Cloudflare",
        desc: "Global edge networking and firewalls.",
        icon: "/assets/Tech-icons/cloudflare-logo-icon_svgstack_com_28071780931769.svg"
      }
    ]
  }
];

function MarqueeRow({ items, reverse = false }: { items: typeof techStack[0]["techs"]; reverse?: boolean }) {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden relative py-2 select-none">
      {/* Subtle side fade-outs */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

      <div className={`flex gap-4 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} hover:[animation-play-state:paused]`}>
        {duplicatedItems.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="flex items-center gap-4 bg-zinc-950/30 border border-white/10 rounded-2xl p-4 min-w-[250px] hover:border-rose-500/20 hover:bg-zinc-900/10 transition-all duration-300 group shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-900/60 flex items-center justify-center p-2 border border-white/5">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6 object-contain opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="text-left">
              <h4 className="text-xs font-bold text-white mb-0.5 group-hover:text-rose-400 transition-colors">
                {tech.name}
              </h4>
              <p className="text-[10px] text-zinc-300 font-semibold leading-tight max-w-[160px] transition-colors group-hover:text-zinc-200">
                {tech.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);

  const activeCategory = techStack[activeTab];
  const midPoint = Math.ceil(activeCategory.techs.length / 2);
  const techsRow1 = activeCategory.techs.slice(0, midPoint);
  const techsRow2 = activeCategory.techs.slice(midPoint);

  return (
    <section className="w-full py-10 bg-[#030303] text-white border-b border-zinc-900">
      
      {/* Inject custom CSS for marquee animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}} />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center">

        {/* Top Header Panel */}
        <Reveal className="max-w-3xl mx-auto mb-6">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-2 block">
            TECHNOLOGY ECOSYSTEM
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-3 text-white uppercase">
            OUR ENGINEERING <span className="text-rose-500">TECH STACK</span>
          </h2>
          <p className="text-zinc-200 text-sm md:text-base font-semibold leading-relaxed max-w-2xl mx-auto">
            We align our technology choices with enterprise security requirements, scalability, and developer experience.
          </p>
        </Reveal>

        {/* Horizontal Navigation Tabs */}
        <Reveal className="mb-6">
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tab, idx) => (
              <button
                key={tab.category}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border ${activeTab === idx
                  ? "bg-rose-600 border-rose-500 text-white shadow-[0_4px_15px_rgba(225,29,72,0.25)] scale-[1.02]"
                  : "bg-zinc-950/40 border-white/10 text-zinc-400 hover:text-zinc-250 hover:bg-zinc-900/40"
                  }`}
              >
                {tab.category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Bottom Full-Width Content and Marquees */}
        <div className="bg-[#030303] border border-zinc-900 rounded-3xl p-6 md:p-8 min-h-[260px] flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-rose-600/5 rounded-full blur-3xl pointer-events-none" />
          
          <Reveal key={activeTab}>
            <div className="mb-6 text-center max-w-3xl mx-auto">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1 font-semibold">Practice Overview</span>
              <p className="text-white text-sm md:text-base font-semibold leading-relaxed">
                {techStack[activeTab].desc}
              </p>
            </div>

            {/* Infinite Full-Width marquees */}
            <div className="space-y-6 mt-6 pt-6 border-t border-zinc-900/80 overflow-hidden">
              <MarqueeRow items={techsRow1} />
              <MarqueeRow items={techsRow2} reverse />
            </div>
          </Reveal>

          <div className="mt-6 text-center">
            <span className="text-[9px] font-mono text-zinc-500 block font-semibold">
              * All stacks are aligned with standard SOC-2 and HIPAA vulnerability patch cycles.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
