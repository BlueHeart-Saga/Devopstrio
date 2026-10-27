import React from "react";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/Schemas";

export const metadata: Metadata = {
  title: "Corporate Privacy Policy & Data Protection Rights | Devopstrio",
  description: "Devopstrio privacy policy outlines our data collection, processing, and protection practices for enterprise cloud and AI services.",
  alternates: {
    canonical: "/privacy-policy"
  }
};

const privacyFaqs = [
  {
    q: "How does Devopstrio protect personal data under GDPR and CCPA?",
    a: "We act as Data Controller and Data Processor under strict ISO 27001 and SOC-2 guidelines, utilizing TLS 1.3 encryption in transit, AES-256 at rest, and zero-trust RBAC access controls."
  },
  {
    q: "Does Devopstrio sell or share personal data to third parties?",
    a: "No. Devopstrio maintains a strict policy never to sell, rent, or trade personal data to third parties for marketing purposes."
  }
];

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p>
            Welcome to Devopstrio (“we,” “us,” or “our”). Devopstrio is a global <Link href="/services/it-consulting" className="text-rose-400 hover:text-rose-300 hover:underline font-medium transition-colors">technology consulting</Link> and co-engineering partner specializing in building compliant, <Link href="/services/cloud-services" className="text-rose-400 hover:text-rose-300 hover:underline font-medium transition-colors">cloud-native enterprise runtimes</Link>, <Link href="/services/ai-data-innovation" className="text-rose-400 hover:text-rose-300 hover:underline font-medium transition-colors">artificial intelligence platforms</Link>, and secure digital products. We are deeply committed to protecting your privacy and securing any personal data you share with us.
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
          
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-white">A. Personal Identifiable Information (PII) Provided Voluntarily</h3>
            <p>We collect contact and professional information when you fill out contact forms, subscribe to our newsletter, download resources, apply for a job, or initiate a service request. This includes:</p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 marker:text-rose-500">
              <li><strong className="text-white font-semibold">Identity Data:</strong> First name, last name, title, and job role.</li>
              <li><strong className="text-white font-semibold">Contact Data:</strong> Corporate email address, telephone number, physical office address, and country.</li>
              <li><strong className="text-white font-semibold">Professional Data:</strong> Company name, department, industry category, current infrastructure configurations, and technology stack parameters.</li>
              <li><strong className="text-white font-semibold">Employment Application Data:</strong> Resumes, CVs, portfolios, educational history, and LinkedIn profile URLs.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-white">B. Automatically Collected Technical & Usage Data</h3>
            <p>When you navigate our website, we automatically log metadata about your device and network interactions, including:</p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 marker:text-rose-500">
              <li><strong className="text-white font-semibold">Device Details:</strong> IP address, browser type, operating system version, screen resolution, and hardware properties.</li>
              <li><strong className="text-white font-semibold">Usage Information:</strong> Specific pages visited, duration of stay, referring URLs, click patterns, and interactions with embedded tools or case studies.</li>
              <li><strong className="text-white font-semibold">Geolocation:</strong> General geographic location parsed from your IP address (country, region, or city level).</li>
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
          <ul className="list-disc pl-6 space-y-3 text-zinc-300 marker:text-rose-500">
            <li><strong className="text-white font-semibold">Deliver Services:</strong> Execute consulting statements of work, establish secure dev/prod environments, manage cloud migrations via our <Link href="/services/devops-automation" className="text-rose-400 hover:text-rose-300 hover:underline font-medium transition-colors">DevOps workflows</Link>, and provide engineering support.</li>
            <li><strong className="text-white font-semibold">Optimize Website Performance:</strong> Analyze usage trends to refine navigation, improve load times, and enhance user experience.</li>
            <li><strong className="text-white font-semibold">Marketing & Communication:</strong> Share insights, newsletters, and announcements tailored to your technology preferences (subject to your opt-out rights).</li>
            <li><strong className="text-white font-semibold">Enhance Cybersecurity:</strong> Identify and block unauthorized site access, prevent malware distributions, and monitor system health under our <Link href="/services/cybersecurity" className="text-rose-400 hover:text-rose-300 hover:underline font-medium transition-colors">cybersecurity services</Link>.</li>
            <li><strong className="text-white font-semibold">Recruitment:</strong> Review and process career applications, contact references, and schedule technical evaluations.</li>
          </ul>
        </div>
      )
    },
    {
      id: "legal-basis",
      title: "Legal Basis for Processing",
      content: (
        <div className="space-y-5">
          <p>
            Under European data protection laws, we are required to establish the legal grounds for processing your personal information. These legal bases include:
          </p>
          <div className="space-y-6 pt-1">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Performance of a Contract</h3>
              <p>Where processing is essential to fulfill our contractual commitments, deliver co-engineering services, or respond to official RFP inputs.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Legitimate Interests</h3>
              <p>For our reasonable corporate interests, such as marketing research, system integrity, software debugging, and infrastructure security checks.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Explicit Consent</h3>
              <p>When you voluntarily submit your details for newsletters, downloadable white papers, or consent to cookie storage.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Legal Obligation</h3>
              <p>To comply with statutory legal demands, tax reporting audits, and judicial orders from relevant governing bodies.</p>
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
          <ul className="list-disc pl-6 space-y-3 text-zinc-300 marker:text-rose-500">
            <li><strong className="text-white font-semibold">Infrastructure Providers:</strong> Secure hosting environments powered by AWS, Microsoft Azure, or Google Cloud Platform.</li>
            <li><strong className="text-white font-semibold">Analytics Providers:</strong> Performance monitoring tools (e.g., Google Analytics, Hotjar) configured to anonymize user addresses.</li>
            <li><strong className="text-white font-semibold">Compliance & Legal Bodies:</strong> In instances where disclosure is legally mandated by subpoena, court order, or national security regulation.</li>
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
          <ul className="list-disc pl-6 space-y-3 text-zinc-300 marker:text-rose-500">
            <li><strong className="text-white font-semibold">Standard Contractual Clauses (SCCs):</strong> We enter into European Commission-approved SCC agreements with our global subsidiaries and sub-processors.</li>
            <li><strong className="text-white font-semibold">Data Processing Agreements (DPAs):</strong> Rigorous service-level DPAs are established with all enterprise clients before cross-border infrastructure work begins.</li>
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
          <ul className="list-disc pl-6 space-y-3 text-zinc-300 marker:text-rose-500">
            <li><strong className="text-white font-semibold">Encryption:</strong> All data in transit is encrypted using TLS 1.3, and databases are encrypted at rest using AES-256 standards.</li>
            <li><strong className="text-white font-semibold">Access Control:</strong> Standardized Role-Based Access Controls (RBAC) ensure only authorized engineers, under active non-disclosure agreements, can touch infrastructure.</li>
            <li><strong className="text-white font-semibold">Vulnerability Testing:</strong> We run automated security audits, threat monitoring, and penetration testing on our services and applications regularly.</li>
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
            Depending on your local regulations (such as <Link href="/gdpr" className="text-rose-400 hover:text-rose-300 hover:underline font-medium transition-colors">GDPR in Europe</Link> or CCPA/CPRA in California), you possess the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-zinc-300 marker:text-rose-500">
            <li><strong className="text-white font-semibold">Right to Access (DSAR):</strong> Request copies of the personal data we hold about you.</li>
            <li><strong className="text-white font-semibold">Right to Rectification:</strong> Request correction of inaccurate, incomplete, or out-of-date information.</li>
            <li><strong className="text-white font-semibold">Right to Erasure (“Right to be Forgotten”):</strong> Request the permanent deletion of your personal data under certain conditions.</li>
            <li><strong className="text-white font-semibold">Right to Object / Restrict:</strong> Object to processing based on legitimate interests or request restrictions on data manipulation.</li>
            <li><strong className="text-white font-semibold">Right to Data Portability:</strong> Request that your data be provided in a structured, machine-readable format for transfer to another service provider.</li>
          </ul>
          <p className="pt-2">
            To exercise any of these rights, please send an email request to our Data Protection Officer at <a href={`mailto:${process.env.NEXT_PUBLIC_PRIVACY_EMAIL}`} className="text-rose-400 hover:text-rose-300 hover:underline font-medium transition-colors">{process.env.NEXT_PUBLIC_PRIVACY_EMAIL}</a>.
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
          <div className="space-y-2 pt-2">
            <p className="font-semibold text-white text-lg">Devopstrio Trust, Risk, & Compliance Department</p>
            <p className="text-zinc-300 text-base">
              Email:{" "}
              <a href={`mailto:${process.env.NEXT_PUBLIC_TRUST_EMAIL}`} className="text-rose-400 hover:text-rose-300 hover:underline font-medium transition-colors">
                {process.env.NEXT_PUBLIC_TRUST_EMAIL}
              </a>
            </p>
            <p className="text-zinc-300 text-base">Address: Devopstrio Limited, One World Trade Center, Floor 85, New York, NY 10007, USA</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "Privacy Policy", item: "/privacy-policy" }
      ]} />
      <FAQSchema faqs={privacyFaqs} />
      <LegalPageLayout
        title="Privacy Policy"
        lastUpdated="June 16, 2026"
        sections={sections}
      />
    </>
  );
}
