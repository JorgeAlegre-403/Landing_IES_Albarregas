/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'primary-foreground': '#ffffff',
        secondary: '#64748b',
        'secondary-foreground': '#ffffff',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        accent: '#f3f4f6',
        'accent-foreground': '#1f2937',
        background: '#ffffff',
        foreground: '#1f2937',
        muted: '#f1f5f9',
        'muted-foreground': '#64748b',
        input: '#e2e8f0',
        ring: '#2563eb',
      },
    },
  },
  plugins: [],
}
