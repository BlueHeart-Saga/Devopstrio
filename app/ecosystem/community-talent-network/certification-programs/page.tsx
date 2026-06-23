"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  Award,
  Cloud,
  Container,
  ShieldCheck,
  BrainCircuit,
  BookOpen,
  Users,
  BadgeCheck,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function CertificationProgramsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const certificationTracks = [
    { icon: <Cloud className="w-6 h-6 text-rose-500" />, title: "Cloud Architecture", desc: "AWS Solutions Architect Professional, Azure Solutions Architect Expert, and Google Cloud Professional Cloud Architect." },
    { icon: <Container className="w-6 h-6 text-rose-500" />, title: "Kubernetes & SRE", desc: "Certified Kubernetes Administrator (CKA), Security Specialist (CKS), and Developer (CKAD)." },
    { icon: <ShieldCheck className="w-6 h-6 text-rose-500" />, title: "Security & Compliance", desc: "Certified Information Systems Security Professional (CISSP), Certified Ethical Hacker (CEH), and Azure Security Engineer." },
    { icon: <BrainCircuit className="w-6 h-6 text-rose-500" />, title: "AI & Data", desc: "AWS Certified Machine Learning Specialty and Databricks Certified Data Engineer Professional." }
  ];

  const learningPathways = [
    { step: "Enroll", desc: "Join an official study cohort." },
    { step: "Sandbox", desc: "Complete 40+ hours of lab work." },
    { step: "Mock Exam", desc: "Pass internal readiness assessments." },
    { step: "Certified", desc: "Take exam with 100% sponsorship." }
  ];

  const mentorshipPrograms = [
    { icon: <BookOpen className="w-6 h-6 text-rose-500" />, title: "Study Cohorts", desc: "Intensive 8-week bootcamps where groups of 10-15 engineers study together for complex exams like the CKA, holding each other accountable." },
    { icon: <Users className="w-6 h-6 text-rose-500" />, title: "1-on-1 Mentorship", desc: "Pairing junior engineers with Principal Architects who have already achieved expert-level certifications for personalized guidance." },
    { icon: <BadgeCheck className="w-6 h-6 text-rose-500" />, title: "Partner Certifications", desc: "Exclusive access to beta exams and private instructor-led training provided directly by our partners at Microsoft, AWS, and HashiCorp." }
  ];

  const successStories = [
    { title: "The 100% CKA Pass Rate", desc: "In Q3 2024, our dedicated Kubernetes study cohort achieved a 100% first-attempt pass rate for 25 engineers taking the CKA exam." },
    { title: "Azure Expert Specialization", desc: "Through targeted certification sprints, we added 40 new Azure Solutions Architect Experts to our talent network in under six months." },
    { title: "Security Upskilling", desc: "Transitioned 15 traditional infrastructure engineers into DevSecOps roles by sponsoring their CISSP and CKS exams." }
  ];

  const metrics = [
    { value: "5,000+", label: "Certifications Sponsored" },
    { value: "92%", label: "First-Attempt Pass Rate" },
    { value: "15+", label: "Active Study Cohorts" }
  ];

  const faqs = [
    { q: "Who pays for the certification exams?", a: "For verified members of our Talent Network and full-time Devopstrio employees, we sponsor 100% of the exam fees, including one free retake if necessary." },
    { q: "Do you pay for training materials?", a: "Yes. We provide access to enterprise subscriptions for platforms like A Cloud Guru, KodeKloud, and official vendor practice exams." },
    { q: "What is a Study Cohort?", a: "A study cohort is a group of engineers studying for the exact same exam on the exact same timeline. They meet weekly to review difficult concepts and share sandbox lab solutions." },
    { q: "How much time am I expected to study?", a: "We recommend dedicating 10-15 hours per week during an 8-week cohort. For internal employees, we allocate dedicated study hours during the workday." },
    { q: "Are certifications really that important?", a: "While hands-on experience is paramount, certifications validate baseline knowledge. They are often a hard requirement for our enterprise clients, particularly in highly regulated industries like banking and healthcare." },
    { q: "Can I take any certification I want?", a: "We primarily sponsor certifications that align with our core service offerings (Cloud, DevOps, Data, AI, Security). If a certification falls outside this scope, it requires special approval." },
    { q: "How do the sandbox environments work?", a: "We provision ephemeral AWS, Azure, and GCP environments using Terraform. These accounts are fully funded by Devopstrio and are automatically destroyed after 24 hours to prevent runaway costs." },
    { q: "What happens after I get certified?", a: "Your profile in our Talent Network is upgraded, increasing your visibility to enterprise clients and unlocking higher-tier project placements and compensation bands." },
    { q: "Can non-employees join the cohorts?", a: "Yes, our study cohorts are open to the wider engineering community, though full exam sponsorship is reserved for active network members." },
    { q: "How do I enroll in a cohort?", a: "Click 'Explore Certification Tracks' below to view our upcoming cohort schedules and register your interest." }
  ];

  return (
    <main className="relative min-h-screen bg-[#030303] text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        <div className="absolute inset-0 z-0">
          <img src="/assets/ecosystem/sub-page-hero/ecosystem_Community_talent_network/Certification_Programs.png" alt="Certification Programs background" className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-20">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Award className="w-3.5 h-3.5" />
              UPSKILLING
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Technology Certification
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-6">
              Helping engineers validate expertise and advance careers.
            </p>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold">
              We don't just hire top talent; we continuously develop them. Join our structured study cohorts, access enterprise-grade sandbox labs, and achieve expert-level cloud certifications with 100% exam sponsorship.
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


      {/* 2. CERTIFICATION TRACKS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">THE PATHS</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Certification Tracks</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationTracks.map((track, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                  {track.icon}
                </div>
                <h4 className="text-sm font-bold text-white mb-3">{track.title}</h4>
                <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LEARNING PATHWAYS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">METHODOLOGY</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Learning Pathways</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {learningPathways.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[160px] text-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/40 transition-all duration-300 group">
                  <h4 className="text-sm font-bold text-rose-500 mb-2">{stage.step}</h4>
                  <p className="text-[10px] text-zinc-400 font-medium">{stage.desc}</p>
                </div>
                {idx < learningPathways.length - 1 && (
                  <div className="hidden lg:flex items-center">
                    <ArrowUpRight className="w-5 h-5 text-zinc-700" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MENTORSHIP PROGRAMS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">SUPPORT</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Mentorship & Study Cohorts</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentorshipPrograms.map((prog, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                  {prog.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{prog.title}</h4>
                <p className="text-sm text-zinc-400 font-bold leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUCCESS STORIES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">OUTCOMES</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Certification Success</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-3">{story.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{story.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. METRICS SECTION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">SCALE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Program Impact</h2>
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
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
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
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Validate Your Expertise</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Ready to become a Certified Architect? Join our next study cohort to access sandbox environments, expert mentorship, and fully sponsored exams.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Explore Certification Tracks
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
