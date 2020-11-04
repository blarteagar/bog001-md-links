//Este módulo determina si la ruta es absoluta o relativa
const path = require('path'); //Llamando el módulo npm nativo que procesa las rutas

//Inicio de la función
module.exports = (route) => {
    if (path.isAbsolute(route)){
        console.log('path is Absolute... OK');
        return route;
    }else{
        console.log('path is relative... resolving to absolute...');
        let absRoute = path.resolve(route);
        console.log('absolute path is ', absRoute);
        return absRoute;
        };
}
