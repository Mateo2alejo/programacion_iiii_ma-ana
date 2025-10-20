console.log("--- 📊 CÁLCULOS ARITMÉTICOS DE MÉTRICAS 📊 ---");
let tirosTotales = 20; 
let tirosPuerta = 12;  


let tirosFuera = tirosTotales - tirosPuerta;
let comprobacionSuma = tirosPuerta + tirosFuera;
console.log("Suma (Tiros a Puerta + Tiros Fuera):", comprobacionSuma);

console.log("Resta (Tiros Totales - Tiros a Puerta):", tirosTotales - tirosPuerta);

let golesAnotados = 3;
let valorPuntos = 5;
let valorGoles = golesAnotados * valorPuntos;
console.log("Multiplicación (Valor en Puntos de los Goles):", valorGoles);


let porcentajeTirosPuerta = (tirosPuerta / tirosTotales) * 100;
console.log("División (Porcentaje de Tiros a Puerta):", porcentajeTirosPuerta.toFixed(2) + "%");

let pasesClave = 13;
let esMultiploDeCinco = pasesClave % 5;
console.log("Módulo (Pases Clave % 5 - Resultado 0 activa un análisis):", esMultiploDeCinco);

let indiceBase = 2; 
let partidosGanados = 5;
let indiceRendimiento = indiceBase ** 3; 
console.log("Potencia (Índice de Rendimiento 2**3):", indiceRendimiento);

console.log("\n--- ⚖️ OPERADORES DE COMPARACIÓN ⚖️ ---");

let xg = 2.5; 
let golesReales = "3"; 
console.log("Igualdad Débil (xG == GolesReales, 2.5 == '3'):", xg == golesReales);
console.log("Igualdad Estricta (xG === GolesReales, 2.5 === '3'):", xg === golesReales);
console.log("Mayor que (>): ¿xG > 3.0?:", xg > 3.0);
console.log("Menor o Igual que (<=): Goles reales <= 2.5?:", parseInt(golesReales) <= xg);
console.log("\n--- 🧠 OPERADORES LÓGICOS 🧠 ---");

let posesionAlta = true;
let xgAlto = true;
let pasesCompletadosBajos = false;

console.log("Y AND &&: PosesionAlta && xgAlto:", posesionAlta && xgAlto);
console.log("O OR ||: PasesCompletadosBajos || xgAlto:", pasesCompletadosBajos || xgAlto);
console.log("Negación NOT !:", !posesionAlta);