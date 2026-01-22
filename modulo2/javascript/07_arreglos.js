console.log("ARRAYS Y ARREGLOS");
let  numeros = [10, 5, 26, 9];
let arrayVacio = new Array();
let arrayVacio2 =[];
console.log("Arreglo de numeros original:", numeros);
console.log(arrayVacio);
console.log(arrayVacio2);
console.log("Acceso a los elementos del array");
console.log(numeros[0]);
console.log(numeros[3]);

console.log("Modificar elementos del array");
numeros[0] = 100;
console.log(numeros);

console.log("Agregar elementos del array");
numeros.push(500);
console.log(numeros);

console.log("Agregar elementos al inico del array");
numeros.unshift(888);
console.log(numeros);

console.log("Eliminar el ultimo elemento del array");
numeros.pop();
console.log(numeros);