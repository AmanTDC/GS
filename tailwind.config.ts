import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  purge: ['./src/**/*.{js,jsx}', './public'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        secondary: 'rgba(55, 65, 81, 1)',
        sliderArrow: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
export default config;
