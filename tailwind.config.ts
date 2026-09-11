import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        portfolio: {
          bg: "var(--portfolio-bg)",
          card: "var(--portfolio-card)",
          primary: "var(--portfolio-primary)",
          primaryHover: "var(--portfolio-primary-hover)",
          cyan: "#06B6D4",
          cyanGlow: "rgba(6, 182, 212, 0.4)",
          emerald: "#10B981",
          copper: "#D97706",
          substrate: "#070A12",
          text: "var(--portfolio-text)",
          textSecondary: "var(--portfolio-text-secondary)",
        },
      },
      boxShadow: {
        glow: "0 0 15px rgba(139, 92, 246, 0.15)",
        "glow-hover": "0 0 25px rgba(139, 92, 246, 0.25)",
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.3)",
        "glow-chip": "0 0 35px rgba(139, 92, 246, 0.25), 0 0 15px rgba(6, 182, 212, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
