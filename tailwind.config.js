// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//       './pages/**/*.{js,ts,jsx,tsx,mdx}',
//       './components/**/*.{js,ts,jsx,tsx,mdx}',
//       './app/**/*.{js,ts,jsx,tsx,mdx}',
//     ],
//     darkMode: 'class', // This is the key line - enables class-based dark mode
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // This is important!
  theme: {
    extend: {},
  },
  plugins: [],
}