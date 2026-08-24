"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const PARTNER_AWARDS = [
  { name: "AWS Specialization", desc: "SysOps & Solutions Architect", image: "/assets/ecosystem/aws-awards/image-118.png", category: "AWS" },
  { name: "AWS Partner Award", desc: "Top Tier Delivery Excellence", image: "/assets/ecosystem/aws-awards/image-120.png", category: "AWS" },
  { name: "Microsoft Solutions Partner", desc: "Infrastructure & Azure Specialist", image: "/assets/ecosystem/microsofr-awards/image-123.png", category: "Microsoft" },
  { name: "Microsoft Gold Competency", desc: "Cloud Platform Gold Tier", image: "/assets/ecosystem/microsofr-awards/image-124.png", category: "Microsoft" },
  { name: "GCP Premier Partner", desc: "Google Cloud Platform Premium", image: "/assets/ecosystem/GCP-award/image-130.png", category: "Google Cloud" },
  { name: "GCP Certified Expertise", desc: "Data & Analytics Excellence", image: "/assets/ecosystem/GCP-award/image-131.png", category: "Google Cloud" },
  { name: "Cisco Partner Award", desc: "Enterprise Networking & Security", image: "/assets/ecosystem/Cisco_Awards/image-187.png", category: "Cisco" },
  { name: "Cisco Certified Integrator", desc: "Advanced Networking Gold Status", image: "/assets/ecosystem/Cisco_Awards/image-188.png", category: "Cisco" },
  { name: "Oracle Cloud Solution", desc: "Oracle Cloud Infrastructure (OCI)", image: "/assets/ecosystem/ORACLE_Awards/image-154.png", category: "Oracle" },
  { name: "Oracle Gold Partner", desc: "Database & Cloud Infrastructure", image: "/assets/ecosystem/ORACLE_Awards/image-155.png", category: "Oracle" },
  { name: "SAP Partner Excellence", desc: "SAP Cloud Platform Integration", image: "/assets/ecosystem/Sap_Awards/image-180.png", category: "SAP" },
  { name: "SAP Gold Partner", desc: "ERP Modernization & Platform Specialist", image: "/assets/ecosystem/Sap_Awards/image-181.png", category: "SAP" },
  { name: "ServiceNow Elite Partner", desc: "Workflow Automation & ESM", image: "/assets/ecosystem/Servicenow_Aards/image-164.png", category: "ServiceNow" },
  { name: "ServiceNow Certified Partner", desc: "ITSM & ITOM Platform Specialist", image: "/assets/ecosystem/Servicenow_Aards/image-165.png", category: "ServiceNow" }
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
  { title: "ISO 27001 Certified", desc: "Information Security Management System", image: "/assets/Awards/ISO.png" },
  { title: "Cyber Essentials", desc: "UK Cyber Security Certification Standard", image: "/assets/Awards/2021-2022_Cyber_Essentials_Certification.png" },
  { title: "Computing Security Awards", desc: "Award-winning Cloud Infrastructure security", image: "/assets/Awards/2025_Computing_Security_Awards.png" },
  { title: "IT Europa Channel Awards", desc: "Finalist in Cloud Security Integrator categories", image: "/assets/Awards/Finalist_IT_Europa_Channel_Awards_2022.png" },
  { title: "Arctic Wolf Award", desc: "Elite Cyber Security Partner Award", image: "/assets/Awards/Arctic_Wolf_Partner_Awards.png" },
  { title: "Dell Gold Partner", desc: "Authorized Infrastructure Solutions Partner", image: "/assets/Awards/Dell_Technologies_Gold_Partner_2022-2023.png" },
  { title: "Tech Excellence Award", desc: "European IT & Software Excellence recognition", image: "/assets/About-page/awards/techmm.png" }
];

export function EngineeringCertifications() {
  const [activeTab, setActiveTab] = useState<"partners" | "engineering" | "compliance">("partners");

  return (
    <section id="certifications" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <Reveal className="text-left max-w-2xl">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              VERIFIED EXPERTISE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Engineering Certifications & <span className="text-rose-500">Awards</span>
            </h2>
            <p className="text-zinc-400 text-sm font-semibold">
              Our engineering boards hold validations across public cloud vendors, container platforms, security standards, and industry organizations.
            </p>
          </Reveal>

          {/* Premium Tab Bar Selector */}
          <div className="flex flex-wrap items-center gap-2 bg-zinc-950 border border-zinc-905 p-1.5 rounded-2xl self-start lg:self-end">
            <button
              onClick={() => setActiveTab("partners")}
              className={`px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "partners"
                  ? "bg-rose-600 text-white shadow-md"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-905"
              }`}
            >
              Partner Awards
            </button>
            <button
              onClick={() => setActiveTab("engineering")}
              className={`px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "engineering"
                  ? "bg-rose-600 text-white shadow-md"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-905"
              }`}
            >
              Engineering Certs
            </button>
            <button
              onClick={() => setActiveTab("compliance")}
              className={`px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "compliance"
                  ? "bg-rose-600 text-white shadow-md"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-905"
              }`}
            >
              Compliance & Awards
            </button>
          </div>
        </div>

        {/* Dynamic content rendering based on selected tab */}
        {activeTab === "partners" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {PARTNER_AWARDS.map((cert, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="bg-zinc-950/40 border border-zinc-900/80 rounded-3xl p-5 hover:border-rose-500/10 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] group">
                  <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center h-28 backdrop-blur-sm group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 mb-4">
                    <img src={cert.image}
                      alt={cert.name}
                      className="max-h-20 max-w-full object-contain filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                    loading="lazy" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] md:text-xs font-bold text-rose-500 uppercase tracking-widest block mb-2">
                      {cert.category}
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-2">{cert.name}</h4>
                    <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {activeTab === "engineering" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ENGINEERING_CERTS.map((cert, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="bg-zinc-950/40 border border-zinc-900/80 rounded-3xl p-5 hover:border-rose-500/10 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] group">
                  <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center h-28 backdrop-blur-sm group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 mb-4">
                    <img src={cert.image}
                      alt={cert.title}
                      className="max-h-20 max-w-full object-contain filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                    loading="lazy" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-2">{cert.title}</h4>
                    <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {activeTab === "compliance" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {COMPLIANCE_AWARDS.map((cert, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="bg-zinc-950/40 border border-zinc-900/80 rounded-3xl p-5 hover:border-rose-500/10 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] group">
                  <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center h-28 backdrop-blur-sm group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 mb-4">
                    <img src={cert.image}
                      alt={cert.title}
                      className="max-h-20 max-w-full object-contain filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                    loading="lazy" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-2">{cert.title}</h4>
                    <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
