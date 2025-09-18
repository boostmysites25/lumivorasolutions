/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // New Trust & Tech Color Scheme
        primary: "#4F46E5", // Indigo - Main brand identity
        secondary: "#06B6D4", // Teal/Cyan - Highlights, links, hover states
        accent: "#FACC15", // Warm Yellow - Offers, alerts, badges
        // Background colors
        tertiary: "#0A1828", // Dark background
        background: "#060F1A", // Main background
        // Neutral colors for accessibility
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
        primary: "0px 4px 20px rgba(79, 70, 229, 0.3)",
        secondary: "0px 4px 20px rgba(6, 182, 212, 0.3)",
        accent: "0px 4px 20px rgba(250, 204, 21, 0.3)",
      },
    },
  },
  plugins: [],
}
