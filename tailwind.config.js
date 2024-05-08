/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        theme:"#f1f1f1",
        leaf:"#ff1d0c",
        orange:"#ec7421",
        purp:"#e458e6"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}