function showNav() {
  var navBar = document.getElementById("navBar");
  var body = document.body;
  var navToggleIcon = document.getElementById("navToggleIcon");

  navBar.classList.toggle("showNav");
  body.classList.toggle("nav_mobile_scroll");
  navToggleIcon.src = navBar.classList.contains("showNav")
    ? "./assets/images/common/Cross.svg"
    : "./assets/images/common/nav-toggle.svg";
}
