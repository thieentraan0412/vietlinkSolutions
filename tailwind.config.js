/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vietlink: {
          primary: '#000000',
          secondary: '#ffffff',
          logo:'#2D2B2C',
          logoI:'#F48026',
          info:'#E4E4E4',
          description: '#808191',
        },
        gridTemplateColumns: {
          'fixed-auto': '20px auto',
        }
  
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif','system-ui'],
      },
    },
  },
  plugins: [],
}