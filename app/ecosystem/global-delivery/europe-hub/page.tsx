"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  ShieldCheck,
  Code2,
  Zap,
  Bot,
  Cloud,
  Settings,
  Link as LinkIcon
} from "lucide-react";
import Link from "next/link";

export default function EuropeDeliveryHubPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const supportBusinesses = [
    { title: "Cloud Transformation", desc: "Modernize enterprise infrastructure and applications.", icon: <Cloud className="w-5 h-5" /> },
    { title: "AI & Data Innovation", desc: "Build intelligent, data-driven business solutions.", icon: <Bot className="w-5 h-5" /> },
    { title: "Enterprise Software", desc: "Develop scalable digital platforms.", icon: <Code2 className="w-5 h-5" /> },
    { title: "Cybersecurity", desc: "Protect enterprise systems with security-first engineering.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "DevOps Automation", desc: "Accelerate software delivery with automation.", icon: <Zap className="w-5 h-5" /> },
    { title: "Managed Services", desc: "24×7 monitoring, optimization, and operational support.", icon: <Settings className="w-5 h-5" /> }
  ];

  const coreCapabilities = [
    "Artificial Intelligence",
    "Cloud Engineering",
    "DevOps & Automation",
    "Cybersecurity",
    "Software Engineering",
    "Data Engineering",
    "Platform Engineering",
    "Managed Services"
  ];

  const industries = [
    "Banking & Financial Services",
    "Healthcare & Life Sciences",
    "Manufacturing",
    "Retail & E-Commerce",
    "Telecommunications",
    "Logistics & Supply Chain",
    "Public Sector",
    "Education"
  ];

  const lifecycleStages = [
    "Discover", "Consult", "Architect", "Develop", "Secure", "Deploy", "Operate", "Optimize"
  ];

  const techExpertise = {
    cloud: ["Microsoft Azure", "AWS", "Google Cloud", "Oracle Cloud"],
    ai: ["OpenAI", "Azure AI", "LangChain", "Vector Databases"],
    development: ["React", "Next.js", "Python", "FastAPI", ".NET", "Node.js"],
    devops: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Azure DevOps"],
    data: ["PostgreSQL", "MongoDB", "Apache Kafka", "Spark", "Databricks"]
  };

  const gdprCompliance = [
    "GDPR-Aligned Data Practices",
    "Identity & Access Management",
    "Zero Trust Architecture",
    "Cloud Security",
    "Data Protection",
    "Secure SDLC",
    "Continuous Monitoring",
    "Governance & Risk Management"
  ];

  const collaboration = [
    "Distributed Engineering Teams",
    "Agile Delivery",
    "Shared Governance",
    "Transparent Communication",
    "Enterprise Documentation",
    "Continuous Collaboration"
  ];

  const outcomes = [
    { label: "Infrastructure", value: "Cloud-Ready" },
    { label: "Innovation", value: "AI-Powered" },
    { label: "Digital Platforms", value: "Secure" },
    { label: "Engineering Support", value: "24×7" },
    { label: "Enterprise Systems", value: "Scalable" },
    { label: "Technology Partnership", value: "Long-Term" }
  ];

  const whyDevopstrio = [
    "European Business Understanding",
    "GDPR-Conscious Engineering",
    "Cloud-Native Expertise",
    "AI-Driven Innovation",
    "Security by Design",
    "Global Delivery Excellence",
    "Agile Collaboration",
    "Trusted Technology Partner"
  ];

  const faqs = [
    { q: "Do you support businesses across Europe?", a: "Yes, we support clients across Europe through our global engineering teams, bringing a deep understanding of European market requirements." },
    { q: "How do you help organizations meet GDPR requirements?", a: "We integrate GDPR principles directly into our engineering lifecycle—from data masking and encryption to secure, compliant cloud architectures." },
    { q: "Which cloud platforms do you work with?", a: "Our engineers are certified across Microsoft Azure, AWS, and Google Cloud, ensuring best-in-class multi-cloud solutions." },
    { q: "Can you provide dedicated engineering teams?", a: "Yes. We can assemble dedicated offshore engineering pods that integrate seamlessly into your European operations." },
    { q: "Do you deliver managed services?", a: "Absolutely. We offer 24x7 monitoring, cloud optimization, and application support via our follow-the-sun global delivery model." },
    { q: "What industries do you specialize in?", a: "We have deep expertise across Financial Services, Healthcare, Manufacturing, Retail, and the Public Sector." },
    { q: "How do you collaborate across time zones?", a: "We utilize overlapping working hours, agile ceremonies, and transparent communication protocols to ensure perfect alignment with European time zones." },
    { q: "How can we start working together?", a: "Contact our team to schedule an initial discovery session, and we will outline a tailored digital transformation roadmap for your business." }
  ];

  const relatedCenters = [
    { name: "United Kingdom Hub", flag: "🇬🇧", path: "/ecosystem/global-delivery/united-kingdom-hub" },
    { name: "United States Operations", flag: "🇺🇸", path: "/ecosystem/global-delivery/united-states-operations" },
    { name: "India Engineering Center", flag: "🇮🇳", path: "/ecosystem/global-delivery/india-operations" },
    { name: "Global Delivery Model", flag: "🌍", path: "/ecosystem/global-delivery/global-delivery-model" },
    { name: "Follow-the-Sun Support", flag: "🌞", path: "/ecosystem/global-delivery/global-delivery-model" },
    { name: "Global Collaboration", flag: "🤝", path: "/ecosystem/global-delivery" }
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
            Europe Delivery <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-700">
              Hub
            </span>
          </>
        }
        subtitle="Delivering secure, cloud-native, AI-powered digital solutions for organizations across Europe through globally connected engineering teams and regional best practices."
        hyperspeed={true}
        hyperspeedOptions={{
          distortion: 'turbulentDistortion',
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0x10b981, 0x047857, 0x34d399],
            rightCars: [0x14b8a6, 0x0f766e, 0x2dd4bf],
            sticks: 0x10b981
          }
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "GLOBAL DELIVERY", href: "/ecosystem/global-delivery" },
          { label: "EUROPE DELIVERY HUB" }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-8">
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Contact Our Team
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/services/explore"
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-900 transition-all duration-300"
          >
            Explore Our Capabilities
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 mt-12 max-w-4xl mx-auto">
          {["GDPR Ready", "Cloud Engineering", "AI Innovation", "Cybersecurity", "Enterprise Software", "Global Collaboration"].map((highlight, idx) => (
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
              Enabling Digital Transformation Across Europe
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
              Devopstrio partners with organizations across Europe to modernize applications, accelerate cloud adoption, strengthen cybersecurity, and build intelligent digital platforms. By combining global engineering expertise with an understanding of European business requirements, we deliver scalable, secure, and future-ready technology solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. SUPPORTING EUROPEAN BUSINESSES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TRANSFORMATION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Supporting European Businesses</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportBusinesses.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 transition-transform">
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
      
      {/* 5. EUROPEAN INDUSTRIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-10 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SECTORS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-8">European Industries We Serve</h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, idx) => (
              <div key={idx} className="flex items-center justify-center gap-3 p-4 rounded-lg border border-zinc-800/50 bg-zinc-900/20 group hover:border-rose-500/50 transition-colors">
                <span className="text-lg">🇪🇺</span>
                <span className="text-xs md:text-sm font-bold text-zinc-300 text-center group-hover:text-white transition-colors">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DIGITAL DELIVERY LIFECYCLE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">METHODOLOGY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Digital Delivery Lifecycle</h2>
          </Reveal>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6">
            {lifecycleStages.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="relative group w-full md:w-auto">
                  <div className="px-6 py-4 bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl text-center hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                    <div className="text-emerald-500 text-[10px] font-bold tracking-[0.2em] mb-1 font-mono group-hover:text-emerald-400">0{idx + 1} //</div>
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

      {/* 7. TECHNOLOGY EXPERTISE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">STACK</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Technology Expertise</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">Cloud</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.cloud.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">AI</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.ai.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">Development</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.development.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">DevOps</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.devops.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">Data</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.data.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECURITY & GDPR COMPLIANCE & 9. CROSS BORDER */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ASSURANCE</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Security & GDPR Compliance</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gdprCompliance.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">OPERATIONS</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Working Seamlessly Across Europe</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {collaboration.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. BUSINESS OUTCOMES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">IMPACT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Business Outcomes</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {outcomes.map((metric, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/30 flex flex-col justify-center items-center shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                <span className="text-2xl lg:text-3xl font-black text-white mb-2 tracking-tighter leading-none">{metric.value}</span>
                <span className="text-[10px] lg:text-xs uppercase font-bold text-rose-500 mt-2">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. WHY DEVOPSTRIO EUROPE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DIFFERENTIATOR</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Why Devopstrio Europe</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {whyDevopstrio.map((item, idx) => (
              <span key={idx} className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-950/50 text-sm font-bold text-zinc-300 hover:text-white hover:border-rose-500 transition-colors flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQs */}
      <section id="faq" className="w-full py-20 md:py-28 bg-black text-white relative border-b border-zinc-900/60">
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
              Everything you need to know about our European delivery capabilities.
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

      {/* 13. RELATED GLOBAL DELIVERY CENTERS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-12 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">NETWORK</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Explore Our Global Ecosystem</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {relatedCenters.map((center, idx) => (
              <Link key={idx} href={center.path} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/50 transition-all duration-300 group flex items-center gap-4">
                <span className="text-2xl">{center.flag}</span>
                <span className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">{center.name}</span>
                <LinkIcon className="w-4 h-4 text-zinc-600 ml-auto group-hover:text-rose-500 transition-colors" />
              </Link>
            ))}
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
            Partner with Devopstrio to modernize your technology landscape through secure cloud engineering, AI innovation, enterprise software development, and global delivery excellence across Europe.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Talk to an Expert
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-900 transition-all duration-300"
            >
              Start Your Digital Transformation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
