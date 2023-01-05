// var ctx1 = document.getElementById('myChart1').getContext('2d');
// var chart1 = new Chart(ctx1, {
//     type: 'line',
//     data: {
//         labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
//         datasets: [{
//             label: 'Ganancias',
//             backgroundColor: '#42a5f5',
//             borderColor: 'gray',
//             data: [7, 8, 5, 2, 8, 10, 7,-7,4,9,-8,5]
//         }
//         ]},
//     options: {}
// });



import {highestAndLowestPrice, dataChart} from './api.js'
var ctx = document.getElementById("myChart").getContext("2d");

highestAndLowestPrice().then(res => {
  let criptSymbols = res[1]
  let criptoPrices = res[0]
  let labelsCriptoName = []
  let labelsCriptoRate = []
  let labelsCriptoHighestPrice = []
  let labelsCriptoLowestprice = []
  for (let index = 0; index < criptSymbols.length + 1; index++) {
    labelsCriptoName.push(criptSymbols = res[1][index]['Symbol'])
    labelsCriptoRate.push(criptoPrices = res[0][index]['rate'])
    labelsCriptoHighestPrice.push(criptoPrices = res[0][index]['high'])
    labelsCriptoLowestprice.push(criptoPrices = res[0][index]['low'])
  }
  var chart2 = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labelsCriptoName,
      datasets: [
        {
          label: "Precion maximo",
          backgroundColor: "#42a5f5",
          borderColor: "gray",
          data: labelsCriptoHighestPrice,
        },
        {
          label: "Precio mas bajo",
          backgroundColor: "#ffab91",
          borderColor: "yellow",
          data: labelsCriptoLowestprice,
        },
        {
          label: "Precio actual",
          backgroundColor: "#33C7FF",
          borderColor: "green",
          data: labelsCriptoLowestprice,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
  console.log(criptSymbols)
  console.log(res[0])
  console.log(labelsCriptoRate)
  console.log(labelsCriptoName)
})
// console.log("desde el nuevo holaaaa")
// //let prueba2 = JSON.parse(prueba)

// for (let index = 0; index < 4; index++) { [0][0]
//     console.log("Hola mundo");
    
//}


//console.log(hola)
