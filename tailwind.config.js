const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// primary: 'var(--color-primary)',
				// secondary: 'var(--color-secondary)',
				// attention: 'var(--color-attention)',
				primary: '#3A93B4',
				secondary: '#F2B558',
				attention: '#D08360',
				green: '#85DC93',
				white: colors.white,
				red: colors.red,
				gray: {
					lightest: '#f0f0f0',
					light: '#DCDCDC',
					DEFAULT: '#989898',
					dark: '#565656',
					darkest: '#333333'
				},

			},
			fontFamily: {
				'body': ['"Noto Sans"'],
			   },
			dropShadow: {
				'lg': '0 0 16px #999',
			  }
		},
	},
	variants: {
		extend: {
			opacity: ['disabled'],
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
