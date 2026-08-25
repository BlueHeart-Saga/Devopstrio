"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface ServiceOverviewProps {
  title: string;
  subtitle: string;
  image: string;
  overviewHeading: string;
  overviewDesc1: React.ReactNode;
  overviewDesc2: React.ReactNode;
}

function getOverviewImage(title: string, incomingImage?: string): string {
  if (incomingImage && incomingImage.includes("/assets/Services-Page/Capability-Overview-section-images/")) {
    return incomingImage;
  }

  const overviewImages = [
    "/webp/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/Frame-368.webp",
    "/webp/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/Frame-369.webp",
    "/webp/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/Frame-370.webp",
    "/webp/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/Frame-371.webp",
    "/webp/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/Frame-372.webp",
    "/webp/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/Frame-373.webp",
    "/webp/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/Frame-374.webp",
    "/webp/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/Frame-375.webp",
    "/webp/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/Frame-376.webp",
    "/webp/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/Frame-377.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-107.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-108.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-110.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-111.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-112.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-113.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-114.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-115.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-116.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-117.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-118.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-119.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-120.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-121.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-303.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-304.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-305.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-306.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-307.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-308.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-309.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-310.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-311.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-312.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-313.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-314.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-315.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-316.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-317.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-318.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-319.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-329.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-331.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-332.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-333.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-334.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-335.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-336.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-337.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-338.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-339.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-340.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-341.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-355.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-356.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-357.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-358.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-359.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-360.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-361.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-362.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-363.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-364.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-365.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-366.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-367.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-420.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-434.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-435.webp",
    "/webp/assets/Services-Page/Capability-Overview-section-images/reorder/Frame-436.webp"
  ];

  let hash = 5381;
  const str = (title || "") + (incomingImage || "");
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }

  return overviewImages[Math.abs(hash) % overviewImages.length];
}

export function ServiceOverview({
  title,
  subtitle,
  image,
  overviewHeading,
  overviewDesc1,
  overviewDesc2,
}: ServiceOverviewProps) {
  const displayImage = getOverviewImage(title, image);

  return (
    <section id="overview" className="w-full py-16 bg-[#030303] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

        <Reveal>
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">

            {/* Background Glow */}
            <div className="absolute inset-0">
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-rose-600/10 blur-[120px]" />
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-rose-600/5 blur-[120px]" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-0">

              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6 text-white font-sans">
                  Transforming operations with <span className="text-rose-500 font-semibold">{title}</span>
                </h2>

                {/* <div className="space-y-4 text-zinc-200 text-xs md:text-sm font-semibold leading-relaxed">
                  <p className="border-l-2 border-rose-500/50 pl-4">
                    {subtitle}
                  </p>
                  <p className="border-l-2 border-white/10 pl-4 text-zinc-400">
                    We deploy custom automated architectures, low-latency deployment vectors, and security controls built to drive innovation and resilience across your digital products.
                  </p>
                </div> */}
              </div>

              {/* RIGHT IMAGE */}
              <div className="p-4 md:p-6 flex items-center justify-center bg-zinc-950/20 border-t lg:border-t-0 lg:border-l border-white/5">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group/img">
                  <img src={displayImage}
                    alt={title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover/img:scale-[1.02] pointer-events-none select-none"
                  loading="lazy" />
                  {/* Subtle glow/reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-transparent pointer-events-none" />
                </div>
              </div>

            </div>

          </div>
        </Reveal>

        {/* Deep Dive Section */}
        <div className="mt-20 w-full relative z-10">
          <Reveal delay={0.15}>
            {/* Center Main Heading */}
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-white font-sans">
                {overviewHeading}
              </h3>
            </div>

            {/* Centered Professional Paragraph Content Card */}
            <div className="relative max-w-5xl mx-auto p-8 md:p-12 rounded-[32px] border border-white/5 bg-zinc-950/20 backdrop-blur-md overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
             
              <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-rose-600/5 blur-[100px] pointer-events-none" />
              <div className="absolute -left-24 -top-24 w-80 h-80 bg-rose-600/5 blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-6 text-center">
                <p className="text-base md:text-lg lg:text-xl font-light text-zinc-100 leading-relaxed max-w-4xl mx-auto">
                  {overviewDesc1}
                </p>
                {/* <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-rose-500/40 to-transparent mx-auto my-2" />
                <p className="text-xs md:text-sm lg:text-base font-normal text-zinc-450 leading-relaxed max-w-3xl mx-auto">
                  {overviewDesc2}
                </p> */}
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
