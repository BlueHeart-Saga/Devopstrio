"use client";

import React from "react";

const trustSignals = [
  "24/7 Production Coverage",
  "Dedicated Principal SRE Support",
  "ISO 27001 Certified Environment",
  "SOC-2 Audited Infrastructure",
  "99.99% Database Cluster SLA"
];

export function TrustSignal() {
  return (
    <section className="w-full py-8 bg-[#030303] overflow-hidden" aria-label="Trust and credibility">
      <div className="flex whitespace-nowrap overflow-x-hidden relative w-full">
        <div className="flex gap-16 animate-marquee">
          {[...trustSignals, ...trustSignals, ...trustSignals].map((item, index) => (
            <span key={`${item}-${index}`} className="text-zinc-550 text-xs font-bold tracking-widest uppercase">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
