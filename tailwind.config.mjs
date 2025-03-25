
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			companyBlue: '#04B2D9',
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
  		fontFamily: {
			BebasNue: [
				'BebasNeue-Regular',
				'sans-serif'
			],
			Italianno: [
				'Italiano-Regular',
				'Handwriting'
			],
  			generalSansExtralight: [
  				'GeneralSans-Extralight',
  				'sans-serif'
  			],
  			generalSansExtralightItalic: [
  				'GeneralSans-ExtralightItalic',
  				'sans-serif'
  			],
  			generalSansLight: [
  				'GeneralSans-Light',
  				'sans-serif'
  			],
  			generalSansLightItalic: [
  				'GeneralSans-LightItalic',
  				'sans-serif'
  			],
  			generalSansRegular: [
  				'GeneralSans-Regular',
  				'sans-serif'
  			],
  			generalSansItalic: [
  				'GeneralSans-Italic',
  				'sans-serif'
  			],
  			generalSansMedium: [
  				'GeneralSans-Medium',
  				'sans-serif'
  			],
  			generalSansMediumItalic: [
  				'GeneralSans-MediumItalic',
  				'sans-serif'
  			],
  			generalSansSemibold: [
  				'GeneralSans-Semibold',
  				'sans-serif'
  			],
  			generalSansSemiboldItalic: [
  				'GeneralSans-SemiboldItalic',
  				'sans-serif'
  			],
  			generalSansBold: [
  				'GeneralSans-Bold',
  				'sans-serif'
  			],
  			generalSansBoldItalic: [
  				'GeneralSans-BoldItalic',
  				'sans-serif'
  			],
  			generalSansVariable: [
  				'GeneralSans-Variable',
  				'sans-serif'
  			],
  			generalSansVariableItalic: [
  				'GeneralSans-VariableItalic',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/line-clamp')],
  			
};
