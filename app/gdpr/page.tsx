import React from "react";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR Compliance | Devopstrio",
  description: "Devopstrio GDPR compliance details our commitments, data subject rights, security safeguards, and sub-processor regulations for European Union clients.",
};

export default function GDPRPage() {
  const sections = [
    {
      id: "gdpr-commitment",
      title: "GDPR Commitment Statement",
      content: (
        <div className="space-y-4">
          <p>
            The General Data Protection Regulation (GDPR) is a comprehensive data privacy law in the European Union (EU) that regulates how personal data is collected, handled, and protected.
          </p>
          <p>
            At Devopstrio, we prioritize the trust, security, and privacy of our global client network. We are fully aligned with the requirements of the GDPR. We ensure that all personal data belonging to EU citizens and residents processed by our co-engineering pipelines, cloud orchestration platforms, and consulting teams is handled with the highest standards of confidentiality, integrity, and safety.
          </p>
        </div>
      )
    },
    {
      id: "principles",
      title: "Core Data Protection Principles",
      content: (
        <div className="space-y-4">
          <p>
            All personal data processing activities conducted by Devopstrio adhere strictly to the fundamental principles set forth in Article 5 of the GDPR:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400">
            <li><strong className="text-zinc-300">Lawfulness, Fairness, and Transparency:</strong> We process data lawfully and fair, explaining all data collection operations clearly.</li>
            <li><strong className="text-zinc-300">Purpose Limitation:</strong> Personal data is collected only for specified, explicit, and legitimate business purposes, and is not processed in a manner incompatible with those intentions.</li>
            <li><strong className="text-zinc-300">Data Minimization:</strong> We limit personal data collection to what is strictly necessary in relation to the purposes for which they are processed.</li>
            <li><strong className="text-zinc-350 font-bold">Accuracy:</strong> We take every reasonable step to ensure inaccurate personal data is erased or corrected without delay.</li>
            <li><strong className="text-zinc-300">Storage Limitation:</strong> Data is kept in a form which permits identification of data subjects for no longer than is necessary.</li>
            <li><strong className="text-zinc-300">Integrity and Confidentiality:</strong> We handle data using appropriate technical and organizational security measures to prevent accidental loss, damage, or unauthorized access.</li>
          </ul>
        </div>
      )
    },
    {
      id: "data-subject-rights",
      title: "Your Data Subject Rights",
      content: (
        <div className="space-y-4">
          <p>
            Under the GDPR, individuals residing in the European Economic Area (EEA) have specific enforceable rights regarding their personal data:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-4">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-1 text-rose-500">Right of Access</span>
              <p className="text-xs text-zinc-450">You can request confirmation as to whether your personal data is being processed, and request a structured copy of that data.</p>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-4">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-1 text-rose-500">Right to Rectification</span>
              <p className="text-xs text-zinc-450">You have the right to request that we correct any inaccurate or incomplete personal data about you.</p>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-4">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-1 text-rose-500">Right to Erasure</span>
              <p className="text-xs text-zinc-450">Also known as the “Right to be Forgotten,” you can request that we delete your personal data under certain legal grounds.</p>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-4">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-1 text-rose-500">Right to Portability</span>
              <p className="text-xs text-zinc-450">You have the right to receive your personal data in a structured, commonly used, machine-readable format to transfer to another entity.</p>
            </div>
          </div>
          <p className="pt-2">
            To submit a Data Subject Access Request (DSAR), please contact our DPO at <a href="mailto:dpo@devopstrio.com" className="text-rose-500 hover:underline">dpo@devopstrio.com</a>. We will respond to your request within 30 days.
          </p>
        </div>
      )
    },
    {
      id: "controller-processor",
      title: "Processor vs Controller Roles",
      content: (
        <div className="space-y-4">
          <p>
            Depending on how we interact with your data, Devopstrio operates under two legal statuses:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400">
            <li><strong className="text-zinc-300">As a Data Controller:</strong> We act as a controller for the personal data of our website visitors, newsletter subscribers, job applicants, and client account managers. In these cases, we determine the purposes and means of processing.</li>
            <li><strong className="text-zinc-300">As a Data Processor:</strong> We act as a processor when rendering engineering, DevOps, and cloud services for our enterprise clients. In this capacity, we process personal data strictly in accordance with the client's documented instructions and the executed Data Processing Agreement (DPA).</li>
          </ul>
        </div>
      )
    },
    {
      id: "transfers-sccs",
      title: "International Transfers & SCCs",
      content: (
        <div className="space-y-4">
          <p>
            Devopstrio is a global company. In order to provide continuous 24/7 technical engineering, support, and consulting services, personal data may be accessed or processed by our personnel in engineering centers located outside the EU/EEA (such as in the USA and India).
          </p>
          <p>
            To ensure all personal data receives an adequate level of protection when transferred outside the EEA, we implement:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
            <li><strong className="text-zinc-300">Standard Contractual Clauses (SCCs):</strong> We use the EU-approved Standard Contractual Clauses for transfers of personal data to controllers and processors established in third countries.</li>
            <li><strong className="text-zinc-300">Supplementary Measures:</strong> We apply supplementary security measures, such as encryption before transmission, to shield the data from unauthorized access in transit.</li>
          </ul>
        </div>
      )
    },
    {
      id: "security-measures",
      title: "Technical & Organizational Security Measures",
      content: (
        <div className="space-y-4">
          <p>
            To comply with Article 32 of the GDPR, we have implemented state-of-the-art technical and organizational measures to ensure a level of security appropriate to the risks of data processing:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
            <li><strong className="text-zinc-300">Data Encryption:</strong> Encryption of all personal data in transit using TLS 1.3 and at rest using AES-256.</li>
            <li><strong className="text-zinc-300">Access Control:</strong> Implementing strictly enforced multi-factor authentication (MFA) and Least-Privilege access profiles.</li>
            <li><strong className="text-zinc-300">Security Auditing:</strong> Regular vulnerability scanning, internal network pen-testing, and SOC 2 Type II audit alignments.</li>
            <li><strong className="text-zinc-300">Employee Training:</strong> Mandatory annual security and privacy compliance training for all Devopstrio developers and engineers.</li>
          </ul>
        </div>
      )
    },
    {
      id: "incident-response",
      title: "Data Breach Notification Protocol",
      content: (
        <p>
          In the event of a confirmed security incident resulting in the accidental or unlawful destruction, loss, alteration, or unauthorized disclosure of personal data, Devopstrio will invoke its Incident Response Protocol. Under this policy, we commit to notifying the relevant supervisory authorities within <strong>72 hours</strong> of becoming aware of the breach, and notifying impacted clients and individuals without undue delay if the breach is likely to result in a high risk to their rights and freedoms.
        </p>
      )
    },
    {
      id: "subprocessors",
      title: "Authorized Sub-Processors",
      content: (
        <div className="space-y-4">
          <p>
            Devopstrio works with third-party service providers (sub-processors) to deliver cloud hosting, CRM services, and website analytics. All sub-processors are vetted for security and are required to enter into DPAs that match our GDPR commitments.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-900 text-zinc-400 font-mono">
                  <th className="py-2.5">Entity Name</th>
                  <th className="py-2.5">Service Provided</th>
                  <th className="py-2.5">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                <tr>
                  <td className="py-3 font-semibold">Amazon Web Services (AWS)</td>
                  <td className="py-3">Cloud Infrastructure Hosting</td>
                  <td className="py-3">USA / EU (Ireland)</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Google Cloud Platform (GCP)</td>
                  <td className="py-3">Data Analytics & Staging</td>
                  <td className="py-3">USA / EU (Frankfurt)</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Microsoft Azure</td>
                  <td className="py-3">Enterprise Dev Environments</td>
                  <td className="py-3">USA / EU (Netherlands)</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">HubSpot</td>
                  <td className="py-3">Client Relationship Management (CRM)</td>
                  <td className="py-3">USA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: "dpo",
      title: "Data Protection Officer (DPO)",
      content: (
        <div className="space-y-4">
          <p>
            Devopstrio has appointed a dedicated Data Protection Officer to supervise compliance with data protection laws and serve as a direct point of contact for regulatory bodies and data subjects.
          </p>
          <div className="bg-zinc-950/60 border border-zinc-900 rounded-2xl p-6 text-xs space-y-1.5">
            <p className="font-bold text-white text-sm">Devopstrio Data Protection Officer</p>
            <p className="text-zinc-400">Attention: Legal & Trust Department</p>
            <p className="text-zinc-400">Email: <a href="mailto:dpo@devopstrio.com" className="text-rose-500 hover:underline">dpo@devopstrio.com</a></p>
            <p className="text-zinc-400">Address: Devopstrio Limited, One World Trade Center, Floor 85, New York, NY 10007, USA</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <LegalPageLayout
      title="GDPR Compliance"
      subtitle="How Devopstrio adheres to European data protection standards, safeguarding rights, implementing DPAs, and establishing secure technical boundaries."
      lastUpdated="June 16, 2026"
      sections={sections}
    />
  );
}
