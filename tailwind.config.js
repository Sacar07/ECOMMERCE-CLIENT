const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#7E33E0",
        "primary-dark": "#0D0E43",
        "primary-light": "#E7E6EF",
        secondary: "#FB2E86",
      },
      screens:{
        sm:"576px", //landscape mode
        md:"768px", //tablet
        lg:"1024px", //laptop without numerical keyboard
        xl:"1280px", // normal desktop
        xxl:"1400px", //huge monitor
      }
    },
  },
  plugins: [],
};

