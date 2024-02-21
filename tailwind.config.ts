import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        gray: {
          950: '#f4eee5',
          951: '#222',
          952: '#E9E4DB',
          953: '#9CAE96',
        },
      },
      colors: {
        gray: {
          950: '#f4eee5',
          951: '#222',
          952: '#E9E4DB',
          953: '#9CAE96',
        },
      },
    },
  },
  plugins: [],
};
export default config;
