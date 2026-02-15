/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2545',
          copper: '#C68E4F',
          crimson: '#8D2222',
          white: '#F7F9FB',
          slate: '#334155',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'], 
        serif: ['var(--font-playfair)'],
      }
    },
  },
  plugins: [],
};