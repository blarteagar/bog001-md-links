//Módulo para abrir archivos

//Importando todos los módulos requeridos
const chalk = require('chalk');
const fs = require('fs');
//const fs = require('fs').promises; Esto lo debo investigar!!!
const showdown = require('showdown');
const jsdom = require ('jsdom');
const { JSDOM } = jsdom;

//Método readFile para obtener el contenido del archivo
const openF = (route) => {
    fs.readFile(route, 'utf-8', (error, data) => {
        if (error) {
            console.log('an error has occurred');
            console.log(error.stack);
        } else {
            convert(data, route);
        };
    });

//Función convertir (llamada desde open)
const convert = (data, route) => {
    let mtext = data;
    const { Converter } = require('showdown');
    let converter = new showdown.Converter();
    let htext = converter.makeHtml(mtext);
    console.log(htext);

//Inicializando el paquete JSDOM para convertir HTML en un documento con objetos (DOM) y devolviendo la lista de nodos DOM
    const dom = new JSDOM(htext);
    const listOfNodes = dom.window.document.querySelectorAll("a");
    console.log(listOfNodes);

//Construyendo una clase "foundLinks", un objeto que contiene los links en el documento markdown analizado
    class foundLinks {
        constructor(href, text, route){
            this.href = href;
            this.text = text;
            this.file = route;
        }
    };

//Construyendo un array de objetos con forEach. Imprimiendo cada link encontrado con colorcitos chalk
    listOfNodes.forEach(element => {
        const newLinkFound = new foundLinks(element.href, element.textContent, route);
        console.log(chalk.magentaBright('---begining of link---'));
        console.log(chalk.magentaBright('href = ', newLinkFound.href));
        console.log(chalk.blueBright('text = ', newLinkFound.text));
        console.log(chalk.greenBright('file = ', newLinkFound.file));
        console.log(chalk.greenBright('---end of link ---'));
        console.log('');
        });
    };
};
module.exports = openF;