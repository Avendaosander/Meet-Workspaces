/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'min-500': '500px',
        'min-900': '900px'
      },
			fontFamily: {
				Laila: ["Laila", "sans-serif"],
				Poppins: ["Poppins", "sans-serif"],
				Raleway: ["Raleway", "sans-serif"],
			},
      backgroundImage: {
        'home-section': "url('./src/assets/Sala.jpg')",
      },
      boxShadow: {
        'cards': '-4px 4px 10px 0px rgba(3, 105, 161, 0.5)',
      }
    },
  },
  plugins: [],
}

