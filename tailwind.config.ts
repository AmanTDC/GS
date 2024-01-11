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
      
      
      boxShadow: {
        card: '0px 5px 11px 0px rgba(0, 0, 0, 0.02), 0px 19px 19px 0px rgba(0, 0, 0, 0.02), 0px 44px 26px 0px rgba(0, 0, 0, 0.01), 0px 78px 31px 0px rgba(0, 0, 0, 0.00), 0px 122px 34px 0px rgba(0, 0, 0, 0.00);',
        navbar:
          '0px 28px 61px 0px rgba(0, 0, 0, 0.05), 0px 111px 111px 0px rgba(0, 0, 0, 0.04), 0px 250px 150px 0px rgba(0, 0, 0, 0.03), 0px 444px 178px 0px rgba(0, 0, 0, 0.01), 1px 694px 194px 0px rgba(0, 0, 0, 0.00);',
      },
    },
  },
  plugins: [],
};
export default config;
