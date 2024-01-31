// navbar
function showNav() {
  var navBar = document.getElementById("navBar");
  var body = document.body;
  var navToggleIcon = document.getElementById("navToggleIcon");

  navBar.classList.toggle("show_nav");
  body.classList.toggle("nav_mobile_scroll");
  navToggleIcon.src = navBar.classList.contains("show_nav") ?
    "./assets/images/common/cross.svg" :
    "./assets/images/common/nav-toggle.svg";
}

// video
// document.getElementById("playButton").addEventListener("click", function () {
//   var video = document.getElementById("myVideo");

//   if (video.paused) {
//     video.play();
//     this.style.display = "none";
//   } else {
//     video.pause();
//     this.style.display = "block";
//   }
// });

// document.getElementById("myVideo").addEventListener("click", function () {
//   var playButton = document.getElementById("playButton");

//   if (this.paused) {
//     this.play();
//     playButton.style.display = "none";
//   } else {
//     this.pause();
//     playButton.style.display = "block";
//   }
// });