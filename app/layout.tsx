import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ClickSpark from "@/components/ui/ClickSpark";

export const metadata: Metadata = {
  title: "Devopstrio | Enterprise AI, Cloud and Product Engineering",
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
  manifest: "/manifest.json"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
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
        </ClickSpark>
      </body>
    </html>
  );
}
