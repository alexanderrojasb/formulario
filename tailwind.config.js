/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'violet-blue': 'rgba(86, 99, 177, 1)',
        'purple-dark': 'rgba(62, 14, 77, 1)',
        'gray-search': 'rgba(217, 217, 217, 1)',
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'MyFont': ['"My Font"', 'serif']
      },
      backgroundImage: {
        'fondo': "url('src/img/fondo.png')",
        'dog': "url('src/img/perrito.png')",
      },
      width: {
        '594': '594px',
        '428': '428px',
        '550': '550px',
        '222': '222px',
        '219': '219px',
        '1152': '1152px',
        '177': '177px',
        '574': '574px',
      },
      height: {
        '314': '314px',
        '288': '288px',
        '250': '250px'
      },
      fontSize: {
        '3-2xl' : '32px'
      },
      boxShadow: {
        'container': '0px 2px 4px 0px rgba(0, 0, 0, 0.15);',
      }
    },
  },
  plugins: [],
}

