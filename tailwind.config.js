/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#F4E86D',
          cyan: '#00BFE7',
          blue: '#0099CC',
        },
        dark: {
          bg: '#0F1419',
          secondary: '#1A1F26',
        },
        light: {
          bg: '#F8FAFC',
        },
        gray: {
          text: '#64748B',
        },
        status: {
          success: '#10B981',
          warning: '#F59E0B',
        },
        code: {
          purple: '#A78BFA',
        }
      },
      fontFamily: {
        primary: ['Inter', 'Poppins', '-apple-system', 'sans-serif'],
        code: ['Fira Code', 'JetBrains Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00BFE7 0%, #F4E86D 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F1419 0%, #1A1F26 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blur-in': 'blur-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'code-rain': 'code-rain 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(0, 191, 231, 0.3)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 30px rgba(0, 191, 231, 0.5)',
          },
        },
        'blur-in': {
          '0%': {
            filter: 'blur(10px)',
            opacity: '0',
          },
          '100%': {
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'code-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}