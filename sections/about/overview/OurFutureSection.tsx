"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function OurFutureSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const futureFocus = [
    {
      title: "Autonomous DevOps & GitOps",
      desc: <>Architecting self-healing Kubernetes clusters and AI-driven site reliability engineering agents under our <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">DevOps automation</Link> division.</>,
      tag: "DevOps",
      image: "/assets/About-page/overview/future/devops.png",
      href: "/services/devops-automation"
    },
    {
      title: "Sustainable Multi-Cloud",
      desc: <>Optimizing code execution and server workloads to reduce costs and carbon footprints across multi-cloud platforms in <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud services</Link>.</>,
      tag: "Cloud Ops",
      image: "/assets/About-page/overview/future/cloud.png",
      href: "/services/cloud-services"
    },
    {
      title: "Cognitive AI & Autonomous Agents",
      desc: <>Deploying multi-model consensus swarms, LLMs, and agentic workflows under our <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline font-bold">AI & data innovation</Link> wing.</>,
      tag: "AI Innovation",
      image: "/assets/About-page/overview/future/AI & Data Innovation.png",
      href: "/services/ai-data-innovation"
    },
    {
      title: "Next-Gen Software Engineering",
      desc: <>Unifying cloud-native microservices, modern distributed backends, and full-stack systems under <Link href="/services/software-development" className="text-rose-500 hover:underline font-bold">software development</Link>.</>,
      tag: "Software",
      image: "/assets/About-page/overview/future/software development.png",
      href: "/services/software-development"
    },
    {
      title: "Quantum & Zero-Trust Security",
      desc: <>Preparing hybrid-cloud computing topologies for zero-trust security and continuous defense with our <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">cybersecurity</Link> team.</>,
      tag: "Security",
      image: "/assets/About-page/overview/future/Cyber security.png",
      href: "/services/cybersecurity"
    },
    {
      title: "Unified Lakehouse & Analytics",
      desc: <>Deploying secure, real-time intelligence pipelines, streaming telemetry, and lakehouse storage under <Link href="/services/data-engineering" className="text-rose-500 hover:underline font-bold">data engineering</Link>.</>,
      tag: "Data Engineering",
      image: "/assets/About-page/overview/future/Data engineering.png",
      href: "/services/data-engineering"
    },
    {
      title: "Digital Transformation Mesh",
      desc: <>Orchestrating end-to-end digital transformation, industrial automation, and enterprise legacy modernization in <Link href="/services/digital-transformation" className="text-rose-500 hover:underline font-bold">digital transformation</Link>.</>,
      tag: "Transformation",
      image: "/assets/About-page/overview/future/Digital transformation.png",
      href: "/services/digital-transformation"
    },
    {
      title: "Strategic Technology Advisory",
      desc: <>Providing high-impact architecture strategy, technology roadmap design, and enterprise cloud advisory in <Link href="/services/it-consulting" className="text-rose-500 hover:underline font-bold">IT consulting</Link>.</>,
      tag: "Consulting",
      image: "/assets/About-page/overview/future/IT Consulting.png",
      href: "/services/it-consulting"
    },
    {
      title: "24/7 Intelligent SRE Operations",
      desc: <>Intelligent round-the-clock infrastructure monitoring, automated incident triage, and SLA assurances in <Link href="/services/managed-services" className="text-rose-500 hover:underline font-bold">managed services</Link>.</>,
      tag: "Managed Ops",
      image: "/assets/About-page/overview/future/managed services.png",
      href: "/services/managed-services"
    },
    {
      title: "Automated & Performance QA",
      desc: <>Continuous end-to-end QA pipelines, chaos testing, security scanning, and reliability verification under our <Link href="/services/qa-testing" className="text-rose-500 hover:underline font-bold">QA & testing</Link> practices.</>,
      tag: "QA Testing",
      image: "/assets/About-page/overview/future/q a testing.png",
      href: "/services/qa-testing"
    }
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = window.innerWidth < 768 ? 310 + 24 : 390 + 28;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 768 ? 310 + 24 : 390 + 28;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#030303] text-white relative overflow-hidden">
      {/* Dynamic inline styles for responsive card sizing & scrollbar hiding */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .future-track {
          --card-w: 310px;
          --card-gap: 24px;
        }
        @media (min-width: 768px) {
          .future-track {
            --card-w: 390px;
            --card-gap: 28px;
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Grid lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] opacity-[0.06]" />

      {/* Concentric circles (Radar Waves) */}
      <div className="absolute right-[-15%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-40 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-zinc-800/25 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-zinc-800/15 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-zinc-900/40 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-zinc-900/20 rounded-full" />
      </div>

      {/* Glowing red accent orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 relative">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              Building What's Next.<br />
              <span className="bg-rose-500 text-white font-semibold px-4 py-1 mr-2 rounded-xl inline-block mt-2">
                Our Future
              </span>{" "}
              Vision.
            </h2>
          </Reveal>
        </div>

        {/* Carousel Viewport */}
        <div className="w-full overflow-hidden relative pb-4">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="future-track no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 cursor-grab active:cursor-grabbing"
            style={{ gap: "var(--card-gap)" }}
          >
            {futureFocus.map((focus, idx) => (
              <Reveal key={idx} delay={idx * 0.04} className="shrink-0 snap-start snap-always">
                <div className="w-[var(--card-w)] flex-shrink-0 group flex flex-col bg-[#0A0A0A] rounded-[24px] p-3 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] h-[310px]">
                  
                  {/* Cover Image */}
                  <div className="relative w-full aspect-[2/1] overflow-hidden rounded-[16px] bg-zinc-900 border border-zinc-800/50">
                    <img
                      src={focus.image}
                      alt={typeof focus.title === 'string' ? focus.title : 'Future Focus'}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-col flex-1 px-4 pt-4 pb-3 justify-between">
                    <div>
                      <span className="text-rose-400 text-xs font-semibold uppercase tracking-widest block mb-1">
                        {focus.tag}
                      </span>
                      <h3 className="text-white text-base md:text-lg font-semibold leading-snug">
                        {focus.title}
                      </h3>
                    </div>

                    {/* CTA - Glassy Premium Link Button matching CoreServices.tsx */}
                    <Link
                      href={focus.href}
                      className="mt-4 pt-3.5 border-t border-zinc-800/80 hover:border-rose-500/30 inline-flex items-center justify-between w-full text-white hover:text-rose-400 text-sm font-semibold tracking-wide transition-all duration-300 group/btn"
                    >
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                        Explore Focus
                      </span>
                      <span className="w-8.5 h-8.5 rounded-full bg-rose-500/10 border border-rose-500/30 group-hover/btn:bg-rose-600 group-hover/btn:border-rose-600 flex items-center justify-center text-rose-500 group-hover/btn:text-white transition-all duration-300 shadow-[0_0_15px_rgba(225,29,72,0.2)] group-hover/btn:shadow-[0_0_20px_rgba(225,29,72,0.6)]">
                        <ArrowUpRight size={15} />
                      </span>
                    </Link>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Navigation Controls matching CoreServices.tsx */}
        <div className="flex items-center gap-3 mt-8">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full border border-zinc-700 hover:border-rose-500 hover:bg-rose-500/10 text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
            aria-label="Previous future focus"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full border border-zinc-700 hover:border-rose-500 hover:bg-rose-500/10 text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
            aria-label="Next future focus"
          >
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}

