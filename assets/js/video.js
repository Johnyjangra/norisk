// VIDEO JS CODE
document.getElementById("playButton").addEventListener("click", function () {
    var video = document.getElementById("myVideo");

    if (video.paused) {
        video.play();
        this.style.display = "none";
    } else {
        video.pause();
        this.style.display = "block";
    }
});

document.getElementById("myVideo").addEventListener("click", function () {
    var playButton = document.getElementById("playButton");

    if (this.paused) {
        this.play();
        playButton.style.display = "none";
    } else {
        this.pause();
        playButton.style.display = "block";
    }
});