/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Rubik:['sans-serif'],
      Tilt_Prism:['cursive'],
      Outfit:['sans-serif']
    },
    colors: {
      'regal-blue': '#374772',
    },
  },
  plugins: [
    
    require('tailwind-scrollbar'),
  ],
}

