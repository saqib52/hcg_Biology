/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Requested Deep Teal / Sea Green shade (#35605A)
        'pine-teal': {
          50: '#f0f6f5',
          100: '#dceae7',
          200: '#bbd6d1',
          300: '#94bdb7',
          400: '#6ea099',
          500: '#4d837c',
          600: '#3c6e67',
          700: '#35605A', // Base target hex: #35605A
          800: '#2c4d48',
          900: '#243e3a',
          950: '#152422',
        },
        // Rich Royal Blue / Academic Navy scale
        'dark-wine': {
          50: '#eef6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // Vibrant royal blue
          700: '#1d4ed8', // Interactive royal blue
          800: '#1e3a8a', // Deep Academic Navy
          900: '#0f2042', // Midnight Navy
          950: '#0a1428',
        },
        // Secondary structural neutral & border surfaces (Warm crisp slate / mist)
        'sand-dune': {
          50: '#f8fafc',  // Crisp card fill / secondary surface
          100: '#f1f5f9', // Light badge / secondary card bg
          200: '#e2e8f0', // Clean elegant modern border
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Subtle soft tint / Ice Blue for clean contrast
        'alice-blue': {
          50: '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
          950: '#041d2e',
        },
        // Typography & high-contrast elements (Sharp Slate Charcoal)
        'ink-black': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155', // High-contrast readable body text
          800: '#1e293b', // Subheadings
          900: '#0f172a', // Bold primary titles & headings
          950: '#020617',
        },
        // Biology & WhatsApp vibrant accent (Emerald / Biology Green)
        'olive-leaf': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669', // Emerald Life Science & WhatsApp
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
