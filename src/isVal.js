//Este módulo determina si la ruta conduce a un archivo válido
//Importando los módulos necesarios
const path = require('path');
const args = require('./args.js');
//Inicio de la función 'isVal'
module.exports = (route) => {
    let fileExt = path.extname(route);
    let routeF = false;
    let routeV = false;
    let routeI = false;
    console.log('La extensión del archivo es ', fileExt);
    switch(fileExt){
        case '':
            console.log('ruta conduce a una carpeta');
            routeF = true;
            return routeF;
        break;
    
        case '.md':
            console.log('ruta conduce a un archivo *.md... OK');
            routeV = true;
            return routeV;
        break;
    
        default:
            console.log('ruta conduce a un archivo no soportado');
            args();
        break;
    };
}