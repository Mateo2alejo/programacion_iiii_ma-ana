class Jugador {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    esTitular() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} puede jugar como titular`);
        } else {
            console.log(`${this.nombre} es menor y no puede ser titular`);
        }
    }

    mostrarDatos() {
        console.log(`Jugador: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const jugador1 = new Jugador("Pedri", 17);

jugador1.esTitular();
jugador1.mostrarDatos();
