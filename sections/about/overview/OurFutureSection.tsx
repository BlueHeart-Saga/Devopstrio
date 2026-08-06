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
        
        {/* Apple-style Centered Dual-Tone Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <Reveal>
           
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              Building What's Next.<br />
              <span className="bg-rose-500 text-white font-semibold px-4 py-1 mr-2 rounded-xl inline-block">
                Our Future
              </span>{" "}
              Vision.
            </h2>
          </Reveal>
        </div>

        {/* Top Controls for Carousel */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-zinc-800 hover:border-rose-500 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:shadow-[0_0_15px_rgba(225,29,72,0.2)] transition-all duration-300"
              aria-label="Scroll Left"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-zinc-800 hover:border-rose-500 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:shadow-[0_0_15px_rgba(225,29,72,0.2)] transition-all duration-300"
              aria-label="Scroll Right"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Apple-Style Cards Horizontal Carousel Slider */}
        <div className="w-full overflow-hidden relative pb-8">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="future-track no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 cursor-grab active:cursor-grabbing"
            style={{ gap: "var(--card-gap)" }}
          >
            {futureFocus.map((focus, idx) => (
              <Reveal key={idx} delay={idx * 0.04} className="shrink-0 snap-start snap-always">
                <div
                  className="group relative rounded-[2rem] p-5 sm:p-6 bg-zinc-950/70 border border-zinc-900 hover:border-rose-500/50 transition-all duration-500 flex flex-col justify-between w-[var(--card-w)] h-[380px] md:h-[420px] select-none shadow-2xl overflow-hidden hover:shadow-[0_25px_60px_rgba(0,0,0,0.8)] hover:-translate-y-1.5"
                >
                  {/* Top Thumbnail Box */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-zinc-800/80 shrink-0">
                    <img
                      src={focus.image}
                      alt={typeof focus.title === 'string' ? focus.title : 'Future Focus'}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Text Content Area */}
                  <div className="flex-1 flex flex-col justify-between text-left">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-rose-500 block mb-1">
                        {focus.tag}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mb-2 group-hover:text-rose-400 transition-colors">
                        {focus.title}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-medium line-clamp-3">
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
    </section>
  );
}
