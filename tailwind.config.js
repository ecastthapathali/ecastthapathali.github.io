/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        theme: "#dbb732",
        "theme-lqa": "#dbb73244",
        "theme-ha": "#dbb73288",
        "theme-hqa": "#dbb732bb",
        crimson: "#DC143C",
      },
      brightness: {
        15: ".15",
      },
      fontWeight: {
        thin: "100",
      },
      letterSpacing: {
        wideext: "2rem",
      },
      boxShadow: {
        all: "0px 0px 15px 2px rgba(1,1,1, 0.3)",    
        custom: '7px 7px 17px #120f0f, -7px -7px 17px #151414',
      },
      fontSize: {
        "9xl": ["9rem"],
      },

      animation: {
        texColCha: "texColCha 2s ease-in-out infinite",
        glow: 'glow 2.5s ease-in-out infinite',
        glow2 : 'glow 2.5s ease-out-in infinite',
      },
      keyframes: {
        texColCha: {
          "0%,100%": { color: "#dbb732" },
          "40%,95%": { color: "#ffffff" },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px 5px rgba(59, 130, 200, 0.5)' },
          '50%': { boxShadow: '0 0 30px 10px rgba(59, 130, 200, 1)' },
        },
        'animate-glow2': {
          '0%, 100%': { boxShadow: '0 0 15px 5px rgba(100, 130, 200, 0.5)' },
          '50%': { boxShadow: '0 0 30px 10px rgba(59, 130, 200, 1)' },
        },
      },
    },
  },
  plugins: [],
};
