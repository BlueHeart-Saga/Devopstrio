"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Cloud, Server, Terminal, Shield, Database, CheckCircle2 } from "lucide-react";

const strategicPartners = [
  "Microsoft Azure",
  "AWS",
  "Google Cloud",
  "Oracle",
  "GitHub",
  "Docker",
  "Kubernetes",
  "MongoDB",
  "Databricks",
  "Snowflake",
];

const ecosystemCategories = [
  {
    title: "Strategic Cloud Platforms",
    icon: <Cloud size={18} className="text-rose-500" />,
    items: ["Microsoft Azure", "AWS", "Google Cloud", "Oracle Cloud", "IBM Cloud", "Alibaba Cloud"],
  },
  {
    title: "Cloud Infrastructure & Networking",
    icon: <Server size={18} className="text-rose-500" />,
    items: ["VMware", "Nutanix", "Cloudflare", "Akamai", "Red Hat"],
  },
  {
    title: "DevOps & Platform Engineering",
    icon: <Terminal size={18} className="text-rose-500" />,
    items: ["Docker", "Kubernetes", "HashiCorp", "GitHub", "GitLab", "Jenkins"],
  },
  {
    title: "Monitoring, Security & Reliability",
    icon: <Shield size={18} className="text-rose-500" />,
    items: ["Datadog", "Dynatrace", "New Relic", "PagerDuty", "Elastic"],
  },
  {
    title: "Data & AI Platforms",
    icon: <Database size={18} className="text-rose-500" />,
    items: ["Snowflake", "Databricks", "MongoDB", "Confluent", "Cloudera"],
  },
];

export function CloudEcosystem() {
  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-rose-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Cloud & Technology Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight mb-6 text-white">
              Powered by Leading <span className="font-semibold">Cloud, Platform & Infrastructure</span> Partners
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              We collaborate with globally recognized cloud providers, infrastructure platforms, DevOps ecosystems, and data technology leaders to design, modernize, secure, and scale enterprise digital platforms.
            </p>
          </div>
        </Reveal>

        {/* SECTION A: Strategic / Official Partners */}
        <Reveal delay={0.1}>
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
              <h3 className="text-xl font-semibold text-white tracking-tight">Strategic & Official Partners</h3>
              <div className="h-px bg-white/10 flex-grow" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {strategicPartners.map((partner) => (
                <div 
                  key={partner}
                  className="flex items-center justify-center p-6 bg-zinc-950/40 border border-white/5 rounded-2xl hover:border-rose-500/30 hover:bg-zinc-900/40 transition-all duration-300 group"
                >
                  <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors text-center">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* SECTION B: Ecosystem Technologies */}
        <Reveal delay={0.2}>
          <div>
            <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4">
              <h3 className="text-xl font-semibold text-white tracking-tight">Technologies, Platforms & Cloud Ecosystems We Support</h3>
              <div className="h-px bg-white/10 flex-grow" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {ecosystemCategories.map((category, idx) => (
                <div 
                  key={category.title}
                  className="bg-zinc-950/20 border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:border-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      {category.icon}
                    </div>
                    <h4 className="text-base font-semibold text-white">{category.title}</h4>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm font-medium text-zinc-400">
                        <CheckCircle2 size={14} className="text-rose-500/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        
      </div>
    </section>
  );
}
