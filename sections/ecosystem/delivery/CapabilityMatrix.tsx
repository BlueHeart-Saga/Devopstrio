"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Check, Minus } from "lucide-react";

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
    { location: "London W1", consulting: true, engineering: false, cloud: false, security: false, devops: false, support: true },
    { location: "Tennessee", consulting: true, engineering: false, cloud: false, security: false, devops: false, support: true },
    { location: "Bengaluru", consulting: false, engineering: true, cloud: true, security: true, devops: true, support: false },
    { location: "Chennai", consulting: false, engineering: false, cloud: true, security: true, devops: true, support: true },
    { location: "Thoothukudi", consulting: false, engineering: true, cloud: false, security: false, devops: true, support: true }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            LOCATION ABILITIES
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Delivery Capability <span className="text-rose-500">Matrix</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            A precise summary documenting the technical and consulting capabilities assigned to each delivery hub.
          </p>
        </Reveal>

        <div className="max-w-4xl mx-auto overflow-x-auto border border-zinc-900 rounded-3xl bg-zinc-950/45">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-zinc-900 font-mono text-zinc-500 uppercase tracking-widest text-[9px] font-bold">
                <th className="p-6">Location</th>
                <th className="p-6 text-center">Consulting</th>
                <th className="p-6 text-center">Engineering</th>
                <th className="p-6 text-center">Cloud</th>
                <th className="p-6 text-center">Security</th>
                <th className="p-6 text-center">DevOps</th>
                <th className="p-6 text-center">Support</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900 font-medium">
              {matrix.map((row) => (
                <tr key={row.location} className="hover:bg-zinc-900/10 transition-colors">
                  <td className="p-6 font-bold text-white uppercase tracking-wider text-[10px]">{row.location}</td>
                  
                  <td className="p-6 text-center">
                    {row.consulting ? <Check size={14} className="text-rose-500 mx-auto" /> : <Minus size={14} className="text-zinc-700 mx-auto" />}
                  </td>
                  <td className="p-6 text-center">
                    {row.engineering ? <Check size={14} className="text-rose-500 mx-auto" /> : <Minus size={14} className="text-zinc-700 mx-auto" />}
                  </td>
                  <td className="p-6 text-center">
                    {row.cloud ? <Check size={14} className="text-rose-500 mx-auto" /> : <Minus size={14} className="text-zinc-700 mx-auto" />}
                  </td>
                  <td className="p-6 text-center">
                    {row.security ? <Check size={14} className="text-rose-500 mx-auto" /> : <Minus size={14} className="text-zinc-700 mx-auto" />}
                  </td>
                  <td className="p-6 text-center">
                    {row.devops ? <Check size={14} className="text-rose-500 mx-auto" /> : <Minus size={14} className="text-zinc-700 mx-auto" />}
                  </td>
                  <td className="p-6 text-center">
                    {row.support ? <Check size={14} className="text-rose-500 mx-auto" /> : <Minus size={14} className="text-zinc-700 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
