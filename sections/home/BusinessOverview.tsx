// "use client";

// import React from "react";
// import { Reveal } from "@/components/ui/Reveal";
// import { ArrowUpRight } from "lucide-react";

// export function BusinessOverview() {
//   return (
//     <section className="w-full py-20 bg-[#030303] text-white relative">
//       <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">

//         {/* Top Header & Overview */}
//         <Reveal className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 p-8 md:p-12 lg:p-16 rounded-[2.5rem] border border-zinc-800/40 bg-zinc-950/20 overflow-hidden shadow-2xl">

//           {/* Microsoft Fluent-Style Calm Mesh/Wave Background */}
//           <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//             {/* Deep base color to maintain readability */}
//             <div className="absolute inset-0 bg-[#030303]/80" />

//             {/* Soft glowing abstract waves */}
//             <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[70%] bg-rose-600/15 rounded-full blur-[140px] mix-blend-screen transition-all duration-1000" />
//             <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[80%] bg-indigo-600/15 rounded-full blur-[150px] mix-blend-screen transition-all duration-1000" />
//             <div className="absolute top-[20%] left-[20%] w-[50%] h-[50%] bg-blue-900/15 rounded-full blur-[120px] opacity-70 mix-blend-screen transition-all duration-1000" />

//             {/* Top glass border reflection */}
//             <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
//           </div>

//           <div className="lg:col-span-7 relative z-10">
//             <div className="flex items-center gap-2 mb-4">
//               <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
//                 BUSINESS OVERVIEW
//               </span>
//             </div>
//             <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-8">
//               Transforming Businesses Through Cloud, AI & Digital Innovation
//             </h2>

//             <div className="space-y-6 text-zinc-200 font-medium text-base md:text-[17px] leading-[1.7] mb-8">
//               <p>
//                 Devopstrio is a global technology consulting and digital engineering company headquartered in London, with delivery centres across the United Kingdom, United States, and India. We help organizations accelerate growth, modernize infrastructure, and unlock new opportunities through Cloud, Artificial Intelligence, Data Engineering, DevOps, Cybersecurity, and Enterprise Applications.
//               </p>
//               <p>
//                 From cloud modernization and AI-driven transformation to enterprise application development and managed services, we partner with clients throughout their entire digital journey—from strategy and architecture to implementation, optimization, and ongoing support.
//               </p>
//             </div>

//             <a
//               href="#capabilities"
//               className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-500 hover:text-rose-400 transition-colors uppercase tracking-wider"
//             >
//               Explore Our Services <ArrowUpRight size={14} />
//             </a>
//           </div>

//           <div className="lg:col-span-5 flex flex-col gap-8 relative z-10 lg:mt-8">
//             <div className="bg-black border border-zinc-900 rounded-2xl p-8 md:p-10 relative overflow-hidden group shadow-2xl">
//               {/* Wave Background */}
//               <img
//                 src="/assets/wavebg/homepage/overview.png"
//                 alt="Mission Background"
//                 className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-700 group-hover:scale-105 pointer-events-none"
//               />
//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent pointer-events-none" />

//               <h3 className="text-xs font-mono tracking-widest text-zinc-400 group-hover:text-rose-500 transition-colors uppercase mb-4 relative z-10">
//                 Mission Statement
//               </h3>
//               <p className="text-white text-base md:text-lg font-bold leading-relaxed relative z-10 italic">
//                 "To help organizations accelerate innovation and achieve operational excellence through cloud, AI, automation, and data-driven transformation while delivering measurable business value and sustainable growth."
//               </p>
//             </div>

//             <div className="space-y-6 text-zinc-200 font-medium text-[15px] md:text-base leading-[1.7] px-2">
//               <p>
//                 Our multi-cloud expertise across Microsoft Azure, AWS, and Google Cloud helps organizations innovate faster while maximizing performance, security, and cost efficiency.
//               </p>
//               <p>
//                 Today, Devopstrio supports enterprises worldwide through a global delivery model, combining innovation, automation, and engineering excellence to deliver sustainable business value and long-term success.
//               </p>
//             </div>
//           </div>
//         </Reveal>

//         {/* Value Proposition Cards */}
//         <Reveal>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 lg:mt-0">
//             {/* Card 1 */}
//             <div className="group relative border border-zinc-900 bg-zinc-950/20 hover:bg-zinc-950/60 rounded-2xl p-8 lg:p-10 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[280px]">
//               <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <div className="relative z-10">
//                 <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-4">
//                   Your Growth, Our Priority
//                 </h3>
//                 <p className="text-zinc-200 font-medium text-[15px] leading-relaxed mb-8">
//                   We align our technical expertise with your goals, ensuring every pipeline and cloud configuration directly contributes to your bottom-line success.
//                 </p>
//               </div>
//               <a href="#impact" className="relative z-10 inline-flex items-center gap-2 text-sm font-medium text-rose-500 hover:text-rose-400 transition-colors w-fit">
//                 Learn More <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//               </a>
//             </div>

//             {/* Card 2 */}
//             <div className="group relative border border-zinc-900 bg-zinc-950/20 hover:bg-zinc-950/60 rounded-2xl p-8 lg:p-10 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[280px]">
//               <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <div className="relative z-10">
//                 <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-4">
//                   Innovating for Your Success
//                 </h3>
//                 <p className="text-zinc-200 font-medium text-[15px] leading-relaxed mb-8">
//                   By integrating predictive AI checks and zero-trust security compliance directly into your CI/CD cycles, we deliver cutting-edge continuous innovation by default.
//                 </p>
//               </div>
//               <a href="#capabilities" className="relative z-10 inline-flex items-center gap-2 text-sm font-medium text-rose-500 hover:text-rose-400 transition-colors w-fit">
//                 Learn More <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//               </a>
//             </div>
//           </div>
//         </Reveal>

//         {/* Quote Section */}
//         <Reveal>
//           <div className="mt-16 md:mt-24 relative max-w-4xl mx-auto text-center px-8 md:px-0">
//             <span className="absolute -top-10 left-0 md:-left-8 text-7xl md:text-9xl font-serif text-rose-500 opacity-90 leading-none select-none pointer-events-none">
//               &ldquo;
//             </span>
//             <p className="text-xl md:text-[26px] font-bold text-zinc-200 leading-[1.6] tracking-wide relative z-10">
//               Three pillars form our strength—People, Process, and Technology. Three domains shape our focus—Cloud, Data, and AI. Across Azure, AWS, and GCP, we bring innovation to life. At Devopstrio, we unite DevOps and automation to modernise infrastructure and accelerate digital success.
//             </p>
//             <span className="absolute -bottom-16 right-0 md:-right-8 text-7xl md:text-9xl font-serif text-rose-500 opacity-90 leading-none select-none pointer-events-none">
//               &rdquo;
//             </span>
//           </div>
//         </Reveal>

//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function BusinessOverview() {
  return (
    <section className="w-full pt-8 pb-24 bg-[#030303] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

        <Reveal>
          <div className="group relative overflow-hidden rounded-[32px] border border-zinc-800/60 bg-zinc-950/30 backdrop-blur-xl">

            {/* Background Glow */}
            <div className="absolute inset-0">
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-rose-600/10 blur-[120px]" />
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px]" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-0">

              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">

                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-8">
                  Business Overview
                </span>

                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold leading-tight tracking-tight mb-4">
                  Transforming Businesses Through
                  <span className="block text-[#E11D48] mt-1">
                    Cloud, AI &amp; Digital Innovation
                  </span>
                </h2>

                <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mb-6">
                  Devopstrio is a global technology consulting and engineering
                  company helping enterprises modernize infrastructure,
                  accelerate innovation, build intelligent platforms, and scale
                  digital transformation through Cloud, AI, Data, DevOps,
                  Cybersecurity, and Product Engineering.
                </p>



                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-white font-semibold group/link w-fit"
                >
                  Explore Capabilities
                  <span className="w-9 h-9 rounded-full bg-[#E11D48] flex items-center justify-center transition-transform duration-300 group-hover/link:translate-x-1">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </div>

              {/* RIGHT IMAGE */}
              <div className="p-2.5 md:p-3.5 flex items-center justify-center bg-zinc-950/20 border-t lg:border-t-0 lg:border-l border-zinc-900/60">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl group/img">
                  <img
                    src="/assets/Home-page/business-overview/overview-lifestyle.png"
                    alt="Devopstrio Digital Transformation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-[1.02]"
                  />
                  {/* Subtle glow/reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}