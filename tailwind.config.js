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
        "fit-74": "repeat(auto-fill, minmax(16rem, 1fr))",
      },
    },
  },
  plugins: [],
}
