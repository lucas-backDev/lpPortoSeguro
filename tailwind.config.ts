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
        blue: {
          400: "#3B82F6",
          500: "#2563EB",
          600: "#1D4ED8",
        },
        green: {
          500: "#22C55E",
        },
      },
    },
  },
  plugins: [],
};