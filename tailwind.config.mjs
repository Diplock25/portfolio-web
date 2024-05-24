/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				"blue-gradient": "linear-gradient(to right, #1730AC 0%, #008ECB 100%);",
				"blue-gradient-reverse": "linear-gradient(to left, #1730AC 0%, #008ECB 100%);"
			},
			aspectRatio: {
				card: '1.618 / 1',
				"card-h": '1 / 1.618'
			},
			screens: {
				ss: '360px'
			}
		}
	},
	plugins: [],
}
