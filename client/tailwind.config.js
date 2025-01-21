/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
      },
      
      extend: {
        colors: {
          'myBlue': '#0A32B3',
          'mylightBlue': 'rgb(138,180,248)',
          
          'myPink': '#BD365D',
          'myCyan':'#60f542'
        },
        backgroundImage: {
        'pattern': "url('https://res.cloudinary.com/dfogh1n6r/image/upload/v1737113230/8c98994518b575bfd8c949e91d20548b_kwlkko.jpg')",
      },
      },
  },
  plugins: [],
};

