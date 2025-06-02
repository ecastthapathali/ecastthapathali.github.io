/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        'hover-glow': '0 0 20px rgba(219, 183, 50, 0.5)',
        'card-hover': '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
        "9xl": ["9rem"],
      },
      animation: {
        texColCha: "texColCha 2s ease-in-out infinite",
        glow: 'glow 2.5s ease-in-out infinite',
        glow2: 'glow 2.5s ease-out-in infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 1s infinite',
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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};
