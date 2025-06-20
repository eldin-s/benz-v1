/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ff4605",
        bgColor: "#0f141e",
        bgShade: "#19212f",
      },
      fontFamily: {
        bebas: ["var(--font-bebas-neue)", "Bebas Neue", "sans-serif"],
        oswald: ["var(--font-oswald)", "Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
