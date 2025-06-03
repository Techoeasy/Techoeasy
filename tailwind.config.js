/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#235DF5',  // Tech Blue
        accent: '#10B981',   // AI Green
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};