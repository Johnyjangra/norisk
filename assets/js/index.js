// navbar
function showNav() {
  var navBar = document.getElementById("navBar");
  var body = document.body;
  var navToggleIcon = document.getElementById("navToggleIcon");

  navBar.classList.toggle("show_nav");
  body.classList.toggle("nav_mobile_scroll");
  navToggleIcon.src = navBar.classList.contains("show_nav") ?
    "./assets/images/common/nav-cross.svg" :
    "./assets/images/common/nav-toggle.svg";
}

// back-to-top
// ************ Back to Top ************
const backToTopButton = document.getElementById('back_to_top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});