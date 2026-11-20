var board = document.getElementById("board");

for (var i = 0; i < 8; i++) {

    for (var j = 0; j < 8; j++) {

        var box = document.createElement("div");

        box.className = "box";

        if ((i + j) % 2 == 0) {
            box.classList.add("white");
        }
        else {
            box.classList.add("black");
        }

        board.appendChild(box);
    }
}
