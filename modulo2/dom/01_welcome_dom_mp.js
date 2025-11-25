function mostrarEstadisticas() {
    const estadisticas = {
        equipo: "FC Barcelona",
        goles: 68,
        asistencias: 45,
        posesion: "61%",
        remates: 452
    };
    const parrafo = document.getElementById("info");
    parrafo.innerHTML = `
        <strong>Equipo:</strong> ${estadisticas.equipo} <br>
        <strong>Goles anotados:</strong> ${estadisticas.goles} <br>
        <strong>Asistencias:</strong> ${estadisticas.asistencias} <br>
        <strong>Posesión promedio:</strong> ${estadisticas.posesion} <br>
        <strong>Remates totales:</strong> ${estadisticas.remates}
    `;
}
