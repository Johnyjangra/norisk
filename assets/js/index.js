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
  document.addEventListener("DOMContentLoaded", function () {
    var backToTopBtn = document.getElementById("back_to_top");
    window.addEventListener("scroll", function () {
      // Show button when user scrolls down 20px from the top
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
    // Scroll to the top when the button is clicked
    backToTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
  });


  // ========== BACK TO TOP
$(document).ready(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $("#scroll").fadeIn();
      } else {
          $("#scroll").fadeOut();
      }
  });
  $("#scroll").click(function () {
      $("html, body").animate({
              scrollTop: 0,
          },
          40
      );
      return false;
  });
});