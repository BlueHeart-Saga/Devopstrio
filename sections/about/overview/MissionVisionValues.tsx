"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  {
    id: "mission",
    word: "MISSION",
    title: "OUR MISSION",
    side: "right",
    isVertical: false,
    shiftClass: "translate-x-10 sm:translate-x-16",
    description:
      "To empower enterprises by simplifying complex technology into intelligent, AI-driven cloud ecosystems. We partner with leaders to accelerate innovation across AI, Cloud, DevOps, and modern software engineering.",
  },
  {
    id: "vision",
    word: "VISION",
    title: "OUR VISION",
    side: "left",
    isVertical: true,
    shiftClass: "-translate-x-8 sm:-translate-x-12",
    description:
      "To become a leading global IT support and engineering service provider known for innovation, reliability, and customer-centric solutions. Architecting a future where software never fails through AI intelligence and human creativity.",
  },
  {
    id: "values",
    word: "VALUES",
    title: "OUR VALUES",
    side: "right",
    isVertical: false,
    shiftClass: "translate-x-8 sm:translate-x-12",
    description:
      "Leveraging technology to enable business transformation from strategy and design to cloud, AI, and DevOps. Built on uncompromising integrity, engineering excellence, and client success.",
  },
  {
    id: "goals",
    word: "GOALS",
    title: "OUR GOALS",
    side: "left",
    isVertical: true,
    shiftClass: "-translate-x-8 sm:-translate-x-12",
    description:
      "Delivering zero-downtime migrations, sub-10ms real-time AI processing, and 99.999% platform availability while building resilient, future-ready enterprise architectures worldwide.",
  },
];

export function MissionVisionValues() {
  return (
    <section className="w-full py-0 md:py-4 bg-black text-white relative overflow-hidden select-none font-sans">
      {/* Background radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* ── ISOMETRIC 3D SCENE CONTAINER ── */}
        <div className="py-4 md:py-8 flex justify-center items-center">

          {/* Main isometric parent transform */}
          <div
            className="relative w-full max-w-5xl space-y-12 sm:space-y-16 md:space-y-20 origin-center transition-transform duration-700"
            style={{
              transform: "rotate(-33deg) skewX(22deg)",
            }}
          >
            {items.map((item, idx) => {
              const isRight = item.side === "right";

              return (
                <Reveal key={item.id} delay={idx * 0.08}>
                  <div className="grid grid-cols-12 items-center gap-2 sm:gap-4 relative my-2 sm:my-4">

                    {/* LEFT TEXT BLOCK (for VISION and GOALS) — Straightened & Shifted Outward */}
                    <div className="col-span-4 flex justify-end">
                      {!isRight && (
                        <div
                          className="max-w-[220px] sm:max-w-[260px] text-right pr-4"
                          style={{ transform: "skewX(-22deg) rotate(33deg) translateX(-70px)" }}
                        >
                          <h3 className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-white font-mono border-b-2 border-white/90 pb-1 mb-2 inline-block">
                            {item.title}
                          </h3>
                          <p className="text-[10px] sm:text-xs text-zinc-300 leading-relaxed font-sans font-medium opacity-90">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CENTER 3D WORD BLOCK (STAGGERED ALIGNMENT) */}
                    <div className="col-span-4 text-center relative z-10">
                      <div className={`relative inline-block flex justify-center transition-transform duration-500 ${item.shiftClass}`}>
                        {/* Ghost / Reflection duplicate text behind */}
                        <span
                          aria-hidden="true"
                          className="absolute left-1 top-5 sm:top-7 text-5xl sm:text-7xl md:text-8xl lg:text-[105px] font-black tracking-tighter uppercase text-zinc-600/35 leading-none select-none pointer-events-none filter blur-[0.5px]"
                          style={{
                            writingMode: item.isVertical ? "vertical-rl" : "horizontal-tb",
                            textShadow: `
                              0px 1px 0 #555555,
                              0px 2px 0 #444444,
                              0px 3px 0 #333333,
                              0px 4px 0 #222222,
                              0px 5px 0 #111111,
                              0px 12px 20px rgba(0,0,0,0.95)
                            `,
                          }}
                        >
                          {item.word}
                        </span>

                        {/* Main White 3D Extruded Word */}
                        <h2
                          className="relative z-10 text-5xl sm:text-7xl md:text-8xl lg:text-[105px] font-black tracking-tighter uppercase text-white leading-none inline-block select-none"
                          style={{
                            writingMode: item.isVertical ? "vertical-rl" : "horizontal-tb",
                            textShadow: `
                              0px 1px 0 #aaaaaa,
                              0px 2px 0 #a0a0a0,
                              0px 3px 0 #969696,
                              0px 4px 0 #8c8c8c,
                              0px 5px 0 #828282,
                              0px 6px 0 #787878,
                              0px 7px 0 #6e6e6e,
                              0px 8px 0 #646464,
                              0px 9px 0 #5a5a5a,
                              0px 10px 0 #505050,
                              0px 11px 0 #464646,
                              0px 12px 0 #3c3c3c,
                              0px 13px 0 #323232,
                              0px 14px 0 #282828,
                              0px 15px 0 #1e1e1e,
                              0px 16px 0 #141414,
                              0px 17px 0 #0a0a0a,
                              0px 24px 35px rgba(0,0,0,0.95)
                            `,
                          }}
                        >
                          {item.word}
                        </h2>
                      </div>
                    </div>

                    {/* RIGHT TEXT BLOCK (for MISSION and VALUES) — Straightened & Shifted Outward */}
                    <div className="col-span-4 flex justify-start">
                      {isRight && (
                        <div
                          className="max-w-[220px] sm:max-w-[260px] text-left pl-4"
                          style={{ transform: "skewX(-22deg) rotate(33deg) translateX(70px)" }}
                        >
                          <h3 className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-white font-mono border-b-2 border-white/90 pb-1 mb-2 inline-block">
                            {item.title}
                          </h3>
                          <p className="text-[10px] sm:text-xs text-zinc-300 leading-relaxed font-sans font-medium opacity-90">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}



