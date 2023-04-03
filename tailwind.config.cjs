/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': 'hsl(235, 40%, 5%)',
				'primary-hover': 'hsl(235, 40%, 5%, 0.9)',
				'secondary': 'hsl(235, 55%, 50%)',
				'secondary-hover': 'hsl(235, 55%, 50%, 0.9)',
			},
			fontFamily: {
        'sans': ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [],
}
