//Importando todos los módulos necesarios
const isAbs = require('./isAbs');
const isVal = require('./isVal');
const openF = require('./openF');

//Manejando la Línea de entrada de comandos
module.exports = () => {
    let mdlargs = process.argv.slice(2); //array de argumentos
    let val = false;
    let sta = false;
//asignando la ruta al primer elemento del array
    let route = process.argv[2];
//buscando las opciones en el array de argumentos
    let foundV = mdlargs.find(item => item === '-v');
    let foundS = mdlargs.find(item => item === '-s');
//enrutando con if...else
    if (foundV){val = true}
    if (foundS){sta = true}
    console.log(mdlargs);
    console.log(route);
    console.log('validate?: ', val, 'statistics?: ', sta);
    console.log(isAbs(route));
    console.log(isVal(route));
    openF(route);
};