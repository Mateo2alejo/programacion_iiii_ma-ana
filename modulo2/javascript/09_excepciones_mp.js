try {
    console.log(jugadorNoDefinido);
} catch (error) {
    console.log("Mensaje de error:", error.message);
}

try {
    console.log("Intentando cargar estadísticas del jugador...");
    throw new Error("Estadísticas no encontradas");
} catch (error) {
    console.log("Mensaje de error:", error.message);
} finally {
    console.log("Finalizando intento de cargar estadísticas");
}
