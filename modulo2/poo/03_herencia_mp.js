class Jugador {
    constructor(nombre, posicion) {
        this.nombre = nombre;
        this.posicion = posicion;
    }

    accion() {
        console.log(`${this.nombre} participa en el partido`);
    }
}

class Portero extends Jugador {
    accion() {
        console.log(`${this.nombre} realiza una atajada espectacular`);
    }
}

const jugador1 = new Jugador("Kevin De Bruyne", "Mediocampista");
const portero1 = new Portero("Thibaut Courtois", "Portero");

jugador1.accion();
portero1.accion();
