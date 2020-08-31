const persona = {
    nombre: 'David',
    apellido: 'Ruano',
    edad: 23,
    direccion: {
        ciudad: 'quito',
        zip: 23425,
    },
}

console.log(persona);
console.table(persona);

const persona2 = persona; // esto es una asignacion de referencia de memoria mas no una copia
persona.apellido = 'Gonzalez';
console.log(persona);
console.log(persona2);


const persona3 = {...persona };
console.log(persona2);
console.table(persona3);