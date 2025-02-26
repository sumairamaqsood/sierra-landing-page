/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html', // Include all HTML files inside the public/ folder
    './*.html', // Include root-level HTML files
    './public/js/**/*.js', // Include all JS files inside public/js/
    './src/**/*.{html,js}', // Include any source files (if used)
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        darkBlue: 'hsl(232.5, 64.5%, 12.2%)',
        darkGray: 'hsl(232.5, 12.1%, 12.9%)',
        white: 'hsl(0, 0%, 100%)',
        lightPink: 'hsl(338.9, 100%, 89.4%)',
        lightPurple: 'hsl(249.4, 42.9%, 76.7%)',
        pink: 'hsl(303.9, 43.4%, 79.2%)',
        lightBlue: 'hsl(206.5, 95.6%, 82.4%)',
      },
    },
  },
  plugins: [],
};
