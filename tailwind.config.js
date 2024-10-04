/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      screens:{
        "mobile":'320px',
        "tablet":'750px',
        "notebook":'1023px'

      },
      fontFamily: {
        outfit: [
          'Outfit',
          ...defaultTheme.fontFamily.sans,
        ],
        josefin: [
          'Josefin Sans',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    },
  },
  plugins: [],
}

