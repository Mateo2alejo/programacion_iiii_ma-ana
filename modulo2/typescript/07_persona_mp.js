"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;

var Jugador = /** @class */ (function () {
    function Jugador(nombre, goles) {
        this.nombre = nombre;
        this.goles = goles;
    }

    Jugador.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y tengo ").concat(this.goles, " goles esta temporada"));
    };

    return Jugador;
}());

exports.Jugador = Jugador;
