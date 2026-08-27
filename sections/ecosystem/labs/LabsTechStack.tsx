"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Brain, Cloud, Terminal, Database, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  role: string;
  logo: string;
}

interface TechCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: TechItem[];
}

export function LabsTechStack() {
  const [activeCategory, setActiveCategory] = useState("ai");

  const categories: TechCategory[] = [
    {
      id: "ai",
      label: "AI & Engineering",
      icon: <Brain size={16} />,
      items: [
        { name: "Python", role: "AI scripting & ML pipelines", logo: "/assets/Home-page/Techtools/python.svg" },
        { name: "Go", role: "High-performance agent services", logo: "/assets/Home-page/Techtools/GO.svg" },
        { name: "TypeScript", role: "LangChain orchestration", logo: "/assets/Home-page/Techtools/typescript.svg" },
        { name: "React", role: "Dynamic copilot interfaces", logo: "/assets/Home-page/Techtools/React.svg" },
        { name: "Next.js", role: "Edge-rendered intelligence", logo: "/assets/Home-page/Techtools/next-js-color.svg" },
        { name: "Node.js", role: "Asynchronous data processing", logo: "/assets/Home-page/Techtools/Node.svg" },
        { name: "C++", role: "Low-level system optimization", logo: "/assets/Home-page/Techtools/Cplusplus.svg" },
        { name: "Angular", role: "Enterprise web applications", logo: "/assets/Home-page/Techtools/Angular.svg" },
        { name: "Vue.js", role: "Reactive dashboard UI", logo: "/assets/Home-page/Techtools/Vue.svg" },
        { name: "Flutter", role: "Cross-platform mobile apps", logo: "/assets/Home-page/Techtools/flutter.svg" },
        { name: "iOS Swift", role: "Native mobile experiences", logo: "/assets/Home-page/Techtools/iOS.svg" },
        { name: "Android", role: "Native mobile ecosystems", logo: "/assets/Home-page/Techtools/Android.svg" }
      ]
    },
    {
      id: "cloud",
      label: "Cloud Infrastructures",
      icon: <Cloud size={16} />,
      items: [
        { name: "Amazon Web Services", role: "Serverless Lambda runtimes", logo: "/assets/Home-page/Techtools/aws-color.svg" },
        { name: "Microsoft Azure", role: "Secure enterprise cloud spaces", logo: "/assets/Home-page/Techtools/MSAzure.svg" },
        { name: "Google Cloud", role: "Vertex ML & massive scalability", logo: "/assets/Home-page/Techtools/google-color.svg" },
        { name: "Oracle Cloud", role: "Autonomous cluster operations", logo: "/assets/Home-page/Techtools/Oracle.svg" },
        { name: "Docker", role: "Containerized environments", logo: "/assets/Home-page/Techtools/docker.svg" }
      ]
    },
    {
      id: "devops",
      label: "Platform & DevOps",
      icon: <Terminal size={16} />,
      items: [
        { name: "Docker", role: "Microservice containerization", logo: "/assets/Home-page/Techtools/docker.svg" },
        { name: "Java", role: "Enterprise backend services", logo: "/assets/Home-page/Techtools/java-colored.svg" },
        { name: "Ruby", role: "Rapid backend prototyping", logo: "/assets/Home-page/Techtools/Ruby.svg" },
        { name: ".NET Core", role: "Enterprise systems integration", logo: "/assets/Home-page/Techtools/net.svg" },
        { name: "PHP", role: "Legacy systems modernization", logo: "/assets/Home-page/Techtools/PHP.svg" },
        { name: "Go", role: "High-concurrency workers", logo: "/assets/Home-page/Techtools/GO.svg" }
      ]
    },
    {
      id: "data",
      label: "Data & Lakehouse",
      icon: <Database size={16} />,
      items: [
        { name: "PostgreSQL", role: "Time-series & vector data", logo: "/assets/Home-page/Techtools/postgre.svg" },
        { name: "MySQL", role: "Scalable relational databases", logo: "/assets/Home-page/Techtools/MySQL.svg" },
        { name: "Microsoft SQL", role: "Enterprise data warehouses", logo: "/assets/Home-page/Techtools/MSSQL.svg" },
        { name: "Oracle DB", role: "Mission-critical record systems", logo: "/assets/Home-page/Techtools/Oracle.svg" },
        { name: "Python", role: "Data pipelines & ETL jobs", logo: "/assets/Home-page/Techtools/python.svg" }
      ]
    }
  ];

  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <section id="tech-stack" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-12 text-left">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white">
            Technology <span className="text-rose-500">Stack</span>
          </h2>
        </Reveal>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-zinc-900 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2.5 px-6 md:px-7 py-3.5 rounded-2xl text-sm md:text-base font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-rose-500 text-white shadow-lg shadow-rose-500/25 scale-[1.02]"
                  : "bg-zinc-950/60 text-zinc-400 border border-zinc-900 hover:text-white hover:bg-zinc-900/60"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="min-h-[250px]">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {currentCategory.items.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden flex items-center p-5 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/30 rounded-3xl transition-all duration-500 shadow-[0_8px_32px_0_rgba(255,255,255,0.02)] hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.08)] min-h-[90px]"
              >
                {/* Subtle white glass gradient flash on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* White Container for Real SVG Icons (Ensures perfect visibility) */}
                <div className="relative z-10 w-14 h-14 bg-white/95 border border-white rounded-2xl flex items-center justify-center p-2.5 mr-5 shrink-0 group-hover:scale-110 shadow-lg transition-all duration-500 overflow-hidden">
                  <img src={item.logo} alt={item.name} className="w-full h-full object-contain relative z-10 filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300" loading="lazy" />
                </div>
                
                {/* Text Content */}
                <div className="relative z-10 flex-1">
                  <h4 className="text-lg md:text-xl font-semibold text-white tracking-wide drop-shadow-md">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
