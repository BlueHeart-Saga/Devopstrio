import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function WeImagine() {
  const cards = [
    {
      title: "We Design Intelligent Digital Solutions",
      desc: (
        <>
          We architect <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline font-medium">AI-powered systems</Link>, automation frameworks, and data platforms that unlock new revenue streams and drive operational efficiency.
        </>
      ),
      bullets: ["Multi-Cloud Architecture", "AI-First Design", "Secure Data Platforms"],
      image: "/assets/Home-page/we-imagine/gen/we-design-intelligent.png",
      delay: 0.05
    },
    {
      title: "We Build Software That Performs at Scale",
      desc: (
        <>
          We engineer high-performance, <Link href="/services/software-development" className="text-rose-500 hover:underline font-medium">enterprise-grade software</Link> — accelerating release velocity, hardening security posture, and guaranteeing scalability.
        </>
      ),
      bullets: ["Enterprise Scalability", "Secure Architecture", "Full Observability"],
      image: "/assets/Home-page/we-imagine/gen/we-build-software.png",
      delay: 0.1
    },
    {
      title: "We Transform Legacy Into Cloud-Native Power",
      desc: (
        <>
          We convert brittle legacy systems into agile, <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-medium">cloud-native environments</Link> using AI workflows and modern architecture — without operational disruption.
        </>
      ),
      bullets: ["AI-Driven Automation", "Cloud-Native Migration", "Legacy Re-Architecture"],
      image: "/assets/Home-page/we-imagine/gen/we-transform-legacy.png",
      delay: 0.15
    },
    {
      title: "We Keep Your Operations Running Flawlessly",
      desc: (
        <>
          We take full ownership of your <Link href="/services/managed-services" className="text-rose-500 hover:underline font-medium">platform operations</Link> — reducing costs, eliminating downtime, and enabling sustainable growth through 24/7 monitoring.
        </>
      ),
      bullets: ["24/7 Proactive Monitoring", "Predictive Maintenance", "Cost Optimisation"],
      image: "/assets/Home-page/we-imagine/gen/we-manage-operations.png",
      delay: 0.2
    }
  ];

  return (
    <section className="relative w-full pt-4 md:pt-8 bg-[#030303] text-white overflow-hidden">

      {/* Centered Content Wrapper for Header, Banner, and Intro */}
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 mb-16">

        {/* Main Section Header */}
        <div className="mb-12">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-rose-500 mb-4 block">
              OUR INNOVATIONS
            </span>
          </Reveal>
          <Reveal>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              How We Engineer <span className="text-rose-500">Innovation</span>
            </h2>
          </Reveal>
        </div>

        {/* ── 1. Top Innovation Lab Banner ── */}
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden mb-16 h-[260px] md:h-[380px] w-full border border-zinc-800/40">
            {/* Banner image */}
            <Image
              src="/assets/Home-page/innovation/image2.png"
              alt="Devopstrio Innovation Lab"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            {/* Dark glassmorphic card overlay */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-black/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-xl max-w-sm md:max-w-md shadow-2xl z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                Devopstrio Innovation Lab
              </h3>
              <p className="text-zinc-100 text-base md:text-[17px] font-normal leading-relaxed">
                The lab for <Link href="/ecosystem/innovation-labs" className="text-rose-500 hover:underline font-medium">enterprise innovation</Link> and next-generation cloud architecture.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── 2. Microsoft-Style Capabilities Grid with Silky Smooth Glide Hover ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cards.map((card) => (
            <Reveal key={card.title} delay={card.delay} className="h-full">
              <div className="relative rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] p-6 md:p-8 flex flex-col justify-between group h-full shadow-lg overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-zinc-700 min-h-[390px] md:min-h-[420px] cursor-pointer">
                
                {/* Expanding Image Layer with Glassmorphism */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-80"
                  />
                  
                  {/* Frosted Glass Blur Overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
                  
                  {/* Vignette Gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5 border border-white/5 rounded-[24px]" />
                </div>

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  
                  {/* Title Glides UP to Top on Hover */}
                  <div className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover:translate-y-0 translate-y-[120px] md:translate-y-[135px]">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-rose-400 transition-colors duration-300">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description & Bullet Points Slide UP & Fade in on Hover */}
                  <div className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover:translate-y-0 group-hover:opacity-100 translate-y-10 opacity-0 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-zinc-100 text-sm md:text-base leading-relaxed mb-5 font-normal group-hover:text-white transition-colors duration-500">
                      {card.desc}
                    </p>

                    <div className="border-t border-zinc-800/60 group-hover:border-white/20 pt-4 transition-colors duration-500">
                      <ul className="space-y-2.5">
                        {card.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2.5 text-xs md:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors duration-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)] flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>

    </section>
  );
}
