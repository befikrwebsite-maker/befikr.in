/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        generalSansExtralight: ['GeneralSans-Extralight', 'sans-serif'],
        generalSansExtralightItalic: ['GeneralSans-ExtralightItalic', 'sans-serif'],
        generalSansLight: ['GeneralSans-Light', 'sans-serif'],
        generalSansLightItalic: ['GeneralSans-LightItalic', 'sans-serif'],
        generalSansRegular: ['GeneralSans-Regular', 'sans-serif'],
        generalSansItalic: ['GeneralSans-Italic', 'sans-serif'],
        generalSansMedium: ['GeneralSans-Medium', 'sans-serif'],
        generalSansMediumItalic: ['GeneralSans-MediumItalic', 'sans-serif'],
        generalSansSemibold: ['GeneralSans-Semibold', 'sans-serif'],
        generalSansSemiboldItalic: ['GeneralSans-SemiboldItalic', 'sans-serif'],
        generalSansBold: ['GeneralSans-Bold', 'sans-serif'],
        generalSansBoldItalic: ['GeneralSans-BoldItalic', 'sans-serif'],
        generalSansVariable: ['GeneralSans-Variable', 'sans-serif'],
        generalSansVariableItalic: ['GeneralSans-VariableItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
