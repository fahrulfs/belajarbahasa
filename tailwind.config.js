/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'mainFont': ["Inter", "sans-serif"],
        'customFont': ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(200px, auto))',
      },
        colors: {
          'main': '#e1a90c',
          'second': '#f4c237',
          'accent': '#056aad',
          'accent2': '#fae3a4'
            
          // Configure your color palette here
        }
  
    },
  },
  plugins: [

  ],
}

