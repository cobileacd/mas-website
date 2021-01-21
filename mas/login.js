var validAccounts = { "testeCliente@gmail.com" : "teste1234", "testePt@gmail.com" : "teste1234" };

/* Função de validação  */
function validate() {
    var _mail= document.getElementById("inputEmail").value;
    var _password = document.getElementById("inputPassword").value;

    for(var acc in validAccounts) {
        var password = validAccounts[acc];
        if (_mail == acc && _password == password) {
            displayError("accError", false);
            return true;
        }
    }

    displayError("accError", true);
    return false;
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
