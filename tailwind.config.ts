import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
			center: true,
			padding: '1rem'
		},
		extend: {}
	},

	plugins: []
} satisfies Config;
