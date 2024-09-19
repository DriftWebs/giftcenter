// Mostrar la fecha actual
function updateDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Meses de 0-11
    const year = today.getFullYear();
    const dateString = `${day}/${month}/${year}`;
    document.getElementById('current-date').textContent = `Fecha actual: ${dateString}`;
}

// Llamar a la función para actualizar la fecha al cargar la página
updateDate();