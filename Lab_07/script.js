// Validación de formulario
document.getElementById("validarBtn").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value.trim(); // trim eliminar espacios al inicio y al final
  const apellido = document.getElementById("apellido").value.trim(); // Va y busca el valor del campo
  const mensaje = document.getElementById("mensaje"); // Va y busca el elemento mensaje

    // Validación simple si los campos están vacíos
  if (nombre === "" || apellido === "") {
    mensaje.textContent = "Debe completar todos los campos.";
    mensaje.className = "alert alert-danger";

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes completar todos los campos!",
        footer: '<a href="#">¿Por qué tengo este problema?</a>'
    }); // Muestra un mensaje de alerta utilizando SweetAlert2

  } else {
    mensaje.textContent = `Bienvenido, ${nombre} ${apellido}`; // Actualiza el contenido del mensaje validación
    mensaje.className = "alert alert-success"; // Agrega una clase de Bootstrap para el estilo
  } // Actualiza el contenido del mensaje validación si encuentra algo lo que sea

});
    // alert(mensaje.textContent); // Muestra el mensaje en una alerta arriba del navegador

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

let temaOscuro = false;

function alternarTema() {
  temaOscuro = temaOscuro ? false : true;
  if (!temaOscuro) {
    document.getElementById("tema").className = "fa-solid fa-moon";
  }
  else {
    document.getElementById("tema").className = "fa-solid fa-sun";
  }
  document.getElementById("main").classList.toggle("oscuro");
}

// Contador dinámico
let contador = 0;
const contadorElemento = document.getElementById("contador");

const modificarContador = (cambio) => {
  contador += cambio;
  contadorElemento.textContent = contador;
};