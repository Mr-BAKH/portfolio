/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        open: {
          '0%': { opacity: 0},
          '50%': { opacity: 1},
        }
      },
      animation: {
        open: 'open 2s ease-in-out 1',
        shortopen: 'open 1s ease-in 1',
      }

    },
  },
  plugins: [],
}

