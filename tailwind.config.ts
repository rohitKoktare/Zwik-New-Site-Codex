import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primaryDark: "var(--color-primary-dark)",
        accent: "var(--color-accent)",
        background: "var(--color-bg)",
        surface: "var(--color-surface)",
        textPrimary: "var(--color-text)",
        textSecondary: "var(--color-text-secondary)",
        goldAccent: "var(--color-gold-accent)",
        foreground: "var(--color-text)",
        card: "var(--color-surface)",
        "card-foreground": "var(--color-text)",
        popover: "#FFFDFC",
        "popover-foreground": "var(--color-text)",
        "primary-foreground": "#1A1A1A",
        secondary: "#F6EFED",
        "secondary-foreground": "var(--color-text)",
        muted: "#F7F1EF",
        "muted-foreground": "var(--color-text-secondary)",
        "accent-foreground": "#FFF8F6",
        border: "var(--color-border)",
        input: "var(--color-border)",
        ring: "var(--color-accent)"
      },
      borderRadius: {
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 0.25rem)",
        "2xl": "calc(var(--radius) + 0.75rem)"
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        romantic: "0 18px 40px -24px rgba(199, 92, 92, 0.42)",
        surface: "0 18px 60px -30px rgba(117, 95, 95, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
