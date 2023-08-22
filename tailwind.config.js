/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#DEDBD2",
        medium: "#42413A",
        dark: "#2F2D29",
      },
      fontFamily: {
        merriweather: ["Merriweather", 'serif'],
        montserrat: ['Montserrat', 'san-serif']
      },
    },
  },
  plugins: [],
};
