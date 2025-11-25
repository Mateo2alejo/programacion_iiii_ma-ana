console.log("Hola desde el archivo JavaScript Externo");
function saludar() {
    alert("Hola desde 01_metodos.js");
}
let texto = "JavaScript Básico";

console.log("Texto original:", texto);
console.log("Mayúsculas:", texto.toUpperCase());
console.log("Minúsculas:", texto.toLowerCase());
console.log("Longitud del texto:", texto.length);

let numeros = [10, 20, 30];

console.log("Números:", numeros);
numeros.push(40);
console.log("Después de push:", numeros);
numeros.pop();
console.log("Después de pop:", numeros);
console.log("¿Incluye 20?:", numeros.includes(20));
console.log("¿Incluye 50?:", numeros.includes(50));
