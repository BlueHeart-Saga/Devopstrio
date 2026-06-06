import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { 
  Clock, Zap, Layers, Shield
} from "lucide-react";

interface AdvantageCardData {
  title: string;
  category: string;
  desc: string;
  icon: React.ComponentType<any>;
  pills: string[];
  metric: string;
  metricLabel: string;
  actionText: string;
}

const leftCards: AdvantageCardData[] = [
  {
    title: "< 2 Hour Response",
    category: "Rapid Engineering Support",
    desc: "Every enquiry is reviewed and replied to by a real engineer — no automated queues, no ticket systems.",
    icon: Clock,
    pills: ["Real Engineers", "No Ticket Queues", "Active SLA"],
    metric: "Under 2 Hrs",
    metricLabel: "Average reply time",
    actionText: "Contact Us",
  },
  {
    title: "Senior Engineers Only",
    category: "Elite Talent Squads",
    desc: "You speak to architects and senior specialists from day one. Not sales reps, not juniors.",
    icon: Zap,
    pills: ["Senior Staff", "Architect Led", "Zero Sales Reps"],
    metric: "100% Senior",
    metricLabel: "Engineering level",
    actionText: "Meet Team",
  },
];

const rightCards: AdvantageCardData[] = [
  {
    title: "End-to-End Delivery",
    category: "Full Ownership Lifecycle",
    desc: "From scoping to deployment to managed support — one team, full ownership, zero hand-off confusion.",
    icon: Layers,
    pills: ["Product Scoping", "Agile Deployment", "Managed DevOps"],
    metric: "Zero Friction",
    metricLabel: "Hand-off index",
    actionText: "Services",
  },
  {
    title: "ISO 27001 Compliant",
    category: "Compliance & Security",
    desc: "Enterprise-grade security posture built in. Your data, your systems, your confidentiality — protected.",
    icon: Shield,
    pills: ["ISO 27001 Cert", "GDPR Guarded", "Data Encryption"],
    metric: "100% Secure",
    metricLabel: "Compliance score",
    actionText: "Security",
  },
];

export function OurAdvantage() {
  const renderCard = (card: AdvantageCardData, idx: number) => {
    const Icon = card.icon;

    return (
      <Reveal key={idx} className="w-full">
        <div className="bg-[#050507]/60 backdrop-blur-md border border-zinc-900/80 rounded-[24px] p-5 md:p-6 hover:border-rose-500/25 hover:bg-[#07070a] hover:-translate-y-1 transition-all duration-300 shadow-xl flex flex-col justify-between min-h-[300px] group">
          {/* Card Top Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-full bg-rose-500/5 border border-rose-500/10 flex items-center justify-center text-rose-500 group-hover:scale-105 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
              <Icon size={18} strokeWidth={1.5} />
            </div>
          </div>

          {/* Card Middle Content */}
          <div className="flex-1 flex flex-col justify-start">
            <span className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">
              {card.category}
            </span>
            <h3 className="text-white text-lg font-bold tracking-tight mt-1 mb-2 group-hover:text-rose-300 transition-colors">
              {card.title}
            </h3>

            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-4">
              {card.desc}
            </p>
            
            {/* Pill Badges */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {card.pills.map((pill, pIdx) => (
                <span 
                  key={pIdx}
                  className="text-[10px] font-bold px-2.5 py-1 bg-zinc-900/40 text-zinc-400 rounded-full border border-zinc-800/20 group-hover:border-zinc-800"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-zinc-900/80 my-4" />

          {/* Card Bottom Row */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-white text-sm font-black tracking-tight">{card.metric}</span>
              <span className="text-zinc-500 text-[9px] font-bold uppercase tracking-wider">{card.metricLabel}</span>
            </div>
            
            <button className="px-4 py-1.5 bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white rounded-full text-xs font-bold transition-all duration-300">
              {card.actionText}
            </button>
          </div>
        </div>
      </Reveal>
    );
  };

  return (
    <section className="w-full py-20 md:py-28 bg-[#030303] text-white relative overflow-hidden" id="advantage">
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Header Section */}
        <Reveal className="max-w-4xl mx-auto mb-16 flex flex-col items-center text-center gap-4">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block">
            THE DEVOPSTRIO ADVANTAGE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight mt-2">
            Technology Without Limits <br className="hidden md:block" />
            <span className="text-rose-500">Built for Growth. Proven by Results.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-bold">
            At DevOpsTrio, we help organisations modernise infrastructure, accelerate innovation, and unlock new growth opportunities through AI, Cloud, DevOps, Security, and Digital Engineering.
          </p>
        </Reveal>

        {/* 3-Column Premium Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.8fr_1.1fr] gap-8 lg:gap-10 items-center max-w-[1400px] mx-auto">
          
          {/* Left Column: 2 Cards */}
          <div className="flex flex-col gap-6 lg:gap-7">
            {leftCards.map((card, idx) => renderCard(card, idx))}
          </div>

          {/* Center Column: Advantage Image without border box */}
          <div className="flex justify-center items-center relative py-6 lg:py-0">
            {/* Soft pink glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/5 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />
            
            <img
              src="/assets/Home-page/advandage.png"
              alt="DevopsTrio Advantage"
              className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-full h-auto object-contain select-none filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
            />
          </div>

          {/* Right Column: 2 Cards */}
          <div className="flex flex-col gap-6 lg:gap-7">
            {rightCards.map((card, idx) => renderCard(card, idx))}
          </div>

        </div>

      </div>
    </section>
  );
}
