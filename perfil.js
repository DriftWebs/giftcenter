// Fecha de inicio en pareja
const startDate = new Date('2024-05-24');

// Función para calcular los días transcurridos
function calculateDaysTogether(startDate) {
    const today = new Date();
    const timeDiff = today - startDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
}

// Función para calcular el tiempo restante hasta el próximo 24
function timeUntilNextDate() {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0-11
    const currentYear = today.getFullYear();

    // Calcula la fecha del próximo 24 del mes actual
    let nextDate = new Date(currentYear, currentMonth, 24);

    // Si hoy es después del 24, calcular el 24 del mes siguiente
    if (today.getDate() > 24) {
        nextDate = new Date(currentYear, currentMonth + 1, 24);
    }

    // Si el próximo 24 es en el próximo año
    if (nextDate.getFullYear() > currentYear) {
        nextDate = new Date(nextDate.getFullYear() + 1, 0, 24);
    }

    const timeDiff = nextDate - today;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
}

// Función para actualizar el contenido en la página
function updateTimeUntilNextDate() {
    const daysTogetherElement = document.getElementById('days-together');
    const timeUntilNextDateElement = document.getElementById('time-until-next-date');

    const daysTogether = calculateDaysTogether(startDate);
    const timeUntilNext = timeUntilNextDate();

    daysTogetherElement.textContent = `Días juntos: ${daysTogether}`;
    timeUntilNextDateElement.innerHTML = `
        <p><strong>Días:</strong> ${timeUntilNext.days}</p>
        <p><strong>Horas:</strong> ${timeUntilNext.hours}</p>
        <p><strong>Minutos:</strong> ${timeUntilNext.minutes}</p>
        <p><strong>Segundos:</strong> ${timeUntilNext.seconds}</p>
    `;
}

// Actualizar el contenido al cargar la página y cada segundo
document.addEventListener('DOMContentLoaded', () => {
    updateTimeUntilNextDate(); // Actualizar inmediatamente
    setInterval(updateTimeUntilNextDate, 1000); // Actualizar cada segundo
});


