import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#CEFAE5",
      brown: "#514A4A",
      green: "#076857",
      lightGray: "#DCD8F8",
      lightGreen: "#B8EEEB",
      darkBlue: "#0B1618",
      black: "#000",
      white: "#fff",
    },
    fontFamily: {
      inter: ["var(--text-inter)", "Inter", "sans-serif"],
      inika: ["var(--text-inika)", "Inika", "serif"],
    },
  },
  plugins: [],
};
export default config;
