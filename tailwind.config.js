/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "921px",
    },
    extend: {
      fontFamily: {
        roboSerif: ["Roboto Serif", "sans-serif"],
      },

      colors: {
        theme: "#193967",
        sky: "#B8C2D0",
      },
      padding: {
        "15vh": "15vh",
        "20vh": "20vh",
        "50vh": "50vh",
      },
      boxShadow: {
        swiper: "12px 0 15px -4px rgba(0, 0, 0, 0.5) ",
        card: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        card2:
          "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
      },
      backgroundImage: {
        footer: "url('./src/assets/lightWave.svg')",
        darkFooter: "url('./src/assets/darkWave.svg')",
        whatWeDoBg: "url('./src/assets/WhatWeDoNewBg.png')",
        radiantDark:
          "radial-gradient(54.52% 54.52% at 50% 50%, rgba(52, 116, 183, 0.79) 0%, rgba(52, 116, 183, 0) 100%)",
        radiantLight:
          "radial-gradient(54.52% 54.52% at 50% 50%, rgba(52, 116, 183, 0.79) 0%, rgba(52, 116, 183, 0) 100%)",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
