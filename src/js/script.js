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

document.addEventListener('DOMContentLoaded', function () {
  var goupBtn = document.querySelector('.goup-btn');
  if (goupBtn) {
    goupBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
