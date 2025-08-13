/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '15px',
      screens: {
        'max-513': { max: '513px' },
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
    },
    extend: {
      colors: {
        primary: '#454699',
        sub3: '#F6F6F6',
      },
    },
  },
  plugins: [],
};
