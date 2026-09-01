import type { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";

export const metadata: Metadata = generatePageMetadata({
  ...getMetadataFromPath("/ecosystem/technology-stack/devops-toolchain"),
  path: "/ecosystem/technology-stack/devops-toolchain"
});

export default function DevopsToolchainLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
