//Este módulo determina si la ruta conduce a un archivo válido

//Importando los módulos necesarios
const path = require("path");
const args = require("./args.js");
const openF = require("./openF.js");
//const openD = require("./openD.js");

//Inicio de la función 'isVal'
const isVal = (route) => {
  let fileExt = path.extname(route);
  let routeD = false;
  let routeV = false;
  console.log("File extension is: ", fileExt);

  switch (fileExt) {
    case "":
      console.log("Route leads to a folder");
      routeD = true;
      //openD(route);
      break;

    case ".md":
      console.log("ruta conduce a un archivo *.md... OK");
      routeV = true;
      openF(route);
      break;

    default:
      console.log("ruta conduce a un archivo no soportado");
      args();
      break;
  }
};

module.exports = isVal;
