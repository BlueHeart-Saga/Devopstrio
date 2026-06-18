"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Zap, Search } from "lucide-react";
import Image from "next/image";

export function PartnershipHero() {


  // Back row (Furthest, 6 cards)
  const rowBack = [
    { name: "AWS", src: "/assets/Home-page/Techtools/aws-color.svg" },
    { name: "Azure", src: "/assets/Home-page/Techtools/azure-color.svg" },
    { name: "Google Cloud", src: "/assets/Home-page/Techtools/google-color.svg" },
    { name: "Oracle", src: "/assets/Home-page/Techtools/Oracle.svg" },
    { name: "React", src: "/assets/Home-page/Techtools/React.svg" },
    { name: "GitLab", src: "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg" }
  ];

  // Middle row (Intermediate density - 8 cards)
  const rowMiddle = [
    { name: "Vue", src: "/assets/Home-page/Techtools/Vue.svg" },
    { name: "Go", src: "/assets/Home-page/Techtools/GO.svg" },
    { name: "Python", src: "/assets/Home-page/Techtools/Python.svg" },
    { name: "Node.js", src: "/assets/Home-page/Techtools/Node.svg" },
    { name: "PostgreSQL", src: "/assets/Home-page/Techtools/postgre.svg" },
    { name: "GitHub", src: "/assets/Tech-icons/github-logo-svg_svgstack_com_28391780931442.svg" },
    { name: "Java", src: "/assets/Tech-icons/java-logo_svgstack_com_28601780931218.svg" },
    { name: "Rust", src: "/assets/Tech-icons/rust-logo_svgstack_com_31291780931285.svg" }
  ];

  // Front row (Densest, closest - 12 cards)
  const rowFront = [
    { name: "MySQL", src: "/assets/Home-page/Techtools/MySQL.svg" },
    { name: "PHP", src: "/assets/Home-page/Techtools/PHP.svg" },
    { name: "Docker", src: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg" },
    { name: "Cloudflare", src: "/assets/Tech-icons/cloudflare-logo-icon_svgstack_com_28071780931769.svg" },
    { name: "Next.js", src: "/assets/Home-page/Techtools/next-js-color.svg" },
    { name: "Slack", src: "/assets/Tech-icons/slack-logo_svgstack_com_31371780931112.svg" },
    { name: "C#", src: "/assets/Tech-icons/csharp-logo_svgstack_com_28121780931651.svg" },
    { name: "NestJS", src: "/assets/Tech-icons/nestjs-logo_svgstack_com_28861780931513.svg" },
    { name: "MongoDB", src: "/assets/Tech-icons/mongo-db-logo_svgstack_com_28831780931486.svg" },
    { name: "GraphQL", src: "/assets/Tech-icons/graphql_svgstack_com_28421780931889.svg" },
    { name: "TailwindCSS", src: "/assets/Tech-icons/tailwindcss-logo_svgstack_com_31451780931467.svg" },
    { name: "Jira", src: "/assets/Tech-icons/jira-logo_svgstack_com_28621780931167.svg" }
  ];

  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-between bg-black overflow-hidden pt-28 border-b border-zinc-900/60">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />
      
      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Content Area */}
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center text-center flex-grow justify-center pt-8">
        
        {/* Center Main Heading & Subtitle */}
        <Reveal className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 text-rose-500 text-xs font-mono font-bold tracking-wider uppercase mb-6">
            <Zap size={12} className="animate-pulse" />
            Alliances & Channels
          </div>
        </Reveal>

        <Reveal delay={0.1} className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5 text-white text-center">
            Strategic Technology Partnerships
          </h1>
        </Reveal>

        <Reveal delay={0.2} className="max-w-3xl">
          <p className="text-zinc-300 text-xs md:text-sm lg:text-base leading-relaxed font-normal max-w-3xl text-center mx-auto opacity-95 mb-12">
            Leveraging world-class alliances across cloud, AI, cybersecurity, enterprise software, and infrastructure ecosystems to deliver scalable business outcomes.
          </p>
        </Reveal>

        {/* 3D Perspective Floating Integration Grid with Depth Scaling */}
        <div className="relative w-full max-w-[950px] h-[360px] flex items-center justify-center overflow-hidden mb-20">
          <div 
            className="relative w-full flex flex-col gap-6"
            style={{
              perspective: "1200px",
              transform: "rotateX(24deg) rotateY(0deg) rotateZ(0deg)",
              WebkitBoxReflect: "below 4px linear-gradient(transparent, transparent 60%, rgba(0,0,0,0.18))"
            }}
          >
            {/* Row 3 (FURTHEST - BACK - 6 Cards) */}
            <div className="flex justify-center gap-4 scale-[0.75] opacity-40 blur-[0.4px] translate-y-3">
              {rowBack.map((item) => (
                <div
                  key={item.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-zinc-950/90 border border-zinc-850 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-rose-500/20 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-white/[0.04] pointer-events-none" />
                  <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 (MIDDLE - INTERMEDIATE - 8 Cards) */}
            <div className="flex justify-center gap-4 scale-[0.88] opacity-70 translate-y-1">
              {rowMiddle.map((item) => (
                <div
                  key={item.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-zinc-950/90 border border-zinc-850 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-rose-500/20 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-white/[0.04] pointer-events-none" />
                  <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Row 1 (CLOSEST - FRONT - 12 Cards) */}
            <div className="flex justify-center gap-4 scale-[1.0] opacity-100 -translate-y-1">
              {rowFront.map((item) => (
                <div
                  key={item.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-zinc-950/90 border border-zinc-850 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-rose-500/20 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-white/[0.04] pointer-events-none" />
                  <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center filter group-hover:drop-shadow-[0_0_8px_rgba(244,63,94,0.3)] transition-all duration-300">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Bottom black blur fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20" />
    </section>
  );
}
