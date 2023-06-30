/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        'theme': '#dbb732',
      },
      brightness: {
        15: '.15',
      },
      fontWeight: {
        thin: '100',
      },
      letterSpacing:
      {
        wideext:'2rem',
      },
      boxShadow: {
        'all': '0px 0px 15px 2px rgba(1,1,1, 0.3)',
      },
      fontSize:
      {
        '9xl': ['9rem'],
      },

      animation:
      {
        texColCha: 'texColCha 5s ease-in infinite'
      },
      keyframes: {
        texColCha: {
          '0%,100%' : { color:'#dbb732' },
          '40%,95%': { color:"#ffffff" },
        }
      }
    }
  },
  plugins: [],
}