import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: {
        1: '1px',
      },
      colors: {
        '252F3D': '#252F3D',
        '2C3642': '#2C3642',
        '293343': '#293343',
        A5B6CD: '#A5B6CD',
        '4D5C6F': '#4D5C6F',
        '333333': '#333333',
        CF4055: '#CF4055',
        '127C95': '#127C95',
        D8E0E9: '#D8E0E9',
      },
      height: {
        logoDesktop: '32px',
        logoMobile: '16px',
      },
      lineHeight: {
        18: '18px',
        30: '30px',
      },
      screens: {
        desktop: '600px',
      },
      spacing: {
        'header-left': '10.375rem',
        '7.5': '7.5px',
        '11': '11px',
        '11.5': '11.5px',
        '14.5': '14.5px',
        15: '15px',
        17: '17px',
        22: '22px',
        25: '25px',
        26: '26px',
        34: '34px',
        '45': '45px',
        '59': '59px',
        102: '102px',
        form: '502px',
      },
      letterSpacing: {
        '0.15': '0.15px',
      },
      width: {
        logoDesktop: '294px',
        logoMobile: '148px',
      },
    },
  },
  plugins: [],
};
export default config;
