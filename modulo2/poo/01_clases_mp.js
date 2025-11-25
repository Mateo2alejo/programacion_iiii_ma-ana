class Jugador {
    constructor(nombre, posicion){
        this.nombre = nombre;
        this.posicion = posicion;
    }

    entrarCancha() {
        console.log(`${this.nombre}, jugador de posición ${this.posicion}, ha entrado a la cancha`);
    }

    jugar() {
        console.log(`${this.nombre} está participando activamente en el partido`);
    }

    salirCancha() {
        console.log(`${this.nombre} sale de la cancha`);
    }
}

const jugador1 = new Jugador('Lionel Messi', 'Delantero');

jugador1.entrarCancha();
jugador1.jugar();
jugador1.salirCancha();
