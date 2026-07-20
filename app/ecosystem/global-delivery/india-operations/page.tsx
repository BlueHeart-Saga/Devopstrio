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
  Bot,
  Database
} from "lucide-react";
import Link from "next/link";

export default function IndiaEngineeringCenterPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const engineeringExcellence = [
    { title: "Software Engineering", icon: <Code2 className="w-5 h-5" /> },
    { title: "Cloud Architecture", icon: <Globe className="w-5 h-5" /> },
    { title: "AI & Machine Learning", icon: <Cpu className="w-5 h-5" /> },
    { title: "DevOps Automation", icon: <Zap className="w-5 h-5" /> },
    { title: "Cybersecurity", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Data Engineering", icon: <Database className="w-5 h-5" /> },
    { title: "Platform Engineering", icon: <Layers className="w-5 h-5" /> },
    { title: "Digital Transformation", icon: <Rocket className="w-5 h-5" /> }
  ];

  const deliveryCapabilities = [
    { title: "Enterprise Software Development", desc: "Modern web, mobile, SaaS, and enterprise applications." },
    { title: "Cloud Engineering", desc: "Azure, AWS, Google Cloud, and hybrid infrastructure." },
    { title: "Artificial Intelligence", desc: "Generative AI, automation, intelligent applications, and AI copilots." },
    { title: "DevOps & Platform Engineering", desc: "CI/CD, Infrastructure as Code, Kubernetes, GitOps, and automation." },
    { title: "Data Engineering", desc: "Data platforms, analytics, integration, and AI-ready data pipelines." },
    { title: "Managed Services", desc: "Monitoring, maintenance, optimization, and operational support." }
  ];

  const lifecycleStages = [
    "Discover", "Design", "Develop", "Test", "Secure", "Deploy", "Operate", "Optimize"
  ];

  const innovationRD = [
    "AI Research",
    "Cloud Innovation",
    "Automation Frameworks",
    "Internal Accelerators",
    "Product Engineering",
    "Proof of Concepts",
    "Emerging Technologies",
    "Engineering Best Practices"
  ];

  const techExpertise = {
    cloud: ["Microsoft Azure", "AWS", "Google Cloud", "Oracle Cloud"],
    ai: ["OpenAI", "Azure AI", "LangChain", "Vector Databases"],
    development: ["React", "Next.js", "Python", "FastAPI", ".NET", "Node.js"],
    devops: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Azure DevOps"],
    data: ["PostgreSQL", "MongoDB", "Kafka", "Spark", "Databricks"]
  };

  const globalDeliveryModelStages = [
    "Client Requirements", "Solution Design", "Engineering Team", "QA & Security", "Deployment", "24×7 Support", "Continuous Improvement"
  ];

  const qualitySecurity = [
    "Secure Development",
    "Code Reviews",
    "Automated Testing",
    "DevSecOps",
    "Cloud Security",
    "Data Protection",
    "Monitoring",
    "Continuous Improvement"
  ];

  const talentCulture = [
    "Continuous Learning",
    "Technical Excellence",
    "Innovation Culture",
    "Agile Collaboration",
    "Knowledge Sharing",
    "Mentorship",
    "Certification Programs",
    "Engineering Communities"
  ];

  const outcomes = [
    { label: "Engineering Support", value: "24×7" },
    { label: "Solution Delivery", value: "Rapid" },
    { label: "Architecture", value: "Cloud-Ready" },
    { label: "Innovation", value: "AI-Driven" },
    { label: "Enterprise Platforms", value: "Scalable" },
    { label: "Technology Partnership", value: "Long-Term" }
  ];

  const whyDevopstrio = [
    { title: "Skilled Engineering Teams" },
    { title: "Cloud-Native Expertise" },
    { title: "AI-First Innovation" },
    { title: "Modern Development Practices" },
    { title: "Security by Design" },
    { title: "Agile Delivery" },
    { title: "Global Collaboration" },
    { title: "Continuous Improvement" }
  ];

  const faqs = [
    { q: "What services are delivered from the India Engineering Center?", a: "We deliver full-cycle software development, cloud engineering, AI solutions, DevOps automation, and 24x7 managed support from our India center." },
    { q: "Do your teams work with global clients?", a: "Yes, our India-based engineers work daily with enterprises across the US, UK, and Europe in a seamless follow-the-sun delivery model." },
    { q: "Which technologies do you specialize in?", a: "We have deep expertise in cloud platforms (AWS, Azure, GCP), modern development (React, Next.js, Node.js, Python), and AI/Data engineering." },
    { q: "Do you provide dedicated engineering teams?", a: "Absolutely. We build dedicated offshore and nearshore engineering pods tailored to your specific project needs and technology stack." },
    { q: "How do you manage quality assurance?", a: "We employ strict code reviews, automated testing (unit, integration, E2E), and CI/CD pipelines to ensure enterprise-grade code quality." },
    { q: "Do you offer managed services?", a: "Yes, our India operations hub provides continuous 24x7 monitoring, maintenance, and cloud optimization for mission-critical systems." },
    { q: "How do you ensure secure software delivery?", a: "We implement DevSecOps practices, shifting security left with continuous vulnerability scanning and adherence to zero-trust architectures." },
    { q: "How can we engage with Devopstrio?", a: "Reach out via our contact page to schedule a discovery session and discuss how our engineering center can accelerate your roadmap." }
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
            India Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-700">
              Center
            </span>
          </>
        }
        subtitle="Building world-class software, AI solutions, cloud platforms, and enterprise technologies that power digital transformation for organizations across the globe."
        hyperspeed={true}
        hyperspeedOptions={{
          distortion: 'turbulentDistortion',
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xf97316, 0xc2410c, 0xfbd38d],
            rightCars: [0xf59e0b, 0xb45309, 0xfde68a],
            sticks: 0xf97316
          }
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "GLOBAL DELIVERY", href: "/ecosystem/global-delivery" },
          { label: "INDIA OPERATIONS" }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Connect with Our Team
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/services/explore"
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-900 transition-all duration-300"
          >
            Explore Engineering Services
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 mt-12 max-w-4xl mx-auto">
          {["Software Engineering", "AI Innovation", "Cloud Engineering", "DevOps Automation", "24×7 Support", "Global Delivery"].map((highlight, idx) => (
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
              Where Innovation Meets Engineering Excellence
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
              Our India Engineering Center serves as the foundation of Devopstrio&apos;s global delivery model. From enterprise software development and AI innovation to cloud engineering, DevOps automation, and managed services, our teams collaborate with clients worldwide to deliver secure, scalable, and future-ready digital solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. ENGINEERING EXCELLENCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CORE DOMAINS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Building Technology That Creates Business Value</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {engineeringExcellence.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4 text-rose-500 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE DELIVERY CAPABILITIES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">EXPERTISE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Core Delivery Capabilities</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryCapabilities.map((cap, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                  {cap.title}
                </h4>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed pl-4">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOFTWARE DEVELOPMENT LIFECYCLE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">METHODOLOGY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Software Development Lifecycle</h2>
          </Reveal>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6">
            {lifecycleStages.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="relative group w-full md:w-auto">
                  <div className="px-6 py-4 bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl text-center hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                    <div className="text-orange-500 text-[10px] font-bold tracking-[0.2em] mb-1 font-mono group-hover:text-orange-400">0{idx + 1} //</div>
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

      {/* 6. INNOVATION & R&D & 7. TECHNOLOGY EXPERTISE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Innovation & R&D */}
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FUTURE READY</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Driving Continuous Innovation</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {innovationRD.map((area, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{area}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tech Expertise Grid Condensed */}
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">STACK</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Technology Expertise</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-3 font-bold border-b border-zinc-800 pb-2">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {[...techExpertise.cloud, ...techExpertise.devops].slice(0, 8).map((tech, idx) => (
                    <span key={idx} className="text-xs text-zinc-300 bg-zinc-900/50 border border-zinc-800 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-3 font-bold border-b border-zinc-800 pb-2">AI, Data & Dev</h3>
                <div className="flex flex-wrap gap-2">
                  {[...techExpertise.ai, ...techExpertise.development, ...techExpertise.data].slice(0, 10).map((tech, idx) => (
                    <span key={idx} className="text-xs text-zinc-300 bg-zinc-900/50 border border-zinc-800 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GLOBAL DELIVERY MODEL */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">COLLABORATION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Supporting Clients Around the World</h2>
          </Reveal>
          <div className="flex flex-col md:flex-row justify-between items-center relative gap-6 md:gap-0">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-800 hidden md:block -z-10" />
            {globalDeliveryModelStages.map((stage, idx) => (
              <div key={idx} className="relative flex flex-col items-center group w-full text-center">
                <div className="w-4 h-4 rounded-full bg-zinc-900 border-2 border-rose-500 mb-4 z-10 shadow-[0_0_15px_rgba(225,29,72,0.5)]" />
                <h4 className="text-xs lg:text-sm font-bold text-white mb-2 max-w-[100px]">{stage}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. QUALITY & SECURITY & 10. TALENT CULTURE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ASSURANCE</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Quality & Security</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {qualitySecurity.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PEOPLE</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Building Great Technology Starts with Great People</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {talentCulture.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. BUSINESS OUTCOMES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">VALUE DELIVERED</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Business Outcomes</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {outcomes.map((metric, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/30 flex flex-col justify-center items-center shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                <span className="text-2xl lg:text-3xl font-black text-white mb-2 tracking-tighter">{metric.value}</span>
                <span className="text-[10px] lg:text-xs uppercase font-bold text-rose-500">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. WHY DEVOPSTRIO INDIA */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DIFFERENTIATOR</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Why Devopstrio India</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {whyDevopstrio.map((item, idx) => (
              <span key={idx} className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-950/50 text-sm font-bold text-zinc-300 hover:text-white hover:border-rose-500 transition-colors flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500" />
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FAQs */}
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
              Everything you need to know about our India Engineering Center.
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
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">Build the Future with Devopstrio Engineering</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with our India Engineering Center to accelerate software development, cloud transformation, AI innovation, and enterprise modernization through world-class engineering expertise.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Contact Our Team
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-900 transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
