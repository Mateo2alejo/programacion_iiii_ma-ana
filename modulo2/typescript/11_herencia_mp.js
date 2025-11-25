"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delantero = exports.Jugador = void 0;

var Jugador = /** @class */ (function () {
    function Jugador(nombre, posicion) {
        this.nombre = nombre;
        this.posicion = posicion;
    }
    Jugador.prototype.jugar = function () {
        console.log("Jugador en acción");
    };
    return Jugador;
}());
exports.Jugador = Jugador;

var Delantero = /** @class */ (function (_super) {
    __extends(Delantero, _super);
    function Delantero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Delantero;
}(Jugador));
exports.Delantero = Delantero;
