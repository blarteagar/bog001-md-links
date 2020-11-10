//Importando todos los módulos necesarios
const isAbs = require("./isAbs");
const isVal = require("./isVal");
const openF = require("./openF");
//Manejando la Línea de entrada de comandos
const args = () => {
      let mdlargs = process.argv.slice(2); //array de argumentos
      let val = false;
      let sta = false;
      //asignando la ruta al primer elemento del array
      let route = mdlargs[0];
      //buscando las opciones en el array de argumentos
      let foundV = mdlargs.find((item) => item === "-v");
      let foundS = mdlargs.find((item) => item === "-s");
      //enrutando con if...else
      if (foundV) {
            val = true;
      }
      if (foundS) {
            sta = true;
      }
      let ans = [route, val, sta];
      console.log(ans[0]);
      console.log(ans[1]);
      console.log(ans[2]);
      console.log('route, resolved to absolute is: ', isAbs(route));
      console.log('given path seems to lead to a *.md file?: ', isVal(route));
      openF(route);     
};
args();
module.exports = args;