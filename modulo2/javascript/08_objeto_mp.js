let jugador = {
    nombre: "Lionel Messi",
    edad: 36,
    equipo: "Inter Miami",
    nacionalidad: "Argentina"
};

console.log(jugador);
console.log(jugador.nombre);
console.log(jugador.equipo);
console.log(jugador["edad"]);

console.log("Modificación de una clave del objeto");
jugador.equipo = "Selección Argentina";
console.log(jugador);

console.log("Incluir clave del objeto");
jugador.goles = 819;
console.log(jugador);

console.log("Eliminar clave del objeto");
delete jugador.goles;
console.log(jugador);

console.log("Recorrer un objeto");
for (let clave in jugador) {
    console.log(clave);
}

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(jugador));

console.log("Mostrar valores con Object.values");
console.log(Object.values(jugador));

console.log("Objetos Anidados");
let equipo = {
    nombre: "FC Barcelona",
    liga: "La Liga",
    fundacion: 1899,
    entrenador: {
        nombre: "Xavi Hernández",
        nacionalidad: "España",
        experiencia: "4 años"
    },
    plantilla: [
        {
            nombre: "Lewandowski",
            posicion: "Delantero",
            goles: 18
        },
        {
            nombre: "Gavi",
            posicion: "Mediocampista",
            goles: 3
        }
    ]
};

console.log("Equipo:", equipo);
