var botaoAdicionar = document.querySelector("#buscar-pacientes"),
    erroAjax = document.querySelector("#erro-ajax");

botaoAdicionar.addEventListener("click", function() {
    var request = new XMLHttpRequest();

    request.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    request.addEventListener("load", function() {

        if (request.status === 200) {
            erroAjax.classList.add("invisivel");
            var resposta = request.responseText,
                pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    request.send();
});
