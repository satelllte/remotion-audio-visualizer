import {type Config} from 'tailwindcss'; // eslint-disable-line import/no-extraneous-dependencies

const config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config;

export default config;
