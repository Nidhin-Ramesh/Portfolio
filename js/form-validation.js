


function validateform() {
    var name = document.forms["submit-to-google-sheet"]["Name"].value;
    var email = document.forms["submit-to-google-sheet"]["Email"].value;
    name = name.trim();
    email = email.trim();

    if (name === null || name === "") {
        document.getElementById("namelock").innerHTML = "Name cannot be empty";
        return false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        document.getElementById("namelock").innerHTML = "Name can only contain letters and spaces";
        return false;
    }
    else {
        document.getElementById("namelock").innerHTML = "";

    }
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("maillock").innerHTML = "Eneter valid mail id";
        return false;
    } else {
        document.getElementById("maillock").innerHTML = "";

    }
    return true;
}



document.addEventListener("DOMContentLoaded", function () {
    var textInput = document.getElementById("no-number");

    textInput.addEventListener("keydown", function (event) {
        if (event.key >= "0" && event.key <= "9") {
            event.preventDefault();
        }
    });
});
