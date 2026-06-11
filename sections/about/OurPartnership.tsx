"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

// Curated tech & partner icons from project assets
const row1 = [
  { name: "AWS", path: "/assets/Tech-icons/amazon-aws-logo_svgstack_com_7491780931192.svg" },
  { name: "Google Cloud", path: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg" },
  { name: "Microsoft", path: "/assets/Home-page/partners/Microsoft.svg" },
  { name: "ServiceNow", path: "/assets/Home-page/partners/servicenow.svg" },
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

const RowMarquee = ({ items, direction }: { items: typeof row1; direction: "left" | "right" }) => {
  // Quadruple base items to guarantee smooth seamless loops on large viewport sizes
  const duplicatedItems = [...items, ...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden w-full relative py-1">
      <div className={direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}>
        {duplicatedItems.map((logo, idx) => (
          <div
            key={`${logo.name}-${idx}`}
            className="mx-1.5 md:mx-2 flex-shrink-0 flex items-center justify-center bg-zinc-950/40 border border-zinc-900 rounded-2xl w-14 h-14 md:w-20 md:h-20 hover:border-rose-500/50 hover:bg-zinc-900/40 transition-all duration-300 hover:scale-105 group relative cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center h-full w-full p-2.5 md:p-4">
              <img
                src={logo.path}
                alt={logo.name}
                className="w-6.5 h-6.5 md:w-9 md:h-9 object-contain brightness-0 invert opacity-45 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
              <span className="absolute bottom-1 md:bottom-2 text-[8px] text-zinc-500 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 pointer-events-none">
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
      <style dangerouslySetInnerHTML={{ __html: `
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

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10">
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
                Devopstrio holds advanced authorizations and deep integrations across the world's most respected technology ecosystems. Easily connect your program and orchestrate enterprise workflows with our validated, high-performance developer pipelines.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]"
                >
                  Explore Solutions
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold text-white border border-zinc-800 bg-transparent hover:border-zinc-700 transition-all duration-300"
                >
                  View all Integrations
                </Link>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
