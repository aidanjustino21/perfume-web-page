var modalBoxes = document.getElementsByClassName("modal");
var image = document.getElementsByClassName("image");
var descBox = document.getElementsByClassName("mini-desc");
var scentBox = document.getElementsByClassName("scent-box");
var closeButton = document.getElementsByClassName("close");


window.onclick = function(event) {
    for (var i = 0; i < modalBoxes.length; i++) {
        if (event.target == modalBoxes[i] || event.target == closeButton[i]) {
            modalBoxes[i].style.display = "none";
            console.log(i);
        }
        else if (event.target == image[i] || event.target == scentBox[i]) {
            modalBoxes[i].style.display = "block";
            console.log(i);
        }
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className == "topnav") {
        x.className += " responsive";
    }

    else {
        x.className = "topnav";
    }
}