/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors from Figma
        'lime-brand': '#C5FA1F', // Banner background color
        'gray-light': '#F2F2F2', // Background color
        'gray-medium': '#969696', // Secondary text
        'purple-brand': '#623CEA', // Badge color
        'red-brand': '#E01715', // Sale badge color
        'black': '#000000', // Primary text and borders
        'white': '#FFFFFF',
        
        // Product variant colors from Figma
        'variant-dark': '#3C3C3C',
        'variant-light-blue': '#BDC7D1',
        'variant-yellow': '#F9EB3D',
        'variant-cream': '#F3EFE9',
        'variant-ice': '#C3C6C5',
        'variant-sage': '#E1E4E3',
        'variant-tan': '#DBD5D0',
        'variant-red': '#F92131',
        'variant-gray': '#A6A3A4',
        'variant-charcoal': '#282929',
        'variant-sand': '#DFDBD5',
      },
      fontFamily: {
        'sans': ['Inter Tight', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Typography scale from Figma
        'heading-1-desktop': ['128px', { lineHeight: '1.1', letterSpacing: '-4%' }],
        'heading-1-mobile': ['56px', { lineHeight: '1.1', letterSpacing: '-4%' }],
        'heading-2-desktop': ['96px', { lineHeight: '1.1', letterSpacing: '-4%' }],
        'heading-2-mobile': ['48px', { lineHeight: '1.1', letterSpacing: '-4%' }],
        'heading-3-desktop': ['64px', { lineHeight: '1.1', letterSpacing: '-4%' }],
        'heading-3-mobile': ['40px', { lineHeight: '1.1', letterSpacing: '-4%' }],
        'heading-4-desktop': ['48px', { lineHeight: '1.1', letterSpacing: '-4%' }],
        'heading-4-mobile': ['32px', { lineHeight: '1.1', letterSpacing: '-4%' }],
        'heading-5-desktop': ['32px', { lineHeight: '1.1', letterSpacing: '-4%' }],
        'heading-5-mobile': ['24px', { lineHeight: '1.1', letterSpacing: '-4%' }],
        'heading-6-desktop': ['24px', { lineHeight: '1.1', letterSpacing: '-4%' }],
        'heading-6-mobile': ['16px', { lineHeight: '1.1', letterSpacing: '-4%' }],
        'body-xl': ['24px', { lineHeight: '1.1' }],
        'body-large': ['20px', { lineHeight: '1.1' }],
        'body-medium': ['16px', { lineHeight: '1.1' }],
      },
      fontWeight: {
        'medium': '500',
      },
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
      },
      borderRadius: {
        'none': '0px',
      },
      maxWidth: {
        '7xl': '80rem', // 1280px
        '8xl': '90rem', // 1440px
      },
      screens: {
        'xs': '390px', // Mobile breakpoint from Figma
      },
    },
  },
  plugins: [],
}
