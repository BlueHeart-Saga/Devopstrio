"use client";

import React from "react";

interface SubpageChallengeProps {
  challenge: string;
  solution: string;
}

export function SubpageChallenge({ challenge, solution }: SubpageChallengeProps) {
  return (
    <section id="challenge" className="w-full py-24 bg-black border-b border-zinc-900/60 text-zinc-300">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
        <div className="bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4">
            THE TECHNICAL CHALLENGE
          </span>
          <p className="text-zinc-400 text-xs md:text-sm font-semibold leading-relaxed">
            {challenge}
          </p>
        </div>

        <div className="bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-emerald-500 block mb-4">
            JOINT SOLUTION APPROACH
          </span>
          <p className="text-zinc-400 text-xs md:text-sm font-semibold leading-relaxed">
            {solution}
          </p>
        </div>
      </div>
    </section>
  );
}
