// Validación de formulario
document.getElementById("validarBtn").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value.trim(); // trim eliminar espacios al inicio y al final
  const apellido = document.getElementById("apellido").value.trim(); // Va y busca el valor del campo
  const mensaje = document.getElementById("mensaje"); // Va y busca el elemento mensaje

    // Validación simple si los campos están vacíos
  if (nombre === "" || apellido === "") {
    mensaje.textContent = "Debe completar todos los campos.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = `Bienvenido, ${nombre} ${apellido}`; // Actualiza el contenido del mensaje validación
    mensaje.className = "alert alert-success"; // Agrega una clase de Bootstrap para el estilo
    mensaje.style.color = "black"; // Cambia el color del mensaje a negro
  } // Actualiza el contenido del mensaje validación si encuentra algo lo que sea
  
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Debes completar todos los campos!",
    footer: '<a href="#">¿Por qué tengo este problema?</a>'
}); // Muestra un mensaje de alerta utilizando SweetAlert2

  // alert(mensaje.textContent); // Muestra el mensaje en una alerta arriba del navegador

});

// jQuery: Agregar y quitar clase
$("#agregarClase").click(function () {
  $("#bloqueTexto").addClass("color");
});

$("#quitarClase").click(function () {
  $("#bloqueTexto").removeClass("color");
});

// jQuery: Mostrar y ocultar elemento
$("#mostrarOcultar").click(function () {
  $("#elementoOculto").toggle();
});

function alternarTema(){
    if (temaOscurso) {
        document.getElementById("tema").className = "fa-solid fa-moon";
    }
    else {
        document.getElementById("tema").className = "fa-solid fa-sun";
    }
    document.getElementById("main").classList.toggle("oscuro");
}


// Es recomendable utilizar ; al final de cada línea de código para evitar errores en JavaScript, aunque no es obligatorio en todos los casos.