import React from "react";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Devopstrio",
  description: "Devopstrio privacy policy outlines our data collection, processing, and protection practices for enterprise cloud and AI services.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p>
            Welcome to Devopstrio (“we,” “us,” or “our”). Devopstrio is a global technology consulting and co-engineering partner specializing in building compliant, cloud-native enterprise runtimes, artificial intelligence platforms, and secure digital products. We are deeply committed to protecting your privacy and securing any personal data you share with us.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (www.devopstrio.com), engage with our marketing programs, or utilize our consulting and technical engineering services. It also details your rights regarding your personal data under global data protection regulations, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
          </p>
          <p>
            Depending on your relationship with us, Devopstrio may act as either a <strong>Data Controller</strong> (e.g., when deciding how to process information from website visitors or marketing leads) or a <strong>Data Processor</strong> (e.g., when hosting, migrating, or managing enterprise software pipelines on behalf of our corporate clients).
          </p>
        </div>
      )
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      content: (
        <div className="space-y-6">
          <p>
            We collect information that identifies, relates to, describes, or is reasonably capable of being associated with you. The categories of information we collect depend on the nature of your interaction with Devopstrio.
          </p>
          
          <div>
            <h4 className="text-white font-bold mb-2 text-sm">A. Personal Identifiable Information (PII) Provided Voluntarily</h4>
            <p className="mb-2">We collect contact and professional information when you fill out contact forms, subscribe to our newsletter, download resources, apply for a job, or initiate a service request. This includes:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
              <li><strong className="text-zinc-300">Identity Data:</strong> First name, last name, title, and job role.</li>
              <li><strong className="text-zinc-300">Contact Data:</strong> Corporate email address, telephone number, physical office address, and country.</li>
              <li><strong className="text-zinc-300">Professional Data:</strong> Company name, department, industry category, current infrastructure configurations, and technology stack parameters.</li>
              <li><strong className="text-zinc-300">Employment Application Data:</strong> Resumes, CVs, portfolios, educational history, and LinkedIn profile URLs.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2 text-sm">B. Automatically Collected Technical & Usage Data</h4>
            <p className="mb-2">When you navigate our website, we automatically log metadata about your device and network interactions, including:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
              <li><strong className="text-zinc-300">Device Details:</strong> IP address, browser type, operating system version, screen resolution, and hardware properties.</li>
              <li><strong className="text-zinc-300">Usage Information:</strong> Specific pages visited, duration of stay, referring URLs, click patterns, and interactions with embedded tools or case studies.</li>
              <li><strong className="text-zinc-300">Geolocation:</strong> General geographic location parsed from your IP address (country, region, or city level).</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p>
            We process your personal information only for legitimate business purposes. Specifically, we use your data to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400">
            <li><strong className="text-zinc-300">Deliver Services:</strong> Execute consulting statements of work, establish secure dev/prod environments, manage cloud migrations, and provide engineering support.</li>
            <li><strong className="text-zinc-300">Optimize Website Performance:</strong> Analyze usage trends to refine navigation, improve load times, and enhance user experience.</li>
            <li><strong className="text-zinc-300">Marketing & Communication:</strong> Share insights, newsletters, and announcements tailored to your technology preferences (subject to your opt-out rights).</li>
            <li><strong className="text-zinc-300">Enhance Cybersecurity:</strong> Identify and block unauthorized site access, prevent malware distributions, and monitor system health.</li>
            <li><strong className="text-zinc-300">Recruitment:</strong> Review and process career applications, contact references, and schedule technical evaluations.</li>
          </ul>
        </div>
      )
    },
    {
      id: "legal-basis",
      title: "Legal Basis for Processing",
      content: (
        <div className="space-y-4">
          <p>
            Under European data protection laws, we are required to establish the legal grounds for processing your personal information. These legal bases include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-4">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-1 text-rose-500">Performance of a Contract</span>
              <p className="text-xs text-zinc-400">Where processing is essential to fulfill our contractual commitments, deliver co-engineering services, or respond to official RFP inputs.</p>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-4">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-1 text-rose-500">Legitimate Interests</span>
              <p className="text-xs text-zinc-400">For our reasonable corporate interests, such as marketing research, system integrity, software debugging, and infrastructure security checks.</p>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-4">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-1 text-rose-500">Explicit Consent</span>
              <p className="text-xs text-zinc-400">When you voluntarily submit your details for newsletters, downloadable white papers, or consent to cookie storage.</p>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-4">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-1 text-rose-500">Legal Obligation</span>
              <p className="text-xs text-zinc-400">To comply with statutory legal demands, tax reporting audits, and judicial orders from relevant governing bodies.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "data-sharing",
      title: "Data Sharing & Third-Party Disclosure",
      content: (
        <div className="space-y-4">
          <p>
            Devopstrio maintains a strict policy: <strong>we do not sell, rent, or trade your personal data to third parties for marketing purposes.</strong>
          </p>
          <p>
            We may disclose information to trusted partners who assist us in operating our site and rendering services, provided they contractually pledge to keep your information confidential. Shared data categories are limited to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
            <li><strong className="text-zinc-300">Infrastructure Providers:</strong> Secure hosting environments powered by AWS, Microsoft Azure, or Google Cloud Platform.</li>
            <li><strong className="text-zinc-300">Analytics Providers:</strong> Performance monitoring tools (e.g., Google Analytics, Hotjar) configured to anonymize user addresses.</li>
            <li><strong className="text-zinc-300">Compliance & Legal Bodies:</strong> In instances where disclosure is legally mandated by subpoena, court order, or national security regulation.</li>
          </ul>
        </div>
      )
    },
    {
      id: "cross-border-transfers",
      title: "International Data Transfers",
      content: (
        <div className="space-y-4">
          <p>
            As a global agency, Devopstrio operates collaborative engineering hubs across multiple countries. Information collected through our site or services may be transferred, processed, and stored in countries outside your country of residence (including the United States and India).
          </p>
          <p>
            To guarantee these transfers possess equivalent privacy protection, Devopstrio relies on recognized legal frameworks:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400">
            <li><strong className="text-zinc-300">Standard Contractual Clauses (SCCs):</strong> We enter into European Commission-approved SCC agreements with our global subsidiaries and sub-processors.</li>
            <li><strong className="text-zinc-300">Data Processing Agreements (DPAs):</strong> Rigorous service-level DPAs are established with all enterprise clients before cross-border infrastructure work begins.</li>
          </ul>
        </div>
      )
    },
    {
      id: "security",
      title: "Security and Safeguards",
      content: (
        <div className="space-y-4">
          <p>
            Protecting your data is built into the architecture of our organization. We utilize a range of technical, physical, and administrative measures to mitigate unauthorized access, disclosure, alteration, or destruction.
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
            <li><strong className="text-zinc-300">Encryption:</strong> All data in transit is encrypted using TLS 1.3, and databases are encrypted at rest using AES-256 standards.</li>
            <li><strong className="text-zinc-300">Access Control:</strong> Standardized Role-Based Access Controls (RBAC) ensure only authorized engineers, under active non-disclosure agreements, can touch infrastructure.</li>
            <li><strong className="text-zinc-300">Vulnerability Testing:</strong> We run automated security audits, threat monitoring, and penetration testing on our services and applications regularly.</li>
          </ul>
        </div>
      )
    },
    {
      id: "data-retention",
      title: "Data Retention Schedule",
      content: (
        <div className="space-y-4">
          <p>
            We retain your personal data only as long as necessary to satisfy the purposes for which it was gathered, including satisfying legal, tax, accounting, or reporting guidelines.
          </p>
          <p>
            When data is no longer required, we securely delete or anonymize it. For example, marketing inquiries are kept for a maximum of 24 months after the last contact, while employee application records are stored for 12 months unless otherwise requested.
          </p>
        </div>
      )
    },
    {
      id: "your-rights",
      title: "Your Rights and Choices",
      content: (
        <div className="space-y-4">
          <p>
            Depending on your local regulations (such as GDPR in Europe or CCPA/CPRA in California), you possess the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400">
            <li><strong className="text-zinc-300">Right to Access (DSAR):</strong> Request copies of the personal data we hold about you.</li>
            <li><strong className="text-zinc-300">Right to Rectification:</strong> Request correction of inaccurate, incomplete, or out-of-date information.</li>
            <li><strong className="text-zinc-300">Right to Erasure (“Right to be Forgotten”):</strong> Request the permanent deletion of your personal data under certain conditions.</li>
            <li><strong className="text-zinc-300">Right to Object / Restrict:</strong> Object to processing based on legitimate interests or request restrictions on data manipulation.</li>
            <li><strong className="text-zinc-300">Right to Data Portability:</strong> Request that your data be provided in a structured, machine-readable format for transfer to another service provider.</li>
          </ul>
          <p className="pt-2">
            To exercise any of these rights, please send an email request to our Data Protection Officer at <a href="mailto:privacy@devopstrio.com" className="text-rose-500 hover:underline">privacy@devopstrio.com</a>.
          </p>
        </div>
      )
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      content: (
        <p>
          Our services, platform tools, and websites are not designed for or targeted towards individuals under the age of 16. We do not knowingly collect personal data from children. If we discover that a child under 16 has submitted personal data to us, we will immediately purge the record from our active databases.
        </p>
      )
    },
    {
      id: "changes-policy",
      title: "Changes to This Privacy Policy",
      content: (
        <p>
          We update this policy periodically to reflect changes in our technologies, regulatory landscapes, or service configurations. When updates occur, we modify the “Last Updated” date at the top of the policy. We encourage you to review this policy occasionally to stay informed about how we safeguard your information.
        </p>
      )
    },
    {
      id: "contact",
      title: "Contact Information",
      content: (
        <div className="space-y-4">
          <p>
            If you have questions, comments, or complaints regarding this Privacy Policy or our data processing procedures, please contact our team:
          </p>
          <div className="bg-zinc-950/60 border border-zinc-900 rounded-2xl p-6 text-xs space-y-2">
            <p className="font-bold text-white text-sm">Devopstrio Trust, Risk, & Compliance Department</p>
            <p className="text-zinc-400">Email: <a href="mailto:trust@devopstrio.com" className="text-rose-500 hover:underline">trust@devopstrio.com</a></p>
            <p className="text-zinc-400">Address: Devopstrio Limited, One World Trade Center, Floor 85, New York, NY 10007, USA</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How Devopstrio protects, manages, and respects your personal data in connection with our website and enterprise engineering platforms."
      lastUpdated="June 16, 2026"
      sections={sections}
    />
  );
}
