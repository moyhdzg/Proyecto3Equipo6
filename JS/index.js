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


    var ctx = document.getElementById('crypto-Chart').getContext('2d');
    var chart2 = new Chart(ctx, {
        //type: 'bar',
        type: 'line', /* anteriormente tenia bar revisar si les parece bien utilizar esta*/
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [{
                label: 'Ingresos',
                backgroundColor: '#42a5f5',
                borderColor: 'gray',
                data: [7, 8, 5, 2, 8, 10, 7,-7,4,9,-8,5]
            },{
                label: 'Gastos',
                backgroundColor: '#ffab91',
                borderColor: 'yellow',
                data: [5, -8, 10, 3,-7,6,8,-2,-6,9,-7,2]
            }		
            ]},
        options: {responsive: true}
    });


