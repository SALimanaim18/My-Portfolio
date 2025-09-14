/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(118, 102, 93)',
        skyblue: '#87ceeb', // couleur bleu ciel
      },
    },
  },
  plugins: [],
}
