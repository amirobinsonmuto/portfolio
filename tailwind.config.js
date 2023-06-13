/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#243644",
        secondary: "#96572f",
        pink: "#eadad8",
        fontPink: "#d8b8b7",
        lightgray: "#fafafa",
      },
      fontFamily: {
        primary: ["darlington", "cursive"],
        secondary: ["Raleway", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
