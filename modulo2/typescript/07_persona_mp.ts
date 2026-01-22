export class Jugador {
    nombre: string;
    goles: number;

    constructor(nombre: string, goles: number) {
        this.nombre = nombre;
        this.goles = goles;
    }

    saludar(): void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.goles} goles esta temporada`);
    }
}
