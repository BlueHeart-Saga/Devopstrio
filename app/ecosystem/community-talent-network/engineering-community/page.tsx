"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
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
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="GLOBAL ECOSYSTEM"
        prism={true}
        prismHueShift={3.5}
        title={
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Engineering Community
            </span>
          </>
        }
        subtitle="A global network of architects, developers, DevOps engineers, SREs, and cloud specialists. Join tens of thousands of engineering professionals. Collaborate on open-source projects, attend deep-dive technical meetups, and advance your career within specialized tech guilds."
        stats={metrics}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "COMMUNITY & TALENT NETWORK", href: "/ecosystem/community-talent-network" },
          { label: "ENGINEERING COMMUNITY" }
        ]}
      >
        <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Consult Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
      </Hero>


      {/* 2. OVERVIEW / CAPABILITY CARDS (COMMUNITIES) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">THE GUILDS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Specialized Communities</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {communities.map((comm, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                  {comm.icon}
                </div>
                <h4 className="text-sm font-bold text-white mb-3">{comm.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{comm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">JOURNEY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Community Journey</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {processFramework.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[160px] text-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/40 transition-all duration-300 group">
                  <h4 className="text-base font-bold text-rose-500 mb-2">{stage.step}</h4>
                  <p className="text-xs text-zinc-300 font-medium">{stage.desc}</p>
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ENGAGEMENT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Community Programs</h2>
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">HIGHLIGHTS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Community Highlights</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <h4 className="text-sm font-bold text-white mb-3">{story.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{story.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. METRICS SECTION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SCALE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Ecosystem Scale</h2>
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
              Everything you need to know about our Engineering Community. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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

          {/* Below FAQ callout */}
          <Reveal delay={0.2}>
            <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-zinc-400 text-xs md:text-sm font-bold">
                Still have questions? Don&apos;t sit with them. Reach out to our team — we respond to every message personally.
              </p>
              <a
                href="mailto:info@devopstrioglobal.com"
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Engineers <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Join The Community</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
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
