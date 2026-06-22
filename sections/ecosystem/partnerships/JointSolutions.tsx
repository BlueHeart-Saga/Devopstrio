"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Layers, Workflow, GitMerge, Cpu } from "lucide-react";

interface JointCard {
  title: string;
  combination: string;
  icon: React.ReactNode;
  diagram: React.ReactNode;
}

export function JointSolutions() {
  const cards: JointCard[] = [
    {
      title: "Enterprise Copilot Platform",
      combination: "Azure + OpenAI",
      icon: <Cpu size={20} className="text-rose-500" />,
      diagram: (
        <svg className="w-full h-28 opacity-95 transition-all duration-300 group-hover:scale-[1.03]" viewBox="0 0 200 60" fill="none">
          <defs>
            <linearGradient id="grad-azure-openai" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <rect x="15" y="15" width="40" height="30" rx="6" stroke="#f43f5e" strokeWidth="1.5" fill="#09090b" />
          <text x="35" y="33" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Azure</text>
          
          <rect x="145" y="15" width="40" height="30" rx="6" stroke="#3b82f6" strokeWidth="1.5" fill="#09090b" />
          <text x="165" y="33" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">OpenAI</text>

          <path d="M55 30 H145" stroke="url(#grad-azure-openai)" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="105,26 113,30 105,34" fill="#3b82f6" />
          <polygon points="95,26 87,30 95,34" fill="#f43f5e" />
          
          <circle cx="100" cy="30" r="8" fill="#18181b" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="100" y="33" fill="#f43f5e" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">AI</text>
        </svg>
      )
    },
    {
      title: "Cloud Native Transformation",
      combination: "AWS + Kubernetes",
      icon: <Workflow size={20} className="text-rose-500" />,
      diagram: (
        <svg className="w-full h-28 opacity-95 transition-all duration-300 group-hover:scale-[1.03]" viewBox="0 0 200 60" fill="none">
          <defs>
            <linearGradient id="grad-aws-k8s" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff9900" />
              <stop offset="100%" stopColor="#326ce5" />
            </linearGradient>
          </defs>
          <rect x="15" y="15" width="40" height="30" rx="6" stroke="#ff9900" strokeWidth="1.5" fill="#09090b" />
          <text x="35" y="33" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">AWS</text>
          
          <rect x="145" y="15" width="40" height="30" rx="6" stroke="#326ce5" strokeWidth="1.5" fill="#09090b" />
          <text x="165" y="33" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">K8s</text>

          <path d="M55 30 H145" stroke="url(#grad-aws-k8s)" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="105,26 113,30 105,34" fill="#326ce5" />
          <polygon points="95,26 87,30 95,34" fill="#ff9900" />
          
          <circle cx="100" cy="30" r="8" fill="#18181b" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="100" y="33" fill="#f43f5e" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">SRE</text>
        </svg>
      )
    },
    {
      title: "Modern Data Intelligence Platform",
      combination: "GCP + BigQuery",
      icon: <Layers size={20} className="text-rose-500" />,
      diagram: (
        <svg className="w-full h-28 opacity-95 transition-all duration-300 group-hover:scale-[1.03]" viewBox="0 0 200 60" fill="none">
          <defs>
            <linearGradient id="grad-gcp-bq" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4285f4" />
              <stop offset="100%" stopColor="#ea4335" />
            </linearGradient>
          </defs>
          <rect x="15" y="15" width="40" height="30" rx="6" stroke="#4285f4" strokeWidth="1.5" fill="#09090b" />
          <text x="35" y="33" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">GCP</text>
          
          <rect x="145" y="15" width="40" height="30" rx="6" stroke="#ea4335" strokeWidth="1.5" fill="#09090b" />
          <text x="165" y="33" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">BigQuery</text>

          <path d="M55 30 H145" stroke="url(#grad-gcp-bq)" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="105,26 113,30 105,34" fill="#ea4335" />
          <polygon points="95,26 87,30 95,34" fill="#4285f4" />
          
          <circle cx="100" cy="30" r="8" fill="#18181b" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="100" y="33" fill="#f43f5e" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">SQL</text>
        </svg>
      )
    },
    {
      title: "Enterprise Process Modernization",
      combination: "Oracle + SAP",
      icon: <GitMerge size={20} className="text-rose-500" />,
      diagram: (
        <svg className="w-full h-28 opacity-95 transition-all duration-300 group-hover:scale-[1.03]" viewBox="0 0 200 60" fill="none">
          <defs>
            <linearGradient id="grad-oracle-sap" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f40000" />
              <stop offset="100%" stopColor="#008fd3" />
            </linearGradient>
          </defs>
          <rect x="15" y="15" width="40" height="30" rx="6" stroke="#f40000" strokeWidth="1.5" fill="#09090b" />
          <text x="35" y="33" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Oracle</text>
          
          <rect x="145" y="15" width="40" height="30" rx="6" stroke="#008fd3" strokeWidth="1.5" fill="#09090b" />
          <text x="165" y="33" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">SAP</text>

          <path d="M55 30 H145" stroke="url(#grad-oracle-sap)" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="105,26 113,30 105,34" fill="#008fd3" />
          <polygon points="95,26 87,30 95,34" fill="#f40000" />
          
          <circle cx="100" cy="30" r="8" fill="#18181b" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="100" y="33" fill="#f43f5e" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ERP</text>
        </svg>
      )
    }
  ];

  return (
    <section id="solutions" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            INTEGRATED VALUE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Joint Solution <span className="text-rose-500">Accelerators</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Pre-engineered multi-technology architectural blueprints deployed to accelerate enterprise implementation schedules.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 min-h-[260px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-zinc-900/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-rose-500 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white uppercase tracking-wider">{card.title}</h4>
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">
                        {card.combination}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center bg-zinc-950/60 border border-zinc-900/80 rounded-2xl p-6">
                {card.diagram}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
