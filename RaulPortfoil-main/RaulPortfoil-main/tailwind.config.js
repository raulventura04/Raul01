/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',    // Deep blue for backend
        secondary: '#2D9B83',  // Teal green for biology
        accent: '#4FD1C5',     // Light teal for accents
      },
    },
  },
  plugins: [],
};