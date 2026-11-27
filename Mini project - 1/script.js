
function calculateResult() {
    var name = document.getElementById("name").value;

    var english = Number(document.getElementById("english").value);
    var maths = Number(document.getElementById("maths").value);
    var science = Number(document.getElementById("science").value);
    var computer = Number(document.getElementById("computer").value);
    var dbms = Number(document.getElementById("dbms").value);

    var result = document.getElementById("result");

    if (name == "" || document.getElementById("english").value == "" ||
        document.getElementById("maths").value == "" ||
        document.getElementById("science").value == "" ||
        document.getElementById("computer").value == "" ||
        document.getElementById("dbms").value == "") {
        result.innerHTML = "Please fill all fields";
        return;
    }

    if (english < 0 || english > 100 || maths < 0 || maths > 100 ||
        science < 0 || science > 100 || computer < 0 || computer > 100 ||
        dbms < 0 || dbms > 100) {
        result.innerHTML = "Enter marks between 0 and 100";
        return;
    }

    var total = english + maths + science + computer + dbms;
    var percentage = total / 5;

    var grade;

    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    if (english >= 33 && maths >= 33 && science >= 33 &&
        computer >= 33 && dbms >= 33) {
        result.innerHTML = "Name: " + name +
            "<br>Total: " + total + "/500" +
            "<br>Percentage: " + percentage + "%" +
            "<br>Grade: " + grade +
            "<br>Status: Pass";
    } else {
        result.innerHTML = "Name: " + name +
            "<br>Total: " + total + "/500" +
            "<br>Percentage: " + percentage + "%" +
            "<br>Grade: " + grade +
            "<br>Status: Fail";
    }
}
