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
  Network
} from "lucide-react";
import Link from "next/link";

export default function UnitedKingdomHubPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyUK = [
    { title: "Digital Transformation", desc: "Helping organizations modernize legacy technology.", icon: <Settings className="w-5 h-5" /> },
    { title: "Financial Innovation", desc: "Supporting banks, fintech, and payment platforms.", icon: <Activity className="w-5 h-5" /> },
    { title: "Cloud Adoption", desc: "Accelerating Azure, AWS, and Google Cloud migration.", icon: <Globe className="w-5 h-5" /> },
    { title: "AI Innovation", desc: "Implementing practical AI solutions for enterprises.", icon: <Cpu className="w-5 h-5" /> },
    { title: "Cybersecurity", desc: "Building secure-by-design systems.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Operational Excellence", desc: "Improving reliability, automation, and scalability.", icon: <Layers className="w-5 h-5" /> }
  ];

  const deliverySteps = [
    { name: "Business Discovery", desc: "Aligning IT strategies with business goals." },
    { name: "Solution Architecture", desc: "Designing scalable cloud and data architectures." },
    { name: "Engineering", desc: "Full-stack development and platform builds." },
    { name: "Quality Assurance", desc: "Automated testing and compliance checks." },
    { name: "Cloud Deployment", desc: "Zero-downtime migrations and releases." },
    { name: "Continuous Support", desc: "24/7 monitoring and SRE operations." },
    { name: "Optimization", desc: "FinOps and performance tuning." }
  ];

  const lifecycleStages = [
    "Consult", "Design", "Develop", "Test", "Secure", "Deploy", "Operate", "Improve"
  ];

  const capabilities = [
    "Cloud Engineering",
    "AI & Data",
    "Software Engineering",
    "DevOps",
    "Cybersecurity",
    "Managed Services",
    "Digital Transformation",
    "IT Consulting"
  ];

  const industries = [
    "Banking & Finance",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Telecommunications",
    "Education",
    "Government",
    "Media"
  ];

  const ecosystem = [
    "Azure", "AWS", "Google Cloud", "Oracle Cloud",
    "Docker", "Kubernetes", "Terraform", "GitHub",
    "Azure DevOps", "Python", "React", "Next.js",
    "FastAPI", "OpenAI", "MongoDB", "PostgreSQL"
  ];

  const securityCompliance = [
    { title: "GDPR", desc: "Strict adherence to data privacy laws." },
    { title: "Cyber Essentials", desc: "UK government-backed cyber certification standards." },
    { title: "ISO Best Practices", desc: "Following ISO 27001 for information security." },
    { title: "Cloud Security", desc: "Zero-trust architectures and network isolation." },
    { title: "Identity Management", desc: "Advanced IAM and RBAC controls." },
    { title: "Data Protection", desc: "End-to-end encryption and masking." },
    { title: "Continuous Monitoring", desc: "24/7 SOC and vulnerability scanning." },
    { title: "Risk Management", desc: "Proactive threat hunting and mitigation." }
  ];

  const engagementModels = [
    { title: "Project Delivery", desc: "End-to-end execution of fixed-scope technology initiatives." },
    { title: "Dedicated Team", desc: "Exclusive engineering pods integrated into your workflow." },
    { title: "Managed Services", desc: "Outsourced IT, cloud support, and infrastructure operations." },
    { title: "Staff Augmentation", desc: "Filling skill gaps with top-tier SREs and developers." },
    { title: "Technology Consulting", desc: "Strategic advisory for cloud, AI, and modernization." },
    { title: "Long-Term Partnership", desc: "Multi-year co-engineering and transformation agreements." }
  ];

  const outcomes = [
    { label: "Faster Delivery", value: "2x" },
    { label: "Improved Security", value: "99%" },
    { label: "Lower Cost", value: "30%" },
    { label: "High Productivity", value: "40%" }
  ];

  const whyDevopstrio = [
    { title: "UK Business Understanding", desc: "Deep knowledge of local markets and compliance." },
    { title: "Global Engineering Team", desc: "Scalable talent pool across onshore and offshore hubs." },
    { title: "Cloud Expertise", desc: "Certified AWS, Azure, and GCP architects." },
    { title: "AI Innovation", desc: "Cutting-edge generative AI and ML models." },
    { title: "Security First", desc: "Secure-by-design methodologies at every step." },
    { title: "Agile Delivery", desc: "Rapid iterations and transparent reporting." },
    { title: "Long-Term Partnership", desc: "Committed to your continued business growth." },
    { title: "Continuous Support", desc: "Always-on SLAs for mission-critical systems." }
  ];

  const faqs = [
    { q: "Do you support UK businesses remotely?", a: "Yes, we combine local consulting presence with our robust global delivery centers to provide highly effective remote engineering support." },
    { q: "Can you provide dedicated engineering teams?", a: "Absolutely. We assemble dedicated pods tailored to your exact tech stack and domain requirements." },
    { q: "Which cloud platforms do you specialize in?", a: "Our architects are highly certified across AWS, Microsoft Azure, and Google Cloud Platform." },
    { q: "How do you ensure GDPR compliance?", a: "We build architectures that guarantee data residency, encryption at rest and in transit, and enforce strict access controls." },
    { q: "What industries do you serve?", a: "We primarily support Financial Services, Public Sector, Healthcare, Retail, and SaaS technology companies." },
    { q: "Do you provide managed services?", a: "Yes, we offer 24/7 infrastructure monitoring, cloud management, and application support." },
    { q: "Can you modernize legacy systems?", a: "Yes, we specialize in refactoring monoliths into cloud-native microservices with zero downtime." },
    { q: "How do we start working together?", a: "You can book a Discovery Call with our team to discuss your current challenges and strategic goals." }
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
            United Kingdom <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800">
              Hub
            </span>
          </>
        }
        subtitle="Helping UK businesses accelerate digital transformation through secure cloud engineering, AI innovation, DevOps automation, and enterprise software development."
        hyperspeed={true}
        hyperspeedOptions={{
          distortion: 'turbulentDistortion',
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0x2563eb, 0x1e3a8a, 0x93c5fd],
            rightCars: [0x4338ca, 0x312e81, 0xa5b4fc],
            sticks: 0x2563eb
          }
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "GLOBAL DELIVERY", href: "/ecosystem/global-delivery" },
          { label: "UNITED KINGDOM HUB" }
        ]}
      >
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Talk to Our UK Team
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-900 transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </Hero>

      {/* 2. OVERVIEW */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10 text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Delivering Enterprise Technology for UK Organizations
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
              Devopstrio partners with organizations across the United Kingdom to design, build, modernize, and support secure digital platforms. Our global engineering model combines UK business alignment with world-class engineering expertise to deliver scalable, resilient, and future-ready technology solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. WHY THE UNITED KINGDOM */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FOCUS AREAS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Why the United Kingdom</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUK.map((item, idx) => (
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

      {/* 4. HOW WE DELIVER */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PROCESS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">How We Deliver</h2>
          </Reveal>
          <div className="flex flex-col md:flex-row justify-between items-center relative gap-6 md:gap-0">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-800 hidden md:block -z-10" />
            {deliverySteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center group w-full text-center">
                <div className="w-4 h-4 rounded-full bg-zinc-900 border-2 border-rose-500 mb-4 z-10 shadow-[0_0_15px_rgba(225,29,72,0.5)]" />
                <h4 className="text-xs lg:text-sm font-bold text-white mb-2">{step.name}</h4>
                <p className="text-[10px] lg:text-xs text-zinc-500 font-medium max-w-[120px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. UK DELIVERY CAPABILITIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-10 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">EXPERTISE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">UK Delivery Capabilities</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {capabilities.map((cap, idx) => (
              <span key={idx} className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-950/50 text-sm font-bold text-zinc-300 hover:text-white hover:border-rose-500 transition-colors">
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SUPPORT */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-10 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SECTORS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-8">Industries We Support</h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, idx) => (
              <div key={idx} className="flex items-center justify-center gap-3 p-4 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                <span className="text-sm font-bold text-zinc-300 text-center">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DELIVERY LIFECYCLE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">METHODOLOGY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Delivery Lifecycle</h2>
          </Reveal>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6">
            {lifecycleStages.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="relative group w-full md:w-auto">
                  <div className="px-6 py-4 bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl text-center hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                    <div className="text-blue-500 text-[10px] font-bold tracking-[0.2em] mb-1 font-mono group-hover:text-blue-400">0{idx + 1} //</div>
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

      {/* 8. TECHNOLOGY ECOSYSTEM */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">STACK</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Technology Ecosystem</h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 text-center">
            {ecosystem.map((tech, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-rose-500/10 hover:border-rose-500/30 transition-all flex items-center justify-center">
                <span className="text-xs font-bold text-zinc-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECURITY & COMPLIANCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ASSURANCE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Security & Compliance</h2>
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
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
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
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">VALUE DELIVERED</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Business Outcomes</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {outcomes.map((metric, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-zinc-900 bg-zinc-950/30 flex flex-col justify-center items-center">
                <span className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">{metric.value}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-rose-500">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. WHY DEVOPSTRIO UK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DIFFERENTIATOR</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Why Devopstrio UK</h2>
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
              Everything you need to know about our UK delivery operations.
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
          <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">Build Your Next Digital Transformation with Devopstrio</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with Devopstrio to accelerate cloud adoption, AI innovation, secure software engineering, and enterprise modernization for your UK business.
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
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
