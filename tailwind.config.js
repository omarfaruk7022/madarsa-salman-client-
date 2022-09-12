/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#31C48D",
          secondary: "#0096FF",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      
    ],
  },
  plugins: [require("daisyui"),require('@tailwindcss/forms')],
};
