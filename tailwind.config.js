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
			LightApricot: "#f5e3d2",
			Smokey: "#1a1d215a",
			impactful: "#612FFF",
			Minty: "#94D2BD",
			Teal: "#75B2A9",
			Cloud: "#F7F9F3",
			Mystic: "#625F6A",
			MauveGray:"#918e99",
			Pearl: "#FDFBF7",
			SmokeWhite: "#F6F6F6",
			Midnight: "#2a2d36e0",
			Steel: "#363942e0",
			Taupe: "#706C69",
			Flint: "#605E5C",
			Amber: "#D1A980",
			Onyx: "#130D07",
			Blush: "#FFF1E4",
			Granite: "#7F7B77",
			PeachFuzz: "#FDD8D8",
			Charcoal: "#353535",
			NavyBlue: "#003087",
			Sunflower: "#FFC439",
			Silver: "#707070",
			Storm: "#4b5161",
			JetBlack: "#272727",
			SilverGray: "#929190",
			Abyss: "#16181E",
			Snow: "#FAFAFA",
			Sage: "#C3C3AE",
			Mistral : "#62A496",
			Silk : "#e5e7eb",
			Noir : "#374151",
			Marina: "#79B3AA",
			DeepBasalt: "#4b4756",
			NeonNoir: "#31333bd8",
			HolographicSteel: "#3538427d",
			VoidMatrix: "#1f2127d8",
			Velvet : "#3b3647",
			Linen : "#F9FAFB",
			Iron : "#434241",
			Luminous: "#f8f8f8e2",







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
