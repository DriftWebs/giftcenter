const testcode = "test"; // Código de prueba
const primermes = "240624"; // Código para abrir un extra antiguo del primer mes
const nosotros = "driv"; // Código para abrir render especial para nosotros
const blue = "413211"; // Código para abrir extra del otro dibujo
const pixelart = "aseprite"; // Código para abrir imagen pixelart antiguo
const religion = "canelita"; // Código para abrir imagen de canelita
const codes = "codigos"; // Código para abrir codes.txt
const fantasmas = "544179"; // codigo para abrir imagen de fantasmas.png

const submitButton = document.getElementById("submitCode");
const codeInput = document.getElementById("codeInput");
const messageDiv = document.getElementById("message");

// Creación de un elemento de audio
const errorSound = new Audio('audio/error.wav'); // Ruta al archivo de audio de error

submitButton.addEventListener("click", function() {
    const userCode = codeInput.value.trim();
    
    if (userCode === testcode) {
        messageDiv.style.color = "#00ff7f";
        messageDiv.textContent = "¡Código correcto! Redirigiendo...";
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=qLuc8kZty1A"; // Redirige después de un pequeño delay
        }, 1500);
    } else if (userCode === primermes) {
        messageDiv.style.color = "#00ff7f";
        messageDiv.textContent = "Mostrando imagen...";
        setTimeout(() => {
            window.open("img/secret/primer.png", "_blank"); // abre un render no utilizado el primer mes
        }, 1000);
    } else if (userCode === nosotros) {
        messageDiv.style.color = "#00ff7f";
        messageDiv.textContent = "Mostrando imagen...";
        setTimeout(() => {
            window.open("img/secret/driv.png", "_blank"); // Abre un render muy bonito, que no termine antes
        }, 1000);
    } else if (userCode === blue) {
        messageDiv.style.color = "#00ff7f";
        messageDiv.textContent = "Mostrando imagen...";
        setTimeout(() => {
            window.open("img/secret/blue.png", "_blank"); // Abre la imagen extra del equipo azul
        }, 1000);
    } else if (userCode === pixelart) {
        messageDiv.style.color = "#00ff7f";
        messageDiv.textContent = "Mostrando imagen...";
        setTimeout(() => {
            window.open("img/secret/aseprite.png", "_blank"); // Abre un pixelart no utilizado
        }, 1000);
    } else if (userCode === codes) {
        messageDiv.style.color = "#00ff7f";
        messageDiv.textContent = "Abriendo archivo de texto...";
        setTimeout(() => {
            window.open("codes.txt", "_blank"); // Abre el archivo codes.txt en una nueva ventana o pestaña
        }, 1000);
    } else if (userCode === religion) {
        messageDiv.style.color = "#00ff7f";
        messageDiv.textContent = "Abriendo archivo de texto...";
        setTimeout(() => {
            window.open("img/secret/canelita.png", "_blank"); // Abre un extra modelo de canelita
        }, 1000);
    } else if (userCode === fantasmas) {
        messageDiv.style.color = "#00ff7f";
        messageDiv.textContent = "Abriendo archivo de texto...";
        setTimeout(() => {
            window.open("img/secret/fantasmas.png", "_blank"); // Abre un extra modelo de canelita
        }, 1000);
    } else {
        messageDiv.style.color = "#ff5252";
        messageDiv.textContent = "Error: Código incorrecto";
        errorSound.play(); // Reproduce el sonido de error
    }
});