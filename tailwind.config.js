/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			gradientColorStops: {
				skin: {
					main: "var(--gradientMain)",
				},
			},
			backgroundImage: {
				"gradient-custom": `linear-gradient(to bottom right, var(--gradientMain), var(--gradientVia), var(--gradientTo))`,
			},
			boxShadow: {
				"3xl": "0px 0px 15px 0px rgb(17 94 89/ 0.5)",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				textSecondary: "var(--textSecondary)",
				gradientMain: "var(--gradientMain)",
				gradientVia: "var(--gradientVia)",
				gradientTo: "var(--gradientTo)",
				bgHover: "var(--bgHover)",
				hover: "var(--hover)",
				imageBg: "var(--imageBg)",
				borderC: "var(--borderC)",

				primary: {
					50: "#E1E8EF",
					100: "#D4DEE7",
					200: "#B7C7D7",
					300: "#99B0C7",
					400: "#7C99B6",
					500: "#5E82A6",
					600: "#4C6B8A",
					700: "#3C546C",
					800: "#2C3D4F",
					900: "#1B2631",
					950: "#141C24",
				},
				// accent: {
				// 	50: "#FAF5F0",
				// 	100: "#F4ECE1",
				// 	200: "#E8D6BF",
				// 	300: "#DDC2A2",
				// 	400: "#D2AF84",
				// 	500: "#C69963",
				// 	600: "#B78343",
				// 	700: "#926835",
				// 	800: "#6C4D28",
				// 	900: "#4B351B",
				// 	950: "#382814",
				// },
				// buttonMain: {
				// 	50: "#f0f9ff",
				// 	100: "#e0f2fe",
				// 	200: "#bae6fd",
				// 	300: "#7dd3fc",
				// 	400: "#38bdf8",
				// 	500: "#0ea5e9",
				// 	600: "#0284c7",
				// 	700: "#0369a1",
				// 	800: "#075985",
				// 	900: "#0c4a6e",
				// 	950: "#082f49",
				// },
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				"scrollbar-thumb": "8px",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(function ({ addUtilities }) {
			addUtilities({
				".scrollbar-hide": {
					"scrollbar-width": "none", // For Firefox
					"-ms-overflow-style": "none", // For Internet Explorer and Edge
				},
				".scrollbar-hide::-webkit-scrollbar": {
					display: "none", // Hides the full scrollbar
				},
				".scrollbar-thumb-only::-webkit-scrollbar": {
					width: "6px",
				},
				".scrollbar-thumb-only::-webkit-scrollbar-track": {
					background: "transparent", // Completely hidden track
				},
				".scrollbar-thumb-only::-webkit-scrollbar-thumb": {
					background: "var(--bgHover)",
					"border-radius": "8px",
				},
			});
		}),
	],
};
