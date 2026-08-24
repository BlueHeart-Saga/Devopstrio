"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

// Curated tech & partner icons from project assets
const row1 = [
  { name: "AWS", path: "/assets/Devopstrio_Partners/aws.png" },
  { name: "Google Cloud", path: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg" },
  { name: "Microsoft", path: "/assets/Home-page/partners/Microsoft.svg" },
  { name: "ServiceNow", path: "/assets/Home-page/partners/servicenow.png" },
  { name: "Cloudflare", path: "/assets/Tech-icons/cloudflare-logo-icon_svgstack_com_28071780931769.svg" },
];

const row2 = [
  { name: "Docker", path: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg" },
  { name: "GitHub", path: "/assets/Tech-icons/github-logo-svg_svgstack_com_28391780931442.svg" },
  { name: "GitLab", path: "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg" },
  { name: "Slack", path: "/assets/Tech-icons/slack-logo_svgstack_com_31371780931112.svg" },
  { name: "Jira", path: "/assets/Tech-icons/jira-logo_svgstack_com_28621780931167.svg" },
];

const row3 = [
  { name: "React", path: "/assets/Tech-icons/react-icon_svgstack_com_29171780931136.svg" },
  { name: "Next.js", path: "/assets/Tech-icons/nextjs-logo_svgstack_com_28891780931519.svg" },
  { name: "TypeScript", path: "/assets/Tech-icons/typescript-logo_svgstack_com_31481780931142.svg" },
  { name: "Tailwind CSS", path: "/assets/Tech-icons/tailwindcss-logo_svgstack_com_31451780931467.svg" },
  { name: "Node.js", path: "/assets/Tech-icons/nodejs-logo_svgstack_com_28911780931118.svg" },
];

const row4 = [
  { name: "Python", path: "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg" },
  { name: "Redis", path: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg" },
  { name: "Go", path: "/assets/Tech-icons/go-lang-logo_svgstack_com_28411780931472.svg" },
  { name: "RedHat", path: "/assets/Tech-icons/redhat-logo_svgstack_com_29191780931481.svg" },
  { name: "OpenAI", path: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg" },
];

const partnerLogos = [
  { src: "/assets/Home-page/partners/BT.svg", alt: "BT" },
  { src: "/assets/Home-page/partners/bp-logo.svg", alt: "BP" },
  { src: "/assets/Home-page/partners/NHS.svg", alt: "NHS" },
  { src: "/assets/Home-page/partners/Boviet_Solar.png", alt: "Boviet Solar" },
  { src: "/assets/Home-page/partners/gxo.svg", alt: "GXO" },
  { src: "/assets/Home-page/partners/ASDA.svg", alt: "ASDA" },
  { src: "/assets/Home-page/partners/Microsoft.svg", alt: "Microsoft" },
  { src: "/assets/Home-page/partners/Virgin.svg", alt: "Virgin" },
  { src: "/assets/Home-page/partners/Costco.svg", alt: "Costco" },
  { src: "/assets/Home-page/partners/Metrobank.svg", alt: "Metro Bank" }
];
const doubledLogos = [...partnerLogos, ...partnerLogos];

const RowMarquee = ({ items, direction }: { items: typeof row1; direction: "left" | "right" }) => {
  // Quadruple base items to guarantee smooth seamless loops on large viewport sizes
  const duplicatedItems = [...items, ...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden w-full relative py-1">
      <div className={direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}>
        {duplicatedItems.map((logo, idx) => (
          <div
            key={`${logo.name}-${idx}`}
            className="mx-1.5 md:mx-2 flex-shrink-0 flex items-center justify-center bg-zinc-950/40 border border-zinc-900 rounded-2xl w-14 h-14 md:w-20 md:h-20 hover:bg-white hover:border-white hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-500 hover:-translate-y-1 group relative cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center h-full w-full p-2.5 md:p-4">
              <img
                src={logo.path}
                alt={logo.name}
                className="w-6.5 h-6.5 md:w-9 md:h-9 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-sm"
              />
              <span className="absolute bottom-1 md:bottom-2 text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:text-black transition-all duration-300 translate-y-1 group-hover:translate-y-0 pointer-events-none">
                {logo.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export function OurPartnership() {
  return (
    <section className="w-full py-20 lg:py-28 bg-black text-white relative overflow-hidden">
      {/* CSS Keyframes for infinite marquee loops */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 45s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 45s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column: Staggered Marquee Grid */}
          <div className="lg:col-span-7 relative w-full overflow-hidden py-6 bg-zinc-950/10 border border-zinc-900/80 rounded-3xl backdrop-blur-sm">
            {/* Edge Fading Overlays */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-black to-transparent pointer-events-none z-20" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-black to-transparent pointer-events-none z-20" />
            <div className="absolute inset-x-0 top-0 h-10 md:h-16 bg-gradient-to-b from-black to-transparent pointer-events-none z-20" />
            <div className="absolute inset-x-0 bottom-0 h-10 md:h-16 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />

            {/* Marquee Rows */}
            <div className="flex flex-col gap-2 relative">
              <RowMarquee items={row1} direction="left" />
              <RowMarquee items={row2} direction="right" />
              <RowMarquee items={row3} direction="left" />
              <RowMarquee items={row4} direction="right" />
            </div>
          </div>

          {/* Right Column: Copy & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-500">
                  Integrations & Partners
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6 font-sans">
                Pre-built recipes for the <span className="text-rose-500">most popular tools</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                Devopstrio holds advanced authorizations and deep integrations across the world's most respected <Link href="/ecosystem" className="text-rose-500 hover:underline">technology ecosystems</Link>. Easily connect your program and orchestrate enterprise workflows with our validated, high-performance <Link href="/services/devops-automation" className="text-rose-500 hover:underline">developer pipelines</Link>.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                >
                  Explore Solutions
                </Link>
                <Link
                  href="/contact#contact-form"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  View all Integrations
                </Link>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Partner Trust Banner */}
      <div className="w-full border-t border-zinc-900/80 mt-20 pt-12 pb-6 relative z-20 overflow-hidden bg-black/50">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-20 bg-rose-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">

            <div className="flex-shrink-0 max-w-sm">
              <Reveal>
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E11D48] mb-2 block">
                  ENTERPRISE PARTNERS
                </span>
              </Reveal>
              <Reveal>
                <h3 className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-white">
                  Trusted by global industry leaders
                </h3>
              </Reveal>
            </div>

            <div className="flex-grow relative overflow-hidden py-2.5 lg:max-w-[70%] xl:max-w-[75%]">
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-black via-black/40 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-black via-black/40 to-transparent z-10 pointer-events-none" />

              <motion.div
                className="flex gap-16 md:gap-20 items-center whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              >
                {doubledLogos.map((logo, index) => (
                  <div
                    key={`${logo.alt}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 md:h-10 lg:h-12 w-auto object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
