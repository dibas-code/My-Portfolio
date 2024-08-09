const { transform } = require("next/dist/build/swc");
const { Poppins } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
        Poppins,
      },
      colors: {
        primary: "#f50b0a",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      animation: {
        "spin-superslow": "spin 4s linear infinite",
        "rocket": "rocket 3s linear infinite",
        "rocket2": "rocket2 6s linear infinite",
        "spin-reverse": "spin 8s linear infinite",
      },
      keyframes: {
        rocket: {
          "0%, 100%": {
            transform: "rotate(-2deg) translate(0px, 0px)",
          },
          "50%": {
            transform: "rotate(2deg) translate(50px, 50px)",
          },
        },
        rocket2: {
          "0% 50%": {
            transform: "rotate(-1deg) translate(0px,0px)"
          },
          "50%": {
            transform: "rotate(1deg) translate(20px,20px)",
          }
        }
      },
    },
  },
  plugins: [],
};
