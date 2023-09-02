// Obtenemos el botón y el elemento de mensaje
const myButton = document.getElementById("myButton");
const message = document.getElementById("message");

// Agregamos un evento de clic al botón
myButton.addEventListener("click", function() {
    // Cambiamos el mensaje cuando se hace clic en el botón
    message.textContent = "¡Hola, Mundo!";
});
