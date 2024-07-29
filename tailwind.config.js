/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(23, 21, 59)",
        secondary: "rgb(200, 172, 214)",
        third: "rgb(46, 35, 108)",
        four: "rgb(67, 61, 139)",
      },
    },
  },
  plugins: [],
};
