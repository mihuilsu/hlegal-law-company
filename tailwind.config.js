/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './about.html',
      './contact.html',
      './services.html',
      './team.html',
      './publications.html',
      './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      
      screens: {
        "mobile": "375px",
        "tablet-sd": "768px",
        "tablet-hd": "1024px",
        "desktop-sd": "1440px",
        "desktop-hd": "1920px"
      },

      extend: {
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
        },
      },

    },
    plugins: [],
  }