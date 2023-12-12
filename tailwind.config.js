/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'red-packet': "url('./public/bg.png')",
      },
      screens: {
        'xs': '376px',  // 添加375px宽的断点
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // ...更多自定义断点
      },
    },
  },
  plugins: [],
}

