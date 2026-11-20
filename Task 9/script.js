
var btn = document.getElementById("fetch");
var result = document.getElementById("result");

btn.addEventListener("click", function() {

    result.textContent = "Loading data...";

    var promise = new Promise(function(resolve, reject) {

        setTimeout(function() {

            resolve("Data fetched successfully from server!");

        }, 3000);

    });

    promise.then(function(data) {

        result.textContent = data;

    });

});
