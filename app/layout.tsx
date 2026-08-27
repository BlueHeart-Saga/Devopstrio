import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LayoutNavbarWrapper } from "@/components/providers/LayoutNavbarWrapper";
import { OrganizationSchema, ReviewSchema, ProfessionalServiceSchema, LocalBusinessSchema } from "@/components/seo/Schemas";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devopstrio.co.uk";

export const metadata: Metadata = {
  title: "Enterprise AI, Cloud & Product Engineering | Devopstrio",
  description: "Devopstrio delivers enterprise cloud-native architecture, SRE automation, cybersecurity, and production-grade generative AI engineering globally.",
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  verification: {
    google: "KF2atChHrXH7aJE-q0biC-xlGe2eSWrU6MY3DHtYRvQ",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/webp/favicon-96x96.webp", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/webp/apple-touch-icon.webp", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-clip">
      <body className="overflow-x-clip w-full max-w-[100vw] relative bg-[#030303] text-white">
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
        <LayoutNavbarWrapper>{children}</LayoutNavbarWrapper>
      </body>
    </html>
  );
}
