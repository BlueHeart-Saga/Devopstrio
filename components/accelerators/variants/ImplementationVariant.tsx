import React from "react";

export function ImplementationVariant() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
          Target Architecture & Deployment Boundaries
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          The deployment extends the enterprise Azure Landing Zone architecture via a dedicated Hub-and-Spoke 
          topology. All model endpoints, vector search indexes, and compute clusters are provisioned inside 
          strictly isolated subnets with Private Endpoints and private DNS resolution, ensuring private networking 
          and controlled connectivity, subject to architectural requirements.
        </p>

        {/* Architecture Breakdown Cards */}
        <div className="rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover-lift divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 grid grid-cols-1 md:grid-cols-3 overflow-hidden shadow-lg">
          <div className="p-6">
            <div className="text-xs uppercase tracking-wider text-rose-500 font-bold mb-3">Connectivity Hub</div>
            <ul className="text-xs sm:text-sm text-zinc-300 space-y-2.5 leading-relaxed">
              <li>• Central Azure Firewall inspection</li>
              <li>• Hub Virtual Network peering</li>
              <li>• Central Private DNS zone resolution</li>
              <li>• ExpressRoute / VPN gateway transit</li>
            </ul>
          </div>
          <div className="p-6">
            <div className="text-xs uppercase tracking-wider text-rose-500 font-bold mb-3">AI Platform Hub</div>
            <ul className="text-xs sm:text-sm text-zinc-300 space-y-2.5 leading-relaxed">
              <li>• Azure AI Foundry / Azure OpenAI</li>
              <li>• Shared API Management gateway</li>
              <li>• Customer-managed Key Vault (CMK)</li>
              <li>• Diagnostic telemetry export to Log Analytics</li>
            </ul>
          </div>
          <div className="p-6">
            <div className="text-xs uppercase tracking-wider text-rose-500 font-bold mb-3">Workload Spoke Subscriptions</div>
            <ul className="text-xs sm:text-sm text-zinc-300 space-y-2.5 leading-relaxed">
              <li>• Dedicated subscription per workload</li>
              <li>• Private Endpoints for data ingestion</li>
              <li>• Enforced Azure Policy initiative</li>
              <li>• Independent billing & budget controls</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
          Shared Responsibility & Operational Demarcation
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          A transparent operational boundary ensures alignment between your platform engineering team, 
          Devopstrio deployment specialists, and the underlying cloud service provider.
        </p>

        <div className="rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover-lift overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-zinc-300">
              <thead className="bg-zinc-900/80 border-b border-zinc-800/80 text-xs uppercase tracking-wider text-zinc-400">
                <tr>
                  <th className="py-4 px-6 font-semibold">Domain Area</th>
                  <th className="py-4 px-6 font-semibold">Customer Responsibility</th>
                  <th className="py-4 px-6 font-semibold">Devopstrio Engagement Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Platform Landing Zone</td>
                  <td className="py-4 px-6 text-zinc-400">Maintain connectivity hub, tenant subscriptions, and billing agreements.</td>
                  <td className="py-4 px-6 text-zinc-300">Deliver infrastructure-as-code patterns requiring environment-specific validation.</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Identity & Access</td>
                  <td className="py-4 px-6 text-zinc-400">Approve Microsoft Entra ID groups and privileged role assignments.</td>
                  <td className="py-4 px-6 text-zinc-300">Configure managed identities and workload RBAC definitions.</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Policy & Guardrails</td>
                  <td className="py-4 px-6 text-zinc-400">Define organizational security posture and review exception requests.</td>
                  <td className="py-4 px-6 text-zinc-300">Implement automated Azure Policy initiatives (Audit transitioning to Deny).</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">CI/CD & Runbooks</td>
                  <td className="py-4 px-6 text-zinc-400">Provide pipeline runner agents and repository access.</td>
                  <td className="py-4 px-6 text-zinc-300">Author deployment pipelines, parameter files, and operational runbooks.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
