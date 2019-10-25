var campoFiltro = document.querySelector("#filtrar-tabela"),
    pacientes = document.querySelectorAll(".paciente");

campoFiltro.addEventListener("input", function() {
    var tdNome = paciente.querySelector(".info-nome");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i],
                nome = tdNome.textContent,
                expressao = new RegExp(this.value, "i");

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
