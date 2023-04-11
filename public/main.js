//======================================//
// CAROUSEL //
//======================================//
let carouselIndex = 1;
showcarousel(carouselIndex);

// dot controls
function currentSlide(n) {
  showcarousel(carouselIndex = n);
  console.log(n);
}

function showcarousel(n) {
  let i;
  let carousel = document.getElementsByClassName("carousel");
  let dots = document.getElementsByClassName("progression-line");
  if (n > carousel.length) {carouselIndex = 1}
  if (n < 1) {carouselIndex = carousel.length}
  for (i = 0; i < carousel.length; i++) {
    carousel[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  carousel[carouselIndex-1].style.display = "block";
  dots[carouselIndex-1].className += " active";
}
