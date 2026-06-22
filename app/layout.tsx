import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingChatbot } from "@/components/FloatingChatbot";
import ClickSpark from "@/components/ui/ClickSpark";
import { OrganizationSchema, ReviewSchema } from "@/components/seo/Schemas";

export const metadata: Metadata = {
  metadataBase: new URL("https://devopstrio.co.uk"),
  title: {
    default: "Devopstrio | Enterprise AI, Cloud and Product Engineering",
    template: "%s | Devopstrio"
  },
  description:
    "Devopstrio helps enterprises build, modernize and scale mission-critical AI platforms, cloud infrastructure and digital products.",
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
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://devopstrio.co.uk",
    siteName: "Devopstrio",
    title: "Devopstrio | Enterprise AI, Cloud and Product Engineering",
    description: "Devopstrio helps enterprises build, modernize and scale mission-critical AI platforms, cloud infrastructure and digital products.",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "Devopstrio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Devopstrio | Enterprise AI, Cloud and Product Engineering",
    description: "Devopstrio helps enterprises build, modernize and scale mission-critical AI platforms, cloud infrastructure and digital products.",
    images: ["/apple-touch-icon.png"]
  },
  alternates: {
    canonical: "./"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <OrganizationSchema />
        <ReviewSchema />
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
        </ClickSpark>
      </body>
    </html>
  );
}

