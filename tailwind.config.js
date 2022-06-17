module.exports = {
	purge: {
		enabled: true,
		content: [
			'**/*.{html,js}',
		],
	  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: '#FF4A00',
        blue: '#111827',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      backgroundColor: ['hover', 'focus'],
    },
  },
  plugins: [],
}
