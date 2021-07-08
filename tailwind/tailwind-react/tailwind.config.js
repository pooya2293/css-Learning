module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sexy:{
          light: "#eaf37b",//EX: bg-sexy-light
          DEFAULT:"#e4ad02",//EX: bg-sexy
          dark: "#eb8805",//EX: bg-sexy-dark
        },
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
