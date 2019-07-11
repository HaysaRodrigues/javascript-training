var pacients = document.querySelectorAll(".patient");

for (var i = 0; i < pacients.length; i++) {

    var patient = pacients[i];

    var tdPeso = patient.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = patient.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = patient.querySelector(".info-imc");

    var pesoIsValid = true;
    var alturaIsValid = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoIsValid = false;
        tdImc.textContent = "Peso inválido";
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaIsValid = false;
        tdImc.textContent = "Altura inválida";
    }

  if (alturaIsValid && pesoIsValid) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}