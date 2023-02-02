/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ideaverso: "#2C0551",
      },
    },
    fontFamily: {
      Delius: ["Delius"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
