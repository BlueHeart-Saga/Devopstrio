"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

export function TalentNetwork() {
  return (
    <section id="talent-network" className="w-full py-24 bg-black text-white relative overflow-hidden border-b border-zinc-900/60">
      {/* Background ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(225,29,72,0.04),transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-12 xl:px-8 text-center relative z-10">
        <Reveal>
          <div className="relative mb-6">
            {/* Top-to-bottom arrow PNG */}
            {/* <div className="flex justify-center mb-3 pointer-events-none select-none">
              <img src="/assets/components/streight-toptobuttm.png"
                alt="Arrow indicator"
                className="w-8 sm:w-10 h-auto object-contain filter drop-shadow-[0_0_12px_rgba(244,63,94,0.4)]"
              loading="lazy" />
            </div> */}

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
              Ready to build{" "}
              <span className="bg-rose-500 text-white font-semibold px-4 py-1 mx-1 rounded-xl inline-block">
                what&apos;s next?
              </span>
            </h2>
          </div>

          {/* <p className="text-white text-xs md:text-sm font-semibold leading-relaxed max-w-xl mx-auto mb-12">
            Join a team passionate about innovation, engineering excellence, and creating meaningful impact for organizations worldwide. Review our <Link href="/services" className="text-rose-500 hover:underline font-bold">services overview</Link> and submit your resume below to join our talent network database.
          </p> */}
        </Reveal>

        {/* Premium Form CTA Card */}
        {/* Premium Inline Form CTA */}
        <Reveal delay={0.1}>
          <div className="bg-[#0a0a0a] border border-zinc-800/80 rounded-2xl md:rounded-full p-2 md:p-2.5 max-w-4xl mx-auto relative shadow-2xl transition-all duration-300 focus-within:border-rose-500/50 focus-within:shadow-[0_0_40px_rgba(225,29,72,0.15)] group">
            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! You have joined our Talent Network.");
              }}
              className="flex flex-col md:flex-row items-center gap-2 md:gap-0 w-full"
            >
              {/* Full Name Input */}
              <div className="flex-1 flex items-center w-full md:w-auto px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-zinc-800">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="bg-transparent border-none outline-none text-white placeholder:text-zinc-500 w-full text-sm md:text-base font-semibold"
                />
              </div>

              {/* Email Input */}
              <div className="flex-1 flex items-center w-full md:w-auto px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-zinc-800">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="bg-transparent border-none outline-none text-white placeholder:text-zinc-500 w-full text-sm md:text-base font-semibold"
                />
              </div>

              {/* Domain Select */}
              <div className="flex-1 flex items-center w-full md:w-auto px-4 py-3 md:py-2 md:mr-2">
                <select
                  required
                  defaultValue=""
                  className="bg-transparent border-none outline-none text-white w-full text-sm md:text-base font-semibold cursor-pointer focus:ring-0 [&>option]:bg-zinc-900"
                >
                  <option value="" disabled>Select Domain</option>
                  <option value="cloud">Cloud Engineering</option>
                  <option value="ai">AI & Data</option>
                  <option value="devops">DevOps & SRE</option>
                  <option value="sec">Cybersecurity</option>
                  <option value="dev">Software Engineering</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 rounded-xl md:rounded-full text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-500 transition-all shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] hover:-translate-y-0.5"
              >
                <span>Join Network</span>
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
