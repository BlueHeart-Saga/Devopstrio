"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2, Globe2, Users2, TrendingUp, Zap, ShieldCheck, Server, BrainCircuit, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { WhoWeAreVisual } from "./WhoWeAreVisual";
import { TableToTextVisual } from "./TableToTextVisual";

const whoWeAreQuotes = [
  "a passionate team of engineers and innovators dedicated to helping businesses grow, scale, and thrive through reliable IT, Cloud, and AI services built with care.",
  "your trusted technology partner, bringing together deep domain expertise, creative problem solving, and genuine care for your success.",
  "dreamers and builders who transform complex technology challenges into seamless, joyful enterprise growth.",
  "a global family of digital architects committed to delivering excellence, transparency, and innovation in every project we touch.",
  "pioneers in modern IT services, empowering leaders to automate workloads, secure infrastructures, and lead with confidence.",
  "customer-obsessed engineers who listen deeply, design thoughtfully, and build resilient platforms that elevate your business.",
  "driven by integrity, human creativity, and cutting-edge AI—helping enterprises stay ahead in a rapidly evolving digital world.",
  "problem solvers at heart, making high-scale cloud, DevOps, and software engineering accessible, reliable, and stress-free.",
  "united by a mission to craft meaningful digital experiences that inspire confidence, foster trust, and fuel long-term value.",
  "Devopstrio—where technical mastery meets human empathy to engineer a brighter, smarter tomorrow for enterprises worldwide."
];

const engineeringSolutionsQuotes = [
  "with simplicity and heart—creating smart technology that solves real challenges, empowers your team, and shapes a brighter future.",
  "with enterprise precision, building cloud-native architectures that keep your operations fast, resilient, and bulletproof.",
  "to turn data into actionable intelligence, enabling your organization to make smarter decisions in real-time.",
  "with zero-trust security built into every layer, protecting your business assets without slowing down innovation.",
  "through automated CI/CD pipelines and DevOps best practices, accelerating your product delivery from months to minutes.",
  "to be seamlessly scalable, ensuring your infrastructure effortlessly adapts to explosive user growth.",
  "around human-centered design, creating intuitive platforms that teams love to use every single day.",
  "with sustainable, energy-efficient cloud practices that reduce operational costs while caring for our planet.",
  "using responsible AI guardrails, giving your organization a powerful competitive edge with ethical peace of mind.",
  "for 99.99% uptime and zero friction—so you can focus on growing your business while we handle the tech."
];

const stats = [
  { value: "7+", label: "Years of Excellence" },
  { value: "4+", label: "Global Regions" },
  { value: "525+", label: "Technical Experts" },
  { value: "2,500+", label: "Projects Delivered" },
];

const whatWeDo = [
  {
    prefix: "We craft ",
    highlight: "AI-driven digital transformation",
    suffix: " with human empathy and enterprise scale.",
    tableMessage: "We craft AI-driven digital transformation with heart and scale.",
  },
  {
    prefix: "We engineer resilient ",
    highlight: "cloud-native architectures",
    suffix: " that keep your business fast, secure, and always online.",
    tableMessage: "We engineer resilient cloud-native architectures that never fail.",
  },
  {
    prefix: "We modernize ",
    highlight: "mission-critical enterprise systems",
    suffix: " to unlock agility and accelerate long-term growth.",
    tableMessage: "We modernize core systems to unlock agility and growth.",
  },
  {
    prefix: "We embed ",
    highlight: "zero-trust security by design",
    suffix: " to protect your data with absolute peace of mind.",
    tableMessage: "We embed zero-trust security to protect what matters most.",
  },
  {
    prefix: "We automate ",
    highlight: "high-velocity CI/CD delivery pipelines",
    suffix: " so your engineering teams ship software faster.",
    tableMessage: "We automate CI/CD pipelines to accelerate software delivery.",
  },
  {
    prefix: "We architect ",
    highlight: "intelligent data platforms",
    suffix: " that turn complex information into real-time wisdom.",
    tableMessage: "We architect data platforms that turn info into wisdom.",
  },
  {
    prefix: "We partner with ",
    highlight: "hyperscale cloud leaders",
    suffix: " to deliver future-ready digital ecosystems.",
    tableMessage: "We partner with cloud leaders to build future-ready platforms.",
  },
  {
    prefix: "We provide ",
    highlight: "24/7 global managed operations",
    suffix: " ensuring seamless performance and zero downtime.",
    tableMessage: "We provide 24/7 global operations with zero downtime.",
  },
  {
    prefix: "We build ",
    highlight: "custom software applications",
    suffix: " designed with simplicity, precision, and user joy.",
    tableMessage: "We build custom software with precision and user joy.",
  },
  {
    prefix: "We champion ",
    highlight: "sustainable cloud optimization",
    suffix: " reducing carbon footprints while maximizing ROI.",
    tableMessage: "We champion sustainable cloud tech that reduces carbon footprint.",
  },
];

const howWeWork = [
  { icon: <Globe2 className="w-5 h-5 text-rose-500" />, title: "Global", desc: "Technical experts across 4+ regions, speaking your industry language with deep local context." },
  { icon: <ShieldCheck className="w-5 h-5 text-rose-500" />, title: "Trusted", desc: "Rooted in trust, responsibility, and full transparency at every phase of every project." },
  { icon: <BrainCircuit className="w-5 h-5 text-rose-500" />, title: "AI-Centric", desc: "AI is at the core of every solution we design, architect, and deliver at scale." },
];

const milestones = [
  "Deployed a real-time fraud detection pipeline processing 100K financial events per second with sub-10ms evaluation accuracy.",
  "Built a HIPAA-compliant AI telehealth platform with WebRTC video integration adopted across enterprise healthcare networks.",
  "Migrated 250+ microservices to cloud-native Kubernetes with zero downtime using GitOps and ArgoCD automation pipelines.",
  "Engineered a multi-region Active-Active database architecture maintaining 100% availability during a major cloud provider outage.",
  "Delivered an AI recommendation engine upgrade that reduced response latency from 400ms to 25ms for a global e-commerce platform.",
];

const services = [
  { icon: <BrainCircuit className="w-4 h-4" />, label: "AI Modernization" },
  { icon: <Server className="w-4 h-4" />, label: "Cloud Services" },
  { icon: <TrendingUp className="w-4 h-4" />, label: "AI Consulting" },
  { icon: <Zap className="w-4 h-4" />, label: "DevOps & SRE" },
  { icon: <ShieldCheck className="w-4 h-4" />, label: "Security by Design" },
  { icon: <Users2 className="w-4 h-4" />, label: "Software Engineering" },
];

export function CompanyOverviewSection() {
  const [whoKey, setWhoKey] = useState<"W" | "E">("W");
  const [quoteIndexW, setQuoteIndexW] = useState(0);
  const [quoteIndexE, setQuoteIndexE] = useState(0);
  const [selectedTableText, setSelectedTableText] = useState("We are innovative solutions.");

  // Auto-switch key (W <-> E) and rotate quotes every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setWhoKey((prevKey) => {
        if (prevKey === "W") {
          return "E";
        } else {
          setQuoteIndexW((wIndex) => (wIndex + 1) % whoWeAreQuotes.length);
          setQuoteIndexE((eIndex) => (eIndex + 1) % engineeringSolutionsQuotes.length);
          return "W";
        }
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black text-white relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(225,29,72,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(225,29,72,0.04),transparent_70%)] pointer-events-none" />

      {/* ── 1: Hero Story Intro ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-20 relative z-10">

        {/* Large standalone main heading — matching GFT reference */}
        <Reveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-10">
            The Story of{" "}
            <span className="relative inline-block">
              <span className="text-rose-500">Devopstrio</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-2.5 text-rose-500/45 pointer-events-none"
                viewBox="0 0 300 10"
                fill="none"
              >
                <path
                  d="M 2 6 Q 75 2, 150 6 T 298 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </Reveal>

        {/* Body paragraphs — indented like GFT reference, max-width constrained */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <Reveal delay={0.08} className="lg:col-start-5 lg:col-span-8">
            <div className="space-y-5">
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                Devopstrio was founded with a single purpose: to empower businesses by turning complex technology into simple, scalable, and high-impact digital solutions. Today, we partner with enterprise leaders worldwide to accelerate innovation across AI, Cloud, DevOps, and modern software engineering.
              </p>
            </div>
          </Reveal>
        </div>

        {/* CompanyIntro Mockup Card — team photo with editorial heading + philosophy card */}
        <Reveal delay={0.3}>
          <div className="relative w-full rounded-[2rem] border border-zinc-800 bg-[#09090b] overflow-hidden min-h-[480px] flex items-center mb-8">

            {/* Background team photo */}
            <div className="absolute inset-0 w-full h-full">
              <img src="/assets/About-page/team/image.png"
                alt="Devopstrio Engineering Team"
                className="w-full h-full object-cover"
              loading="lazy" />
            </div>

            {/* Overlay grid: Left editorial + Right floating card */}
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 lg:p-16">

              {/* Left: Editorial heading */}
              <div className="lg:col-span-6 flex flex-col items-start gap-4 bg-black/60 p-6 border border-zinc-800/50">
                {/* <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500 border border-rose-500/30 rounded-none bg-black/40">
                  WHO WE ARE
                </span> */}
                 {/* <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500 block">
                    OUR PHILOSOPHY
                  </span> */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white max-w-[420px]">
                  Powering Digital Evolution Through Precision Engineering
                </h3>
              </div>

              {/* Right: Floating philosophy card */}
              <div className="lg:col-span-6 flex justify-end">
                <div className="w-full max-w-[460px] bg-black border-2 border-white/90 p-8 md:p-10 flex flex-col gap-6 text-left shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                  {/* <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500 block">
                    OUR PHILOSOPHY
                  </span> */}
                  <blockquote className="text-sm md:text-base italic font-semibold text-white border-l-2 border-rose-500 pl-4 leading-relaxed">
                    &ldquo;We don&apos;t just build systems; we architect the digital engines that power tomorrow&apos;s enterprises.&rdquo;
                  </blockquote>
                  <p className="text-xs md:text-sm leading-relaxed text-zinc-300 font-medium">
                    Devopstrio is an elite engineering partner. We combine advanced cloud design, automated{" "}
                    <Link href="/ecosystem/global-delivery" className="text-rose-500 hover:underline">delivery pipelines</Link>,
                    and secure scale to accelerate business transformation at global scale.
                  </p>
                  <div className="pt-3 pl-1">
                    <a
                      href="/services"
                      className="btn-tactile group"
                    >
                      <div>
                        <span>
                          Explore Our Services
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* CTA link below card */}
        <Reveal delay={0.4}>
          <div className="flex justify-center">
            <a
              href="/contact#contact-form"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-rose-500 font-bold text-sm tracking-wider uppercase transition-colors group"
            >
              Connect with our architects
              <span className="h-8 w-8 rounded-full border border-zinc-800 group-hover:border-rose-500/50 flex items-center justify-center text-zinc-400 group-hover:text-rose-500 transition-colors">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </Reveal>

      </div>

      {/* ── 2: Who We Are + What We Do ── */}
      {/* <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 py-12 lg:py-16 space-y-12 lg:space-y-16">

          <Reveal>
            <div className="space-y-8 sm:space-y-10 max-w-5xl mx-auto">
              <div className="w-full flex justify-center">
                <WhoWeAreVisual
                  className="w-full"
                  selectedKey={whoKey}
                  onKeyClick={(key) => setWhoKey(key)}
                />
              </div>

              <div className="max-w-4xl mx-auto text-center px-4 min-h-[140px] sm:min-h-[110px] flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  {whoKey === "W" ? (
                    <motion.div
                      key={`w-quote-${quoteIndexW}`}
                      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="w-full"
                    >
                      <p className="text-zinc-200 text-lg sm:text-xl lg:text-2xl leading-relaxed font-normal">
                        &ldquo;<span className="text-white font-semibold">We are</span> {whoWeAreQuotes[quoteIndexW]}&rdquo;
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`e-quote-${quoteIndexE}`}
                      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="w-full"
                    >
                      <p className="text-zinc-200 text-lg sm:text-xl lg:text-2xl leading-relaxed font-normal">
                        &ldquo;<span className="text-white font-semibold">Engineering our solutions</span> {engineeringSolutionsQuotes[quoteIndexE]}&rdquo;
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-1.5 mt-6">
                  {Array.from({ length: 10 }).map((_, idx) => {
                    const isActive = whoKey === "W" ? idx === quoteIndexW : idx === quoteIndexE;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (whoKey === "W") setQuoteIndexW(idx);
                          else setQuoteIndexE(idx);
                        }}
                        aria-label={`Jump to quote ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          isActive ? "w-6 bg-rose-500" : "w-1.5 bg-zinc-800 hover:bg-zinc-600"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="border-t border-zinc-800/80 w-full" />

          <Reveal delay={0.08}>
            <div className="space-y-4 sm:space-y-6">
              
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  What We Do <span className="text-rose-500">With Heart.</span>
                </h3>
              </div>

              <TableToTextVisual messages={whatWeDo.map(item => item.tableMessage)} />

            </div>
          </Reveal>

        </div>
      </div> */}

      {/* ── 3: Global Stats Bar ── */}
      <div className="border-t border-b border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 relative z-10">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-rose-500 tracking-tight leading-none mb-2.5">
                  {s.value}
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-zinc-300 tracking-wide">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>



    </section>
  );
}

