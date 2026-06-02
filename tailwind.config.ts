import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./sections/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "rgba(255,255,255,0.08)",
        background: "#000000",
        foreground: "#ffffff",
        surface: "#111111",
        muted: "#B8B8B8",
        accent: "#E11D48"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-jakarta)", "IBM Plex Sans", "sans-serif"]
      },
      maxWidth: {
        site: "1440px"
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;
