//Módulo para abrir archivos

//Importando todos los módulos requeridos
const fs = require ('fs');
const showdown  = require ('showdown');

//Método readFile para obtener el contenido del archivo
module.exports = (route) => {
    fs.readFile(route, 'utf-8', (error, data) => {
        if (error) {
            console.log('an error has occurred');
            console.log(error.stack);
        } else {
            return data
        };
});
const convert = (data) => {
    let mtext = data;
    let found = [];
    let converter = new showdown.Converter();
    let htext = converter.makeHtml(mtext);
    console.log(mtext);
    console.log(htext);
    let pattern = /\<\a href=\"(.+)\"\>(.+)\<\/\a\>/g;
    while (found = pattern.exec(htext)){
        console.log('href =', found[1]);
        console.log('text =', found[2]);
        console.log('path =', route);
    };     
};
};
