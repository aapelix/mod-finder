/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.svelte",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary: "#35373a",
      },
    },
  },
  plugins: [],
}

