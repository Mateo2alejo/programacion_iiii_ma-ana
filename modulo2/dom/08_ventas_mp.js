const formulario = document.getElementById("formulario");
const contenedor = document.getElementById("contenedorCasas");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const direccion = document.getElementById("direccion").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const precio = document.getElementById("precio").value.trim();

    if (direccion === "" || descripcion === "" || precio === "") {
        alert("Por favor completa todos los campos.");
        return;
    }
    const tarjeta = document.createElement("div");

    tarjeta.innerHTML = `
        <h3>${direccion}</h3>
        <p>${descripcion}</p>
        <p><strong>Precio:</strong> $${precio}</p>
        <button class="eliminar">Eliminar</button>
    `;

    tarjeta.querySelector(".eliminar").addEventListener("click", () => {
        contenedor.removeChild(tarjeta);
    });

    contenedor.appendChild(tarjeta);

    formulario.reset();
});
