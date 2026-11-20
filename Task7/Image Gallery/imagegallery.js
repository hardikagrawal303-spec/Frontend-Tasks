
var main = document.getElementById("main");

var photos = document.getElementsByClassName("photo");

for (var i = 0; i < photos.length; i++) {

    photos[i].addEventListener("click", function() {

        main.src = this.src;

    });

}
