import type { NextConfig } from "next";
import path from "path";

import fs from "fs";

const srcFile = "C:\\Users\\mani\\.gemini\\antigravity\\brain\\8b832e29-763b-42c6-807d-39e2476e2aeb\\business_overview_lifestyle_1780987327074.png";
const destFile = path.resolve(__dirname, "public", "assets", "Home-page", "business-overview", "overview-lifestyle.png");

const weImagineImages = [
  { src: "biz_envisioning_life_1780989250315.png", dest: "biz-life.png" },
  { src: "sol_envisioning_life_1780989271635.png", dest: "sol-life.png" },
  { src: "arch_design_life_1780989290746.png", dest: "arch-life.png" },
  { src: "rapid_prototype_life_1780989309441.png", dest: "rapid-life.png" },
  { src: "mission_bg_1780990185031.png", dest: "mission-bg.png" },
  { src: "vision_bg_1780990204005.png", dest: "vision-bg.png" }
];

const ourSrc = "C:\\Users\\mani\\.gemini\\antigravity\\brain\\28b3bb03-4f36-4e1f-a274-983615f4fd03\\media__1780996390314.jpg";
const ourDest = path.resolve(__dirname, "public", "assets", "Home-page", "innovation-bg.jpg");

// Only copy local dev assets on the developer's machine (not in production builds)
if (process.env.NODE_ENV !== "production") {
  try {
    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, destFile);
    }
    if (fs.existsSync(ourSrc)) {
      fs.copyFileSync(ourSrc, ourDest);
    }
    weImagineImages.forEach((item) => {
      const fullSrc = path.join("C:\\Users\\mani\\.gemini\\antigravity\\brain\\8b832e29-763b-42c6-807d-39e2476e2aeb", item.src);
      const fullDest = path.resolve(__dirname, "public", "assets", "Home-page", item.dest);
      if (fs.existsSync(fullSrc)) {
        fs.copyFileSync(fullSrc, fullDest);
      }
    });
  } catch (e) {
    console.warn("Skipped local asset copy (dev-only):", e);
  }
}


const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "framer-motion",
      "clsx",
      "tailwind-merge"
    ]
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/webp/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/insights-proxy/api/:path*",
        destination: "https://mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net/api/:path*",
      },
    ];
  },
};

export default nextConfig;
