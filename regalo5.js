const dialogue = document.querySelector('.dialogue');
const optionsContainer = document.querySelector('.options');

const dialogues = [
    {
        text: "Oh! Hola, Amor, ¡Bienvenida! Te preguntarás… ¿qué es... todo esto?",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/2.png)' }
        ]
    },
    {
        text: "Bueno… este es tu… ¡REGALO NÚMERO 5! ",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/3.png)' }
        ]
    },
    {
        text: "¿5 meses ya? ¡Dios… cómo pasa el tiempo!",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/4.png)' }
        ]
    },
    {
        text: "Pero bueno… empecemos… ¿lista?",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/5.png)' }
        ]
    },
    {
        text: "Primero lo primero… quería hacer varias cosas y buscar innovar en cada regalo… ¡es sumamente difícil!",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/6.png)' }
        ]
    },
    {
        text: "Así que la primera parte de tu regalo… es… ¡Unos renders! Sí, resumen todo el comienzo de nuestro nuevo mundito de Minecraft.",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/7.png)' }
        ]
    },
    {
        text: "Veamos… este es donde comenzamos, y tú te fuiste muy rápido a la estructura que viste a lo lejos… ¡Dios mío!",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/8.png)' }
        ]
    },
    {
        text: "Y este, muestra cómo completamos esa Trial… fue divertido... <3",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/9.png)' }
        ]
    },
    {
        text: "Aquí fue cuando encontramos el bioma de cherry para hacer nuestra casa… ¡Best Bioma!",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/10.png)' }
        ]
    },
    {
        text: "O este… donde literalmente fuimos a una ancient city solo para buscar madera… nunca ir a la superficie... verdad?",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/11.png)' }
        ]
    },
    {
        text: "Sí… y claramente este, donde pudimos construir nuestra primera base… ¡Todos sabemos que te comiste toda esa torta!",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/12.png)' }
        ]
    },
    {
        text: "Bueno… ahora que terminamos con los renders, ¿qué tal algo más?",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/13.png)' }
        ]
    },
    {
        text: "es... un minicómic de ambos en una ancient city. Luego podrás verlo en más calidad… ¡tranquila!",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/14.png)' }
        ]
    },
    {
        text: "Ah, sí… y ¿qué tal este dibujo? Es algo simple, pero prometí terminarlo, y aquí está… ¡toma tus flores amarillas!",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/15.png)' }
        ]
    },
    {
        text: "Bueno, parece que ya estamos en el final… pero antes… quería darte un último regalo… ya sabes qué es… no nos hagamos los dramáticos…",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/16.png)' }
        ]
    },
    {
        text: "Es un video sobre lo de los universos… míralo y luego vuelve para continuar. te espero <3",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/17.png)' }
        ]
    },
    {
        text: "¿Ya? Ok… ¿qué te pareció? Espero que te gustara… realmente sé que no soy un dibujante, pero hice lo mejor que pude con todo.",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/18.png)' }
        ]
    },
    {
        text: "Pero bueno… ¡Feliz mesiversario! Y gracias por ser una maravillosa novia… realmente soy muy, muy feliz contigo...",
        options: [
            { text: "Continuar", background: 'url(img/dialogos/19.png)' }
        ]
    },
    {
        text: "Gracias <3  Te amo... mi solecito",
        options: [
            { text: "Volver al inicio", redirect: true }
        ]
    }
];

// Función para cargar el diálogo
function loadDialogue(dialogueIndex) {
    const dialogueData = dialogues[dialogueIndex];
    optionsContainer.innerHTML = ''; // Limpiar opciones antes de mostrar nuevas
    dialogue.textContent = ''; // Limpiar el texto actual

    // Animación de escritura
    let charIndex = 0;
    const typingInterval = setInterval(() => {
        if (charIndex < dialogueData.text.length) {
            dialogue.textContent += dialogueData.text.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typingInterval); // Detener la animación
            // Añadir botones después de que se complete la escritura
            dialogueData.options.forEach(option => {
                const button = document.createElement('button');
                button.classList.add('option');
                button.textContent = option.text;

                // Cambia el fondo o redirige al hacer clic en la opción
                button.addEventListener('click', () => {
                    document.body.style.backgroundImage = option.background; // Cambiar la imagen de fondo
                    if (option.redirect) {
                        window.location.href = 'index.html'; // Redirigir si la opción tiene la propiedad redirect
                    } else {
                        loadDialogue(dialogueIndex + 1); // Cargar el siguiente diálogo
                    }
                });

                optionsContainer.appendChild(button);
            });
        }
    }, 75); // Cambia el número para ajustar la velocidad de escritura (100ms por carácter)
}

// Iniciar con el primer diálogo
loadDialogue(0);
