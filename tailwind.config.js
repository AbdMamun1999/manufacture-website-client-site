module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        manufacturertheme: {
          primary: "#222f3e",
          secondary: "#62c0ec",
          accent: "#62c0ec",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      'cupcake'
    ],
  },
  plugins: [require("daisyui")],
}
