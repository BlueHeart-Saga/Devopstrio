"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  GraduationCap,
  Microscope,
  Briefcase,
  Megaphone,
  Network,
  Users,
  Trophy
} from "lucide-react";
import Link from "next/link";

export default function UniversityProgramsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const programsGrid = [
    { icon: <Briefcase className="w-6 h-6 text-rose-500" />, title: "Internship Programs", desc: "Structured 12-week summer placements where students write production code for active enterprise cloud projects, mentored by senior architects." },
    { icon: <Megaphone className="w-6 h-6 text-rose-500" />, title: "Campus Ambassador", desc: "Selecting top-tier students to represent Devopstrio on campus, hosting mini-meetups and acting as a bridge for early recruitment." },
    { icon: <Microscope className="w-6 h-6 text-rose-500" />, title: "Research Collaborations", desc: "Funding PhD-level research into distributed systems, AI orchestration, and cloud cryptography through academic grants." },
    { icon: <Users className="w-6 h-6 text-rose-500" />, title: "Guest Lectures", desc: "Sending our Principal Engineers to partner universities to teach semester modules on modern DevOps and SRE practices." }
  ];

  const academicPartnerships = [
    { title: "Curriculum Advisory", desc: "Partnering with computer science faculties to update syllabuses, ensuring graduates possess modern, highly employable cloud skills." },
    { title: "Lab Sponsorships", desc: "Funding and provisioning cloud sandboxes (AWS/Azure) so students can learn on enterprise-grade infrastructure without personal cost." },
    { title: "Hackathons & Competitions", desc: "Hosting annual campus-wide coding challenges with cash prizes, fast-tracking top performers directly to final-round interviews." }
  ];

  const careerPathways = [
    { step: "Campus Ambassador", desc: "Year 2 Representation." },
    { step: "Summer Intern", desc: "Year 3 Hands-on Project." },
    { step: "Graduate Engineer", desc: "Full-time Post-Graduation." },
    { step: "Cloud Consultant", desc: "2+ Years Experience." }
  ];

  const successStories = [
    { title: "The Next-Gen Cloud Lab", desc: "Sponsored the 'Devopstrio Cloud Lab' at a tier-1 engineering university, providing 1,500 students with free Azure environments for their thesis projects." },
    { title: "Record Graduate Intake", desc: "Our direct pipeline from summer internships resulted in 45 graduate engineers joining our AI and DevOps practices in 2024, achieving a 95% retention rate." },
    { title: "Published AI Research", desc: "Funded a joint academic research paper on 'Semantic Caching in Multi-Agent LLMs' that was presented at a major international AI conference." }
  ];

  const metrics = [
    { value: "25+", label: "University Partners" },
    { value: "500+", label: "Interns Mentored" },
    { value: "$2M+", label: "Academic Funding & Grants" }
  ];

  const faqs = [
    { q: "How can my university become a partner?", a: "University faculties can reach out via our contact page. We typically look for institutions with strong computer science or software engineering departments willing to co-develop modern curriculums." },
    { q: "What does a Devopstrio internship involve?", a: "Interns are integrated into actual project teams. You won't be making coffee; you will be writing Terraform modules, building CI/CD pipelines, or fine-tuning AI models under the guidance of a senior engineer." },
    { q: "Is the internship paid?", a: "Yes, all our internships are highly competitive, fully paid positions that reflect industry standard entry-level salaries." },
    { q: "How do I apply for the Campus Ambassador program?", a: "Applications open every August for the upcoming academic year. We look for passionate students who are already active in university tech societies or coding clubs." },
    { q: "Do you hire internationally from universities?", a: "Yes, our university programs operate globally, primarily focusing on our major talent hubs in the UK, US, Europe, and India." },
    { q: "What kind of research do you fund?", a: "We primarily fund applied research in cloud-native distributed systems, Site Reliability Engineering, advanced cryptography, and Generative AI orchestration." },
    { q: "Do you offer graduate roles without an internship?", a: "Yes, while interns are fast-tracked, we open our graduate intake program every spring to all university students graduating that year." },
    { q: "What is the interview process for graduates?", a: "It consists of an initial cultural fit screen, an asynchronous coding challenge, and a final technical system design interview with one of our engineering leads." },
    { q: "Do you sponsor visas for graduate hires?", a: "Visa sponsorship is assessed on a case-by-case basis depending on the regional regulations of the specific office you are applying to." },
    { q: "How do I apply?", a: "Click 'Explore Graduate Roles' below to view our active campus postings and internship openings." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full py-32 bg-black overflow-hidden border-b border-zinc-900/60 flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.035),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-10">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <GraduationCap className="w-3.5 h-3.5" />
              ACADEMIA
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              University Innovation Program
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-6">
              Bridging academia and enterprise technology.
            </p>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold">
              We partner with the world's leading academic institutions to modernize curriculums, fund groundbreaking research, and provide students with direct pathways into elite enterprise engineering careers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. ACADEMIC PARTNERSHIPS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">COLLABORATION</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Academic Partnerships</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicPartnerships.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Network className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS FRAMEWORK (CAREER PATHWAYS) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">TRAJECTORY</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Career Pathways</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {careerPathways.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[160px] text-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/40 transition-all duration-300 group">
                  <h4 className="text-sm font-bold text-rose-500 mb-2">{stage.step}</h4>
                  <p className="text-[10px] text-zinc-400 font-medium">{stage.desc}</p>
                </div>
                {idx < careerPathways.length - 1 && (
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
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">INITIATIVES</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Campus Programs</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programsGrid.map((prog, idx) => (
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
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">OUTCOMES</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Success Stories</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Trophy className="w-4 h-4 text-rose-500" />
                </div>
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
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">IMPACT</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Program Reach</h2>
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
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Start Your Career</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Whether you are seeking a summer internship or a graduate engineering role, take the first step towards building enterprise-grade software.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Explore Graduate Roles
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
