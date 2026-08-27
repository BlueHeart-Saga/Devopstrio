"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function CommunityHero() {
  const avatars = [
    // Center Focus (Large, sharp)
    { id: 1, x: 0, y: 0, size: 96, filter: "none", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-276.webp" },

    // Ring 1 (Radius 70px, sharp & clear)
    { id: 2, x: 0, y: -70, size: 68, filter: "none", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-277.webp" },
    { id: 3, x: 70, y: 0, size: 68, filter: "none", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-278.webp" },
    { id: 4, x: 0, y: 70, size: 68, filter: "none", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-279.webp" },
    { id: 5, x: -70, y: 0, size: 68, filter: "none", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-280.webp" },

    // Ring 2 (Radius 140px, medium size)
    { id: 6, x: -98, y: -98, size: 54, filter: "blur(0.3px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-281.webp" },
    { id: 7, x: 98, y: -98, size: 54, filter: "blur(0.3px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-282.webp" },
    { id: 8, x: 98, y: 98, size: 54, filter: "blur(0.3px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-283.webp" },
    { id: 9, x: -98, y: 98, size: 54, filter: "blur(0.3px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-284.webp" },
    { id: 10, x: 0, y: -140, size: 54, filter: "blur(0.3px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-285.webp" },
    { id: 11, x: 140, y: 0, size: 54, filter: "blur(0.3px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-286.webp" },
    { id: 12, x: 0, y: 140, size: 54, filter: "blur(0.3px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-287.webp" },
    { id: 13, x: -140, y: 0, size: 54, filter: "blur(0.3px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-276.webp" },

    // Ring 3 (Radius 200px, smaller size)
    { id: 14, x: -141, y: -141, size: 42, filter: "blur(1px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-277.webp" },
    { id: 15, x: 141, y: -141, size: 42, filter: "blur(1px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-278.webp" },
    { id: 16, x: 141, y: 141, size: 42, filter: "blur(1px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-279.webp" },
    { id: 17, x: -141, y: 141, size: 42, filter: "blur(1px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-280.webp" },
    { id: 18, x: -200, y: 0, size: 42, filter: "blur(1px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-281.webp" },
    { id: 19, x: 200, y: 0, size: 42, filter: "blur(1px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-282.webp" },
    { id: 20, x: 0, y: -200, size: 42, filter: "blur(1px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-283.webp" },
    { id: 21, x: 0, y: 200, size: 42, filter: "blur(1px)", src: "/webp/assets/ecosystem/community-talent-network_hero-people/image-284.webp" },
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-black overflow-hidden pt-4 md:pt-6 pb-12 border-b border-zinc-900/60">
      {/* Dynamic Keyframes for smooth floating animation */}
      <style jsx global>{`
        @keyframes floatAvatar {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.04);
          }
        }
      `}</style>

      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10 flex flex-col items-center text-center">

        {/* Scaled-up Smoothly Floating Face Cluster */}
        <div className="relative w-[440px] h-[440px] md:w-[480px] md:h-[480px] flex items-center justify-center mb-6 select-none">
          {/* Orbital rings */}
          <div className="absolute w-[140px] h-[140px] rounded-full border border-zinc-900/50 pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] rounded-full border border-zinc-900/40 pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] rounded-full border border-zinc-900/25 pointer-events-none" />

          {avatars.map((avatar) => (
            <div
              key={avatar.id}
              className="absolute rounded-full border border-zinc-800 bg-zinc-950 overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-130 hover:border-rose-500/60 hover:!filter-none hover:z-30 cursor-pointer"
              style={{
                width: avatar.size,
                height: avatar.size,
                left: `calc(50% + ${avatar.x}px - ${avatar.size / 2}px)`,
                top: `calc(50% + ${avatar.y}px - ${avatar.size / 2}px)`,
                filter: avatar.filter,
                animation: `floatAvatar ${3.5 + (avatar.id % 4) * 0.8}s ease-in-out infinite`,
                animationDelay: `${(avatar.id * 0.25) % 3}s`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={avatar.src}
                alt={`Community Member ${avatar.id}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* Center Main Heading */}
        <Reveal delay={0.1} className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-white text-center">
            Building the Future <span className="text-rose-500">Technology Workforce</span>
          </h1>
        </Reveal>

      </div>

      {/* Bottom black blur fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none z-20" />
    </section>
  );
}
