const arregloNotUsed = new Array(100); //define el tamano del arreglo al inicializarlo no es comun usarlo


//----------MEJOR DOCUMENTACION DE JAVASCRIPT MOZILLA MDN
const arreglo = [1, 2, 3, 4, 5];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = arreglo;
arreglo.push(6);

let arreglo3 = [...arreglo, 7]; //al usar el operador spread saca los objetos del arreglo

const arreglo4 = arreglo2.map((numero) => {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);