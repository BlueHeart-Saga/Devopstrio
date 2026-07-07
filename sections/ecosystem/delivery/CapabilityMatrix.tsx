"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "lucide-react";

interface MatrixRow {
  location: string;
  consulting: boolean;
  engineering: boolean;
  cloud: boolean;
  security: boolean;
  devops: boolean;
  support: boolean;
}

export function CapabilityMatrix() {
  const matrix: MatrixRow[] = [
    { location: "London HQ", consulting: true, engineering: true, cloud: true, security: true, devops: true, support: true },
    { location: "London Office", consulting: true, engineering: true, cloud: true, security: true, devops: true, support: true },
    { location: "Tennessee Office", consulting: true, engineering: true, cloud: true, security: true, devops: true, support: true },
    { location: "Bengaluru Office", consulting: true, engineering: true, cloud: true, security: true, devops: true, support: true },
    { location: "Chennai Office", consulting: true, engineering: true, cloud: true, security: true, devops: true, support: true },
    { location: "Thoothukudi Office", consulting: true, engineering: true, cloud: true, security: true, devops: true, support: true }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Header */}
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            GLOBAL CAPABILITIES
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Delivery Capability <span className="text-rose-500">Matrix</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Unified service coverage mappings verifying operational ready states for consulting, engineering, and managed support across all nodes.
          </p>
        </Reveal>

        {/* Enterprise Table Container */}
        <div className="max-w-5xl mx-auto overflow-hidden border border-zinc-900 rounded-3xl bg-zinc-950/30 backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-900 bg-zinc-950/80 font-sans text-zinc-400 uppercase tracking-wider text-[10px] font-bold">
                  <th className="p-6 text-zinc-350">Delivery Node</th>
                  <th className="p-6 text-center text-zinc-350">Consulting</th>
                  <th className="p-6 text-center text-zinc-350">Engineering</th>
                  <th className="p-6 text-center text-zinc-350">Cloud Systems</th>
                  <th className="p-6 text-center text-zinc-350">SecOps</th>
                  <th className="p-6 text-center text-zinc-350">DevOps</th>
                  <th className="p-6 text-center text-zinc-350">24/7 Support</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/60 font-medium">
                {matrix.map((row) => (
                  <tr key={row.location} className="hover:bg-zinc-900/10 transition-colors duration-200">
                    {/* Location Name */}
                    <td className="p-6 font-bold text-white tracking-wide text-xs md:text-sm">
                      {row.location}
                    </td>

                    {/* Consulting */}
                    <td className="p-6 text-center">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                        <Check size={11} className="stroke-[3.5]" />
                      </div>
                    </td>

                    {/* Engineering */}
                    <td className="p-6 text-center">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                        <Check size={11} className="stroke-[3.5]" />
                      </div>
                    </td>

                    {/* Cloud Systems */}
                    <td className="p-6 text-center">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                        <Check size={11} className="stroke-[3.5]" />
                      </div>
                    </td>

                    {/* SecOps */}
                    <td className="p-6 text-center">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                        <Check size={11} className="stroke-[3.5]" />
                      </div>
                    </td>

                    {/* DevOps */}
                    <td className="p-6 text-center">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                        <Check size={11} className="stroke-[3.5]" />
                      </div>
                    </td>

                    {/* 24/7 Support */}
                    <td className="p-6 text-center">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                        <Check size={11} className="stroke-[3.5]" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
