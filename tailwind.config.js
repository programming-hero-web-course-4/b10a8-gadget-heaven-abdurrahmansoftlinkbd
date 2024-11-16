/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        gray1: "rgba(9, 8, 15, 0.05)",
        gray2: "rgba(9, 8, 15, 0.1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
