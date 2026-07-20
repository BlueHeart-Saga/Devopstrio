import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Devopstrio Marketing & Sales Enablement Portal",
  description: "Explore Devopstrio's enterprise ecosystem, marketing assets, corporate pitch decks, and technical whitepapers.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#030303] text-gray-100 font-sans selection:bg-rose-500/30 flex flex-col justify-between">
      {/* Platform-Wide Floating Mega Menu Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 w-full">
        {children}
      </div>

      {/* Platform-Wide Enterprise Footer */}
      <Footer />
    </div>
  );
}
