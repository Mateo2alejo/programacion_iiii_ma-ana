console.log("--- Tipos de Variables en el Dashboard de Estadísticas ---");

let nombreEquipo = "FC Data Analysts";
console.log("Variable nombreEquipo:", nombreEquipo);
console.log("Tipo de variable:", typeof(nombreEquipo));
let golesEsperados = 2.45;
console.log("Variable golesEsperados (xG):", golesEsperados);
console.log("Tipo de variable:", typeof(golesEsperados));

let esRendimientoAlto = true;
console.log("Variable esRendimientoAlto:", esRendimientoAlto);
console.log("Tipo de variable:", typeof(esRendimientoAlto));

let tiempoJugado; 
console.log("Variable tiempoJugado (minutos):", tiempoJugado);
console.log("Tipo de variable:", typeof(tiempoJugado));

let analisisArbitral = null; 
console.log("Variable analisisArbitral:", analisisArbitral);
console.log("Tipo de variable:", typeof(analisisArbitral)); 
let totalPasesTemporada = 878787554564121215n;
console.log("Variable totalPasesTemporada:", totalPasesTemporada);
console.log("Tipo de variable:", typeof(totalPasesTemporada));

let jugadorClave = {
    nombre: "Lionel Data", 
    posicion: "Delantero",
    duelosGanados: 85
};
console.log("Variable Objeto (jugadorClave):", jugadorClave);
console.log("Tipo de variable:", typeof(jugadorClave));

let historialGoles = [2, 1, 0, 3, 4, 1]; 
console.log("Variable Array (historialGoles):", historialGoles);
console.log("Tipo de variable:", typeof(historialGoles)); 