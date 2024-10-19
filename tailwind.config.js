/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1EB096",
        secondary: "#E5EFFF",
        secondary2: "#1D67B4",
        priBg: "#F5E6FE",
        txtWhite: "#ffffff",
        txtDark: "#272D4E",
        txtDark2: "#242424",
        txtDark3: "#666666",
        blueBg: "#1D67B4",
        gray: "#94A2B3",
        darkBgSec: '#27293D',
        whiteBg: '#ffffff'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

