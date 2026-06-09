"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const serviceCategories = [
  {
    id: "ai-data-innovation",
    name: "AI & Data Innovation",
    desc: "Autonomous multi-agent workflows, custom LLM fine-tuning, machine learning engineering, and data governance.",
    href: "/services/ai-data-innovation",
    items: [
      "Generative AI Solutions",
      "AI Agents & Automation",
      "Machine Learning Engineering",
      "Data Engineering",
      "Business Intelligence & Analytics",
      "Predictive Analytics",
      "Data Governance",
      "MLOps & AI Operations"
    ]
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    desc: "Zero-downtime multi-cloud migrations, landing zone construction, AWS/Azure/GCP scaling, and FinOps cost controls.",
    href: "/services/cloud-services",
    items: [
      "Cloud Strategy & Consulting",
      "Cloud Migration",
      "Azure Services",
      "AWS Services",
      "Google Cloud Services",
      "Cloud Security",
      "Cloud Managed Services",
      "FinOps & Cost Optimization"
    ]
  },
  {
    id: "devops-automation",
    name: "DevOps & Automation",
    desc: "Standardizing GitOps CI/CD pipelines, Platform Engineering, Infrastructure as Code, and 24/7 site reliability engineering.",
    href: "/services/devops-automation",
    items: [
      "CI/CD Implementation",
      "Platform Engineering",
      "Infrastructure as Code",
      "Kubernetes Services",
      "DevSecOps",
      "Site Reliability Engineering (SRE)",
      "Release Automation",
      "Monitoring & Observability"
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    desc: "Ethical hacking penetration tests, automated compliance posture audits, zero-trust setups, and 24/7 SIEM monitoring.",
    href: "/services/cybersecurity",
    items: [
      "Security Assessment",
      "Vulnerability Management",
      "Penetration Testing",
      "Security Operations Center (SOC)",
      "Identity & Access Management",
      "Cloud Security",
      "Compliance & Governance",
      "Zero Trust Architecture"
    ]
  },
  {
    id: "software-development",
    name: "Software Development",
    desc: "Custom high-load web systems, responsive mobile applications, scalable SaaS portals, and decoupled microservices architectures.",
    href: "/services/software-development",
    items: [
      "Enterprise Application Development",
      "Web Application Development",
      "Mobile Application Development",
      "SaaS Product Development",
      "API Development & Integration",
      "Microservices Architecture",
      "Product Engineering",
      "Application Modernization"
    ]
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    desc: "Modernizing legacy monolith setups, workflow process automation, intelligent decisions, and change management strategies.",
    href: "/services/digital-transformation",
    items: [
      "Digital Strategy",
      "Enterprise Modernization",
      "Process Automation",
      "Intelligent Workflows",
      "Customer Experience Transformation",
      "Legacy System Modernization",
      "Business Transformation",
      "Change Management"
    ]
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    desc: "High-throughput data platforms, Snowflake/BigQuery data warehouses, Apache Iceberg lakehouses, and ETL pipelines.",
    href: "/services/data-engineering",
    items: [
      "Data Platform Development",
      "Data Warehousing",
      "Data Lakes & Lakehouse",
      "ETL/ELT Pipelines",
      "Real-Time Data Processing",
      "Data Quality Management",
      "Master Data Management",
      "Big Data Engineering"
    ]
  },
  {
    id: "managed-services",
    name: "Managed Services",
    desc: "Outsourced IT operations, managed DevOps, application L3 support, database administration, and SLA-backed on-call response.",
    href: "/services/managed-services",
    items: [
      "Managed Cloud Services",
      "Managed DevOps Services",
      "Managed Security Services",
      "Application Support",
      "Infrastructure Management",
      "Database Administration",
      "Monitoring & Incident Management",
      "24/7 Support Services"
    ]
  },
  {
    id: "qa-testing",
    name: "QA & Testing",
    desc: "Automated end-to-end testing, API validation, performance load simulation, and shift-left quality engineering.",
    href: "/services/qa-testing",
    items: [
      "Test Automation",
      "Performance Testing",
      "Security Testing",
      "API Testing",
      "Mobile Application Testing",
      "Functional Testing",
      "Continuous Testing",
      "Quality Engineering"
    ]
  },
  {
    id: "it-consulting",
    name: "IT Consulting",
    desc: "Enterprise architecture design, cloud adoption models, cybersecurity strategies, and comprehensive technology assessments.",
    href: "/services/it-consulting",
    items: [
      "Technology Consulting",
      "Enterprise Architecture",
      "Cloud Consulting",
      "AI Consulting",
      "Cybersecurity Consulting",
      "Digital Transformation Consulting",
      "IT Strategy & Roadmap",
      "Technology Assessment"
    ]
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
