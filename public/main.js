//======================================//
// CAROUSEL //
//======================================//
let carouselIndex = 1;
showcarousel(slideIndex);

// dot controls
function currentSlide(n) {
  showcarousel(slideIndex = n);
  console.log("clicked");
}

function showcarousel(n) {
  let i;
  let carousel = document.getElementsByClassName("carousel");
  let dots = document.getElementsByClassName("dot");
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
