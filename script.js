// Fonction pour afficher une section et changer le titre
function showSection(sectionId, pageTitle) {
    // Cacher toutes les sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Afficher la section sélectionnée
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Mettre à jour le titre de la page
    document.title = pageTitle;

    // Mettre à jour le lien actif dans la navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Ajouter la classe active au lien cliqué
    event.target.classList.add('active');
}
