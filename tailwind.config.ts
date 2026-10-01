import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        background: "var(--bg)",
        foreground: "var(--text-primary)",
        portfolio: {
          bg: "var(--bg)",
          card: "var(--card-bg)",
          cardHover: "var(--card-hover-bg)",
          border: "var(--border)",
          borderHover: "var(--border-hover)",
          subtle: "var(--subtle-bg)",
          text: "var(--text-primary)",
          textSecondary: "var(--text-secondary)",
          textMuted: "var(--text-muted)",
          accent: "var(--accent)",
          accentHover: "var(--accent-hover)",
          accentSubtle: "var(--accent-subtle)",
          accentBorder: "var(--accent-border)",
        },
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.25)",
        "card-hover": "0 8px 30px -4px rgba(0, 0, 0, 0.35)",
        "accent-subtle": "0 0 15px var(--accent-subtle)",
      },
    },
  },
  plugins: [],
};

export default config;
