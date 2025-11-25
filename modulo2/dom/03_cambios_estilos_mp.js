function cambiarEstilos() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "RESULTADO FINAL: Equipo A 3 - 1 Equipo B";
    mensaje.style.color = "red";
    mensaje.style.fontSize = "30px";
    mensaje.style.fontWeight = "bold";
    const link = document.getElementById("link");
    link.href = "https://www.fifa.com";
    link.textContent = "Visitar sitio oficial FIFA";
    link.style.color = "blue";
    link.style.fontSize = "20px";
    link.style.textDecoration = "underline";
}
