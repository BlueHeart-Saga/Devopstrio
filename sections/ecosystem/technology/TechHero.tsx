"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function TechHero() {
  const innerIcons = [
    { name: "AWS", src: "/assets/Devopstrio_Partners/aws.png" },
    { name: "Docker", src: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg" },
    { name: "NextJS", src: "/assets/Tech-icons/nextjs-logo-icon_svgstack_com_28901780931105.svg" },
    { name: "NodeJS", src: "/assets/Tech-icons/nodejs-logo_svgstack_com_28911780931118.svg" },
    { name: "Python", src: "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg" },
    { name: "TypeScript", src: "/assets/Tech-icons/typescript-logo_svgstack_com_31481780931142.svg" },
    { name: "React", src: "/assets/Tech-icons/react-icon_svgstack_com_29171780931136.svg" },
    { name: "Go", src: "/assets/Tech-icons/go-lang-logo_svgstack_com_28411780931472.svg" }
  ];

  const outerIcons = [
    { name: "GitHub", src: "/assets/Tech-icons/github-logo-svg_svgstack_com_28391780931442.svg" },
    { name: "Tailwind", src: "/assets/Tech-icons/tailwindcss-logo_svgstack_com_31451780931467.svg" },
    { name: "PostgreSQL", src: "/assets/Tech-icons/postgre-sql-logo_svgstack_com_29021780931526.svg" },
    { name: "MySQL", src: "/assets/Tech-icons/mysql-logo_svgstack_com_28851780931423.svg" },
    { name: "Redis", src: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg" },
    { name: "MongoDB", src: "/assets/Tech-icons/mongo-db-logo_svgstack_com_28831780931486.svg" },
    { name: "OpenAI", src: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg" },
    { name: "NestJS", src: "/assets/Tech-icons/nestjs-logo_svgstack_com_28861780931513.svg" },
    { name: "Figma", src: "/assets/Tech-icons/figma-logo_svgstack_com_28291780931376.svg" },
    { name: "GraphQL", src: "/assets/Tech-icons/graphql_svgstack_com_28421780931889.svg" },
    { name: "GitLab", src: "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg" },
    { name: "Rust", src: "/assets/Tech-icons/rust-logo_svgstack_com_31291780931285.svg" },
    { name: "Svelte", src: "/assets/Tech-icons/svelte-logo_svgstack_com_31421780931630.svg" },
    { name: "Cloudflare", src: "/assets/Tech-icons/cloudflare-logo-icon_svgstack_com_28071780931769.svg" },
    { name: "Firebase", src: "/assets/Tech-icons/google-firebase-logo_svgstack_com_28301780931456.svg" },
    { name: "Azure", src: "/assets/Tech-icons/microsoft-azure-logo_svgstack_com_7501780931055.svg" }
  ];

  const innerRadius = 210; // Increased radius to give more gap from center text
  const outerRadius = 320; // Increased radius to give more gap between rings

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden pt-12 pb-12 border-b border-zinc-900/60">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.04),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Outer circular wrapper for absolute scaling on smaller screen sizes */}
      <div className="relative w-full max-w-[700px] h-[700px] flex items-center justify-center scale-90 sm:scale-100 transition-transform select-none">

        {/* Decorative orbit boundary rings */}
        <div className="absolute w-[420px] h-[420px] rounded-full border border-zinc-900/35 pointer-events-none" />
        <div className="absolute w-[640px] h-[640px] rounded-full border border-zinc-900/20 pointer-events-none" />

        {/* Center Text Panel */}
        <div className="w-[280px] md:w-[320px] text-center z-30 flex flex-col items-center justify-center">
          <Reveal delay={0.1}>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-4 text-white">
              Built on Modern Foundations
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-[10px] md:text-xs leading-relaxed font-normal mb-6 opacity-95">
              Explore the <Link href="/ecosystem/technology-stack" className="text-rose-500 hover:underline font-bold">technology stack frameworks</Link> and modern <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud platform services</Link> driving our enterprise solutions.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              href="#framework"
              className="inline-flex items-center gap-3 pl-5 pr-2 py-1.5 bg-white text-black font-semibold text-[10px] tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Explore Stack
              <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>

        {/* Inner Ring Icons (8 items, 45deg intervals) */}
        {innerIcons.map((icon, idx) => {
          const angle = idx * 45;
          const angleRad = (angle * Math.PI) / 180;
          const x = innerRadius * Math.sin(angleRad);
          const y = -innerRadius * Math.cos(angleRad);

          return (
            <div
              key={`inner-${icon.name}`}
              className="absolute w-11 h-11 bg-zinc-950/90 border border-zinc-850 p-2 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-115 hover:border-rose-500/35 cursor-pointer z-20 group"
              style={{
                left: `calc(50% + ${x}px - 22px)`,
                top: `calc(50% + ${y}px - 22px)`,
                transform: `rotate(${angle}deg)` // Rotated outward from the center
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={icon.src}
                alt={icon.name}
                className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all"
                title={icon.name}
                loading="eager" />
            </div>
          );
        })}

        {/* Outer Ring Icons (16 items, 22.5deg intervals) */}
        {outerIcons.map((icon, idx) => {
          const angle = idx * 22.5;
          const angleRad = (angle * Math.PI) / 180;
          const x = outerRadius * Math.sin(angleRad);
          const y = -outerRadius * Math.cos(angleRad);

          return (
            <div
              key={`outer-${icon.name}`}
              className="absolute w-10 h-10 bg-zinc-950/80 border border-zinc-900 p-2 rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-115 hover:border-rose-500/35 cursor-pointer z-10 group"
              style={{
                left: `calc(50% + ${x}px - 20px)`,
                top: `calc(50% + ${y}px - 20px)`,
                transform: `rotate(${angle}deg)` // Rotated outward from the center
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={icon.src}
                alt={icon.name}
                className="w-full h-full object-contain filter opacity-75 brightness-75 group-hover:opacity-100 group-hover:brightness-100 group-hover:scale-105 transition-all"
                title={icon.name}
                loading="eager" />
            </div>
          );
        })}

      </div>
    </section>
  );
}
