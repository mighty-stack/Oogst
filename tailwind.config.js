/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E6",
        sand: "#E8DFCB",
        ink: "#1F3A2E",
        "ink-soft": "#2C4A3B",
        bronze: "#A9782F",
        "bronze-soft": "#C79A4C",
        charcoal: "#2B2B2B",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        site: "1120px",
      },
    },
  },
  plugins: [],
}
