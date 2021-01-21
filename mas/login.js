var validAccounts = { "testeCliente@gmail.com" : "teste1234", "testePt@gmail.com" : "teste1234" };

/* Função de validação  */
function validate() {
    var _mail= document.getElementById("inputEmail").value;
    var _password = document.getElementById("inputPassword").value;

    for(var acc in validAccounts) {
        var password = validAccounts[acc];
        if (_mail == acc && _password == password) return true;
    }

    alert("Email e/ou palavra-passe errados!");
    return false;
}
