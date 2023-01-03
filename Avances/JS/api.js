endpoint = 'live'
access_key = '043f8200094733bafff499fd2cbd6720';

function api_conect() {
    const options = {
        method: 'GET',
    };
    fetch('http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key, options)
        .then(response => response.json())
        .then(response => {
            arrays_data(response.rates)
        })
        .catch(err => console.error(err));
}

function arrays_data(objeto1) {
    // Arreglo creado con base al nombre de la moneda
    var Crypto_symbol = Object.keys(objeto1);
    // Arreglo creado con base al valor de cada moneda
    var Value_rates = Object.keys(objeto1).map(function (_) { return objeto1[_]; });
    //Arreglo creado a partir de una lista entre el nombre y el valor de cada moneda
    var lista = Object.entries(objeto1)
    //Array de objetos donde se enumera cada moneda y su valor 
    var datos = [];
    for (var i in Crypto_symbol) {
        datos.push({
            "Symbol": Crypto_symbol[i],
            "Rates": Value_rates[i]
        });
    }
    // $('#result').html(JSON.stringify(datos));

    //varias Formas de entregar el arreglo
    console.log(datos)
    console.log(lista);

    //Busca los 4 más altos y guarda la información en arreglos
    var top4 = datos.sort(function (a, b) { return b.Rates - a.Rates; }).slice(0, 4);
    arrays_symbol_url(top4)
}

//Esta función sirve para traer la información del endpoint "list" donde se puede encontrar la información de cada crypto
//Tales como el nombre completo y la URL
function arrays_symbol_url(array_top) {
    const options = {
        method: 'GET',
    };
    fetch('http://api.coinlayer.com/api/' + 'list' + '?access_key=' + access_key, options)
        .then(response => response.json())
        .then(response => {
            objeto2 = response.crypto;

            array_top.forEach((element, j) => {
                document.getElementById(`Crypto${j + 1}`, element).innerHTML = `${objeto2[element.Symbol].name}`;
                document.getElementById(`value${j + 1}`, element).innerHTML = `$${element.Rates}`;
                document.getElementById(`img${j + 1}`, element).src = `${objeto2[element.Symbol].icon_url}`
            });
            list_select(objeto2)
        })
        .catch(err => console.error(err));
}


//  A partir de acá se hacen peticiones a la API para crear los valores del contenedor de busqueda
//###################################
//###################################


function list_select(objeto2) {
    $(document).ready(function () {
        var name_full = Object.keys(objeto2).map(function (_) { return objeto2[_]; });
        var name_list = name_full.map(function (element) { return element.name_full })

        var select = $('<select>').prop('id', 'Crypto_list').prop('name', 'Crypto');
        $(name_list).each(function () {
            select.append($("<option>")
                .prop('value', this)
                .text(this.charAt(0).toUpperCase() + this.slice(1)));
        });

        var label = $("<label>").prop('for', 'Crypto')
            .text("Seleccione una Crypto Moneda: ");
        var br = $("<br>");
        $('#container').append(label).append(select).append(br);
    });
}

function buscador_label() {

// Busca los valores para colocar en las etiquetas SPAM y rellenar la información de valores minimos,actua y maximo en función de la crypto seleccionada
    const options = {
        method: 'GET',
    };
    fetch('http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key + '&expand=1', options)
        .then(response => response.json())
        .then(response => {
            objeto3 = response.rates;
            var new_title = document.getElementById("Crypto_list").value;
            exre = /\((.+)\)/
            const match = new_title.match(exre);
            // console.log(match[1])
            document.getElementById("high").innerHTML = `$${objeto3[match[1]].high}`
            document.getElementById("low").innerHTML = `$${objeto3[match[1]].low}`
            document.getElementById("rates").innerHTML = `$${objeto3[match[1]].rate}`
            // Time_Frame_Data(match)

        })
        .catch(err => console.error(err));
}

// function Time_Frame_Data(Symbol){
// // Realiaza una petición a la API para proceder con la consulta de los datos historicos
// var Fecha_Inicial = document.getElementById("dateI").value;
// var Fecha_Final = document.getElementById("dateF").value;
// const options = {
//     method: 'GET',
// };
// fetch(`http://api.coinlayer.com/api/timeframe?access_key=${access_key}&start_date=${Fecha_Inicial}&end_date=${Fecha_Final}&symbols=${Symbol[1]}`, options)
//     .then(response => response.json())
//     .then(response => {
//         objeto4 = response.rates;
//         console.log(`http://api.coinlayer.com/api/timeframe?access_key=${access_key}&start_date=${Fecha_Inicial}&end_date=${Fecha_Final}&symbols=${Symbol[1]}`)
// console.log(objeto4)
//     })
//     .catch(err => console.error(err));

// }

api_conect()
