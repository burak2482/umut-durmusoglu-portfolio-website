/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customNormal: ['MyCustomFont1', 'sans-serif'],
        customSerif: ['Bokor', 'sans-serif'],
        customJaro: ['Jaro', 'sans-serif'],
      },
      colors: {
        customBlue: '#cedef0',  // Özel bir mavi tonu
        customLightBlue: '#6b9bd1', // Özel pembe rengi
      },
    },
  },
  plugins: [],
}