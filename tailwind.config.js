/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Importante para el portfolio
  theme: {
    extend: {
      colors: {
        'innova-dark': '#064e3b', // El verde del texto del logo
        'innova-tech': '#2dd4bf', // El turquesa del chip
        'innova-bg': '#f8fafc',   // Gris claro para fondos
        'innova-dark-bg': '#020617' // Fondo oscuro para modo nocturno
      },
    },
  },
  plugins: [],
}