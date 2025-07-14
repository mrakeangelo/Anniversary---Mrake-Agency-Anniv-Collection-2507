/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pearl: {
          50: '#fefefe',
          100: '#fdfcfc',
          200: '#faf8f8',
          300: '#f6f2f2',
          400: '#f0e8e8',
          500: '#e8dede',
          600: '#d1c8c8',
          700: '#aea6a6',
          800: '#8b8484',
          900: '#716d6d',
        },
        ivory: {
          50: '#fffffe',
          100: '#fffcfc',
          200: '#fef8f8',
          300: '#fdf2f2',
          400: '#fce8e8',
          500: '#fadede',
          600: '#e1c8c8',
          700: '#bca6a6',
          800: '#968484',
          900: '#7b6d6d',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        sapphire: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}