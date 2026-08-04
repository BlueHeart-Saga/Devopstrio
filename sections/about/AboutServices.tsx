"use client";

import React, { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    num: "01",
    name: "AI & Data Innovation",
    category: "Innovate",
    image: "/assets/Home-page/core-services/1.png",
    desc: "Leverage Generative AI, machine learning, and intelligent automation to modernise business processes and unlock measurable value at scale.",
    tags: ["Gen AI", "ML Models", "Data Engineering"]
  },
  {
    num: "02",
    name: "Cloud Services",
    category: "Migrate",
    image: "/assets/Home-page/core-services/2.png",
    desc: "Move, optimise, and scale confidently on any cloud platform. Design and manage resilient environments across AWS, Azure, and Google Cloud.",
    tags: ["Azure", "AWS", "GCP", "Cloud Native"]
  },
  {
    num: "03",
    name: "DevOps & Automation",
    category: "Accelerate",
    image: "/assets/Home-page/core-services/3.png",
    desc: "Ship faster with fully automated DevOps and IaC pipelines. CI/CD automation, Kubernetes orchestration, and platform engineering.",
    tags: ["CI/CD", "Kubernetes", "Terraform", "IaC"]
  },
  {
    num: "04",
    name: "Cybersecurity",
    category: "Protect",
    image: "/assets/Home-page/core-services/4.png",
    desc: "Embed security and compliance into every layer. Proactive threat management, SOC services, and zero-trust security frameworks.",
    tags: ["Zero Trust", "SOC", "ISO 27001", "GDPR"]
  },
  {
    num: "05",
    name: "Software Development",
    category: "Build",
    image: "/assets/Home-page/core-services/5.png",
    desc: "Create enterprise-grade software, apps, and SaaS platforms engineered for reliability, high performance, and business impact.",
    tags: ["Web Dev", "Mobile", "SaaS", "API"]
  },
  {
    num: "06",
    name: "Digital Transformation",
    category: "Transform",
    image: "/assets/Home-page/core-services/6.png",
    desc: "Modernise business models and legacy systems for the digital age with IT roadmaps, process automation, and intelligent workflows.",
    tags: ["Modernization", "Workflows", "RPA", "Strategy"]
  },
  {
    num: "07",
    name: "Data Engineering",
    category: "Analyze",
    image: "/assets/Home-page/core-services/7.png",
    desc: "Unlock actionable insights with robust enterprise data platforms. Design columnar databases, unified lakehouses, and real-time streaming.",
    tags: ["Data Lakes", "ETL", "Analytics", "BigQuery"]
  },
  {
    num: "08",
    name: "Managed Services",
    category: "Manage",
    image: "/assets/Home-page/core-services/8.png",
    desc: "Ensure uninterrupted operations with 24/7 proactive monitoring, SLA bug resolutions, and continuous incident containment.",
    tags: ["24/7 Support", "SLA", "Cloud Admin", "Monitoring"]
  },
  {
    num: "09",
    name: "QA & Testing",
    category: "Ensure",
    image: "/assets/Home-page/core-services/9.png",
    desc: "Deliver flawless digital experiences with automated end-to-end client scripts, performance load testing, and API validation.",
    tags: ["Automation", "Performance", "Security", "Shift-Left"]
  },
  {
    num: "10",
    name: "IT Consulting",
    category: "Consult",
    image: "/assets/Home-page/core-services/10.png",
    desc: "Align technology investments with strategic business objectives via distributed architecture planning and digital roadmaps.",
    tags: ["Strategy", "Architecture", "Compliance", "Roadmaps"]
  }
];

export function AboutServices() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-24 bg-[#09090b] text-white relative overflow-hidden">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-rose-950/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-rose-500 mb-4 block">
              Capabilities
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-white tracking-tight leading-tight mb-6">
              AI &amp; Cloud in the flow of work—built for scale and trust
            </h2>
          </Reveal>
          {/* <Reveal delay={0.2}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-bold">
              Enrich employee experiences, reshape business processes, and <Link href="/services/digital-transformation" className="text-rose-500 hover:underline">accelerate innovation</Link> with Devopstrio—embedding trusted intelligence into everyday workflows. Move beyond <Link href="/services/devops-automation" className="text-rose-500 hover:underline">task automation</Link> to connect knowledge, improve decisions, and achieve measurable outcomes.
            </p>
          </Reveal> */}
        </div>

        {/* Carousel Scroll Container */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-10"
            style={{ scrollbarWidth: "none" }}
          >
            {services.map((item) => (
              <div
                key={item.name}
                className="snap-start flex-shrink-0 w-[300px] md:w-[380px] rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 p-2.5 flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] group"
              >
                <div className="flex flex-col flex-1">
                  {/* Top Image */}
                  <div className="relative w-full aspect-[2/1] rounded-[16px] overflow-hidden mb-5 bg-zinc-900 border border-zinc-800/50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="px-3 flex flex-col flex-1">
                    {/* Category */}
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E11D48] mb-2 block">
                      {item.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg md:text-[19px] font-bold text-zinc-100 leading-snug mb-2.5 tracking-tight">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] text-zinc-400 leading-relaxed mb-6 flex-1">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="px-3 pb-2 pt-2 border-t border-zinc-800/40 mt-auto">
                  <a
                    href="/contact#contact-form"
                    className="inline-flex items-center gap-3 group/footer w-fit transition-all duration-300"
                  >
                    <span className="w-8 h-8 rounded-lg bg-zinc-800 group-hover/footer:bg-[#E11D48] text-white flex items-center justify-center transition-colors duration-300 border border-zinc-700 group-hover/footer:border-[#E11D48]">
                      <ArrowUpRight size={14} />
                    </span>
                    <span className="text-xs font-semibold tracking-wide text-zinc-300 group-hover/footer:text-white transition-colors">
                      Explore {item.name}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Left Navigation Buttons */}
          <div className="flex items-center gap-3 mt-4 relative z-20">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-zinc-850 bg-zinc-950/20 hover:border-rose-500 hover:text-rose-400 text-zinc-400 flex items-center justify-center transition-all duration-300"
              aria-label="Scroll left"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-zinc-850 bg-zinc-950/20 hover:border-rose-500 hover:text-rose-400 text-zinc-400 flex items-center justify-center transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
