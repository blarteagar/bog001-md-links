const fs = require ('fs');

let route = './filesToRead/checkList.md';
if (route.slice(-3)='.md'){
  console.log('es un archivo markdown');
}else{
  console.log('tipo de archivo no admitido');
}
let fileContent = fs.readFile(route, utf-8);
console.log(fileContent);

/*
código de Laboratoria
module.exports = () => {
  // ...
};
Fin del código de Laboratoria
*/
