"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Quote } from "lucide-react";

const tags = ["Cloud Migration", "Platform Engineering", "DevOps Automation", "24×7 Managed Operations"];
const results = [
  { metric: "40%", label: "Cloud Cost Reduction" },
  { metric: "60%", label: "Faster Deployments" },
  { metric: "99.95%", label: "Platform Availability" },
  { metric: "3×", label: "Release Velocity" },
];

export const FeaturedSuccess = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(255,23,68,0.07),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
          >
            Featured Client Success
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Transforming Enterprise{" "}
            <span className="text-[#FF1744]">Cloud Operations</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-zinc-900/80 via-zinc-900/50 to-red-500/5 border border-zinc-800 rounded-3xl overflow-hidden p-8 md:p-14"
        >
          {/* Red top border accent */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Quote side */}
            <div>
              <Quote className="w-12 h-12 text-red-500/30 mb-6" />
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic">
                "Devopstrio didn't just improve our infrastructure—they transformed how we{" "}
                <span className="font-semibold text-white not-italic">think about scaling and reliability</span>."
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-lg font-black text-white">
                  E
                </div>
                <div>
                  <p className="text-white font-semibold">Enterprise Technology Leader</p>
                  <p className="text-zinc-500 text-sm">Fortune 500 Organisation · Cloud Transformation</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((t, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Results side */}
            <div>
              <p className="text-sm text-zinc-500 font-mono uppercase tracking-widest mb-5">Measured Outcomes</p>
              <div className="grid grid-cols-2 gap-4">
                {results.map((r, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    className="bg-black/60 border border-zinc-800 rounded-2xl p-6 text-center hover:border-red-500/30 transition-colors group"
                  >
                    <p className="text-4xl font-black text-[#FF1744] mb-1 group-hover:scale-110 transition-transform inline-block">{r.metric}</p>
                    <p className="text-zinc-400 text-sm">{r.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 px-5 py-4 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <p className="text-zinc-400 text-sm">
                  Results achieved within 12 months of engagement. All metrics independently verified against baseline infrastructure state.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
