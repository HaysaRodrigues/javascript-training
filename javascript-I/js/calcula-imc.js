var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"),
    tdPeso = paciente.querySelector(".info-peso"),
    tdAltura = paciente.querySelector(".info-altura"),
    tdImc = paciente.querySelector(".info-imc");
    
var paciente = pacientes[i],
    peso = tdPeso.textContent,
    altura = tdAltura.textContent,

    pesoEhValido = validaPeso(peso),
    alturaEhValida = validaAltura(altura);

for (var i = 0; i < pacientes.length; i++) {

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
