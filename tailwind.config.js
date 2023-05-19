/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      quicksand: ["Quicksand"],
    },
    extend: {
      margin: {
        30: "7.5rem",
      },
      maxHeight: {
        popupImg: "22.5rem"
      },
      gridTemplateRows: {
        popup: "1fr 3fr"
      },

      colors: {
        app: "#F8F8F8",
        main: "#FFB41D",
        "primary-100": "#252525",
        "primary-200": "#3F3F3F",
        "primary-300": "#4C4C4C",
        "primary-700": "#898989",
        "primary-800": "#E0E0E0",
        "popupbg": "#00000046"
      },
    },
  },
  plugins: [],
};
