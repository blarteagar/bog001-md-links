const fs = require ('fs');
const path = require ('path');
const readline = require('readline');

/*Paths to read:
absolute (correct):'C:/Users/USER/Documents/data/bog001-md-links/readable/folder/blar.md'
absolute (correct):'C:/Users/USER/Documents/data/bog001-md-links/readable/folder/blar.mdoc'
relative (correct):'../readable/folder/piar.md'
relative (correct):'../readable/folder/piar.md'
*/

/*Código para generar la Línea de Lectura (Readline)*/
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*Inicio de la interfaz de linea de comandos*/
rl.question('md-links (route, options)? ', (route, options) => {
    rl.close();
  
    //console.log(`La ruta a analizar es ${route}`);
    let hasPeriod = new RegExp('[.]');
    let ext = hasPeriod.test(route);
    //console.log('¿hay un punto en la ruta?', ext);
    let tail = route.indexOf('.');
    //console.log('hay un punto en la posición ', tail, ' de la ruta')
    let extFile = route.slice(tail);
    //console.log('la extensión del archivo es ', extFile);
    
    if (ext === false){
      console.log('ruta conduce a una carpeta')
    }else if (extFile === ".md"){
      console.log('ruta conduce a un archivo *.md')
    }else{
      console.log('ruta conduce a un archivo no soportado')
    }
});
