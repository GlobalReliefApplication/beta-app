import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"un-image": "url('../public/assets/un-icon.svg')"
			},
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
			},
			colors: {
				primary: "white",
				secondary: {
					100: "#f2d0ff",
					200: "#e4a1ff",
					300: "#d771fe",
					400: "#c942fe",
					500: "#bc13fe",
					600: "#960fcb",
					700: "#710b98",
					800: "#4b0866",
					900: "#260433",
				},
				background: {
					100: "#d0d5df",
					200: "#a2abbe",
					300: "#73809e",
					400: "#45567d",
					500: "#B52520",
					600: "#031723",
					700: "#162B5D",
					800: "#091225",
					900: "#fafafa",
				},
				links: "#81869C",
			},
		},
	},
	plugins: [],
};
export default config;
