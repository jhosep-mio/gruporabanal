import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        sistema: {
          primary: '#1E1F25',
          main: '#2FC0F9',
          main_dark: '#064875',
          form: '#fff',
          secondary: {
            50: '#384045',
            150: '#906B9F',
            100: '#1E1F25',
            900: '#131517'
          },
          main_2: {
            100: '#fff',
            150: '#F9FAFB',
            250: '#E9E9E9',
            200: '#906B9F',
            900: '#131517'
          }
        },
        primary: {
          DEFAULT: '#006d39',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: '#003b1b',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        tertiary: {
          DEFAULT: '#b6d15c',
          foreground: 'hsl(var(--tertiary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      fontFamily: {
        montserratRegular: ['montserrat-regular', 'sans-serif'],
        montserratBold: ['montserrat-bold', 'sans-serif'],
        montserratMedium: ['montserrat-medium', 'sans-serif'],
        montserratSemibold: ['montserrat-semibold', 'sans-serif'],
        unisonBold: ['unison-bold', 'sans-serif'],
        proximaSemibold: ['proxima-semibold', 'sans-serif'],
        proximaRegular: ['proxima-regular', 'sans-serif'],
        proximaExtrabold: ['proxima-extrabold', 'sans-serif'],
        proximaBold: ['proxima-bold', 'sans-serif'],
        roundkeyMedium: ['roundkey-medium', 'sans-serif']
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
