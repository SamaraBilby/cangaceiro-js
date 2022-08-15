
/*Puxando campos de input*/
let campos = [
    document.querySelector('#data'),
    document.querySelector("#valor"),
    document.querySelector('#quantidade')
]

console.log(campos);

/*Buscando tbody, pois ele receberá a tr que vamos construir*/

let tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){
    //cancelando a submissão do formulário

    event.preventDefault();

    /*alert('oi');*/
    /* criando o novo elemento tr */
    let tr = document.createElement('tr');

    /* a função forEach que nos permite interar em cada um dos elemesntos */
    campos.forEach(function(campo){
        //cria uma td sem informação
        let td = document.createElement('td');
        
        //atribui o valor do campo à td
        td.textContent = campo.value;

        //adiciona a td na tr
        tr.appendChild(td);
    });
    // td que armazenará o volume da negociação
    let tdVolume = document.createElement('td');

    // as posições 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente

    tdVolume.textContent = campos[1].value * campos[2].value;

    // adicionando a td que faltava à tr

    tr.appendChild(tdVolume);
    tbody.appendChild(tr)

    //limpa o campo da data
    campos[0].value = '';

    //limpa o campo da quantidade
    campos[1].value = '';

    //limpa o campo da valor
    campos[2].value = '';

    //lfoca no campo da data
    campos[0].focus() = '';

});

