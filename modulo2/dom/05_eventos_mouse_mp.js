const caja = document.getElementById("caja");
const areaTouch = document.getElementById("areaTouch");

caja.addEventListener("mouseenter", () => {
    caja.style.background = "red";
    caja.textContent = "¡PELIGRO DE GOL!";
});


caja.addEventListener("mouseleave", () => {
    caja.style.background = "gray";
    caja.textContent = "ARCO";
});

caja.addEventListener("click", () => {
    caja.style.background = "orange";
    caja.textContent = "¡TIRO AL ARCO!";
});

areaTouch.addEventListener("mousemove", () => {
    areaTouch.style.background = "lightgreen";
    areaTouch.textContent = "¡Jugando en la cancha!";
});

areaTouch.addEventListener("mouseleave", () => {
    areaTouch.style.background = "green";
    areaTouch.textContent = "CANCHA";
});
