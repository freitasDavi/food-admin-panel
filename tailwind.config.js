/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "t-white": "#EAECF8",
        "t-light-gray": "#A9ACC9",
        "t-black": "#09080B",
        "t-navy": "#0D1D9A",
        "t-brown": "#595152",
        "t-orange": "#E85011",
        "t-gold": "#AE975E",
        "t-purple": "#5B68AC"
      }
    },
  },
  plugins: [],
}

