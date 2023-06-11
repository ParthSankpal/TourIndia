/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ['sans-serif'],
      Tajawal: ["sans-serif"],
      El_Messiri:["sans-serif"],
      Lato:["sans-serif"]
      
    },
    transitionDuration: {
      '2000': '2000ms',
      '1500': '1500ms',
    },

    colors: {
      'regal-blue': '#374772',
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

