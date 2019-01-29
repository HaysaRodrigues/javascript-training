//add event listener has two parameters, the type of event and the function, 
//which is the block of code that says what is gonna happens after the event

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    // o prevent default evita que a página regarregue e vc perca os dados
    event.preventDefault();

    // o create element cria uma novo component no DOM
    var tr = document.createElement('tr');
    campos.forEach(function(campo){
      var td = document.createElement('td');
      td.textContent = campo.value;
      tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = '1';
    campos[2].value = '0';

    campos[0].focus();


});