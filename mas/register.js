/* Função de validação  */
function validate() {
    var retVal = true; /* Vamos partir do princípio de que o formulário está válido ... */

    var _fname = document.getElementById("firstName").value;
    if (_fname.trim().length < 3) {
        retVal = false;
        displayError("fnameError", true);
    } else {
        displayError("fnameError", false);
    }

    var _lname = document.getElementById("lastName").value;
    if (_lname.trim().length < 3) {
        retVal = false;
        displayError("lnameError", true);
    } else {
        displayError("lnameError", false);
    }

    var _password = document.getElementById("inputPassword").value;
    if (_password.trim().length < 6) {
        retVal = false;
        displayError("passwordError", true);
    } else {
        displayError("passwordError", false);
    }

    var _type = document.getElementById("selectType").selectedIndex;
    if (_type == 0) {
        retVal = false;
        displayError("selectTypeError", true);
    } else {
        displayError("selectTypeError", false);
    }

    return retVal;
}

function displayError(errorName, display) {
    if (display) {
        document.getElementById(errorName).classList.remove("d-none");
        document.getElementById(errorName).classList.add("d-block");
    } else {
        document.getElementById(errorName).classList.remove("d-block");
        document.getElementById(errorName).classList.add("d-none");
    }
}
