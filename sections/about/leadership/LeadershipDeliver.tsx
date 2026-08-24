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
      "/assets/Services-Page/Our Enterprise AI Engineering Excellence/Autonomous AI Systems & MLOps Engineering.png",
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
      "/assets/Services-Page/Our Enterprise AI Engineering Excellence/Strategic GenAI & Enterprise AI Philosophy.png",
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
      "/assets/Services-Page/Our Enterprise AI Engineering Excellence/Measurable Business ROI & AI Governance.png",
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
      className="py-24 bg-black text-white relative overflow-hidden font-sans"
    >
      {/* Ambient Lighting & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.08),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-600/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 space-y-16 sm:space-y-24">
        
        {/* Redesigned Section Header (In Front) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto relative z-40 text-left mb-2 sm:mb-4 pt-16 sm:pt-20 pointer-events-none">
          <div className="lg:col-span-8 pointer-events-auto">
            <Reveal className="overflow-visible">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white mb-2 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                Leaders Who{" "}
                <span className="relative inline-block">
                  {/* Top-to-bottom straight arrow indicator (moved down & perfectly sized) */}
                  <div className="absolute -top-16 sm:-top-20 md:-top-24 lg:-top-28 left-1/2 -translate-x-1/2 pointer-events-none select-none z-50">
                    <img
                      src="/assets/components/streight-toptobuttm.png"
                      alt="Top to bottom arrow indicator"
                      className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(244,63,94,0.7)]"
                    />
                  </div>
                  <span className="text-rose-500 font-semibold">Deliver.</span>
                </span>{" "}
                Solutions That Matter.
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Big Size Leader Image (Backside) & Quote */}
        <Reveal delay={0.15}>
          <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center -mt-12 sm:-mt-20 md:-mt-28 lg:-mt-36 z-0">
            {/* Ambient Lighting Behind Image */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[700px] h-96 sm:h-[700px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

            {/* Big Size Leader Image (Backside Layer) */}
            <div className="relative z-0 w-full max-w-[400px] sm:max-w-[620px] md:max-w-[800px] lg:max-w-[960px] xl:max-w-[1080px] flex items-center justify-center">
              <img
                src="/assets/About-page/leader/Mani PS REC BG003.png"
                alt="Mani - Leadership"
                className="w-full h-auto object-contain filter contrast-105 drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
              />
            </div>

            {/* Simple Clean Quote Text Below Image */}
            <div className="relative z-10 max-w-3xl mx-auto mt-6 sm:mt-8 space-y-3 px-4">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-semibold text-white tracking-tight leading-[1.25] font-sans">
                &ldquo;Leadership is{" "}
                <span className="text-rose-500 font-bold">not about being in charge.</span>{" "}
                It is all about{" "}
                <span className="text-rose-400 font-bold">taking care of</span>{" "}
                those in your charge.&rdquo;
              </p>
              <p className="text-sm sm:text-base text-zinc-400 font-serif italic pt-2">
                — Manikandan PS
              </p>
            </div>
          </div>
        </Reveal>

        {/* 4. Real Business Impact Numbers (Open Borderless Layout with Viewable Font Size) */}
        <div className="relative py-6">
          {/* Ambient Lighting Behind Numbers */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />

          {/* 4 Open Borderless Impact Stats */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
            {impactStats.map((stat, i) => (
              <div key={i} className="space-y-2 group">
                <p className="text-5xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight text-rose-500 leading-none mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </p>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-normal font-sans group-hover:text-rose-400 transition-colors">
                  {stat.label}
                </h4>
                {/* <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-xs mx-auto">
                  {stat.subtext}
                </p> */}
              </div>
            ))}
          </div>

          {/* Bottom Statement (No boxing) */}
          <div className="relative z-10 mt-14 sm:mt-20 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-zinc-100 leading-snug tracking-tight max-w-4xl mx-auto drop-shadow-sm">
              &ldquo;Built to perform. Designed to scale. Delivered to create impact.&rdquo;
            </p>
          </div>
        </div>

        {/* 5. Real Case Studies: 3 Major Horizontal Stories (Seamless Dark Theme Cards, No White Borders) */}
        <div className="space-y-12 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Stories of Impact
            </h3>
            {/* <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Real-world engineering triumphs delivered for global enterprises.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="group flex flex-col justify-between bg-[#0B0B0E] hover:bg-[#111116] rounded-3xl p-4 transition-all duration-300 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                <div className="space-y-4">
                  {/* Cover Image */}
                  <div className="relative w-full aspect-[2/1] overflow-hidden rounded-2xl bg-zinc-950">
                    <img
                      src={cs.image}
                      alt={cs.headline}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-col px-2 pt-2 pb-2 gap-3">
                    <span className="text-rose-400 text-xs sm:text-sm font-bold uppercase tracking-wider font-sans">
                      {cs.tag}
                    </span>
                    <h4 className="text-white text-xl sm:text-2xl font-bold leading-snug font-sans group-hover:text-rose-400 transition-colors">
                      {cs.headline}
                    </h4>
                    {/* <p className="text-zinc-300 text-sm sm:text-base font-normal leading-relaxed font-sans">
                      {cs.summary}
                    </p> */}
                  </div>
                </div>

                {/* CTA Link */}
                <div className="px-2 pt-4 pb-2 border-t border-zinc-850/80 mt-4">
                  <Link
                    href={cs.link}
                    className="inline-flex items-center justify-between w-full text-white hover:text-rose-400 text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 group/btn"
                  >
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                      {cs.cta}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-rose-500/10 group-hover/btn:bg-rose-600 flex items-center justify-center text-rose-500 group-hover/btn:text-white transition-all duration-300 shadow-[0_0_15px_rgba(225,29,72,0.2)] group-hover/btn:shadow-[0_0_20px_rgba(225,29,72,0.6)]">
                      <ArrowUpRight size={17} />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
