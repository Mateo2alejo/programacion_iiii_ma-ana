document.getElementById("crear").addEventListener("click", () => {
    const contenedor = document.getElementById("contenedor");
    const jugador = document.createElement("p");
    jugador.textContent = "Nuevo jugador agregado al equipo ⚽";
    jugador.style.color = "green";
    jugador.style.fontWeight = "bold";
    contenedor.appendChild(jugador);
});

document.getElementById("eliminar").addEventListener("click", () => {
    const contenedor = document.getElementById("contenedor");
    if (contenedor.lastChild) {
        contenedor.removeChild(contenedor.lastChild);
    }
});
function saludar() {
    alert("¡Bienvenido al análisis de fútbol!");
}
document.getElementById("parrafo").addEventListener("dblclick", () => {
    document.getElementById("parrafo").textContent = "¡Doble click detectado! ⚽🔥";
    document.getElementById("parrafo").style.color = "blue";
});

document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault(); 
    const nombre = document.getElementById("nombre").value;

    if(nombre.trim() === ""){
        alert("Por favor ingresa un nombre de jugador.");
        return;
    }

    alert(`Jugador registrado: ${nombre} ✔️`);
    document.getElementById("nombre").value = "";
});
