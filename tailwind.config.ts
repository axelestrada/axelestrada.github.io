import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'border-b-3',
    'border-r-3',
    'border-l-3',
    'border-t-3',
    'col-span-2',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "foreground-65": "var(--foreground-65)",
        accent: "var(--accent)",
        "accent-10": "var(--accent-10)",
        "navbar-bg": "var(--navbar-bg)",
        pretext: "var(--pretext)",
      },
      fontSize: {
        "2.5xl": "1.75rem",
      },
      borderWidth: {
        3: "3px",
      }
    },
  },
  plugins: [],
} satisfies Config;
