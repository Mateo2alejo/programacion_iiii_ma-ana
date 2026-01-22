const inputTarea = document.getElementById("tarea");
const btnAgregar = document.getElementById("agregar");
const lista = document.getElementById("listaTareas");

btnAgregar.addEventListener("click", () => {
    const texto = inputTarea.value.trim();

    if (texto === "") {
        alert("Por favor escribe una tarea futbolística.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = "⚽ " + texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.style.marginLeft = "10px";

    btnEliminar.addEventListener("click", () => {
        lista.removeChild(li);
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);

    inputTarea.value = "";
});
