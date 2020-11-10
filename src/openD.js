//Módulo para abrir carpetas y encontrar archivos *.md

//Importando todos los módulos requeridos
const chalk = require('chalk');
const fs = require('fs');
const showdown = require('showdown');

//Método readFile para obtener el contenido del archivo
const open = (route) => {
    fs.readFile(route, 'utf-8', (error, data) => {
        if (error) {
            console.log('an error has occurred');
            console.log(error.stack);
        } else {
            convert(data);
        };
    });

    const convert = (data) => {
        let mtext = data;
        let converter = new showdown.Converter();
        let htext = converter.makeHtml(mtext);
        console.log(htext);
    };
};

