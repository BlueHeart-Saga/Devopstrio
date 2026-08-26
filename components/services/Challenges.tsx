"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { getCapability } from "@/data/services";
import { capabilityRegistry } from "@/data/services/dynamic-capabilities";
import {
  ServiceCapabilityInfo,
  CapabilityDetail,
} from "@/data/services/types";

interface ChallengesProps {
  serviceSlug: string;
  capabilities: ServiceCapabilityInfo[];
}

export function Challenges({
  serviceSlug,
  capabilities,
}: ChallengesProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Get capabilities from registry
  const registryForService = capabilityRegistry[serviceSlug] || {};

  const registryCapabilities = Object.entries(
    registryForService
  ).map(([slug, item]) => ({
    slug,
    title: item.title,
    description: item.desc,
  }));

  // Fallback to passed capabilities
  const activeCapabilities =
    registryCapabilities.length > 0
      ? registryCapabilities
      : capabilities;

  // Active capability
  const activeCapInfo = activeCapabilities[activeIdx];

  const capDetail = activeCapInfo
    ? (getCapability(
        serviceSlug,
        activeCapInfo.slug
      ) as CapabilityDetail)
    : null;

  return (
    <section
      id="challenges"
      className="relative w-full overflow-hidden border-b border-zinc-900/60 bg-[#030303] py-4 md:py-6 lg:py-8"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.035),transparent_70%)] blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.03),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 xl:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <Reveal>
          <div className="mb-6 max-w-4xl md:mb-8">
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight text-white md:text-4xl lg:text-5xl">
              Overcoming critical bottlenecks to{" "}
              <span className="text-rose-500">
                enable growth
              </span>
            </h2>
          </div>
        </Reveal>

        {/* =====================================================
            CAPABILITY TABS
        ===================================================== */}
        <Reveal>
          <div className="mb-8 border-y border-zinc-900/80">
            <div
              className="
                flex
                overflow-x-auto
                border-t
                border-zinc-900/60
                [scrollbar-width:none]
                [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {activeCapabilities.map((cap, idx) => {
                const isActive = idx === activeIdx;

                return (
                  <button
                    key={cap.slug}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className="group relative flex min-w-max items-center gap-2.5 px-4 py-5 text-left transition-all duration-300 md:px-5 lg:px-6"
                  >
                    <span
                      className={`
                        text-sm font-semibold tracking-wide
                        transition-colors duration-300 sm:text-base md:text-lg
                        ${
                          isActive
                            ? "text-white"
                            : "text-zinc-500 group-hover:text-zinc-300"
                        }
                      `}
                    >
                      {cap.title}
                    </span>

                    <ChevronRight
                      size={16}
                      strokeWidth={1.8}
                      className={`
                        transition-all duration-300
                        ${
                          isActive
                            ? "translate-x-0.5 text-rose-500"
                            : "text-zinc-800 group-hover:translate-x-0.5 group-hover:text-zinc-500"
                        }
                      `}
                    />

                    {/* Active indicator */}
                    <span
                      className={`
                        absolute bottom-0 left-4 right-4 h-px
                        bg-rose-500 transition-all duration-300
                        md:left-5 md:right-5
                        lg:left-6 lg:right-6
                        ${
                          isActive
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            CHALLENGE + SOLUTION
            Content-driven height
        ===================================================== */}
        {capDetail && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">

            {/* =================================================
                CHALLENGE CARD
            ================================================= */}
            <Reveal>
              <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/70 p-7 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-zinc-700 md:p-9 lg:p-10">

                {/* Glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-red-500/[0.035] blur-3xl transition-all duration-500 group-hover:bg-red-500/[0.06]" />

                <div className="relative z-10">

                  {/* Card header */}
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-950/20 text-red-500">
                      <AlertCircle
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* <span className="font-mono text-xs font-semibold tracking-widest text-zinc-500">
                      01 / CHALLENGE
                    </span> */}
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold uppercase tracking-wider text-zinc-400">
                    Core Challenge
                  </h3>

                  <p className="text-base font-normal leading-relaxed text-zinc-200 md:text-lg md:leading-relaxed lg:text-[19px]">
                    {capDetail.challenge}
                  </p>
                </div>

                {/* Footer follows content */}
                <div className="relative z-10 mt-8 border-t border-zinc-900 pt-5">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-red-500" />

                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Business Bottleneck
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* =================================================
                SOLUTION CARD
            ================================================= */}
            <Reveal delay={0.05}>
              <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-rose-500/15 bg-zinc-950/80 p-7 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-rose-500/30 md:p-9 lg:p-10">

                {/* Glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-rose-500/[0.035] blur-3xl transition-all duration-500 group-hover:bg-rose-500/[0.07]" />

                <div className="relative z-10">

                  {/* Card header */}
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-950/20 text-rose-500">
                      <CheckCircle
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* <span className="font-mono text-xs font-semibold tracking-widest text-rose-400/70">
                      02 / SOLUTION
                    </span> */}
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold uppercase tracking-wider text-rose-400">
                    Devopstrio Solution
                  </h3>

                  <p className="text-base font-normal leading-relaxed text-white md:text-lg md:leading-relaxed lg:text-[19px]">
                    {capDetail.solution}
                  </p>

                  {/* =========================================
                      DELIVERABLES
                  ========================================= */}
                  {capDetail.features &&
                    capDetail.features.length > 0 && (
                      <div className="mt-8 border-t border-zinc-900 pt-6">
                        <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-400">
                          Solution Deliverables
                        </h4>

                        <ul className="space-y-3.5">
                          {capDetail.features.map(
                            (feature, fIdx) => (
                              <li
                                key={fIdx}
                                className="flex items-start gap-3 text-sm font-medium leading-relaxed text-zinc-200 md:text-base md:leading-relaxed"
                              >
                                <CheckCircle
                                  size={17}
                                  strokeWidth={2}
                                  className="mt-0.5 shrink-0 text-rose-500"
                                />

                                <span>{feature}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                  {/* =========================================
                      OUTCOMES
                  ========================================= */}
                  {capDetail.benefits &&
                    capDetail.benefits.length > 0 && (
                      <div className="mt-8 border-t border-zinc-900 pt-6">
                        <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-rose-400">
                          Resolved Outcomes
                        </h4>

                        <ul className="space-y-3.5">
                          {capDetail.benefits.map(
                            (benefit, bIdx) => (
                              <li
                                key={bIdx}
                                className="flex items-start gap-3 text-sm font-medium leading-relaxed text-zinc-100 md:text-base md:leading-relaxed"
                              >
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-500" />

                                <span>{benefit}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                </div>

                {/* Footer follows content */}
                <div className="relative z-10 mt-8 border-t border-zinc-900 pt-5">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-rose-500" />

                    <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                      Resolved Outcome
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}