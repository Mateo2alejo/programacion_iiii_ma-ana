for (let i=1; i<=10; i++) {
    console.log("Cuadrado de ", i, "es ", i**2)
}

console.log("Bucle While");
let i = 1;
while (i <= 6) {
    console.log("Indice ", i)
    i++;
}

let miArreglo = [-2,3,1,2,3];
let indice = 1;
while (indice < miArreglo.length) {
    console.log("Valor en indice ", indice, " es ", miArreglo[indice]);
    indice++;
}


let num = 1;
while (num <= 10) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

let x = 5
do {
    console.log("x es; ", x);
    x--;
} while (x!=0);

let mult=1
while(mult <= 10) {
    console.log(mult, "*5=", mult*5);
    mult++;
}

let miArreglo2 = [10,20,30,40,50];
let indice2 = 0;
let mayor =0
while (indice2 < miArreglo2.length) {
    if (miArreglo2[indice2] > mayor) {
        mayor = miArreglo2[indice2];
    }
    indice2++;
}
console.log("El mayor es ", mayor);