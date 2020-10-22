const fs = require ('fs');


let path = '../readThis/checklist'
/*let ext = path.slice(-3);
if (ext === '.md'){
console.log(path, ' es un archivo markdown');
}else{
console.log(path, ' contiene un tipo de archivo no admitido. Se detendrá la ejecución ahora');
return;
}*/

//Método readFile para obtener el descriptor del archivo
fs.readFile(path, 'utf-8', (error, data) => {
  if (error) {
    console.log('an error has occurred');
    console.log(error.stack);
  } else {
    console.log('for', path, ' the file descriptor is ', data);
  
  }
});

//Método open para obtener el descriptor del archivo
  fs.open(path, 'r', (error, fd) => {
    if (error) {
      console.log('an error has occurred');
      console.log(error.stack);
    } else {
      console.log('for', path, ' the file descriptor is ', fd);
      
    }
  });

/*//Método stat para obtener detalles del archivo
fs.stat(path, (err, data) => {
  if (err) {
    console.error(err)
    return
  }else {
    console.log(data);
    //we have access to the file stats in `stats`
  }
})



/*
código de Laboratoria
module.exports = () => {
  // ...
};
Fin del código de Laboratoria
*/
