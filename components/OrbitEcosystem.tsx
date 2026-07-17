"use client";

import React from "react";
import Image from "next/image";

interface OrbitNode {
  name: string;
  logo: string;
}

interface OrbitEcosystemProps {
  nodes: OrbitNode[];
  centerLogo: string;
}

export function OrbitEcosystem({ nodes, centerLogo }: OrbitEcosystemProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[4/3] flex items-center justify-center overflow-hidden p-4 sm:p-8">
      {/* Ambient particles */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      
      {/* Centered Orbit System */}
      <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        
        {/* Spinning Dashed Ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-zinc-700/80 animate-[spin_60s_linear_infinite]" />

        {/* Spinning Nodes Layer */}
        <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
          {nodes.map((node, idx) => {
            const angle = (360 / nodes.length) * idx;
            return (
              <div
                key={idx}
                className="absolute inset-0 pointer-events-none"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                {/* Node Anchor at Top Edge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                  {/* Static counter-rotation so node is initially upright */}
                  <div style={{ transform: `rotate(-${angle}deg)` }}>
                    {/* Continuous reverse spin so node STAYS upright while the layer spins */}
                    <div className="flex flex-col items-center gap-3 group cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center p-1 sm:p-2 transition-transform duration-300 group-hover:scale-110 relative">
                        <div className="relative w-full h-full bg-[#030303] rounded-full">
                          <Image
                            src={node.logo}
                            alt={node.name}
                            fill
                            className="object-contain opacity-100 drop-shadow-md p-2"
                            unoptimized
                          />
                        </div>
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-zinc-400 group-hover:text-white transition-colors tracking-wide whitespace-nowrap bg-[#030303] px-3 py-1 rounded-full shadow-[0_0_10px_rgba(3,3,3,1)]">
                        {node.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Central Hub */}
      <div className="relative z-20 flex flex-col items-center justify-center pointer-events-auto">
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center p-2 relative group cursor-pointer hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          <div className="relative w-full h-full">
            <Image
              src={centerLogo}
              alt={centerLogo.includes("logo") ? "Central Hub" : centerLogo}
              fill
              className="object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              unoptimized
            />
          </div>
        </div>
        <div className="mt-4 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 font-bold bg-[#030303] px-3 py-1 rounded-full">
          Relay Hub
        </div>
      </div>
    </div>
  );
}
