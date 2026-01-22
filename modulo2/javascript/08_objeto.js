let persona = {
    nombre: " Ana",
    edad: 30,
    ciudad: "Quito"
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.ciudad);
console.log(persona["edad"]);
console.log("Modificación de una clave del objeto");
persona.nombre = "María";
console.log(persona);
console.log("Incluir clave del objeto");
persona.direccion = "Av. Occidenhtal";
console.log(persona);
console.log("Eliminar clave del objeto");
delete persona.direccion;
console.log(persona);

console.log("Recorrer un objeto");
for (let clave in persona) {
    console.log(clave);
} 
console.log("Mostrar claves con Object.keys"); 
console.log(Object.keys(persona));
console.log("Mostrar valores con Object.values");
console.log(Object.values(persona));
console.log("Objetos Anidados");
let estudiante = {
    nombre: "Pedro",
    apellido: "Pérez",
    contacto: {
        correo: "pedro@gmail.com",
        telefono: "0987654321",
        celular: "0998765432"
    },
    materias: [
        {
        nombre: "programación III",
        calificacion: 8
        },
        {
        nombre: "Base de datos II",
        calificacion: 8
        },
    ]
};
console.log("Estudiante: ", estudiante);