"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const corePoints = [
  {
    num: "01",
    tabName: "Global Presence, Local Expertise",
    title: "Global Presence, Local Expertise",
    desc: "Access world-class engineering expertise locally with global delivery teams designed to scale seamlessly under flexible engagement models.",
    gradient: "from-rose-950/40 via-purple-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/globalpresence.png",
    href: "/about"
  },
  {
    num: "02",
    tabName: "Cloud, Data & AI Excellence",
    title: "Cloud, Data & AI Excellence",
    desc: "Leverage intelligence-driven automation, GenAI, and cloud platforms (Azure, AWS, GCP) to unlock next-generation product engineering.",
    gradient: "from-blue-950/40 via-indigo-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/cloudai.png",
    href: "/services/ai-data-innovation"
  },
  {
    num: "03",
    tabName: "Outcome-Driven Transformation",
    title: "Outcome-Driven Transformation",
    desc: "We align every project outcome with direct business value, performance milestones, cost-efficiency metrics, and operational goals.",
    gradient: "from-teal-950/40 via-emerald-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/outcome.png",
    href: "/about"
  },
  {
    num: "04",
    tabName: "End-to-End Technology Delivery",
    title: "End-to-End Technology Delivery",
    desc: "From conceptualization, design, architecture, implementation to managed operations and continuous delivery—all managed under one strategic partner.",
    gradient: "from-emerald-950/40 via-zinc-900/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/technology.png",
    href: "/ecosystem/global-delivery"
  },
  {
    num: "05",
    tabName: "Multi-Cloud Engineering Leadership",
    title: "Multi-Cloud Engineering Leadership",
    desc: "Our certified cloud experts build resilient infrastructures on AWS, Azure, Google Cloud, and complex hybrid environments.",
    gradient: "from-indigo-950/40 via-pink-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/multicloud.png",
    href: "/services/cloud-services"
  },
  {
    num: "06",
    tabName: "Enterprise-Grade Security & Reliability",
    title: "Enterprise-Grade Security & Reliability",
    desc: "Zero-trust environments, compliance guardrails, automated threat-detection, and highly reliable Site Reliability Engineering built into every delivery.",
    gradient: "from-violet-950/40 via-fuchsia-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/gradesecurity.png",
    href: "/services/cybersecurity"
  },
  {
    num: "07",
    tabName: "Scalable Global Delivery Model",
    title: "Scalable Global Delivery Model",
    desc: "Scale teams dynamically with elite developers, DevOps engineers, and cloud architects operating under our optimized global framework.",
    gradient: "from-fuchsia-950/40 via-rose-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/globaldeliver.png",
    href: "/ecosystem/global-delivery"
  },
  {
    num: "08",
    tabName: "Long-Term Strategic Partnership",
    title: "Long-Term Strategic Partnership",
    desc: "We focus on long-term relationships, strategic consulting, knowledge-sharing, and continuous value creation beyond transactional contracts.",
    gradient: "from-rose-950/40 via-orange-950/30 to-zinc-950/80",
    image: "/assets/Home-page/whychoose/partnership.png",
    href: "/about"
  }
];

const checklist = [
  "AI & Cloud Specialists",
  "Enterprise-Grade Security",
  "Infrastructure Automation Experts",
  "Modern Software Engineering",
  "Industry-Specific Expertise",
  "Scalable Global Delivery",
  "24×7 Managed Operations",
  "Long-Term Technology Partnership"
];

export function WhyDevopstrio() {
  /*
  === OLD CODE (Preserved for reference) ===
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % corePoints.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const activePoint = corePoints[activeIndex];

  // Old JSX:
  <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
    <div className="flex flex-col gap-3 md:gap-4 select-none">
      {corePoints.map((point, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={point.title}
            onClick={() => setActiveIndex(idx)}
            className="flex items-center gap-4 text-left group focus:outline-none py-1"
          >
            <span className={`w-1 h-8 bg-rose-500 transition-all duration-300 origin-center ${
              isActive ? "opacity-100 scale-y-100 animate-pulse" : "opacity-0 scale-y-0"
            }`} />
            <span className={`text-lg md:text-xl xl:text-2xl font-bold tracking-tight transition-all duration-300 ${
              isActive 
                ? "text-white scale-[1.01] origin-left" 
                : "text-zinc-600 hover:text-zinc-400"
            }`}>
              {point.tabName}.
            </span>
          </button>
        );
      })}
    </div>

    <div className="flex flex-col lg:sticky lg:top-28">
      <div className="relative w-full aspect-[16/10] rounded-[32px] overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-[0_20px_40px_rgba(0,0,0,0.6)] mb-8 select-none">
        {corePoints.map((point, idx) => (
          <div
            key={point.num}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              idx === activeIndex ? "opacity-90 scale-100 z-10" : "opacity-0 scale-105 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={point.image}
              alt={point.title}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
            <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-25 mix-blend-color-dodge`} />
          </div>
        ))}

        <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          <div className="absolute right-8 top-1/2 -translate-y-1/2 grid grid-cols-5 gap-4 opacity-40 pointer-events-none">
            {Array.from({ length: 25 }).map((_, i) => {
              const isSpecial = i === 12 || i === 18 || i === 7;
              return (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 transition-all duration-700 ${
                    isSpecial ? "text-rose-500 scale-125 animate-pulse" : "text-white/10"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                </svg>
              );
            })}
          </div>
          <span className="text-6xl md:text-7xl font-black text-white/90 leading-none select-none font-sans drop-shadow-md">
            {activePoint.num}
          </span>
        </div>
      </div>

      <div className="min-h-[140px] flex flex-col justify-start">
        <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">
          {activePoint.title}
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold max-w-lg">
          {activePoint.desc}
        </p>
      </div>
    </div>
  </div>
  === END OLD CODE ===
  */

  return (
    <section className="w-full py-24 bg-[#030303] text-white relative">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Top Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
              Why Devopstrio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 drop-shadow-md">
              Engineering Innovation. <span className="block md:inline">Delivering <span className="text-rose-500">Business Outcomes.</span></span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto drop-shadow-md">
              We combine deep technical expertise, <Link href="/industries" className="text-rose-500 hover:underline font-medium">industry knowledge</Link>, and <Link href="/ecosystem/engineering-excellence" className="text-rose-500 hover:underline font-medium">modern engineering practices</Link> to help organizations innovate faster, <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-medium">operate securely</Link>, and scale confidently in an increasingly digital world.
            </p>
          </Reveal>
        </div>

        {/* Interactive Sticky Hover Grid */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start mb-20 relative">

          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-8 w-full">
            {corePoints.filter((_, i) => i % 2 === 0).map((point, idx) => (
              <div
                key={point.num}
                className="sticky w-full"
                style={{ top: `${100 + idx * 30}px`, zIndex: idx }}
              >
                <Reveal delay={0}>
                  <Link href={point.href} className="relative rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] overflow-hidden flex flex-col aspect-[16/10] group shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-zinc-700 cursor-pointer block">

                    {/* Base Image Layer (Always visible, blurs slightly on hover) */}
                    <div className="absolute inset-0 z-0 transition-all duration-700 ease-in-out group-hover:blur-md group-hover:scale-105">
                      <Image src={point.image} alt={point.title} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-20 mix-blend-overlay`} />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                    </div>

                    {/* Expanding "Bottom-Right" Overlay Layer (Accenture style clip path) */}
                    <div className="absolute inset-0 z-10 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none bg-gradient-to-tl from-rose-950/80 to-zinc-950/80 backdrop-blur-sm" />

                    {/* Content */}
                    <div className="relative z-20 p-8 flex flex-col h-full pointer-events-none justify-end">
                      <div className="transition-all duration-500 ease-in-out translate-y-8 group-hover:translate-y-0">
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-4 block drop-shadow-md">
                          REASON {point.num}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                          {point.title}
                        </h3>

                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                          <div className="overflow-hidden">
                            <p className="text-zinc-200 text-[13px] leading-relaxed font-medium line-clamp-4 drop-shadow-md mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                              {point.desc}
                            </p>
                            <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                              <div className="w-8 h-8 rounded-full bg-rose-500 border border-rose-500 flex items-center justify-center text-white drop-shadow-md">
                                <ArrowUpRight size={14} />
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </Link>
                </Reveal>
              </div>
            ))}
          </div>

          {/* Right Column (Staggered start) */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-8 w-full md:mt-24">
            {corePoints.filter((_, i) => i % 2 !== 0).map((point, idx) => (
              <div
                key={point.num}
                className="sticky w-full"
                style={{ top: `${100 + idx * 30}px`, zIndex: idx }}
              >
                <Reveal delay={0}>
                  <Link href={point.href} className="relative rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] overflow-hidden flex flex-col aspect-[16/10] group shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-zinc-700 cursor-pointer block">

                    {/* Base Image Layer (Always visible, blurs slightly on hover) */}
                    <div className="absolute inset-0 z-0 transition-all duration-700 ease-in-out group-hover:blur-md group-hover:scale-105">
                      <Image src={point.image} alt={point.title} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-20 mix-blend-overlay`} />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                    </div>

                    {/* Expanding "Bottom-Right" Overlay Layer (Accenture style clip path) */}
                    <div className="absolute inset-0 z-10 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none bg-gradient-to-tl from-rose-950/80 to-zinc-950/80 backdrop-blur-sm" />

                    {/* Content */}
                    <div className="relative z-20 p-8 flex flex-col h-full pointer-events-none justify-end">
                      <div className="transition-all duration-500 ease-in-out translate-y-8 group-hover:translate-y-0">
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 mb-4 block drop-shadow-md">
                          REASON {point.num}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                          {point.title}
                        </h3>

                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                          <div className="overflow-hidden">
                            <p className="text-zinc-200 text-[13px] leading-relaxed font-medium line-clamp-4 drop-shadow-md mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                              {point.desc}
                            </p>
                            <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                              <div className="w-8 h-8 rounded-full bg-rose-500 border border-rose-500 flex items-center justify-center text-white drop-shadow-md">
                                <ArrowUpRight size={14} />
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </Link>
                </Reveal>
              </div>
            ))}
          </div>

        </div>

        {/* Checklist & Closing Statement Block */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start pt-12 border-t border-zinc-900/60">

          <Reveal>
            <div className="border border-zinc-850 bg-[#0A0A0A] rounded-3xl p-6 md:p-8 shadow-2xl relative flex flex-col justify-between group cursor-pointer transition-colors duration-500 hover:border-zinc-700">

              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_70%)] blur-3xl pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />

              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 relative z-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Why Organizations Choose <span className="font-bold text-rose-500 transition-all duration-500 group-hover:text-rose-400 group-hover:drop-shadow-[0_0_15px_rgba(225,29,72,0.6)]">Devopstrio</span>
              </h3>

              
              <div className="relative -mx-6 -mb-6 md:-mx-8 md:-mb-8 pt-5 px-6 pb-5 md:pt-6 md:px-8 md:pb-6 rounded-b-3xl overflow-hidden border-t border-zinc-800/60 transition-colors duration-500 group-hover:border-zinc-700 mt-auto bg-zinc-950/20">

                
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                  <img src="/assets/Home-page/whychoose/partnership-cover.png" alt="Why Devopstrio" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 backdrop-blur-md" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-6 relative z-10">
                  {checklist.map((item) => (
                    <div key={item} className="flex items-center gap-3 group/item p-2 -ml-2 rounded-lg hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all duration-300">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/20 group-hover/item:bg-rose-500/30 group-hover/item:border-rose-400 transition-all duration-300 shadow-[0_0_8px_rgba(225,29,72,0.1)] group-hover/item:shadow-[0_0_12px_rgba(225,29,72,0.4)] flex-shrink-0">
                        <CheckCircle2 size={10} className="text-rose-500 group-hover/item:text-rose-200 transition-colors duration-300" />
                      </div>
                      <span className="text-zinc-400 font-medium text-[13px] tracking-wide leading-snug group-hover:text-white group-hover/item:translate-x-1 transition-all duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>

          <Reveal className="py-8 border-r-4 border-r-rose-600 pr-8 pl-4 bg-gradient-to-l from-rose-950/10 to-transparent flex items-center h-full">
            <p className="text-base md:text-lg font-light leading-relaxed text-zinc-300">
              Devopstrio is more than a technology provider—we are a <Link href="/about" className="font-bold text-rose-500 hover:underline">strategic partner</Link> helping organizations build secure, scalable, and <Link href="/ecosystem" className="font-bold text-rose-500 hover:underline">intelligent digital ecosystems</Link> for the future.
            </p>
          </Reveal>

        </div> */}


      </div>
    </section>
  );
}
export { WhyDevopstrio as default };
