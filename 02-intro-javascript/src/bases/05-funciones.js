const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`; // permite no usar la funcion de return


console.log(saludar);
console.log(saludar2);
console.log(saludar3('David'));

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'dargruano'
    }
}

console.log(getUser());

const getUser2 = () => ({
    uid: 'ABC123',
    username: 'dargruano'
}); //igualmente permite no usar la funcion return pero se le debe agregar los parentesis en el objeto

console.log(getUser2());

//Tarea
const getUserActivo = (nombre) =>
    ({
        uid: 'ABC123',
        userName: nombre,
    });

const usuarioActivo = getUserActivo('David');
console.log(usuarioActivo);