/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ff6b35',
          'orange-light': '#ff8c5a',
          dark: '#1a1a2e',
          'dark-light': '#16213e',
          teal: '#4ecdc4',
          'teal-light': '#7ee8e0',
        }
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
