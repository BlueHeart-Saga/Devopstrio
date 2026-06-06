"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const serviceCategories = [
  {
    id: "ai-data",
    name: "AI & Data",
    desc: "Cognitive workflows, LLM orchestration, model evaluations, and enterprise data warehousing.",
    href: "/services/ai-data",
    items: ["Artificial Intelligence", "AI Consulting Services", "AI Tools for Business Transformation", "Data Science", "Database Creation & Management"]
  },
  {
    id: "app-development",
    name: "Application Development",
    desc: "Custom high-load web systems, responsive mobile applications, and headless ecommerce platforms.",
    href: "/services/app-development",
    items: ["Web Development", "Mobile App Development", "CMS & E-commerce", "PWA & SPA Development"]
  },
  {
    id: "cloud",
    name: "Cloud",
    desc: "Multi-cloud architecture, DevOps pipelines, Kubernetes orchestrations, and Infrastructure as Code.",
    href: "/services/cloud",
    items: ["DevOps Consulting", "Cloud Migration", "Infrastructure as Code", "Kubernetes & Containers"]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    desc: "Zero-Trust setups, SOC-2 readiness compliance audits, penetration testing, and 24/7 monitoring.",
    href: "/services/cybersecurity",
    items: ["Penetration Testing", "Security Management", "Security Ops Center (SOC)"]
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    desc: "Strategic modernization roadmaps, legacy architecture decoupling, and tech stack migrations.",
    href: "/services/digital-transformation",
    items: ["IT Strategy Consulting", "Legacy Modernization"]
  },
  {
    id: "software-engineering",
    name: "Software Engineering",
    desc: "Highly robust backend services, microservices design patterns, and high-performance API gateways.",
    href: "/services/software-engineering",
    items: ["Enterprise Systems", "API & Microservices"]
  },
  {
    id: "enterprise-applications",
    name: "Enterprise Applications",
    desc: "Seamless integration of ERP and CRM solutions like Salesforce, SAP, and custom dashboards.",
    href: "/services/enterprise-applications",
    items: ["ERP & CRM Integration"]
  },
  {
    id: "staff-augmentation",
    name: "Staff Augmentation",
    desc: "Direct access to senior developers, database administrators, and security specialists to scale teams.",
    href: "/services/staff-augmentation",
    items: ["Dedicated Developers"]
  },
  {
    id: "support-services",
    name: "Support Services",
    desc: "Round-the-clock site reliability monitoring, database backups, disaster recovery, and support SLAs.",
    href: "/services/support-services",
    items: ["24/7 Platform SRE Support"]
  }
];

export function CategoriesGrid() {
  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">

        <Reveal className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              SERVICE DIRECTORY
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight leading-snug">
            Explore our specialized <span className="font-semibold text-rose-500">practices</span>
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl">
            Click on any service area to explore detailed delivery practices, technology integrations, and case studies.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((cat, idx) => (
            <Reveal key={cat.id} delay={idx * 0.05} className="h-full">
              <Link
                href={cat.href}
                className="group flex flex-col justify-between h-full bg-[#080808] border border-zinc-900/60 rounded-2xl p-6 hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top content */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-zinc-650 tracking-wider">
                      {(idx + 1).toString().padStart(2, "0")} / PRACTICE
                    </span>
                    <span className="w-8 h-8 rounded-full bg-zinc-900/50 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors mb-3">
                    {cat.name}
                  </h3>

                  <p className="text-[11px] text-zinc-450 leading-relaxed font-light mb-6">
                    {cat.desc}
                  </p>
                </div>

                {/* Bottom bullet points */}
                <div className="border-t border-zinc-900/80 pt-4 mt-auto">
                  <span className="block text-[9px] uppercase tracking-widest text-zinc-600 font-mono mb-2">Capabilities</span>
                  <ul className="flex flex-col gap-1.5 text-[10px] text-zinc-400 font-light">
                    {cat.items.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-rose-900" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                    {cat.items.length > 3 && (
                      <li className="text-[9px] text-rose-500 font-medium pl-2.5">
                        + {cat.items.length - 3} more capabilities
                      </li>
                    )}
                  </ul>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
