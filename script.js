window.onload = function() {
    setTimeout(function() {
        document.getElementById("dialog-box").style.display = "block";
    }, 1000);
    document.getElementById("background-music").play();

    var buttonSound = document.getElementById("button-sound");
    var buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            buttonSound.play();
        });
    });
};
