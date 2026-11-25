import React from "react";
import { AdoptionTechnicalData } from "@/data/accelerators/technical-approach-data";

interface AdoptionVariantProps {
  data?: AdoptionTechnicalData;
}

export function AdoptionVariant({ data }: AdoptionVariantProps) {
  if (!data) {
    return (
      <div className="space-y-12">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
            Structured Enablement & Champions Path
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
            Successful AI enablement requires shifting user behavior from ad-hoc experimentation to embedded daily 
            workflows. The enablement framework combines departmental champion mentoring, prompt hygiene masterclasses, 
            and continuous feedback loops.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0A0A0A] rounded-[24px] p-6 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
              <span className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold flex items-center justify-center mb-3">
                01
              </span>
              <div className="text-base font-bold text-white mb-2">Cohort Onboarding</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Selecting cross-functional pilot participants, establishing baseline confidence surveys, and distributing prompt guides.
              </p>
            </div>
            <div className="bg-[#0A0A0A] rounded-[24px] p-6 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
              <span className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold flex items-center justify-center mb-3">
                02
              </span>
              <div className="text-base font-bold text-white mb-2">Champions Coaching</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Equipping enthusiastic departmental leads with advanced prompting methodologies and peer-coaching techniques.
              </p>
            </div>
            <div className="bg-[#0A0A0A] rounded-[24px] p-6 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
              <span className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold flex items-center justify-center mb-3">
                03
              </span>
              <div className="text-base font-bold text-white mb-2">Prompt Masterclasses</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Role-specific clinics tailored to daily workflows (e.g., summarizing meeting transcripts, drafting proposals, querying datasets).
              </p>
            </div>
            <div className="bg-[#0A0A0A] rounded-[24px] p-6 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
              <span className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold flex items-center justify-center mb-3">
                04
              </span>
              <div className="text-base font-bold text-white mb-2">Value Synthesis</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Capturing quantifiable productivity evidence and compiling an executive business case for wider enterprise rollout.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
            Adoption Measurement & Value Telemetry
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
            Telemetry is gathered continuously via Viva Insights and qualitative sentiment tracking to ensure 
            licences deliver demonstrated business value.
          </p>

          <div className="rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover-lift overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-zinc-300">
                <thead className="bg-zinc-900/80 border-b border-zinc-800/80 text-xs uppercase tracking-wider text-zinc-400">
                  <tr>
                    <th className="py-4 px-6 font-semibold">Metric Dimension</th>
                    <th className="py-4 px-6 font-semibold">Measurement Focus</th>
                    <th className="py-4 px-6 font-semibold">Operational Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80">
                  <tr className="hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">Weekly Active Usage (WAU)</td>
                    <td className="py-4 px-6 text-zinc-300">Proportion of licensed cohort actively querying Copilot across M365 apps.</td>
                    <td className="py-4 px-6 text-zinc-400">Identify inactive users early for prompt refresher clinics or licence reassignment.</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">App Interaction Breadth</td>
                    <td className="py-4 px-6 text-zinc-300">Utilization distribution across Teams meeting recaps, Word drafts, and Outlook summaries.</td>
                    <td className="py-4 px-6 text-zinc-400">Focus training interventions on underused application workflows.</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">Qualitative User Sentiment</td>
                    <td className="py-4 px-6 text-zinc-300">Bi-weekly surveys assessing perceived work quality, speed of task delivery, and friction.</td>
                    <td className="py-4 px-6 text-zinc-400">Refine department-specific prompt libraries and resolve common data retrieval blockers.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
          Structured Enablement & Champions Path
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          {data.enablementIntro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.enablementSteps.map((st, idx) => (
            <div
              key={idx}
              className="bg-[#0A0A0A] rounded-[24px] p-6 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md"
            >
              <span className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold flex items-center justify-center mb-3">
                {st.step}
              </span>
              <div className="text-base font-bold text-white mb-2">{st.title}</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {st.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
          Adoption Measurement & Value Telemetry
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          {data.measuresIntro}
        </p>

        <div className="rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover-lift overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-zinc-300">
              <thead className="bg-zinc-900/80 border-b border-zinc-800/80 text-xs uppercase tracking-wider text-zinc-400">
                <tr>
                  <th className="py-4 px-6 font-semibold">Metric Dimension</th>
                  <th className="py-4 px-6 font-semibold">Measurement Focus</th>
                  <th className="py-4 px-6 font-semibold">Operational Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                {data.measuresRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">{row.dimension}</td>
                    <td className="py-4 px-6 text-zinc-300">{row.focus}</td>
                    <td className="py-4 px-6 text-zinc-400">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
