"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2 } from "lucide-react";

const corePoints = [
  {
    num: "01",
    title: "AI-Driven Innovation",
    desc: "Leverage Artificial Intelligence, Generative AI, intelligent automation, and data-driven solutions to transform business operations and unlock new growth opportunities."
  },
  {
    num: "02",
    title: "Cloud-First Engineering",
    desc: "Design, migrate, and optimize scalable cloud environments across AWS, Microsoft Azure, Google Cloud, and hybrid infrastructures."
  },
  {
    num: "03",
    title: "Infrastructure as Code Expertise",
    desc: "Build reliable, repeatable, and automated infrastructure using Terraform, Kubernetes, GitOps, and modern platform engineering practices."
  },
  {
    num: "04",
    title: "Security by Design",
    desc: "Integrate cybersecurity, compliance, monitoring, and governance into every stage of the technology lifecycle."
  },
  {
    num: "05",
    title: "End-to-End Delivery",
    desc: "From strategy and architecture to development, deployment, and ongoing support, we deliver complete technology solutions under one partner."
  },
  {
    num: "06",
    title: "Industry-Focused Solutions",
    desc: "Experience delivering solutions across Financial Services, Healthcare, Logistics, Telecommunications, Retail, Manufacturing, and Public Sector organizations."
  },
  {
    num: "07",
    title: "Global Delivery & Business Value",
    desc: "Access world-class technology expertise and flexible engagement models designed to deliver measurable outcomes, operational efficiency, and long-term business value."
  },
  {
    num: "08",
    title: "Business-First Approach",
    desc: "We focus on measurable outcomes, operational efficiency, scalability, and long-term business value—not just technology implementation."
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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-why-point]");
      let closestIdx = 0;
      let minDistance = Infinity;

      elements.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        // Calculate the element's center relative to viewport
        const elementCenter = rect.top + rect.height / 2;
        // Compare to 30% of viewport height (higher up on screen to delay the change)
        const distance = Math.abs(elementCenter - window.innerHeight * 0.30);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeInd = corePoints[activeIndex] || corePoints[0];

  return (
    <section className="w-full pt-10 md:pt-14 pb-20 md:pb-32 bg-[#030303] text-white relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-start">

        {/* Left Side: Sticky Image & Intro */}
        <div className="lg:sticky lg:top-28 flex flex-col gap-8">
          <div>
            <div className="mb-4">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block">
                WHY Devopstrio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-6">
              Engineering Innovation. <br className="hidden lg:block" /> Delivering <span className="text-[#E11D48]">Business Outcomes.</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-bold">
              We combine deep technical expertise, industry knowledge, and modern engineering practices to help organizations innovate faster, operate securely, and scale confidently in an increasingly digital world.
            </p>
          </div>

          {/* Premium Dynamic Scroll Image (Sticky Box) */}
          <div className="w-full aspect-[16/10] relative overflow-hidden min-h-[200px] sm:min-h-[280px] lg:min-h-[340px]">
            {/* Ambient Background Glow behind the images */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

            {corePoints.map((point, idx) => (
              <img
                key={point.title}
                src={idx === 7 ? "/assets/Home-page/why-choose/whychoose.png" : `/assets/Home-page/why-choose/${idx + 1}.png`}
                alt={point.title}
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${activeIndex === idx
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-2 pointer-events-none"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Core Value Props & Checklist */}
        <div className="flex flex-col gap-16 mt-4 lg:mt-0">

          {/* Core Points */}
          <div className="flex flex-col gap-12 border-t border-zinc-900/40 pt-10 lg:pt-6">
            {corePoints.map((point, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={point.title}
                  data-why-point
                  className={`pb-12 border-b border-zinc-900/60 last:border-b-0 last:pb-0 transition-all duration-500 ${isActive ? "opacity-100 translate-x-2" : "opacity-40 translate-x-0"
                    }`}
                >
                  <div>
                    <h3 className={`text-xl md:text-2xl font-bold tracking-tight mb-3 transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-500"
                      }`}>
                      {point.title}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed font-bold transition-colors duration-300 ${isActive ? "text-zinc-300" : "text-zinc-600"
                      }`}>
                      {point.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Alternative Premium Section - Checklist */}
          <Reveal className="border border-zinc-800 bg-zinc-950/50 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.05),transparent_70%)] blur-3xl pointer-events-none" />

            <h3 className="text-2xl md:text-3xl font-light text-white mb-8 relative z-10">
              Why Organizations Choose <span className="font-bold text-rose-500">Devopstrio</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 relative z-10">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-rose-500 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300 font-bold text-sm md:text-base leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Strong Closing Statement */}
          <Reveal className="py-8 border-l-4 border-rose-600 pl-8 bg-gradient-to-r from-rose-950/20 to-transparent">
            <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-200">
              Devopstrio is more than a technology provider—we are a <span className="font-bold text-white">strategic partner</span> helping organizations build secure, scalable, and intelligent digital ecosystems for the future.
            </p>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
