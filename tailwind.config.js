/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, 
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 1px 1px 0px rgba(255, 255, 255, 0.15) inset",
        down: "0px -10px 5px -10px rgba(255, 255, 255, 0.25) inset",
      },
      screens: {
        xxl: "1440px",
        mb: "1130px",
        sb: "850px",
        ss: "650px",
        nx: "500px",
        xs: "425px",
        s: "320px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
