
var input = document.getElementById("task");
var list = document.getElementById("list");
var add = document.getElementById("add");

add.addEventListener("click", function() {

    var value = input.value;

    if (value == "") {
        alert("Enter a task");
    }
    else {
        var li = document.createElement("li");
        li.textContent = value;

        var btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.className = "remove";

        btn.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(btn);
        list.appendChild(li);

        input.value = "";
    }
});
