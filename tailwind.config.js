/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(93, 79, 72, 1)', // marron
        sky: {
          DEFAULT: '#87CEEB',
          light: '#E6F7FF'
        },
        mauve: {
          DEFAULT: '#350879ff',
          light: '#8E5BBF'
        }
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        floatY: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' }
        },
        bobble: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(10px) scale(0.98)' },
          '100%': { transform: 'translateY(0) scale(1)' }
        },
        gradientBG: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        },
        floatDown: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(100vh)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'float-y': 'floatY 4s ease-in-out infinite',
        'bobble': 'bobble 3.2s ease-in-out infinite',
        'gradient-bg': 'gradientBG 20s ease infinite',
        'float-down': 'floatDown linear forwards'
      },
      backgroundSize: {
        '200%': '200% 200%'
      }
    }
  },
  plugins: []
}
