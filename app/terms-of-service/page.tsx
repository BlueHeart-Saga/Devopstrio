import React from "react";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Devopstrio",
  description: "Devopstrio Terms of Service outline the legal terms, client obligations, and governance details for our enterprise technical services.",
};

export default function TermsOfServicePage() {
  const sections = [
    {
      id: "agreement-terms",
      title: "Agreement to Terms",
      content: (
        <div className="space-y-4">
          <p>
            These Terms of Service (“Terms”) constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you” or “Client”), and Devopstrio Limited (“Devopstrio,” “we,” “us,” or “our”), concerning your access to and use of the www.devopstrio.com website as well as any other media form, media channel, mobile website, or related applications (collectively, the “Site”) and our professional engineering services.
          </p>
          <p>
            By accessing the Site or utilizing our services, you agree that you have read, understood, and agreed to be bound by all of these Terms. If you do not agree with all of these Terms, then you are expressly prohibited from using the Site and our services, and you must discontinue use immediately.
          </p>
          <p>
            Supplemental terms and conditions or documents that may be posted on the Site or established in a signed Statement of Work (SOW) from time to time are hereby expressly incorporated herein by reference.
          </p>
        </div>
      )
    },
    {
      id: "services-overview",
      title: "Description of Services",
      content: (
        <div className="space-y-4">
          <p>
            Devopstrio provides high-performance professional consulting, software development, cloud infrastructure planning, and co-engineering services. Our core practices include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400">
            <li><strong className="text-zinc-300">AI & Data Innovation:</strong> Planning, training, and deploying large language models, reinforcement learning networks, and automated data pipelines.</li>
            <li><strong className="text-zinc-300">Cloud & Infrastructure:</strong> Modernizing application runtimes, deploying Kubernetes clusters, and setting up hybrid multi-cloud systems.</li>
            <li><strong className="text-zinc-300">DevOps & CI/CD Pipelines:</strong> Optimizing deployment cycles, creating infrastructure-as-code (IaC), and automated vulnerability testing.</li>
            <li><strong className="text-zinc-300">Cybersecurity Architecture:</strong> Threat modeling, vulnerability checking, regulatory compliance alignment, and identity access control setup.</li>
          </ul>
          <p>
            Specific deliverables, timelines, milestones, and technical parameters will be detailed in individual Statements of Work executed between the Client and Devopstrio.
          </p>
        </div>
      )
    },
    {
      id: "client-responsibilities",
      title: "Client Responsibilities & Credentials",
      content: (
        <div className="space-y-4">
          <p>
            To enable Devopstrio to perform the services outlined in an SOW, the Client agrees to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
            <li>Provide timely, secure access to target code repositories, staging servers, and cloud infrastructure subscriptions.</li>
            <li>Designate a qualified technical lead or product owner to act as the primary contact for deliverables approvals.</li>
            <li>Verify all prerequisites, data schemas, and API documentation shared with Devopstrio are accurate and fully compliant with applicable third-party terms.</li>
            <li>Secure corporate login credentials and API keys, ensuring no unauthorized personnel gain access to shared workspace dashboards.</li>
          </ul>
        </div>
      )
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Ownership",
      content: (
        <div className="space-y-4">
          <p>
            Unless otherwise agreed in a separate written contract, the division of intellectual property (IP) is governed by the following rules:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400">
            <li><strong className="text-zinc-300">Client Deliverables:</strong> Upon full and final payment of all outstanding invoices, all custom code, custom documentation, and bespoke software scripts created specifically for the Client under an SOW will be owned by the Client as “work made for hire.”</li>
            <li><strong className="text-zinc-300">Devopstrio Background IP:</strong> Devopstrio retains exclusive ownership of all generic tools, proprietary libraries, standard templates, and pre-existing software structures used to accelerate service delivery. We grant the Client a perpetual, royalty-free, non-exclusive license to use any Background IP embedded within the deliverables.</li>
          </ul>
        </div>
      )
    },
    {
      id: "payment-terms",
      title: "Fees, Billing, and Payment",
      content: (
        <div className="space-y-4">
          <p>
            Clients agree to pay all fees associated with chosen service plans or specific SOW deliverables.
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
            <li><strong className="text-zinc-300">Invoicing Cycle:</strong> Invoices are issued based on agreed milestones or monthly time-and-materials schedules. Standard payment terms are Net 30 days unless stated otherwise.</li>
            <li><strong className="text-zinc-300">Late Payments:</strong> Late payments will accrue interest at the rate of 1.5% per month or the highest rate permitted by law, whichever is lower, on the outstanding balance.</li>
            <li><strong className="text-zinc-300">Taxes:</strong> All fees are exclusive of local, state, federal, or international taxes (including VAT, sales tax, or withholding tax), which are the sole responsibility of the Client.</li>
          </ul>
        </div>
      )
    },
    {
      id: "acceptable-use",
      title: "Acceptable Use & Conduct",
      content: (
        <div className="space-y-4">
          <p>
            You may not access or use the Site or our service sandboxes for any purpose other than that for which we make them available. Prohibited activities include:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
            <li>Attempting to bypass security barriers, run unauthorized vulnerability scans, or disrupt server performance.</li>
            <li>Using automated crawlers, scrapers, or indexing tools to systematically copy site pages, designs, or proprietary resource guides.</li>
            <li>Impersonating Devopstrio representatives, fabricating contact identities, or submitting fraudulent project applications.</li>
            <li>Using our delivered systems or code for illegal practices, malware distribution, or in violation of international trade embargoes.</li>
          </ul>
        </div>
      )
    },
    {
      id: "confidentiality",
      title: "Confidentiality & Non-Disclosure",
      content: (
        <div className="space-y-4">
          <p>
            Both parties agree to treat all business plans, software architecture diagrams, source code repositories, pricing formulas, and product roadmaps shared during the engagement as <strong>Confidential Information</strong>.
          </p>
          <p>
            Neither party will disclose the other’s Confidential Information to any third party, except to employees, advisors, or sub-processors on a need-to-know basis and subject to comparable non-disclosure obligations. This obligation persists for a period of five (5) years following the termination of our services agreement.
          </p>
        </div>
      )
    },
    {
      id: "warranties-disclaimer",
      title: "Warranties Disclaimer",
      content: (
        <div className="space-y-4">
          <p className="uppercase font-bold text-zinc-200 text-xs tracking-wider">
            EXCEPT AS EXPRESSLY WRITTEN IN A SIGNED STATEMENT OF WORK, ALL SERVICES, PLATFORMS, CODE SAMPLES, AND SITE CONTENT ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS.
          </p>
          <p>
            Devopstrio makes no warranties of any kind, whether express, implied, statutory, or otherwise, regarding the performance, merchantability, or fitness for a particular purpose of our deliverables. We do not warrant that our co-engineered products will be entirely error-free, uninterrupted, or immune to emerging cybersecurity threat vectors.
          </p>
        </div>
      )
    },
    {
      id: "liability-limitation",
      title: "Limitation of Liability",
      content: (
        <div className="space-y-4">
          <p className="uppercase font-bold text-zinc-200 text-xs tracking-wider">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DEVOPSTRIO'S AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF THESE TERMS WILL BE LIMITED TO THE TOTAL AMOUNT PAID BY THE CLIENT TO DEVOPSTRIO IN THE SIX (6) MONTHS PRECEDING THE CLAIM EVENT.
          </p>
          <p>
            In no event shall Devopstrio, its directors, employees, or partners, be liable to you or any third party for any indirect, consequential, exemplary, incidental, special, or punitive damages—including lost profits, lost data, business interruptions, or procurement of substitute services—even if we have been advised of the possibility of such damages.
          </p>
        </div>
      )
    },
    {
      id: "termination",
      title: "Termination and Suspension",
      content: (
        <div className="space-y-4">
          <p>
            Either party may terminate these Terms or an active Statement of Work:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
            <li>For convenience, by providing thirty (30) days prior written notice to the other party, subject to payment for all work performed up to the termination date.</li>
            <li>Immediately for cause, if the other party breaches any material term of these Terms or an active SOW and fails to cure such breach within fifteen (15) days of receiving written notice thereof.</li>
          </ul>
          <p>
            Upon termination, all licenses granted to unpaid deliverables will terminate, and each party will destroy or return the other’s Confidential Information in its possession.
          </p>
        </div>
      )
    },
    {
      id: "governing-law",
      title: "Governing Law & Disputes",
      content: (
        <div className="space-y-4">
          <p>
            These Terms and any dispute arising out of or related to them shall be governed by, and construed in accordance with, the laws of the State of New York, USA, without regard to conflict of law principles.
          </p>
          <p>
            Any legal action or proceeding arising under these Terms shall be resolved exclusively through binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules. The arbitration shall take place in New York County, New York, and will be conducted in English.
          </p>
        </div>
      )
    },
    {
      id: "miscellaneous",
      title: "Miscellaneous",
      content: (
        <div className="space-y-4">
          <p>
            These Terms, along with any executed Statements of Work, constitute the entire agreement between you and Devopstrio. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision.
          </p>
          <p>
            If any provision of these Terms is determined to be unlawful, void, or unenforceable, that provision is deemed severable and does not affect the validity and enforceability of any remaining provisions.
          </p>
        </div>
      )
    }
  ];

  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="Standard terms and conditions governing the utilization of Devopstrio co-engineering practices, advisory services, and digital platform access."
      lastUpdated="June 16, 2026"
      sections={sections}
    />
  );
}
