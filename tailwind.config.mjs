/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"blue-gradient": "#048dfc"
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
