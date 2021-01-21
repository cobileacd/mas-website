/* Função de validação  */
function validate() {
    var retVal = true; /* Vamos partir do princípio de que o formulário está válido ... */

    var _idade = document.getElementById("age").value;
    if (parseInt(_idade.trim()) >= 16 && parseInt(_idade.trim()) <= 90) {
        displayError("ageError", false);
    } else {
        retVal = false;
        displayError("ageError", true);
    }

    var _altura = document.getElementById("altura").value;
    if (parseInt(_altura.trim()) < 140 || parseInt(_altura.trim()) > 230) {
        retVal = false;
        displayError("heightError", true);
    } else {
        displayError("heightError", false);
    }

    var _peso = document.getElementById("peso").value;
    if (parseInt(_peso.trim()) < 30 || parseInt(_peso.trim()) > 200) {
        retVal = false;
        displayError("weightError", true);
    } else {
        displayError("weightError", false);
    }

    var _sex = document.getElementById("selectType").selectedIndex;
    if (_sex == 0) {
        retVal = false;
        displayError("selectTypeError", true);
    } else {
        displayError("selectTypeError", false);
    }

    if(retVal) { $("form").attr("action", "client_dash.html"); }

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
