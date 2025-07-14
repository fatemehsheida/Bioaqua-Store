/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
	"./app/**/*.{js,ts,jsx,tsx,mdx}",
	"./pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./components/**/*.{js,ts,jsx,tsx,mdx}",

	// Or if using `src` directory:
	"./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
	extend: {
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		colors: {
			DarkPurple: "#2E2A39",
			DarkGray: "#33333393",
			LightGray:"#EFF5F4",
			LightMint: "#EEF5F4",
			ShadowBlue: "#21242D",
			IvoryCream: "#FCF8F5",
			FrostGray: "#F1F3F1",
			GraphiteViole: "#5F5C68",
			FogAsh: "#8C8A92",
			StoneLilac: "#65626D",
			PearlBlush: "#FFF6EE",
			IronGray: "#373941",
			AquaHaze: "#6BB0A9",
			SteelShadow: "#383A40",
			BlushPearl: "#fcede3",
			SlateTeal: "#586b69",
			MistGlass: "#F0F4F2",
			PorcelainMist: "#F4F3EF",
			AbyssBlue: "#1C1F2B",
			LinenBeige: "#CCC6B0",
			CashmereBlush: "#F0D6C0",
			FrostedJade: "#EDF0ED",
			DeepVerdigris: "#3A7C76",
			DriftwoodTan: "#97806c",
			IronOre: "#74706e",
			GlacialStream: "#bde3e0",
			TidalFoam: "#B3E4DF",
			QuietSilver: "#C5D1D0",
			VerdigrisWave: "#49B8AD",





			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			}
		},
		keyframes: {
			'accordion-down': {
				from: {
					height: '0'
				},
				to: {
					height: 'var(--radix-accordion-content-height)'
				}
			},
			'accordion-up': {
				from: {
					height: 'var(--radix-accordion-content-height)'
				},
				to: {
					height: '0'
				}
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out'
		}
	}
};
export const plugins = [require("tailwindcss-animate")];
