document.addEventListener("DOMContentLoaded", function() {
  var registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validación de campos vacíos
    if (nombre === "" || apellido === "" || email === "" || usuario === "" || password === "" || confirmPassword === "") {
      event.preventDefault();
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validación de coincidencia de contraseña
    if (password !== confirmPassword) {
      event.preventDefault();
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }

    // Si la validación pasa, mostrar mensaje de éxito
    alert("Usuario registrado con éxito.");
  });
});
