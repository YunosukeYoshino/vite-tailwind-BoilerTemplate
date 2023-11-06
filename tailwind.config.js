/** @type {import('tailwindcss').Config} */
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
const plugin = require("tailwindcss/plugin");


const button = plugin(function ({ matchComponents, theme }) {
	matchComponents(
		{
			button: (value) => ({
				backgroundColor: value,
				borderRadius: "100vMax",
				color: "white",
				display: "inline-block",
				padding: "1rem 2rem",
				width: "fit-content",
			}),
		},
		{ values: flattenColorPalette(theme("colors")) },
	);
});

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			animation: {
				"tracking-in-expand": "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
			},
			keyframes: {
				"tracking-in-expand": {
					"0%": {
						"letter-spacing": "-.5em",
						opacity: "0",
					},
					"40%": {
						opacity: ".6",
					},
					to: {
						opacity: "1",
					},
				},
			},
		},
	},
	plugins: [
		require("tailwindcss-easing"),
		button,
		plugin(function ({ addComponents }) {
			addComponents({
				".btn": {
					padding: ".5rem 1rem",
					borderRadius: ".25rem",
					fontWeight: "600",
				},
				".btn-blue": {
					backgroundColor: "#3490dc",
					color: "#fff",
					"&:hover": {
						backgroundColor: "#2779bd",
					},
				},
				".btn-red": {
					backgroundColor: "#e3342f",
					color: "#fff",
					"&:hover": {
						backgroundColor: "#cc1f1a",
					},
				},
			});
		}),
	],
};
