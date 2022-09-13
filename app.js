const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("colors");

// Se encarga de limpiar la consola de comandos
console.clear();

// const [, , arg3] = process.argv;
// const [, base = 5] = arg3.split("=");

// console.log(process.argv)
// console.log(argv);

// const number = 4;

crearArchivo(argv.b, argv.l, argv.h)
	.then((nameFile) => console.log(nameFile.rainbow, "creado"))
	.catch((err) => console.log(err));
