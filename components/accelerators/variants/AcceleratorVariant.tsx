import React from "react";

export function AcceleratorVariant() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
          Standardised Core & Customer Configuration
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          The subscription vending accelerator balances hardened, pre-tested infrastructure standards with 
          environment-specific parameterization, delivering automated provisioning designed to reduce manual setup effort.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0A0A0A] rounded-[24px] p-6 lg:p-7 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
            <div className="text-xs uppercase tracking-wider text-rose-500 font-bold mb-2">Standardised Baseline</div>
            <div className="text-base font-bold text-white mb-3">Immutable Platform Controls</div>
            <ul className="text-xs sm:text-sm text-zinc-300 space-y-2.5 leading-relaxed">
              <li>• Automated Hub-Spoke VNet peering to central connectivity hub</li>
              <li>• Mandatory user-defined route (UDR) routing through central Azure Firewall</li>
              <li>• Central Private DNS zone virtual network linking</li>
              <li>• Azure Policy baseline: Deny public endpoints, enforce TLS 1.2+, mandate encryption</li>
              <li>• Log Analytics diagnostic export settings for security audit compliance</li>
            </ul>
          </div>

          <div className="bg-[#0A0A0A] rounded-[24px] p-6 lg:p-7 border border-zinc-800/80 hover-lift hover:border-rose-500/40 transition-all shadow-md">
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Customer Parameterization</div>
            <div className="text-base font-bold text-white mb-3">Project-Specific Configuration</div>
            <ul className="text-xs sm:text-sm text-zinc-300 space-y-2.5 leading-relaxed">
              <li>• Subnet CIDR block allocation from pre-allocated address pools</li>
              <li>• Cost Management budget caps and automated threshold notification lists</li>
              <li>• Role-based access control (RBAC) group assignments for data science leads</li>
              <li>• Project taxonomy tagging (CostCentre, Owner, WorkloadTier, Environment)</li>
              <li>• Selective service enablement (Azure AI Foundry, AI Search, Key Vault)</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
          Automated Pipeline Vending Workflow
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          Vending is orchestrated entirely via parameter-driven CI/CD pipelines (GitHub Actions or Azure DevOps), 
          eliminating configuration drift and manual Azure portal interventions.
        </p>

        <div className="rounded-[24px] bg-[#0A0A0A] border border-zinc-800/80 hover-lift overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-zinc-300">
              <thead className="bg-zinc-900/80 border-b border-zinc-800/80 text-xs uppercase tracking-wider text-zinc-400">
                <tr>
                  <th className="py-4 px-6 font-semibold">Pipeline Step</th>
                  <th className="py-4 px-6 font-semibold">Automated Operation</th>
                  <th className="py-4 px-6 font-semibold">Validation Gate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">1. Parameter Intake</td>
                  <td className="py-4 px-6 text-zinc-300">Pull request or ticket submits JSON/YAML specification with project name and budget.</td>
                  <td className="py-4 px-6 text-zinc-400">Automated schema linting and IP overlap validation.</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">2. Subscription Creation</td>
                  <td className="py-4 px-6 text-zinc-300">Programmatically vend subscription under designated Landing Zones management group.</td>
                  <td className="py-4 px-6 text-zinc-400">Management group placement and billing agreement verification.</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">3. Network & Guardrails</td>
                  <td className="py-4 px-6 text-zinc-300">Deploy spoke virtual network, establish peerings, link DNS zones, and assign policy initiative.</td>
                  <td className="py-4 px-6 text-zinc-400">Azure Policy compliance check and route table verification.</td>
                </tr>
                <tr className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">4. Budget & Handover</td>
                  <td className="py-4 px-6 text-zinc-300">Configure consumption budget alerts, assign Entra ID groups, and output connection parameters.</td>
                  <td className="py-4 px-6 text-zinc-400">Automated notification dispatch to project lead and platform team.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
