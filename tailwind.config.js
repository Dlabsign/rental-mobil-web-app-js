/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      basierB: ["BasierCircle-Bold", "sans-serif"],
      basierR: ["BasierCircle-Regular", "sans-serif"],
      basierM: ["BasierCircle-Medium", "sans-serif"],
      basierS: ["BasierCircle-SemiBold", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};