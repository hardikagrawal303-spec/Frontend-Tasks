
var input = document.getElementById("task");
var list = document.getElementById("list");

function addTask() {

    var value = input.value;

    if (value == "") {
        alert("Enter a task");
    }
    else {

        var li = document.createElement("li");

        var check = document.createElement("input");
        check.type = "checkbox";

        var span = document.createElement("span");
        span.textContent = value;

        check.onclick = function() {
            span.classList.toggle("done");
        };

        var up = document.createElement("button");
        up.textContent = "Up";

        up.onclick = function() {
            if (li.previousElementSibling) {
                list.insertBefore(li, li.previousElementSibling);
            }
        };

        var down = document.createElement("button");
        down.textContent = "Down";

        down.onclick = function() {
            if (li.nextElementSibling) {
                list.insertBefore(li.nextElementSibling, li);
            }
        };

        var remove = document.createElement("button");
        remove.textContent = "Remove";

        remove.onclick = function() {
            li.remove();
        };

        li.appendChild(check);
        li.appendChild(span);
        li.appendChild(up);
        li.appendChild(down);
        li.appendChild(remove);

        list.appendChild(li);

        input.value = "";
    }
}
