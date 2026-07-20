"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { AppWindow, Cloud, Network, Component, Bot, Smartphone, Plug, Layers, ArrowRight, LayoutTemplate, ShieldCheck, GitBranch, Terminal } from "lucide-react";

export function SoftwareCore() {
  const capabilities = [
    { title: "Enterprise Web Applications", desc: "Modern enterprise portals and business applications.", icon: AppWindow },
    { title: "SaaS Product Development", desc: "Scalable multi-tenant software platforms.", icon: Cloud },
    { title: "API Development", desc: "RESTful and GraphQL APIs.", icon: Network },
    { title: "Microservices", desc: "Independent and scalable services.", icon: Component },
    { title: "AI Applications", desc: "Generative AI and intelligent automation.", icon: Bot },
    { title: "Mobile Backend Services", desc: "Backend APIs for mobile ecosystems.", icon: Smartphone },
    { title: "Integration Services", desc: "Enterprise system integrations.", icon: Plug },
    { title: "Legacy Modernization", desc: "Transform legacy systems into modern platforms.", icon: Layers }
  ];

  const architecturePatterns = [
    "Layered Architecture",
    "Clean Architecture",
    "Domain-Driven Design",
    "Event-Driven Architecture",
    "Microservices",
    "Serverless",
    "API Gateway",
    "Modular Monolith"
  ];

  const devPractices = [
    "Agile Delivery",
    "Sprint Planning",
    "Code Reviews",
    "Pair Programming",
    "Git Workflow",
    "Continuous Refactoring",
    "Documentation",
    "Knowledge Sharing"
  ];

  const techStack = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Python", "FastAPI", "Node.js", ".NET"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
    { category: "Cloud", items: ["Azure", "AWS", "Google Cloud", "Oracle Cloud"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Azure DevOps"] },
    { category: "AI", items: ["OpenAI", "LangChain", "Azure AI", "Vector Databases"] }
  ];

  return (
    <>
      {/* 5. ENGINEERING CAPABILITIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CAPABILITIES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Engineering Capabilities</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{cap.title}</h4>
                  <p className="text-sm text-zinc-400 font-medium">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ARCHITECTURE PATTERNS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ARCHITECTURE</span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Architecture Patterns</h2>
                <p className="text-zinc-300 text-base leading-relaxed font-medium mb-8">
                  We deploy battle-tested architectural patterns tailored to your scalability and performance needs.
                </p>
                <div className="flex flex-col gap-3">
                  {architecturePatterns.map((pattern, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-zinc-300">
                      <ArrowRight className="w-4 h-4 text-rose-500" />
                      {pattern}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            
            {/* Interactive Architecture Diagram */}
            <div className="lg:col-span-7 relative">
              <Reveal delay={0.2}>
                <div className="w-full aspect-[4/3] bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-black">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.1),transparent_70%)] pointer-events-none" />
                  
                  {/* Diagram Elements */}
                  <div className="flex flex-col h-full justify-between relative z-10">
                    <div className="flex justify-center">
                      <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-rose-500/50 transition-colors cursor-crosshair group flex items-center gap-2">
                        <AppWindow className="w-4 h-4 text-zinc-400 group-hover:text-rose-500" />
                        <span className="text-xs font-bold tracking-wider text-zinc-300 group-hover:text-white">CLIENT TIER</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-center -my-2 z-0">
                      <div className="w-px h-8 bg-gradient-to-b from-rose-500/50 to-transparent"></div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-full max-w-sm px-6 py-4 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-rose-500/50 transition-colors cursor-crosshair group flex flex-col items-center">
                        <Network className="w-5 h-5 text-zinc-400 group-hover:text-rose-500 mb-2" />
                        <span className="text-xs font-bold tracking-wider text-white">API GATEWAY</span>
                      </div>
                    </div>

                    <div className="flex justify-center gap-12 -my-2 z-0">
                      <div className="w-px h-8 bg-gradient-to-b from-rose-500/50 to-transparent rotate-[20deg] origin-top"></div>
                      <div className="w-px h-8 bg-gradient-to-b from-rose-500/50 to-transparent"></div>
                      <div className="w-px h-8 bg-gradient-to-b from-rose-500/50 to-transparent -rotate-[20deg] origin-top"></div>
                    </div>

                    <div className="flex justify-between gap-4">
                      {['Auth Service', 'Business Logic', 'Data Service'].map((srv, i) => (
                        <div key={i} className="flex-1 px-4 py-6 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-rose-500/50 transition-colors cursor-crosshair group flex flex-col items-center text-center">
                          <Component className="w-5 h-5 text-zinc-500 group-hover:text-rose-500 mb-2" />
                          <span className="text-[10px] md:text-xs font-bold tracking-wider text-zinc-400 group-hover:text-white">{srv}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center gap-12 -my-2 z-0">
                      <div className="w-px h-8 bg-gradient-to-t from-rose-500/50 to-transparent rotate-[20deg] origin-bottom"></div>
                      <div className="w-px h-8 bg-gradient-to-t from-rose-500/50 to-transparent"></div>
                      <div className="w-px h-8 bg-gradient-to-t from-rose-500/50 to-transparent -rotate-[20deg] origin-bottom"></div>
                    </div>

                    <div className="flex justify-center gap-6">
                      <div className="px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-rose-500/50 transition-colors cursor-crosshair group flex items-center gap-2">
                        <Layers className="w-4 h-4 text-zinc-500 group-hover:text-rose-500" />
                        <span className="text-xs font-bold tracking-wider text-zinc-400 group-hover:text-white">DATABASE CLUSTER</span>
                      </div>
                      <div className="px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-rose-500/50 transition-colors cursor-crosshair group flex items-center gap-2">
                        <Activity className="w-4 h-4 text-zinc-500 group-hover:text-rose-500" />
                        <span className="text-xs font-bold tracking-wider text-zinc-400 group-hover:text-white">MONITORING</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PRACTICES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">METHODOLOGY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Development Practices</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            {devPractices.map((practice, idx) => (
              <div key={idx} className="px-6 py-4 bg-zinc-950/50 border border-zinc-800 rounded-full flex items-center gap-3 hover:border-rose-500/40 transition-colors cursor-default">
                <Terminal className="w-4 h-4 text-zinc-500" />
                <span className="text-sm font-semibold text-zinc-300">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY STACK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ECOSYSTEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Technology Stack</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-2xl">
                <h4 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-rose-500 mb-6 border-b border-zinc-900 pb-4">{stack.category}</h4>
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
    </>
  );
}

// Temporary import fixes
import { Activity } from "lucide-react";
