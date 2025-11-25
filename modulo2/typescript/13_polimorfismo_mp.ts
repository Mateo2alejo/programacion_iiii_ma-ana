import { Jugador } from "./11_herencia";

export class Arquero extends Jugador {
    atajarBalon(): void {
        console.log("Atajada espectacular");
    }
}

const miArquero = new Arquero("Dibu Martínez", "Arquero");
console.log(miArquero.nombre);
console.log(miArquero.posicion);
console.log(miArquero.atajarBalon());
