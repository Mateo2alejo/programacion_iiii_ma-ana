const cuadro = document.getElementById("cuadro");
function cambiarColor() {
  const colores = ["red", "green", "blue", "yellow", "purple", "orange"];
  const colorRandom = colores[Math.floor(Math.random() * colores.length)];
  cuadro.style.backgroundColor = colorRandom;
}

function aumentarTamano() {
  let ancho = cuadro.offsetWidth;
  let alto = cuadro.offsetHeight;

  cuadro.style.width = (ancho + 20) + "px";
  cuadro.style.height = (alto + 20) + "px";
}

function reiniciar() {
  cuadro.style.width = "100px";
  cuadro.style.height = "100px";
  cuadro.style.backgroundColor = "#58a6ff";
}
