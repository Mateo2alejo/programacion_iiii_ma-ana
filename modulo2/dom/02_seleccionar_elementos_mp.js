const titulo = document.getElementById("titulo");
titulo.style.color = "blue";
titulo.style.fontFamily = "Arial";
titulo.textContent = "Estadísticas Actualizadas de Jugadores de Fútbol";
const notas = document.getElementsByClassName("nota");
for (let nota of notas) {
    nota.style.color = "green";
}

const jugadores = document.getElementsByClassName("item");
for (let jugador of jugadores) {
    jugador.style.fontWeight = "bold";
    jugador.style.margin = "5px 0";
}

const usuario = document.getElementsByName("usuario")[0];
usuario.style.color = "purple";
usuario.style.fontWeight = "bold";
usuario.textContent = "Analista de Datos: Mateo Mancheno";
