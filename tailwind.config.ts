import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
      boxShadow: {
        card: '0px 5px 11px 0px rgba(0, 0, 0, 0.02), 0px 19px 19px 0px rgba(0, 0, 0, 0.02), 0px 44px 26px 0px rgba(0, 0, 0, 0.01), 0px 78px 31px 0px rgba(0, 0, 0, 0.00), 0px 122px 34px 0px rgba(0, 0, 0, 0.00);',
      },
    },
  },
  plugins: [],
};
export default config;
