"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  Globe,
  Code2,
  Cloud,
  ShieldCheck,
  BrainCircuit,
  Settings,
  MapPin,
  CheckCircle2,
  Users,
  Briefcase
} from "lucide-react";
import Link from "next/link";

export default function TalentNetworkPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const talentCategories = [
    { icon: <Code2 className="w-6 h-6 text-rose-500" />, title: "Software Engineers", desc: "Full-stack developers proficient in React, Node.js, Go, and Python, specializing in microservices architecture." },
    { icon: <Settings className="w-6 h-6 text-rose-500" />, title: "DevOps Engineers", desc: "Automation experts mastering CI/CD, Kubernetes, Terraform, and GitOps workflows." },
    { icon: <Cloud className="w-6 h-6 text-rose-500" />, title: "Cloud Architects", desc: "Strategic leaders designing multi-region, high-availability topologies across AWS, Azure, and GCP." },
    { icon: <BrainCircuit className="w-6 h-6 text-rose-500" />, title: "AI Engineers", desc: "Specialists in LLM orchestration, RAG architectures, and fine-tuning open-source models." },
    { icon: <ShieldCheck className="w-6 h-6 text-rose-500" />, title: "Security Engineers", desc: "DevSecOps practitioners integrating continuous security scanning and Zero Trust networks." }
  ];

  const screeningFramework = [
    { step: "Application", desc: "Initial portfolio & resume screening." },
    { step: "Assessment", desc: "Asynchronous algorithmic coding challenge." },
    { step: "Technical Review", desc: "Live system design & architecture whiteboard." },
    { step: "Interview", desc: "Behavioral & cultural fit assessment." },
    { step: "Certification", desc: "Verification of active cloud credentials." },
    { step: "Talent Pool", desc: "Entry into our curated, vetted global network." }
  ];

  const regionalHubs = [
    { location: "United Kingdom", desc: "London & Manchester hubs supplying premium onshore architecture consulting and enterprise leadership.", coordinates: "51.5072° N" },
    { location: "Europe", desc: "Nearshore engineering centers providing highly skilled, timezone-aligned development pods.", coordinates: "48.8566° N" },
    { location: "United States", desc: "Strategic account management and specialized security/compliance engineering teams.", coordinates: "37.0902° N" },
    { location: "India", desc: "Massive scale delivery centers in Chennai and Bengaluru executing complex, large-scale migrations.", coordinates: "20.5937° N" }
  ];

  const employerBenefits = [
    { title: "Zero Hiring Risk", desc: "We absorb the technical vetting risk. Every candidate you interview has already passed our grueling 5-stage engineering assessment." },
    { title: "Rapid Team Scaling", desc: "Bypass the 3-month traditional recruitment cycle. We can assemble and deploy complete, functional agile pods in under two weeks." },
    { title: "Continuous Upskilling", desc: "Engineers hired through our network retain access to Devopstrio's internal training academies and certification sponsorships." },
    { title: "Flexible Engagement", desc: "Whether you need a fractional Cloud Architect for 3 months or a dedicated pod of 10 developers for 2 years, we structure contracts around your needs." }
  ];

  const successStories = [
    { title: "Fintech Scale-Up", desc: "Sourced and onboarded an entire Platform Engineering team (8 SREs) in 14 days, enabling the client to hit their crucial product launch deadline." },
    { title: "Healthcare Migration", desc: "Deployed a specialized pod of Azure Architects and Security Engineers to execute a HIPAA-compliant cloud migration over 6 months." },
    { title: "AI Product Development", desc: "Connected a Y-Combinator startup with two elite LLM engineers who built their proprietary semantic search engine from scratch." }
  ];

  const metrics = [
    { value: "<14 Days", label: "Average Time-to-Hire" },
    { value: "Top 3%", label: "Acceptance Rate into Network" },
    { value: "98%", label: "Client Retention Rate" }
  ];

  const faqs = [
    { q: "How is this different from a standard recruitment agency?", a: "We are an engineering company first. Your candidates are not screened by recruiters; they are live-vetted by our own Senior Cloud Architects and Principal Developers via rigorous system design interviews." },
    { q: "What is your acceptance rate?", a: "Our screening process is notoriously difficult. Less than 3% of applicants make it into our curated Talent Network." },
    { q: "Can we hire engineers on a contract-to-hire basis?", a: "Yes. Many clients start with a 6-month contract engagement and then transition the engineer to their internal payroll permanently." },
    { q: "How do you handle timezone differences for offshore hubs?", a: "Our India and Europe delivery centers operate on flexible overlapping hours, ensuring daily syncs and real-time collaboration with your onshore teams." },
    { q: "What happens if an engineer isn't a good fit?", a: "We offer a zero-friction replacement guarantee. If the engagement isn't working out in the first 30 days, we replace the engineer from our bench immediately at no additional cost." },
    { q: "Do the engineers work exclusively for us?", a: "Yes. If you hire a dedicated engineer or pod, they are 100% focused on your roadmap and integrated directly into your Slack/Teams and Jira instances." },
    { q: "Who owns the intellectual property?", a: "You do. All IP generated by our engineers during the engagement is fully assigned to your organization." },
    { q: "How do you handle security and data access?", a: "Our engineers operate strictly within your corporate VPNs and IAM roles. We enforce strict endpoint management and zero-trust policies on all hardware." },
    { q: "Do you provide whole teams or just individuals?", a: "Both. We can augment your existing team with a single specific role (e.g., a Terraform expert), or we can deploy an entire 'Delivery Pod' complete with a Scrum Master and Tech Lead." },
    { q: "How do we request talent?", a: "Click 'Hire Engineering Talent' below to schedule a roadmap consultation with our Resource Managers." }
  ];

  return (
    <main className="relative min-h-screen bg-[#030303] text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden border-b border-zinc-900/60 flex items-center justify-center">
        {/* Advanced ambient lighting for the flagship page */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.08),transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-10">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Globe className="w-3.5 h-3.5" />
              GLOBAL TALENT
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-none">
              Global Technology Talent Network
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-6">
              Connecting organizations with highly skilled engineering professionals.
            </p>
            <p className="text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed font-bold">
              Stop settling for generic IT staffing. Scale your engineering capacity instantly with our private network of the top 3% of globally vetted Cloud, DevOps, and AI Architects.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. TALENT CATEGORIES (CAPABILITIES) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">THE TALENT</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Engineering Disciplines</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {talentCategories.map((category, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                  {category.icon}
                </div>
                <h4 className="text-sm font-bold text-white mb-3">{category.title}</h4>
                <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TALENT SCREENING FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">THE VETTING</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Talent Screening Framework</h2>
            <p className="text-zinc-400 text-sm mt-4 max-w-2xl mx-auto font-medium">How we identify the top 3% of global engineering talent.</p>
          </Reveal>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {screeningFramework.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[150px] text-center p-5 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/40 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-rose-500 font-mono font-bold text-xs">{idx + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{stage.step}</h4>
                  <p className="text-[10px] text-zinc-400 font-medium leading-relaxed">{stage.desc}</p>
                </div>
                {idx < screeningFramework.length - 1 && (
                  <div className="hidden lg:flex items-center">
                    <ArrowUpRight className="w-5 h-5 text-zinc-700" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REGIONAL TALENT HUBS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">GLOBAL REACH</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Regional Talent Hubs</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                We blend onshore strategic consulting with nearshore and offshore execution to provide the optimal balance of timezone alignment, cultural fluency, and cost efficiency.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {regionalHubs.map((hub, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-rose-500" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600">{hub.coordinates}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{hub.location}</h4>
                  <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">{hub.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EMPLOYER BENEFITS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">THE ADVANTAGE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Employer Benefits</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {employerBenefits.map((benefit, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">{benefit.title}</h4>
                  <p className="text-sm text-zinc-400 font-bold leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">CASE STUDIES</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Hiring Success Stories</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-3">{story.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{story.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. METRICS SECTION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">EFFICIENCY</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Hiring Metrics</h2>
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.05),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Scale Your Engineering</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Stop waiting months to fill critical technical roles. Access our global network of pre-vetted engineers and deploy them to your projects this week.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(225,29,72,0.3)]"
          >
            Hire Engineering Talent
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
