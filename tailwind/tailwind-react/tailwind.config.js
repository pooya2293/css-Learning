module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sexy: "#e4ad02",
        "sexy-light": "#eaf37b",
        "sexy-dark": "#eb8805",
      },
    },
  },
  variants: {
    extend: {
    	backgroundColor: ["active"],
      fontSize : ["hover"],
    },
  },
  plugins: [],
}
