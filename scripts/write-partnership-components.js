const fs = require('fs');
const path = require('path');

const outDir = 'c:\\Sagadevan\\Devopstrio\\sections\\about\\partnerships-certifications';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const components = {
  'PartnershipsHero.tsx': `
"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export function PartnershipsHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-black z-10">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/assets/Home-page/hero/hero-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        <div className="absolute top-0 right-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.15),transparent_60%)] pointer-events-none" />
      </div>

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <Reveal>
          <span className="text-[10px] font-black tracking-widest text-rose-500 uppercase block mb-3">
            Strategic Alliances & Delivery Assurance
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-white leading-tight max-w-4xl">
            Partnerships, Certifications, and Trust Infrastructure for <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Enterprise Delivery</span>
          </h1>
          <p className="text-zinc-300 font-bold max-w-2xl text-sm md:text-base leading-relaxed mb-10">
            Devopstrio works with leading technology ecosystems, delivery frameworks, and quality standards to help organizations modernize with confidence. Our partnerships, engineering practices, and certification-driven approach strengthen how we design, build, secure, and scale digital platforms.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a href="#strategic-partners" className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)]">
              Explore Our Ecosystem
            </a>
            <a href="/contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300">
              Talk to an Expert
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8 mt-12">
          {[
            { value: "8+", label: "Strategic Technology Partners" },
            { value: "25+", label: "Technology Domains" },
            { value: "24/7", label: "Managed Delivery Support" },
            { value: "3+", label: "Global Delivery Countries" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex flex-col"
            >
              <span className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</span>
              <span className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  'WhyPartnershipsMatter.tsx': `
"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Zap, ShieldCheck, Layers } from "lucide-react";

export function WhyPartnershipsMatter() {
  const cards = [
    {
      icon: <Zap className="w-8 h-8 text-rose-500" />,
      title: "Faster Delivery",
      desc: "Pre-aligned tools, platforms, and implementation patterns"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
      title: "Lower Risk",
      desc: "Stronger governance, security, and engineering consistency"
    },
    {
      icon: <Layers className="w-8 h-8 text-rose-500" />,
      title: "Broader Capability",
      desc: "Access to cloud, automation, enterprise platforms, and domain ecosystems"
    }
  ];

  return (
    <section className="py-24 bg-[#030303] relative z-10">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              Built on Trusted Ecosystems. <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Governed by Delivery Standards.</span>
            </h2>
            <p className="text-zinc-400 font-bold text-sm md:text-base leading-relaxed">
              Our partnerships and certifications are not just affiliations—they help improve delivery quality, platform expertise, security posture, interoperability, and implementation speed.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-[24px] border border-white/5 bg-zinc-950/50 hover:bg-zinc-900/50 transition-colors h-full flex flex-col">
                <div className="w-14 h-14 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-lg font-black text-white mb-3">{card.title}</h3>
                <p className="text-zinc-400 font-bold text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  'StrategicPartnerships.tsx': `
"use client";

import { Reveal } from "@/components/ui/Reveal";

const partnerCategories = [
  {
    title: "Cloud & Infrastructure Partners",
    desc: "Cloud platforms that support Devopstrio's architecture modernization, migration, data, AI, and infrastructure transformation capabilities.",
    partners: [
      {
        name: "Microsoft",
        logo: "/assets/Home-page/partners/Microsoft.svg",
        cap: "Azure Ecosystem Delivery",
        value: "Cloud transformation, productivity modernization, data platforms, and enterprise application delivery powered through the Microsoft ecosystem."
      },
      {
        name: "AWS",
        logo: "/assets/Tech-icons/amazon-aws-logo_svgstack_com_7491780931192.svg",
        cap: "AWS Ecosystem Delivery",
        value: "Scalable cloud-native infrastructure, DevOps automation, data engineering, and modernization for growth-focused digital platforms."
      },
      {
        name: "Google Cloud",
        logo: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg",
        cap: "GCP Ecosystem Delivery",
        value: "BigQuery high-speed data analytics, machine learning integrations, and containerized modernization."
      },
      {
        name: "Oracle",
        logo: "/assets/Home-page/Techtools/oracle-logo.svg",
        cap: "Enterprise Infrastructure",
        value: "Robust database modernization, ERP integration, and high-performance cloud transitions."
      }
    ]
  },
  {
    title: "Enterprise Workflow & Operations",
    desc: "Enterprise platforms that strengthen service operations, business workflows, infrastructure management, security, and connected enterprise delivery.",
    partners: [
      {
        name: "ServiceNow",
        logo: "/assets/Home-page/partners/servicenow.png",
        cap: "ITSM & Workflows",
        value: "Workflow automation, ITSM enablement, internal operations modernization, and service-led enterprise transformation."
      },
      {
        name: "SAP",
        logo: "/assets/Home-page/partners/sap-logo.svg",
        cap: "ERP & Operations",
        value: "Enterprise resource planning integration, supply chain automation, and data governance."
      },
      {
        name: "Cisco",
        logo: "/assets/Home-page/partners/cisco-logo.svg",
        cap: "Networking & Security",
        value: "Zero-trust network architectures, secure infrastructure ops, and enterprise connectivity."
      }
    ]
  }
];

export function StrategicPartnerships() {
  return (
    <section id="strategic-partners" className="py-24 bg-black relative z-10">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              Strategic <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Technology Partnerships</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-20">
          {partnerCategories.map((cat, idx) => (
            <div key={idx}>
              <Reveal>
                <div className="mb-10 max-w-3xl">
                  <h3 className="text-2xl font-black text-white mb-4">{cat.title}</h3>
                  <p className="text-zinc-400 font-bold text-sm">{cat.desc}</p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.partners.map((partner, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950/30 backdrop-blur-xl p-8 hover:border-rose-500/35 transition-all duration-300">
                      <div className="flex flex-col md:flex-row gap-6 md:items-start">
                        <div className="w-24 h-24 shrink-0 bg-white rounded-xl flex items-center justify-center p-4 shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)]">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => { e.currentTarget.style.display = 'none' }}
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">{partner.name}</h4>
                          <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest block mb-4">{partner.cap}</span>
                          <p className="text-xs font-bold text-zinc-300 leading-relaxed">
                            <strong className="text-white block mb-1">What we deliver:</strong>
                            {partner.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  'WhatEcosystemEnables.tsx': `
"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Cloud, Cog, Brain, Workflow, Lock, Settings } from "lucide-react";

export function WhatEcosystemEnables() {
  const cards = [
    {
      icon: <Cloud className="w-6 h-6 text-rose-500" />,
      title: "Cloud Migration & Modernization",
      desc: "Using cloud partner ecosystems, Devopstrio helps organizations migrate legacy systems, modernize workloads, and improve scalability, resilience, and cost control."
    },
    {
      icon: <Cog className="w-6 h-6 text-rose-500" />,
      title: "DevOps & Platform Engineering",
      desc: "Leveraging native tooling to build automated CI/CD pipelines, robust infrastructure-as-code, and continuous delivery systems."
    },
    {
      icon: <Brain className="w-6 h-6 text-rose-500" />,
      title: "AI & Data Transformation",
      desc: "Integrating intelligent data platforms and AI services to unlock analytics, predictive models, and smarter business insights."
    },
    {
      icon: <Workflow className="w-6 h-6 text-rose-500" />,
      title: "Enterprise Workflow Automation",
      desc: "Optimizing internal operations and service delivery through integrated enterprise applications and platform engineering."
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "Cybersecurity & Governance",
      desc: "Implementing zero-trust architectures and compliance-driven security controls native to top-tier cloud providers."
    },
    {
      icon: <Settings className="w-6 h-6 text-rose-500" />,
      title: "Managed Services & Continuous Operations",
      desc: "Providing 24/7 observability, proactive maintenance, and iterative optimizations across all partner ecosystems."
    }
  ];

  return (
    <section className="py-24 bg-[#030303] relative z-10">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              What Our <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Ecosystem Enables</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-[24px] border border-white/10 bg-zinc-900/40 hover:bg-zinc-800/40 transition-colors h-full">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center mb-6 border border-white/5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-black text-white mb-3">{card.title}</h3>
                <p className="text-zinc-400 font-bold text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  'CertificationsAssurance.tsx': `
"use client";

import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2 } from "lucide-react";
import { AwardsList } from "@/sections/about/AwardsList";

export function CertificationsAssurance() {
  const benefits = [
    "Delivery led by platform-aware engineering teams",
    "Consistent implementation standards",
    "Better security and governance alignment",
    "Reduced onboarding and transition risk",
    "More reliable support and lifecycle ownership"
  ];

  return (
    <section className="py-24 bg-black relative z-10">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <Reveal>
          <div className="mb-16 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              Engineering Standards, Platform Expertise, and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Delivery Readiness</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          {/* Left: Certifications / Standards blocks */}
          <div className="space-y-8">
            <div className="bg-zinc-950/60 border border-white/10 rounded-[32px] p-2 overflow-hidden">
                <AwardsList />
            </div>
          </div>

          {/* Right: What this means for clients */}
          <div className="sticky top-32 space-y-8 bg-zinc-950/40 p-8 rounded-[32px] border border-white/5">
            <h3 className="text-2xl font-black text-white">What this means for our clients</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-sm font-bold text-zinc-300 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
`,

  'EcosystemValueTimeline.tsx': `
"use client";

import { Reveal } from "@/components/ui/Reveal";

export function EcosystemValueTimeline() {
  const steps = [
    {
      num: "01",
      title: "Partner Alignment",
      desc: "Identify platform fit based on customer goals, architecture, and operating model."
    },
    {
      num: "02",
      title: "Solution Design",
      desc: "Map services, accelerators, and delivery patterns to the chosen partner ecosystem."
    },
    {
      num: "03",
      title: "Implementation & Integration",
      desc: "Build, migrate, automate, and operationalize the solution effectively."
    },
    {
      num: "04",
      title: "Continuous Optimization",
      desc: "Managed services, support, governance, and long-term roadmap evolution."
    }
  ];

  return (
    <section className="py-24 bg-[#030303] relative z-10 overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6 text-center">
              How We Build <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Long-Term Ecosystem Value</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-rose-500/0 via-rose-500/30 to-rose-500/0 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative z-10 flex flex-col md:items-center md:text-center">
                  <div className="w-24 h-24 rounded-full bg-zinc-950 border border-rose-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(244,63,94,0.1)] relative">
                    <span className="text-2xl font-black text-rose-500">{step.num}</span>
                    <div className="absolute inset-2 rounded-full border border-dashed border-rose-500/30 animate-[spin_10s_linear_infinite]" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 font-bold text-xs leading-relaxed max-w-[240px]">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`,

  'CredibilityStrip.tsx': `
"use client";

import { Reveal } from "@/components/ui/Reveal";

export function CredibilityStrip() {
  const points = [
    "Multi-platform delivery across cloud, software, and enterprise ecosystems",
    "Cross-functional engineering support across architecture, development, DevOps, QA, and operations",
    "Strong alignment between business requirements and platform implementation",
    "Faster rollout using repeatable delivery frameworks and reusable accelerators",
    "Long-term support beyond implementation"
  ];

  return (
    <section className="py-24 bg-rose-600 relative z-10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Why Clients Value Our <br className="hidden md:block" />
                Ecosystem-Led Delivery
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0"></div>
                  <p className="text-rose-100 font-bold text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
`,

  'MiniUseCases.tsx': `
"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export function MiniUseCases() {
  const cases = [
    {
      title: "Cloud Modernization Program",
      desc: "Migrating business-critical workloads to cloud platforms with improved scalability and governance."
    },
    {
      title: "Service Operations Transformation",
      desc: "Using workflow and operations platforms to improve internal efficiency, support responsiveness, and process visibility."
    },
    {
      title: "AI & Data Enablement",
      desc: "Building data, automation, and intelligence capabilities using modern cloud and engineering ecosystems."
    }
  ];

  return (
    <section className="py-24 bg-black relative z-10">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6 text-center">
              Where Ecosystem Partnerships <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Create Impact</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((useCase, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-[24px] border border-white/5 bg-zinc-950/60 hover:border-rose-500/30 transition-all group flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-black text-white mb-4 group-hover:text-rose-400 transition-colors">{useCase.title}</h3>
                  <p className="text-zinc-400 font-bold text-sm leading-relaxed">
                    {useCase.desc}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-rose-500 font-black text-xs uppercase tracking-wider group-hover:gap-4 transition-all cursor-pointer">
                  See Impact <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  'PartnershipsCTA.tsx': `
"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export function PartnershipsCTA() {
  return (
    <section className="py-32 bg-[#030303] relative z-10 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight">
            Looking for a Technology Partner with the Right <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Ecosystem Alignment?</span>
          </h2>
          <p className="text-zinc-400 font-bold text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Whether you're planning a cloud transformation, enterprise platform rollout, modernization initiative, or managed services program, Devopstrio brings the engineering capability and partner-aligned delivery model to help you move with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="w-full sm:w-auto px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] flex items-center justify-center gap-2">
              Discuss Your Transformation Goals <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#strategic-partners" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300">
              Explore Our Technology Ecosystem
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
`
};

for (const [name, content] of Object.entries(components)) {
  fs.writeFileSync(path.join(outDir, name), content.trim() + '\n');
}
console.log('Done writing components!');
