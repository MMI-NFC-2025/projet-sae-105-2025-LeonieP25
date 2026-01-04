// Rendre tous les .header__lang cliquables pour changer de langue (FR <-> EN)
document.addEventListener('DOMContentLoaded', function() {
	var langSpans = document.querySelectorAll('.header__lang');
	if (!langSpans.length) return;

	// Mapping des pages pour la redirection
	var pageMap = {
		'index.html': ['fr/index.html', 'en/index.html'],
		'a-propos.html': ['fr/a-propos.html', 'en/a-propos.html'],
		'contact.html': ['fr/contact.html', 'en/contact.html'],
		'autres-projets.html': ['fr/autres-projets.html', 'en/autres-projets.html'],
		'femme-ecran.html': ['fr/femme-ecran.html', 'en/femme-ecran.html'],
		'femmes-littérature-sci.html': ['fr/femmes-littérature-sci.html', 'en/femmes-littérature-sci.html'],
		'nettie-stevens.html': ['fr/nettie-stevens.html', 'en/nettie-stevens.html'],
		'objet.html': ['fr/objet.html', 'en/objet.html'],
		'theorie.html': ['fr/theorie.html', 'en/theorie.html'],
		'glossaire.html': ['fr/glossaire.html', 'en/glossaire.html']
	};

	// Trouver le nom de la page courante
	var path = window.location.pathname;
	var page = path.substring(path.lastIndexOf('/') + 1);
	var isFR = path.includes('/fr/');
	var isEN = path.includes('/en/');

	// Pour chaque span, rendre cliquable
	langSpans.forEach(function(el) {
		el.style.cursor = 'pointer';
		if (isFR && pageMap[page]) {
			el.title = 'See English version';
			el.addEventListener('click', function() {
				window.location.href = '/' + pageMap[page][1];
			});
		} else if (isEN && pageMap[page]) {
			el.title = 'Voir la version française';
			el.addEventListener('click', function() {
				window.location.href = '/' + pageMap[page][0];
			});
		}
	});
});
// Rendre le bouton "Découvrir plus" cliquable et focusable au clavier
document.addEventListener('DOMContentLoaded', function() {
	var discoverBtn = document.getElementById('discover-btn');
	if (discoverBtn) {
		discoverBtn.addEventListener('click', function(e) {
			// Scroll doux vers la section Nettie Stevens
			var target = document.getElementById('nettie-stevens');
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}
});
