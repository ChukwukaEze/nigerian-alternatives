import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
      colors: {
        green: { ...colors.green, DEFAULT: "#03a96c" },
        brand: "#303030",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
export default config;
