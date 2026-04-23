/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        void: '#0B0D12',
        glass: 'rgba(255, 255, 255, 0.03)',
        border: 'rgba(255, 255, 255, 0.08)',
        holoCyan: '#3F9AAE',
        electricBlue: '#0EA5E9',
        neonViolet: '#818CF8',
      },
      backgroundImage: {
        'glass-gradient':
          'linear-gradient(145deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'glow-gradient':
          'radial-gradient(circle at center, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        neon: '0 0 20px rgba(56, 189, 248, 0.3)',
        card: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}

