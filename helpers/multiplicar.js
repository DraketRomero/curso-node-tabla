const fs = require("fs");
const colors = require("colors");

const crearArchivo = (number = 5, lista, hasta = 10) => {
	return new Promise((resolve, reject) => {
		let salida, consola = "";

		for (let i = 1; i <= hasta; i++) {
			salida += `${number} ${ "x".green } ${i} = ${number * i}\n`;
			consola += `${number} x ${i} = ${number * i}\n`;
		}

		if (lista) {
			console.log("==================".green);
			console.log(`== Tabla del ${colors.blue(number)} ==`);
			console.log("==================".green);
			console.log(salida);
		}

		fs.writeFileSync(`./salida/tabla-${number}.txt`, consola);

		resolve("Archivo creado con exito!");
	});
};

module.exports = {
	crearArchivo,
};

const crearArchivo2 = async (number = 5) => {
	try {
		console.log("==================");
		console.log(`== Tabla del ${number} ==`);
		console.log("==================");

		let salida = "";

		for (let i = 1; i <= 10; i++) {
			salida += `${number} x ${i} = ${number * i}\n`;
		}

		console.log(salida);

		fs.writeFileSync(`tabla-${number}.txt`, salida);

		return `Archivo tabla-${number}.txt creado con exito!`;
	} catch (error) {
		throw error;
	}
};
