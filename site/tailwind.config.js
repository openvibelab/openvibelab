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
          orange: '#e65c2e',
          'orange-light': '#f07a52',
          dark: '#1e1a14',
          'dark-light': '#2a241c',
          teal: '#2a7d6f',
          'teal-light': '#3a9e8c',
          navy: '#3d5a9e',
        },
        surface: {
          DEFAULT: '#f0ece4',
          warm: '#e6e0d5',
        },
        ink: {
          DEFAULT: '#1e1a14',
          secondary: '#6d6358',
          muted: '#998e80',
        }
      },
      fontFamily: {
        sans: ['Outfit', '"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        heading: ['Sora', '"Noto Sans SC"', '"PingFang SC"', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 16px rgba(30, 26, 20, 0.06)',
        'warm-lg': '0 8px 32px rgba(30, 26, 20, 0.10)',
      },
    },
  },
  plugins: [],
}
