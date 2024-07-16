/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        
      },
      screens: {
        sm:'480px',
        md:'768px',
        lg:'976px',
        xl:'1280px',
        xxl:"1295px",
        xxxl:"1440px",
        wide:'1550px'
      }
    },
  },
  plugins: [],
}

