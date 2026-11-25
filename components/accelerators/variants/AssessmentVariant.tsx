import React from "react";
import { AssessmentTechnicalData } from "@/data/accelerators/technical-approach-data";

interface AssessmentVariantProps {
  data?: AssessmentTechnicalData;
}

export function AssessmentVariant({ data }: AssessmentVariantProps) {
  if (!data) {
    return (
      <div className="space-y-12">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
            Review Coverage Matrix
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
            The assessment evaluates the tenant across four core security and operational pillars using non-intrusive 
            diagnostic queries and configuration reviews, identifying potentially overshared sites and sensitive information.
          </p>

          <div className="rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover-lift overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-zinc-300">
                <thead className="bg-zinc-900/80 border-b border-zinc-800/80 text-xs uppercase tracking-wider text-zinc-400">
                  <tr>
                    <th className="py-4 px-6 font-semibold">Assessment Domain</th>
                    <th className="py-4 px-6 font-semibold">Telemetry & Focus Area</th>
                    <th className="py-4 px-6 font-semibold">Evaluation Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80">
                  <tr className="hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">Identity & Prerequisites</td>
                    <td className="py-4 px-6 text-zinc-300">Entra ID licensing, conditional access policies, MFA enforcement, and M365 App update channels.</td>
                    <td className="py-4 px-6 text-zinc-400">Microsoft 365 Copilot technical prerequisites baseline.</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">SharePoint & Oversharing</td>
                    <td className="py-4 px-6 text-zinc-300">Wide-access sharing links ('Everyone except external users'), public sites, and unrestricted groups.</td>
                    <td className="py-4 px-6 text-zinc-400">Principle of Least Privilege and organizational data boundaries.</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">Data Protection (Purview)</td>
                    <td className="py-4 px-6 text-zinc-300">Sensitivity label deployment coverage, auto-labeling rules, and Data Loss Prevention (DLP) policies.</td>
                    <td className="py-4 px-6 text-zinc-400">Purview Information Protection maturity framework.</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">Licensing Allocation</td>
                    <td className="py-4 px-6 text-zinc-300">User persona mapping, base licence readiness, and planned pilot cohort allocation.</td>
                    <td className="py-4 px-6 text-zinc-400">Commercial licence optimisation and user eligibility criteria.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
            Evidence Collection & Remediation Methodology
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
            All diagnostics are performed read-only using Microsoft Graph API queries and tenant configuration exports. 
            Findings are structured into an objective remediation roadmap categorised by operational priority.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A0A0A] rounded-[24px] p-6 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
              <div className="text-xs uppercase tracking-wider text-rose-500 font-bold mb-2">Priority Tier 1</div>
              <div className="text-base font-bold text-white mb-2">Immediate Remediation</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Addressing open organizational links on sensitive directories (executive compensation, legal files, merger documents) prior to enabling semantic search.
              </p>
            </div>
            <div className="bg-[#0A0A0A] rounded-[24px] p-6 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Priority Tier 2</div>
              <div className="text-base font-bold text-white mb-2">Policy & Label Tuning</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Extending Purview sensitivity label coverage across high-volume departmental repositories and activating automated labeling rules.
              </p>
            </div>
            <div className="bg-[#0A0A0A] rounded-[24px] p-6 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Priority Tier 3</div>
              <div className="text-base font-bold text-white mb-2">Sustained Governance</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Establishing regular access reviews with site owners using SharePoint Advanced Management and lifecycle policies.
              </p>
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
          Review Coverage Matrix
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          {data.matrixIntro}
        </p>

        <div className="rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover-lift overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-zinc-300">
              <thead className="bg-zinc-900/80 border-b border-zinc-800/80 text-xs uppercase tracking-wider text-zinc-400">
                <tr>
                  <th className="py-4 px-6 font-semibold">Review Area</th>
                  <th className="py-4 px-6 font-semibold">Evidence</th>
                  <th className="py-4 px-6 font-semibold">Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                {data.matrixRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">{row.reviewArea}</td>
                    <td className="py-4 px-6 text-zinc-300">{row.evidence}</td>
                    <td className="py-4 px-6 text-zinc-400">{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
          Evidence Collection & Remediation Methodology
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          {data.methodologyIntro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.methodologyTiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-[#0A0A0A] rounded-[24px] p-6 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md"
            >
              <div
                className={`text-xs uppercase tracking-wider font-bold mb-2 ${
                  idx === 0 ? "text-rose-500" : "text-zinc-400"
                }`}
              >
                {tier.label}
              </div>
              <div className="text-base font-bold text-white mb-2">{tier.title}</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {tier.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
