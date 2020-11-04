/*
Paths to read:
absolute:'C:/Users/USER/Documents/data/bog001-md-links/readable/folder/blar.md'
absolute:'C:/Users/USER/Documents/data/bog001-md-links/readable/checklist.doc'
absolute:'C:/Users/USER/Documents/data/bog001-md-links/readable/folder'
absolute:'C:/Users/USER/Documents/data/bog001-md-links/readable/folder/piar.doc'
relative:'../readable/checklist.doc'
relative:'../readable/folder'
relative:'../readable/resources.doc'
relative:'../readable/folder/piar.md'
relative:'../readable/folder/piar.md'
*/

/*
//Asignación de la ruta a una variable literal
var route = 'C:/Users/USER/Documents/data/bog001-md-links/readable/folder/blar.md';

//Método readFile para obtener el contenido del archivo
fs.readFile(route, 'utf-8', (error, data) => {
        if (error) {
            console.log('an error has occurred');
            console.log(error.stack);
        } else {
            var mdtext = data;
            var allmatches = [];
            var converter = new showdown.Converter();
            var htmltext = converter.makeHtml(mdtext);
            console.log(mdtext);
            console.log(htmltext);
            var patternhtml = /\<\a href=\"(.+)\"\>(.+)\<\/\a\>/g;
            var foundhtml = patternhtml.exec(htmltext);
              console.log('href =', foundhtml[2]);
              console.log('text =', foundhtml[1]);
              console.log('path =', route);
        };
    });
});
*/


/*
//Inicio de la interfaz de linea de comandos (recorrer el array)
let argumentos = process.argv;//variable que almacena parámetros de uso
if (argumentos[2]==='mdlinks') {
  console.log('mdlinks activated');
}else if (argumentos[3]==='-v'){
  console.log('mdlinks activated');
}else if (argumentos[4]==='-s'){
  console.log('mdlinks activated');
}
*/


/*
//Tratando de leer links
let data = 'there is a [place]("http://www.google.com") where I can go there is a <a href="http://www.taxi.com">taxi</a> that I can take there is a <a href="http://www.adrien.com">adrien</a> that Marinette can love';
let pattern1 = /\]\(\"(.+)\"\)/;
let pattern2 = /\[(.+)\]\(/;
let found1 = '';
let found2 = '';
const lookUp = (data) => {
  let found1 = pattern1.exec(data);
  let found2 = pattern2.exec(data);
  console.log(found1);
  console.log(found2);
};
lookUp(data);
/*

/*
//Construyendo expresiones regulares para delimitar trozos de texto
let opHref = new RegExp('<a>');
let clHref = new RegExp('</a>');
let opText = new RegExp('');
let clText = new RegExp('');

let estandar = new Object{
'href': URL encontrada,
'text': Texto que aparecía dentro del link (`<a>`),
'file': route,
}

/* Here I will post some code pieces*/


//Asignación de la ruta a una variable literal
let route = 'C:/Users/USER/Documents/data/bog001-md-links/readable/folder/blar.md';

//Método readFile para obtener el contenido del archivo
fs.readFile(route, 'utf-8', (error, data) => {
  if (error) {
    console.log('an error has occurred');
    console.log(error.stack);
  } else {
    console.log('for', route, ' the content is ', data);  
  }
});
export const router = async (route) => {

  const content = document.getElementById("root");
  
  switch (route) {

      case "#register":         
          content.innerHTML= await registerView.render();
          registerView.afterRender();
          break;

      case "#login":
          content.innerHTML = await loginComponent.render();
          loginComponent.afterRender();
          break;

      case "#wall":
          content.innerHTML = await  wallView.render();
          wallView.afterRender();
          loadPost();
          break;

      case "":
          location.hash="#login"    
          history.pushState("#login", "", "#login")
          break;

      default:
          "404 "
          break;
  }
}


var readline = require('readline');
var util = require('util');

var rl = readline.createInterface(process.stdin, process.stdout);

var persona = {
    nombre: '',
    comentarios: []
};

rl.question('Cuál es tu nombre? ', (respuesta) => {
  persona.nombre = respuesta;

  rl.setPrompt('Dime un comentario: ');
  rl.prompt();

});

rl.on('line', (input) => {
    if(input.trim() === 'salir'){
        var mensaje = util.format("Te llamas %s y esto me dijiste: %j", persona.nombre, persona.comentarios);
        console.log(mensaje);
        process.exit();
    }
    persona.comentarios.push(input.trim());

    rl.setPrompt('Dime un comentario: ');
    rl.prompt();
});

const request = https.request(options, (res) => {
            context.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
    context.log('LOOOL');
  })
});

request.on('error', (error) => {
  context.error(error);
});

request.end();

//Método readFile para obtener el contenido del archivo
fs.readFile(path, 'utf-8', (error, data) => {
  if (error) {
    console.log('an error has occurred');
    console.log(error.stack);
  } else {
    console.log('for', path, ' the content is ', data);  
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

//Método stat para obtener detalles del archivo
fs.stat(path, (err, data) => {
  if (err) {
    console.error(err)
    return
  }else {
    console.log(data);
  }
})

process.stdout = route;
});
    
    switch (ext){
      case ''(path, ' es un archivo');
    }else{
    console.log(path, ' contiene un tipo de archivo no admitido. Se detendrá la ejecución ahora');
    return;
    }
    Evaluando las opciones
    switch(options){
      case "-v":
        validate('validate chosen');
        break;
      case "-s":
        console.log('stats chosen');
        break;
      default:
        console.log('default behaviour chosen');
        break;
    }
    
//Método readFile para obtener el contenido del archivo
fs.readFile(path, 'utf-8', (error, data) => {
  if (error) {
    console.log('an error has occurred');
    console.log(error.stack);
  } else {
    console.log('for', path, ' the content is ', data);  
  }
});

let stringHref = new RegExp('(*)[');
let stringText = new RegExp(')[*]');





const openMarkDown(usage.route)=>{
  fs.readFile(route, 'utf-8', (error, data) => {
    if (error) {
      console.log('an error has occurred');
      console.log(error.stack);
  } else {
    console.log('for', route, ' the content is ', data);  
  }
});
}

Mi codiguito
let hasPeriod = new RegExp('[.]');
let ext = hasPeriod.test(route);
console.log(ext);
let tail = route.indexOf('.');
console.log('la ruta contiene un punto en la posición ', tail, 'de la cadena');
let extFile = route.slice(tail);
console.log('la extensión del archivo es ', extFile);
if (ext === false){extFile===''}

switch (extFile) {
  case '.md':
      console.log('ruta conduce a un archivo markdown');
      break;

const readFolder(usage.route)=>{
  fs.readdir(usage.route, 'utf-8', (error, data) => {
    if (error) {
      console.log('an error has occurred');
      console.log(error.stack);
    } else {
      console.log('for', route, ' the content is ', data);  
    }
})};

const yargs = require('yargs'); //Para manejar los datos de entrada

const argv = yargs
    .command('mdlinks', {
        mdlinks: {
            description: 'calls mdlinks function',
            alias: 'mdlinks function',
            type: 'string',
        }
    })
    .option('-v', {
        alias: 'validate',
        description: 'Tells if a link is valid or not',
        type: 'boolean',
    })
    
    .option('-s', {
        alias: 'statistics',
        description: 'Tells facts about links found',
        type: 'boolean',
    })
    .argv;

if (argv.mdlinks) {
    console.log('mdlinks selected');
}

if (argv._.includes('-v')) {
    console.log('validate selected');
    } else if ((argv._.includes('-s'))){
        console.log('stats selected');
    }else{
        console.log('selected an option I cannot process')
    }

console.log(argv);
