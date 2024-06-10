/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    extend: { 
      backdropFilter: {
      'none': 'none',
      'blur': 'blur(24px)',
    },
  },
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'],
    },
  },
  plugins: [ 
    require('tailwindcss-filters'),
  ],
}

