import React from "react";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Devopstrio",
  description: "Devopstrio website and services disclaimer outlines general information limits, professional advice exclusions, and liability boundaries.",
};

export default function DisclaimerPage() {
  const sections = [
    {
      id: "general-disclaimer",
      title: "General Information Only",
      content: (
        <div className="space-y-4">
          <p>
            The information provided on the Devopstrio website (www.devopstrio.com) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>
          <p>
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
          </p>
        </div>
      )
    },
    {
      id: "professional-advisory",
      title: "No Professional Services or Advisory Advice",
      content: (
        <div className="space-y-4">
          <p>
            The Site cannot and does not contain specific IT infrastructure architecture, cybersecurity audit, or corporate legal advice. The technical content, code snippets, configuration scripts, and architectural templates provided on our blog, resource page, or insights hub are for educational purposes only.
          </p>
          <p>
            They do not constitute professional consulting advice and should not be used as a substitute for custom professional evaluations. Before taking any actions based upon such information, we encourage you to consult with the appropriate technical specialists.
          </p>
          <p>
            The use or reliance of any code samples, architectural layouts, or configuration guides contained on this site is solely at your own risk.
          </p>
        </div>
      )
    },
    {
      id: "warranties-guarantees",
      title: "No Warranties or Guarantees",
      content: (
        <div className="space-y-4">
          <p>
            Devopstrio does not guarantee that the website is free from computer viruses, malicious scripts, software bugs, or structural defects. We do not guarantee that the Site will operate continuously without interruption, or that any identified bugs will be corrected immediately.
          </p>
          <p>
            The website and all materials published on it are provided on an “as is” and “as available” basis without warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
        </div>
      )
    },
    {
      id: "external-links",
      title: "External Links Disclaimer",
      content: (
        <div className="space-y-4">
          <p>
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>
          <p>
            We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
          </p>
        </div>
      )
    },
    {
      id: "ip-trademarks",
      title: "Intellectual Property and Trademarks",
      content: (
        <div className="space-y-4">
          <p>
            All brand names, product names, logos, and trademarks referenced on the Devopstrio website (including AWS, Azure, Google Cloud, Kubernetes, Terraform, Docker, etc.) are the property of their respective owners.
          </p>
          <p>
            Reference to these third-party companies, systems, or platforms does not imply or constitute an endorsement, sponsorship, or recommendation of Devopstrio by those companies, nor does it imply endorsement of those companies by Devopstrio, unless explicitly stated otherwise.
          </p>
        </div>
      )
    },
    {
      id: "views-expressed",
      title: "Views Expressed Disclaimer",
      content: (
        <p>
          Any views or opinions represented in the blog posts, white papers, or case studies published on the Site belong solely to the individual authors and do not represent those of people, institutions, or organizations that Devopstrio may or may not be associated with in professional or personal capacity, unless explicitly stated. Any views or opinions are not intended to malign any religion, ethnic group, club, organization, company, or individual.
        </p>
      )
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      content: (
        <p>
          To the maximum extent permitted by law, Devopstrio and its officers, directors, employees, or agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to, use of, or inability to use the website, or any errors or omissions in the content thereof, even if Devopstrio has been advised of the possibility of such damages.
        </p>
      )
    },
    {
      id: "service-availability",
      title: "Service and Website Modifications",
      content: (
        <p>
          We reserve the right to modify, suspend, or discontinue, temporarily or permanently, the website or any service, feature, or asset provided on the website, with or without notice, at any time. You agree that Devopstrio shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Site or any part thereof.
        </p>
      )
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: (
        <p>
          This Disclaimer and all legal relationships arising out of your use of the website shall be governed by and construed in accordance with the laws of the State of New York, USA, without giving effect to any principles of conflicts of law.
        </p>
      )
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <div className="space-y-4">
          <p>
            If you have questions, feedback, or concerns regarding any details within this Disclaimer, please contact our Legal department:
          </p>
          <div className="bg-zinc-950/60 border border-zinc-900 rounded-2xl p-6 text-xs space-y-1.5">
            <p className="font-bold text-white text-sm">Devopstrio Legal Department</p>
            <p className="text-zinc-400">Email: <a href="mailto:legal@devopstrio.com" className="text-rose-500 hover:underline">legal@devopstrio.com</a></p>
            <p className="text-zinc-400">Address: Devopstrio Limited, One World Trade Center, Floor 85, New York, NY 10007, USA</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <LegalPageLayout
      title="Disclaimer"
      subtitle="Legal guidelines and disclaimer notices concerning information accuracy, professional liability exclusions, external website links, and service uptime."
      lastUpdated="June 16, 2026"
      sections={sections}
    />
  );
}
