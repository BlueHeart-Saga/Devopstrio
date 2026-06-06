"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    num: "01",
    name: "Cloud & Migration",
    desc: "Seamless migration of complex enterprise workloads to Azure, AWS, and GCP — with zero downtime, full compliance mapping, and measurable cost reduction from day one.",
    tags: ["Azure", "AWS", "GCP", "Multi-Cloud"]
  },
  {
    num: "02",
    name: "AI & Data",
    desc: "From Generative AI strategy and LLM deployment to predictive analytics, automated data pipelines, and ML model engineering — we turn your raw data into operational intelligence.",
    tags: ["Gen AI", "ML Models", "Data Engineering"]
  },
  {
    num: "03",
    name: "DevOps & Platform",
    desc: "CI/CD pipelines, Infrastructure as Code, Kubernetes orchestration, GitOps, and Site Reliability Engineering — we automate the entire software delivery lifecycle.",
    tags: ["CI/CD", "Kubernetes", "Terraform", "IaC"]
  },
  {
    num: "04",
    name: "Cybersecurity",
    desc: "Zero-trust architectures, penetration testing, SOC operations, threat intelligence, and compliance management — security embedded into every layer, not bolted on after.",
    tags: ["Zero Trust", "SOC", "ISO 27001", "GDPR"]
  },
  {
    num: "05",
    name: "Product Engineering",
    desc: "Web applications, mobile platforms, SaaS architectures, enterprise APIs, and UI/UX design — engineered for performance, built for users, designed to scale.",
    tags: ["Web Dev", "Mobile", "SaaS", "API"]
  },
  {
    num: "06",
    name: "Staff Augmentation",
    desc: "On-demand access to 525+ certified cloud, AI, DevOps, and security specialists — embedded into your team, operating under your processes, delivering to your standards.",
    tags: ["ODC", "CMMI Level 5", "Flexible Teams"]
  }
];

export function AboutServices() {
  return (
    <section className="w-full py-20 bg-black text-white relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">
        
        {/* Header Block */}
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-500">
              What We Excel At
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white mb-4">
            Every service we offer <span className="font-bold block">exists to solve a real problem.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
            We don't sell technology for its own sake. Every capability we've built — from cloud migration to generative AI — exists because an enterprise needed it solved, and we delivered.
          </p>
        </Reveal>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <Reveal 
              key={item.name} 
              className="flex flex-col justify-between border border-zinc-900 bg-zinc-950/20 p-8 rounded-xl hover:border-zinc-800 transition-all duration-300"
            >
              <div>
                <span className="text-lg font-bold text-rose-500 font-mono block mb-2">{item.num}</span>
                <h3 className="text-lg font-bold text-white mb-3">{item.name}</h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold mb-6">
                  {item.desc}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                {item.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[10px] md:text-[11px] px-2.5 py-1 bg-zinc-900 text-zinc-300 rounded font-medium border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
