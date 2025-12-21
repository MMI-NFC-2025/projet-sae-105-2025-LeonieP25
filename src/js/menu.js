// Fermer l'overlay menu et revenir en arrière sur clic croix

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.header__menu-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      // Si le menu est déjà ouvert (hash présent), on ferme et on revient en arrière
      if (window.location.hash === '#menu-overlay') {
        e.preventDefault();
        window.history.back();
      }
      // Sinon, comportement normal (ouvre le menu)
    });
  });
});