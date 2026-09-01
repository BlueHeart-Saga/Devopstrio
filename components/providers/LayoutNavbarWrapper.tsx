"use client";

import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ClickSpark = dynamic(() => import("@/components/ui/ClickSpark"), { ssr: false });
const FloatingChatbot = dynamic(() => import("@/components/FloatingChatbot").then((m) => m.FloatingChatbot), { ssr: false });
const FeedbackWidget = dynamic(() => import("@/components/FeedbackWidget").then((m) => m.FeedbackWidget), { ssr: false });
const StickyContactWidget = dynamic(() => import("@/components/StickyContactWidget").then((m) => m.StickyContactWidget), { ssr: false });
const CookieConsent = dynamic(() => import("@/components/CookieConsent").then((m) => m.CookieConsent), { ssr: false });

export function LayoutNavbarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const isMarketing = pathname.startsWith("/marketing");

  return (
    <ClickSpark
      sparkColor="#ff2d55"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={500}
    >
      {!isMarketing && <Navbar />}
      {children}
      {!isMarketing && (
        <>
          <Footer />
          <FloatingChatbot />
          <FeedbackWidget />
          <StickyContactWidget />
          <CookieConsent />
        </>
      )}
    </ClickSpark>
  );
}
