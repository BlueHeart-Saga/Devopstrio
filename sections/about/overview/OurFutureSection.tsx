"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function OurFutureSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const futureFocus = [
    {
      title: "Autonomous Orchestration",
      desc: <>Architecting self-healing Kubernetes clusters and AI-driven site reliability engineering agents that predict and resolve incidents. Learn more under our <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">DevOps automation</Link> division.</>,
      tag: "SRE Agents",
      image: "/assets/common/09ff7846bc8c9998745688779c09f88d 1.png"
    },
    {
      title: "Sustainable Green Cloud",
      desc: <>Optimizing code execution and server workloads to reduce carbon emissions by up to 40% across multi-cloud environments as part of <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud services</Link>.</>,
      tag: "Green Ops",
      image: "/assets/common/1b065043b6959827c05a0073c93a4a53 1.png"
    },
    {
      title: "Next-Gen AI Swarms",
      desc: <>Deploying multi-model consensus swarms to orchestrate complex corporate workflows under <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline font-bold">AI & data innovation</Link>.</>,
      tag: "Swarm Gen",
      image: "/assets/common/260b761ad40c3ad2acba2c6666894539 1.png"
    },
    {
      title: "Cognitive DevOps Agents",
      desc: <>Unifying generative code synthesis and automated testing pipelines under multi-agent reasoning loops. Explore our <Link href="/services/software-development" className="text-rose-500 hover:underline font-bold">software development</Link> options.</>,
      tag: "DevOps AI",
      image: "/assets/common/2fe7f9184c515b0c515ce38bc8a25efa 1.png"
    },
    {
      title: "Quantum Cloud Security",
      desc: "Preparing hybrid-cloud computing topologies for post-quantum cryptographic standards and early quantum processing unit co-processors.",
      tag: "Quantum Ops",
      image: "/assets/common/315e4fdc6263bfd240f36297e376576e 1.png"
    },
    {
      title: "Edge AI Swarms",
      desc: "Deploying secure, low-latency intelligence pipelines across distributed edge clusters and custom IoT gateway nodes.",
      tag: "Edge Swarms",
      image: "/assets/common/37b9b888cc479ea7b74d2d9a05c37597 1.png"
    },
    {
      title: "Spatial Computing Mesh",
      desc: "Orchestrating real-time spatial computing telemetry and digital twin models across industrial networks with sub-millisecond edge synchronization.",
      tag: "Spatial IoT",
      image: "/assets/common/45ea830d170d382ade235db479060da7 1.png"
    },
    {
      title: "Generative UI Engines",
      desc: "Dynamic runtime interface synthesis powered by real-time user intent mapping and multi-agent design feedback loops.",
      tag: "UI Gen",
      image: "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca 1.png"
    },
    {
      title: "Decentralized Trust Networks",
      desc: "Integrating smart-contract compliance gates and zero-knowledge proofs directly into automated multi-party supply chain delivery channels.",
      tag: "Trust Ops",
      image: "/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b 1.png"
    },
    {
      title: "Neuromorphic Compute Nodes",
      desc: "Prototyping local neuromorphic hardware acceleration layers for next-generation edge device classification and inference tasks.",
      tag: "Brain Ops",
      image: "/assets/common/82090d7be4ef5694954ce77f9cc2e627 1.png"
    }
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = window.innerWidth < 768 ? 290 + 20 : 360 + 28;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 768 ? 290 + 20 : 360 + 28;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 bg-[#030303] text-white relative overflow-hidden">
      {/* Dynamic inline styles for responsive card sizing & scrollbar hiding */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .future-track {
          --card-w: 290px;
          --card-gap: 20px;
        }
        @media (min-width: 768px) {
          .future-track {
            --card-w: 360px;
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

      {/* Concentric circles (Radar Waves) matching the image */}
      <div className="absolute right-[-15%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-40 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-zinc-800/25 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-zinc-800/15 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-zinc-900/40 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-zinc-900/20 rounded-full" />
      </div>

      {/* Glowing red accent orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">

          {/* Left Core Content: Title, Desc, and Navigation Controls */}
          <div className="w-full lg:w-[350px] text-left shrink-0">
            <Reveal>
              <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] uppercase text-rose-500 mb-3 block font-mono">
                OUR FUTURE
              </span>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white mb-6">
                Building What's Next
              </h2>
              {/* <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium mb-6">
                We are investing in AI, cloud, and modern engineering to create intelligent solutions that help businesses innovate, adapt, and grow with confidence.
              </p> */}

              {/* Play Document / Action trigger & Navigation Arrows */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
                <button className="group/play flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors duration-300 shrink-0">
                  <div className="w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-950 group-hover/play:border-rose-500/50 group-hover/play:bg-rose-950/20 transition-all duration-500">
                    <Play size={10} className="text-zinc-400 group-hover/play:text-rose-400 group-hover/play:scale-110 transition-all duration-300 fill-zinc-400 group-hover/play:fill-rose-400" />
                  </div>
                  {/* <span className="font-mono text-[9px] tracking-widest">Vision Presentation</span> */}
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => scroll("left")}
                    className="w-9 h-9 rounded-full border border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 flex items-center justify-center text-zinc-400 hover:text-white hover:shadow-[0_0_15px_rgba(225,29,72,0.1)] hover:-translate-y-0.5 transition-all duration-300"
                    aria-label="Scroll Left"
                  >
                    <ArrowLeft size={14} />
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    className="w-9 h-9 rounded-full border border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 flex items-center justify-center text-zinc-400 hover:text-white hover:shadow-[0_0_15px_rgba(225,29,72,0.1)] hover:-translate-y-0.5 transition-all duration-300"
                    aria-label="Scroll Right"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Smooth Scroll Slider Container */}
          <div className="w-full lg:w-[calc(100%-390px)] overflow-hidden relative py-4">
            <div
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="future-track no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 cursor-grab active:cursor-grabbing"
              style={{ gap: "var(--card-gap)" }}
            >
              {futureFocus.map((focus, idx) => (
                <Reveal key={idx} delay={idx * 0.05} className="shrink-0 snap-start snap-always">
                  <div
                    className="relative rounded-[1.75rem] overflow-hidden border border-zinc-900 bg-[#0A0A0C] w-[var(--card-w)] h-[240px] md:h-[280px] select-none group transition-all duration-500 hover:border-rose-500/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(225,29,72,0.1)]"
                  >
                    {/* Default Bright Background Image */}
                    <img
                      src={focus.image}
                      alt={focus.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out z-0 group-hover:scale-105"
                    />

                    {/* Default Subtle Gradient Overlay (Ensures text contrast) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />

                    {/* Premium Glassic Blur Overlay on Hover (Sweeps from bottom-right) */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[8px] transition-all duration-700 ease-in-out z-20 pointer-events-none [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)]" />

                    {/* Text content details */}
                    <div className="absolute bottom-0 inset-x-0 p-6 z-30 text-left pt-12">
                      {/* <span className="inline-block px-2.5 py-1 rounded text-[9px] font-bold tracking-widest uppercase bg-rose-950/60 text-rose-400 border border-rose-500/20 font-mono mb-2">
                        {focus.tag}
                      </span> */}
                      <h3 className="text-base md:text-lg font-bold text-white mb-1 transition-colors duration-300 group-hover:text-rose-400">
                        {focus.title}
                      </h3>
                      
                      {/* Description Reveal on Hover */}
                      <div className="max-h-0 opacity-0 group-hover:max-h-[220px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
                        <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed pt-1">
                          {focus.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
