console.log("FUNCIONES");
console.log("FORMA CLÁSICA");
function saludar () {
    console.log("Hola desde una función clásica");
}
saludar();

console.log("FORMA CON PARÁMETROS Y RETORNOS");
function sumar (a, b) {
    return a + b;
}
resultado = sumar(4, 9);
console.log("la suma es ", resultado);

console.log("FUNCIONES FLECHA");
const resta = (a,b)=>{
    return a-b
}
let resultadoResta = resta(9,5);
console.log("La resta es ", resultadoResta);

console.log("FUNCIÓN RETORNO DIRECTO");
const cuadrado = x => x* x;
console.log ("cuadrado de 5 es ",resultado);

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function saludar(nombre,saludo="Hola"){
    return saludo +" "+nombre;
}
let saludo1 = saludar("Francisco")
let saludo2 = saludar ("Francisco","Buenos dias");
console.log(saludo1);
console.log(saludo2);







function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
let baseTriangulo = 10;
let alturaTriangulo = 5;
let area = areaTriangulo(baseTriangulo, alturaTriangulo);
console.log("El área del triángulo es:", area);
