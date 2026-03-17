/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F4F0EA',     // Bone/Sand
        primary: '#1A3622',        // Deep Forest Green
        accent: '#C85A40',         // Burnt Terracotta
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif'], 
        // Note: For 'Inter' replace '"Space Grotesk"' with '"Inter"'
      },
    },
  },
  plugins: [],
};
