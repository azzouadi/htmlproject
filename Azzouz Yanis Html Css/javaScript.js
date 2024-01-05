function scrollToBottom() {
            // Récupérer la hauteur totale du document
            const documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            
            // Scroller vers le bas de la page
            window.scrollTo({
                top: documentHeight,
                behavior: 'smooth' // Animation de défilement fluide
            });
        }
document.addEventListener('DOMContentLoaded', function () {
    const toggleSidebarButton = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');

    toggleSidebarButton.addEventListener('click', function () {
        sidebar.style.right = sidebar.style.right === '0px' ? '-250px' : '0px';
    });
});