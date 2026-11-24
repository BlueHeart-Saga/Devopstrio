import React from "react";

export function WorkshopVariant() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
          Four-Part Workshop Agenda
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          The envisioning workshop is delivered across a structured four-part agenda defined directly in the 
          Statement of Work and High-Level Design, guiding executive stakeholders from capability discovery to an owned action plan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0A0A0A] rounded-[24px] p-6 lg:p-7 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
            <span className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold flex items-center justify-center mb-3">
              01
            </span>
            <div className="text-base font-bold text-white mb-2">AI Overview & Foundations</div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Establishing a shared understanding of modern AI capabilities: large language models, retrieval-augmented 
              generation (RAG), and autonomous agent patterns within enterprise architecture.
            </p>
          </div>
          <div className="bg-[#0A0A0A] rounded-[24px] p-6 lg:p-7 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
            <span className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold flex items-center justify-center mb-3">
              02
            </span>
            <div className="text-base font-bold text-white mb-2">Industry Sector Demonstrations</div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Showcasing practical, working demonstrations tailored specifically to your industry sector, highlighting 
              proven architectural approaches and realistic boundary constraints.
            </p>
          </div>
          <div className="bg-[#0A0A0A] rounded-[24px] p-6 lg:p-7 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
            <span className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold flex items-center justify-center mb-3">
              03
            </span>
            <div className="text-base font-bold text-white mb-2">Collaborative Idea Generation</div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Facilitated discovery sessions across business lines capturing operational pain points, manual bottlenecks, 
              and strategic innovation opportunities across departments.
            </p>
          </div>
          <div className="bg-[#0A0A0A] rounded-[24px] p-6 lg:p-7 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
            <span className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold flex items-center justify-center mb-3">
              04
            </span>
            <div className="text-base font-bold text-white mb-2">Opportunity Prioritisation</div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Objective scoring of candidate use cases against strategic value, implementation feasibility, data readiness, 
              and regulatory risk to agree an owned shortlist.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
          Participant Roles & Direct Deliverables
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          Cross-functional participation ensures alignment between commercial objectives and technical platform realities.
        </p>

        <div className="rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover-lift overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-zinc-300">
              <thead className="bg-zinc-900/80 border-b border-zinc-800/80 text-xs uppercase tracking-wider text-zinc-400">
                <tr>
                  <th className="py-4 px-6 font-semibold">Participant Stakeholder</th>
                  <th className="py-4 px-6 font-semibold">Contribution & Perspective</th>
                  <th className="py-4 px-6 font-semibold">Workshop Deliverable Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Executive Leadership (CEO / CIO / CDO)</td>
                  <td className="py-4 px-6 text-zinc-300">Strategic priorities, investment appetite, and operational success criteria.</td>
                  <td className="py-4 px-6 text-zinc-400">Mandates business sponsorship for top-ranked initiatives.</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Business Unit Heads (Operations / Sales / HR)</td>
                  <td className="py-4 px-6 text-zinc-300">Direct friction points, workflow constraints, and end-user productivity hurdles.</td>
                  <td className="py-4 px-6 text-zinc-400">Forms the empirical basis for candidate use cases.</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Architecture & Platform Leads</td>
                  <td className="py-4 px-6 text-zinc-300">Existing data platform maturity, cloud landing zone baselines, and security policies.</td>
                  <td className="py-4 px-6 text-zinc-400">Feasibility scoring and 90-day pilot technical roadmap.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
