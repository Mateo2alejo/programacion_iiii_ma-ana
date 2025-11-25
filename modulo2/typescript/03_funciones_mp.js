function saludar(jugador) {
    return "Bienvenido ".concat(jugador);
}
console.log(saludar('Lionel Messi'));

var sumarGoles = function (a, b) {
    return a + b;
};
console.log(sumarGoles(10, 5));

function mensajeBienvenida() {
    console.log("Hola");
    console.log("Sistema de estadísticas de fútbol");
}
mensajeBienvenida();

function calcularPromedioGoles(goles, partidos) {
    return goles / partidos;
}

function calcularPromedioGolesVoid(goles, partidos) {
    console.log(goles / partidos);
}

console.log(calcularPromedioGoles(20, 5));
calcularPromedioGolesVoid(15, 3);
