/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   primary: "#334b35",
      //   secondary: "#f7c35e",
      // },
      fontFamily: {
        sans: ["Poppin", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["forest"],
  },
  plugins: [require("daisyui")],
};
