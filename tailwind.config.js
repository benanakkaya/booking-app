/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        grey: "#F2F2F2",
        "grey-200": "#C0C0C0",
        "grey-900": "#4F4F4F",
        warning: "#FCEFCA"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      container: {
        center:true,
      }
    },
  },
  plugins: [],
}