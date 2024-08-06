/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EA7C69",
        base: "#FAFAFA",
        green: "#50D1AA",
        purple: "#9290FE",
        orange: "#FFB572",
        lightbg: "#393C49",
        "light-text": "#E0E6E9",
        "darkbg": "#1F1D2B"
      },
      fontFamily: {
        'barlow': "'Barlow', sans-serif",
      },
    },
  },
  plugins: [],
};
