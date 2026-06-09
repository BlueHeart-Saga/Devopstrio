"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function CompanyIntro() {
  return (
    <section className="w-full py-10 md:py-16 bg-black text-white relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-950/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-rose-900/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">

        {/* ========================================================================= */}
        {/* Headline & Paragraph                                                      */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <Reveal>
            <span className="inline-block px-3.5 py-1.5 text-rose-500 rounded-full text-[10px] font-extrabold tracking-widest uppercase mb-6">
              Company Overview
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              We build the intelligent <br />
              <span className="text-rose-500">digital foundations</span> that scale global innovation.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-bold max-w-3xl mx-auto">
              Devopstrio is a London-headquartered global technology company specialising in Cloud, AI, DevOps, and Enterprise Software. We partner with forward-thinking enterprises to modernise infrastructure, unlock new value, and accelerate digital success — quietly, precisely, and at scale.
            </p>
          </Reveal>
        </div>

        {/* ========================================================================= */}
        {/* Premium Redesigned Mockup Card                                           */}
        {/* ========================================================================= */}
        <Reveal delay={0.3}>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-zinc-800 bg-[#f4f4f5] text-zinc-900 mb-12">
            <div className="relative w-full overflow-hidden">
              <img
                src="/assets/About-page/team/image.png"
                alt="Devopstrio Engineering Team"
                className="w-full h-auto object-cover max-h-[350px]"
              />
            </div>
            {/* <div className="p-6 md:p-8 lg:p-10">
              <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 mb-8 tracking-tight">
                Our Global Engineering & Leadership Team
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-sm leading-relaxed text-zinc-600 font-medium">
                <div>
                  <p className="mb-4">
                    Devopstrio was founded with a singular mission: to bridge the gap between complex cloud architectures and real-world business outcomes. Operating from our headquarters in London and global delivery centers, we bring together senior cloud architects, data scientists, and DevOps practitioners who thrive on solving complex infrastructure challenges.
                  </p>
                  <p>
                    We do not believe in one-size-fits-all solutions. Instead, we build bespoke, secure, and highly scalable cloud platforms designed to align with strict compliance guidelines while empowering your developers to ship features with speed and complete confidence.
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    By partnering with forward-thinking enterprises, we help modernize legacy systems, implement fully automated CI/CD pipelines, and embed security controls directly into the software lifecycle. Our co-investment ODC model ensures that we are fully aligned with your success, delivering measurable cost-optimization, velocity, and absolute reliability.
                  </p>
                  <p>
                    From day-one architecture consulting to 24/7 continuous operations, we stand by our clients as their dedicated engineering partners.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-rose-500 font-bold text-sm tracking-wider uppercase transition-colors group"
            >
              Connect with our architects
              <span className="h-8 w-8 rounded-full border border-zinc-800 group-hover:border-rose-500/50 flex items-center justify-center text-zinc-400 group-hover:text-rose-500 transition-colors">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
