"use client";

import React from "react";
import Link from "next/link";
import { Layers, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const relatedServices = [
  { title: "Cloud Platform Engineering", path: "/services/cloud-platform-engineering" },
  { title: "DevOps & Release Automation", path: "/services/devops-automation" },
  { title: "Product Engineering", path: "/services/product-engineering" },
  { title: "Site Reliability Engineering", path: "/services/sre-operations" }
];

export function RelatedServices() {
  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              PRACTICE CONNECTIVITY
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Explore related <span className="font-semibold text-rose-500">services</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {relatedServices.map((srv, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <Link
                href={srv.path}
                className="group block h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/20 hover:bg-zinc-900/5 transition-all"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500">
                    <Layers size={12} />
                  </span>
                  <span className="text-zinc-650 group-hover:text-rose-500 transition-colors">
                    <ArrowUpRight size={13} />
                  </span>
                </div>
                <h4 className="text-[11px] font-semibold text-zinc-200 group-hover:text-white transition-colors">
                  {srv.title}
                </h4>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
