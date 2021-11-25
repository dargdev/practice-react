const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, p2] = personajes;

console.log(p2);

const retornaArreglo = () => {
	return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const usState = (valor) => {
	return [valor, () => console.log('Hola mundo')];
};

const [nombre, setNombre] = usState('Vegeta');

const arr = usState('Goku');
console.log(arr);

console.log(nombre);
setNombre();
