"use client";

import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingChatbot } from "@/components/FloatingChatbot";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { StickyContactWidget } from "@/components/StickyContactWidget";
import { CookieConsent } from "@/components/CookieConsent";

const ClickSpark = dynamic(() => import("@/components/ui/ClickSpark"), { ssr: false });

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
