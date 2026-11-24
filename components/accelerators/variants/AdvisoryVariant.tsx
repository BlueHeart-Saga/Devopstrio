import React from "react";

export function AdvisoryVariant() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
          Governance Operating Model & Decision Horizons
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          The governance framework introduces a proportionate, risk-tiered operating model designed to accelerate 
          safe innovation while maintaining stringent compliance oversight. Decisions are routed based on workload 
          autonomy, data sensitivity, and stakeholder impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0A0A0A] rounded-[24px] p-6 lg:p-7 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Low Risk Tier</div>
            <div className="text-base font-bold text-white mb-2">Internal Productivity</div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Standard workplace assistants querying public or internal documentation. Streamlined self-service review 
              with automated prompt safety baselines.
            </p>
          </div>
          <div className="bg-[#0A0A0A] rounded-[24px] p-6 lg:p-7 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
            <div className="text-xs uppercase tracking-wider text-rose-500 font-bold mb-2">Medium Risk Tier</div>
            <div className="text-base font-bold text-white mb-2">Operational Automation</div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Customer support triage or internal code generation. Requires departmental review, data protection impact 
              assessment (DPIA) review, and human-in-the-loop validation.
            </p>
          </div>
          <div className="bg-[#0A0A0A] rounded-[24px] p-6 lg:p-7 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
            <div className="text-xs uppercase tracking-wider text-rose-500 font-bold mb-2">High Risk Tier</div>
            <div className="text-base font-bold text-white mb-2">Autonomous Decisioning</div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Customer-facing underwriting, clinical decision support, or credit scoring. Formal AI Review Board approval, 
              bias testing, and continuous audit logging required.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
          Review Process & Decision Stage-Gates
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          Projects progress through four structured governance horizons, ensuring compliance evidence is accumulated 
          progressively from initial inception to production deployment.
        </p>

        <div className="rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover-lift overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-zinc-300">
              <thead className="bg-zinc-900/80 border-b border-zinc-800/80 text-xs uppercase tracking-wider text-zinc-400">
                <tr>
                  <th className="py-4 px-6 font-semibold">Governance Horizon</th>
                  <th className="py-4 px-6 font-semibold">Required Submission</th>
                  <th className="py-4 px-6 font-semibold">Decision Authority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Horizon 1: Inception & Scoping</td>
                  <td className="py-4 px-6 text-zinc-300">AI Use-Case Register entry, intended purpose, and preliminary risk tier self-assessment.</td>
                  <td className="py-4 px-6 text-zinc-400">Project Sponsor & Department Lead.</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Horizon 2: Architectural Review</td>
                  <td className="py-4 px-6 text-zinc-300">Data lineage documentation, model provenance, and private networking boundary design.</td>
                  <td className="py-4 px-6 text-zinc-400">Technical Design Authority & Security Architect.</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Horizon 3: Evaluation Gate</td>
                  <td className="py-4 px-6 text-zinc-300">Automated toxicity evaluation reports, prompt injection defense tests, and accuracy benchmarks.</td>
                  <td className="py-4 px-6 text-zinc-400">Responsible AI Review Board.</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Horizon 4: Production Monitoring</td>
                  <td className="py-4 px-6 text-zinc-300">Ongoing drift telemetry, user feedback mechanisms, and quarterly audit log reviews.</td>
                  <td className="py-4 px-6 text-zinc-400">Operational Risk Committee.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
