import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316', // vibrant orange
        accent: '#60A5FA', // light sky blue
        background: '#FEFCE8', // warm off-white
        'text-primary': '#1F2937', // dark slate gray
        'text-inverse': '#FFFFFF', // white for buttons/text on orange
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '7xl': '4.5rem',
      },
      fontWeight: {
        '800': '800',
      },
      spacing: {
        '24': '6rem', // section_padding from design.json
      },
      maxWidth: {
        'container': '1280px', // container_max_width from design.json
      },
      borderRadius: {
        'full': '9999px',
      },
      gap: {
        '8': '2rem', // component_gap from design.json
      },
      width: {
        '32': '8rem', // avatar size from design.json
      },
      height: {
        '32': '8rem', // avatar size from design.json
      },
    },
  },
  plugins: [],
}
export default config 