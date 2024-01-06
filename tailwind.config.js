/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      flex:{
        1: "1 1 0",
        "2" : "1 0 0"
      },
      screens: {
        'mlg' : "900px",
      }
    },
  },
  plugins: [],
}