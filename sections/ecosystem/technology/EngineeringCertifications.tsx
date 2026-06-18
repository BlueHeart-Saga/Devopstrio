"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function EngineeringCertifications() {
  const certifications = [
    { title: "Azure Certified", desc: "Solutions Architect & DevOps Expert" },
    { title: "AWS Certified", desc: "SysOps & Solutions Architect Professional" },
    { title: "Kubernetes Certified", desc: "CKA & CKAD Administrators" },
    { title: "Terraform Associate", desc: "HashiCorp Infrastructure Automation" },
    { title: "CISSP", desc: "Certified Information Systems Security" },
    { title: "Security+", desc: "CompTIA Systems Security Practitioner" },
    { title: "Databricks Certified", desc: "Data Engineering Associate" }
  ];

  return (
    <section id="certifications" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            VERIFIED EXPERTISE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Engineering <span className="text-rose-500">Certifications</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Our engineering boards hold validations across public cloud vendors, container platforms, and security organizations.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-zinc-950/40 border border-zinc-900/80 rounded-2xl p-6 hover:border-rose-500/10 transition-all duration-300 flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{cert.title}</h4>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900/60 flex items-center justify-between">
                <span className="text-[8px] font-mono text-zinc-555 font-bold uppercase tracking-wider">
                  VERIFIED CREDENTIAL
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
