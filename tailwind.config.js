/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This stack mimics the Apple system font perfectly
        sans: [
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"Segoe UI"', 
          'Roboto', 
          'Helvetica', 
          'Arial', 
          'sans-serif', 
          '"Apple Color Emoji"', 
          '"Segoe UI Emoji"'
        ],
        // Keeping a serif option for your elegant headings if you still want them
        serif: ['ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          navy: '#001a33',
          copper: '#b87333',
          crimson: '#990000',
          white: '#ffffff',
          slate: '#475569',
        }
      }
    },
  },
  plugins: [],
}