"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

export function ReferenceArchitectures() {
  return (
    <section id="delivery-stacks" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">

        <Reveal className="mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            REFERENCE ARCHITECTURES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Our standard <span className="text-rose-500">delivery stacks</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Stack 1 */}
          <Reveal className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 sm:p-8 hover:border-rose-500/30 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between min-h-[160px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />
              <div>
                <h3 className="text-base font-semibold text-white transition-colors mb-4">
                  Enterprise DevOps Stack
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900/60">
                {["Kubernetes", "Terraform", "AWS Cloud", "Docker Engine", "GitLab CI"].map((tag, i) => (
                  <span key={i} className="px-2 py-1 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 text-[9px] font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Stack 2 */}
          <Reveal delay={0.05} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 sm:p-8 hover:border-rose-500/30 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between min-h-[160px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />
              <div>
                <h3 className="text-base font-semibold text-white transition-colors mb-4">
                  SecOps & Vault Stack
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900/60">
                {["HashiCorp Vault", "Zero-Trust Auth", "SonarQube SAST", "OWASP", "IAM Roles"].map((tag, i) => (
                  <span key={i} className="px-2 py-1 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 text-[9px] font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Stack 3 */}
          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 sm:p-8 hover:border-rose-500/30 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between min-h-[160px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_75%)] pointer-events-none" />
              <div>
                <h3 className="text-base font-semibold text-white transition-colors mb-4">
                  Next-Gen AI / App Stack
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900/60">
                {["Next.js", "FastAPI MLOps", "React Engine", "Vite Bundler", "Node.js API"].map((tag, i) => (
                  <span key={i} className="px-2 py-1 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 text-[9px] font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
