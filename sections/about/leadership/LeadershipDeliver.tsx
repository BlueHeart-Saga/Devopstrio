import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export const LeadershipDeliver = () => {
  return (
    <section
      id="leadership-deliver"
      className="pt-12 pb-0 sm:pt-16 sm:pb-0 bg-black text-white relative overflow-visible font-sans"
    >
      {/* Ambient Lighting & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.08),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-600/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 space-y-0 pb-0 mb-0">
        
        {/* Top Tagline with Left-Right Arrow indicator */}
        <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-6 relative z-40">
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4 font-sans leading-[1.45]">
                <span className="relative inline-block">
                  <div className="absolute -top-5 sm:-top-7 md:-top-8 -left-10 sm:-left-12 md:-left-16 z-20 pointer-events-none select-none">
                    <img src="/webp/assets/components/lefttoright.webp"
                      alt="Left-Right Arrow indicator"
                      className="w-10 sm:w-12 md:w-14 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                      loading="lazy" />
                  </div>
                  We
                </span>{" "}
                lead with{" "}
                <span className="bg-rose-500 text-white font-semibold px-4 py-1 mx-1.5 rounded-xl inline-block">
                  every pillar
                </span>{" "}
                of{" "}
                <span className="relative inline-block text-white px-1 mx-1 whitespace-nowrap">
                  <span className="text-white font-semibold relative z-10">engineering excellence</span>
                  <svg
                    className="absolute -bottom-4 left-0 w-full h-5 text-rose-500 pointer-events-none overflow-visible z-0"
                    viewBox="0 0 250 20"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 3 14 C 50 6, 130 17, 245 9"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      className="opacity-90 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                    />
                    <path
                      d="M 12 17 C 75 11, 165 18, 238 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeDasharray="6 3 14 4"
                      className="opacity-75 filter drop-shadow-[0_0_5px_rgba(244,63,94,0.4)]"
                    />
                  </svg>
                </span>
              </h2>
            </div>
          </Reveal>
        </div>

        {/* Big Size Leader Image (Backside) - Reduced Spacing Below Header Text */}
        <Reveal delay={0.15} className="w-full flex justify-center items-end leading-none p-0 m-0">
          <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center -mt-2 sm:-mt-4 md:-mt-6 z-20 pb-0 -mb-2 sm:-mb-3 md:-mb-4 lg:-mb-5">
            {/* Ambient Lighting Behind Image */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[700px] h-96 sm:h-[700px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

            {/* Big Size Leader Image (Sliding Down Into Next Section) */}
            <div className="relative z-20 w-full max-w-[400px] sm:max-w-[620px] md:max-w-[800px] lg:max-w-[960px] xl:max-w-[1080px] flex items-end justify-center leading-none">
              <img src="/webp/assets/About-page/leader/Mani-PS-REC-BG003.webp"
                alt="Mani - Leadership"
                className="block w-full h-auto object-contain align-bottom filter contrast-105 drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
                loading="lazy" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
