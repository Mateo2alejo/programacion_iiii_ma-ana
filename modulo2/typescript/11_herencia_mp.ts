export class Jugador {
    public nombre: string;
    public posicion: string;

    constructor(nombre: string, posicion: string) {
        this.nombre = nombre;
        this.posicion = posicion;
    }

    jugar(): void {
        console.log("Jugador en acción");
    }
}

export class Delantero extends Jugador {}
