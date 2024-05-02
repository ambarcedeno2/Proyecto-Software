// Espera a que el DOM se haya cargado completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
  // Obtiene el formulario de registro por su ID
  var registerForm = document.getElementById("registerForm");

  // Agrega un evento de escucha para el evento "submit" en el formulario
  registerForm.addEventListener("submit", function(event) {
    // Obtiene los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validación de campos vacíos
    if (nombre === "" || apellido === "" || email === "" || usuario === "" || password === "" || confirmPassword === "") {
      event.preventDefault(); // Evita que se envíe el formulario
      alert("Por favor, completa todos los campos."); // Muestra un mensaje de alerta al usuario
      return; // Detiene la ejecución del código
    }

    // Validación de coincidencia de contraseña
    if (password !== confirmPassword) {
      event.preventDefault(); // Evita que se envíe el formulario
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo."); // Muestra un mensaje de alerta al usuario
      return; // Detiene la ejecución del código
    }

    // Si la validación pasa, muestra un mensaje de éxito al usuario
    alert("Usuario registrado con éxito.");
  });
});
