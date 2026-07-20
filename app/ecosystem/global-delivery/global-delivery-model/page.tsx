"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  Globe,
  Settings,
  ShieldCheck,
  Code2,
  Activity,
  Briefcase,
  Users,
  Search,
  LayoutTemplate,
  Terminal,
  Cloud,
  Rocket,
  MessageSquare,
  Bot,
  Database
} from "lucide-react";
import Link from "next/link";

export default function GlobalDeliveryModelPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const deliveryPhilosophy = [
    { title: "Customer-Centric", icon: <Users className="w-5 h-5 text-rose-500" /> },
    { title: "Engineering Excellence", icon: <Code2 className="w-5 h-5 text-rose-500" /> },
    { title: "Agile Delivery", icon: <Activity className="w-5 h-5 text-rose-500" /> },
    { title: "Continuous Improvement", icon: <Settings className="w-5 h-5 text-rose-500" /> },
    { title: "Transparency", icon: <MessageSquare className="w-5 h-5 text-rose-500" /> },
    { title: "Innovation", icon: <Rocket className="w-5 h-5 text-rose-500" /> }
  ];

  const deliveryFramework = [
    "Business Goals",
    "Discovery",
    "Architecture",
    "Engineering",
    "Quality Assurance",
    "Security",
    "Cloud Deployment",
    "Managed Operations",
    "Continuous Innovation"
  ];

  const howWeWork = [
    { title: "Discover", desc: "Understand business goals." },
    { title: "Design", desc: "Create scalable architecture." },
    { title: "Build", desc: "Develop modern applications." },
    { title: "Validate", desc: "Testing and quality assurance." },
    { title: "Deploy", desc: "Secure cloud deployment." },
    { title: "Operate", desc: "Continuous monitoring." },
    { title: "Improve", desc: "Optimization and innovation." }
  ];

  const engagementModels = [
    "Dedicated Engineering Teams",
    "Project-Based Delivery",
    "Managed Services",
    "Technology Consulting",
    "Staff Augmentation",
    "Long-Term Strategic Partnership"
  ];

  const deliveryLifecycle = [
    "Plan", "Analyze", "Design", "Develop", "Test", "Deploy", "Support", "Optimize"
  ];

  const collaborationModelStages = [
    "Client", "Solution Architects", "Project Managers", "Engineering Teams", "QA Engineers", "Cloud Engineers", "Support Teams", "Continuous Feedback"
  ];

  const collaborationCards = [
    "Daily Collaboration",
    "Agile Ceremonies",
    "Sprint Planning",
    "Knowledge Sharing",
    "Cross-Regional Teams",
    "Transparent Reporting"
  ];

  const qualityEngineering = [
    "Automated Testing",
    "Code Reviews",
    "Performance Testing",
    "Security Testing",
    "CI/CD Quality Gates",
    "Continuous Validation",
    "Documentation",
    "Release Readiness"
  ];

  const securityGovernance = [
    "Security by Design",
    "Identity Management",
    "Compliance",
    "Cloud Security",
    "Risk Management",
    "DevSecOps",
    "Audit Trails",
    "Governance"
  ];

  const techExpertise = {
    cloud: ["Azure", "AWS", "Google Cloud", "Oracle Cloud"],
    development: ["React", "Next.js", "Python", "FastAPI", ".NET"],
    devops: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Azure DevOps"],
    ai: ["OpenAI", "LangChain", "Azure AI"],
    data: ["PostgreSQL", "MongoDB", "Kafka", "Databricks"]
  };

  const communication = [
    "Weekly Progress Reviews",
    "Sprint Demonstrations",
    "Project Dashboards",
    "Risk Management",
    "Documentation",
    "Stakeholder Meetings",
    "Executive Reporting",
    "Knowledge Transfer"
  ];

  const outcomes = [
    { label: "Time-to-Market", value: "Faster" },
    { label: "Software Quality", value: "Higher" },
    { label: "Scalability", value: "Cloud" },
    { label: "Operational Risk", value: "Reduced" },
    { label: "Innovation", value: "Continuous" },
    { label: "Business Partnership", value: "Long-Term" }
  ];

  const whyDevopstrio = [
    "Global Engineering Expertise",
    "Cloud-Native Delivery",
    "AI-Powered Innovation",
    "Security-First Engineering",
    "Transparent Collaboration",
    "Scalable Delivery Teams",
    "Continuous Optimization",
    "Business-Focused Outcomes"
  ];

  const faqs = [
    { q: "How does your Global Delivery Model work?", a: "Our model leverages connected engineering hubs worldwide to provide continuous development, agile methodology, and transparent communication to deliver scalable technology solutions." },
    { q: "Can dedicated engineering teams be assigned?", a: "Yes, we build and embed dedicated cross-functional pods that integrate directly with your internal teams." },
    { q: "How do you collaborate across time zones?", a: "We utilize overlapping working hours, synchronized daily stand-ups, and robust agile ceremonies to ensure continuous alignment regardless of location." },
    { q: "Which project methodologies do you use?", a: "We primarily utilize Agile/Scrum methodologies, allowing for iterative delivery, continuous feedback, and rapid pivoting based on business needs." },
    { q: "How is project quality maintained?", a: "Quality is guaranteed through automated CI/CD pipelines, strict code reviews, and integrated automated testing (unit, integration, performance)." },
    { q: "How do you ensure secure delivery?", a: "Security is embedded from day one via DevSecOps practices, continuous vulnerability scanning, and adherence to zero-trust architectures." },
    { q: "Can you support long-term engagements?", a: "Absolutely. Our delivery model is designed for long-term strategic partnerships spanning from initial development through to managed services." },
    { q: "How do clients track project progress?", a: "Through real-time project dashboards, weekly sprint demonstrations, and executive steering committee reviews for ultimate transparency." }
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
            Global Delivery <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-700">
              Model
            </span>
          </>
        }
        subtitle="Delivering technology solutions through globally connected engineering teams, standardized delivery practices, and continuous collaboration—ensuring quality, transparency, and business value at every stage."
        hyperspeed={true}
        hyperspeedOptions={{
          distortion: 'turbulentDistortion',
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0x3b82f6, 0x1d4ed8, 0x60a5fa],
            rightCars: [0x06b6d4, 0x0e7490, 0x22d3ee],
            sticks: 0x3b82f6
          }
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "GLOBAL DELIVERY", href: "/ecosystem/global-delivery" },
          { label: "GLOBAL DELIVERY MODEL" }
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore Our Delivery Model
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-900 transition-all duration-300"
          >
            Talk to Our Team
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 mt-12 max-w-4xl mx-auto">
          {["Global Engineering Teams", "Agile Delivery", "Cloud-Native Operations", "AI-Driven Engineering", "Security by Design", "Continuous Collaboration"].map((highlight, idx) => (
            <span key={idx} className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-zinc-400 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-rose-500/50 hover:text-white transition-colors duration-300 cursor-default">
              {highlight}
            </span>
          ))}
        </div>
      </Hero>

      {/* 2. OUR DELIVERY PHILOSOPHY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Building Technology Through Collaboration
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium mb-8">
              Technology projects succeed when strategy, engineering, operations, and customer collaboration work together seamlessly. Our Global Delivery Model combines experienced engineering teams, modern development practices, automation, and transparent communication to consistently deliver secure, scalable, and business-focused solutions.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {deliveryPhilosophy.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-zinc-800/50 bg-zinc-950/40 hover:border-rose-500/30 transition-colors text-center group">
                <div className="group-hover:scale-110 transition-transform">{feature.icon}</div>
                <span className="text-sm font-bold text-zinc-200">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GLOBAL DELIVERY FRAMEWORK */}
      <section className="w-full py-32 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.03),transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-20 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FRAMEWORK</span>
            <h2 className="text-2xl md:text-3xl xl:text-5xl font-black tracking-tight leading-tight text-white">One Framework. Global Execution.</h2>
          </Reveal>
          <div className="flex flex-col items-center max-w-2xl mx-auto relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-rose-500/0 via-rose-500/50 to-rose-500/0 -translate-x-1/2" />
            {deliveryFramework.map((stage, idx) => (
              <div key={idx} className="w-full relative flex justify-center py-6 group">
                <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-black border-2 border-rose-500 -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(225,29,72,0.5)] group-hover:scale-150 transition-transform" />
                <div className="bg-zinc-950/80 border border-zinc-800 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg w-[80%] md:w-[60%] text-center hover:border-rose-500/50 transition-colors relative z-20">
                  <span className="text-sm md:text-base font-bold text-white tracking-wide uppercase">{stage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PROCESS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">How We Work</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ENGAGEMENT MODELS & 6. DELIVERY LIFECYCLE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">MODELS</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Engagement Models</h2>
            </Reveal>
            <div className="flex flex-col gap-3">
              {engagementModels.map((model, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/20">
                  <Briefcase className="w-5 h-5 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-200">{model}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">LIFECYCLE</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Delivery Lifecycle</h2>
            </Reveal>
            <div className="flex flex-col md:flex-row flex-wrap justify-start items-center gap-4 md:gap-6">
              {deliveryLifecycle.map((stage, idx) => (
                <React.Fragment key={idx}>
                  <div className="relative group w-full md:w-auto">
                    <div className="px-6 py-4 bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl text-center hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                      <div className="text-cyan-500 text-[10px] font-bold tracking-[0.2em] mb-1 font-mono group-hover:text-cyan-400">0{idx + 1} //</div>
                      <div className="text-sm font-bold text-white tracking-wide">{stage}</div>
                    </div>
                  </div>
                  {idx < deliveryLifecycle.length - 1 && (
                    <ArrowUpRight className="w-5 h-5 text-zinc-700 rotate-45 hidden md:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL COLLABORATION MODEL */}
      <section className="w-full py-32 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-20 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ALIGNMENT</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-black tracking-tight leading-tight text-white mb-6">Engineering Without Borders</h2>
          </Reveal>
          
          <div className="flex flex-col lg:flex-row justify-between items-center relative gap-10 lg:gap-0 mb-20">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-800 hidden lg:block -z-10" />
            {collaborationModelStages.map((stage, idx) => (
              <div key={idx} className="relative flex flex-col items-center group w-full text-center">
                <div className="w-5 h-5 rounded-full bg-black border-2 border-rose-500 mb-4 z-10 shadow-[0_0_15px_rgba(225,29,72,0.5)]" />
                <h4 className="text-[11px] lg:text-xs font-bold text-zinc-300 max-w-[120px]">{stage}</h4>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {collaborationCards.map((card, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-zinc-800/50 bg-zinc-950/40 text-center hover:border-rose-500/30 transition-colors">
                <span className="text-xs font-bold text-white">{card}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. QUALITY ENGINEERING & 9. SECURITY GOVERNANCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ASSURANCE</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Quality Engineering</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {qualityEngineering.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Reveal className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PROTECTION</span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Security & Governance</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {securityGovernance.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
                  <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-bold text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. TECHNOLOGY-DRIVEN DELIVERY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">STACK</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Technology-Driven Delivery</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">Cloud</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.cloud.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><Cloud className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">Development</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.development.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><Code2 className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">DevOps</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.devops.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><Settings className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">AI</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.ai.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><Bot className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl">
              <h3 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold border-b border-zinc-800 pb-3">Data</h3>
              <div className="flex flex-col gap-3">
                {techExpertise.data.map((tech, idx) => (
                  <span key={idx} className="text-sm font-bold text-zinc-300 flex items-center gap-2"><Database className="w-3 h-3 text-rose-500" /> {tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. COMMUNICATION & TRANSPARENCY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">VISIBILITY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Keeping Clients Connected</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {communication.map((comm, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-colors flex items-center justify-center">
                <h4 className="text-sm font-bold text-zinc-200">{comm}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BUSINESS OUTCOMES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">IMPACT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Business Outcomes</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {outcomes.map((metric, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/30 flex flex-col justify-center items-center shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                <span className="text-xl lg:text-2xl font-black text-white mb-2 tracking-tighter leading-none">{metric.value}</span>
                <span className="text-[10px] lg:text-xs uppercase font-bold text-rose-500 mt-2">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. WHY DEVOPSTRIO GLOBAL DELIVERY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DIFFERENTIATOR</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Why Devopstrio Global Delivery</h2>
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

      {/* 14. FAQs */}
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
              Everything you need to know about our enterprise delivery methodology.
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

      {/* 15. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">Build Your Next Digital Transformation with Devopstrio</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Whether you&apos;re modernizing legacy systems, adopting AI, migrating to the cloud, or building enterprise software, our Global Delivery Model ensures consistent quality, transparent collaboration, and measurable business outcomes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Start Your Project
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-900 transition-all duration-300"
            >
              Talk to a Solutions Architect
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
