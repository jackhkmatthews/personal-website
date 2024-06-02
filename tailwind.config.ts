import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['"Trebuchet MS"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
