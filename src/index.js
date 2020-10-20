const fs = require ('fs');

prompt('mdLinks?', route);
let route = '../filesToRead/checklist.md';
let ext = route.slice(-3);
if (ext='.md'){
  console.log('es un archivo markdown');
}else{
  console.log('tipo de archivo no admitido');
}
let fileContent = fs.readFile( route, 'utf-8', (error, data)=>{
  if (error){
    console.log('an error has occurred');
    throw error;
  }else{
    console.log(fileContent);
    console.log(data);
  }
});


/*
código de Laboratoria
module.exports = () => {
  // ...
};
Fin del código de Laboratoria
*/
