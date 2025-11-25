const productos = [
    { nombre: "Balón de fútbol", descripcion: "Balón oficial tamaño 5", precio: 25, existencia: 18, ubicacion: "Bodega A" },
    { nombre: "Zapatos deportivos", descripcion: "Tacos profesionales", precio: 60, existencia: 8, ubicacion: "Bodega B" },
    { nombre: "Camiseta del equipo", descripcion: "Talla M color azul", precio: 35, existencia: 25, ubicacion: "Mostrador" },
    { nombre: "Guantes de portero", descripcion: "Modelo Pro Grip", precio: 40, existencia: 5, ubicacion: "Bodega C" },
    { nombre: "Conos de entrenamiento", descripcion: "Paquete de 10 unidades", precio: 15, existencia: 40, ubicacion: "Bodega A" }
];

const cuerpoTabla = document.getElementById("cuerpoTabla");
productos.forEach(prod => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${prod.nombre}</td>
        <td>${prod.descripcion}</td>
        <td>$${prod.precio}</td>
        <td>${prod.existencia}</td>
        <td>${prod.ubicacion}</td>
    `;

    cuerpoTabla.appendChild(fila);
});
