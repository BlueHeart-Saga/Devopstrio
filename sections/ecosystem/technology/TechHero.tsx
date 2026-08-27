"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function TechHero() {
  const innerIcons = [
    { name: "AWS", src: "/webp/assets/Devopstrio_Partners/aws.webp" },
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

  const innerRadius = 240;
  const outerRadius = 360;

  return (
    <section className="relative w-full flex items-center justify-center bg-black overflow-hidden pt-0 pb-0">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_55%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Outer circular wrapper */}
      <div className="relative w-full max-w-[800px] h-[740px] flex items-center justify-center scale-90 sm:scale-100 transition-transform select-none -mt-6 md:-mt-10">

        {/* Center Text Panel */}
        <div className="w-[320px] md:w-[460px] text-center z-30 flex flex-col items-center justify-center">
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-semibold tracking-tight leading-tight mb-4 text-white">
              Built on Modern Foundations
            </h1>
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
              className="absolute w-14 h-14 bg-white/[0.06] backdrop-blur-2xl border-0 p-2.5 rounded-2xl flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-115 cursor-pointer z-20 group"
              style={{
                left: `calc(50% + ${x}px - 28px)`,
                top: `calc(50% + ${y}px - 28px)`,
                transform: `rotate(${angle}deg)`
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={icon.src}
                alt={icon.name}
                className="w-full h-full object-contain filter brightness-95 group-hover:brightness-100 group-hover:scale-110 transition-all"
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
              className="absolute w-12 h-12 bg-white/[0.04] backdrop-blur-2xl border-0 p-2 rounded-2xl flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-115 cursor-pointer z-10 group"
              style={{
                left: `calc(50% + ${x}px - 24px)`,
                top: `calc(50% + ${y}px - 24px)`,
                transform: `rotate(${angle}deg)`
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={icon.src}
                alt={icon.name}
                className="w-full h-full object-contain filter opacity-85 brightness-90 group-hover:opacity-100 group-hover:brightness-100 group-hover:scale-110 transition-all"
                title={icon.name}
                loading="eager" />
            </div>
          );
        })}

      </div>
    </section>
  );
}
