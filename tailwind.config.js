/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			fontFamily: {
				Laila: ["Laila", "sans-serif"],
				Poppins: ["Poppins", "sans-serif"],
				Raleway: ["Raleway", "sans-serif"],
			},
      boxShadow: {
        'cards': '-4px 4px 10px 0px rgba(3, 105, 161, 0.5)',
      }
    },
  },
  plugins: [],
}

