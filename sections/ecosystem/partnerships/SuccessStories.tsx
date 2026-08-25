"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, CheckCircle2, TrendingUp, Cpu } from "lucide-react";
import Link from "next/link";

interface Story {
  title: string;
  partner: string;
  desc: string;
  results: { value: string; label: string }[];
  logo: string;
}

export function SuccessStories() {
  const stories: Story[] = [
    {
      title: "Global Healthcare Platform Scale",
      partner: "Microsoft Azure",
      desc: "Migrating legacy patient record databases to Azure compliance boundaries, securing fast latency and HIPAA alignment.",
      logo: "/assets/Home-page/Techtools/MSAzure.svg",
      results: [
        { value: "70%", label: "Faster Deployment" },
        { value: "40%", label: "Lower Infrastructure Cost" },
        { value: "99.99%", label: "System Availability" }
      ]
    },
    {
      title: "Financial Ledger High-Throughput Engine",
      partner: "Amazon Web Services",
      desc: "Re-engineering transactional databases into severless Lambda operations to sustain 50,000+ operations per second spikes.",
      logo: "/assets/Home-page/Techtools/aws-color.svg",
      results: [
        { value: "5x", label: "Throughput Capacity" },
        { value: "45%", label: "Operational Savings" },
        { value: "<25ms", label: "Average Transaction Delay" }
      ]
    }
  ];

  return (
    <section id="success-stories" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CLIENT OUTCOMES
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Partner-Powered <span className="text-rose-500">Success Stories</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Real outcomes co-engineered with our technology partners to modernize global operations.
          </p> */}
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div
              key={story.title}
              className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between hover:border-rose-500/20 transition-all duration-300 min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-zinc-900/60 pb-4">
                  <div className="flex items-center gap-3">
                    <img src={story.logo} alt={story.partner} className="h-6 w-auto object-contain" loading="lazy" />
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">
                      {story.partner} Alliance
                    </span>
                  </div>
                </div>

                <h3 className="text-base md:text-lg font-semibold text-white uppercase tracking-wider mb-3">{story.title}</h3>
                {/* <p className="text-sm text-zinc-300 font-medium leading-relaxed mb-8">
                  {story.desc}
                </p> */}
              </div>

              {/* Results metrics */}
              <div className="grid grid-cols-3 gap-4 border-t border-zinc-900/60 pt-6 mt-auto">
                {story.results.map((res) => (
                  <div key={res.label}>
                    <div className="text-lg md:text-xl font-semibold text-rose-500 mb-0.5">{res.value}</div>
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider leading-tight">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
