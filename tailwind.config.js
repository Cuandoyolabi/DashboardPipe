module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["dracula"],
  },
}
