module.exports = {
  content: [
    '*.{html,js}',
    './js/**/*.{html,js}',    
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF4A00',
        blue: '#111827',
      },
      gridTemplateColumns: {
        "fit-80": "repeat(auto-fill, minmax(20rem, 1fr))",
      },
    },
  },
  plugins: [],
}
