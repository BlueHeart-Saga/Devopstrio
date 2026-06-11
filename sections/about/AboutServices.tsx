"use client";

import React, { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    name: "Cloud & Migration",
    category: "Modernize",
    image: "/assets/Home-page/core-services/cloud computing.png",
    desc: "Seamless migration of complex enterprise workloads to Azure, AWS, and GCP — with zero downtime, full compliance mapping, and measurable cost reduction from day one.",
    tags: ["Azure", "AWS", "GCP", "Multi-Cloud"]
  },
  {
    num: "02",
    name: "AI & Data Science",
    category: "Intelligence",
    image: "/assets/Home-page/core-services/Ai & Automation.png",
    desc: "From Generative AI strategy and LLM deployment to predictive analytics, automated data pipelines, and ML model engineering — we turn your raw data into operational intelligence.",
    tags: ["Gen AI", "ML Models", "Data Engineering"]
  },
  {
    num: "03",
    name: "DevOps & Platform",
    category: "Automation",
    image: "/assets/Home-page/core-services/Devops and iac.png",
    desc: "CI/CD pipelines, Infrastructure as Code, Kubernetes orchestration, GitOps, and Site Reliability Engineering — we automate the entire software delivery lifecycle.",
    tags: ["CI/CD", "Kubernetes", "Terraform", "IaC"]
  },
  {
    num: "04",
    name: "Cybersecurity",
    category: "Protection",
    image: "/assets/Home-page/core-services/cyber security.png",
    desc: "Zero-trust architectures, penetration testing, SOC operations, threat intelligence, and compliance management — security embedded into every layer, not bolted on after.",
    tags: ["Zero Trust", "SOC", "ISO 27001", "GDPR"]
  },
  {
    num: "05",
    name: "Product Engineering",
    category: "Innovation",
    image: "/assets/Home-page/core-services/Engineering.png",
    desc: "Web applications, mobile platforms, SaaS architectures, enterprise APIs, and UI/UX design — engineered for performance, built for users, designed to scale.",
    tags: ["Web Dev", "Mobile", "SaaS", "API"]
  },
  {
    num: "06",
    name: "Staff Augmentation",
    category: "Scale",
    image: "/assets/Home-page/core-services/enterprise solution.png",
    desc: "On-demand access to 525+ certified cloud, AI, DevOps, and security specialists — embedded into your team, operating under your processes, delivering to your standards.",
    tags: ["ODC", "CMMI Level 5", "Flexible Teams"]
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

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10">
        
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
          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-bold">
              Enrich employee experiences, reshape business processes, and accelerate innovation with Devopstrio—embedding trusted intelligence into everyday workflows. Move beyond task automation to connect knowledge, improve decisions, and achieve measurable outcomes.
            </p>
          </Reveal>
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
                className="snap-start flex-shrink-0 w-[300px] md:w-[380px] rounded-[32px] bg-zinc-950/30 backdrop-blur-xl border border-zinc-800/50 p-6 flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-zinc-700/60 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  {/* Top Image */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-zinc-900 border border-zinc-800/40">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Category */}
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-rose-500 mb-2 block">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-extrabold text-white leading-snug mb-3 tracking-tight">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed mb-6 font-bold">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Action Link */}
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 pt-4 border-t border-zinc-800/40 mt-auto group/footer w-full"
                >
                  <span className="w-8 h-8 rounded-full bg-[#E11D48] text-white flex items-center justify-center transition-transform duration-300 group-hover/footer:translate-x-1">
                    <ArrowRight size={14} />
                  </span>
                  <span className="text-xs md:text-sm font-bold text-zinc-300 group-hover/footer:text-[#E11D48] transition-colors">
                    Explore {item.name}
                  </span>
                </a>
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
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
