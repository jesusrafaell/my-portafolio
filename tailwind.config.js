/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'keyboard-img': "url('/setup-keyborad.jpeg')",
				'custom-img': "url('/setup-keyborad.jpeg')",
			},
		},
	},
	plugins: [],
};
