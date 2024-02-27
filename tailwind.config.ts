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
          951: '#f4eee5',
          952: '#222',
          953: '#E9E4DB',
        },
        green: {
          951: '#9CAE96',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
export default config;
