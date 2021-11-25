//destructuracion de objetos clase 18

const persona = {
	nombre: 'Tony',
	edad: 45,
	clave: 'Ironman',
};

const { nombre: nombre2 } = persona;

console.log(nombre2);

const usContext = ({ nombre, edad, clave }) => {
	// console.log(nombre, edad, rango);

	return {
		nombreClave: clave,
		anios: edad,
	};
};

const { nombreClave, anios } = usContext(persona);

console.log(nombreClave, anios);
// retornaPersona(persona);
