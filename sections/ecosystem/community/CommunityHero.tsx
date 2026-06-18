"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CommunityHero() {
  const avatars = [
    // Center Focus (Large, sharp)
    { id: 1, x: 0, y: 0, size: 76, filter: "none", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" },
    
    // Ring 1 (Radius 52px, slightly smaller, very minor blur)
    { id: 2, x: 0, y: -52, size: 56, filter: "blur(0.4px)", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
    { id: 3, x: 52, y: 0, size: 56, filter: "blur(0.4px)", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
    { id: 4, x: 0, y: 52, size: 56, filter: "blur(0.4px)", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
    { id: 5, x: -52, y: 0, size: 56, filter: "blur(0.4px)", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80" },
    
    // Ring 2 (Radius 104px, medium size, medium blur)
    { id: 6, x: -73, y: -73, size: 44, filter: "blur(1.2px)", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80" },
    { id: 7, x: 73, y: -73, size: 44, filter: "blur(1.2px)", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" },
    { id: 8, x: 73, y: 73, size: 44, filter: "blur(1.2px)", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80" },
    { id: 9, x: -73, y: 73, size: 44, filter: "blur(1.2px)", src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&auto=format&fit=crop&q=80" },
    { id: 10, x: 0, y: -104, size: 44, filter: "blur(1.2px)", src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80" },
    { id: 11, x: 104, y: 0, size: 44, filter: "blur(1.2px)", src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80" },
    { id: 12, x: 0, y: 104, size: 44, filter: "blur(1.2px)", src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80" },
    { id: 13, x: -104, y: 0, size: 44, filter: "blur(1.2px)", src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&auto=format&fit=crop&q=80" },

    // Ring 3 (Radius 150px, smallest size, highest blur)
    { id: 14, x: -106, y: -106, size: 34, filter: "blur(2.5px)", src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=80" },
    { id: 15, x: 106, y: -106, size: 34, filter: "blur(2.5px)", src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
    { id: 16, x: 106, y: 106, size: 34, filter: "blur(2.5px)", src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" },
    { id: 17, x: -106, y: 106, size: 34, filter: "blur(2.5px)", src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100&auto=format&fit=crop&q=80" },
    { id: 18, x: -150, y: 0, size: 34, filter: "blur(2.5px)", src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&auto=format&fit=crop&q=80" },
    { id: 19, x: 150, y: 0, size: 34, filter: "blur(2.5px)", src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100&auto=format&fit=crop&q=80" },
    { id: 20, x: 0, y: -150, size: 34, filter: "blur(2.5px)", src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" },
    { id: 21, x: 0, y: 150, size: 34, filter: "blur(2.5px)", src: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&auto=format&fit=crop&q=80" },
  ];

  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-16 border-b border-zinc-900/60">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Circular Face Cluster representing Community Network */}
        <div className="relative w-[340px] h-[340px] flex items-center justify-center mb-10 select-none">
          {/* Orbital lines */}
          <div className="absolute w-[104px] h-[104px] rounded-full border border-zinc-900/40 pointer-events-none" />
          <div className="absolute w-[208px] h-[208px] rounded-full border border-zinc-900/30 pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] rounded-full border border-zinc-900/20 pointer-events-none" />

          {avatars.map((avatar) => (
            <div
              key={avatar.id}
              className="absolute rounded-full border border-zinc-800 bg-zinc-950 overflow-hidden shadow-lg transition-all duration-300 hover:scale-125 hover:border-rose-500/40 hover:!filter-none hover:z-30 cursor-pointer"
              style={{
                width: avatar.size,
                height: avatar.size,
                left: `calc(50% + ${avatar.x}px - ${avatar.size / 2}px)`,
                top: `calc(50% + ${avatar.y}px - ${avatar.size / 2}px)`,
                filter: avatar.filter,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={avatar.src}
                alt={`Community Member ${avatar.id}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Center Main Heading & Description */}
        <Reveal delay={0.2} className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5 text-white text-center">
            Building the Future Technology Workforce
          </h1>
        </Reveal>

        <Reveal delay={0.3} className="max-w-2xl">
          <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-normal max-w-3xl text-center mx-auto opacity-95 mb-10">
            Connecting engineers, architects, students, innovators, researchers, and industry leaders through a global ecosystem of learning, collaboration, and career growth.
          </p>
        </Reveal>

        {/* Join Now Pill Button */}
        <Reveal delay={0.4}>
          <Link
            href="#framework"
            className="inline-flex items-center gap-3.5 pl-6 pr-2 py-2 bg-white text-black font-semibold text-xs tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Join Our Network
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </Reveal>

      </div>

      {/* Bottom black blur fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none z-20" />
    </section>
  );
}
