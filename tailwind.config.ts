/** @format */

import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["var(--font-poppins)", ...fontFamily],
				montserrat: ["var(--font-montserrat)", ...fontFamily],
			},
		},
	},
	plugins: [],
};
export default config;
