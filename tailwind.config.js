/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EA7C69",
        base: "#FAFAFA",
      },
      fontFamily: {
        'barlow': "'Barlow', sans-serif",
      },
    },
  },
  plugins: [],
};
