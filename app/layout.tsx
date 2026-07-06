import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingChatbot } from "@/components/FloatingChatbot";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { CookieConsent } from "@/components/CookieConsent";
import ClickSpark from "@/components/ui/ClickSpark";
import Script from "next/script";
import { OrganizationSchema, ReviewSchema, ProfessionalServiceSchema, LocalBusinessSchema } from "@/components/seo/Schemas";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";
  const host = headersList.get("host") || "";
  const { title, description, keywords } = getMetadataFromPath(pathname);

  const baseMeta = generatePageMetadata({
    title,
    description,
    path: pathname,
    keywords
  });

  const prodDomain = process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN || "devopstrio.co.uk";
  const cleanHost = host.split(":")[0].toLowerCase();
  const isProduction = cleanHost === prodDomain.toLowerCase() || cleanHost === `www.${prodDomain.toLowerCase()}`;

  const robots = isProduction
    ? {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
        }
      }
    : {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        }
      };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devopstrio.co.uk";

  return {
    ...baseMeta,
    metadataBase: new URL(siteUrl),
    robots,
    verification: {
      google: "Ed5NQe2UO9cW6aJ_7mbgYfMkS1Ipat0f9E9q78xyzUM"
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/favicon.svg", type: "image/svg+xml" }
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
      ]
    },
    manifest: "/manifest.json"
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        {/* Google Analytics 4 (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NGV5DC74RW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NGV5DC74RW');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "q7gxyw5szk");
          `}
        </Script>

        <OrganizationSchema />
        <ReviewSchema />
        <ProfessionalServiceSchema />
        <LocalBusinessSchema />
        <ClickSpark
          sparkColor="#ff2d55"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={500}
        >
          <Navbar />
          {children}
          <Footer />
          <FloatingChatbot />
          <FeedbackWidget />
          <CookieConsent />
        </ClickSpark>
      </body>
    </html>
  );
}
