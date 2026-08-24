import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const caseStudies = [
  {
    id: "autonomous-ai",
    category: "AI & MLOps",
    tag: "Innovate",
    headline: "Autonomous AI Systems & MLOps Engineering",
    summary:
      "Architected an autonomous AI-powered analytics engine for a global financial institution, reducing turnaround from days to milliseconds.",
    image:
      "/assets/Services-Page/our-enterprise-ai-engineering-excellence/autonomous-ai-systems-mlops-engineering.png",
    link: "/services/ai-data-innovation",
    cta: "Explore AI Systems",
  },
  {
    id: "strategic-genai",
    category: "Enterprise AI",
    tag: "Strategize",
    headline: "Strategic GenAI & Enterprise AI Philosophy",
    summary:
      "Modernized legacy core infrastructure into a hybrid multi-cloud mesh with automated guardrails and multi-region resilience.",
    image:
      "/assets/Services-Page/our-enterprise-ai-engineering-excellence/strategic-genai-enterprise-ai-philosophy.png",
    link: "/services/cloud-services",
    cta: "Explore Strategy",
  },
  {
    id: "business-roi",
    category: "AI Governance",
    tag: "Scale",
    headline: "Measurable Business ROI & AI Governance",
    summary:
      "Engineered an enterprise platform handling over 10 million transactions daily with sub-second latency and zero critical security incidents.",
    image:
      "/assets/Services-Page/our-enterprise-ai-engineering-excellence/measurable-business-roi-ai-governance.png",
    link: "/services/devops-automation",
    cta: "Explore Governance",
  },
];

const impactStats = [
  {
    value: "2,500+",
    label: "Projects Delivered",
    subtext: "Across 25+ enterprise industry domains worldwide",
  },
  {
    value: "525+",
    label: "Technology Experts",
    subtext: "Architects, engineers & AI practitioners in cross-functional pods",
  },
  {
    value: "7+",
    label: "Years of Engineering",
    subtext: "Proven history of scaling resilient digital solutions",
  },
  {
    value: "24×7",
    label: "Global Delivery",
    subtext: "Uninterrupted support & SRE across 4 delivery hubs",
  },
];

export const LeadershipDeliver = () => {
  return (
    <section
      id="leadership-deliver"
      className="pt-12 pb-2 sm:pt-16 sm:pb-4 bg-black text-white relative overflow-hidden font-sans"
    >
      {/* Ambient Lighting & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.08),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-600/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 space-y-4">
        
        {/* Top Tagline with Left-Right Arrow indicator */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 relative z-40">
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4 font-sans leading-[1.45]">
                <span className="relative inline-block">
                  <div className="absolute -top-5 sm:-top-7 md:-top-8 -left-10 sm:-left-12 md:-left-16 z-20 pointer-events-none select-none">
                    <img src="/assets/components/lefttoright.png"
                      alt="Left-Right Arrow indicator"
                      className="w-10 sm:w-12 md:w-14 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                      loading="lazy" />
                  </div>
                  We
                </span>{" "}
                lead with{" "}
                <span className="bg-rose-500 text-white font-semibold px-4 py-1 mx-1.5 rounded-xl inline-block">
                  every pillar
                </span>{" "}
                of{" "}
                <span className="relative inline-block text-white px-1 mx-1 whitespace-nowrap">
                  <span className="text-white font-semibold relative z-10">engineering excellence</span>
                  <svg
                    className="absolute -bottom-4 left-0 w-full h-5 text-rose-500 pointer-events-none overflow-visible z-0"
                    viewBox="0 0 250 20"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 3 14 C 50 6, 130 17, 245 9"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      className="opacity-90 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                    />
                    <path
                      d="M 12 17 C 75 11, 165 18, 238 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeDasharray="6 3 14 4"
                      className="opacity-75 filter drop-shadow-[0_0_5px_rgba(244,63,94,0.4)]"
                    />
                  </svg>
                </span>
              </h2>
            </div>
          </Reveal>
        </div>

        {/* Big Size Leader Image (Backside) & Quote */}
        <Reveal delay={0.15}>
          <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center -mt-4 sm:-mt-6 md:-mt-10 lg:-mt-14 z-0">
            {/* Ambient Lighting Behind Image */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[700px] h-96 sm:h-[700px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

            {/* Big Size Leader Image (Backside Layer) */}
            <div className="relative z-0 w-full max-w-[400px] sm:max-w-[620px] md:max-w-[800px] lg:max-w-[960px] xl:max-w-[1080px] flex items-center justify-center">
              <img src="/assets/About-page/leader/Mani-PS-REC-BG003.png"
                alt="Mani - Leadership"
                className="w-full h-auto object-contain filter contrast-105 drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
              loading="lazy" />
            </div>

            {/* Simple Clean Quote Text Below Image */}
            {/* <div className="relative z-10 max-w-3xl mx-auto mt-6 sm:mt-8 space-y-3 px-4">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-semibold text-white tracking-tight leading-[1.25] font-sans">
                &ldquo;Leadership is{" "}
                <span className="text-rose-500 font-semibold">not about being in charge.</span>{" "}
                It is all about{" "}
                <span className="text-rose-500 font-semibold">taking care of</span>{" "}
                those in your charge.&rdquo;
              </p>
              <p className="text-sm sm:text-base text-zinc-400 font-serif italic pt-2">
                — Manikandan PS
              </p>
            </div> */}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
