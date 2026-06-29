document.addEventListener("DOMContentLoaded", function () {
    // Seleciona a barra de anúncios pelo ID
    const announcementCarousel = document.getElementById('announcementBar');
    
    if (announcementCarousel) {
        // Inicializa o carrossel do Bootstrap via JavaScript
        const carousel = new bootstrap.Carousel(announcementCarousel, {
            interval: 3000, // Tempo de transição (3 segundos)
            ride: 'carousel', // Inicia o autoplay imediatamente ao carregar
            pause: 'hover'    // Pausa temporariamente se o usuário passar o mouse por cima
        });
    }
});
