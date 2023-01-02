
// fetch('https://jsonplaceholder.typicode.com/todos/5', {
//     method: 'PUT',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify({
//         userId: 1,
//         id: 5,
//         title: 'hello fetch api',
//         completed: false
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    //         'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://binance43.p.rapidapi.com/ticker/24hr', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));




    var ctx1 = document.getElementById('myChart1').getContext('2d');
    var chart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [{
                label: 'Ganancias',
                backgroundColor: '#42a5f5',
                borderColor: 'gray',
                data: [7, 8, 5, 2, 8, 10, 7,-7,4,9,-8,5]
            }		
            ]},
        options: {}
    });


    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
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


