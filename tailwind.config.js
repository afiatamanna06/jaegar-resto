/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EA7C69",
        base: "#FAFAFA",
        "darkbg": "#1F1D2B"
      },
      fontFamily: {
        'barlow': "'Barlow', sans-serif",
      },
    },
  },
  plugins: [],
};
