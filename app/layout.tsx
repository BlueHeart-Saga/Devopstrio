import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ClickSpark from "@/components/ui/ClickSpark";

export const metadata: Metadata = {
  title: "Devopstrio | Enterprise AI, Cloud and Product Engineering",
  description:
    "Devopstrio helps enterprises build, modernize and scale mission-critical AI platforms, cloud infrastructure and digital products."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <CustomCursor />
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
