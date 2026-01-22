var edad = 30;
var nombre = 'Messi';
var activo = true;
var goles = 6;

if (edad > 18 && activo) {
    console.log('Jugador activo en el equipo');
}
else {
    console.log('Jugador no disponible');
}

var equipos = ['Barcelona', 'Inter Miami', 'PSG'];

for (var i = 0; i < equipos.length; i++) {
    console.log(equipos[i]);
}

var EstadoPartido;
(function (EstadoPartido) {
    EstadoPartido[EstadoPartido["Pendiente"] = 0] = "Pendiente";
    EstadoPartido[EstadoPartido["Jugando"] = 1] = "Jugando";
    EstadoPartido[EstadoPartido["Finalizado"] = 2] = "Finalizado";
})(EstadoPartido || (EstadoPartido = {}));

console.log(EstadoPartido);
console.log(EstadoPartido.Finalizado);
