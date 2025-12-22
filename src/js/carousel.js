// Carousel ultra simple : scroll horizontal avec swipe ou drag

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.section__carousel');
  if (!carousel) return;

  // Swipe (mobile)
  let startX = null;
  carousel.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  });
  carousel.addEventListener('touchmove', function (e) {
    if (startX === null) return;
    let moveX = e.touches[0].clientX;
    carousel.scrollLeft -= (moveX - startX);
    startX = moveX;
  });
  carousel.addEventListener('touchend', function () {
    startX = null;
  });
});