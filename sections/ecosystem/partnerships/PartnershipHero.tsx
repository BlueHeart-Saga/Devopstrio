"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Zap, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PartnershipHero() {


  // Back row (Furthest, 8 cards)
  const rowBack = [
    { name: "IBM Cloud", src: "/assets/Tech_logos/IBM_Cloud.svg" },
    { name: "Alibaba", src: "/assets/Tech_logos/Alibaba_cloud.svg" },
    { name: "Nutanix", src: "/assets/Tech_logos/Nutinix.svg" },
    { name: "Akamai", src: "/assets/Tech_logos/Akamai.svg" },
    { name: "DigitalOcean", src: "" },
    { name: "HashiCorp", src: "/assets/Tech_logos/HashiCorp.svg" },
    { name: "Rancher", src: "" },
    { name: "OpenShift", src: "" }
  ];

  // Middle row (Intermediate density - 10 cards)
  const rowMiddle = [
    { name: "VMware", src: "/assets/Tech_logos/vmware.svg" },
    { name: "Kubernetes", src: "/assets/Tech_logos/Kubernetes.svg" },
    { name: "Jenkins", src: "/assets/Tech_logos/Jenkins.svg" },
    { name: "Datadog", src: "/assets/Tech_logos/Datadog.svg" },
    { name: "New Relic", src: "/assets/Tech_logos/New_Relic.svg" },
    { name: "Dynatrace", src: "/assets/Tech_logos/Dynatrace.svg" },
    { name: "PagerDuty", src: "/assets/Tech_logos/PagerDuty.svg" },
    { name: "Confluent", src: "/assets/Tech_logos/Confluent.svg" },
    { name: "Elastic", src: "/assets/Tech_logos/Elastic.svg" },
    { name: "Cloudera", src: "/assets/Tech_logos/Cloudera.svg" }
  ];

  // Front row (Densest, closest - 12 cards)
  const rowFront = [
    { name: "AWS", src: "/assets/Tech_logos/AWS.svg" },
    { name: "Azure", src: "/assets/Tech_logos/Microsoft-Azure.svg" },
    { name: "GCP", src: "/assets/Tech_logos/Google_Cloud.svg" },
    { name: "Oracle", src: "/assets/Tech_logos/Oracle_Cloud.svg" },
    { name: "Red Hat", src: "/assets/Tech_logos/red_hat.svg" },
    { name: "Cloudflare", src: "/assets/Tech_logos/Cloud_flaire.svg" },
    { name: "Docker", src: "/assets/Tech_logos/Docker.svg" },
    { name: "GitLab", src: "/assets/Tech_logos/GitLab.svg" },
    { name: "GitHub", src: "/assets/Tech_logos/GitHub.svg" },
    { name: "Snowflake", src: "/assets/Tech_logos/Snowflake.svg" },
    { name: "Databricks", src: "/assets/Tech_logos/Databricks.svg" },
    { name: "MongoDB", src: "/assets/Tech_logos/MongoDB.svg" }
  ];

  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-between bg-black overflow-hidden pt-28 border-b border-zinc-900/60">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />
      
      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Content Area */}
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center text-center flex-grow justify-center pt-8">
        
        {/* Center Main Heading & Subtitle */}
        <Reveal className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 text-rose-500 text-xs font-mono font-bold tracking-wider uppercase mb-6">
            {/* <Zap size={12} className="animate-pulse" /> */}
            Devopstrio Cloud Ecosystem
          </div>
        </Reveal>

        <Reveal delay={0.1} className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5 text-white text-center">
            Built on Trusted Cloud Partnerships
          </h1>
        </Reveal>

        <Reveal delay={0.2} className="max-w-3xl">
          <p className="text-zinc-350 text-xs md:text-sm lg:text-base leading-relaxed font-normal max-w-3xl text-center mx-auto opacity-95 mb-12">
            We work with leading <Link href="/ecosystem/partnerships" className="text-rose-500 hover:underline font-bold">cloud platform partners</Link> and <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">DevOps services</Link> providers to build secure, scalable, and future-ready digital solutions.
          </p>
        </Reveal>

        {/* 3D Perspective Floating Integration Grid with Depth Scaling */}
        <div className="relative w-full max-w-[950px] h-[360px] flex items-center justify-center overflow-hidden mb-20">
          <div 
            className="relative w-full flex flex-col gap-6"
            style={{
              perspective: "1200px",
              transform: "rotateX(24deg) rotateY(0deg) rotateZ(0deg)",
              WebkitBoxReflect: "below 4px linear-gradient(transparent, transparent 60%, rgba(0,0,0,0.18))"
            }}
          >
            {/* Row 3 (FURTHEST - BACK - 8 Cards) */}
            <div className="flex justify-center gap-4 scale-[0.75] opacity-40 blur-[0.4px] translate-y-3">
              {rowBack.map((item) => (
                <div
                  key={item.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/5 flex items-center justify-center shadow-xl hover:bg-white/10 hover:border-white/10 hover:shadow-[0_8px_30px_rgba(225,29,72,0.15)] transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-white/[0.04] pointer-events-none" />
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    {item.src ? (
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-[10px] font-bold text-zinc-300 text-center leading-tight">
                        {item.name}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 (MIDDLE - INTERMEDIATE - 10 Cards) */}
            <div className="flex justify-center gap-4 scale-[0.88] opacity-70 translate-y-1">
              {rowMiddle.map((item) => (
                <div
                  key={item.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/5 flex items-center justify-center shadow-xl hover:bg-white/10 hover:border-white/10 hover:shadow-[0_8px_30px_rgba(225,29,72,0.15)] transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-white/[0.04] pointer-events-none" />
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    {item.src ? (
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-[10px] font-bold text-zinc-300 text-center leading-tight">
                        {item.name}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Row 1 (CLOSEST - FRONT - 12 Cards) */}
            <div className="flex justify-center gap-4 scale-[1.0] opacity-100 -translate-y-1">
              {rowFront.map((item) => (
                <div
                  key={item.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/5 flex items-center justify-center shadow-xl hover:bg-white/10 hover:border-white/10 hover:shadow-[0_8px_30px_rgba(225,29,72,0.15)] transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-white/[0.04] pointer-events-none" />
                  <div className="relative w-full h-full flex items-center justify-center p-2 filter group-hover:drop-shadow-[0_0_8px_rgba(244,63,94,0.3)] transition-all duration-300">
                    {item.src ? (
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-[10px] font-bold text-zinc-300 text-center leading-tight">
                        {item.name}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Bottom black blur fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20" />
    </section>
  );
}

