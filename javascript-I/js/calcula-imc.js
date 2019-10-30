const alturaLimite = 2.00;
const pesoLimite = 1000;
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
  return peso = peso >= 0 && peso <= pesoLimite ? true : false;
}

function validaAltura(altura) {
  return altura = altura >= 0 && altura <= alturaLimite ? true : false;
}
