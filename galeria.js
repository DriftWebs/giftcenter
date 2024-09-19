// Número total de imágenes en la carpeta galeria
const totalImages = 11; // Ajusta este número según la cantidad de imágenes

// Función para cargar las imágenes de la carpeta galeria
function loadGalleryImages() {
    const galleryElement = document.getElementById('gallery');

    for (let i = 1; i <= totalImages; i++) {
        const a = document.createElement('a');
        a.href = `galeria/imagen (${i}).png`;
        a.className = 'gallery-link';

        const img = document.createElement('img');
        img.src = `galeria/imagen (${i}).png`;
        img.alt = `Imagen ${i}`;
        img.className = 'gallery-img';

        a.appendChild(img);
        galleryElement.appendChild(a);
    }
}

// Cargar las imágenes cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', loadGalleryImages);
