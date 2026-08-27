"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const PARTNER_AWARDS = [
  { name: "AWS Specialization", desc: "SysOps & Solutions Architect", image: "/webp/assets/ecosystem/aws-awards/image-118.webp", category: "AWS" },
  { name: "AWS Partner Award", desc: "Top Tier Delivery Excellence", image: "/webp/assets/ecosystem/aws-awards/image-120.webp", category: "AWS" },
  { name: "Microsoft Solutions Partner", desc: "Infrastructure & Azure Specialist", image: "/webp/assets/ecosystem/microsofr-awards/image-123.webp", category: "Microsoft" },
  { name: "Microsoft Gold Competency", desc: "Cloud Platform Gold Tier", image: "/webp/assets/ecosystem/microsofr-awards/image-124.webp", category: "Microsoft" },
  { name: "GCP Premier Partner", desc: "Google Cloud Platform Premium", image: "/webp/assets/ecosystem/GCP-award/image-130.webp", category: "Google Cloud" },
  { name: "GCP Certified Expertise", desc: "Data & Analytics Excellence", image: "/webp/assets/ecosystem/GCP-award/image-131.webp", category: "Google Cloud" },
  { name: "Cisco Partner Award", desc: "Enterprise Networking & Security", image: "/webp/assets/ecosystem/Cisco_Awards/image-187.webp", category: "Cisco" },
  { name: "Cisco Certified Integrator", desc: "Advanced Networking Gold Status", image: "/webp/assets/ecosystem/Cisco_Awards/image-188.webp", category: "Cisco" },
  { name: "Oracle Cloud Solution", desc: "Oracle Cloud Infrastructure (OCI)", image: "/webp/assets/ecosystem/ORACLE_Awards/image-154.webp", category: "Oracle" },
  { name: "Oracle Gold Partner", desc: "Database & Cloud Infrastructure", image: "/webp/assets/ecosystem/ORACLE_Awards/image-155.webp", category: "Oracle" },
  { name: "SAP Partner Excellence", desc: "SAP Cloud Platform Integration", image: "/webp/assets/ecosystem/Sap_Awards/image-180.webp", category: "SAP" },
  { name: "SAP Gold Partner", desc: "ERP Modernization & Platform Specialist", image: "/webp/assets/ecosystem/Sap_Awards/image-181.webp", category: "SAP" },
  { name: "ServiceNow Elite Partner", desc: "Workflow Automation & ESM", image: "/webp/assets/ecosystem/Servicenow_Aards/image-164.webp", category: "ServiceNow" },
  { name: "ServiceNow Certified Partner", desc: "ITSM & ITOM Platform Specialist", image: "/webp/assets/ecosystem/Servicenow_Aards/image-165.webp", category: "ServiceNow" }
];

const ENGINEERING_CERTS = [
  { title: "Azure Certified Architect", desc: "Solutions Architect & DevOps Expert", image: "/assets/About-page/Certification/AZURE-icon.svg" },
  { title: "AWS Solutions Architect", desc: "SysOps & Solutions Architect Professional", image: "/assets/About-page/Certification/Aws_1.svg" },
  { title: "CISSP Certified", desc: "Certified Information Systems Security Professional", image: "/assets/About-page/Certification/cissp.svg" },
  { title: "CEH Ethical Hacker", desc: "Certified Ethical Hacker Practitioner", image: "/assets/About-page/Certification/CEH.svg" },
  { title: "OSCP Pentester", desc: "Offensive Security Certified Professional", image: "/assets/About-page/Certification/oscp.svg" },
  { title: "PMP Project Manager", desc: "Project Management Professional", image: "/assets/About-page/Certification/pmp-logo_v2.svg" },
  { title: "ITIL Foundation", desc: "IT Service Management Framework", image: "/assets/About-page/Certification/itil-foundation.svg" }
];

const COMPLIANCE_AWARDS = [
  { title: "ISO 27001 Certified", desc: "Information Security Management System", image: "/webp/assets/Awards/ISO.webp" },
  { title: "Cyber Essentials", desc: "UK Cyber Security Certification Standard", image: "/webp/assets/Awards/2021-2022_Cyber_Essentials_Certification.webp" },
  { title: "Computing Security Awards", desc: "Award-winning Cloud Infrastructure security", image: "/webp/assets/Awards/2025_Computing_Security_Awards.webp" },
  { title: "IT Europa Channel Awards", desc: "Finalist in Cloud Security Integrator categories", image: "/webp/assets/Awards/Finalist_IT_Europa_Channel_Awards_2022.webp" },
  { title: "Arctic Wolf Award", desc: "Elite Cyber Security Partner Award", image: "/webp/assets/Awards/Arctic_Wolf_Partner_Awards.webp" },
  { title: "Dell Gold Partner", desc: "Authorized Infrastructure Solutions Partner", image: "/webp/assets/Awards/Dell_Technologies_Gold_Partner_2022-2023.webp" },
  { title: "Tech Excellence Award", desc: "European IT & Software Excellence recognition", image: "/webp/assets/About-page/awards/techmm.webp" }
];

export function EngineeringCertifications() {
  const [activeTab, setActiveTab] = useState<"partners" | "engineering" | "compliance">("partners");

  return (
    <section id="certifications" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-650/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-8 relative z-10">
        
        {/* Centered Heading */}
        <Reveal className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-4 text-white">
            Engineering Certifications & <span className="text-rose-500">Awards</span>
          </h2>
        </Reveal>

        {/* Centered Premium Tab Bar Selector */}
        <div className="flex justify-center mb-14">
          <div className="flex items-center justify-center gap-2 bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab("partners")}
              className={`px-6 md:px-7 py-3 md:py-3.5 rounded-full text-sm md:text-base font-semibold tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeTab === "partners"
                  ? "bg-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.4)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              Partner Awards
            </button>
            <button
              onClick={() => setActiveTab("engineering")}
              className={`px-6 md:px-7 py-3 md:py-3.5 rounded-full text-sm md:text-base font-semibold tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeTab === "engineering"
                  ? "bg-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.4)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              Engineering Certs
            </button>
            <button
              onClick={() => setActiveTab("compliance")}
              className={`px-6 md:px-7 py-3 md:py-3.5 rounded-full text-sm md:text-base font-semibold tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeTab === "compliance"
                  ? "bg-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.4)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              Compliance & Awards
            </button>
          </div>
        </div>

        {/* Dynamic content rendering - Single Line Row Horizontal Scroll */}
        {activeTab === "partners" && (
          <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 pt-2 select-none scroll-smooth snap-x snap-mandatory">
            {PARTNER_AWARDS.map((cert, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 md:w-72 snap-center bg-zinc-900/40 backdrop-blur-2xl border border-white/[0.05] hover:border-rose-500/30 rounded-[24px] p-6 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(244,63,94,0.08)] flex flex-col justify-between group min-h-[220px]"
              >
                <div className="w-full bg-white/[0.04] border border-white/[0.08] rounded-[18px] p-4 flex items-center justify-center h-32 backdrop-blur-md group-hover:bg-white/[0.08] group-hover:border-white/[0.15] transition-all duration-300 mb-4 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-20 max-w-[85%] object-contain filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-lg md:text-xl font-semibold text-white uppercase tracking-wider group-hover:text-rose-400 transition-colors">
                    {cert.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "engineering" && (
          <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 pt-2 select-none scroll-smooth snap-x snap-mandatory">
            {ENGINEERING_CERTS.map((cert, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 md:w-72 snap-center bg-zinc-900/40 backdrop-blur-2xl border border-white/[0.05] hover:border-rose-500/30 rounded-[24px] p-6 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(244,63,94,0.08)] flex flex-col justify-between group min-h-[220px]"
              >
                <div className="w-full bg-white/[0.04] border border-white/[0.08] rounded-[18px] p-4 flex items-center justify-center h-32 backdrop-blur-md group-hover:bg-white/[0.08] group-hover:border-white/[0.15] transition-all duration-300 mb-4 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-20 max-w-[85%] object-contain filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-lg md:text-xl font-semibold text-white uppercase tracking-wider group-hover:text-rose-400 transition-colors">
                    {cert.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "compliance" && (
          <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 pt-2 select-none scroll-smooth snap-x snap-mandatory">
            {COMPLIANCE_AWARDS.map((cert, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 md:w-72 snap-center bg-zinc-900/40 backdrop-blur-2xl border border-white/[0.05] hover:border-rose-500/30 rounded-[24px] p-6 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(244,63,94,0.08)] flex flex-col justify-between group min-h-[220px]"
              >
                <div className="w-full bg-white/[0.04] border border-white/[0.08] rounded-[18px] p-4 flex items-center justify-center h-32 backdrop-blur-md group-hover:bg-white/[0.08] group-hover:border-white/[0.15] transition-all duration-300 mb-4 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-20 max-w-[85%] object-contain filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-lg md:text-xl font-semibold text-white uppercase tracking-wider group-hover:text-rose-400 transition-colors">
                    {cert.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
