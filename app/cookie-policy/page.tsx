import React from "react";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy & Data Privacy Standards | Devopstrio",
  description: "Devopstrio Cookie Policy explains how and why we use cookies and related tracking technologies on our site.",
  alternates: {
    canonical: "/cookie-policy"
  }
};

export default function CookiePolicyPage() {
  const sections = [
    {
      id: "cookies-intro",
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p>
            This Cookie Policy explains how Devopstrio (“we,” “us,” or “our”) uses cookies and similar tracking technologies (such as web beacons, pixels, and local storage tags) when you visit our website (www.devopstrio.com) or interact with our client dashboards.
          </p>
          <p>
            We believe in complete transparency regarding data practices. This policy outlines what cookies are, how and why we employ them, the specific categories of cookies we implement, and the options you have to configure or restrict their deployment. Learn more in our <Link href="/privacy-policy" className="text-rose-500 hover:underline font-bold">Privacy Policy</Link>.
          </p>
        </div>
      )
    },
    {
      id: "what-are-cookies",
      title: "What Are Cookies?",
      content: (
        <div className="space-y-4">
          <p>
            A cookie is a small text file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser on your computer or mobile device. The identifier is then sent back to the server each time the browser requests a page from the server.
          </p>
          <p>
            Cookies can be either “persistent” cookies or “session” cookies:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
            <li><strong className="text-zinc-300">Persistent Cookies:</strong> Stored by your web browser and remain valid until their set expiry date, unless deleted by the user before the expiry date.</li>
            <li><strong className="text-zinc-300">Session Cookies:</strong> Temporary files that expire at the end of the user session, when the web browser is closed.</li>
          </ul>
        </div>
      )
    },
    {
      id: "how-we-use",
      title: "How We Use Cookies",
      content: (
        <div className="space-y-4">
          <p>
            Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.
          </p>
          <p>
            We use cookies to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
            <li>Identify you when you visit our Site and help you navigate between pages efficiently.</li>
            <li>Store information about your preferences, allowing us to customize the layout, language settings, and interface theme.</li>
            <li>Manage secure logins under our <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">cybersecurity services</Link> and protect user accounts from fraudulent access or CSRF vulnerability attacks.</li>
            <li>Analyze the performance, speed, and overall usage of our website and services.</li>
          </ul>
        </div>
      )
    },
    {
      id: "categories",
      title: "Categories of Cookies We Set",
      content: (
        <div className="space-y-6">
          <p>
            The cookies used on our website are classified into four main categories based on their function and purpose:
          </p>
          
          <div className="space-y-4">
            <div className="border border-zinc-900 bg-zinc-950/40 rounded-xl p-5">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-2 text-rose-500">1. Strictly Necessary Cookies</span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                These cookies are essential for the website to function properly and cannot be switched off in our systems. They are usually set in response to actions made by you, such as setting your privacy preferences, logging in, or filling out contact forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not work.
              </p>
            </div>
            
            <div className="border border-zinc-900 bg-zinc-950/40 rounded-xl p-5">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-2 text-rose-500">2. Performance & Analytics Cookies</span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                These cookies collect information about how visitors use our website—for instance, which pages visitors go to most often, and if they get error messages. They help us measure and improve the performance of our site. All information these cookies collect is aggregated and anonymous.
              </p>
            </div>
            
            <div className="border border-zinc-900 bg-zinc-950/40 rounded-xl p-5">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-2 text-rose-500">3. Functional Cookies</span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                These cookies enable the website to provide enhanced functionality and personalization, such as remembering your region, preferred language, or custom dashboard configurations. They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
            </div>
            
            <div className="border border-zinc-900 bg-zinc-950/40 rounded-xl p-5">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-2 text-rose-500">4. Targeting & Marketing Cookies</span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                These cookies may be set through our site by our marketing partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "third-party-cookies",
      title: "Third-Party Cookies",
      content: (
        <div className="space-y-4">
          <p>
            In addition to our first-party cookies, we partner with third-party service providers who may place cookies on your device when you access our site. These third parties include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400">
            <li><strong className="text-zinc-300">Google Analytics:</strong> We use Google Analytics to parse site traffic, page flows, and user demographics. Google Analytics uses cookies to generate statistical reports. Google's privacy statement is accessible at: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-rose-500 hover:underline">Google Privacy Policy</a>.</li>
            <li><strong className="text-zinc-300">Hotjar:</strong> We use Hotjar to collect visual click maps and scrolling telemetry to improve interface accessibility. Hotjar stores cookies to recognize recurring visitor sessions.</li>
          </ul>
        </div>
      )
    },
    {
      id: "managing-cookies",
      title: "Managing & Disabling Cookies",
      content: (
        <div className="space-y-4">
          <p>
            You have the right to decide whether to accept or reject cookies. Most web browsers allow you to control cookies through their settings preferences.
          </p>
          <p>
            To adjust your cookie preferences directly in your browser:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
            <li>In <strong className="text-zinc-300">Chrome:</strong> Go to Settings &gt; Privacy and Security &gt; Cookies and other site data.</li>
            <li>In <strong className="text-zinc-300">Firefox:</strong> Go to Preferences &gt; Privacy & Security &gt; Cookies and Site Data.</li>
            <li>In <strong className="text-zinc-300">Safari:</strong> Go to Preferences &gt; Privacy &gt; Block all cookies.</li>
            <li>In <strong className="text-zinc-300">Edge:</strong> Go to Settings &gt; Cookies and site permissions &gt; Manage and delete cookies.</li>
          </ul>
          <p className="pt-2">
            Please note that if you limit or disable cookies, some areas of our website may not function properly, and you may lose access to customized layout features.
          </p>
        </div>
      )
    },
    {
      id: "web-beacons",
      title: "Pixel Tags and Web Beacons",
      content: (
        <p>
          We may also use web beacons (sometimes called transparent GIFs or tracking pixels) in our marketing emails. These pixels record whether you open the email, click on embedded links, or download case study resources. This information helps us analyze the effectiveness of our campaigns and tailor our insights. You can disable email tracking by turning off automatic image downloads in your email client settings.
        </p>
      )
    },
    {
      id: "policy-updates",
      title: "Policy Updates",
      content: (
        <p>
          We will update this Cookie Policy from time to time to reflect modifications in our tracking practices or <Link href="/gdpr" className="text-rose-500 hover:underline font-bold">GDPR compliance</Link> updates. Any updates will be posted on this page with an adjusted date.
        </p>
      )
    }
  ];

  return (
    <LegalPageLayout
      title="Cookie Policy"
      subtitle="How Devopstrio uses cookies and tracking technologies to optimize website navigation, secure sessions, and analyze usage statistics."
      lastUpdated="June 16, 2026"
      sections={sections}
    />
  );
}
