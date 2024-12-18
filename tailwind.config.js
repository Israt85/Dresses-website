/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter:['Inter', 'san-serif'],
        Poppins:['Poppins', 'san-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

