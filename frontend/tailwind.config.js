/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/pages/About.js",
    "./src/pages/Landing.js",
    "./src/pages/Contact.js",
    "./src/pages/Projects.js",
    "./src/pages/NoPage.js",
    "./src/components/Header.js",
    "./src/components/AboutMe.js",
    "./src/components/NavBar.js",
    "./src/components/Project.js",
    "./src/components/Language.js",
    "./src/components/Modal.js",
  ],
  theme: {
    extend: {
      fontFamily:{
        'title':['Montserrat', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        'poppins':['Poppins', 'serif'],
      },
    },
  },
  plugins: [],

}

