class Jugador {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    jugar() {
        console.log("Jugador participando en el partido...");
    }

    calcularBono() {
        return this.salario * 0.15;
    }

    pagoExtra(minutos) {
        return ((this.salario / 30) / 90) * minutos * 2;
    }
}

class Delantero extends Jugador {
    calcularBono() {
        return this.salario * 0.20;
    }

    pagoExtra(minutos) {
        return ((this.salario / 30) / 90) * minutos * 3;
    }
}

class Portero extends Jugador {
    calcularBono() {
        return this.salario * 0.10;
    }
}

const delanteroLuis = new Delantero("Luis Suárez", 2000);
const porteroKeylor = new Portero("Keylor Navas", 1200);

delanteroLuis.jugar();
porteroKeylor.jugar();

console.log(delanteroLuis.calcularBono());
console.log(porteroKeylor.calcularBono());

console.log(delanteroLuis.pagoExtra(5));
console.log(porteroKeylor.pagoExtra(4));
