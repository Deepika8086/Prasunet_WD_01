// JavaScript to change navbar style on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.backgroundColor = "#555";
  } else {
    navbar.style.backgroundColor = "#333";
  }
}
