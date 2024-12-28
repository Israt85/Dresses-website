/** @type {import('tailwindcss').Config} */
import { keepTheme } from "keep-react/keepTheme";
const config =  {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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

export default keepTheme(config);