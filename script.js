function verProducto(nombre, precio, imagen, descripcion) {
    document.getElementById("tituloProducto").textContent = nombre;
    document.getElementById("precioProducto").textContent = precio;
    document.getElementById("imagenProducto").src = imagen;
    document.getElementById("descripcionProducto").textContent = descripcion;

    const ventana = new bootstrap.Modal(
        document.getElementById("ventanaProducto")
    );

    ventana.show();
}
const formularioRegistro = document.getElementById("formRegistro");

if (formularioRegistro) {
    formularioRegistro.addEventListener("submit", function(evento) {
        const contrasena = document.getElementById("contrasena").value;
        const confirmar = document.getElementById("confirmar").value;

        if (contrasena !== confirmar) {
            evento.preventDefault();
            alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
        } else {
            evento.preventDefault();
            alert("¡Registro validado correctamente!");
        }
    });
}