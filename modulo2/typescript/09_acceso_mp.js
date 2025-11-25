"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;

var Jugador = /** @class */ (function () {
    function Jugador(nombre) {
        this.idJugador = 'FUTB-2025-001';
        this.nombre = nombre;
        this.generarRegistro();
    }

    Jugador.prototype.generarRegistro = function () {
        this.registro = (new Date()).toDateString();
    };

    Jugador.prototype.getRegistro = function () {
        return this.registro;
    };

    Jugador.prototype.getAtributos = function () {
        return {
            nombre: this.nombre,
            registro: this.registro,
            id: this.idJugador
        };
    };

    return Jugador;
}());

exports.Jugador = Jugador;
