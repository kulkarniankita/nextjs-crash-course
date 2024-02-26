import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
  plugins: [require('@tailwindcss/line-clamp')],
};
export default config;
