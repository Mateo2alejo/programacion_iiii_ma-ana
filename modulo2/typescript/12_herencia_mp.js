"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _11_herencia_1 = require("./11_herencia");

var jugador1 = new _11_herencia_1.Jugador("Lionel Messi", "Mediapunta");
console.log(jugador1.nombre);
console.log(jugador1.posicion);
jugador1.jugar();

var delantero1 = new _11_herencia_1.Delantero("Erling Haaland", "Delantero");
console.log(delantero1.nombre);
console.log(delantero1.posicion);
delantero1.jugar();
