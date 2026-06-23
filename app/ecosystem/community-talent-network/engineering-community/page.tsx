"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  Users,
  Cloud,
  Terminal,
  BrainCircuit,
  ShieldCheck,
  Database,
  Calendar,
  BookOpen,
  Trophy,
  Award
} from "lucide-react";
import Link from "next/link";

export default function EngineeringCommunityPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const communities = [
    { icon: <Cloud className="w-5 h-5 text-rose-500" />, title: "Cloud Engineering", desc: "Architects and builders focusing on Azure, AWS, and OCI enterprise infrastructures." },
    { icon: <Terminal className="w-5 h-5 text-rose-500" />, title: "DevOps & SRE", desc: "Specialists in CI/CD automation, Kubernetes scaling, and maintaining 99.99% uptime." },
    { icon: <BrainCircuit className="w-5 h-5 text-rose-500" />, title: "AI Engineering", desc: "Researchers and developers building advanced RAG and autonomous multi-agent systems." },
    { icon: <ShieldCheck className="w-5 h-5 text-rose-500" />, title: "Security", desc: "DevSecOps practitioners integrating zero-trust frameworks into modern pipelines." },
    { icon: <Database className="w-5 h-5 text-rose-500" />, title: "Data Engineering", desc: "Engineers managing high-throughput Kafka streams and massive Snowflake data lakes." }
  ];

  const processFramework = [
    { step: "Connect", desc: "Join localized community chapters." },
    { step: "Learn", desc: "Attend workshops and read tech blogs." },
    { step: "Build", desc: "Participate in global hackathons." },
    { step: "Lead", desc: "Earn MVP status and mentor others." }
  ];

  const programs = [
    { icon: <Calendar className="w-6 h-6 text-rose-500" />, title: "Technical Meetups", desc: "Monthly regional events where engineering leaders dive deep into architectural patterns and live code demonstrations." },
    { icon: <BookOpen className="w-6 h-6 text-rose-500" />, title: "Knowledge Sharing", desc: "Access to our exclusive technical blog platform, architecture decision records (ADRs), and detailed post-mortems." },
    { icon: <Trophy className="w-6 h-6 text-rose-500" />, title: "Hackathons", desc: "Quarterly 48-hour global coding events tackling complex enterprise challenges with substantial sponsor prizes." },
    { icon: <Award className="w-6 h-6 text-rose-500" />, title: "Community Recognition", desc: "Our MVP program rewards top contributors with sponsored certifications, conference tickets, and speaking slots." }
  ];

  const successStories = [
    { title: "The K8s Scaling Hackathon", desc: "Over 500 engineers participated in our latest hackathon, resulting in an open-source autoscaler that reduced cluster costs by 20%." },
    { title: "London AI Meetup", desc: "Our recent AI Engineering meetup in London attracted 300+ attendees for a live workshop on LangGraph orchestration." },
    { title: "MVP Accelerator", desc: "In 2025, 50 community members achieved 'Devopstrio MVP' status, with 12 landing senior architect roles within our partner network." }
  ];

  const metrics = [
    { value: "50k+", label: "Active Global Members" },
    { value: "120+", label: "Meetups Hosted Annually" },
    { value: "5", label: "Specialized Guilds" }
  ];

  const faqs = [
    { q: "Who can join the Devopstrio Engineering Community?", a: "The community is open to all technology professionals, from junior developers to seasoned enterprise architects, as well as computer science students." },
    { q: "Is the community free to join?", a: "Yes, membership to the core community, including access to our Slack/Discord servers and technical blogs, is completely free." },
    { q: "How often do you host technical meetups?", a: "We host global virtual meetups bi-weekly, and localized in-person meetups monthly across our major hubs in the UK, US, and India." },
    { q: "What is the MVP program?", a: "The Devopstrio Most Valuable Professional (MVP) program recognizes individuals who consistently contribute high-quality open-source code, write technical articles, or speak at our events." },
    { q: "Can I speak at a Devopstrio meetup?", a: "Absolutely. We encourage community members to submit 'Call for Papers' (CFPs) for our upcoming events. We even offer public speaking coaching for first-timers." },
    { q: "How do the hackathons work?", a: "Our hackathons are typically virtual weekend events where teams form to build solutions around specific themes (e.g., 'Sustainable Cloud Architecture'). Winners receive cash prizes and fast-tracked interviews." },
    { q: "Do you have dedicated channels for different technologies?", a: "Yes, our community is organized into 'Guilds' (Cloud, DevOps, AI, Security, Data), allowing you to focus on the topics most relevant to your career." },
    { q: "Can companies sponsor community events?", a: "Yes, we partner with enterprise technology vendors who sponsor our hackathons and meetups in exchange for presenting their tooling to our audience." },
    { q: "How do I access the technical blogs?", a: "All technical blogs and architecture deep-dives are available on our community portal, with premium deep-dives available exclusively to registered members." },
    { q: "How do I join?", a: "Click the 'Join the Community' button below to register, access the Slack channel, and receive invites to upcoming events." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        <div className="absolute inset-0 z-0">
          <img src="/assets/ecosystem/sub-page-hero/ecosystem_Community_talent_network/Engineering_Community.png" alt="Engineering Community background" className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-20">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Users className="w-3.5 h-3.5" />
              GLOBAL ECOSYSTEM
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Engineering Community
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-6">
              A global network of architects, developers, DevOps engineers, SREs, and cloud specialists.
            </p>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold">
              Join tens of thousands of engineering professionals. Collaborate on open-source projects, attend deep-dive technical meetups, and advance your career within specialized tech guilds.
            </p>
          </Reveal>
          
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Consult Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>


      {/* 2. OVERVIEW / CAPABILITY CARDS (COMMUNITIES) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">THE GUILDS</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Specialized Communities</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {communities.map((comm, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                  {comm.icon}
                </div>
                <h4 className="text-sm font-bold text-white mb-3">{comm.title}</h4>
                <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">{comm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Community Journey</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {processFramework.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[160px] text-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/40 transition-all duration-300 group">
                  <h4 className="text-sm font-bold text-rose-500 mb-2">{stage.step}</h4>
                  <p className="text-[10px] text-zinc-400 font-medium">{stage.desc}</p>
                </div>
                {idx < processFramework.length - 1 && (
                  <div className="hidden lg:flex items-center">
                    <ArrowUpRight className="w-5 h-5 text-zinc-700" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS GRID */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">ENGAGEMENT</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Community Programs</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((prog, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0">
                  {prog.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">{prog.title}</h4>
                  <p className="text-sm text-zinc-400 font-bold leading-relaxed">{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUCCESS STORIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">HIGHLIGHTS</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Community Highlights</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <h4 className="text-sm font-bold text-white mb-3">{story.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{story.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. METRICS SECTION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">SCALE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Ecosystem Scale</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/20 border border-zinc-900/60 rounded-xl hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-center items-center">
                <span className="text-4xl font-black text-white tracking-tight mb-2">{m.value}</span>
                <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-zinc-950/50 border border-zinc-900 rounded-xl overflow-hidden hover:border-zinc-800 transition-colors duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white"
                  >
                    {faq.q}
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-rose-500" : ""}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[200px] border-t border-zinc-900/60" : "max-h-0"}`}>
                    <p className="p-6 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Join The Community</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Expand your network, learn from enterprise architects, and contribute to the next generation of cloud technologies.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Become A Member
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
