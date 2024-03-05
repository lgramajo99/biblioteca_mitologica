/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',// => @media (min-width: 640px) { ... }
      'md': '768px',// => @media (min-width: 768px) { ... }
      'lg': '1024px',// => @media (min-width: 1024px) { ... }
      'xl': '1280px',// => @media (min-width: 1280px) { ... }
      '2xl': '1536px',// => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
      colors: {
        deepPurplePri: '#231E2F', //primario Dark
        darkPurple: '#433e4d', //secundario Dark
        grayishPurple: '#65606e', //acento Dark

        lightPrimary: '#59acc4', //bg footer, navbar, sidebar
        lightAcenture: '#c5d5d9', //bg fondo
        lightComplement: '#E2E8F0', //bg complemento de acenture

        secondary: '#3D747F', 

        darkPrimary: '#121212',
        darkSecondary: '#3D747F',
        darkAcenture: '#0f172acc', //bg fondo
        darkTxt: '#F5F5F5'

      }
    },
  },
  plugins: [],
}

/*  Colores elegidos :
 #2A213C
 #231E2F
 #29222E
 #1D1A27
*/