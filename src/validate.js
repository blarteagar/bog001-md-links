//Módulo para hacer peticiones http

//Importando los módulos nativos requeridos

//Peticiones con fetch
const hReq = (href) =>{
    fetch(href)
    .then(data => data.json())
    .then(console.log(data));
}

module.exports = hReq;
