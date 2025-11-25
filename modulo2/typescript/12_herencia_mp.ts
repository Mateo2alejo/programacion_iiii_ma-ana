import { Jugador, Delantero } from "./11_herencia";

const jugador1 = new Jugador("Lionel Messi", "Mediapunta");
console.log(jugador1.nombre);
console.log(jugador1.posicion);
jugador1.jugar();

const delantero1 = new Delantero("Erling Haaland", "Delantero");
console.log(delantero1.nombre);
console.log(delantero1.posicion);
delantero1.jugar();
