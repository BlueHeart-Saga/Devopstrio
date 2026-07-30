"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Building2,
  Globe,
  Settings,
  Briefcase,
  Layers,
  Activity,
  Code2,
  Network,
  Rocket,
  Zap,
  BarChart3,
  Bot
} from "lucide-react";
import Link from "next/link";

export default function UnitedStatesOperationsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const supportEnterprises = [
    { title: "Enterprise Modernization", desc: "Transform legacy systems into cloud-native platforms.", icon: <Settings className="w-5 h-5" /> },
    { title: "AI & Automation", desc: "Implement intelligent business solutions using modern AI.", icon: <Bot className="w-5 h-5" /> },
    { title: "Cloud Engineering", desc: "Design secure and scalable cloud environments.", icon: <Globe className="w-5 h-5" /> },
    { title: "Digital Product Development", desc: "Develop enterprise-grade web, mobile, and SaaS applications.", icon: <Code2 className="w-5 h-5" /> },
    { title: "DevOps Excellence", desc: "Automate delivery pipelines and infrastructure.", icon: <Zap className="w-5 h-5" /> },
    { title: "Managed Operations", desc: "Provide continuous monitoring, maintenance, and optimization.", icon: <Activity className="w-5 h-5" /> }
  ];

  const coreCapabilities = [
    "Artificial Intelligence",
    "Cloud Engineering",
    "DevOps & Automation",
    "Cybersecurity",
    "Software Engineering",
    "Data Engineering",
    "Digital Transformation",
    "Managed Services"
  ];

  const lifecycleStages = [
    "Discover", "Plan", "Architect", "Develop", "Secure", "Deploy", "Operate", "Optimize"
  ];

  const techExpertise = {
    cloud: ["Microsoft Azure", "AWS", "Google Cloud", "Oracle Cloud"],
    development: ["React", "Next.js", "Node.js", "Python", "FastAPI", ".NET"],
    devops: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Azure DevOps"],
    aiData: ["OpenAI", "LangChain", "Azure AI", "PostgreSQL", "MongoDB", "Kafka"]
  };

  const industries = [
    "Banking & Financial Services",
    "Healthcare & Life Sciences",
    "Retail & E-Commerce",
    "Manufacturing",
    "Telecommunications",
    "Logistics & Supply Chain",
    "Education",
    "Public Sector"
  ];

  const innovationAreas = [
    "Generative AI",
    "Intelligent Automation",
    "Cloud Modernization",
    "Data Analytics",
    "AI Agents",
    "Platform Engineering",
    "Customer Experience",
    "Digital Products"
  ];

  const securityCompliance = [
    { title: "Zero Trust Security", desc: "Micro-segmentation and strict access policies." },
    { title: "Identity & Access Management", desc: "Secure authentication and RBAC controls." },
    { title: "Cloud Security", desc: "Posture management and secure landing zones." },
    { title: "Secure SDLC", desc: "Security embedded within the development pipeline." },
    { title: "SOC Best Practices", desc: "Aligning with SOC 2 compliance frameworks." },
    { title: "Data Privacy", desc: "Ensuring secure data handling and masking." },
    { title: "Continuous Monitoring", desc: "24/7 observability and threat detection." },
    { title: "Risk Management", desc: "Proactive vulnerability scanning and mitigation." }
  ];

  const engagementModels = [
    { title: "Technology Consulting", desc: "Strategic advisory for digital transformation." },
    { title: "Dedicated Engineering Teams", desc: "Exclusive pods driving your product roadmap." },
    { title: "Project Delivery", desc: "End-to-end execution of scoped technology initiatives." },
    { title: "Managed Services", desc: "Outsourced infrastructure and application support." },
    { title: "Staff Augmentation", desc: "Scaling your team with top-tier technical talent." },
    { title: "Long-Term Strategic Partnership", desc: "Co-engineering for continuous enterprise growth." }
  ];

  const outcomes = [
    { label: "Faster Product Delivery" },
    { label: "Scalable Cloud Platforms" },
    { label: "Improved Operational Efficiency" },
    { label: "Enhanced Customer Experience" },
    { label: "Secure Digital Operations" },
    { label: "Continuous Innovation" }
  ];

  const whyDevopstrio = [
    { title: "Customer-Centric Delivery", desc: "Focusing on business outcomes and user experience." },
    { title: "Global Engineering Talent", desc: "Access to world-class architects and developers." },
    { title: "Cloud-Native Expertise", desc: "Deep knowledge across AWS, Azure, and GCP." },
    { title: "AI-Driven Innovation", desc: "Integrating intelligent solutions for competitive advantage." },
    { title: "Secure Development Practices", desc: "Embedding security at every stage of the lifecycle." },
    { title: "Agile Collaboration", desc: "Transparent, iterative, and flexible engineering." },
    { title: "End-to-End Ownership", desc: "Taking full responsibility from design to deployment." },
    { title: "Long-Term Partnership", desc: "Committed to your sustainable technology success." }
  ];

  const faqs = [
    { q: "Do you support US businesses remotely?", a: "Yes, we support businesses across North America through our seamless remote collaboration and distributed global engineering hubs." },
    { q: "Can you build dedicated engineering teams?", a: "Absolutely. We assemble tailored engineering pods that integrate directly into your workflow and culture." },
    { q: "Which cloud providers do you support?", a: "Our certified engineers specialize in Microsoft Azure, AWS, and Google Cloud Platform." },
    { q: "How do you manage time zone collaboration?", a: "We utilize overlapping working hours, agile ceremonies, and transparent communication tools to ensure continuous alignment with US time zones." },
    { q: "Do you provide AI consulting?", a: "Yes, we help enterprises integrate generative AI, LLMs, and intelligent automation into their core operations." },
    { q: "Can you modernize legacy applications?", a: "Yes, we specialize in refactoring and migrating legacy monoliths into scalable, cloud-native microservices." },
    { q: "What industries do you specialize in?", a: "We have deep expertise in Financial Services, Healthcare, Retail, Tech, and Manufacturing among others." },
    { q: "How do we get started?", a: "Schedule a Discovery Session with our team to discuss your digital transformation goals and technical challenges." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="GLOBAL DELIVERY NETWORK"
        title={
          <>
            United States <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Operations
            </span>
          </>
        }
        subtitle="Empowering North American organizations with cloud-native engineering, AI innovation, enterprise software development, and modern digital transformation services."
        hyperspeed={true}
        hyperspeedOptions={{
          distortion: 'turbulentDistortion',
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xef4444, 0xdc2626, 0xf87171],
            rightCars: [0xf43f5e, 0xe11d48, 0xfb7185],
            sticks: 0xef4444
          }
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "GLOBAL DELIVERY", href: "/ecosystem/global-delivery" },
          { label: "UNITED STATES OPERATIONS" }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-8">
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Speak with Our Team
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-900 transition-all duration-300"
          >
            Schedule a Discovery Session
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 mt-12 max-w-4xl mx-auto">
          {["Enterprise Consulting", "AI Engineering", "Cloud Transformation", "Software Development", "DevOps Automation", "Customer Success"].map((highlight, idx) => (
            <span key={idx} className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-zinc-400 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-rose-500/50 hover:text-white transition-colors duration-300 cursor-default">
              {highlight}
            </span>
          ))}
        </div>
      </Hero>

      {/* 2. OVERVIEW */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10 text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Accelerating Digital Innovation Across North America
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
              Devopstrio collaborates with organizations across the United States to modernize enterprise technology, accelerate cloud adoption, and build intelligent digital platforms. Through our global engineering teams and customer-first delivery model, we help businesses innovate faster while maintaining security, scalability, and operational excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. SUPPORTING NORTH AMERICAN ENTERPRISES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">INNOVATION FOCUS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Supporting North American Enterprises</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportEnterprises.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-6 text-rose-500">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE DELIVERY CAPABILITIES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-10 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">EXPERTISE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">Core Delivery Capabilities</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {coreCapabilities.map((cap, idx) => (
              <span key={idx} className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-950/50 text-sm font-bold text-zinc-300 hover:text-white hover:border-rose-500 transition-colors">
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIGITAL TRANSFORMATION LIFECYCLE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">METHODOLOGY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Digital Transformation Lifecycle</h2>
          </Reveal>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6">
            {lifecycleStages.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="relative group w-full md:w-auto">
                  <div className="px-6 py-4 bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl text-center hover:border-rose-500/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                    <div className="text-rose-500 text-[10px] font-bold tracking-[0.2em] mb-1 font-mono group-hover:text-rose-400">0{idx + 1} //</div>
                    <div className="text-sm font-bold text-white tracking-wide">{stage}</div>
                  </div>
                </div>
                {idx < lifecycleStages.length - 1 && (
                  <ArrowUpRight className="w-5 h-5 text-zinc-700 rotate-45 hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY EXPERTISE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">STACK</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Technology Expertise</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">Cloud Platforms</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.cloud.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">Development</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.development.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">DevOps</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.devops.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">AI & Data</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.aiData.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE & 8. INNOVATION FOCUS AREAS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SECTORS</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Industries We Serve</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((ind, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{ind}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">INNOVATION</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Innovation Focus Areas</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {innovationAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. ENTERPRISE SECURITY & COMPLIANCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ASSURANCE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Enterprise Security & Compliance</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityCompliance.map((sec, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-colors flex flex-col items-start text-left">
                <ShieldCheck className="w-5 h-5 text-rose-500 mb-4" />
                <h4 className="text-base font-bold text-white mb-2">{sec.title}</h4>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ENGAGEMENT MODELS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PARTNERSHIP</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Engagement Models</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagementModels.map((model, idx) => (
              <div key={idx} className="p-8 border border-zinc-800 bg-zinc-900/20 rounded-2xl hover:bg-zinc-900/50 transition-all">
                <Briefcase className="w-5 h-5 text-rose-500 mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">{model.title}</h4>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. BUSINESS OUTCOMES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">VALUE DELIVERED</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Business Outcomes</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {outcomes.map((metric, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-zinc-900 bg-zinc-950/30 flex flex-col justify-center items-center shadow-[0_0_20px_rgba(0,0,0,0.4)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <h4 className="text-lg font-bold text-white mb-2">{metric.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. WHY DEVOPSTRIO FOR US ORGANIZATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DIFFERENTIATOR</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Why Devopstrio for US Organizations</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyDevopstrio.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex items-start gap-3 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-xs text-zinc-500 font-medium pl-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FAQs */}
      <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Questions we get <span className="text-white font-bold bg-gradient-to-r from-red-655 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-bold">
              Everything you need to know about our United States delivery operations.
            </p>
          </Reveal>

          {/* Accordion FAQ */}
          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group"
                  >
                    <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <div className="text-zinc-550 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl animate-fadeIn flex flex-col gap-4">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">Build the Future with Devopstrio</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with Devopstrio to accelerate innovation, modernize your technology landscape, and deliver secure, scalable digital solutions for your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Contact Our Team
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-900 transition-all duration-300"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
