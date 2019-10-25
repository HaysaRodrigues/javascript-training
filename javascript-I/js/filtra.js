var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i],
                tdNome = paciente.querySelector(".info-nome"),
                nome = tdNome.textContent,
                expressao = applyRegex(this.value);

            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});

function applyRegex(value) {
  var expresion, caseSensitiveCheck = "i";
  expresion = new RegExp(value, caseSensitiveCheck)
  return expresion;
}